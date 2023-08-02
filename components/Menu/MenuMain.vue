<script setup>
import { tabs } from '@/assets/content/tabs.js';

const menuIsOpen = ref(false);

function toggleMenu() {
    menuIsOpen.value = !menuIsOpen.value;
}

</script>

<template>
    <Button48 @clicked="toggleMenu">
        <ButtonMenu />
    </Button48>

    <div class="menuModal" :class="{ 'active' : menuIsOpen}">
        <div class="content flex column">
            <h1 class="centered pad20 fs32">Menu</h1>
            <div class="tabList">
                <NuxtLink v-for="tab in tabs" :key="tab.id" class="menuTab actionButton shadow flex justifyBetween alignCenter rightArrowHover" :to="tab.path">
                    <span>{{ tab.title }}</span>

                    <WidgetRightArrow />
                </NuxtLink>

                <div class="icon absolute top0 right0 fS32 pad10 pointer" @click="toggleMenu">close</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.menuModal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
    opacity: 0;
    pointer-events: none;
    transition: 300ms ease;
}
.menuModal.active {
    pointer-events: all;
    opacity: 1;
    
}
.content {
    height: 100%;
    padding: 20px;
    border: 5px solid var(--brand-color-1);
    border-radius: 10px;
    background-color: var(--basic-light-color);
    position: relative;
}
.tabList {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.menuTab {
    font-size: 18px;
    color: var(--basic-light-color);
    padding: 10px;
    border-bottom: 1px solid var(--brand-color-1);
    border-radius: 10px;
    background-color: var(--brand-color-1);
    cursor: pointer;
    transform: translateY(100px);
    opacity: 0;
    transition: 300ms ease;
}
.menuModal.active .menuTab {
    transform: translateY(0px);
    opacity: 1;
    transition: 300ms ease;
}
</style>