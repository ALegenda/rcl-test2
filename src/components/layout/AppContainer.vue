<template>
  <div :class="$style.container"><slot /></div>
</template>

<style module lang="scss">
.container {
  width: 99.25rem;
  max-width: 100%;
  padding-left: 3rem;
  padding-right: 3rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    width: 100%;
    padding-left: 2.2rem;
    padding-right: 2.2rem;

    // apply background only for content without padding area
    //background-color: green;
    //background-clip: content-box;
  }
}
</style>
