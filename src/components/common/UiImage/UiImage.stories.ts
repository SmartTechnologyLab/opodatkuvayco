import type { Meta, StoryFn } from '@storybook/vue3'
import UiImage from './UiImage.vue'
import logo from '/fake-logo.png'

export default {
  component: UiImage,
  args: {
    src: logo,
    alt: 'Alt text'
  }
} as Meta<typeof UiImage>

const Template: StoryFn<typeof UiImage> = (args) => ({
  components: { UiImage },
  setup() {
    return { args }
  },
  template: `
    <UiImage v-bind='args' />
  `
})

export const Default = Template.bind({})
