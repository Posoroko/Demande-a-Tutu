<script setup>


function handleTypeSelection(typeId) {
    activeType.value = types.value[typeId]
}
const types = ref([
    { id: 0, value: 'tops', name: 'Hauts' }, { id: 1, value: 'bottoms', name: 'Bas' },
    { id: 2, value: 'hats', name: 'Chapeaux' }, { id: 3, value: 'tools', name: 'Accessoires' }
])

const activeType = ref(types.value[0])


</script>

<template>
    <PageMain>
        <template #title>
            <PageTitle page="tutuTuning" />
        </template>

        <template #main>

                <div class="content flex column gap5 h100">
                    <!-- <PageBordePanel>
                    <template #content>
                        Grand maître Sappeur avec une street cred légendaire, il porte la fringue de style comme personne!
                    </template>
                </PageBordePanel> -->

                    <TutuConfigTypeSelector :types="types" :activeType="activeType" @selection="handleTypeSelection" />

                    <TutuConfigScroller :activeType="activeType" />
                </div>

        </template>

        <template #footer>
            <FooterTutuBox />
        </template>
    </PageMain>
</template>