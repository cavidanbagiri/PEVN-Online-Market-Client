

<template>
    <div>
        
        <pre>{{ productData }}</pre>

        <p>-----------------------</p>
        <p>Comments</p>

        <Comments_Comp :comments = productData?.comments>
        </Comments_Comp>

    </div>
</template>

<script setup>

    import { useRoute } from 'vue-router';
    import { ref, onMounted, watchEffect } from 'vue'


    import productStore from '../store/product_store';
    import Comments_Comp from '../components/ProductComponents/Comments_Comp.vue';

    const store = productStore();

    const router = useRoute();

    const id = router.params.id;

    const productData = ref();

    onMounted(async ()=>{
        await store.GETPRODUCTWITHID(id);
    })

    watchEffect(async ()=>{

        productData.value = store.GETPRODUCTDATA;

    })

</script>


<style lang="">
    
</style>