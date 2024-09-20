<template>
    <div class="d-flex justify-center align-center">
        <div v-if="isProjectSelected">
            Projects
        </div>
        <div v-if="isFirstFlightSelected">
            First flight
        </div>
        <div v-if="isGaiaSelected">
            Gaia
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Projects',
    data() {
        return {
            // Add your component data here
        };
    },
    methods: {
        // Add your component methods here
    },
    computed: {
        isProjectSelected(){
            return !this.$route.query.hasOwnProperty('project');
        },
        isFirstFlightSelected(){
            return this.$route.query.project == 'FirstFlight'
        },
        isGaiaSelected(){
            return this.$route.query.project == 'Gaia'
        },
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