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
        const items = await $fetch(`${directusItems}Tutu_Ingredients?limit=10`, fetchOptions)

        return items.data
    }
    ,
    { server: false }
)
</script>

<template>
    <PageMain v-if="items">
        <template #title>
            <PageTitle page="verre" />
        </template>

        <template #main>
            <div class="ingredientsContent flex column gap20 absoluteFull b">
                <div v-for="item in items" :key="item.id">
                    <p>{{ item.name }}</p>
                    <p>{{ item.perLitre }}gr</p>
                </div>
            </div>
        </template>

        <template #footer>
            <FooterTutuBox />
        </template>
    </PageMain>
</template>

<style scoped>
.ingredientsContent {
    overflow: scroll;
    flex-grow: 1;
}
</style>