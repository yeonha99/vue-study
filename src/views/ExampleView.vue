<template>
    <div>
        <PageTitle :title="title"/>
        <ChildComponent :likes="likes" :isOk="ture" :commentIds="[1,5,2,3]" :author="author"/>
    </div>
</template>
<script>
import PageTitle from '../components/PageTitle.vue';
import ChildComponent from './ChildComponent.vue';

export default {
     components: {PageTitle,ChildComponent},
    data(){
        return {
            title: '부모컴포넌트에서 전송할 페이지 타이틀',
            likes: 23,
            author: {name:'홍길동', company:'회사이름'}
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