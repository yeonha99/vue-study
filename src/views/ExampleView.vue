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
        this.$refs.child.$refs.child_btn.click();
    }
    }
}
</script>
<style scoped>

</style>