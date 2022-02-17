import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";

class JobsService {
  createJob(newJob) {
    console.log("Hello from newjob services")
    let realJob = new Job(newJob)
    console.log("newjob services from realjob", realJob)
    ProxyState.jobs = [realJob, ...ProxyState.jobs]
  }
  deleteJob(idname) {
    let deleteJob = ProxyState.jobs.findIndex(j => j.id == idname)
    console.log(deleteJob);
    ProxyState.jobs.splice(deleteJob, 1)
    ProxyState.jobs = ProxyState.jobs
  }
  constructor() {
    console.log("this is the jobs services");
  }
}

export const jobsService = new JobsService()