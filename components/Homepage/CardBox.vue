<template>
    <div class="cardContainer w100 h100 bodyText">
       <NuxtLink to="/calculette-de-casserole" class="card">
            <h2>
                Calculette de casserole
            </h2>
       </NuxtLink> 

       <NuxtLink to="/" class="card">

        </NuxtLink> 

        <NuxtLink to="/" class="card">

        </NuxtLink> 
    </div>
</template>

<style scoped>
.cardContainer {
    padding: 4px;
    gap: 4px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.card {
    aspect-ratio: 1/1;
    padding: 8px;
    border: 4px solid var(--brand-color-1);
    border-radius: 8px;
    text-align: center;
}

</style>