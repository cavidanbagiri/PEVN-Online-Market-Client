

<template>
    <div class="w-full">

        <ul class="flex flex-wrap h-20 justify-between m-0 p-0 overflow-hidden">

            <li v-for="i in brands_logos">
                <Brands_Item_Comp :logo="i" ></Brands_Item_Comp>
            </li>            

        </ul>

    </div>
</template>

<script setup>

import Brands_Item_Comp from './Brands_Item_Comp.vue';



const brands_logos = [
    '/src/assets/brands/applelogo.png',    
    '/src/assets/brands/acerlogo.png',    
    '/src/assets/brands/asuslogo.png',    
    '/src/assets/brands/delllogo.png',    
    '/src/assets/brands/hplogo.png',    
    '/src/assets/brands/huaweilogo.png',
    '/src/assets/brands/nokialogo.png',
    '/src/assets/brands/samsunglogo.png',
    '/src/assets/brands/xiomilogo.png',
    '/src/assets/brands/sonylogo.png',
];

</script>

<style lang="">
    
</style>