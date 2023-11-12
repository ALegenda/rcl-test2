<template>
  <button :class="buttonStyles" :type="props.type">
    <slot/>
  </button>
</template>

<script setup lang="ts">
import {computed, useCssModule} from "vue";

const props = withDefaults(defineProps<{
  type?: 'button' | 'submit' | 'reset'
  highlighted?: boolean,
}>(), {
  type: 'button',
  highlighted: false,
})

const style = useCssModule()

const buttonStyles = computed(() => [
  style.button,
  props.highlighted && style.highlighted,
])
</script>

<style module lang="scss">
.button {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 1.45rem 5rem;
  min-width: 15.5rem;

  font-family: Stratum2, sans-serif;
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;

  user-select: none;

  background: #1A2036;
  border: none;
  outline: none;

  transition-property: background-color, color;
  transition-duration: 0.1s;
  transition-timing-function: ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #272d49;
  }

  &.highlighted {
    background-color: #0048FF;

    &:hover {
      background-color: #0069ff;
    }
  }

  @media (max-width: 1024px) {
    padding: 0.9rem;
    min-width: auto;
    width: 100%;
    max-width: 100%;
  }
}
</style>
