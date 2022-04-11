<template>
  <div id="app">
    <!-- $store.state.count를 통해서 바로 값을 들고 올수 있다 -->
    <h1>카운터에서 가져온 값입니다 {{count}}</h1>
    <button @click="$store.commit('addcount')">추가</button>
    <button @click="addcount">추가</button>

    <!-- 버튼을 누르면 1 감소하는 버튼을 추가해주세요 -->
    <button @click="$store.commit('subcount')">감소</button>

    <ul>
      <li 
      v-for="list in $store.state.list" 
      :key="list.id"
      >
        {{list.memo}}
      </li>
    </ul>

    <!-- index.js에 name : ['홍길동','성춘향','그린']을 추가하고 -->
    <!-- 아래에 computed를 이용하여 간략하게 만들어 이름을 출력하세요 -->
    <ul>
      <li 
      v-for="(name, i) in names"
      :key="i"
      >
        {{name}}
      </li>
    </ul>

    <p>{{ doneTodosCount }}</p>
    <p>{{doneTodoCountGetter}}</p>

    <hello-world></hello-world>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components : {
    HelloWorld 
  },
  computed : {
    //머스테치안의 내용이 길어지면 computed를 통해서 출력해줄수있다
    count :function(){
      return this.$store.state.count;
    },
    names : function() {
      return this.$store.state.name;
    },
    doneTodosCount : function(){
      return this.$store.state.todos.filter( todo => todo.done ).length
    },
    doneTodoCountGetter : function() {
      // store getters를 통해 계산 된 내용을 컴포넌트마다 가져와서 사용 
      return this.$store.getters.doneTodosCountGetter
    }
  },
  methods : {
    addcount : function() {
      this.$store.commit('addcount')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
