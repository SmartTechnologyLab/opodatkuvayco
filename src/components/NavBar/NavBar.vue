<script setup lang="ts">
import UiImage from '@/components/common/UiImage/UiImage.vue'
import logo from '/fake-logo.png'
import { useI18n } from 'vue-i18n'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const { t } = useI18n()
</script>

<template>
  <nav class="nav-bar">
    <UiImage :src="logo" :alt="$t('navBar.logo-alt')" class="nav-bar__logo" />

    <h1 class="nav-bar__title">
      {{ t('navBar.companyName') }}
    </h1>

    <InputText placeholder="Search..." class="nav-bar__search" />
    <Button label="Login" class="nav-bar__button" />
  </nav>
</template>

<style scoped lang="scss">
@import '../../assets/scss/mixins/_headings.scss';

.nav-bar {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 1.5rem;
  background-color: #f8f9fa;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &__logo {
    width: 2rem;
    height: 2rem;
  }

  &__title {
    color: #343a40;
    @include h1-mixin;
    flex-grow: 1;
  }

  &__search {
    flex-grow: 2;
    max-width: 300px;
  }

  &__button {
    background-color: #007bff;
    border-color: #007bff;
    color: #fff;
    &:hover {
      background-color: #0056b3;
      border-color: #0056b3;
    }
  }
}
</style>
