<script setup lang="ts">
import LoginForm from '@/components/LoginForm/LoginForm.vue'
import UiImage from '@/components/common/UiImage/UiImage.vue'
import logo from '/fake-logo.png'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <Suspense>
    <main class="auth-page">
      <section class="auth-page__wrapper">
        <UiImage :src="logo" :alt="t('navBar.logo-alt')" class="auth-page__logo" />
        <h1 class="auth-page__brand-name">{{ t('navBar.companyName') }}</h1>
      </section>

      <LoginForm />
    </main>

    <!-- ToDo: add spinner for loading state -->
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<style lang="scss">
@import '../assets/scss/resources/_variables.scss';

.auth-page {
  margin-inline: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5rem;
  height: 65vh;

  &__wrapper {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__logo {
    width: 4rem;
    height: 4rem;
    margin-bottom: 2rem;
  }

  &__brand-name {
    font-weight: bold;
    font-size: 1.9rem;
  }
}
</style>
