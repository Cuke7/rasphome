<template>
    <v-app>
        <v-main>
            <!-- <h1 class="white--text text-center my-12">Home sweet home!</h1> -->
            <div style="height: 100px"></div>
            <v-row align="center" justify="center">
                <v-col cols="4" class="ma-12">
                    <a :href="'http://' + piAdress + ':9000/#!/1/docker/containers'" target="_blank">
                        <v-card class="pa-6" color="rgb(255, 255, 255, 0.1)">
                            <v-row align="center" justify="center">
                                <v-col cols="4">
                                    <v-img src="./assets/portainer.svg" contain height="50"> </v-img>
                                </v-col>
                                <v-col>
                                    <v-card-title class="white--text">Portainer</v-card-title>
                                </v-col>
                            </v-row>
                        </v-card>
                    </a>
                </v-col>
                <v-col cols="4" class="ma-12">
                    <a :href="'https://' + piAdress + ':443'" target="_blank">
                        <v-card class="pa-6" color="rgb(255, 255, 255, 0.1)">
                            <v-row align="center" justify="center">
                                <v-col cols="4">
                                    <v-img src="./assets/nextcloud.svg" contain height="50"> </v-img>
                                </v-col>
                                <v-col>
                                    <v-card-title class="white--text">Nextcloud</v-card-title>
                                </v-col>
                            </v-row>
                        </v-card>
                    </a>
                </v-col>
            </v-row>

            <v-card class="mx-12 pa-12" color="rgb(255, 255, 255, 0)" flat>
                <line-chart :chart-data="datacollection" :height="100" :options="options"></line-chart>
            </v-card>
        </v-main>
    </v-app>
</template>

<script>
import axios from "axios";
import LineChart from "./LineChart.js";

export default {
    name: "App",

    components: {
        LineChart,
    },

    data() {
        return {
            piAdress: "192.168.1.37",
            temperature: { time: [], temperature: [] },
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
            let labels = this.temperature.time;
            let data = this.temperature.temperature;

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
            .get("https://" + this.piAdress + ":3000")
            .then((response) => (this.temperature = response.data))
            .catch((error) => console.log(error));
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
