import { render } from '@redwoodjs/testing/web'

import SidebarLayout from './SidebarLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SidebarLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SidebarLayout />)
    }).not.toThrow()
  })
})
