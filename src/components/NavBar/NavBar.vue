<script setup lang="ts">
import UiImage from '@/components/common/UiImage/UiImage.vue'
import logo from '/fake-logo.png'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <nav class="nav-bar">
    <UiImage :src="logo" :alt="t('navBar.logo-alt')" class="nav-bar__logo" />

    <h1 class="nav-bar__title">
      {{ t('navBar.companyName') }}
    </h1>
  </nav>
</template>

<style scoped lang="scss">
@import '../../assets/scss/mixins/_headings.scss';

.nav-bar {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 1.5rem;

  &__logo {
    width: 2rem;
    height: 2rem;
  }

  &__title {
    color: black;
    @include h1-mixin;
  }
}
</style>
