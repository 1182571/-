<template>
	<div>
		<button @click="ishow = !ishow">显示隐藏</button>
		<transition name='hellow' appear>
			<h1 v-show="ishow">你好啊</h1>
		</transition>
	</div>
</template>

<script>
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
/* 进入的时候激活的样式 */
.hellow-enter-active {
	animation: atguigu 1s linear;
}

.hellow-leave-active {
	animation: atguigu 1s reverse;
}
@keyframes atguigu {
	from {
		transform: translateX(-100%);
	}
	to {
		transform: translateX(0px);
	}
}
</style>
