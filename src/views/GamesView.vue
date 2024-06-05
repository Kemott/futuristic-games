<script setup lang="ts"></script>

<template>
  <h1>Nasze gry</h1>
  <div class="container">
    <ul>
      <li>
        <h2>RUN!</h2>
        <RouterLink :to="{ name: 'singleGame', params: { game: 'RUN!' } }"
          >Przejdź do gry</RouterLink
        >
      </li>
    </ul>
    <div class="game">
      <router-view></router-view>
    </div>
  </div>
</template>

<style></style>
