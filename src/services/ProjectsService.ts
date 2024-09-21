import baseClient  from './baseHttpClient';

export class ProjectsService {
    public async getTestData() {
        return await baseClient.get("testData");
    }
    public getProjects(){
        //return await baseClient.get("projects");

        var testData = [] as any;
        testData.push({title: '/First Flight', url:'FirstFlight'})
        testData.push({title: '/Gaia', url:'Gaia'})
        return testData
    }
};

export default ProjectsService