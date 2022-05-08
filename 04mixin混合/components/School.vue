<template>
	<div>
		<h1 @click="showname">学校名称:{{ name }}</h1>
		<h1>学校地址:{{ address }}</h1>
	</div>
</template>

<script>
import {mixin,mixin2} from '../mixin'
export default {
	name: 'School',
	data() {
		return {
			name: '尚硅谷',
			address: '北京' //优先级是先执行props里面的才有的age属性
		};
	},
    mixins:[mixin,mixin2]
	
};
</script>

<style></style>
