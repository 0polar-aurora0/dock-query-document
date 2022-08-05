/*
 * @Author: fuzhenghao 1045612802@qq.com
 * @Date: 2022-08-04 15:21:07
 * @LastEditors: fuzhenghao 1045612802@qq.com
 * @LastEditTime: 2022-08-04 19:08:28
 * @FilePath: \dock-query-document\src\DQChart\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import styles from './index.less';
import { DQChart } from '../../components/index'
import { maleAgeData } from './data'

export default () => {

    let seriesList = [
        { valueField: 'maleyoung', name: '年轻男性' },
        { valueField: 'malemiddle', name: '中年男性' },
    ]

    return (
        <div className={styles.DQchart}>
            <DQChart argumentField='state' dataSource={maleAgeData} seriesList={seriesList} ></DQChart>
        </div>

    )
};
