<template id="news">
  <div>
    <ul>
        <li>News 01</li>
        <li>News 02</li>
        <li>News 03</li>
    </ul>
    <div>
        <a :href='href'>href</a>
        <p :id='id'>id</p>
        <img :src="src" alt="图片">
        <button :disabled = 'disabled'>按钮</button>
     </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      msg: 'hello about dee',
      id: 2,
      href: 'http://www.baidu.com',
      src: 'https://cn.vuejs.org/images/logo.png',
      disabled: true
    }
  }
}
</script>
