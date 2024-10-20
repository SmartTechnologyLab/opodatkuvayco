<script setup lang="ts">
import { useI18n } from 'vue-i18n'

// TODO: remove useI18N and use $t in template
//  after resolving the issue https://github.com/intlify/vue-i18n-next/issues/1384
const { t, d, n } = useI18n()
</script>

<template>
  <div>{{ t('main.hello') }}</div>
  <div>{{ t('main.dollar', { n: 2 }) }}</div>
  <div>{{ t('main.dollar', { n: 0 }) }}</div>
  <div>{{ t('main.dollar', { n: 100 }) }}</div>

  <div>{{ n(10000, { style: 'currency', currency: 'USD' }) }}</div>
  <div>{{ n(10000, { style: 'currency', currency: 'EUR' }) }}</div>
  <div>{{ n(10000, { style: 'currency', currency: 'UAH' }) }}</div>

  <p>{{ d(new Date(), 'short', 'uk') }}</p>
  <p>{{ d(new Date(), 'long', 'uk') }}</p>
</template>

<style scoped></style>
