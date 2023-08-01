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


const offsetCount = ref (0);
const offsetString = ref("0%");

function navigate(direction) {
    if(direction === "left" && offsetCount.value < 0 ) {
        offsetCount.value += 100;
    } else if(direction === "right" && offsetCount.value  > ((shownImages.value.length - 1) * -100)){
        offsetCount.value -= 100;
    }
    offsetString.value = `${offsetCount.value}%`;
}
const shownImages = ref(images.value[props.activeType.value]);
</script>

<template>
    <div class="content flex justityBetween gap5" >
        <div class="leftArrowBox arrowBox">
            <span class="icon arrow" @click="navigate('left')">arrow_left</span>
        </div>

        <div class="frame flex r">

            <div class="image w100 b" v-for="image in shownImages" :key="image.id">{{ image.thumbnail }}</div>

        </div>

         <div class="rightArrowBox arrowBox">
            <span class="icon arrow" @click="navigate('right')">arrow_right</span>
        </div>
    </div>
</template>

<style scoped>
.content {
    flex-grow: 1;
}
.frame {
    flex-grow: 1;
    border: 4px solid var(--brand-color-1);
    border-radius: 8px;
    overflow: hidden;
    display: flex;
}
.image {
    flex-shrink: 0;
    display: grid;
    place-items: center;
    translate: v-bind('offsetString');
    transition: 300ms ease;
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
    transition: 300ms ease;
}
.arrow:hover {
    background-color: var(--brand-color-1-hover);
    transition: 75ms ease;
}
.arrow:active {
    background-color: var(--brand-color-1-active);
}
</style>