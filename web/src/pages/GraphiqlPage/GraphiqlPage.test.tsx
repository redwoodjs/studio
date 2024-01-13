import { render } from '@redwoodjs/testing/web'

import GraphiqlPage from './GraphiqlPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GraphiqlPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GraphiqlPage />)
    }).not.toThrow()
  })
})
