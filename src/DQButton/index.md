<!--
 * @Author: fuzhenghao 1045612802@qq.com
 * @Date: 2022-08-04 10:46:08
 * @LastEditors: fuzhenghao 1045612802@qq.com
 * @LastEditTime: 2022-08-05 11:01:53
 * @FilePath: \dock-query-document\src\DQButton\index.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## DQButton

按钮用于开始一个即时操作。

## 何时使用[#](https://ant.design/components/button-cn/#何时使用)

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

在 dev extreme中提供了三种基础按钮样式

- contained：实心按钮，有背景色填充。
- outlined：有边框按钮。
- text：文本按钮。

以及四种状态属性与上面配合使用。

- Danger：危险状态。
- Success：成功状态。
- Default：默认状态。
- Normal：普通状态。

代码演示:

<code src="./example2/index.tsx"></code>
包含三种基础样式

<code src="./example1/index.tsx"></code>
包含四种状态

| 属性        | 说明                           | 类型     | 默认值 | 原文链接                                                     |
| ----------- | ------------------------------ | -------- | ------ | ------------------------------------------------------------ |
| text        | 提供参数的数据源字段(横轴展示) | String   | arg    | [官网](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/#argumentField) |
| stylingMode | 样式风格                       | String   |        |                                                              |
| onClick     | 按钮点击事件                   | Function |        |                                                              |
| type        | 按钮状态                       | String   |        |                                                              |
| icon        | 按钮图标                       | String   |        |                                                              |
| disabled    | 按钮是否可用                   | Boolean  | true   |                                                              |

