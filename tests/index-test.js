import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import WindowState from 'src/'

describe('Component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('renders', () => {
    render(<WindowState>{() => <div></div>}</WindowState>, node, () => {
      expect(node.innerHTML).toBe('<div data-reactroot=""></div>')
    })
  })
})
