<template>

    <div id="appBackdrop">
        <div id="appBox">
            <NuxtPage />
        </div>
    </div>
    
</template>

<style scoped>
#appBackdrop {
    width: 100%;
    height: 100vh;
    background-color: rgb(46, 46, 46); 
    padding: 4px;
    display: grid;
    place-items: center;
}
#appBox {
    width: min(100%, 475px);
    height: min(100%, 800px);
    contain: layout paint;
    background-color: var(--basic-light-color);
    border: 10px solid var(--brand-color-1);
    border-radius: 20px;
}
</style>