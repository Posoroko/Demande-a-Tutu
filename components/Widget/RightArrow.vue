<template>
     <div class="buttonBox flex justifyEnd">
        <span class="ligntText east">
            <WidgetIconSVG fillColor="var(--basic-light-color)">
                <!-- east button -->
                <path d="M15.1,19l-1.5-1.4l4.8-4.6H1.6v-2h16.8l-4.7-4.6L15.1,5l7.3,7L15.1,19z"/>
            </WidgetIconSVG>
        </span>
    </div>
</template>

<style scoped>
.rightArrowHover:hover .east {
    opacity: 1;
    transform: translateX(5px);
    transition: 900ms cubic-bezier(.01,.96,.04,.96);
}
.east {
    width: 48px;
    height: 48px;
    transition: 900ms cubic-bezier(.01,.96,.04,.96);
}
@media (hover: hover ) {
    .east {
        opacity: 0.5;
    }
}
</style>