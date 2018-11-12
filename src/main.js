// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App1 from './App'
import router from './router'

Vue.config.productionTip = false

/*var Dep ={ target:null};

function DefineVUEProperty(obj,key,val){
  var deps=[];
  Object.defineProperty(obj,key,{
    get:function(){
      if(Dep.target && deps.indexOf(Dep.target) == -1){
        deps.push(Dep.target);
      }
      return val;
    },
    set:function(newValue){
      val=newValue;
      for(var i=0; i<deps.length;i++){
        deps[i]();
      }
    }
  })
}

function DefineVUEComputed(obj,key,computeFunc){
  var onDependencyUpdated = function () {
     var value = computeFunc (); 
     console.log(' dependence value:' + value) 
  }; 

  Object.defineProperty(obj,key,{
    get:function(){
      Dep.target = onDependencyUpdated;
      var value=computeFunc();
      Dep.target=null;
      return value;
    }
  })
}
*/
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

/*
Vue.directive("hidden",{
  update:function(el,binding){
    el.style.display = binding.value?"none":"inline";

  }
})

Vue.component("tag",{
  template:"<div>自定义的组件 tag</div>"
})

var app = new Vue({
  el:"#todoapp",
  data:{    
      content:"",
      items:[],
      things:[{foo:1},{foo:2}],
      obj:{},
      styleObject:{
        color:'red',
        fontSize:'16px'
      },
      person:{
        name:"forado",
        group:"flydragn"
      },
      isChecked:true,
      f:false,
      current:"archives",
      i:0,
      b:["Home","Posts","Archives"]
  },
  components:{
    Archives:{template:"<div>Archives</div>"},
    Posts:{template:"<div>Posts</div>"},
    Home:{template:"<div>Home</div>"}
  },
  computed:{
    myContent:function()
    {
      return "￥"+this.content;
    }
  },
  methods:{
    add:function(){
      if(this.content){
        var isFind=false;
        for(var i=0;i<this.items.length;i++){
          if(this.content == this.items[i]){
            isFind=true;
            break;
          }
        }
        if(!isFind){
          this.items.push(this.content);
          this.content="";
        }
      }
    },
    del:function(index){
      this.items.splice(index,1);
    },
    checkChange:function(){
      //this.isChecked=!this.isChecked;
      this.isChecked=this.$refs.ck1.checked;
      this.f=!this.f;
    },
    change:function(){
      this.things[0].foo++;
    },
    changed:function(newVal,oldVal){
      alert("oldVal:"+oldVal+"\r"+"newVal:"+newVal) ;
    },
    itemChanged:function(newVal,oldVal){
      alert("oldVal:"+oldVal+"\r"+"newVal:"+newVal) ;
    },
    addProperty:function(){
      this.b={key:"新增的变量b"};
      this.$set(this.obj,"c","vue.set 新增的变量c");
      /*var bank={moneyNormal:1};
      Object.defineProperty(bank,"money",{
        get:function(){
          console.log("invoke money getter");
          return 1;
        }
      });
      console.log("moeny:",bank.money);
      console.log("moneyNormal:"+bank.moneyNormal);

      //demo code
      var bankDemo={};
      DefineVUEProperty(bankDemo,"money",1);
      DefineVUEComputed(bankDemo,"RMB",function(){
        return "$"+bankDemo.money;
      });
      console.log(bankDemo.money,bankDemo.RMB);
      bankDemo.money=22;
    },
    changeDinamicPropery:function(){
      this.b.key="动态变量 b 的new value";
    },
    changeDinamicProperyC:function(){
      this.obj.c="动态变量 obj.c 的new value";
      this.styleObject.fontSize="58px;"
      this.styleObject.backgroundColor="black";
    },
    a:function(){
      this.i=this.i%3;
      this.current =this.b[this.i];
      this.i++;
      setTimeout(this.a,2000);
    }
  },
  watch:{
    things:{handler:"changed",deep:true},
    items:"itemChanged"
  },
  mounted(){
    // this.$watch('thing',function(newVal,oldVal){
    //   alert("oldVal:"+oldVal+"\r"+"newVal:"+newVal) ;
    // });    
    setTimeout(this.a,2000);
  }
  
})*/



// app.$mount("#todoapp");


