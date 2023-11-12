<template>
  <header>
    <div :class="$style.headerContainer">
      <RouterLink :class="$style.logoItem" to="/">
        <LogoIcon/>
      </RouterLink>

      <nav :class="$style.navigationMenu">
        <RouterLink v-if="route.path !== '/'" to="/">
          <TabButton>
            {{ t('navigation.home') }}
          </TabButton>
        </RouterLink>
        <RouterLink v-else to="/docs">
          <TabButton>
            {{ t('navigation.docs') }}
          </TabButton>
        </RouterLink>

        <a href="https://ruscyberleague.ru/" rel="noopener">
          <TabButton highlighted>
            {{ t('navigation.s1Results') }}
          </TabButton>
        </a>
      </nav>

      <div :class="$style.localeSwitch">
        <LocaleSwitch/>
      </div>
    </div>

    <div :class="$style.headerFooter">
      <SocialLinks :class="$style.socialLinks"/>
    </div>
  </header>
</template>

<script setup lang="ts">
import {RouterLink, useRoute} from "vue-router";
import LogoIcon from "@/components/icons/LogoIcon.vue";
import TabButton from "@/components/TabButton.vue";
import LocaleSwitch from "@/components/LocaleSwitch.vue";
import SocialLinks from "@/components/SocialLinks.vue";
import {useI18n} from "vue-i18n";

const route = useRoute()
const {t} = useI18n({useScope: 'global'})
</script>

<style module lang="scss">
.headerContainer {
  max-width: 115rem;
  margin: 0 auto;
  padding: 3.3rem 3rem 0;

  display: flex;
  flex-flow: row nowrap;
}

.logoItem {
  flex: 0 1 auto;
  width: 9.5rem;

  & > img, & > svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.navigationMenu {
  display: flex;
  flex-flow: row nowrap;
  flex: 0 0 auto;
  margin-left: auto;
  margin-right: auto;
  align-items: center;

  & > a {
    text-decoration: none;
  }
}

.localeSwitch {
  flex: 0 1 auto;
  align-self: center;
  display: flex;
  justify-content: flex-end;
  min-width: 7.5rem;
}

.headerFooter {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding-top: 3.9rem;
  padding-bottom: 3.5rem;
}

@media (max-width: 1024px) {
  .headerFooter {
    padding: 1.75rem;

    & > .socialLinks {
      gap: 1.3rem;
    }
  }

  .headerContainer {
    max-width: 100%;
    width: 100%;
    flex-wrap: wrap;
    padding: 2rem 2.2rem 0;
  }

  .logoItem {
    width: 8.5rem;
    margin-right: auto;
    margin-bottom: 2.7rem;
    order: 1;
  }

  .localeSwitch {
    order: 2;
    margin-top: -2rem;
  }

  .navigationMenu {
    width: 100%;
    order: 3;

    & > a {
      flex: 1 1 50%;
    }
  }
}
</style>
