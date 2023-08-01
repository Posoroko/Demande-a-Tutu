<script setup>
const props = defineProps({
    activeType: Object,
    types: Array
})

</script>

<template>
    <div class="content">
        <p class="button centered" :class="{ 'active': activeType.value === type.value }" v-for="type in types" :key="type.value" @click="$emit('selection', type.id)">
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
    /* place-items: center; */
}
.button {
    height: 48px;
    padding: 0 4px;
}
.button span {
    width: 100%;
    height: 40px;
    font-size: 20px;
    font-family: var(--text-font);
    color: var(--brand-color-1);
    border: 4px solid var(--brand-color-1);
    border-radius: 5px;
    text-align: center;
    line-height: 1;
    cursor: pointer;
    display: grid;
    place-items: center;
}
.button.active span{
    background-color: var(--brand-color-1);
    color: var(--basic-light-color);
}
.button {
    display: grid;
    place-items: center;
}
</style>