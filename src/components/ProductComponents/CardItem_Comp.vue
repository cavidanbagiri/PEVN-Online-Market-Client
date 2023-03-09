
<template>
    <router-link :to="{name:'ProductItemPage', params:{id:`${prop.product.id}`}}">
        <div class="w-44 h-64 bg-white border-2" >
            {{ prop.product.id }}
            <span>Brand : {{ prop.product.brand }}</span>
            <br>
            <span>Model : {{ prop.product.model }}</span>
            <br>
            
        </div>
    </router-link>
    <button class="border-2 bg-black text-white" @click="addBasket">
        Add Basket
    </button>
    <button class="border-2 bg-red-500 text-white" @click="addFavorites">
        Add Favorite
    </button>
</template>

<script setup>

    import productStore from '../../store/product_store';

    const store = productStore();

    const prop = defineProps(['product']);

    const addBasket = () => store.ADDBASKET(prop.product.id);
    const addFavorites = () => store.ADDFAVORITES(prop.product.id);

</script>

<style lang="">
    


</style>
