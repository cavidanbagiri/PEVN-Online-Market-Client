

<template>
    <div>
        <pre>{{ productData }}</pre>

        <p>-----------------------</p>
        <p>comments</p>

        <pre>
            {{ productData?.username }}
            {{ productData?.comment_text }}
        </pre>

    </div>
</template>

<script setup>

    import { useRoute } from 'vue-router';
    import { ref, onMounted, watchEffect } from 'vue'


    import productStore from '../store/product_store';
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