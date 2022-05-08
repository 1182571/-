<template>
	<div>
		<h1 @click="showname">学生姓名:{{ name }}</h1>
		<h1>学生性别:{{ sex }}</h1>
	</div>
</template>

<script>
import {mixin,mixin2} from '../mixin'

export default {

	name: 'Student',
	data() {
		return {
			name: '张三',
			sex: '男' //优先级是先执行props里面的才有的age属性
		};
	},
	mixins:[mixin,mixin2]
};
</script>

<style></style>
