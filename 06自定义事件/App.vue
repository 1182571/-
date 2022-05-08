<template>
  <div class="app">
      <h1>{{msg}} 学生姓名:{{studengname}}</h1>
      <!-- 通过父组件给子组件传递函数类型的props实现 .子传给父 -->
      <School :getSchoolname='getSchoolname'></School>

      <!-- 给组件的实例对象vc身上绑定了一个事件 事件名字叫demo  给谁绑定的就找谁触发 -->
      <!-- <Student v-on:atguigu='getStudentname' @demo='m1'></Student> -->

      <Student ref="student"></Student>



  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
    name: 'App',
    components:{School,Student},
    data() {
        return {
            msg: '你好啊',
            studengname: ''
        }
    },
    methods: {
        getSchoolname(name){
            console.log('APP收到了学校名',name);
        },
        // getStudentname(name,...params){
        //     console.log('APP收到了学生',name,params);
        //     this.studengname = name
        // },
        m1(){
            console.log('demo事件被触发了');
        }
    },
    mounted() {
        this.$refs.student.$on('atguigu',this.getStudentname)
    },
}
</script>

<style scoped>
    .app{
        background-color: gray;
        padding: 5px;
    }
</style>