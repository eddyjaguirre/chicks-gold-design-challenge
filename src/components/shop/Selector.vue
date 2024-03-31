<template>
  <div class="input-container selector">
    <div class="selector__icon" :class="{ green: props.green }">
      <span class="material-symbols-outlined"> {{ props.icon }} </span>
    </div>
    <div class="selector__container">
      <div class="selector__title" :class="{ 'option-selected': selectedOption }">
        {{ props.title }}
      </div>
      <div v-if="props.selectedOption" class="selector__option">{{ props.selectedOption }}</div>
    </div>
    <span class="material-symbols-outlined"> arrow_drop_down </span>
  </div>
</template>

<script setup>
const props = defineProps(['title', 'selectedOption', 'icon', 'green'])
</script>

<style scoped>
.selector {
  width: 100%;
  flex: 1;
}
.selector__icon {
  display: flex;
}
.selector__icon .material-symbols-outlined {
  font-size: 18px;
}
.material-symbols-outlined {
  margin: auto 0;
}
.selector__icon.green {
  color: var(--color-green);
}
.selector__container {
  flex: 1;
}
.selector__title.option-selected {
  font-size: 10px;
}
.selector__option {
  font-size: 14px;
  font-weight: 600;
}
</style>
