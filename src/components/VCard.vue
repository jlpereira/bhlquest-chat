<template>
  <div class="card">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style>
.card {
  border: 1px solid var(--border-color);
  padding: 1rem;
  border-radius: 0.8rem;
}
</style>
