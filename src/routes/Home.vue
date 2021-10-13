<template>
  <div
    class="page__content"
    ref="scroll"
  >
    <div class="content__container">
      <!-- TODO Card.vue 컴포넌트로 분리 -->
      <div
        class="content__card"
        :id="content.imdbID"
        v-for="content in contents"
        :key="content.imdbID"
        @click="updateContentId"
      >
        <div class="card__img">
          <img
            :src="content.Poster"
            alt="No Image"
          />
        </div>
        <div class="card__title">
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
    },
    page() {
      return this.$store.state.content.page;
    },
    input() {
      return this.$store.state.content.input;
    }
  },
   mounted() {
    let timer = null;

    this.$refs.scroll.addEventListener('scroll', () => {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;

          const { scrollHeight, scrollTop, clientHeight } = this.$refs.scroll;
          const isScrollEnded = scrollHeight - 200 < scrollTop + clientHeight;

          if (isScrollEnded) {
            this.loadMore(this.page);
          }
        }, 200);
      }
    });
  },
  methods: {
    updateContentId (e) {
      this.$store.dispatch('content/updateContentId', e.currentTarget.id);
      this.$router.push(`/detail/${e.currentTarget.id}`);
    },
    loadMore (page) {
      this.$store.dispatch('content/loadMore', page);
    }
  }
};
</script>

<style scoped lang="scss">
.page__content {
  width: 100%;
  height: calc(100vh - 100px);
  overflow-y: auto;
  display: flex;
  justify-content: center;
  &::-webkit-scrollbar {
    display: none;
  }
  .content__container {
    width: 80vw;
    padding-top: 14px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 420px;

    .content__card {
      padding-top: 14px;
      background-color: $color-background--dark;
      border-radius: $border-radius;
      display: flex;
      flex-direction: column;
      align-items: center;
      &:hover {
        cursor: pointer;
      }
      .card__img {
        width: 90%;
        height: 75%;
        flex-grow: 1;
        img {
          width: 100%;
          height: 100%;
          border-radius: $border-radius;
          object-fit: cover;
          &:hover {
            filter: brightness(20%);
          }
        }
      }
      .card__title {
        /* width: 100%; */
        height: 50px;
        padding: 10px;
        /* flex-grow: 1; */
        display: flex;
        align-items: center;
        font-size: 14px;
      }
    }
  }
}
</style>