

<template lang="">
        <div class="">
            <p>User Login</p>
            <br>
            <span>Email</span>
            <input type="text" placeholder="Email" v-model="user_data.email" >
            <br>
            <span>Password</span>
            <input type="text" placeholder="Password" v-model="user_data.password">
            <br>
            <button @click="signIn" class="border-2 bg-pink-500">
                SignIn
            </button>
        </div>

</template>

<script setup>

    
import { reactive } from 'vue';

const user_data = reactive({
    email : '',
    password : '',
});

const signIn = () => {
    console.log('data is : ',user_data.email);
}

</script>

<style lang="">
    
</style>