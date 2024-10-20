<script setup lang="ts">
import TaxCalculator from '@/components/common/TaxCalculator/TaxCalculator.vue'
import UiButton from '@/components/common/UiButton/UiButton.vue'
import UiLoader from '@/components/common/UiLoader/UiLoader.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <Suspense>
    <main class="main-page">
      <i18n-t keypath="main.motto.info" class="main-page__title" tag="h2">
        <template #action>
          <span class="main-page__title--marked">{{ t('main.motto.count') }}</span>
        </template>
        <template #difficulty>
          <span class="main-page__title--marked">{{ t('main.motto.easy') }}</span>
        </template>
      </i18n-t>

      <UiButton class="main-page__btn" to="/register">
        {{ t('main.register-btn') }}
      </UiButton>

      <TaxCalculator />
    </main>

    <template #fallback>
      <UiLoader />
    </template>
  </Suspense>
</template>

<style lang="scss">
$h2-marked-color: #6af6ff;
$register-btn-color: #8cd0d0;

.main-page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-inline: 2rem;

  &__title {
    text-align: center;
    font-weight: bold;
    font-size: 1.8rem;
    margin-block: 0.5rem 0.5rem;

    &--marked {
      color: $h2-marked-color;
      font-weight: bold;
    }
  }

  &__btn {
    margin-block: 2rem;
    padding: 0.5rem;
    background: $register-btn-color;
    color: $main-text-color;
    font-size: 1.2rem;
  }
}
</style>
