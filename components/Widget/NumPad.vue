<script setup>
const emit = defineEmits(['loadValue', 'closeNumPad']);

const input = ref('');

function handleNumClick(e) {
    const key = e.target.textContent;
    if (key === 'backspace') {
        input.value = input.value.slice(0, -1);
    } else if (key === 'arrow_forward') {
        input.value = '';
    } else if(Number(key) >= 0 && Number(key) <= 9){
        input.value += key;
    }
}

function emitValue() {
    emit('loadValue', input.value);
    input.value = '';
}
</script>

<template>
    <div class="backdrop">
        <div class="numPad" @click="handleNumClick">
            <div class="screenBox">
                <div class="screen">{{ input }}</div>
            </div>

            <div class="box flex">
                <div class="key fn iconBtn" @click="$emit('closeNumPad')">
                    <!-- close button -->
                    <WidgetIconSVG fillColor="var(--basic-light-color)">
                        <path d="M4.4,21.5l-1.9-1.9l7.6-7.6L2.5,4.4l1.9-1.9l7.6,7.6l7.6-7.6l1.9,1.9L13.9,12l7.6,7.6l-1.9,1.9L12,13.9L4.4,21.5z"/>
                    </WidgetIconSVG>
                </div>
                <div class="key fn iconBtn">
                    <!-- backspace button -->
                    <WidgetIconSVG fillColor="var(--basic-light-color)">
                        <path d="M7.5,19.8L2,12l5.5-7.8H22v15.5H7.5z M11.3,16.4l2.9-2.9l2.9,2.9l1.6-1.6L15.8,12l2.9-2.9l-1.6-1.6l-2.9,2.9l-2.9-2.9L9.8,9.1l2.9,2.9l-2.9,2.9L11.3,16.4z"/>
                    </WidgetIconSVG>
                </div>
                <div class="key fn iconBtn" @click="emitValue">
                    <!-- check/confirm vutton -->
                    <WidgetIconSVG fillColor="var(--basic-light-color)">
                        <path d="M8.9,19.6l-7.3-7.3l1.8-1.8L8.9,16L20.6,4.4l1.8,1.8L8.9,19.6z"/>
                    </WidgetIconSVG>
                </div>
            </div>
            
            <div class="key num">1</div>
            <div class="key num">2</div>
            <div class="key num">3</div>
            <div class="key num">4</div>
            <div class="key num">5</div>
            <div class="key num">6</div>
            <div class="key num">7</div>
            <div class="key num">8</div>
            <div class="key num">9</div>
            
            <div class="key zero">0</div>
            <div class="key">.</div>
            
        </div>

        
    </div>
</template>

<style scoped>
.iconBtn {
    padding: 10px;
}
* {
    user-select: none;
}
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    place-items: center;
    background-color: rgba(0, 0, 0, 0.474);
    backdrop-filter: blur(2px);
}

.numPad {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 10px;
    padding: 10px;
    background-color: var(--basic-light-color);
    border: 10px solid var(--brand-color-1);
    border-radius: 10px;
    box-shadow: 0 0 5px rgb(0, 0, 0);
}
.box {
    grid-column: 1 / span 3;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.screenBox {
    grid-column: 1 / span 3;
    grid-row: 1 / span 1;

    
    padding: 1px;
    border: 2px solid rgb(52, 66, 54);
    border-radius: 12px;
}
.screen {
    width: 100%;
    height: 100%;
    font-size: 3rem;
    background-color: rgb(89, 119, 94);
    padding: 0px 13px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.key {
    height: 64px;
    color: var(--basic-light-color);
    font-size: 3rem;
    background-color: var(--brand-color-1);
    border-radius: 10px;
    display: grid;
    place-items: center;
    cursor: pointer;
    box-shadow: 0 0 5px rgb(0, 0, 0);
}
.key:hover {
    background-color: var(--brand-color-1-hover);
}
.key:active {
    background-color: var(--brand-color-1-active);
}
.key.num {
    width: 64px;
    
}
.zero {
    grid-column: 1 / span 2;
}
</style>