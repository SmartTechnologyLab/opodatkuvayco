<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import NavBar from '@/components/NavBar/NavBar.vue'
import { computed } from 'vue'
import { routesWithoutNavBar } from '@/router/common/routesWithoutNavBar'

const route = useRoute()

const showNavBar = computed(() => !routesWithoutNavBar.includes(route.path))
</script>

<template>
  <NavBar v-if="showNavBar" />
  <RouterView />
</template>

<style scoped lang="scss"></style>
