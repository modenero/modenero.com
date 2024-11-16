// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    /* Application Settings */
    app: {
        /* Application Header */
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Modenero DAO — New Money Beginnings™',
            meta: [
                { name: 'description', content: `Modenero DAO is the decentralized finance (DeFi) solutions provider for the industry's most bleeding-edge visionaries.` },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ],
        },
    },

    /* Application Modules */
    modules: [
        /* Tailwind CSS */
        '@nuxtjs/tailwindcss'
    ],

    /* Set compatibility date. */
    compatibilityDate: '2024-11-16',
})
