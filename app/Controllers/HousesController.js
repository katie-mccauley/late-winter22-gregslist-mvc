import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Components/HouseForm.js";
import { housesService } from "../Services/HousesService.js";


function _draw() {
  // console.log(ProxyState.houses)
  let template = ""
  ProxyState.houses.forEach(h => template += h.Template)
  document.getElementById("listings").innerHTML = template
}
export class HousesController {

  constructor() {
    console.log("hello from the houses controller");
    _draw()
    ProxyState.on('houses', _draw)
  }

  deleteHouse(houseId) {
    // console.log("delete house", houseId)
    housesService.deleteHouse(houseId)
  }

  viewHouses() {
    _draw()
    document.getElementById("modal-body-slot").innerHTML = getHouseForm()
  }
  createHouse(event) {
    event.preventDefault()
    let form = event.target
    console.log("this is the event button for the house button", form)
    let newHouse = {
      price: form.price.value,
      city: form.city.value,
      state: form.state.value,
      year: form.year.value,
      sqfoot: form.sqfoot.value,
      imgUrl: form.imgUrl.value,
    }
    console.log("this is new house", newHouse);
    housesService.createHouse(newHouse)
    form.reset()
  }


}