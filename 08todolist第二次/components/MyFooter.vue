<template>
	<div class="todo-footer" v-show="total">
		<label>
			<input type="checkbox" v-model="isall" />
		</label>
		<span>
			<span>已完成{{ donetotal }}</span> / 全部{{ total }}
		</span>
		<button class="btn btn-danger" @click="cleanAll">清除已完成任务</button>
	</div>
</template>

<script>
export default {
	name: 'MyFooter',
	props: ['todos', 'checkAllTodo','cleanALLTodo'],
	computed: {
		total() {
			return this.todos.length;
		},
		donetotal() {
			// let i = 0
			// this.todos.forEach(todo => {
			//     if(todo.done) i++
			// });
			// return i
			return this.todos.reduce((pre, current) => {
				return pre + (current.done ? 1 : 0);
			}, 0);
		},
		isall: {
			get() {
				return this.total === this.donetotal;
			},
			set(value) {
				this.checkAllTodo(value);
			}
		}
	},
	methods: {
		checkall(e) {
			// console.log(e.target.checked);
			this.checkAllTodo(e.target.checked);
		},
        cleanAll(){
            this.cleanALLTodo()
        }
	}
};
</script>

<style scoped>
/*footer*/
.todo-footer {
	height: 40px;
	line-height: 40px;
	padding-left: 6px;
	margin-top: 5px;
}

.todo-footer label {
	display: inline-block;
	margin-right: 20px;
	cursor: pointer;
}

.todo-footer label input {
	position: relative;
	top: -1px;
	vertical-align: middle;
	margin-right: 5px;
}

.todo-footer button {
	float: right;
	margin-top: 5px;
}
</style>
