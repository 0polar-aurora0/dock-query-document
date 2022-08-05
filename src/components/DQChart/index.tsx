/*
 * @Author: fuzhenghao 1045612802@qq.com
 * @Date: 2022-08-04 14:52:02
 * @LastEditors: fuzhenghao 1045612802@qq.com
 * @LastEditTime: 2022-08-04 17:39:52
 * @FilePath: \dock-query-frontend\src\components\DQChart\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


import {
    Chart, Series, CommonSeriesSettings
} from 'devextreme-react/chart';

interface Iprops {
    type?: 'stackedBar'
    title?: string | TitleType
    dataSource: Array<Object>
    argumentField?: string
    seriesList?: Array<SeriesType>
}

interface TitleType {
    text: string
    subtitle: string
}

interface SeriesType {
    valueField: string
    name: string
}


export default function index(props: Iprops) {
    let { type, title, argumentField, dataSource, seriesList, ...others } = props

    let baseArgumentField = argumentField || 'arg';
    let baseSeriesType: Array<string> = []
    dataSource.map(item => {
        Object.keys(item).map(item2 => {
            if (!baseSeriesType.includes(item2) && item2 !== baseArgumentField) {
                baseSeriesType.push(item2)
            }
        })
    })
    let baseSeriesList: Array<SeriesType> = baseSeriesType.map(item => {
        return {
            name: item,
            valueField: item,
        }
    })
    let showSeriesList = seriesList || baseSeriesList
    console.dir({ showSeriesList, baseArgumentField });

    return (
        <Chart
            className='DQChart'
            title={title}
            dataSource={dataSource}
        >
            <CommonSeriesSettings argumentField={baseArgumentField} type={type || 'stackedBar'} />
            {
                showSeriesList.map(item => {
                    return (
                        <Series
                            valueField={item.valueField}
                            name={item.name}
                        />
                    )
                })
            }
        </Chart>
    )
}
