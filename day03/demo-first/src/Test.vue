<!-- 声明组件的UI结构 -->
<template>
    <!-- 因为template中只能包含一个根节点，就是只能包含一个div -->
    <!-- 所以我们在进行template的时候，最好先写一个div将盒子包起来 -->
    <div>
        <div class="test-box">
        <h3>这是用户自定义的组件  -- {{ username }}</h3>
        <!-- 绑定一个事件 -->
        <button @click="changeName">修改用户名</button>
    </div>
    <div>
        123
    </div>

    </div>
</template>


<!-- 定义组件的行为（数据，调用方法） -->
<script>
    // 默认导出。固定写法！！！！！！！！
    export default{
        // datat数据源
        // 注意：.vue组件中的data不能像之前一样，不能指向对象
        // 注意：组件中的data必须是一个函数
        // data:{
        //     username:'zs'
        // }

        // data:function(){}
        data(){
            // 这个return出去的{}中 可以定义数据
            return {
                username:'admin'
            }
        },
        methods:{
          changeName(){
            // this--是当前组件的实例对象
            console.log(this);
            this.username='哇哈哈'
          }  
        },
        // 当前组件中的侦听器
        watch:{},
        // 当前组件中的计算属性
        computed:{},
        // 当前组件中的过滤器
        filters:{}

    }
</script>


<!-- 定义样式结构 -->
<style lang="less">
 .test-box{
    background-color: pink;
 }
 h3 {
 color: red;}
</style>