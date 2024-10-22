<script setup lang="ts">
import SelectButton from 'primevue/selectbutton'
import { useAttrs } from 'vue'

const attrs = useAttrs()
</script>

<template>
  <SelectButton v-bind="{ ...attrs }" />
</template>

<style scoped lang="scss">
@import '@/assets/scss/resources/_variables.scss';

.select-button {
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
