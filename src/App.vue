<template>
  <v-layout>
    <v-navigation-drawer
      theme="dark"
      permanent
      rail
    >
      <!-- <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/75.jpg"
      ></v-list-item>

      <v-divider></v-divider> -->
      <v-list
        density="compact"
        v-for="(item, index) in navItems"
        :key="index"
        nav
      >
        <v-list-item :prepend-icon="item.icon" @click="navigateMenuItem(item.url)" :value="item" :active="isActiveRoute(item.url)">
          <v-tooltip activator="parent" location="start">{{ item.title }}</v-tooltip>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Sub Menu on Projects Page -->
    <v-navigation-drawer v-if="isProjectsPage" permanent width="150">
      <v-list
        density="compact"
        v-for="(item, index) in projects"
        :key="index"
        nav
      >
        <v-list-item @click="navigateProject(item.url)" :title="item.title" :value="item" :active="isActiveProject(item.url)"/>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex h-screen">
      <router-view class="w-100" />
    </v-main>
  </v-layout>
</template>


<script lang="ts">
import ProjectsService from './services/ProjectsService';

export default {
  name: 'App',
  data() {
    return {
      navItems: [
        { title: '/About', icon: 'mdi-information-outline', url: '/About' },
        { title: '/Updates', icon: 'mdi-update', url: '/Updates' },
        { title: '/Projects', icon: 'mdi-code-block-tags', url: '/Projects'},
      ],
      projects: [
        {title: '/First Flight', url:'FirstFlight'},
        // {title: '/Gaia', url:'Gaia'},
      ],
      projectsService : new ProjectsService(),
    }
  },
  methods: {
    navigateMenuItem(url: string) {
      this.$router.push(url)
    },
    navigateProject(url: string) {
      this.$router.push({ path: this.$route.path, query: { project: url }})
    },
    isActiveRoute(url: string): boolean{
      return this.$route.path == url
    },
    isActiveProject(title: string): boolean{
      return this.$route.query.hasOwnProperty('project') && this.$route.query.project == title
    },
    // getProjects() {
    //   this.projects = this.projectsService.getProjects()
    //   .then((response) => {
    //     this.projects = response.data
    //   })
    // }
  },
  computed: {
    isProjectsPage() {
      var path = this.$route.path.toLowerCase()
      return path === '/projects'
    },
  },
  mounted() {
    //this.getProjects()
  }
}
</script>

<style lang="scss" scoped>

</style>