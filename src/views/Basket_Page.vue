

<template>
    <div class=" p-3">

        <p class="text-5xl my-2 text-gray-400">Basket</p>

        <div class="flex flex-row justify-between p-2">

            <select class="border-2 my-2 text-black p-2 rounded-lg border-xl outline-none hover:border-purple-500" name="" id="">
                <option selected> Time Ascending</option>
                <option value="Time Descending">Time Descending</option>
                <option value="For Price">For Price</option>
                <option value="For Raiting">For Raiting</option>
            </select>

            <input class="border px-2 py-0 rounded-lg w-96 outline-none hover:border-purple-500" type="search" name="" id="" placeholder="Search Product">

        </div>

    </div>



    <div class=" p-3 flex flex-wrap">

        <CardItemTemp_Comp></CardItemTemp_Comp>

    </div>
</template>

<script setup>

import CardItemTemp_Comp from '../components/ProductComponents/CardItemTemp_Comp.vue';



</script>

<style lang="">
    
</style>