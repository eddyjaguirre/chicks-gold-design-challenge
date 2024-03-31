<template>
  <div class="input-group">
    <slot></slot>
  </div>
</template>

<style>
.input-group {
  display: flex;
}
.input-group > div {
  border-radius: 0px;
  border-right: 1px solid var(--color-primary);
  width: 100%;
}
.input-group > div:first-child {
  border-top-left-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
}
.input-group > div:last-child {
  border-top-right-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  border-right: 0;
}
</style>
