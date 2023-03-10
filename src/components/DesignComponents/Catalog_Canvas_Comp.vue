
<template>

    <div class="fixed bg-white left-0 px-1 py-1 shadow-lg z-10 rounded-xl">
        
        <ul class="p-1">
            <!-- <li class="text-blackm-3 my-3 flex text-left" v-for="i in catalog_list">
                <span class="hover:bg-gray-400 w-full px-1 " >{{ i }}</span>
            </li> -->
            
            <li class="mx-1 my-1" v-for="i in catalog_list">
                <router-link :to="{name:'ProductsPage', params:{catalog_name:`${i}`}}">
                    <button class="hover:bg-gray-100 py-1 rounded-lg w-full text-start" @click="toggleUserTeleport">
                        <span class="pl-1 pr-3"><i class="fa-solid fa-laptop fs-lg"></i></span>
                        <span class="px-4">{{i}}</span>
                    </button>
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
