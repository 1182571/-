<template>
	<div>
        <h1 v-text="msg" ref="title"></h1>
		<School ref="sc"></School>
		<button @click="showDOM" ref="btn">点我输出DOm元素</button>
	</div>
</template>

<script>
import School from './components/School.vue';
export default {
	name: 'App',
	components: { School },
    data() {
        return {
            msg: '欢迎学习'
        }
    },
	methods: {
		showDOM() {
			console.log(this.$refs.title);   //真实DOM元素
			console.log(this.$refs.btn);   //真实DOM元素
			console.log(this.$refs.sc);   //School的组件实例对象
		}
	}
};
</script>
