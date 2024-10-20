<script setup lang="ts">
import UiTextInput from '@/components/common/UiInput/UiInput.vue'
import UiButton from '@/components/common/UiButton/UiButton.vue'
import googleIcon from '@/assets/icons/google-icon.svg'
import { useI18n } from 'vue-i18n'
import UiImage from '@/components/common/UiImage/UiImage.vue'
import { ref } from 'vue'
import { useSupabaseAuth } from 'vue-supabase'

const { t } = useI18n()

const loading = ref(false)
const email = ref('')
const password = ref('')

const auth = useSupabaseAuth()

const handleLogin = async () => {
  try {
    loading.value = true

    await auth.signUp({
      email: email.value,
      password: password.value
    })
  } catch (error) {
    console.log(error)
    throw error
  } finally {
    loading.value = false
  }
}

const handleGoogleLogin = async () => {
  loading.value = true
  try {
    await auth.signIn({
      provider: 'google'
    })
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}

const handleSignOut = async () => {
  try {
    await auth.signOut()
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <form @submit.prevent="handleLogin" class="login-form">
    <UiTextInput v-model="email" class="login-form__input" :placeholder="t('registration.userName')" />

    <UiTextInput
      v-model="password"
      type="password"
      class="login-form__input"
      :placeholder="t('registration.userPassword')"
    />

    <UiButton type="submit" class="login-form__btn">
      {{ t('registration.submitBtn') }}
    </UiButton>

    <UiButton @click="handleSignOut">Signout</UiButton>

    <UiButton class="login-form__icon" @click="handleGoogleLogin">
      <UiImage :src="googleIcon" :alt="t('registration.googleIcon')" />
    </UiButton>
  </form>
</template>

<style scoped lang="scss">
.login-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &__input {
    background: none;
    border: 1px solid;
    border-radius: 0.5rem;
    width: 100%;
    padding: 0.8rem 1rem;
    border-radius: 0.5rem;
  }

  // ToDo: add scss variable and figure out with @use
  &__btn {
    background: $main-background-color;
    color: #fff;
    border-radius: 0.5rem;
    padding: 0.8rem;
    font-weight: 500;
    text-transform: uppercase;
  }

  &__icon {
    background: none;
  }
}
</style>
