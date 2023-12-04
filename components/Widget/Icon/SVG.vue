<script setup>
const props = defineProps({
    fillColor: {
        type: String,
        required: true
    }
})
</script>

<template>
    <svg x="0px" y="0px" viewBox="0 0 24 24">
        <slot />
    </svg>
</template>


<style scoped>
svg {
    fill: v-bind(fillColor);
}

</style>