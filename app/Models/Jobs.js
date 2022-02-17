import { generateId } from "../Utils/generateId"

export class Jobs {

  constructor(salary, city, state, position) {
    this.id = generateId(),
      this.salary = salary,
      this.city = city,
      this.state = state,
      this.position = position
  }
}