<template>
<div>
<button type="button" @click="getProductList"> 조회 </button> 
<table>
    <thead>
        <tr>
            <th>제품명</th>
            <th>가격</th>
            <th>배송료</th>
            <th>카테고리</th>
        </tr>
    </thead>
    <tbody>
        <tr :key="i" v-for="(product,i) in productList">
            <td>{{product.product_name}}</td>
            <td>{{product.price}}</td>
            <td>{{product.delivery_price}}</td>
            <td>{{product.product_name}}</td>
        </tr>
    </tbody>
</table>
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