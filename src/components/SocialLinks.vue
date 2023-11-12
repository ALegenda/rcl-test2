<template>
  <div :class="$style.wrapper">
    <a
        v-for="(link, index) in links"
        :key="index"
        :href="link.href"
        target="_blank"
        rel="noopener"
    >
      <img :src="link.iconUrl" :alt="link.alt">
    </a>
  </div>
</template>

<script setup lang="ts">
import vkIcon from '@/assets/images/social/vk.svg'
import tgIcon from '@/assets/images/social/telegram.svg'
import twIcon from '@/assets/images/social/twitch.svg'
import ytIcon from '@/assets/images/social/youtube.svg'
import {useI18n} from "vue-i18n";

const {t} = useI18n({useScope: 'global'})

const links = [
  {
    href: 'https://vk.com/ruscyberleague',
    iconUrl: vkIcon,
    alt: t('socials.vk'),
  },
  {
    href: 'https://t.me/ruscyberleague',
    iconUrl: tgIcon,
    alt: t('socials.tg'),
  },
  {
    href: 'https://www.twitch.tv/ruscyberleague',
    iconUrl: twIcon,
    alt: t('socials.tw'),
  },
  {
    href: 'https://www.youtube.com/@ruscyberleaguecs',
    iconUrl: ytIcon,
    alt: t('socials.yt'),
  },
];
</script>

<style module lang="scss">
.wrapper {
  display: flex;
  flex-flow: row nowrap;
  gap: 1.6rem;
  align-items: center;

  user-select: none;

  & > a {
    transition: .2s opacity ease-in-out;

    &:hover {
      opacity: .7;
    }
  }
}
</style>
