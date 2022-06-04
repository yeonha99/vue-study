<template>
    <div>
        <select v-model="city">
            <option :value="city.v" :key="i" v-for="(city,i) in options">{{city.t}}</option>
        </select>
    <table>
        <thead>
            <tr>
                <th>제품명</th>
                <th>제품가격</th>
                <th>배송비</th>
                <th>제품카테고리</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="i" v-for="(product,i) in productList">
                <td>{{product.product_name}}</td>
                <td>{{product.price}}</td>
                <td>{{product.delivery_price}}</td>
                <td>{{product.category}}</td>
            </tr>
        </tbody>
    </table>
    </div>
</template>
<script>
export default {
    components: {},
    data(){
        return {
            options:[
                {v:'02',t:'서울'},
                {v:'21',t:'부산'},
                {v:'064',t:'제주'}
            ],
            city:"064",
            productList:[
                {product_name:'기계식 키보드', price:2500, delivery_price:5000, category:'전자제품'},
                {product_name:'마우스', price:9000, delivery_price:5000, category:'전자제품'}
            ]
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
.container{
    width: 100%;
    height: 200px;
}

.active{
    background-color: yellow;
    font-weight: bold;
}

.text-red{
    color:red;
}
</style>