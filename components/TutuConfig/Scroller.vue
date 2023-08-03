<script setup>

const tutu = useState('selectedItems', () => { return { naked: "", tops: "", bottoms: "", hats: "", tools: "" } })

const props = defineProps({
    activeType: Object,
})

const appConfig = useAppConfig();
const directusItems = appConfig.directus.items;
const directusAssets = appConfig.directus.assets;

const imageIndex = ref(0);

const offsetString = computed(() => {
    return imageIndex.value * -100 + "%";
})

const fetchOptions = {
    server: false,
    params: {
        fields: '*.*',
    }
}

const { data: items } = await useAsyncData(
    "tutuTuning",
    async () => {
        const items = await $fetch(`${directusItems}Tutu_tunning`, fetchOptions)
        
        return items.data
    }
    ,
    { server: false }
)

const shownItems = computed(() => {

    imageIndex.value = 0;

    return items.value[props.activeType.value]
})




function navigate(direction) {
    if(direction === "left" && imageIndex.value > 0 ) {
        imageIndex.value -= 1;
    } else if(direction === "right" && imageIndex.value  < shownItems.value.length - 1 ){
        imageIndex.value += 1;
    }
}
function loadItem() {
    tutu.value[props.activeType.value] = shownItems.value[imageIndex.value].image;

    let temp = tutu.value

    localStorage.setItem('tutu', JSON.stringify(temp));
    
}

</script>

<template>
    <div class="content flex justityBetween" v-if="shownItems">
        <div class="leftArrowBox arrowBox">
            <button class="btn48" @click="navigate('left')" >
                <span class="icon shadow actionButton" >arrow_left</span>
            </button>
        </div>

        <div class="frame flex relative">

            <div class="image w100 relative centered r" v-for="(item, index) in shownItems" :key="item.id">
                <img class="itemImage " :src="`${directusAssets}${item.thumbnail}`" alt="" >
            </div>

            <div class="absolute w100 bottom0 left0 flex justifyEnd alignCenter">
                <div class="counter">
                    {{ imageIndex + 1 }} / {{ shownItems.length }}
                </div>
                <button class="btn48">
                    <span class="icon shadow actionButton" @click="loadItem">check_circle</span>
                </button>
            </div>


        </div>

         <div class="rightArrowBox arrowBox">
            <button class="btn48" @click="navigate('right')" >
                <span class="icon shadow actionButton" >arrow_right</span>
            </button>
        </div>
    </div>
</template>

<style scoped>
.content {
    padding-bottom: 4px;
    flex-grow: 1;
}
.frame {
    flex-grow: 1;
    border: 4px solid var(--brand-color-1);
    border-radius: 8px;
    overflow: hidden;
    display: flex;
}
.itemImage {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 80%;
    object-fit: contain;
    transform: translate(-50%, -50%);
}
.counter {
    font-size: 13px;
    font-family: 'Roboto', sans-serif;
    letter-spacing: -1px;
    color: var(--basic-light-color);
    background-color: var(--brand-color-1);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 2px 4px;
    position: absolute;
    bottom: 0;
    left: 50%;
    translate: -50%;
    margin-left: 4px;
    display: grid;
    place-items: center;
}
.btn48 {
    width: 48px;
    height: 48px;
    border-radius: 5px;
    display: grid;
    place-items: center;
}
.btn48 span {
    height: 40px;
    width: 40px;
    font-size: 28px;
    color: var(--basic-light-color);
    background-color: var(--brand-color-1);
    border-radius: 5px;
    display: grid;
    place-items: center;
    cursor: pointer;
}
.image {
    padding: 4px;
    flex-shrink: 0;
    display: grid;
    place-items: center;
    translate: v-bind('offsetString');
    transition: 300ms ease;
}
.image div {
    width: 100%;
    height: 100%;
    background-color: rgba(128, 128, 128, 0.486);
    border-radius: 5px;
    display: grid;
    place-items: center;
}
.arrowBox {
    display: grid;
    place-items: center;
}
.arrow{
    width: 48px;
    height: 48px;
    font-size: 40px;
    line-height: 1;
    color: var(--basic-light-color);
    background-color: var(--brand-color-1);
    border-radius: 5px;
    display: grid;
    place-items: center;
    cursor: pointer;
}

</style>