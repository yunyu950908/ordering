# 代码规范

### 提交规范
| Logo                    | abbr     | KEY         | Description |
| ----------------------- | -------- | ----------- |-------------|
| :book:                  | `:book:` | Docs        | 文档         |
| :sparkles:              | `:sparkles:` | Feat    | 新特性       |
| :bug:                   | `:bug:`  | Fix         | 修复bug      |
| :art:                   | `:art:`  | Style       | 样式修改      |
| :wrench:                | `:wrench:` | Refactor  | 代码重构      |
| :recycle:               | `:recycle:` | Test     | 测试         |
| :building_construction: | `:building_construction:` | Build    | 构建代码      |

示例：
```
格式： [Fix/Logo]_名称/#序号_描述
实例： [:bug:]_修复#13_顶部导航样式坍塌
```

### HTML属性顺序及部分属性的命名方法
1. `class`——使用`_`分隔（如：`class="xxx_container"`）
2. `id, name`——使用`_`分隔（同上）
3. `data-*`
4. `src, for, type, href, value`
5. `title, alt`
6. `role, aria-*`

### 命名规范

- 属性：小写开头&驼峰命名法


- 方法：
  - 事件处理方法：`handle[Sth]`：如`handleClick`
  - 数据生成方法：`generate[Sth]`
  - 数据获取方法：
    - 从接口获取：`fetch[Sth]`
    - 从其它地方获取：`get[Sth]`
- 变量：
  - `var/let`：小写开头&驼峰命名法
  - `const`：全大写，以`_`分隔

（tips：`boolean`以`is`开头命名。用于控制元素显隐的类名按`isHidden`命名。）