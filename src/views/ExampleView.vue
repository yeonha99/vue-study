<template>
    <div>
        <button type="button" @click="callChildFunc">부모에 있는 클릭</button>
        <ChildComponent ref="child" />
    </div>
</template>
<script>
import ChildComponent from './ChildComponent.vue';

export default {
     components: {ChildComponent},
    data(){
        return {

        }
    },
    setup() {
        
    },
    create(){

    },
    mounted(){
    },
    unmounted() {
        
    },
    methods: {
    callChildFunc(){
        //this.$refs.child.$refs.child_btn.click();
        //this.$refs.child.childFunc();
        this.$refs.child.msg='부모컴포넌트에서 변경한 메시지';
    }
    }
}
</script>
<style scoped>

</style>