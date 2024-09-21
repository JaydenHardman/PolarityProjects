<template>
    <v-col class="overflow-auto">
        <div class="d-flex justify-center align-center" v-for="(update, index) in updates">
            <UpdatePost :update="update" :key="index"/>
        </div>
    </v-col>
</template>

<script lang="ts">
import UpdatePost from '@/components/UpdatePost.vue';
import UpdatesService from '../services/UpdatesService'
export default {
    name: 'Updates',
    components: {
        UpdatePost
    },
    data() {
        return {
            // Add your component data here
            updatesService : new UpdatesService(),
            updates: [] as any[]
        };
    },
    methods: {
        //Add your component methods here
        getTestDate(){
            return this.updatesService.getTestData()
            .then((response) => {
                this.updates = response.data
            })
            .catch((error) => {
                console.error(error)
            })
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
        this.getTestDate();
        this.updates.push({
            title: 'Research Begins',
            date: '2024-08-21',
            project: 'First Flight',
            content: 'Project First Flight has begun the research phase of the project, the team has the majority of their experience in the field of software engineering and are thus taking the research phase quite seriously as they do not have much experience in the field. The main focus of the research is around the drone design and electronics as it is important to have a stable flying platform before moving forward and working on a launch system and, further down the line, the landing system.',
        })
    }   
};
</script>

<style lang="scss" scoped>

</style>