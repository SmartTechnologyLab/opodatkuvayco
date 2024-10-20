<script setup lang="ts">
import ProgressSpinner from 'primevue/progressspinner'
import { useAttrs } from 'vue'

const props = withDefaults(
  defineProps<{
    animationDuration?: number
    borderWidth?: number
  }>(),
  {
    animationDuration: 1.3,
    borderWidth: 3
  }
)

const attrs = useAttrs()
</script>

<template>
  <ProgressSpinner
    class="loader"
    :animation-duration="`${props.animationDuration}s`"
    :stroke-width="String(props.borderWidth)"
    v-bind="{ ...attrs }"
  />
</template>

<style lang="scss">
$stoke-color: #8cd0d0;

.loader {
  width: 4rem;
  height: 4rem;
  color: #fff;
}

@keyframes p-progress-spinner-color {
  100%,
  0% {
    stroke: $stoke-color;
  }
}
</style>
