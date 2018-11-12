<template>
  <div>
    <p><button v-on:click="increment_sub">{{name}}</button>Counter:{{ counter }}</p>
  </div>
</template>
<script>
export default {
  props: ['name'],
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    increment_sub () {
      this.counter += 1
      this.$emit('increment')
    }
  }

}
</script>
