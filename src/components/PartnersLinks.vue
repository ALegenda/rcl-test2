<template>
  <div :class="$style.partnersList">
    <div v-for="(item, index) in links" :key="index" :class="$style.partnerItem">
      <img :src="item.iconUrl" :alt="item.alt" :style="{'height': item.height}">
    </div>
  </div>
</template>

<script setup lang="ts">
import nftIcon from '@/assets/images/partners/partner-nft.png'
import cgdIcon from '@/assets/images/partners/partner-cgd.png'
import fedIcon from '@/assets/images/partners/partner-fed.png'
import sinIcon from '@/assets/images/partners/partner-sin.png'
import {useI18n} from "vue-i18n";

const {t} = useI18n({useScope: 'global'})

const links = [
  {
    iconUrl: nftIcon,
    alt: t('partners.nft'),
    height: '2.7rem',
  },
  {
    iconUrl: cgdIcon,
    alt: t('partners.cgd'),
    height: '3.2rem',
  },
  {
    iconUrl: fedIcon,
    alt: t('partners.fed'),
    height: '3.5rem',
  },
  {
    iconUrl: sinIcon,
    alt: t('partners.sin'),
    height: '1.4rem',
  },
];
</script>

<style module lang="scss">
.partnersList {
  display: inline-grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: 4.6rem;

  & > .partnerItem {
    flex: 0 1 auto;
    opacity: 0.5;
    transition: 0.2s opacity ease-in-out;
    text-decoration: none;

    & > img {
      height: 100%;
      max-width: 100%;
      object-fit: contain;
      //aspect-ratio: 4/2;

      user-select: none;
      pointer-events: none;
    }

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    gap: 2rem;
  }
}
</style>
