<script setup>
const pot = {
    diametre: 0,
    height: 0,
}


const showNumPad = ref(false);
const targetValue = ref('');

const volume = ref(0);

function requestInput(value) {
    targetValue.value = value;
    showNumPad.value = true;
}

function loadValue(value) {
    console.log(value)
    pot[targetValue.value] = value;
    targetValue.value = '';
    showNumPad.value = false;
}

function calculateVolume() {
    volume.value = ((Math.PI * Math.pow(Number(pot.diametre) / 2, 2) * Number(pot.height)) / 1000).toFixed(2);
}

function clearAll() {
    pot.diametre = 0;
    pot.height = 0;
    volume.value = 0;
}
</script>

<template>
    <div class="content">
        <div class="inputBox">
            <p class="fatText marRightAuto">diamêtre : </p>

            <div class="input" @click="requestInput('diametre')">{{ pot.diametre }}</div>

            <div class="unitBox fatText">cm</div>
        </div>

        <div class="inputBox">
            <p class="fatText marRightAuto">hauteur : </p>

            <div class="input" @click="requestInput('height')">{{ pot.height }}</div>

            <div class="unitBox fatText">cm</div>

        </div>

        <div class="buttonBox flex justifyEnd">
            <div class="icon" @click="clearAll">undo</div>
            <div class="calculate pointer" @click="calculateVolume">calculer</div>
        </div>

        <div class="inputBox">
            <p class="fatText marRightAuto">volume: </p>

            <div class="input">{{ volume }}</div>

            <div class="unitBox fatText">l</div>
        </div>
    </div>

    <WidgetNumPad v-if="showNumPad" @loadValue="loadValue" @closeNumPad="showNumPad = false"/>
</template>

<style scoped>
.content {
    padding: 30px;
}
.inputBox {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 10px;
}
.input {
    width: 6ch;
    /* height: 30px; */
    font-size: 30px;
    text-align: right;
    padding: 10px 13px;
    border: 4px solid green;
    border-radius: 5px;
    cursor: pointer;
}
.unitBox{
    width: 2ch;
    text-align: center;
    padding: 5px 12px;
}
.calculate {
    background-color: var(--brand-color-1);
    padding: 20px;
}
</style>