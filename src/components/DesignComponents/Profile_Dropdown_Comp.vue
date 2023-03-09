
<template lang="">
    <div class="w-36 h-20 border-2 absolute top-10 right-0 bg-white text-black z-10 text-start p-2">
        <ul>
            <li class="my-2" @click='toggleUserTeleport'>Sign In</li>
            <li class="my-2" @click='toggleUserTeleport'>Register</li>
        </ul>
    </div>
</template>

<script setup>

    import defaultStore from '../../store';
    const store = defaultStore();

    // Open Sign In Teleport
    const toggleUserTeleport = () => {
        store.TOGGLEUSERTELEPORT();
    }

</script>
