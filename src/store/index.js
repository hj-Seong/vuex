import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 값을 저장해서 가져오는 공간
    count: 10,
    list: [
      { id: 1, memo: "a" },
      { id: 2, memo: "b" },
    ],
    name: ["홍길동", "성춘향", "그린"],
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
    ],
  },
  getters: {
    doneTodosCountGetter: function (state) {
      // 동일한 형식으로 사용할수 있다
      // filter( function(배열의 요소를 담는 변수) { return 참일때 요소값을 배열에 추가 } )
      return state.todos.filter((todo) => todo.done).length;
    },
    todosReverse: function (state) {
      return state.todos.reverse();
    },
    // todo의 id값을 통해 todo객체 반환
    getTodoById: (state) => (id) => {
      return state.todos.find((todo) => todo.id === id);
    },
  },
  mutations: {
    // data의 methods와 비슷한 역할
    addcount: function (state) {
      state.count++;
    },
    subcount: function (state) {
      state.count--;
    },
    ncount: function (state, n) {
      state.count += n;
    },
  },
  actions: {},
  modules: {},
});
