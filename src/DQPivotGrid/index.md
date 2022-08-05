## DQPivotGrid

网格组件

代码演示:

<code src="./example1/index.tsx"></code>

<code src="./example2/index.tsx"></code>

添加分页

<code src="./example1/index.tsx"></code>

## Api

DQDataGrid

| 属性        | 说明         | 类型            | 默认值 | 原文链接 |
| ----------- | ------------ | --------------- | ------ | -------- |
| dataSource  | 数据源       | Array< Object > |        |          |
| pagerConfig | 分页配置     | pagerConfigType |        |          |
| columns     | 列标签及配置 | ColumnType      |        |          |
| showBorders | 边框展示     | Boolean         |        |          |

pagerConfigType

| 属性        | 说明                           | 类型     | 默认值 | 原文链接 |
| ----------- | ------------------------------ | -------- | ------ | -------- |
| text        | 提供参数的数据源字段(横轴展示) | String   |        |          |
| stylingMode | 样式风格                       | String   |        |          |
| onClick     | 按钮点击事件                   | Function |        |          |
| type        | 按钮状态                       | String   |        |          |
| icon        | 按钮图标                       | String   |        |          |
| disabled    | 按钮是否可用                   | Boolean  | true   |          |

ColumnType

| 属性       | 说明                           | 类型   | 默认值 | 原文链接 |
| ---------- | ------------------------------ | ------ | ------ | -------- |
| title      | 提供参数的数据源字段(横轴展示) | String |        |          |
| dataField  | 数据名称                       | String |        |          |
| width      | 列宽度                         | Number |        |          |
| format     | 格式化                         | String |        |          |
| *moreInfo* | 更多接口查看官网               |        |        |          |

