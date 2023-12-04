<script setup>
const appConfig = useAppConfig();
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: false,
    params: {
        // fields: 'id, title, subtitle, content, image, imageAlt, moreInfo, date_created, file, fileName',
    }
}

const { data: items } = await useAsyncData(
    "ingredients",
    async () => {
        const items = await $fetch(`${directusItems}Tutu_Ingredients`, fetchOptions)

        return items.data
    }
    ,
    { server: false }
)
const queryString = ref('');

const list = computed(() => {
    return items.value.filter((item) => {
        return item.name.toLowerCase().includes(queryString.value.toLowerCase());
    })
})

</script>

<template>
    <PageMain v-if="items">
        <template #title>
            <PageTitle page="verre" />
        </template>

        <template #main>
            <div class="absoluteFull flex column pad5">
                <div class="searchBox flex justifyEnd">
                    <input class="input" type="text" v-model="queryString" placeholder="Rechercher un ingrédient" />
                </div>
                <div class="topTableBox w100 flex">
                    <p class="w40 bodyText column1">ingrédient</p>

                    <div class="flex grow bodyText">
                        <p class="grow centered">1/4 litre</p>
                        <p class="grow centered">1/2 litre</p>
                        <p class="grow centered">1 litre</p>
                    </div>
                </div>

                <div class="ingredientsContent flex column ">

                    


                    <div class="ingredientLine flex alignCenter justifyBetween bodyText" v-for="item in list" :key="item.id">
                        <p class="w40 column1 item">{{ item.name }}</p>
                        
                        <div class="gramsBox flex alignCenter grow">
                            <p class="grams centered">{{ Math.floor(item.perLiter / 4)}}gr</p>
                            <p class="grams centered">{{ Math.floor(item.perLiter / 2) }}gr</p>
                            <p class="grams centered">{{ item.perLiter }}gr</p>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <template #footer>
            <FooterTutuBox />
        </template>
    </PageMain>
</template>

<style scoped>
.searchBox {
    background-color: var(--brand-color-1);
    padding: 4px;
    z-index: 1;
    
}
.input {
    /* font-family: var(--text-font); */
    font-size: 20px;
    color: var(--brand-color-2);
    padding: 7px;
    background-color: var(--basic-light-color);
    border: none;
    outline: none;
    flex-grow: 1;
}
.topTableBox{
    padding: 4px;
    border: 4px solid var(--brand-color-1);
    margin: 5px 0;
}
.ingredientLine {
    padding: 4px 0;
    margin: 2px 0;
}
.ingredientLine:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.077);
}
.ingredientsContent {
    overflow: scroll;
    flex-grow: 1;
}
.column1 {
    padding-left: 10px;
}
.column1.item {
    padding-left: 20px;
}
.gramsBox {
    flex-grow: 1;
}
.grams {
    flex-grow: 1;
}
</style>