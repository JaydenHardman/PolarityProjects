import baseClient  from './baseHttpClient';

export class ProjectsService {
    public async getTestData() {
        return await baseClient.get("testData");
    }
    public async getProjects(){
        return await baseClient.get("projects");
    }
};

export default ProjectsService