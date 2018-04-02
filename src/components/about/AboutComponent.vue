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
        <button-counter v-on:increment="incrementTotal" name="counter1"></button-counter>
        <button-counter v-on:increment="incrementTotal" name="counter2"></button-counter>
      </div>
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
    ButtonCounter
  },
  methods: {
    incrementTotal () {
      this.total += 1
    }
  }
}
</script>

<style scoped>

</style>
