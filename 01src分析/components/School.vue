<template>
	<div class="demo">
		<h2>学校名称:{{ name }}</h2>
		<h2>学校地址:{{ adress }}</h2>
        <button @click="showName">点我显示学校名</button>
	</div>
</template>

<script>
export default {
    name: 'MyStudent',
	data() {
		return {
			name: '尚硅谷',
			adress: '北京'
		};
	},
    methods: {
        showName(){
            alert(this.name)
        }
    },
	
};
</script>

<style>
.demo {
	background-color: orange;
}
</style>
