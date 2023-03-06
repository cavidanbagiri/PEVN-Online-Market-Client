
<template lang="">
    <div class="w-36 h-20 border-2 absolute -bottom-10 right-0">
        <ul>
            <li @click='toggleUserTeleport'>Sign In</li>
            <li @click='toggleUserTeleport'>Register</li>
        </ul>
    </div>
</template>

<script setup>

    import defaultStore from '../store';
    const store = defaultStore();

    // Open Sign In Teleport
    const toggleUserTeleport = () => {
        store.TOGGLEUSERTELEPORT();
    }

</script>
