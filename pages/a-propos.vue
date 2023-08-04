<template>
    <PageMain>
        <template #title>
            <PageTitle page="about" />
        </template>

        <template #main>
            <div class="aboutContent bodyText">
                <p>
                    Demande à Tutu propose des infos pratique pour les cuisiniers qui ont parfois du mal à évaluer les quantité de nourriture nécessaires pour le nombre de convives présents.  Il a suffit d'une blague pour qu'on décide de faire naître cette appli qui nous a beaucoup fait rigolé lors de son développement.  Développement qui a eu lieu lors de nos vacances sous le soleil de la région Toulousaine, au mois de juillet 2023.
                </p>

                <p>
                    Tugdual Martin aka Tutu, travaille depuis plusieurs année dans le cathering évènementiel.  Son entreprise, Les assiettes sauvages, est spécialisé dans la cuisine de saison utilisant des ingédients locaux.
                </p>

                <p>
                    Cette appli web a été développé par Eric Podhorecki de <br> <a href="https://studioposoroko.com">Studio Posoroko</a>.
                </p>

                <p>
                    Le desing du site a été créé par Anne Maillard aka Fractal Véloce.  Auteurice et pixel artiste, elle touche aussi design pour le web.
                </p>
            
                <p>
                    Tugdual Martin, les assiettes sauvages: <br> <a href="tel:0695071264">06 95 07 12 64</a>
                </p>

                <p>
                    Eric Podhorecki, Monsieur Edgar: <br> <a href="tel:0695071264">06 95 07 12 64</a>
                </p>

                <p>
                    Fractal Véloce: <a href="https://www.instagram.com/fractale_veloce/">fractale_veloce</a>
                </p>

                <NuxtLink to="/mentions-legales">Mentions légales</NuxtLink>
            </div>
        </template>

        <template #footer>
            <FooterTutuBox />
        </template>
    </PageMain>
</template>

<style setup>
.aboutContent {

    padding: 10px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
a {
    font-weight: bold;
}
</style>