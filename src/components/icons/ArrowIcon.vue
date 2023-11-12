<template>
  <svg :class="$style.mobileIcon" xmlns="http://www.w3.org/2000/svg" width="133" height="12" viewBox="0 0 133 12" fill="none">
    <path
        d="M132.17 6.2561C132.451 5.97473 132.451 5.51855 132.17 5.23719L127.585 0.652097C127.303 0.370733 126.847 0.370733 126.566 0.652097C126.284 0.933461 126.284 1.38964 126.566 1.67101L130.641 5.74664L126.566 9.82228C126.284 10.1036 126.284 10.5598 126.566 10.8412C126.847 11.1226 127.303 11.1226 127.585 10.8412L132.17 6.2561ZM0.277954 6.46712H131.66V5.02617H0.277954V6.46712Z"
        fill="white"/>
  </svg>
  <svg :class="$style.desktopIcon" xmlns="http://www.w3.org/2000/svg" width="268" height="16" viewBox="0 0 268 16" fill="none">
    <path
        d="M267.707 8.70711C268.098 8.31658 268.098 7.68342 267.707 7.29289L261.343 0.928932C260.953 0.538408 260.319 0.538408 259.929 0.928932C259.538 1.31946 259.538 1.95262 259.929 2.34315L265.586 8L259.929 13.6569C259.538 14.0474 259.538 14.6805 259.929 15.0711C260.319 15.4616 260.953 15.4616 261.343 15.0711L267.707 8.70711ZM0 9H267V7H0V9Z"
        fill="#EEEBDA"/>
  </svg>
</template>

<style lang="scss" module>
@media (max-width: 1024px) {
  .mobileIcon {
    display: block;
  }
  .desktopIcon {
    display: none;
  }
}

@media (min-width: 1025px) {
  .mobileIcon {
    display: none;
  }
  .desktopIcon {
    display: block;
  }
}
</style>
<script setup lang="ts">
</script>
