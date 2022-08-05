/*
 * @Author: fuzhenghao 1045612802@qq.com
 * @Date: 2022-08-05 14:13:09
 * @LastEditors: fuzhenghao 1045612802@qq.com
 * @LastEditTime: 2022-08-05 14:50:17
 * @FilePath: \dock-query-frontend\src\components\DQChart\__test__\DQChart.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import * as React from 'react'
import '@testing-library/jest-dom'
import {render, fireEvent, screen} from '@testing-library/react'
import DQChart from '../index'
import testData from '../mock/data'

let {} = testData

test('shows the children when the checkbox is checked', () => {
  const testMessage = 'Test Message'
  const ins = render(<DQChart />)
  expect(ins).toBeDefined
  // query* functions will return the element or null if it cannot be found
  // get* functions will return the element or throw an error if it cannot be found
  expect(screen.queryByText(testMessage)).toBeNull()

  // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
  fireEvent.click(screen.getByLabelText(/show/i))

  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  expect(screen.getByText(testMessage)).toBeInTheDocument()
})