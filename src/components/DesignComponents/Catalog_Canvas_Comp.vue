
<template>
    <div v-show="toggle_cond" :class="toggle_cond ? 'canvasopen' : 'canvasclose'" class="fixed bg-white left-0 px-1 py-1 shadow-lg z-10 rounded-xl">

        <ul class="p-1">

            <li class="mx-1 my-1" v-for="i in catalog">

                <div v-for="[key, value] in Object.entries(i)" class=" px-5 hover:bg-gray-100 cursor-pointer my-2 flex flex-row">
                    <div v-if="key!=='Icon'">
                        <span class="w-96 h-96" v-html="i.Icon"></span><span class="text-md mx-4">{{ key }}</span>
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

import { computed } from 'vue';

import defaultStore from '../../store/index.js';
const store = defaultStore();


const toggle_cond = computed(()=>{
    console.log('comp work');
    return store.canvas_toggle;
})


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


</script>

<style scope>
    
    .canvasopen{
        animation: openslide 0.5s;
    }
    
    .canvasclose{
        animation: closeslide 0.5s;
    }
    
    @keyframes openslide {
        from{
            transform: translateX(-300px);
        }
        to{
            transform: translateX(0);
        }
    }

    @keyframes closeslide {
        from{
            transform: translateX(0);
        }
        to{
            transform: translateX(-300px);
        }
    }

</style>
