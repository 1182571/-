<template>
	<section class="jumbotron">
		<h3 class="jumbotron-heading">Search Github Users</h3>
		<div>
			<input type="text" placeholder="enter the name you search" v-model="keyword" />&nbsp;
			<button @click="searchUsers">Search</button>
		</div>
	</section>
</template>

<script>
import axios from 'axios';
export default {
	name: 'Search',
	data() {
		return {
			keyword: ''
		};
	},
	methods: {
		searchUsers() {
			// 请求前更新list数据
			// this.$bus.$emit('updataListDate', false, true, '', []);
			this.$bus.$emit('updataListDate', { isFirst: false, isLoading: true, errMsg: '', users: [] });
			axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
				res => {
					console.log('请求成功了');
					// this.$bus.$emit('getUsers', res.data.items);
					// this.$bus.$emit('updataListDate', false, false, '', res.data.items);
					this.$bus.$emit('updataListDate', {
						isLoading: false,
						errMsg: '',
						users: res.data.items
					});
				},
				error => {
					// console.log('请求失败了', error.message);
					this.$bus.$emit('updataListDate', {
						isLoading: false,
						errMsg: error.message,
						users: []
					});
				}
			);
		}
	}
};
</script>
