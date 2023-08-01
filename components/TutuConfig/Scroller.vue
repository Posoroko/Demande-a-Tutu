<script setup>
const props = defineProps({
    activeType: String,
})
const images = [1,2,3,4,5,6,7];
</script>

<template>
    <div class="content flex justityBetween gap5">
        <div class="leftArrowBox arrowBox">
            <span class="icon">arrow_left</span>
        </div>

        <div class="frame r">
            <div class="drawer">
                <div class="image"></div>
            </div>
        </div>

         <div class="rightArrowBox arrowBox">
            <span class="icon">arrow_right</span>
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
}
.arrowBox {
    display: grid;
    place-items: center;
}
.arrowBox .icon{
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