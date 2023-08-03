<template>

    <div id="appBackdrop">
        <div id="appBox" class="flex column justifyBetween">
            <NuxtPage />
        </div>
    </div>
    
</template>

<style scoped>
#appBackdrop {
    width: 100%;
    height: 100svh;
    background-color: rgb(46, 46, 46); 
    padding: 4px;
    display: grid;
    place-items: center;
}
#appBox {
    width: min(100%, 475px);
    height: min(100%, 800px);
    contain: layout paint;
}
</style>