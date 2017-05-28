import test from 'ava'
import React from 'react'
import { shallow, mount, render } from 'enzyme'

import './setup-dom'
import App from '../../client/components/App'

App.prototype.componentDidMount = () => {}

test('Container class exists', t => {
  const wrapper = mount(<App />)
  t.is(wrapper.find('.container').exists(), true)
})
