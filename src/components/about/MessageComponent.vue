<template id="message">
  <div>
    <ul>
        <li>Message 01</li>
        <li>Message 02</li>
        <li>Message 03</li>
    </ul>
    <my-button @click.native="buttonClick"></my-button>
    <!-- <p v-for='(tel, index) in telephone' v-bind:key="index" >{{  tel | newtel}}</p> -->
    <a v-for='(url, ind) in urlList' v-bind:key="ind"  :href='url.url | getquery(url.name, url.age)'>{{url.name}}</a>
    <div>
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">{{ checked }}</label>
    </div>
    <div>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <div>
      <p>radio:</p>
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <br>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <span>Picked: {{ picked }}</span>
    </div>
    <div>
      <p>select:</p>
      <select v-model="selected">
        <option v-for="o in options" v-bind:key="o.value" v-bind:value="o.value">{{o.text}}</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>
  </div>
</template>
<script>
import MyButton from '../button/MyButtonComponent'

export default {
  data: function () {
    return {
      msg: 'hello about dee',
      telephone: [
        10000000000,
        10000000001,
        10000000002,
        10000000003,
        10000000004,
        10000000005,
        10000000006,
        10000000007,
        10000000008,
        10000000009,
        10000000000
      ],
      urlList: [
        {url: 'http://www.baidu.com', name: 'ziksang', age: 20},
        {url: 'http://www.google.com', name: 'ziksang2', age: 30}
      ],
      checked: true,
      checkedNames: [],
      picked: '',
      selected: '',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
    }
  },
  components: {
    MyButton
  },
  methods: {
    buttonClick () {
      alert(`native click!`)
    }
  },
  filters: {
    newtel (value) {
      if (!value) return ''
      value = value.toString().substr(7, 4)
      value = '*'.repeat(7) + value
      let endNumber = value.substr(-1, 1)
      if (endNumber % 2 === 0) {
        value += '中奖'
      } else {
        value += '谢谢参与'
      }
      return value
    },
    getquery (value, name, age) {
      if (!value) return ''
      return `${value}?name=${name}&age=${age}`
    }
  }
}
</script>
