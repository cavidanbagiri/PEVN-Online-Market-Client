
<template>
    <div class="fixed bg-white left-0 px-1 py-1 shadow-lg z-10 rounded-xl">

        <ul class="p-1">

            <li class="mx-1 my-1" v-for="i in catalog">

                <div v-for="[key, value] in Object.entries(i)" class=" px-5 hover:bg-slate-300 my-2 flex flex-row">
                    <div v-if="key!=='Icon'">
                        <span v-html="i.Icon"></span><span class="text-md mx-4">{{ key }}</span>
                    </div>
                </div>
            
            <!--
                 <router-link :to="{name:'ProductsPage', params:{catalog_name:`${i}`}}">
                    <button class="hover:bg-gray-100 py-1 rounded-lg w-full text-start" @click="toggleUserTeleport">
                        <span class="pl-1 pr-3"><i class="fa-solid fa-laptop fs-lg"></i></span>
                        <span class="px-4">{{i}}</span>
                    </button>
                </router-link>
             -->

            </li>

        </ul>

    </div>
</template>

<script setup>

const catalog_list = ['Laptops', 'Smartphones', 'Headphones']

const catalog = [

    {
        'Laptops': ['Laptops', 'Monitors',],
        'Icon': "<i class='fa-solid fa-laptop'></i>"
    },

    {
        'Furniture': [
            'Child Rooms',
            'Living Roomes',
            'Kitchen Furnitures',
            'Office Furnitures'
        ],
        'Icon': '<i class="fa-solid fa-chair"></i>'
    },

    {
        'Book': [],
        'Icon': '<i class="fa-solid fa-book"></i>'
    },

    {
        'Pharmacy': [],
        'Icon': '<i class="fa-solid fa-prescription-bottle-medical"></i>'
    },
    {
        'Makeup': [],
        'Icon': '<i class="fa-solid fa-prescription-bottle-medical"></i>'
    },
    {
        'Accessories': [],
        'Icon': '<i class="fa-solid fa-prescription-bottle-medical"></i>'
    },
    {
        'Man Clothes': [],
        'Icon': '<i class="fa-solid fa-person"></i>'
    },
    {
        'Woman Clothes': [],
        'Icon': '<i class="fa-solid fa-person-dress"></i>'
    },
    {
        'Autos': [],
        'Icon': '<i class="fa-solid fa-car"></i>'
    },
    {
        'Toys': [],
        'Icon': '<i class="fa-solid fa-gamepad"></i>'
    },

    
]

// const catalog = [

//     {
//         'Laptops': [
//             'Laptops',
//             'Monitors',
//             'Laptops Accessories',
//             'PC Accessories',
//             'PC Cases'
//         ]
//     },

//     {
//         'Furniture': [
//             'Child Rooms',
//             'Living Roomes',
//             'Kitchen Furnitures',
//             'Office Furnitures'
//         ]
//     },

// ]



</script>


<style lang="">
    
</style>
