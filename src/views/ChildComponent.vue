<template>
    <div>
        
        <button type="button" @click="changeData">자식 컴포넌트 데이터 변경</button>
    </div>
</template>
<script>
export default {
     components: {},
     props: {

     },
    data(){
        return {
          msg: '자식 컴포넌트로 부터 보내는 메시지'  
        };
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
        childFunc(){
            alert('부모 컴포넌트에서 직접 발생시킨 이벤트');
        },
        sendFromChild(){
            this.$emit('send-message',this.msg);
        },
        changeData(){
            this.msg='자식 컴포넌트에서 데이터 변경이 일어났습니다.';
        }
    }
}
</script>
<style scoped>

</style>