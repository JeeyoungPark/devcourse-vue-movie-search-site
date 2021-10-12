export default {
  namespaced: true,
  state() {
    return {
      input: '',
    };
  },
  getters: {},
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
    }
  },
  actions: {
    async readContents({ commit }, input) {
      const contents = await fetch(`https://www.omdbapi.com?apikey=7035c60c&s=${input}&page=3`, {
        method: 'GET',
        // headers: {
        //   'Content-Type': 'application/json',
        //   'x-username': 'jy'
        // }
      })
        .then(res => res.json())
        .then(res => res.Search);
      console.log(contents);
      commit('assignState', {
        contents: contents
      });
    },
    readContent() {
    },
    // createContent() {},
    // updateContent() {
    // },
    // deleteContent() {
    // },
  },
};
