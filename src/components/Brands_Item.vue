

<template>

    <router-link to='/'>
        
        <div class="w-16 h-16 rounded-full flex items-center justify-center m-2 p-1 border-2 hover:shadow-sm hover:border-fuchsia-300">
            <!-- <img :src="props.logo" alt=""> -->
            <img :src="props.logo" alt="">
            <!-- <img src="../assets/brands/applelogo.png" alt=""> -->
        </div>

    </router-link>

</template>

<script setup>

    const props = defineProps(['logo'])

    console.log(props.logo);

</script>

<style lang="">
    
</style>