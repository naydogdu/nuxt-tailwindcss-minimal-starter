export default {
    srcDir: 'src/',
    components: true,
    head: {
        link: [
            {
                rel: 'stylesheet',
                href: 'https://rsms.me/inter/inter.css'
            }
        ]
    },
    buildModules: [
        '@nuxt/postcss8',
        // ...
    ],
    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
    },
    css: [
        '@/assets/css/main.css',
    ],
}
