<template>
  <div class="stock-status" :class="{ 'out-of-stock': !props.inStock }">
    {{ props.inStock ? 'In stock' : 'Out of stock' }}
  </div>
</template>
<script setup>
const props = defineProps(['inStock'])
</script>
<style scoped>
.stock-status {
  border: 1px solid var(--color-green);
  color: var(--color-green);
  padding: 0.5rem 0.8rem;
  font-size: 0.625rem;
  border-radius: 0.2rem;
  box-sizing: border-box;
  display: block;
  line-height: 0;
}
.stock-status .out-of-stock {
  border-color: var(--color-red);
  color: var(--color-red);
}
</style>
