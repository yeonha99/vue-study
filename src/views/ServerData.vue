<template>
<div>
<button type="button" @click="getProductList"> 조회 </button> 
</div>
</template>
<script>
import axios from 'axios';

export default {
    components: {},
    data(){
        return {
            productList: 'Hello world'
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
        async getProductList(){
            this.productList=await this.api('https://05f0d9d6-c167-4db9-90fe-2a0ddc252dd8.mock.pstmn.io/productList','get',{});
            console.log(this.productList);
        }
        ,
        async api(url, method, data){
            return (await axios({
                method: method,
                url: url,
                data: data
            }).catch(e =>{
                console.log(e);
            })
            ).data;
        }
    }
}
</script>
<style scoped>

</style>