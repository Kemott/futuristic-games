<script setup lang="ts"></script>

<template>
  <h1>Gra {{ $route.params.game }}</h1>
  <nav>
    <RouterLink :to="{ name: 'gameDetails', params: { game: $route.params.game } }"
      >Szczegóły</RouterLink
    >
    <RouterLink :to="{ name: 'privacyPolicy', params: { game: $route.params.game } }"
      >Polityka Prywatności</RouterLink
    >
  </nav>
  <RouterView />
</template>

<style></style>
