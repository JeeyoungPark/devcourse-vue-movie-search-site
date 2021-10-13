export default {
  namespaced: true,
  state() {
    return {
      input: '',
      contentId: '',
      page: 1,
    };
  },
  getters: {},
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
    },
    addPage(state) {
      return state.page++;
    },
    accumulateContents(state) {
      state.contents = [...state.contents, ...state.nextContents];
    }
  },
  actions: {
    // NOTE 검색어 입력시 목록 불러오기
    async readContents({ commit }, payload) {
      const contents = await fetch(`https://www.omdbapi.com?apikey=7035c60c&s=${payload}&page=1`, {
        method: 'GET',
      })
        .then(res => res.json())
        .then(res => res.Search);

      commit('assignState', {
        contents: contents,
        input: payload,
      });
    },
    // NOTE 무한스크롤 - 다음 페이지 불러오기
    async loadMore({ commit, state }, payload) {
      commit('addPage');

      const nextContents = await fetch(`https://www.omdbapi.com?apikey=7035c60c&s=${state.input}&page=${payload + 1}`,{
        method: 'GET',
      })
        .then(res => res.json())
        .then(res => res.Search);

      commit('assignState', {
        nextContents: nextContents,
      });
      commit('accumulateContents');
    },
    // NOTE 카드 클릭시 contenId 업데이트
    updateContentId({ commit }, contentId) {
      commit ('assignState', {
        contentId
      });
      console.log(contentId);
    },
    // NOTE 클릭한 카드 정보 불러오기
    async readContent({ commit }, contentId) {
      const content = await fetch(`https://www.omdbapi.com?apikey=7035c60c&i=${contentId}&plot=full`, {
        method: 'GET',
      }).then(res => res.json());
      console.log(content);

      commit('assignState', {
        content: content
      });
    },
  },
};
