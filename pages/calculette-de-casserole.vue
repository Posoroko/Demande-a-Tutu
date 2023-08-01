<script setup>
const pot = ref({
    diametre: 0,
    height: 0,
})


const showNumPad = ref(false);
const targetValue = ref('');

const volume = ref(0);

function requestInput(value) {
    targetValue.value = value;
    showNumPad.value = true;
}

function loadValue(value) {
    pot.value[targetValue.value] = value;
    targetValue.value = '';
    showNumPad.value = false;
}

function calculateVolume() {
    volume.value = ((Math.PI * Math.pow(Number(pot.value.diametre) / 2, 2) * Number(pot.value.height)) / 1000).toFixed(2);
}

function clearAll() {
    pot.value.diametre = 0;
    pot.value.height = 0;
    volume.value = 0;
}
</script>

<template>
    <PageMain>
        <template #title>
            header
        </template>

        <template #main>
            <div class="contentBox flex column gap5">
                <!-- <p class="bodyText darkText">Connapitre le volume d'une casserole permet de préparer la quantité idéal en fonction du nombre de convive.  Par exemple, une gamelle de 25 litres vous donnera 125 portion de soupe.</p> -->

                <PageBordePanel>
                    <template #content>
                        Entrez les dimension de votre gamelle pour en connaître le volume.
                    </template>
                </PageBordePanel>

                <div class="bgPanel">
                    <p class="fatText ">diamêtre : </p>

                    <div class="field input pointer" @click="requestInput('diametre')">
                        {{ `${pot.diametre}cm` }}
                    </div>
                </div>

                <div class="bgPanel">
                    <p class="fatText ">hauteur : </p>

                    <div class="field input pointer" @click="requestInput('height')">
                        {{ `${pot.height}cm` }}
                    </div>
                </div>

                <div class="buttonBox flex justifyEnd gap5">
                    <div class="calculate pointer fatText lightText" @click="clearAll">effacer</div>
                    <div class="calculate pointer fatText lightText" @click="calculateVolume">calculer</div>
                </div>

                <div class="bgPanel">
                        <p class="fatText ">volume : </p>

                        <div class="field output">
                            {{ `${ volume } litre` }}<span v-if="volume >= 2">s</span>
                        </div>
                    </div>
            </div>

        </template>

        <template #footer>
            <FooterTutuBox />
        </template>
    </PageMain>

    <WidgetNumPad v-if="showNumPad" @loadValue="loadValue" @closeNumPad="showNumPad = false"/>
</template>

<style scoped>

.bgPanel {
    color: var(--basic-light-color);
    background-color: var(--brand-color-1);
    padding: 7px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
}
.field {
    
    font-size: clamp(2.4rem, 4vw + 0.1rem, 3rem);
    text-align: center;
    color: var(--brand-color-1);
    background-color: var(--basic-light-color);
    padding: 3px 15px;
    /* border: 4px solid var(--brand-color-2); */
    border-radius: 8px;
}

.field.input {
    width: 7ch;
}

.field.output {
    min-width: 7ch;
}
.unitBox{

    text-align: center;
    padding: 5px 12px;
}
.calculate {
    background-color: var(--brand-color-1);
    padding: 20px;
    border-radius: 50px;
}
</style>