
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({     
    css: ['@/assets/css/main.css'],
    devtools: true,
    ssr: false,
    modules: ['@nuxtjs/google-fonts'],
    googleFonts: {
        families: {
            Kurale: true,  
        },
        preconnect: true,
        useStylesheet: true
    },
     app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            // titleTemplate: '%pageTitle %titleSeparator %siteName',
            title: 'Demande à Tutu, il a la réponse !',
            htmlAttrs: {
                lang: 'fr'
            },

            link: [
                { rel: "manifest", href: "/site.webmanifest" }
            ],
           
        }
    },
})
