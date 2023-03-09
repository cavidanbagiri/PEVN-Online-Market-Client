
<template lang="">

    <div class="grid grid-cols-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center shadow-md relative">

        <!-- Name Of Website And Catalog -->
        <div class="col-span-2  p-2 flex items-center justify-around">
            <span @click="toggleCanvas" class="cursor-pointer"><i class="fa-solid fa-bars fa-xl" style="color:white"></i></span>
            <router-link to="/">
                <p class=" text-3xl font-bold text-white" style="font-family: cursive;">
                    Beniz
                </p>
            </router-link>    
        </div>
        <!-- Search Field -->
        <div class="col-span-7 flex flex-row items-center" >
            <div class="flex flex-row w-full bg-slate-200 p-0 m-0 rounded-xl items-center hover:bg-white">
                <i class="fa-solid fa-magnifying-glass px-2" style="color:gray"></i>
                <input class="w-full h-full p-2 bg-slate-200 rounded-xl hover:bg-white outline-none text-gray-500" type="search" name="" id="" placeholder="Search">
            </div>
        </div>
        <!-- Menu Side -->
        <div class="col-span-3  p-2 " >

            <div class="flex flex-row justify-around ">
                
                <!-- Going To Orders -->
                <div class="flex flex-col">
                    <span><i class="fa-solid fa-truck fa-md" style="color:white"></i></span>
                    <span class="text-xs text-gray-100">Orders</span>
                </div>
                <!-- Going To Basket -->
                <div class="flex flex-col">
                    <span><i class="fa-solid fa-cart-shopping fa-md" style="color:white"></i></span>
                    <span class="text-xs text-gray-100">Basket</span>
                </div>
                <!-- Going To Favorites -->
                <router-link to="/favorites">
                    <div class="flex flex-col">
                        <span>
                            <i class="fa-solid fa-heart fa-md" style="color:white"></i>
                        </span>
                        <span class="text-xs text-gray-100">Favorites</span>
                    </div>
                </router-link>
                <!-- Going To User Profile -->
                <div @click="toggleUserDropdown" class="flex flex-col cursor-pointer">
                    <span>
                        <i class="fa-solid fa-user fa-md" style="color:white"></i>
                    </span>
                    <span class="text-xs text-gray-100">Profile</span>
                </div>

            </div>

        </div>

        <Profile_Dropdown_Comp v-if=store.GETUSERDROPDOWN></Profile_Dropdown_Comp>
        <Catalog_Canvas_Comp v-if=store.GETCANVASTOGGLE ></Catalog_Canvas_Comp>
    </div>


</template>

<script setup>

import defaultStore from '../store/index.js';


import Profile_Dropdown_Comp from '../components/DesignComponents/Profile_Dropdown_Comp.vue';
import Catalog_Canvas_Comp from '../components/DesignComponents/Catalog_Canvas_Comp.vue';

const store = defaultStore();

const toggleCanvas = () => store.TOGGLECANVAS();
const toggleUserDropdown = () => store.TOGGLEUSERDROPDOWN();


</script>


