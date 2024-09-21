<template>
    <div class="d-flex justify-center align-center">
        <div v-if="isProjectSelected">
            Projects
        </div>
        <div v-for="item in projects">
            <div v-if="isSelectedProject(item.url)">
                {{ item.title }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import ProjectsService from '@/services/ProjectsService';

export default {
    name: 'Projects',
    data() {
        return {
            projectsService : new ProjectsService(),
            projects: [] as any[],
        };
    },
    methods: {
        getProjects() {
            this.projects = this.projectsService.getProjects()
            // .then((response) => {
            //     //this.projects = response.data
            //     this.projects = response
            // })
        },
        isSelectedProject(title: string){
            return this.$route.query.hasOwnProperty('project') && this.$route.query.project == title
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
        this.getProjects();
    }
};
</script>

<style lang="scss" scoped>

</style>