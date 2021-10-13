<template>
  <div class="page__content">
    <div class="detail__container">
      <div class="detail__card">
        <!-- TODO Card.vue 컴포넌트로 대체 -->
        <div
          class="content__card"
          :id="content.imdbID"
        >
          <div class="card__img">
            <img :src="content.Poster" alt="No Image" />
          </div>
          <div class="card__title">
            {{ content.Title }}
          </div>
      </div>
      </div>

      <div class="detail__info">
        <ul>
          <li>개봉일&nbsp;&nbsp;&nbsp;{{ content.Released }}</li>
          <li>등급&nbsp;&nbsp;&nbsp;{{ content.Rated }}</li>
          <li>평점&nbsp;&nbsp;&nbsp;{{ content.Ratings[0].Value }}</li>
          <li>런타임&nbsp;&nbsp;&nbsp;{{ content.Runtime }}</li>
          <li>출연진&nbsp;&nbsp;&nbsp;{{ content.Actors }}</li>
        </ul>
        <div>
          <div>줄거리</div>
          <div class="plot">{{ content.Plot }}</div>
        </div>
      </div>

      <button class="detail__button" @click="this.$router.push('/')">
        검색 결과로 돌아가기
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    contentId() {
      return this.$store.state.content.contentId;
    },
    content() {
      return this.$store.state.content.content;
    }
  },
  created() {
    this.$store.dispatch('content/readContent', this.contentId);
  }
};
</script>

<style scoped lang="scss">
.page__content {
  width: 100vw;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  .detail__container {
    width: 60vw;
    height: 100%;
    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 1fr 1.5fr;
    justify-items: center;
    align-items: center;
  }
}
.detail__card {
  .content__card {
    width: 290px;
    height: 400px;
    margin: 10px;
    background-color: $color-background--dark;
    border-radius: $border-radius;
    display: flex;
    flex-direction: column;
    align-items: center;
    .card__img {
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
    .card__title {
      padding: 10px;
      flex-grow: 1;
      display: flex;
      align-items: center;
      font-size: 18px;
    }
  }
}
.detail__info {
  padding: 14px;
  display: flex;
  flex-direction: column;
  ul {
    list-style: none;
    padding-left: 0;
    li {
      padding: 5px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp:1;
      -webkit-box-orient: vertical;
    }
  }
  .plot {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient: vertical;
  }
}
.detail__button {
  background-color: $color-background--dark;
  border: none;
  border-radius: 10px;
  width: 180px;
  height: 40px;
  color: $color-font;
  &:hover {
    cursor: pointer;
    /* border: 2px solid $color-font; */
    background-color: $color-background--dark--hover;
    color: $color-background--dark;
    font-weight: bolder
  }
}
</style>

