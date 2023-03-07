
<template>
    <router-link :to="{name:'ProductItemPage', params:{id:`${prop.product.id}`}}">
        <div class="w-44 h-64 bg-white border-2" >
            {{ prop.product.id }}
            <span>Brand : {{ prop.product.brand }}</span>
            <br>
            <span>Model : {{ prop.product.model }}</span>
    
        </div>
    </router-link>
</template>

<script setup>

    const prop = defineProps(['product']);



</script>

<style lang="">
    


</style>
