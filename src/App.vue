<template>
    <v-app>
        <v-main>
            <div class="white--text text-center text-h2 my-12">Bienvenue Louis</div>
            <v-row class="ma-12">
                <v-col cols="12" md="4" v-for="(app, index) in apps" :key="index">
                    <a :href="getAdress(app)">
                        <v-card color="rgba(255,255,255,0.1)" class="my-4">
                            <v-row>
                                <v-col cols="4">
                                    <v-img :src="app.img" />
                                </v-col>
                                <v-col cols="8">
                                    <v-card-title class="white--text">
                                        {{ app.nom }}
                                    </v-card-title></v-col
                                >
                            </v-row>
                        </v-card>
                    </a>
                </v-col>
            </v-row>
            <!-- <v-row>
                <v-card class="mx-12 pa-12" color="rgb(255, 255, 255, 0)" flat>
                    <line-chart :chart-data="datacollection" :height="100" :options="options"></line-chart>
                </v-card>
            </v-row> -->
        </v-main>
    </v-app>
</template>

<script>
// import axios from "axios";
// import LineChart from "LineChart";

export default {
    name: "App",

    // components: {
    //     LineChart,
    // },

    data() {
        return {
            piAdress: "192.168.1.37",
            apps: [
                { nom: "Portainer", img: "./portainer.svg", extra: ":9000/#!/1/docker/containers", https: false },
                { nom: "Nextcloud", img: "./assets/nextcloud.svg", extra: ":443", https: true },
                { nom: "Netdata", img: "./assets/netdata.png", extra: ":19999/#menu_sensors", https: false },
                { nom: "HomeAssistant", img: "./assets/homeassistant.png", extra: ":8123", https: false },
            ],
            // options: {
            //     legend: {
            //         labels: {
            //             fontColor: "white",
            //             fontSize: 18,
            //         },
            //     },
            //     scales: {
            //         yAxes: [
            //             {
            //                 ticks: {
            //                     // beginAtZero: true,
            //                     fontColor: "white",
            //                 },
            //             },
            //         ],
            //         xAxes: [
            //             {
            //                 ticks: {
            //                     fontColor: "white",
            //                 },
            //             },
            //         ],
            //     },
            // },
        };
    },

    // computed: {
    //     datacollection() {
    //         let labels = this.temperature.time;
    //         let data = this.temperature.temperature;
    //         return {
    //             labels: labels,
    //             datasets: [
    //                 {
    //                     label: "Température de la Raspberry",
    //                     backgroundColor: "rgba(0, 0, 0, 0)",
    //                     data: data,
    //                     borderColor: "#ffffff",
    //                 },
    //             ],
    //         };
    //     },
    // },

    mounted() {
        // axios
        //     .get("https://" + this.piAdress + ":3000")
        //     .then((response) => (this.temperature = response.data))
        //     .catch((error) => console.log(error));
    },

    methods: {
        getAdress(app) {
            if (app.https) {
                return "https://" + this.piAdress + app.extra;
            } else {
                return "http://" + this.piAdress + app.extra;
            }
        },
        getImg(app) {
            return app.img;
        },
    },
};
</script>

<style scoped>
.v-main {
    background-image: linear-gradient(to right bottom, #0c469c, #005590, #005662, #00522e, #354908);
}

a {
    text-decoration: none;
}
</style>
