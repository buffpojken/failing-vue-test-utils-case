import { mount } from '@vue/test-utils'
import Component from './../../component.vue'
import flushPromises from 'flush-promises'

describe('Root component can not be found', () => {

  test('test 1', async () => {
    const wrapper = mount(Component, {global: {mocks: {$route: {meta: {issue: true}}}}}) 
    let wrap = wrapper.findComponent(Component)   
    expect(wrap.exists()).toBe(true)
  })

})