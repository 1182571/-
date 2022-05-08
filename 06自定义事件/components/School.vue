<template>
  <div class="school">
      <h2>学校名字:{{name}}</h2>
      <h2>学校地址:{{address}}</h2>
      <!-- 通过父组件给子组件传递函数类型的props实现 .子传给父 -->
      <button @click="sendSchoolname">点我传学校名</button>
  </div>
</template>

<script>
export default {
    name:'School',
    props:['getSchoolname'],
    data() {
        return {
            name: '尚硅谷',
            address: '北京',
        }
    },
    methods: {
        sendSchoolname(){
            this.getSchoolname(this.name)
        }
    },
}
</script>

<style scoped>
    .school{
        background-color: aqua;
        padding: 5px;
        margin-bottom: 30px;
    }
</style>