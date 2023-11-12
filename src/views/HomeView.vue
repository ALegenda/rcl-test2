<template>
  <main :class="$style.pageWrapper">
    <AppContainer :class="$style.pageContent">
      <div :class="$style.mobilePrependBlock">
        <span>CS2</span>
        <img src="@/assets/images/season2-logo.png" alt="Квалификации РКЛ">
      </div>

      <div :class="$style.titleContainer">
        <h1 :class="$style.title">
          <span>{{ t('home.title.0') }}</span>
          <span>{{ t('home.title.1') }}</span>
        </h1>

        <div :class="$style.marks">
          <img :class="$style.emblemImage" src="@/assets/images/season2-logo.png" alt="Квалификации РКЛ">

          <div :class="$style.brandName">
            <span>{{ t('brand').split(' ')[0] }}</span>
            <span>{{ t('brand').split(' ')[1] }}</span>
            <span>{{ t('brand').split(' ')[2] }}</span>
          </div>

          <img :class="$style.playerPlaceholderImage" src="@/assets/images/player-placeholder.png" alt="CS Player">
        </div>
      </div>

      <div :class="$style.applyContainer">
        <p :class="$style.prependBlock">CS2</p>

        <div :class="$style.applyCard">
          <div :class="$style.info">
            <div :class="$style.dates">
              <div :class="$style.caption">SEASON 2</div>
              <div :class="$style.inner">
                <p>{{ t('home.dates.0') }}</p>
                <div :class="$style.arrowIcon">
                  <ArrowIcon />
                </div>
                <p>{{ t('home.dates.1') }}</p>
              </div>
            </div>

            <p :class="$style.platformName">
              <span class="muted">{{ t('home.platform') }}:</span>
              FACEIT
            </p>
          </div>

          <div :class="$style.applyButtonContainer">
            <p>{{ t('home.apply.caption') }}</p>
            <a href="https://www.faceit.com/ru/championship/84765119-0357-4216-a15d-64a98efc346a/RCL%20qualifications%20RU%201" rel="noopener">
              {{ t('home.apply.action') }}
            </a>
          </div>
        </div>
      </div>

      <PartnersLinks :class="$style.partnersList"/>
    </AppContainer>
  </main>
</template>

<script setup lang="ts">
import AppContainer from "@/components/layout/AppContainer.vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";
import PartnersLinks from "@/components/PartnersLinks.vue";
import {useI18n} from "vue-i18n";

const {t} = useI18n({useScope: 'global'})
</script>


<style lang="scss" module>
.titleContainer {
  display: flex;
  position: relative;
}

.title {
  display: flex;
  flex-flow: column wrap;
  width: 100%;

  font-size: 10.3rem;
  font-weight: 900;
  color: #EEEBDA;
  text-transform: uppercase;
  line-height: 1;

  & > span {
    position: relative;
    z-index: 2;

    &:nth-child(2) {
      text-align: right;
    }
  }
}

.marks {
  position: absolute;
  top: -3rem;
  right: 0;
  //right: 23.9rem;
  //width: 642px;
  width: 40.6rem;

  display: flex;
  flex-flow: row nowrap;
  gap: 1.75rem;
  align-items: center;

  & > .emblemImage {
    $size: 16.5rem;
    width: $size;
    height: $size;

    user-select: none;
    pointer-events: none;

    z-index: 3;
  }

  & > .brandName {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    margin-right: 1.9rem;

    font-family: 'SF UI Display', sans-serif;
    font-size: 1.27rem;
    font-weight: 700;
    color: #666F90;
    text-transform: uppercase;
  }

  & > .playerPlaceholderImage {
    width: 3rem;
    height: 3rem;
    object-fit: contain;

    user-select: none;
    pointer-events: none;
  }

  @media (max-width: 1200px) {
    display: none;
  }
}

.applyContainer {
  display: flex;
  flex-flow: row nowrap;
  gap: 3.4rem;
  align-items: center;

  & > .prependBlock {
    font-family: 'SF UI Display', sans-serif;
    font-size: 14.76rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #EEEBDA;
    z-index: 2;
  }

  & > .applyCard {
    position: relative;
    padding: 1.5rem 1.85rem;
    border: 1px solid #303A5E;
    background: #070A15;

    font-family: 'SF UI Display', sans-serif;

    &:before, &:after {
      position: absolute;
      $size: 0.6rem;
      width: $size;
      height: $size;
      content: '';
      background: #303A5E;
    }

    &:before {
      left: -0.3rem;
      bottom: -0.3rem;
    }

    &:after {
      top: -0.3rem;
      right: -0.3rem;
    }

    & > .info {
      display: flex;
      flex-flow: column wrap;
      gap: 1.6rem;

      text-transform: uppercase;
      color: #EEEBDA;

      & > .dates {
        display: flex;
        flex-flow: column wrap;

        & > .caption {
          display: none;
        }

        & > .inner {
          display: flex;
          flex-flow: row nowrap;
          gap: 2rem;
          align-items: center;

          & > p {
            font-size: 1.25rem;
            font-weight: 500;
          }

          & > .arrowIcon {
            stroke: #EEEBDA;
          }
        }
      }

      & > .platformName {
        font-size: 1.25rem;
        font-weight: 700;

        & > span {
          font-weight: 500;
        }
      }
    }

    & > .applyButtonContainer {
      display: flex;
      flex-flow: row nowrap;
      text-align: center;
      line-height: 1;
      align-items: center;

      margin-top: 1.6rem;

      & > p {
        flex: 1 1 36%;
        padding: 1rem;

        font-family: 'SF UI Display', sans-serif;
        font-size: 1.25rem;
        font-weight: 700;
        text-transform: uppercase;
        color: #EEEBDA;

        background-color: transparent;
        border: 1px solid #EEEBDA;
      }

      & > a {
        flex: 1 1 auto;
        padding: 1rem;

        font-family: 'SF UI Display', sans-serif;
        font-size: 1.25rem;
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: none;
        color: #000;

        background-color: #EEEBDA;
        border: 1px solid #EEEBDA;

        transition: .2s background-color ease-in-out;

        &:hover {
          background-color: #dae1ee;
        }
      }
    }
  }
}

.partnersList {
  margin-top: 2.6rem;
  margin-left: 0.5rem;
  margin-bottom: 3rem;
}

@media (min-width: 1025px) {
  .pageWrapper {
    &:before {
      position: absolute;
      top: 19rem;
      left: 0;

      width: 84rem;
      height: 35rem;
      content: '';
      //background: url("@/assets/images/bg/bg-m-lm.png") 0px -12.8rem / 84rem 47rem no-repeat;
      background: url("@/assets/images/bg/bg-m-lm.png") no-repeat -38rem -16.5rem / 77rem 48rem;

      user-select: none;
      pointer-events: none;
    }

    &:after {
      position: absolute;
      bottom: 0;

      $width: 60rem;
      left: calc(100% - $width);
      width: $width;
      height: 24rem;

      content: '';
      background: url("@/assets/images/bg/bg-m-rb.png") no-repeat -26rem -10rem / 132rem 75rem;

      user-select: none;
      pointer-events: none;
    }

    & > .pageContent {
      position: relative;
      z-index: 2;
    }
  }

  .mobilePrependBlock {
    display: none;
  }
}

@media (max-width: 1024px) {
  .title {
    position: relative;

    & > span:nth-child(1) {
      position: relative;
      left: -0.31rem;

      font-size: 4.619rem;
      text-align: center;
    }

    & > span:nth-child(2) {
      position: relative;
      left: -0.275rem;

      font-size: 2.992rem;
      text-align: center;
    }
  }

  .mobilePrependBlock {
    position: relative;

    font-family: Stratum2, sans-serif;
    font-size: 14.765rem;
    font-weight: 900;
    text-transform: uppercase;
    line-height: 0.75;
    color: #EEEBDA;

    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px #EEEBDA;

    & > span {
      position: relative;
      display: inline-block;
      left: -0.94rem;
    }

    & > img {
      position: absolute;
      top: 49%;
      left: 49%;
      transform: translateX(-50%) translateY(-50%);

      $size: 8.7rem;
      width: $size;
      height: $size;
      object-fit: contain;

      user-select: none;
      pointer-events: none;
    }
  }

  .applyContainer {
    .prependBlock {
      display: none;
    }

    .applyCard {
      margin-top: 1rem;
      padding: 0;
      border: none;
      width: 100%;

      &:before, &:after {
        display: none;
      }

      & > .info > .dates {
        flex-flow: row nowrap;
        justify-content: space-evenly;
        align-items: center;

        & > .caption {
          display: block;
          font-family: Stratum2, sans-serif;
          font-size: 1.9rem;
          font-weight: 500;
          text-transform: uppercase;
        }

        & > .inner {
          flex-flow: column wrap;
          gap: 0.68rem;
          align-items: start;

          & > p {
            font-size: 0.87rem;
          }

          & > .arrowIcon {
            stroke: transparent;
          }
        }
      }

      .platformName {
        display: none;
      }

      .applyButtonContainer {
        flex-flow: column wrap;
        width: 100%;
        margin-top: 3.29rem;
        gap: 1.3rem;

        & > p {
          flex-basis: 100%;
          padding: 0;
          font-size: 0.87356rem;
          text-align: center;
          border: transparent;
        }

        & > a {
          width: 100%;
          padding: 0.96rem;
          font-size: 1.13rem;
        }
      }
    }
  }
}
</style>
