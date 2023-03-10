
<template>
    <div class="flex flex-wrap justify-center">
          
        <!-- <div v-for="i in products">
            <CardItem :product = i></CardItem>
        </div> -->

        <div v-for="i in 20">
            <CardİtemTemp_Comp/>
        </div>

    </div>
</template>

<script setup>

    import { ref, watchEffect, onMounted } from 'vue';

    // Import Card Item
    import CardItem from '../components/ProductComponents/CardItem_Comp.vue';        

    import CardİtemTemp_Comp from '../components/ProductComponents/CardİtemTemp_Comp.vue';

    // Import Store and create an instance
    import productStore from '../store/product_store';
    
    // Import router and get params name;
    import { useRoute } from 'vue-router';
    
    const store = productStore();
    
    const route = useRoute();
    
    const catalog_name = route.params.catalog_name;

    const products = ref([]);

    onMounted(async ()=>{
        await store.GETCATALOGPRODUCTS(catalog_name);
    })

    watchEffect(async () => {
        products.value = store.GETCATALOGDATA;
    })


</script>

<style lang="">
    
</style>
