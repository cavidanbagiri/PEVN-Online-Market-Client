
<template>

    <div class=" bg-white border-2 absolute left-0 top-10 z-10">
        
        <ul class="">
            <li class="text-blackm-3 my-3 flex text-left" v-for="i in catalog_list">
                <router-link :to="{name:'ProductsPage', params:{catalog_name:`${i}`}}">
                    <span class="hover:bg-gray-400 w-full px-1 " >{{ i }}</span>
                </router-link>
            </li>
        </ul>

    </div>

</template>

<script setup>

    const catalog_list = ['Laptops','Smartphones','Headphones']

</script>


<style lang="">
    
</style>
