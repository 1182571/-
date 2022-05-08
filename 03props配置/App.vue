<template>
  <MyStudent name='张三' :age='18' sex="男"></MyStudent>  <!--冒号是表达式 --> 
</template>

<script>
import MyStudent from './components/Student'
export default {
    name: "App",
    components:{MyStudent}
}
</script>

<style>

</style>