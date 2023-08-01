<template>
    <div class="content flex">
        <div class="frame">
            <img src="/images/Tutu-petit.png" alt="">
        </div>

        <div class="bulleBox h100">
            <FooterBulle />
        </div>
    </div>
</template>

<style scoped>
.frame {
    padding: 5px 10px;
}

img {
    width: 80px;
}
.bulleBox {
    flex-grow: 1;
    padding: 10px;
}
</style>