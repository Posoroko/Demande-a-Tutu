<script setup>
import { tabs } from '@/assets/content/tabs.js'

const homepageTabs = computed(() => {
    return tabs.filter(tab => tab.homepage)
})
</script>

<template>
    <div class="content h100 flex column gap5">
        <NuxtLink v-for="tab in homepageTabs" :key="tab.id" class="card " :to="tab.path">
            <span class="frame">
                <img  v-if="tab.image" :src="`/images/${tab.image}`" alt="">
            </span>

            <span class="text">{{ tab.title }}</span>
        </NuxtLink>
    </div>
</template>

<style scoped>
.content {
    padding: 4px;
    flex-grow: 1;
    height: 100%;
}
.card {
    width: 100%;
    font-size: 24px;
    line-height: 1;
    color: var(--basic-dark-color);
    border: 4px solid var(--brand-color-1);
    padding: 0 10px;
    display: flex;
    align-items: center;
    gap: 20px;
    flex-grow: 1;
}
img {
    height: 40px;
}
</style>