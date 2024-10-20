import { shallowMount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'
import { describe, it, expect } from 'vitest'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(HelloWorld)

    expect(wrapper.text()).toBeDefined()
  })
})
