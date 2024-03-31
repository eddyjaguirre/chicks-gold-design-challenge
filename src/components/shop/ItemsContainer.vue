<template>
  <div class="items-container">
    <h1>Condimentum consectetur</h1>
    <div class="data-filter-container">
      <div class="flex-1">
        <Selector icon="swords" title="Select a game" />
      </div>
      <div class="flex-2">
        <SearchBar />
      </div>
      <div class="flex-1">
        <InputGroup>
          <Selector icon="payments" title="Price" selected-option="All" :green="true" />
          <Selector icon="edit" title="Item type" selected-option="All" :green="true" />
        </InputGroup>
      </div>
    </div>
    <div class="items">
      <div class="items__grid">
        <Item v-for="item in items" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

import Item from './Item.vue'
import SearchBar from './SearchBar.vue'
import Selector from './Selector.vue'
import InputGroup from './InputGroup.vue'
import itemsdata from '@/assets/itemsdata.json'

const items = ref(itemsdata)
</script>
<style scoped>
.items-container {
  padding: 3rem 0;
  text-align: left;
}
.items-container h1 {
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.5;
}
.items-container .items {
  border: 1px solid var(--color-primary);
  background-color: var(--color-background);
  border-radius: 5px;
  padding: 32px;
  width: 100%;
}
.items-container .items__grid {
  display: grid;
  gap: var(--grid-spacing);
  grid-template-columns: repeat(1, minmax(0, 1fr));
  max-width: var(--card-width);
  margin: 0 auto;
}
.items-container .data-filter-container {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  flex-direction: column;
}
.items-container .data-filter-container .flex-1 {
  flex: 1;
}
.items-container .data-filter-container .flex-2 {
  flex: 2;
}
@media (min-width: 640px) {
  .items-container .items__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: calc(var(--card-width) * 2 + var(--grid-spacing));
  }
}
@media (min-width: 768px) {
  .items-container .items__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    max-width: calc(var(--card-width) * 3 + var(--grid-spacing) * 2);
  }
}
@media (min-width: 1024px) {
  .items-container .items {
    padding: 48px;
  }
  .items-container {
    padding: 7rem 0;
  }
  .items-container .items__grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    max-width: calc(var(--card-width) * 4 + var(--grid-spacing) * 3);
  }
}
@media (min-width: 1280px) {
  .items-container .data-filter-container {
    flex-direction: row;
  }
  .items-container .items__grid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    max-width: calc(var(--card-width) * 5 + var(--grid-spacing) * 4);
  }
}
</style>
