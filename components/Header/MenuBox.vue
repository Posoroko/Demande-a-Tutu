<template>
    <div class="box">
        <NuxtLink to="/" class="button icon r">
            home
        </NuxtLink>

        <div class="button r">
            <MenuMain />
        </div>
    </div>
</template>

<style scoped>
.box {
    padding: 3px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 3px;
}
.button {
    width: 48px;
    height: 48px;
    border-radius: 3px;
    display: grid;
    place-items: center;
}
.icon {
    font-size: 40px;
    color: var(--brand-color-1);
}
</style>