<template>
    <div class="my-4">
        <v-card color="#1F2833" max-width="600">
            <v-card-title>
                <p class="text-h4 font-weight-black" style="color: #66FCF1;">{{update.title}}</p>
            </v-card-title>
            <v-card-subtitle class="">
                <div class="pb-2">
                    <v-chip size="x-small" class="mr-2" color="#FFFFFF" variant="outlined">
                    <v-icon icon="mdi-tag-outline" start/>
                        {{update.project}}
                    </v-chip>
                    <v-chip size="x-small" color="#FFFFFF" variant="outlined">
                        <v-icon icon="mdi-calendar-month-outline" start/>
                        {{update.date}}
                    </v-chip>
                </div>
            </v-card-subtitle>
            <v-card-text>
                {{update.content}}
            </v-card-text>
        </v-card>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'UpdatePost',
    data() {
        return {
            // Add your component data here
        };
    },
    props: {
        update: {
            type: Object as () => {title: string, date: string, content: string, project: string},
            required: true
        }
    },
    methods: {
        // Add your component methods here
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