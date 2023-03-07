

<template lang="">
    <div class="">
            <p>User Register</p>
            <span>Username</span>
            <input type="text" placeholder="Username" v-model="user_data.username">
            <br>
            <span>Email</span>
            <input type="text" placeholder="Email" v-model="user_data.email" >
            <br>
            <span>Password</span>
            <input type="text" placeholder="Password" v-model="user_data.password">
            <br>
            <button @click="userRegister" class="border-2 bg-pink-500">
                Register
            </button>
        </div>
</template>

<script setup>

    
import { reactive } from 'vue';
import userStore from '../../store/user_store';
const store = userStore();

const user_data = reactive({
    username : '',
    email : '',
    password : '',
});

const userRegister = () => {
    store.userRegister(user_data);
}

</script>

<style lang="">
    
</style>