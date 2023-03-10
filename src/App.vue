
<template>
  <div class="bg-white relative">

    <Navbar_Comp></Navbar_Comp>

    <Profile_Dropdown_Comp v-if=store.GETUSERDROPDOWN />

    <router-view></router-view>

    <Profile_Teleport_Comp></Profile_Teleport_Comp>

  </div>
</template>

<script setup>

import defaultStore from './store';

// Import Navbar
import Navbar_Comp from './layouts/Navbar_Comp.vue';

// Import Teleport
import Profile_Teleport_Comp from './components/UserComponents/Profile_Teleport_Comp.vue';

// Import Dropdown
import Profile_Dropdown_Comp from './components/DesignComponents/Profile_Dropdown_Comp.vue';

const store = defaultStore();

</script>
