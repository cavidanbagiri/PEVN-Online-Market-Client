

<template>
    <Teleport to="body" v-if=store.GETUSERTELEPORT>
        <div class="border-2  modal bg-white">

            <span class="text-gray-300 mx-5" @click="changeTab(0)" >User Login</span>
            <span class="text-gray-300 mx-5" @click="changeTab(1)" > User Register</span>

            <component :is="tabs[tab_num]">

            </component>

            <!-- <UserLogin></UserLogin> -->
        </div>
    </Teleport>
</template>

<script setup>

    import { ref, shallowRef } from 'vue';

    import User_Login_Comp from '../UserComponents/User_Login_Comp.vue';
    import User_Register_Comp from '../UserComponents/User_Register_Comp.vue';
    
    import defaultStore from '../../store/index';
    const store = defaultStore();

    const tabs = shallowRef([ User_Login_Comp, User_Register_Comp ])
    const tab_num = shallowRef(0);

    const changeTab = (text) => tab_num.value = text



</script>

<style scoped>
    
    .modal {
        position: fixed;
        z-index: 999;
        top: 50%;
        left: 50%;
        width: 300px;
        margin-left: -150px;
    }

</style>