export const mixin = {
    methods: {
        showname(){
            alert(this.name)
        }
    },
    mounted() {
        console.log('你还啊');
    },
}

export const mixin2 = {
    data() {
        return {
            x:100,
            y:200
        }
    },
}