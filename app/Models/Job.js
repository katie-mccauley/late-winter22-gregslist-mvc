import { generateId } from "../Utils/generateId.js"

export class Job {

  constructor({ imgUrl, salary, city, state, position }) {
    this.id = generateId(),
      this.imgUrl = imgUrl,
      this.salary = salary,
      this.city = city,
      this.state = state,
      this.position = position
  }

  get Template() {
    return ` <div class="col-md-4">
    <div class="bg-white rounded shadow">
      <img class="img-fluid rounded-top" src="${this.imgUrl}" alt="car image">
      <div class="p-3">
        <p>${this.salary}</p>
        <p>${this.city}</p>
        <p>${this.state}</p>
        <p>${this.position}</p>
        <button class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
      </div>
    </div>
    </div>`
  }
}