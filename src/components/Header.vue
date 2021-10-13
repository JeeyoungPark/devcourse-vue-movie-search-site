<template>
  <header>
    <h1 @click="initialize">영화 검색 사이트</h1>
    <input
      placeholder="영화 제목을 입력하세요."
      :value="input"
      @keyup.enter="readContents"
    />
  </header>
</template>

<script>
export default {
  computed: {
    input() {
      return this.$store.state.content.input;
    }
  },
  methods: {
    initialize () {
      this.$router.push('/');
      this.$store.commit('content/assignState', {
        input: '',
        contents: [],
      });
    },
    readContents (e) {
      this.$store.dispatch('content/readContents', e.target.value);
    }
  }
};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}
header {
  width: 100%;
  height: 120px;
  padding: 14px 160px;
  background-color: $color-background--dark;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    justify-items: center;
    font-size: 1.6rem;
    color: $color-font;
    padding-right: 20px;
    &:hover {
      cursor: pointer;
    }
  }
  input {
    width: 500px;
    height: 50px;
    border: 4px solid $color-background--dark;
    border-radius: $border-radius;
  }
}
</style>