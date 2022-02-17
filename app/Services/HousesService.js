import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";

class HousesService {
  createHouse(newHouse) {
    console.log("new house in services", newHouse)
    let realHouse = new House(newHouse)
    console.log("its a real house now", realHouse);
    ProxyState.houses = [realHouse, ...ProxyState.houses]
  }
  constructor() {
    console.log("Hello this is house service")
  }


  deleteHouse(houseId) {
    console.log("this is delete house from service", houseId);
    let deleteHouse = ProxyState.houses.findIndex(c => c.id == houseId)
    ProxyState.houses.splice(deleteHouse, 1)
    ProxyState.houses = ProxyState.houses
    console.log(deleteHouse);
  }
}

export const housesService = new HousesService()