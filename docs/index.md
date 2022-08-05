## 使用总览



具体详情请见

[dev Extreme官网](https://js.devexpress.com/Demos/WidgetsGallery/)

[dev Extreme官方示例项目](https://js.devexpress.com/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/)

基于dev Extreme组件库

#### 使用流程

1. 当前采用dev Extreme中的react进行组件开发

   ```javascript
   cnpm install --save devextreme devextreme-react
   ```
   ```javascript
   npm install --save devextreme devextreme-react
   ```

2. 文件中引入dev extreme相关样式

   ```javascript
   import 'devextreme/dist/css/dx.common.css';
   import 'devextreme/dist/css/dx.light.css';
   ```

3. 相关基础组件从`devextreme-react`下引入

   如下例:

   ```javascript
   import { Button } from 'devextreme-react/button';
   ```

4. 相关ui操作引入

   如下例:

   ```javascript
   import notify from 'devextreme/ui/notify';
   ```

   
