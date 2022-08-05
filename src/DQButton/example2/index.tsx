/*
 * @Author: fuzhenghao 1045612802@qq.com
 * @Date: 2022-08-05 10:51:09
 * @LastEditors: fuzhenghao 1045612802@qq.com
 * @LastEditTime: 2022-08-05 10:54:43
 * @FilePath: \dock-query-document\src\Button\example2\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { Button } from 'devextreme-react/button';
import notify from 'devextreme/ui/notify';
import styles from './index.less';

export default ({ title }: { title: string }) => {

    function showMessage() {
        notify("The button was clicked");
    }

    return (
        <div className={styles.ButtonGroup}>
            <Button
                text="Click me!"
                onClick={showMessage}
                stylingMode="contained"
                type="success"
                icon="comment"
            />
            <Button
                text="Click me!"
                onClick={showMessage}
                stylingMode="outlined"
                type="success"
                icon="comment"
            />
            <Button
                text="Click me!"
                onClick={showMessage}
                stylingMode="text"
                type="success"
                icon="comment"
            />
        </div>
    )
};