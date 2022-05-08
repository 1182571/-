<template>
	<div class="todo-footer" v-show="total">
		<!--为0时假 -->
		<label>
			<!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->
			<input type="checkbox" v-model="isAll" />   <!--绑在checkbox就是布尔值 -->
		</label>
		<span>
			<span>已完成{{ doneTodal }}</span> / 全部{{ total }}
		</span>
		<button class="btn btn-danger" @click="cleanall">清除已完成任务</button>
	</div>
</template>

<script>
export default {
	name: 'MyFooter',
	props: ['todos'],
	computed: {
		total() {
			return this.todos.length;
		},
		doneTodal() {
			// let i = 0;
			// this.todos.forEach(todo => {
			// 	if (todo.done) i++;
			// });
			// return i;
			return this.todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0);
		},
       //简写方式没有setter
		isAll:{
            get(){
                return this.total === this.doneTodal && this.total > 0; 
            },
            set(value){
                // this.checkTodoALl(value)
                this.$emit('checkTodoALl',value)

            }
        }
	},
	methods: {
		// checkAll(e) {
        //     this.checkTodoALl(e.target.checked)
		// }
        cleanall(){
            if(confirm('确定删除吗'))
            // this.cleanAllTodo()
            this.$emit('cleanAllTodo')

        }
	}
};
</script>

<style>
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
