<template>
	<li>
		<label>
			<input type="checkbox" :checked="todo.done" @click="handcheck(todo.id)" />
			<span v-show="!todo.isEdit">{{ todo.title }}</span>
			<input
				type="text"
				v-show="todo.isEdit"
				:value="todo.title"
				@blur="handerBlur(todo, $event)"
				ref="inputTitle"
			/>
		</label>
		<button class="btn btn-danger" @click="handlelete(todo.id)">删除</button>
		<button class="btn btn-edit" v-show="!todo.isEdit" @click="handerEdit(todo)">编辑</button>
	</li>
</template>

<script>
export default {
	name: 'MyItem',
	props: ['todo'],
	methods: {
		handcheck(id) {
			this.$bus.$emit('checktodos', id);
			// console.log(id);
			// this.checktodo(id)
		},
		handlelete(id) {
			if (confirm('确定删除吗')) {
				this.$bus.$emit('handlelete', id);
			}
		},
		handerEdit(todo) {
			if (todo.hasOwnProperty('isEdit')) {
				todo.isEdit = true;
			} else {
				this.$set(todo, 'isEdit', true);
			}
			// input框模板还没出来 需要nextTick指定的回调函数会在DOM节点更新完毕在执行
			this.$nextTick(function () {
				this.$refs.inputTitle.focus();
			});
		},
		handerBlur(todo, e) {
			todo.isEdit = false;
			if (!e.target.value.trim()) return alert('输入不能为空');
			// console.log('updataTodo',e);
			this.$bus.$emit('updataTodo', todo.id, e.target.value);
		}
	}
};
</script>

<style scoped>
/*item*/
li {
	list-style: none;
	height: 36px;
	line-height: 36px;
	padding: 0 5px;
	border-bottom: 1px solid #ddd;
}

li label {
	float: left;
	cursor: pointer;
}

li label li input {
	vertical-align: middle;
	margin-right: 6px;
	position: relative;
	top: -1px;
}

li button {
	float: right;
	display: none;
	margin-top: 3px;
}

li:before {
	content: initial;
}

li:last-child {
	border-bottom: none;
}
li:hover {
	background-color: #ddd;
}
li:hover button {
	display: block;
}
/* .todo-enter-active {
	animation: atguigu 0.5s linear;
}

.todo-leave-active {
	animation: atguigu 0.5s reverse;
}
@keyframes atguigu {
	from {
		transform: translateX(100%);
	}
	to {
		transform: translateX(0px);
	}
} */
</style>
