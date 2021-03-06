import axios from 'axios';

class JobService {
    constructor() {
        this.job = axios.create({
            baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
            withCredentials:true,
        });
    }

    async getAllJobs() {
        return this.job.get('/jobs')
            .then(({ data: jobs }) => jobs);
    }

    async addNewJob(body){
        return this.job.post('/jobs', body)
            .then(({ data: job }) => job);
    }
}

const jobService = new JobService()

export default jobService;