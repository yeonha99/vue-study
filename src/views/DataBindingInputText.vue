<template>
<div>
<input type="text" v-model="valueModel" />
<input type="number" v-model.number="valueModel2" />
<textarea v-model="valueModel3"></textarea>
</div>
</template>
<script>
export default {
    components: {},
    data(){
        return {
            valueModel: 'South Korea',
            valueModel2: 12,
            valueModel3: '안녕하세요.'
        };
    },
    setup() {
        
    },
    create(){

    },
    mounted(){
        console.log(this.valueModel2);
    },
    unmounted() {
        
    },
    methods: {
        
    }
}
</script>
<style scoped>

</style>