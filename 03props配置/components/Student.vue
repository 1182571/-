<template>
	<div>
		<h1>{{ msg }}</h1>
		<h1>学生姓名:{{ name }}</h1>
		<h1>学生性别:{{ sex }}</h1>
		<h1>学生年龄:{{ MyAge + 1 }}</h1>
		<button @click="updataAge">点我修改年龄</button>
	</div>
</template>

<script>
export default {
	name: 'MyStudent',
	data() {
		return {
			msg: '尚硅谷的学生',
            MyAge: this.age    //优先级是先执行props里面的才有的age属性
		};
	},
    methods: {
        updataAge(){
            this.MyAge ++
        }
    },
	// props:['name','age','sex']   //简单声明接受


	// props:{   //接受的同时对数据进行类型限制 有报错提示
	//     name: String,
	//     age: Number,
	//     sex: String
	// }

    // 接受的同时对数据进行类型显示+默认值的指定 必要性的限制
	props: {
		name: {
			type: String,   //类型
			required: true  //必须要穿传  default和required 一般不一起用
		},
        age:{
            type: Number,
            default:99    //不传的默认值
        },
        sex:{
            type: String,
            required: true
        }
	}
};
</script>

<style></style>
