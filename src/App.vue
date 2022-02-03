<template>
    <v-app>
        <v-main>
            <a href="http://192.168.1.37:9000/#!/home" target="_blank">
                <v-card class="pa-12 ma-12">
                    <v-card-title>Portainer</v-card-title>
                </v-card>
            </a>
            <a href="http://192.168.1.37:19999" target="_blank">
                <v-card class="pa-12 ma-12">
                    <v-card-title>Netdata</v-card-title>
                </v-card>
            </a>
            <a href="https://192.168.1.37:443" target="_blank">
                <v-card class="pa-12 ma-12">
                    <v-card-title>Nextcloud</v-card-title>
                </v-card>
            </a>
            <a href="http://192.168.1.37:8083" target="_blank">
                <v-card class="pa-12 ma-12">
                    <v-card-title>calibre web</v-card-title>
                </v-card>
            </a>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "App",

    data: () => ({
        //
    }),
};
</script>
