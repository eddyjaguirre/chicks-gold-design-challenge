<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="container">
        <ul>
          <li v-for="(item, id) in paymentMethods" :key="id">
            <img :src="item" alt="" />
          </li>
          <li><span>and 50+ more</span></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container">
        <div class="footer__social">
          <ul>
            <li v-for="(item, id) in social" :key="id">
              <img :src="item" alt="" />
            </li>
          </ul>
        </div>
        <div class="footer__bottom-container">
          <div class="footer__bottom-image">
            <img :src="logo" alt="Chicks Gold Logo" />
            <p>support@chicksgold.com</p>
          </div>
          <div class="footer__bottom-menu" v-for="(section, id) in sections" :key="id">
            <h6>{{ section.title }}</h6>
            <ul>
              <li v-for="sub in section.submenu" :key="sub">{{ sub }}</li>
            </ul>
          </div>
          <div>
            <div class="footer__trustpilot">
              <img :src="trustpilot" alt="trustpilot" />
              <p>Trustpilot reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import visa from '../../assets/payment-methods/visa.svg'
import mastercard from '../../assets/payment-methods/mastercard.svg'
import amex from '../../assets/payment-methods/amex.svg'
import skrill from '../../assets/payment-methods/skrill.svg'
import crypto from '../../assets/payment-methods/crypto.svg'

import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import twitter from '../../assets/icons/twitter.svg'
import discord from '../../assets/icons/discord.svg'

import trustpilot from '../../assets/icons/trust-pilot-5-star.svg'

import logo from '../../assets/the-merchant-logo.png'

import { ref } from 'vue'

const paymentMethods = ref([visa, mastercard, amex, skrill, crypto])
const social = ref([facebook, instagram, twitter, discord])
const sections = ref([
  {
    title: 'Chicks Gold',
    submenu: ['Games', 'About Us', 'Blog', 'Sitemap']
  },
  {
    title: 'Support',
    submenu: ['Contact Us', 'FAQ']
  },
  {
    title: 'Legal',
    submenu: ['Privacy Policy', 'Terms of Service', 'Copyright Policy']
  }
])
</script>
<style scoped>
.footer {
  display: flex;
  flex-direction: column;
}
.footer__top {
  background-color: var(--color-background-darker);
  padding: 1.8rem 0;
}
.footer__top ul {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  list-style-type: none;
  margin: 0;
}
.footer__top ul li {
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer__bottom {
  background-color: var(--color-background);
}
.footer__social {
  border-bottom: 2px solid var(--color-secondary);
}
.footer__social ul {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  list-style-type: none;
  margin: 0;
  flex-wrap: wrap;
  margin: 2rem 0 1rem;
}
.footer__bottom-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  gap: 0.3rem;
}
.footer__bottom-container > div {
  width: 100%;
}
.footer__trustpilot {
  display: flex;
  gap: 0.5rem;
  font-size: 0.8rem;
  justify-content: center;
}
.footer__bottom-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
  gap: 20px;
  font-size: 14px;
}

.footer__bottom-image img {
  width: 60%;
}
.footer__bottom-menu {
  width: 100%;
  text-align: center;
  margin-bottom: 16px;
}
.footer__bottom-menu h6 {
  margin: 0;
  font-size: 1.1rem;
  margin-bottom: 20px;
}
.footer__bottom-menu ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.footer__bottom-menu ul li {
  font-size: 0.9rem;
  color: var(--color-text);
  opacity: 0.6;
  font-weight: 300;
}
@media (min-width: 768px) {
  .footer__bottom-image {
    align-items: flex-start;
  }
  .footer__bottom-image img {
    width: 80%;
  }
  .footer__bottom-container {
    flex-direction: row;
    align-items: flex-start;
  }
  .footer__bottom-container > div {
    width: 25%;
  }
  .footer__bottom-menu {
    width: 16.6667% !important;
    text-align: left;
  }
}
@media (max-width: 1024px) {
  .footer__top ul {
    flex-wrap: wrap;
  }
}
</style>
