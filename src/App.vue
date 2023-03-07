
<template>

  <div class="bg-white relative">

    <Navbar_Comp></Navbar_Comp>
  
    <router-view></router-view>
    
    <Profile_Teleport_Comp></Profile_Teleport_Comp>

  </div>


</template>

<script setup>

  // Import Navbar
  import Navbar_Comp from './layouts/Navbar_Comp.vue';

  // Import Teleport
  import Profile_Teleport_Comp from './components/UserComponents/Profile_Teleport_Comp.vue';

</script>
