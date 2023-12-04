
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
    }
})
