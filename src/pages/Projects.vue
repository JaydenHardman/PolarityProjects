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
import ProjectsService from '@/services/ProjectsService';

export default {
    name: 'Projects',
    data() {
        return {
            // Add your component data here
            projectsService : new ProjectsService(),
            projects: [],
        };
    },
    methods: {
        // Add your component methods here
        getProjects() {
            this.projectsService.getProjects()
            .then((response) => {
                this.projects = response.data
            })
        }
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
        this.getProjects();
    }
};
</script>

<style lang="scss" scoped>

</style>