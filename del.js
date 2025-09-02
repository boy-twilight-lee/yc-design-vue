// 引入Node.js的核心模块
import fs from 'fs';
import path from 'path';

/**
 * 递归删除指定目录下所有名为 "index.less" 的文件
 * @param {string} dirPath - 要开始搜索的文件夹路径
 */
function deleteIndexLessFiles(dirPath) {
  // 1. 检查路径是否存在
  if (!fs.existsSync(dirPath)) {
    console.error(`错误: 目录 "${dirPath}" 不存在。`);
    return;
  }

  // 2. 读取目录中的所有文件和子目录
  const entries = fs.readdirSync(dirPath);

  // 3. 遍历每个条目
  for (const entry of entries) {
    // 构建完整的路径
    const fullPath = path.join(dirPath, entry);

    // 获取路径的状态信息（是文件还是目录）
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // 如果是子目录，则递归调用自身
      deleteIndexLessFiles(fullPath);
    } else if (path.basename(fullPath) === 'index.less') {
      // 如果是文件且文件名为 "index.less"，则删除它
      try {
        fs.unlinkSync(fullPath);
        console.log(`已删除: ${fullPath}`);
      } catch (err) {
        console.error(`删除文件失败: ${fullPath}`, err);
      }
    }
  }
}

// --- 使用示例 ---

const targetDirectory = 'D:/desktop/yc-design-vue/src/components';

// 调用函数开始执行删除操作
try {
  console.log(
    `开始在 "${targetDirectory}" 目录中搜索并删除 index.less 文件...`
  );
  deleteIndexLessFiles(path.resolve(targetDirectory)); // 使用 path.resolve 确保是绝对路径
  console.log('操作完成！');
} catch (err) {
  console.error('执行过程中发生错误:', err);
}
