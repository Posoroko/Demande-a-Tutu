<script setup>
const props = defineProps({
    activeType: Object,
})
const images = ref({
    top: [
        { id: 0, thumbnail: "top 0", image: "TOP 0" },
        { id: 1, thumbnail: "top 1", image: "TOP 1" },
        { id: 2, thumbnail: "top 2", image: "TOP 2"},
        { id: 3, thumbnail: "top 3", image: "TOP 3"}
    ],
    pants: [
        { id: 0, thumbnail: "pants 0", image: "PANTS 0" },
        { id: 1, thumbnail: "pants 1", image: "PANTS 1" },
    ],
    hat: [
        { id: 0, thumbnail: "hat 0", image: "HAT 0" },
        { id: 1, thumbnail: "hat 1", image: "HAT 1" },
    ],
    tool: [
        { id: 0, thumbnail: "tool 0", image: "TOOL 0" },
        { id: 1, thumbnail: "tool 1", image: "TOOL 1" },
    ],
})


const imageIndex = ref (0);
const offsetString = computed(() => {
    return imageIndex.value * -100 + "%";
})

function navigate(direction) {
    if(direction === "left" && imageIndex.value > 0 ) {
        imageIndex.value -= 1;
    } else if(direction === "right" && imageIndex.value  < shownImages.value.length - 1 ){
        imageIndex.value += 1;
    }
}
const shownImages = computed(() => {
    imageIndex.value = 0;

    return images.value[props.activeType.value]
})
</script>

<template>
    <div class="content flex justityBetween" v-if="shownImages">
        <div class="leftArrowBox arrowBox">
            <button class="btn48" @click="navigate('left')" >
                <span class="icon shadow actionButton" >arrow_left</span>
            </button>
        </div>

        <div class="frame flex relative">

            <div class="image w100" v-for="image in shownImages" :key="image.id">
                <div>{{ image.thumbnail }}</div>
            </div>

            <div class="absolute w100 bottom0 left0 flex justifyEnd alignCenter">
                <div class="counter">
                    {{ imageIndex + 1 }} / {{ shownImages.length }}
                </div>
                <button class="btn48">
                    <span class="icon shadow actionButton">check_circle</span>
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