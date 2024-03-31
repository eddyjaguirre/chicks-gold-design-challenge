<template>
  <header>
    <div class="header">
      <div class="header__mobile-menu" :class="{ visible: openMenu }">
        <div class="header__mobile-menu__top">
          <a target="_blank" rel="noopener noreferrer" @click="openMenu = false">
            <span class="material-symbols-outlined"> close </span>
          </a>
        </div>
        <div class="header__mobile-menu__navbar">
          <div class="header__navbar-item" v-for="item in navbarItems" :key="item">
            {{ item.toUpperCase() }}
            <span class="material-symbols-outlined">expand_more </span>
          </div>
          <div class="header__navbar-item">
            <div class="header__shopping-cart">
              <span class="material-symbols-outlined">shopping_cart </span>
              <span>Cart (5)</span>
            </div>
          </div>
          <div class="header__navbar-item">
            <Button title="Sign In" icon="person" :green="true" />
          </div>
        </div>
      </div>
      <div class="header__container">
        <div class="header__mobile">
          <a target="_blank" rel="noopener noreferrer" @click="openMenu = true">
            <span class="material-symbols-outlined"> menu </span>
          </a>
        </div>
        <div class="header__logo-container">
          <img src="../../assets/the-merchant-logo.png" alt="The Merchant" />
        </div>
        <div class="header__navbar">
          <div class="header__navbar-item" v-for="item in navbarItems" :key="item">
            {{ item.toUpperCase() }}
            <span class="material-symbols-outlined">expand_more </span>
          </div>
        </div>
        <div class="header__user-container">
          <div class="header__shopping-cart">
            <span class="material-symbols-outlined">shopping_cart </span>
            <span>Cart (5)</span>
          </div>
          <Button title="Sign In" icon="person" :green="true" />
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import Button from '@/components/Button.vue'

import { ref } from 'vue'

const navbarItems = ref(['Currency', 'Items', 'Accounts', 'Services', 'Swap', 'Sell'])
const openMenu = ref(false)
</script>
<style scoped>
.header {
  background-color: var(--color-background);
  border-bottom: solid 1px var(--color-secondary);
}
.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--vertical-padding) var(--horizontal-padding);
  margin: 0 auto;
}

.header__mobile-menu {
  position: absolute;
  background-color: var(--color-background);
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  opacity: 0;
  margin-left: -100vw;
  transition:
    margin-left 0.2s,
    opacity 0.2s;
}

.header__mobile-menu.visible {
  opacity: 1;
  margin-left: 0px;
}

.header__mobile-menu__top {
  padding: var(--vertical-padding) var(--horizontal-padding);
  border-bottom: solid 1px var(--color-secondary);
}

.header__mobile-menu .header__mobile-menu__navbar .header__navbar-item {
  padding: var(--vertical-padding) var(--horizontal-padding);
  justify-content: space-between;
  font-size: 16px;
}

.header__mobile-menu .header__mobile-menu__navbar .header__shopping-cart span {
  font-size: 16px;
}

.header__user-container {
  display: none;
}

.header__logo-container img {
  max-width: 180px;
}

.header__navbar {
  display: none;
}

.header__navbar-item {
  display: flex;
  align-items: end;
  font-size: 13px;
}

.header__navbar-item span {
  font-size: 18px;
  margin-left: 2px;
}

.header__shopping-cart {
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
}

.header__shopping-cart span {
  font-size: 13px;
}

.header__logo-container {
  flex: 1;
  padding-left: 12px;
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
  .header__logo-container {
    flex: 0;
  }
  .header__mobile {
    display: none;
  }
  .header__logo-container {
    border-right: 1px solid var(--color-text);
    padding-right: var(--horizontal-padding);
  }
  .header__navbar {
    display: flex;
    font-size: 12px;
    padding-left: 40px;
    flex: 1;
    gap: 24px;
  }
  .header__user-container {
    display: flex;
    gap: 24px;
  }
}
@media (min-width: 1280px) {
  .header__navbar,
  .header__user-container {
    gap: 36px;
  }
}
</style>
