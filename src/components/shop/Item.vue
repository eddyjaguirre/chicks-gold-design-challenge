<template>
  <div class="item">
    <div class="item__status-container">
      <div class="item__status">
        <div v-if="item.discount > 0" class="item__onsale">ON SALE</div>
        <StockStatus :in-stock="item.inStock" />
      </div>
      <div class="item__counter">
        <ItemCounter />
      </div>
    </div>
    <div class="item__image">
      <img :src="fetchImage(imgUrl)" :alt="item.name" />
    </div>
    <div class="item__top">
      <div class="item__title-container">
        <div class="item__title">{{ item.name }}</div>
        <div class="item__prices-container">
          <div v-if="item.discount > 0" class="item__discounted-price">
            ${{ (item.price * (100.0 - item.discount)) / 100.0 }}
          </div>
          <div class="item__price" :class="{ discounted: item.discount > 0 }">
            ${{ item.price }}
          </div>
        </div>
      </div>
      <div class="item__game-icon">
        <img src="../../assets/icons/re4logo.svg" alt="" srcset="" />
      </div>
    </div>
    <div class="item__description">
      {{ item.description }}
    </div>
    <div class="item__buttons-container">
      <Button title="Details" :full="true" :secondary="true" />
      <Button title="Add" :full="true" :primary="true" icon="shopping_cart" />
    </div>
  </div>
</template>
<script setup>
import Button from '@/components/Button.vue'
import StockStatus from '@/components/shop/StockStatus.vue'
import ItemCounter from '@/components/shop/ItemCounter.vue'
// import { ref } from 'vue'
const props = defineProps(['item'])
const item = props.item
const imgUrl = '../../assets/' + item.image
// const image = ref();

const fetchImage = (url) => {
  try {
    return new URL(url, import.meta.url)
  } catch (err) {
    console.log(err)
  }
}
</script>
<style scoped>
.item {
  background-color: var(--color-card);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: var(--card-width);
  aspect-ratio: 1/1.5;
  margin: 0 auto;
}
.item__status-container,
.item__status,
.item__title-container,
.item__prices-container,
.item__buttons-container,
.item__top {
  display: flex;
  gap: 8px;
}
.item__status-container,
.item__title-container,
.item__top {
  justify-content: space-between;
}

.item__title-container {
  flex-direction: column;
}
.item__status {
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
}
.item__description {
  font-size: 0.625rem;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.item__title {
  font-size: 0.9rem;
}
.item__discounted-price,
.item__price {
  color: var(--color-text);
  font-weight: 500;
  font-size: 0.75rem;
}
.item__price.discounted {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: line-through 2px solid var(--color-red);
}
.item__image {
  width: 4rem;
  height: 4rem;
}
.item__image > img {
  width: 100%;
  height: auto;
}
.item__game-icon {
  width: 2rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  border: 1px solid var(--color-green);
  border-radius: 24px;
  padding: 0.2rem;
}
.item__game-icon > img {
  height: 100%;
  width: auto;
}

.cart-icon-container {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem 0.4rem;
}

.item__onsale {
  font-size: 0.8rem;
}
.item__onsale::before {
  content: '•';
  margin-right: 0.4rem;
  color: var(--color-green);
}
</style>
