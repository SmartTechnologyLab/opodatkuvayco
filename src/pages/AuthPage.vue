<script setup lang="ts">
import UiLoader from '@/components/common/UiLoader/UiLoader.vue'
</script>

<template>
  <Suspense>
    <div>Register page</div>

    <template #fallback>
      <UiLoader />
    </template>
  </Suspense>
</template>
