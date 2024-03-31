<template>
  <Header />
  <div class="container">
    <slot></slot>
  </div>
  <Footer />
</template>
<script setup>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>
<style scoped>
.container {
  flex: 1;
}
</style>
