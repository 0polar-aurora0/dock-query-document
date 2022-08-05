/*
 * @Author: fuzhenghao 1045612802@qq.com
 * @Date: 2022-08-04 15:21:07
 * @LastEditors: fuzhenghao 1045612802@qq.com
 * @LastEditTime: 2022-08-05 16:40:36
 * @FilePath: \dock-query-document\src\DQChart\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import styles from './index.less';
import { DQDataGrid } from '../../components/index'
import { example2_data } from './data'

export default () => {

    let column = [{
        title: '地址',
        dataField: 'Address',
        width: 150,
    }, {
        title: '手机号',
        dataField: 'Phone',
        width: 150,
    }, {
        title: '邮箱地址',
        dataField: 'Zipcode',
        width: 150,
    }, {
        title: '城市',
        dataField: 'City',
        width: 150,
    }, {
        title: '地址',
        dataField: 'Address',
        width: 150,
    }, {
        title: '地址',
        dataField: 'Address',
        width: 150,
    }]

    let pagerConfig = {
        visible: true,
        modeStyle: 'aaaa'
    }

    let { dataSource } = example2_data
    
    return (
        <div className={styles.DQDataGrid}>
            <DQDataGrid pagerConfig={pagerConfig} dataSource={dataSource} columns={column} />
        </div>

    )
};
