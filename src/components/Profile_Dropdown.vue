
<template lang="">
    <div class="w-36 h-20 border-2 absolute -bottom-10 right-0">
        <ul>
            <li @click='openSignIn'>Sign In</li>
            <li>Register</li>
        </ul>
    </div>
</template>

<script setup>


    // Open Sign In Teleport
    const openSignIn = () => {
        console.log('Hello world');
    }

</script>
