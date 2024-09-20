<template>
    <div class="d-flex justify-center align-center">
        Updates Will be posted shortly. Expect to see some amazing things.
    </div>
</template>

<script lang="ts">
import UpdatesService from '../services/UpdatesService'
export default {
    name: 'Updates',
    data() {
        return {
            // Add your component data here
            updatesService : new UpdatesService(),
            updates: []
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
    }
};
</script>

<style lang="scss" scoped>

</style>