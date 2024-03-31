<template>
  <a
    class="btn"
    :class="{
      full: props.full,
      primary: props.primary,
      secondary: props.secondary,
      green: props.green,
      border: props.border
    }"
  >
    <div>
      <span class="btn__title">{{ props.title }}</span>
      <span v-if="props.icon" class="btn__icon material-symbols-outlined">
        {{ props.icon }}
      </span>
    </div>
  </a>
</template>
<script setup>
const props = defineProps(['title', 'icon', 'full', 'primary', 'secondary', 'green', 'border'])
</script>
<style scoped>
.btn {
  display: flex;
  justify-content: center;
}
.btn > div {
  border-radius: 5px;
  padding: 0 1rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  color: var(--color-text);
  font-weight: 700;
}
.btn > div > span {
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 500;
}
.btn.full {
  flex: 1;
}

.btn.primary > div {
  background-color: var(--color-primary);
  color: var(--color-text);
}

.btn.secondary > div {
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--color-text);
}
.btn.green > div {
  background-color: var(--color-green);
  color: var(--color-black);
}
.btn.border > div {
  border: solid 1px var(--color-primary);
}
</style>
