<template>
  <div class="search-bar input-container">
    <span class="material-symbols-outlined"> search </span>
    <input type="text" placeholder="Search" />
  </div>
</template>
<style scoped>
.search-bar input {
  background-color: transparent;
  border: none;
  width: 100%;
  color: var(--color-text);
  font-size: 1rem;
}
.search-bar input:focus-visible {
  outline: none;
}
</style>
