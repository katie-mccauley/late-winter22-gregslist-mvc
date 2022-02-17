import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Components/HouseForm.js";
import { getJobForm } from "../Components/JobForm.js";
import { jobsService } from "../Services/JobsService.js";


function _draw() {
  let template = ""
  ProxyState.jobs.forEach(j => template += j.Template)
  document.getElementById("listings").innerHTML = template
}
export class JobsController {

  constructor() {
    console.log("this is the jobs controller");
    _draw()
    ProxyState.on('jobs', _draw)
  }

  viewJobs() {
    _draw()
    document.getElementById("modal-body-slot").innerHTML = getJobForm()
  }
  deleteJob(idname) {
    console.log("this is the id from delete job")
    jobsService.deleteJob(idname)
  }

  createJob(event) {
    event.preventDefault()
    let form = event.target

    console.log("this is the form event", form);
    let newJob = {
      position: form.position.value,
      city: form.city.value,
      state: form.state.value,
      salary: form.salary.value,
      imgUrl: form.imgUrl.value
    }
    console.log("new job", newJob)
    jobsService.createJob(newJob)
    form.reset()
  }


}