<template>
    <div class="w-60 h-auto border-1 bg-slate-50 rounded-xl my-3 mx-2 p-2 cursor-pointer hover:shadow-2xl hover:border-1">
        
        <img src="https://m.media-amazon.com/images/I/711Nx6ZoRML._AC_SL1500_.jpg" class="w-60 h-48 rounded-xl mb-1" alt="">

        <span class="text-xs bg-red-500 text-white px-1 rounded-md">20%</span><br>

        <ul class="flex flex-row my-1">
            <li v-for="i in 5" class="mx-1 my-1">
                <i class="fa-solid fa-star text-pink-500 text-sm"></i>
            </li>
        </ul>
        
        <p class="font-bold my-2 text-md">75833 ₽  <span class="text-sm text-gray-400">83900</span> </p>

        <p class="font-bold text-sm text-gray-500">Dell Vostro 15 3000 Ram 8GB SSD-1TB</p>

        <button class="border-2 bg-pink-600 text-white text-sm font-bold p-2 rounded-md my-2">
            Add Basket
        </button>

    </div>
</template>

<script setup>



</script>

<style lang="">
    
</style>