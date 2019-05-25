import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // data
    allUsers: [
      {
        userId: "hoza123",
        password: "123",
        name: "Hoza",
        address: "Seoul",
        src: "https://goo.gl/oqLfJR"
      },
      {
        userId: "max123",
        password: "456",
        name: "Max",
        address: "Berlin",
        src: "https://goo.gl/Ksk9B9"
      },
      {
        userId: "lego123",
        password: "789",
        name: "Lego",
        address: "Busan",
        src: "https://goo.gl/x7SpCD"
      }
    ]
  },
  getters: {
    // computed
    allUsersCount: state => {
      return state.allUsers.length;
    },
    countOfSeoul: state => {
      let count = 0;
      state.allUsers.forEach(user => {
        if (user.address === "Seoul") count++;
      });
      return count;
    },
    percentOfSeoul: (state, getters) => {
      return Math.round((getters.countOfSeoul / getters.allUsersCount) * 100);
    }
  },
  mutations: {
    addUsers: (state, payload) => {
      state.allUsers.push(payload);
    }
  },
  actions: {
    // state를 변화시키는건 mutation
    // state를 변화시키기 위한 로직부분 비동기, 유효성, api호출 등등
    addUsers: ({ commit }, payload) => {
      // context, payload
      // { commit }, payload
      // context를 붙이지않게하기위해 저런방식으로 씀
      commit("addUsers", payload);
    }
  }
});
