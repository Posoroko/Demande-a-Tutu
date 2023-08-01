<script setup>
const props = defineProps({
    activeType: Object,
    types: Array
})

</script>

<template>
    <div class="content">
        <p class="fatText button" :class="{ 'active': activeType.value === type.value }" v-for="type in types" :key="type.value" @click="$emit('selection', type.id)">
            <span>
                {{ type.name }}
            </span>
        </p>
    </div>
</template>

<style scoped>
.content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 5px;
    /* place-items: center; */
}
.button {
    height: 48px;
    color: var(--brand-color-1);
    border: 4px solid var(--brand-color-1);
    border-radius: 5px;
    text-align: center;
    line-height: 1;
    cursor: pointer;
}
.button.active {
    background-color: var(--brand-color-1);
    color: var(--basic-light-color);
}
.button {
    display: grid;
    place-items: center;
}
</style>