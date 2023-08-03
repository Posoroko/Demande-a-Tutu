<script setup>

const appConfig = useAppConfig();
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: false,
    params: {
        // fields: 'id, title, subtitle, content, image, imageAlt, moreInfo, date_created, file, fileName',
    }
}

const { data: bacs } = await useAsyncData(
    "bacsGastro",
    async () => {
        const items = await $fetch(`${directusItems}Tutu_gastros`, fetchOptions)
        console.log(items.data)
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
const selectedItemId = ref(null);

</script>

<template>
    <PageMain v-if="bacs">
        <template #title>
            <PageTitle page="bacs" />
        </template>

        <template #main>
            <div class="absoluteFull">
                <div class="bacsContent w100 h100">
                    <div class="frame relative pointer" v-for="(bac, index) in bacs" :key="bac.id" @click="selectedItemId = index">
                        <div class="bac noEvents" :class="`size${bac.name}`" 
                        :style="{ width: `calc((100% / 530 )* ${bac.length})`, height: `calc((100% / 325 * ${bac.width}))` }">
                            <div class="hole"></div>
                        
                        </div>
                        <p class="absolutlyCentered fatText textColor2 noEvents">{{ bac.name }}</p>
                    </div>

                    <div class="modal absoluteFull" v-if="selectedItemId != null">
                        <div class="modalContent full flex column gap10 pad20 bodyText lightText">
                            <div class="infoBox ">
                                <p>format: </p>
                                <p>{{ bacs[selectedItemId].name }}</p>
                                <p>largeur: </p>
                                <p>{{ bacs[selectedItemId].length }}mm</p>
                                <p>longueur: </p>
                                <p>{{ bacs[selectedItemId].width }}mm</p>
                            
                            </div>
                            <div class="flex ">
                                <p class="grow centered">profondeur</p>
                                <p class="grow centered">contenance</p>
                            </div>
                        
                            <div class="flex" v-for="volume in bacs[selectedItemId].volumes" :key="volume.depth">
                                <p class="grow centered">{{ volume.depth }}mm</p>
                                <p class="grow centered">{{ volume.volume }}l</p>
                            </div>

                            <span class="icon closeBtn" @click="selectedItemId = null">close</span>
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
.bacsContent{
    padding: 5px;
    flex-grow: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
    overflow: scroll;
}
.frame {
    width: 100%;
    aspect-ratio: 530/325;
    border: 1px dashed green;
    
}
.frame:hover {
    filter: brightness(1.2);
}
.bac {
    background-color: rgb(168, 168, 168);
    border: 1px solid rgb(218, 218, 218);
    padding: 5px;
    border-radius: 5px;
    /* transform: translate(-1px, -1px); */
}
.hole {
    width: 100%;
    height: 100%;
    border: 1px soid green;
    background-color: rgb(144, 144, 144);
    box-shadow: inset 0px 0px 15px 0px rgba(0,0,0,0.75);
    border-radius: 10px;
}
.modal {
    background-color: rgba(0, 0, 0, 0.618);
    backdrop-filter: blur(2px);
    padding: 10px;
}
.modalContent {
    height: 100%;
    background-color: var(--brand-color-1);
    border-radius: 10px;
    overflow: scroll;
}
.infoBox {
    border: 1px solid var(--basic-light-color);
    padding: 10px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
}
.infoBox p:nth-child(odd) {
    text-align: right;
}
.closeBtn {
    font-size: 32px;
    line-height: 1;
    background-color: var(--brand-color-1);
    padding: 5px;
    border-radius: 5px;
    position: absolute;
    top: 15px;
    right: 15px;
    
    cursor: pointer;
    display: grid;
    place-items: center;
}
</style>