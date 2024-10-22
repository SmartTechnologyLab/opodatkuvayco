<script setup lang="ts">
import Calendar from 'primevue/calendar'
import { useAttrs } from 'vue'
import type { DateFormat } from './types'

const attrs = useAttrs()

const props = defineProps<{
  dateFormat?: DateFormat
}>()
</script>

<template>
  <Calendar v-bind="{ ...attrs, ...props }" />
</template>

<style scoped lang="scss">
@import '@/assets/scss/resources/_variables.scss';

.calendar {
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

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  &__title {
    font-size: $font-size-base;
    font-weight: $font-weight-base;
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 0.5rem;
  }
}
</style>
