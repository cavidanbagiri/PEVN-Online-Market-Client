
<template lang="">

    <!-- <div class="w-36 h-auto border-2 absolute top-10 right-0 bg-white text-black z-10 text-start p-2"> 
        <ul>
            <li class="my-2" @click='toggleUserTeleport'>
                <i class="fa-solid fa-truck fa-md" style="color:black"></i><span>Orders</span> 
            </li>
            <li class="my-2" @click='toggleUserTeleport'>Sign In</li>
            <li class="my-2" @click='toggleUserTeleport'>Register</li>
        </ul>

        <div class="p-2"><i class="fa-solid fa-truck fa-xl" style="color:black"></i> <span class="">Orders</span></div>
        <div class="p-2"><i class="fa-solid fa-heart fa-xl" style="color:black"></i> <span class="">Favorites</span></div>
        <div class="p-2"><i class="fa-solid fa-cart-shopping fa-xl" style="color:black"></i> <span class="">Basket</span></div>

    </div> -->

    <div  class="fixed right-0 bg-white px-3 py-3 shadow-lg z-10 rounded-xl user-drop-down">
        <ul class="p-1">
            <li class="flex items-center mt-1 border border-orange-300 px-3 py-1 rounded-lg">
                <!-- <img src="https://avatars.mds.yandex.net/get-yapic/0/0-0/islands-retina-50"
                    class="w-10 h-10 border-2 rounded-full object-cover" alt=""> -->
                <!-- <img src="../../assets/avatars/default.png" class="w-10 h-10" alt=""> -->
                <img src="https://avatars.mds.yandex.net/get-yapic/0/0-0/islands-retina-middle" class="w-10 h-10" alt="">
                <div class="flex flex-col mx-2">
                    <span class="font-bold text-lg text-start">Cavidan Bagiri</span>
                    <span class="text-gray-500 text-md">cavidanbagiri@gmail.com</span>
                </div>
            </li>
            <li class="mx-1 mt-2">
                <button class="hover:bg-gray-100 py-3 rounded-lg w-full text-start" @click="toggleUserTeleport">
                    <span class="pl-1 pr-3"><i class="fa-solid fa-arrow-right-to-bracket fa-lg"></i></span>
                    <span class="px-4">Login or Register</span>
                </button>
            </li>
            <li class="mx-1">
                <button class="hover:bg-gray-100 py-3 rounded-lg w-full text-start">
                    <span class="pl-1 pr-3"><i class="fa-solid fa-truck fa-lg"></i></span>
                    <span class="px-4">Orders</span>
                </button>
            </li>
            <li class=" mx-1">
                <button class="hover:bg-gray-100 py-3 rounded-lg w-full text-start">
                    <span class="pl-1 pr-3"><i class="fa-solid fa-rotate-left  fa-lg"></i></span>
                    <span class="px-4">Refund</span>
                </button>
            </li>
            <li class=" mx-1">
                <button class="hover:bg-gray-100 py-3 rounded-lg w-full text-start">
                    <span class="pl-1 pr-3"><i class="fa-brands fa-cc-diners-club fa-lg"></i></span>
                    <span class="px-4">Coupon</span>
                </button>
            </li>
            <li class=" mx-1">
                <button class="hover:bg-gray-100 py-3 rounded-lg w-full text-start">
                    <span class="pl-1 pr-3"><i class="fa-solid fa-basket-shopping  fa-lg"></i></span>
                    <span class="px-4">Basket</span>
                </button>
            </li>
            <li class=" mx-1">
                <button class="hover:bg-gray-100 py-3 rounded-lg w-full text-start">
                    <span class="pl-1 pr-3"><i class="fa-regular fa-credit-card fa-lg"></i></span>
                    <span class="px-4">Cards</span>
                </button>
            </li>
            <li class=" mx-1">
                <button class="hover:bg-gray-100 py-3 rounded-lg w-full text-start">
                    <span class="pl-1 pr-3"><i class="fa-regular fa-heart  fa-lg"></i></span>
                    <span class="px-4">Favorites</span>
                </button>
            </li>
            <li class=" mx-1">
                <button class="hover:bg-gray-100 py-3 rounded-lg w-full text-start">
                    <span class="pl-1 pr-3"><i class="fa-regular fa-message fa-lg"></i></span>
                    <span class="px-4">Chat</span>
                </button>
            </li>
            <li class=" mx-1">
                    <button class="hover:bg-gray-100 py-3 rounded-lg w-full text-start">
                        <span class="pl-1 pr-3"><i class="fa-solid fa-gear fa-lg"></i></span>
                        <span class="px-4">Settings</span>
                    </button>
            </li>
            <li class=" mx-1">
                <button class="hover:bg-gray-100 py-3 rounded-lg w-full text-start" @click="logout">
                    <span class="pl-1 pr-3"><i class="fa-solid fa-right-from-bracket fa-lg"></i></span>
                    <span class="px-4">Logout</span>
                </button>
            </li>
        </ul>
    </div>


    
</template>

<script setup>

import defaultStore from '../../store';
const store = defaultStore();

// Open Sign In Teleport
const toggleUserTeleport = () => {
    store.TOGGLEUSERTELEPORT();
}

</script>


<style scoped>

.user-drop-down{
    animation: openslide 0.5s
}

@keyframes openslide {
    from {
        transform: translateY(-500px);
    }

    to {
        transform: translateX(0);
    }
}
</style>