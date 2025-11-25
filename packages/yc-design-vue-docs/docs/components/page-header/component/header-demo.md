### 组合示例

页头的完整示例。

<div class="cell-demo vp-raw">
  <div :style="{ background: 'var(--color-fill-2)', padding: '28px' }">
    <yc-page-header
      :style="{ background: 'var(--color-bg-2)' }"
      title="ArcoDesign">
      <template #breadcrumb>
        <yc-breadcrumb>
          <yc-breadcrumb-item>Home</yc-breadcrumb-item>
          <yc-breadcrumb-item>Channel</yc-breadcrumb-item>
          <yc-breadcrumb-item>News</yc-breadcrumb-item>
        </yc-breadcrumb>
      </template>
      <template #subtitle>
        <yc-space>
          <span>ArcoDesign Vue 2.0</span>
          <yc-tag
            color="red"
            size="small"
            >Default</yc-tag
          >
        </yc-space>
      </template>
      <template #extra>
        <yc-space>
          <yc-button>Cancel</yc-button>
          <yc-button type="primary">Save</yc-button>
        </yc-space>
      </template>
      <p>For other uses, see Design</p>
      <p>
        A design is a plan or specification for the construction of an object or
        system or for the implementation of an activity or process, or the
        result of that plan or specification in the form of a prototype, product
        or process. The verb to design expresses the process of developing a
        design. In some cases, the direct construction of an object without an
        explicit prior plan (such as in craftwork, some engineering, coding, and
        graphic design) may also be considered to be a design activity. The
        design usually has to satisfy certain goals and constraints, may take
        into account aesthetic, functional, economic, or socio-political
        considerations, and is expected to interact with a certain environment.
        Major examples of designs include architectural blueprints,engineering
        drawings, business processes, circuit diagrams, and sewing
        patterns.Major examples of designs include architectural
        blueprints,engineering drawings, business processes, circuit diagrams,
        and sewing patterns.
      </p>
    </yc-page-header>
  </div>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <div :style="{ background: 'var(--color-fill-2)', padding: '28px' }">
    <yc-page-header
      :style="{ background: 'var(--color-bg-2)' }"
      title="ArcoDesign">
      <template #breadcrumb>
        <yc-breadcrumb>
          <yc-breadcrumb-item>Home</yc-breadcrumb-item>
          <yc-breadcrumb-item>Channel</yc-breadcrumb-item>
          <yc-breadcrumb-item>News</yc-breadcrumb-item>
        </yc-breadcrumb>
      </template>
      <template #subtitle>
        <yc-space>
          <span>ArcoDesign Vue 2.0</span>
          <yc-tag
            color="red"
            size="small"
            >Default</yc-tag
          >
        </yc-space>
      </template>
      <template #extra>
        <yc-space>
          <yc-button>Cancel</yc-button>
          <yc-button type="primary">Save</yc-button>
        </yc-space>
      </template>
      <p>For other uses, see Design</p>
      <p>
        A design is a plan or specification for the construction of an object or
        system or for the implementation of an activity or process, or the
        result of that plan or specification in the form of a prototype, product
        or process. The verb to design expresses the process of developing a
        design. In some cases, the direct construction of an object without an
        explicit prior plan (such as in craftwork, some engineering, coding, and
        graphic design) may also be considered to be a design activity. The
        design usually has to satisfy certain goals and constraints, may take
        into account aesthetic, functional, economic, or socio-political
        considerations, and is expected to interact with a certain environment.
        Major examples of designs include architectural blueprints,engineering
        drawings, business processes, circuit diagrams, and sewing
        patterns.Major examples of designs include architectural
        blueprints,engineering drawings, business processes, circuit diagrams,
        and sewing patterns.
      </p>
    </yc-page-header>
  </div>
</template>
```

</details>
