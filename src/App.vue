<template>
    <v-app>
        <v-main>
            <div class="white--text text-center text-h2 my-12">Bienvenue Louis</div>
            <v-row class="ma-12" justify="center">
                <v-col cols="12" md="4" v-for="(app, index) in apps" :key="index">
                    <a :href="getAdress(app)">
                        <v-card color="rgba(255,255,255,0.1)" class="my-4 pa-2">
                            <v-row align="center" justify="center">
                                <v-col cols="3">
                                    <v-img :src="app.img" height="80" contain />
                                </v-col>
                                <v-col cols="auto">
                                    <v-card-title class="white--text mx-0 px-0">
                                        {{ app.nom }}
                                    </v-card-title>
                                </v-col>
                            </v-row>
                        </v-card>
                    </a>
                </v-col>
            </v-row>
            <!-- <v-row justify="center" class="pa-0 ma-0">
                <v-col cols="12" md="8">
                    <v-card class="pa-12" color="rgb(255, 255, 255, 0)" flat width="100%">
                        <line-chart :chart-data="datacollection" height="100" :options="options"></line-chart>
                    </v-card>
                </v-col>
            </v-row> -->
        </v-main>
    </v-app>
</template>

<script>
import axios from "axios";
// npm install chart.js@2
import LineChart from "./LineChart";

export default {
    name: "App",

    components: {
        LineChart,
    },

    data() {
        return {
            piAdress: "192.168.1.62",
            apps: [
                { nom: "Portainer", img: "./portainer.svg", extra: ":9000/#!/1/docker/containers", https: false },
                { nom: "Nextcloud", img: "./nextcloud.svg", extra: ":450", https: true },
                { nom: "Jellyfin", img: "./jellyfin.png", extra: ":8096", https: false },
                { nom: "Calibre", img: "./calibre.png", extra: ":8083", https: false },
            ],
            temperature: "",
            options: {
                legend: {
                    labels: {
                        fontColor: "white",
                        fontSize: 18,
                    },
                },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                // beginAtZero: true,
                                fontColor: "white",
                            },
                        },
                    ],
                    xAxes: [
                        {
                            ticks: {
                                fontColor: "white",
                            },
                        },
                    ],
                },
            },
        };
    },

    computed: {
        datacollection() {
            let lines = this.temperature.split("\n");
            lines.shift();
            lines.pop();
            let data = [];
            let labels = [];
            for (const line of lines) {
                labels.push(line.split(",")[1]);
                data.push(line.split(",")[2]);
            }

            console.log(lines);

            return {
                labels: labels,
                datasets: [
                    {
                        label: "Température de la Raspberry",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        data: data,
                        borderColor: "#ffffff",
                    },
                ],
            };
        },
    },

    mounted() {
        axios
            .get("https://cuke.duckdns.org/temperature.txt")
            .then((response) => (this.temperature = response.data))
            .catch((error) => console.log(error));
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
