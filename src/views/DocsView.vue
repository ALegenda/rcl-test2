<template>
  <main>
    <div :class="$style.pageBackground"/>

    <AppContainer :class="$style.container">
      <h1 :class="$style.pageTitle">{{ t('navigation.docs') }}</h1>
      <p :class="$style.subTitle">{{ t('docs.subTitle') }}</p>

      <div :class="$style.docsList">
        <div v-for="(item, index) in docs" :key="index" :class="$style.item">
          <a :href="item.link" :class="$style.name">{{ item.name }}</a>
          <p :class="$style.size">{{ item.size.toLocaleString('ru-RU') }} {{ t('docs.sizeKb') }}</p>
        </div>
      </div>

      <div :class="$style.partnersList">
        <PartnersLinks/>
      </div>
    </AppContainer>
  </main>
</template>

<script lang="ts" setup>
import {useI18n} from 'vue-i18n'
import AppContainer from '@/components/layout/AppContainer.vue'
import PartnersLinks from '@/components/PartnersLinks.vue'

const {t} = useI18n({useScope: 'global'})

const docs = [
  {
    name: 'Договор о соорганизации и делегировании между РКЛ и ФКС России',
    link: '/files/Договор_о_соорганизации_и_делегировании_между_РКЛ_и_ФКС_России_доп.pdf',
    size: 1537,
  }, {
    name: 'Дисциплинарный регламент РКЛ Сезон 2023',
    link: '/files/Дисциплинарный_регламент_РКЛ_Сезон_2023.pdf',
    size: 592,
  }, {
    name: 'Регламент соревнований (SII)',
    link: '/files/Регламент соревнований (SII).pdf',
    size: 668,
  },
]
</script>

<style lang="scss" module>
.container {
  position: relative;
  z-index: 2;
}

.pageTitle {
  font-size: 2rem;
  font-weight: 900;
  color: #eeebda;
  text-align: center;
  text-transform: uppercase;

  margin-bottom: 0.9rem;
}

.subTitle {
  font-size: 1rem;
  font-weight: 400;
  color: #eeebda;
  text-align: center;
  text-transform: uppercase;
}

.partnersList {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin-bottom: 3rem;
}

.docsList {
  display: flex;
  flex-flow: column wrap;
  gap: 3rem;

  align-items: center;


  @media (max-width: 1024px) {
    margin: 1.9rem 0 2.7rem;
  }

  @media (min-width: 1025px) {
    margin: 3.6rem 0 8rem;
  }

  & > .item {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    gap: 0.3rem;

    & > .name {
      font-size: 1.125rem;
      font-weight: 400;
      color: #3b83f0;
      text-transform: uppercase;
      text-decoration: underline;
      text-decoration-color: #3b83f0;
      text-decoration-style: solid;
      text-decoration-thickness: 2px;
      text-underline-offset: 3px;
      cursor: pointer;

      transition: .1s color ease-in-out, .1s text-decoration-color ease-in-out;

      &:hover {
        //color: #EEEBDA;
        text-decoration-color: transparent;
      }
    }

    & > .size {
      font-size: 1.125rem;
      font-weight: 400;
      color: #EEEBDA;
      text-transform: uppercase;
    }
  }
}

@media (min-width: 1025px) {
  .pageBackground {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    pointer-events: none;
    user-select: none;

    &:before {
      position: absolute;
      left: 0;
      top: 15.7rem;
      width: 100%;
      height: calc(100% - 15.7rem);
      // 72.6rem
      max-height: 100%;
      content: '';

      background-image: url('@/assets/images/bg/bg-page.jpeg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-color: lightgray;
      mix-blend-mode: overlay;
    }

    &:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 25rem;
      content: '';

      background: linear-gradient(
        to bottom,
        #070A15 70%,
        transparent 100%
      );
      //background-color: linear-gradient(0deg, #fff, red);

      //background: linear-gradient(0deg, #070A15 20%, rgba(7, 10, 21, 0.00) 100%);
    }
  }
}
</style>
