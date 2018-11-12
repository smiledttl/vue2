<template>
  <div id="about">
      <p>this is About component!</p>
      <p>{{msg}}</p>
      <p v-html="html"></p>
      <h2>Navigation</h2>
      <ul  class="nav nav-tabs">
        <li>
          <router-link to="/about/news">
          News
          </router-link>
        </li>
        <li>
          <router-link to="/about/message">
          Message
          </router-link>
        </li>
      </ul>
      <div id="counter-event-example">
        <p>{{ total }}</p>
        <button-counter name="counter1" v-on:increment="incrementTotal" ref="cnt1"></button-counter>
        <button-counter name="counter2"  v-on:increment="incrementTotal" ref="cnt2"></button-counter>
      </div>
      <sticky>
        <div slot="header">
          <h3>sticky title</h3>
        </div>
        <div slot="body" >
           <p > Body foo bar baz ddd </p > 
        </div >
      </sticky>
      <router-view />
  </div>
</template>
<script>
import ButtonCounter from './ButtonCounter'
export default {
  data: function () {
    return {
      msg: 'hello about dee',
      html: `<span style='color : red;'>显示红色的字你就解析成功了</span>`,
      total: 0
    }
  },
  components: {
    ButtonCounter,
    sticky:{
      template:`<div >
        <div class='wrapper'>
          <div class='title'><slot name='header'></slot></div>
          <div class='body'><slot name='body'></slot></div>
        </div>
      <div>`
    }
  },
  methods: {
    incrementTotal () {
      this.total += 1
    }
  },
  mounted(){
    // this.$refs.cnt1.$on("increment",this.incrementTotal);
    // this.$refs.cnt2.$on("increment",this.incrementTotal);
  }
}
</script>

<style >
.wrapper { display: flex; width: 100%; height: 150px; background: yellow; border-radius: 10px; } 
.title { border-bottom: 1px solid red } 
.body { border-bottom: 1px solid blue }



</style>
