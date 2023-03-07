
<template>
    <div class="flex flex-wrap">
        <p>Products Page</p>
        <br>
        <br>
        <br>
        <br>
          
        <div v-for="i in products">
            <CardItem :product = i></CardItem>
        </div>
        
    </div>
</template>

<script setup>

    import { ref, watchEffect, onMounted } from 'vue';

    // Import Card Item
    import CardItem from '../components/ProductComponents/CardItem_Comp.vue';        

    // Import Store and create an instance
    import productStore from '../store/product_store';
    
    // Import router and get params name;
    import { useRoute } from 'vue-router';
    
    const store = productStore();
    
    const route = useRoute();
    
    const catalog_name = route.params.catalog_name;

    const products = ref([]);

    onMounted(async ()=>{
        await store.GETPRODUCTS(catalog_name);
    })

    watchEffect(async () => {
        products.value = store.GETPRODUCTDATA;
    })

    // const getDatas = (catalog_name) => {
    //     store.GETPRODUCTS(catalog_name);
    // }

</script>

<style lang="">
    
</style>
