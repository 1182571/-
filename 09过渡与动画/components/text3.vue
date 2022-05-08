<template>
	<div>
		<button @click="ishow = !ishow">显示隐藏</button>
		<transition-group name="animate__animated animate__bounce" appear>
			<h1 v-show="ishow" key="1" class=" animate__wobble" >
				你好啊
			</h1>
		</transition-group>
	</div>
</template>

<script>
import 'animate.css';
export default {
	name: 'Test',
	data() {
		return {
			ishow: true
		};
	}
};
</script>

<style scoped>
h1 {
	background-color: aquamarine;
}
</style>
