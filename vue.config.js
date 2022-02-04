module.exports = {
    publicPath: "/rasphome/",

    transpileDependencies: ["vuetify"],

    pwa: {
        name: "Home",
        themeColor: "#4DBA87",

        workboxPluginMode: "GenerateSW",
        icons: [
            {
                src: "./img/icons/logo.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    },
};
