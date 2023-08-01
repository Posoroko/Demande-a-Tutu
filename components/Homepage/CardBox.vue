<script setup>

</script>

<template>
    <div class="content flex column gap5">
        <NuxtLink class="card " to="/calculette-de-casserole">
            <span class="frame">
                <img src="/images/casserole.png" alt="">
            </span>

            <span class="text">
                Calculle gamelle
            </span>
        </NuxtLink>

        <NuxtLink class="card " to="/bacs-gastro">
            <span class="frame">
                <img src="/images/bac-gastro.png" alt="">
            </span>

            <span class="text">
                bac gastro
            </span>
        </NuxtLink>

    </div>
</template>

<style scoped>
.content {
    padding: 4px;
    flex-grow: 1;
}
.card {
    width: 100%;
    font-size: 24px;
    line-height: 1;
    color: var(--basic-dark-color);
    border: 4px solid var(--brand-color-1);
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 20px;
    /* flex-wrap: wrap; */
}
img {
    height: 60px;
}
</style>