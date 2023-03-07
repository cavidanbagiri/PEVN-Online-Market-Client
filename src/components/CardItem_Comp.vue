
<template>
    <div class="w-44 h-64 bg-white border-2" >
        
        <span>Brand : {{ prop.product.brand }}</span>
        <br>
        <span>Model : {{ prop.product.model }}</span>

            <!-- <span>name: {{prop.product}}</span> -->

    </div>
</template>

<script setup>

    const prop = defineProps(['product']);



</script>

<style lang="">
    


</style>
