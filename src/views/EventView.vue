<template>
    <div>
    <button type="button" @click="increaseCounter">Add 1</button>
    <p>The Count is : {{counter}}</p>
    <select v-model="city" @change="changeSelect">
        <option value="서울">서울</option>
        <option value="부산">부산</option>
        <option value="제주">제주</option>
    </select>
    <input type="text" v-model="textValue" @keyup.enter="showValue"/>
    </div>
</template>
<script>
export default {
    components: {},
    data(){
        return {
            counter: 0,
            city: "",
            textValue:""
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
        increaseCounter(){
            this.counter=this.counter+1;
        },
        changeSelect(){
            alert(this.city)
        },
        showValue(){
            //tap,delete,esc,space,up,down,right,left
            alert(this.textValue)
        }

    }
}
</script>
<style scoped>

</style>