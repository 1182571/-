<template>
	<div class="student">
		<h2>学生姓名:{{ name }}</h2>
		<h2>学生性别:{{ sex }}</h2>
		<button @click="sendStudentname" >点我传学生名字</button>
        <button @click="unbind">点我解绑</button>
	</div>
</template>

<script>
export default {
	name: 'Student',
	data() {
		return {
			name: '张三',
			sex: '男'
		};
	},
    methods: {
        sendStudentname(){
            //触发student组件的实例对象vc身上的atguigu事件
            this.$emit('atguigu',this.name,666,888,777)
            this.$emit('demo')
        },
        unbind(){
            //只能解绑一个
            this.$off(['atguigu','demo'])
        }
    },
};
</script>

<style scoped>
.student {
	background-color: pink;
	padding: 5px;
}
</style>
