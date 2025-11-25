### 组合使用

排版组件用于展示标题、段落、文本内容，这里展示了排版的组合使用。

<div class="cell-demo vp-raw">
 <yc-typography :style="{ marginTop: '-40px' }">
    <yc-typography-title> Design system </yc-typography-title>
    <yc-typography-paragraph>
      A design is a plan or specification for the construction of an object or
      system or for the implementation of an activity or process, or the result
      of that plan or specification in the form of a prototype, product or
      process. The verb to design expresses the process of developing a design.
    </yc-typography-paragraph>
    <yc-typography-paragraph>
      In some cases, the direct construction of an object without an explicit
      prior plan (such as in craftwork, some engineering, coding, and graphic
      design) may also be considered
      <yc-typography-text bold>to be a design activity.</yc-typography-text>
    </yc-typography-paragraph>
    <yc-typography-title :heading="2">ArcoDesign</yc-typography-title>
    <yc-typography-paragraph>
      The ArcoDesign component library defines a set of default particle
      variables, and a custom theme is to
      <yc-typography-text mark>customize</yc-typography-text> and
      <yc-typography-text underline>overwrite</yc-typography-text> this variable
      list.
    </yc-typography-paragraph>
    <yc-typography-paragraph blockquote>
      A design is a plan or specification for the construction of an object or
      system or for the implementation of an activity or process, or the result
      of that plan or specification in the form of a
      <yc-typography-text code>prototype</yc-typography-text>,
      <yc-typography-text code>product</yc-typography-text> or
      <yc-typography-text code>process</yc-typography-text>. The verb to design
      expresses the process of developing a design.
    </yc-typography-paragraph>
    <yc-typography-paragraph
      mark
      underline
      delete
      >A design is a plan or specification for the construction of an object or
      system or for the implementation of an activity or
      process.</yc-typography-paragraph
    >
    <yc-typography-paragraph>
      <ul>
        <li>
          Architectural blueprints
          <ul>
            <li>Architectural blueprints</li>
          </ul>
        </li>
        <li>Engineering drawings</li>
        <li>Business processes</li>
      </ul>
    </yc-typography-paragraph>
    <yc-typography-paragraph>
      <ol>
        <li>Architectural blueprints</li>
        <li>Engineering drawings</li>
        <li>Business processes</li>
      </ol>
    </yc-typography-paragraph>
  </yc-typography>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-typography :style="{ marginTop: '-40px' }">
    <yc-typography-title> Design system </yc-typography-title>
    <yc-typography-paragraph>
      A design is a plan or specification for the construction of an object or
      system or for the implementation of an activity or process, or the result
      of that plan or specification in the form of a prototype, product or
      process. The verb to design expresses the process of developing a design.
    </yc-typography-paragraph>
    <yc-typography-paragraph>
      In some cases, the direct construction of an object without an explicit
      prior plan (such as in craftwork, some engineering, coding, and graphic
      design) may also be considered
      <yc-typography-text bold>to be a design activity.</yc-typography-text>
    </yc-typography-paragraph>
    <yc-typography-title :heading="2">ArcoDesign</yc-typography-title>
    <yc-typography-paragraph>
      The ArcoDesign component library defines a set of default particle
      variables, and a custom theme is to
      <yc-typography-text mark>customize</yc-typography-text> and
      <yc-typography-text underline>overwrite</yc-typography-text> this variable
      list.
    </yc-typography-paragraph>
    <yc-typography-paragraph blockquote>
      A design is a plan or specification for the construction of an object or
      system or for the implementation of an activity or process, or the result
      of that plan or specification in the form of a
      <yc-typography-text code>prototype</yc-typography-text>,
      <yc-typography-text code>product</yc-typography-text> or
      <yc-typography-text code>process</yc-typography-text>. The verb to design
      expresses the process of developing a design.
    </yc-typography-paragraph>
    <yc-typography-paragraph
      mark
      underline
      delete
      >A design is a plan or specification for the construction of an object or
      system or for the implementation of an activity or
      process.</yc-typography-paragraph
    >
    <yc-typography-paragraph>
      <ul>
        <li>
          Architectural blueprints
          <ul>
            <li>Architectural blueprints</li>
          </ul>
        </li>
        <li>Engineering drawings</li>
        <li>Business processes</li>
      </ul>
    </yc-typography-paragraph>
    <yc-typography-paragraph>
      <ol>
        <li>Architectural blueprints</li>
        <li>Engineering drawings</li>
        <li>Business processes</li>
      </ol>
    </yc-typography-paragraph>
  </yc-typography>
</template>
```

</details>
