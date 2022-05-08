<template>
	<div class="demo">
		<h2>学校名称: {{ name }}</h2>
		<h2>学校地址: {{ address }}</h2>

	</div>
</template>

<script>
export default {
    name: 'MySchool',
    data() {
        return {
            name: "尚硅谷",
            address: '北京'
        }
    },
   
};
</script>

<style>
 .demo{
     background-color: green
 }
</style>
