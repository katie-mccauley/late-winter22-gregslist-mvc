import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Job.js"

import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

const testCar = new Car(
  {
    make: 'GMC',
    model: 'Sierra',
    year: 2018,
    price: 5600,
    description: 'its cool.',
    color: '#FFFFFF',
    imgUrl: 'https://thiscatdoesnotexist.com'
  })

const buyHouse = new House(
  {
    imgUrl: 'https://thiscatdoesnotexist.com',
    price: 1400,
    city: "Boise",
    state: "Idaho",
    year: 2020,
    sqfoot: 700,
  })

const getJob = new Job(
  {
    imgUrl: 'https://thiscatdoesnotexist.com',
    salary: 1400000,
    city: "Porty",
    state: "OR-E-GONE",
    position: "Manager",

  })

class AppState extends EventEmitter {

  // NOTE just adds intellisense to our cars array that lets our code know its an array of cars, not other things 
  /** @type {import('./Models/Car').Car[]} */
  cars = [testCar]
  /**@type {import('./Models/House').House[]} */
  houses = [buyHouse]
  /**@type {import('./Models/Job').Job[]} */
  jobs = [getJob]
}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
