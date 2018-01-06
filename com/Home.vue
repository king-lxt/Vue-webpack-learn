<template>
	<div>
		{{ msg }}
		<input type="text" v-myDir v-aler name="" id="" value="" />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: "hello Vue",
			}
		},
		mounted(){
//			document.title = "自定义组件";
		},		
		//自定义组件
		directives: {
			"myDir": { //指令的名字
				bind: function(el, binding, nodeDom) {
					console.log(binding);
					console.log("bind");
					el.style = "color:" + binding.value;
				},

				inserted: function() {
					console.log("instered");
				},
				update: function(el, binding, nodeDom) { //每次在input中输入信息，都会触发这个函数
					console.log("update");
					el.style = "color:" + binding.value;
				},
				componentUpdated: function(el, bindging, nodeDom) {
					console.log("componented");

				},
				unbind: function(el, binding, nodeDom) {
					console.log("unbind");
				},
				//自定义指令======
				inserted: function(el) {
					el.focus();
				}
			},
			//自定义指令======
			aler: function() {
				console.log("自定义指令");
			}
		}
	}
</script>

<style>

</style>