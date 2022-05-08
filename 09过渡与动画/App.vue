<template>
	<div>
        <Test></Test>
        <Test2></Test2>
        <text3></text3>
    </div>
</template>

<script>
import Test from './components/text.vue';
import Test2 from './components/text2.vue';
import text3 from './components/text3.vue';

export default {
	name: 'App',
	components: { Test,Test2,text3 },
};
</script>

<style></style>
