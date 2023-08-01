<script setup>
const menuIsOpen = ref(false);

function toggleMenu() {
    console.log('click')
    menuIsOpen.value = !menuIsOpen.value;
    console.log(menuIsOpen.value)
}
const tabs = [
    {
        name: 'confg Tutu',
        path: '/configuration-tutu'
    },
    {
        name: 'Accueil',
        path: '/'
    },
    {
        name: 'Calculette de casserole',
        path: '/calculette-de-casserole'
    },
    {
        name: 'À propos',
        path: '/a-propos'
    },
    {
        name: 'Mentions légales',
        path: '/mentions-legales'
    }
]
</script>

<template>
    <ButtonMenu @clicked="toggleMenu" />

    <div class="menuModal" v-if="menuIsOpen">
        <div class="content">
            <h1 class="centered pad20 fs32">Menu</h1>
            <div class="tabList">
                <NuxtLink v-for="(tab, index) in tabs" :key="index" class="menuTab flex justifyBetween alignCenter rightArrowHover" :to="tab.path">
                    <span>{{ tab.name }}</span>

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
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.menuTab {
    font-size: 18px;
    color: var(--basic-light-color);
    padding: 20px;
    border-bottom: 1px solid var(--brand-color-1);
    border-radius: 10px;
    background-color: var(--brand-color-1);
    cursor: pointer;
}
</style>