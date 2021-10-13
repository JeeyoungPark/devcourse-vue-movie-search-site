<template>
  <div class="app__container">
    <Header class="page__header"/>
    <RouterView />
  </div>
</template>


<style scoped lang="scss">
* {
  box-sizing: border-box;
  color: $color-font;
}
.app__container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $color-background--bright;
  /* NOTE app 전역 폰트 설정 */
  font-size: 18px;
  line-height: 1.4;
  font-family: 'Noto Sans KR', sans-serif;
}
</style>