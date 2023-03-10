
<template>
    <div>
        <!-- {{ prop.comments }} -->
        
        <ul class="mb-10">
            <li v-for="i in prop.comments">
                {{ i.user }} : {{ i.comment }}
            </li>
        </ul>

    </div>
</template>

<script setup>

    const prop = defineProps(['comments']);

</script>

<style lang="">
    
</style>
