<script setup lang="ts">
import Button from 'primevue/button'
import { computed, useAttrs } from 'vue'
import { Icons, Severities } from './constants'

defineOptions({
  inheritAttrs: false
})

const attrs = useAttrs()

const props = defineProps<{
  icon?: Icons
  severity?: Severities
  rounded?: boolean
  outlined?: boolean
  raised?: boolean
}>()

defineEmits<{
  (e: 'click'): void
}>()

const routerLinkTag = 'router-link'
const linkTag = 'a'

const component = computed(() => {
  if (attrs.to) {
    return routerLinkTag
  }
  if (attrs.href) {
    return linkTag
  }

  return null
})

const componentAttrs = computed(() => {
  const { href, to } = attrs

  if (component.value === 'router-link') {
    return { to }
  }

  return { href }
})
</script>

<template>
  <Component :is="component" v-if="component" v-bind="{ ...componentAttrs }">
    <Button v-bind="{ ...props, ...attrs }" @click="$emit('click')">
      <slot />
    </Button>
  </Component>

  <Button v-bind="{ ...props, ...attrs }" @click="$emit('click')" v-else>
    <slot />
  </Button>
</template>

<style scoped lang="scss">
@import '@/assets/scss/resources/_variables.scss';

.button {
  background-color: $primary-color;
  border-color: $primary-color;
  color: $light-color;
  border-radius: $border-radius-base;
  font-family: $font-family-base;
  font-size: $font-size-base;
  font-weight: $font-weight-base;
  line-height: $line-height-base;
  box-shadow: $box-shadow;
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: darken($primary-color, 10%);
    border-color: darken($primary-color, 10%);
  }

  &--secondary {
    background-color: $secondary-color;
    border-color: $secondary-color;
    color: $light-color;

    &:hover {
      background-color: darken($secondary-color, 10%);
      border-color: darken($secondary-color, 10%);
    }
  }

  &--danger {
    background-color: $danger-color;
    border-color: $danger-color;
    color: $light-color;

    &:hover {
      background-color: darken($danger-color, 10%);
      border-color: darken($danger-color, 10%);
    }
  }
}
</style>
