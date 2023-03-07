

<template>
    <div class="">
        <p>User Login</p>
        <br>
        <span>Email</span>
        <input type="text" placeholder="Email" v-model="user_data.email">
        <br>
        <span>Password</span>
        <input type="text" placeholder="Password" v-model="user_data.password">
        <br>
        <button @click="userLogin" class="border-2 bg-pink-500">
            SignIn
        </button>
    </div>
</template>

<script setup>

import { reactive } from 'vue';

// Import User Store from pinia
import userStore from '../../store/user_store';
// Create an instance for using userstore
const store = userStore();


const user_data = reactive({ email: '', password: '' });

const userLogin = () => {
    store.userLogin(user_data);
}



</script>

<style lang="">
    
</style>