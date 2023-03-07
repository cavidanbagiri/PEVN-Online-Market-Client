

<template>
    <div>
        <p>Product Item {{ id }}</p>  
    </div>
</template>

<script setup>

    import { useRoute } from 'vue-router';

    const router = useRoute();

    const id = router.params.id;



</script>


<style lang="">
    
</style>