<template>
  <div>
    <h1>{{title}}</h1>
    <ul>
      <li v-for="(todo,index) in todos" v-bind:key="index" :id="index" :class="{'checked':todo.done}">
        <label>{{index+1}}.{{todo.value}} </label>
        <time>{{todo.created | date}}</time>
      </li>
    </ul>
  </div>
</template>
<script>
function formatDate (item) {
  var now = new Date(item)
  var year = now.getFullYear()
  var month = now.getMonth() + 1
  var date = now.getDate()
  var hour = now.getHours()
  var minute = now.getMinutes()
  var second = now.getSeconds()
  return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
}
export default {
  data: function () {
    return {
      title: 'vue todos',
      todos: [
        {value: '阅读一些vue相关的书籍', done: true, created: Date.now()},
        {value: '补充代码', done: false, created: Date.now() + 300000},
        {value: '写心得', done: false, created: Date.now() - 300000}
      ]
    }
  },
  filters: {
    date (val) {
      //debugger
      // var tempDate = new Date(val);
      // return tempDate.year() + '-' + tempDate.month() + '-' + tempDate.day()
      return formatDate(val)
    }
  }
}
</script>
<style scoped>
  ul {
    list-style-type: none;
    padding: 0 20px;
    border-top: 1px solid #ccc;
    background: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 10px 30px #ccc;
    position: relative;
    text-align: left;
  }
  .checked{
    background: blue;
  }
</style>
