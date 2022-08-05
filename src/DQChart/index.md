## DQChart

代码演示:

<code src="./example1/index.tsx"></code>
<code src="./example2/index.tsx"></code>
如果不传入seriesList即分类定义，则会遍历datasouse中所有的类型并赋予默认标签

### API[#]()

DQChart

说明:	在DQChart中如果未定义seriesList，组件将自动根据

| 属性          | 说明                           | 类型               | 默认值               | 原文链接                                                     |
| :------------ | :----------------------------- | :----------------- | :------------------- | :----------------------------------------------------------- |
| argumentField | 提供参数的数据源字段(横轴展示) | String             | arg                  | [官网](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/#argumentField) |
| title         | 标题                           | String             |                      |                                                              |
| seriesList    | 柱状分类展示                   | Array< SeriesType> | 自动分配             |                                                              |
| dataSource    | 图标数据源                     | Array< Object >    | 必填                 |                                                              |
| type          | 图案展示形状(折线、柱状等)     | String             | stackedBar(柱状展示) |                                                              |


SeriesType


| 属性       | 说明     | 类型   | 默认值 | 原文链接                                                     |
| :--------- | :------- | :----- | :----- | :----------------------------------------------------------- |
| valueField | 类型值   | String | 必填   | [官网](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/#argumentField) |
| name       | 类型名称 | String | 必填   |                                                              |

