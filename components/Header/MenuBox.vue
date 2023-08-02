<template>
    <div class="box">
        <Button48>
            <NuxtLink to="/" class="h100 w100 r icon lightText">
                home
            </NuxtLink>
        </Button48>

        <MenuMain />

    </div>
</template>

<style scoped>
.box {
    height: 96px;
}
.icon {
    font-size: 28px;
    color: var(--basic-light-color);
}
</style>