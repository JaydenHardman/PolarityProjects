import baseClient  from './baseHttpClient';

export class UpdatesService {
    public async getTestData() {
        return await baseClient.get("testData");
    }
    public async getProjects(){
        return await baseClient.get("updates");
    }
};

export default UpdatesService