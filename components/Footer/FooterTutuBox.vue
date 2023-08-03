<script setup>
const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const tutu = useState('selectedItems', () => { return { naked: "", tops: "", bottoms: "", hats: "", tools: "" } })



const local = ref({
    naked: "fef59cc9-eee6-48ae-b7d6-31ac4104b56a",
    tops: "4140e823-8a3a-47d2-90e5-a53de2269ddc",
    bottoms: "4e126f35-ec58-4cd2-ab9a-8940bd4593f5",
    hats: "61c6a530-26fb-4ac8-8d9e-48d358df9265",
    tools: "8f991de3-a7bd-4c81-80e3-579f013d04eb"
})



const mountedOnce = ref(false);

onMounted(() => {
    if(mountedOnce.value) return;

    let temp = JSON.parse(localStorage.getItem('tutu'));

    if (!localStorage || !temp) {
        tutu.value.naked = local.value.naked;
        tutu.value.tops = local.value.tops;
        tutu.value.bottoms = local.value.bottoms;
        tutu.value.hats = local.value.hats;
        tutu.value.tools = local.value.tools;

        return
    }

    tutu.value = temp;
    
    mountedOnce.value = true;
})


</script>

<template>
    <div class=" flex">
        <div class="frame relative">
            <img v-if="tutu.naked" class="" :src="`${directusAssets}${tutu.naked}`" alt="">
            <img v-if="tutu.tops" class=" absolute top0 left0" :src="`${directusAssets}${tutu.tops}`" alt="">
            <img v-if="tutu.bottoms" class=" absolute top0 left0" :src="`${directusAssets}${tutu.bottoms}`" alt="">
            <img v-if="tutu.hats" class=" absolute top0 left0" :src="`${directusAssets}${tutu.hats}`" alt="">
            <img v-if="tutu.tools" class=" absolute top0 left0" :src="`${directusAssets}${tutu.tools}`" alt="">
        </div>

        <div class="bulleBox h100">
            <FooterBulle />
        </div>
    </div>
</template>

<style scoped>

img {
    width: 80px;
    margin: 5px 10px;
}
.bulleBox {
    flex-grow: 1;
    padding: 10px;
}
</style>