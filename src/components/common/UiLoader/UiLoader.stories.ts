import UiLoader from '@/components/common/UiLoader/UiLoader.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

export default {
  component: UiLoader,
  argTypes: {
    animationDuration: {
      control: 'number',
      description: 'Set animation duration'
    },
    borderWidth: {
      control: 'number',
      description: 'Set width of the border'
    }
  }
} as Meta<typeof UiLoader>

type Story = StoryObj<typeof UiLoader>

export const Default: Story = {
  render: (args) => ({
    components: { UiLoader },
    setup() {
      return { args }
    },
    template: `
      <UiLoader v-bind="{...args}" />
    `
  }),
  args: {
    animationDuration: 1,
    borderWidth: 3
  }
}
