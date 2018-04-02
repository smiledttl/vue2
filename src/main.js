// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App1 from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */

var data = {a: 2}
var vm = new Vue({
  el: '#app11',
  router,
  data: data,
  // components: { App },
  // template: '<App/>',
  render: h => h(App1),
  created: function () {
    // `this` 指向 vm 实例
    // debugger
    console.log('a is: ' + this.a)
  }
})

// debugger
console.log('data:' + (vm.$data === data)) // -> true
console.log(vm.$el === document.getElementById('app')) // -> true
// $watch 是一个实例方法
vm.$watch('a', function (newVal, oldVal) {
  // 这个回调会在 `vm.a` 改变的时候触发
  console.log(oldVal, newVal)
})
