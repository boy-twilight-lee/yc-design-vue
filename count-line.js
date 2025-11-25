import fs from 'fs';
import path from 'path';

// ================= 配置区域 =================
const CONFIG = {
  // 包含的文件后缀 (常规前端代码)
  targetExtensions: new Set([
    '.js',
    '.jsx',
    '.ts',
    '.tsx',
    '.mjs', // 逻辑
    '.vue',
    '.svelte',
    '.html', // 视图
    '.css',
    '.less',
    '.scss',
    '.sass',
    '.styl', // 样式
    '.json', // 配置/数据
  ]),
  // 需要忽略的文件夹
  excludeDirs: new Set([
    'node_modules',
    '.git',
    '.svn',
    '.hg',
    'dist',
    'build',
    'out',
    'coverage',
    '.idea',
    '.vscode',
    '.next',
    '.nuxt',
    'public', // 通常是静态资源，看需求决定是否排除
    'assets', // 静态资源
  ]),
};

// ================= 核心逻辑 =================

/**
 * 计算单个文件的行数 (内存优化版)
 * @param {string} filePath
 */
async function countFileLines(filePath) {
  try {
    // 读取文件内容，不进行 split 分割，节省内存
    const content = await fs.promises.readFile(filePath, 'utf-8');
    if (content.length === 0) return 0;

    let lines = 1;
    for (let i = 0; i < content.length; i++) {
      if (content[i] === '\n') lines++;
    }
    // 如果文件最后是一个换行符，通常不算作新的一行代码，视具体定义而定
    // 这里采用常规逻辑：物理行数
    return lines;
  } catch (e) {
    console.warn(`无法读取文件: ${filePath}`);
    return 0;
  }
}

/**
 * 格式化数字 (例如: 1,234)
 */
function formatNum(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * 递归遍历目录
 */
async function scanDirectory(currentPath, result) {
  try {
    // withFileTypes: true 可以直接获取文件类型，省去 stat 调用，大幅提升性能
    const entries = await fs.promises.readdir(currentPath, {
      withFileTypes: true,
    });

    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name);

      if (entry.isDirectory()) {
        // 如果不在忽略列表中，递归处理
        if (!CONFIG.excludeDirs.has(entry.name)) {
          await scanDirectory(fullPath, result);
        }
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();

        if (CONFIG.targetExtensions.has(ext)) {
          const lines = await countFileLines(fullPath);

          // 更新总计
          result.totalLines += lines;
          result.totalFiles += 1;

          // 更新分类详情
          if (!result.details[ext]) {
            result.details[ext] = { files: 0, lines: 0 };
          }
          result.details[ext].files += 1;
          result.details[ext].lines += lines;
        }
      }
    }
  } catch (error) {
    console.error(`扫描目录出错: ${currentPath}`, error.message);
  }
}

// ================= 主程序 =================

async function main() {
  const targetDir = process.argv[2] || './src'; // 默认扫描 ./src
  const absolutePath = path.resolve(targetDir);

  console.log(`\n🚀 正在扫描代码目录: ${absolutePath} ...\n`);

  const startTime = Date.now();
  const result = {
    totalLines: 0,
    totalFiles: 0,
    details: {}, // 动态生成，不预设 key
  };

  await scanDirectory(absolutePath, result);
  const endTime = Date.now();

  // ================= 打印报表 =================
  console.log('=======================================================');
  console.log(
    `📊 统计结果 (耗时: ${((endTime - startTime) / 1000).toFixed(2)}s)`
  );
  console.log('=======================================================');

  // 将结果转换为数组并按代码行数降序排序
  const tableData = Object.entries(result.details)
    .map(([ext, info]) => ({
      文件类型: ext,
      文件数量: info.files,
      代码行数: info.lines,
      占比: ((info.lines / result.totalLines) * 100).toFixed(1) + '%',
    }))
    .sort((a, b) => b['代码行数'] - a['代码行数']);

  if (tableData.length > 0) {
    // 自定义表格打印，比 console.table 更可控，且带千分位
    console.log(
      `${'文件类型'.padEnd(10)} | ${'文件数量'.padStart(10)} | ${'代码行数'.padStart(12)} | ${'占比'.padStart(8)}`
    );
    console.log('-'.repeat(55));

    tableData.forEach((row) => {
      console.log(
        `${row['文件类型'].padEnd(10)} | ` +
          `${formatNum(row['文件数量']).padStart(10)} | ` +
          `${formatNum(row['代码行数']).padStart(12)} | ` +
          `${row['占比'].padStart(8)}`
      );
    });
  } else {
    console.log('⚠️  未找到符合条件的代码文件。');
  }

  console.log('=======================================================');
  console.log(`📂 总文件数:  ${formatNum(result.totalFiles)}`);
  console.log(`📝 代码总行数: ${formatNum(result.totalLines)}`);
  console.log('=======================================================\n');
}

main().catch((err) => console.error('程序异常:', err));
