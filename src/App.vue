
<template>

  <div class="bg-white relative">

    <Navbar_Comp></Navbar_Comp>
  
    <router-view></router-view>
    
    <ProfileTeleport></ProfileTeleport>

  </div>


</template>

<script setup>

  // Import Navbar
  import Navbar_Comp from './layouts/Navbar_Comp.vue';

  // Import Teleport
  import ProfileTeleport from './components/ProfileTeleport.vue';

</script>
