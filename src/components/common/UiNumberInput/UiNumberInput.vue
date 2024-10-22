<script setup lang="ts">
import InputNumber from 'primevue/inputnumber'
import { useAttrs } from 'vue'
import { Currency } from '@/constants/currencies'

const attrs = useAttrs()

const props = defineProps<{
  mode?: 'currency' | 'decimal' | undefined
  currency?: Currency
  minFractionDigits?: number
  maxFractionDigits?: number
}>()
</script>

<template>
  <InputNumber v-bind="{ ...attrs, ...props }" />
</template>

<style scoped lang="scss">
@import '@/assets/scss/resources/_variables.scss';

.input-number {
  background-color: $light-color;
  border: 1px solid $secondary-color;
  border-radius: $border-radius-base;
  font-family: $font-family-base;
  font-size: $font-size-base;
  color: $main-text-color;
  padding: 0.5rem;
  box-shadow: $box-shadow-sm;
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: lighten($light-color, 10%);
    border-color: lighten($secondary-color, 10%);
  }
}
</style>
