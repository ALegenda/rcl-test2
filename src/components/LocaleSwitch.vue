<template>
  <div :class="$style.localeSwitch">
    <button
        :class="[$style.item, {[$style.active]: locale === 'ru'}]"
        type="button"
        @click="setLocale('ru')"
    >
      РУ
    </button>
    <span :class="$style.divider">&sol;</span>
    <button
        :class="[$style.item, {[$style.active]: locale === 'en'}]"
        type="button"
        @click="setLocale('en')"
    >
      ENG
    </button>
  </div>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {locale} = useI18n({useScope: 'global'})

const setLocale = (newLocale: string) => {
  locale.value = newLocale
}
</script>

<style module lang="scss">
.localeSwitch {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
}

.item {
  border: none;
  outline: none;
  background-color: transparent;

  font-family: Stratum2, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  color: #666F90;
  transition: 0.1s color ease-in-out;
  cursor: pointer;

  &:hover {
    color: #c1c1c1;
  }

  &.active {
    color: #FFFFFF;
  }
}

.divider {
  pointer-events: none;
  user-select: none;
  color: #666F90;
}
</style>
