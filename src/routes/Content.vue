<template>
  <div class="page__content">
    <div class="content__container">
      <div
        class="content__item"
        v-for="content in contents"
        :key="content.imdbID"
      >
        <div class="item__img">
          <img :src="content.Poster" :alt="content.Title" />
        </div>
        <div class="item__title">
          {{ content.Title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    contents() {
      return this.$store.state.content.contents;
    }
  },
  // created() {
  //   this.$store.dispatch('content/readContents');
  // }
};
</script>

<style scoped lang="scss">
.page__content {
  width: 100%;
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  justify-content: center;

  .content__container {
    width: 80vw;
    padding-top: 14px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 420px;

    .content__item {
      margin: 10px;
      background-color: $color-background--dark--hover;
      border-radius: $border-radius;
      display: flex;
      flex-direction: column;
      align-items: center;
      & :hover {
        cursor: pointer;
      }
      .item__img {
        width: 270px;
        height: 300px;
        padding: 10px;
        img {
          width: 100%;
          height: 100%;
          border-radius: $border-radius;
          object-fit: cover;
        }
      }
      .item__title {
        padding: 10px;
        flex-grow: 1;
        display: flex;
        align-items: center;
        font-size: 18px;
      }
    }
  }
}
</style>