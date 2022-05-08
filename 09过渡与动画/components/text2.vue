<template>
	<div>
		<button @click="ishow = !ishow">显示隐藏</button>
		<transition-group name="hellow" appear>
			<h1 v-show="!ishow" key="1">你好啊</h1>
			<h1 v-show="ishow" key="2">尚硅谷</h1>
		</transition-group>
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
/* 进入的起点  离开的终点*/
.hellow-enter,.hellow-leave-to {
	transform: translateX(-100%);
}

.hellow-enter-active,.hellow-leave-active{
    transition: 0.5s linear;
}

/* 进入的终点  离开的起点 */
.hellow-enter-to,.hellow-leave  {
	transform: translateX(0);
}


</style>
