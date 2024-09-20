<template>
    <div class="d-flex justify-center align-center overflow-auto">
        <div>
            <v-card class="mx-auto" color="#1F2833">
                <v-card-text>
                <p class="text-h4 font-weight-black" style="color: #66FCF1;">What is Polarity Projects?</p>
                <div class="mt-2">
                    <p style="color: #C5C6C7;">
                        Polarity Projects is a software development company that specializes in creating high impact software. <br/>
                        We believe that focusing on high quality software and cutting edge hardware within new and existing business fields <br/>
                        will lead us to build world leading solutions and products.
                    </p>
                </div>
                </v-card-text>
                <v-card-actions>
                <v-btn
                    prepend-icon="mdi-update"
                    color="#45A29E"
                    text="Updates"
                    variant="outlined"
                    @click="navigateToUpdates()"
                ></v-btn>
                <v-btn
                    prepend-icon="mdi-code-block-tags"
                    color="#45A29E"
                    text="Projects"
                    variant="outlined"
                    @click="navigateToProjects()"
                ></v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'About',
    data() {
        return {
            // Add your component data here
        };
    },
    methods: {
        // Add your component methods here
        navigateToUpdates(){
            this.$router.push('/Updates');
        },
        navigateToProjects(){
            this.$router.push('/Projects');
        }
    },
    computed: {
        // Add your computed properties here
    },
    created() {
        // Lifecycle hook for when the component is created
    },
    mounted() {
        // Lifecycle hook for when the component is mounted
    }
};
</script>

<style lang="scss" scoped>

</style>