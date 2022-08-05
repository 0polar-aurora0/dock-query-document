/*
 * @Author: fuzhenghao 1045612802@qq.com
 * @Date: 2022-08-04 17:43:01
 * @LastEditors: fuzhenghao 1045612802@qq.com
 * @LastEditTime: 2022-08-05 16:06:03
 * @FilePath: \dock-query-frontend\src\components\DQGrid\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import DataGrid, {
  Scrolling, Paging, Column, HeaderFilter, Pager, IColumnProps
} from 'devextreme-react/data-grid';
import React from 'react';

interface Iprops {
  dataSource: Array<Object>
  pagerConfig?: pagerConfigType
  columns: Array<ColumnType>
  showBorders?: boolean
}

export type ColumnType = {
  title: string
  dataField: string
  width: number
  format?: string
} & IColumnProps

export interface pagerConfigType {
  visible: boolean
  modeStyle?: String
}

export default function index(props: Iprops) {

  let { dataSource, pagerConfig, columns, showBorders } = props;

  return (
    <DataGrid
      dataSource={dataSource}
      keyExpr="ID"
      // defaultColumns={columns}
      showBorders={showBorders}
    >
      {
        columns.map(column => {
          let { dataField, title, format, width, ...otherConfig } = column;
          return (
            <Column caption={title} dataField={dataField} format={format} {...otherConfig} width={width}>
              <HeaderFilter groupInterval={1000} />
            </Column>
          )
        })
      }
      {
        pagerConfig &&
        <Pager
          visible={pagerConfig.visible}
          // allowedPageSizes={allowedPageSizes}
          displayMode={pagerConfig.modeStyle}
        // showPageSizeSelector={showPageSizeSelector}
        // showInfo={this.state.showInfo}
        // showNavigationButtons={this.state.showNavButtons} 
        />
      }

    </DataGrid>
  );
}


