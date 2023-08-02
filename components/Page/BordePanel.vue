<template>
    <div class="borderPanel bodyText">
        <slot name="content"></slot>
    </div>
</template>


<style scoped>
.borderPanel {
    color: var(--brand-color-1);
    padding: 12px;
    border: 4px solid var(--brand-color-1);
}
</style>