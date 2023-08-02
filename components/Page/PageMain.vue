<script setup>

</script>

<template>
    <header class="flex justifyEnd">
        <div class="titleBox flex alignStretch">
            <slot name="title">

            </slot>
        </div>

        <div class="menuBox">
            <HeaderMenuBox />
        </div>
    </header>

    <main>
        <slot name="main">

        </slot>
    </main>

    <footer>
        <slot name="footer">

        </slot>
    </footer>
</template>


<style scoped>

header {
    width: 100%;
    background-color: var(--basic-light-color);
    border: 10px solid var(--brand-color-1);
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    position: relative;
}
.titleBox {
    height: 96px;
    flex-grow: 1;
}
.menuBox {
    border-left: 10px solid var(--brand-color-1);
}
main {
    width: 100%;
    background-color: var(--basic-light-color);
    border-left: 10px solid var(--brand-color-1);
    border-right: 10px solid var(--brand-color-1);
    flex-grow: 1;
}
footer {
    width: 100%;
        background-color: var(--basic-light-color);

    border: 10px solid var(--brand-color-1);
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    position: relative;
}
</style>