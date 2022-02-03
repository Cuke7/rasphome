<template>
    <v-app>
        <v-main>
            <a href="http://192.168.1.37:9000/#!/1/docker/containers" target="_blank">
                <v-card class="pa-12 ma-12">
                    <v-card-title>Portainer</v-card-title>
                </v-card>
            </a>

            <a href="https://192.168.1.37:443" target="_blank">
                <v-card class="pa-12 ma-12">
                    <v-card-title>Nextcloud</v-card-title>
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
