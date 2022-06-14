<template>
    <div>
        <PageTitle title="부모컴포넌트에서 전송할 페이지 타이틀"/>
    </div>
</template>
<script>
import PageTitle from '../components/PageTitle.vue';

export default {
     components: {PageTitle},
    data(){
        return {
            name: '',
            age: 0,
            job: '' 
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

    }
}
</script>
<style scoped>

</style>