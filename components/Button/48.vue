<script setup>

</script>

<template>
    <button class="btn48" @click="$emit('clicked')" >
        <span class="icon shadow actionButton" >
            <slot></slot>
        </span>
    </button>
</template>

<style scoped>
.btn48 {
    width: 48px;
    height: 48px;
    border-radius: 5px;
    display: grid;
    place-items: center;
}
.btn48 span {
    height: 40px;
    width: 40px;
    background-color: var(--brand-color-1);
    border-radius: 5px;
    display: grid;
    place-items: center;
    cursor: pointer;
    overflow: hidden;
}
</style>