import{T as n,_ as u,c as e,U as o,W as a,X as d,o as t,Y as j}from"./index-DKTtGcOZ.js";const l={name:"Projects",data(){return{projectsService:new n,projects:[]}},methods:{getProjects(){this.projects=this.projectsService.getProjects()},isSelectedProject(r){return this.$route.query.hasOwnProperty("project")&&this.$route.query.project==r}},computed:{isProjectSelected(){return!this.$route.query.hasOwnProperty("project")},isFirstFlightSelected(){return this.$route.query.project=="FirstFlight"},isGaiaSelected(){return this.$route.query.project=="Gaia"}},created(){},mounted(){this.getProjects()}},p={class:"d-flex justify-center align-center"},h={key:0},_={key:0};function P(r,y,m,S,i,s){return t(),e("div",p,[s.isProjectSelected?(t(),e("div",h," Projects ")):o("",!0),(t(!0),e(a,null,d(i.projects,c=>(t(),e("div",null,[s.isSelectedProject(c.url)?(t(),e("div",_,j(c.title),1)):o("",!0)]))),256))])}const g=u(l,[["render",P]]);export{g as default};
