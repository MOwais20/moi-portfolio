// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/css/main.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  plugins: [{ src: "~/plugins/font-awesome-icons.js", mode: "client" }],

  modules: ["@nuxtjs/tailwindcss"],
});
