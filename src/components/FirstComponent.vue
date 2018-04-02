<template>
  <div id="FirstComponent">
    <!-- <h1>I am a title</h1>
    <p>age:<input type="text" v-model="age">
    author:<input type="text" v-model="author"></p>
    <a >wrtie by {{author}}</a>
    <h1 v-if="yes">Yes</h1>
    <h1 v-if="no">NO</h1>
    <h1 v-if="age>=28">Age:{{age}}</h1>
    <h1 v-show="author.indexOf('jack') >= 0">Name: {{ author }}</h1>
    <div>
      <button type="button" v-on:click="greet">Greet</button>
      <button type="button" v-on:click="say('Hi')">hi</button>
    </div> -->
    <div>
      <fieldset>
        <legend>
            Create New Person
        </legend>
        <div class="form-group">
            <label>Name:</label>
            <input type="text" v-model="newPerson.name"/>
        </div>
        <div class="form-group">
            <label>Age:</label>
            <input type="text" v-model="newPerson.age"/>
        </div>
        <div class="form-group">
            <label>Sex:</label>
            <select v-model="newPerson.sex">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
        </div>
        <div class="form-group">
            <label></label>
            <button @click="createPerson">Create</button>
        </div>
        </fieldset>
    </div>
    <div style="text-align:center;width:100%;">
    <table style="width:100%;align:center;margin:10px auto;">
                <thead>
                    <tr class="title">
                        <th>Index</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Sex</th>
                        <th>Opration</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(person,index) in people"  v-bind:key="index" v-bind:class="person.age==25?'active':''">
                        <td >{{index}}</td>
                        <td >{{ person.name  }}</td>
                        <td >{{ person.age  }}</td>
                        <td >{{ person.sex  }}</td>
                        <td :class="'text-center'"><button @click="deletePerson(index)">Delete</button></td>
                    </tr>
                </tbody>
            </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      message: 'Hello vue!',
      author: 'Liulb',
      yes: true,
      no: false,
      age: 28,
      newPerson: {name: '', age: 0, sex: 'Male'},
      people: [{name: 'aa', age: 25, sex: '男'}, {name: 'bb', age: 36, sex: '男'}, {name: 'cc', age: 27, sex: '女'}]
    }
  },
  methods: {
    greet: function () {
      // 方法内 `this` 指向 vm
      alert(this.message)
    },
    say: function (msg) {
      alert(msg)
    },
    createPerson: function () {
      this.people.push(this.newPerson)
      this.newPerson = {name: '', age: 0, sex: 'Male'}
    },
    deletePerson: function (index) {
      console.log(this.people[index])
      this.people.splice(index, 1)
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
.active {
  background-color:red;
  font-size:20px;
}
.title {
  background-color:blue;
  font-size:20px;
}
</style>
