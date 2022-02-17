import { generateId } from "../Utils/generateId.js"

export class House {
  constructor({ imgUrl, price, city, state, year, sqfoot }) {
    this.id = generateId(),
      this.imgUrl = imgUrl
    this.price = price,
      this.city = city,
      this.state = state,
      this.year = year,
      this.sqfoot = sqfoot
  }

  get Template() {
    return `
    <div class="col-md-4">
      <div class="bg-white rounded shadow">
        <img class="img-fluid rounded-top" src="${this.imgUrl}" alt="house image">
        <div class="p-3">
          <p>${this.price}</p>
          <p>${this.city}</p>
          <p>${this.state}</p>
          <p>${this.year}</p>
          <p>${this.sqfoot}</p>
        </div>
        <div>
          <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
        </div>
      </div>
    </div>
    
    `
  }
}