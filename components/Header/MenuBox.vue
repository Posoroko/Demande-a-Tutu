<template>
    <div class="box">
        <Button48>
            <NuxtLink to="/" class="h100 w100 lightText">
                <WidgetIconSVG fillColor="var(--basic-light-color)">
                    <path class="iconPath" d="M4,21V9l8-6l8,6v12h-6v-7h-4v7H4z"/>
                </WidgetIconSVG>
            </NuxtLink>
        </Button48>

        <MenuMain />

    </div>
</template>

<style scoped>
.box {
    height: 96px;
}
</style>