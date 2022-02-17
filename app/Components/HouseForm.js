export function getHouseForm() {
  return `
  
  <form class="row bg-white p-2" onsubmit="app.housesController.createHouse(event)">
        <h3 class="col-12">Create a House</h3>
        <div class="mb-3 col-5">
          <label for="" class="form-label">Price</label>
          <input type="number" class="form-control" name="price" id="price" aria-describedby="helpId"
            placeholder="price">
        </div>
        <div class="mb-3 col-5">
          <label for="" class="form-label">City</label>
          <input type="text" class="form-control" name="city" id="city" aria-describedby="helpId" placeholder="">
        </div>
        <div class="mb-3 col-2">
          <label for="" class="form-label">State</label>
          <input type="text" class="form-control" name="state" id="state" aria-describedby="helpId" placeholder=""
            value="2000" min="1990" max="3000">
        </div>
        <div class="mb-3 col-6">
          <label for="" class="form-label">Year</label>
          <input type="number" class="form-control" name="year" id="year" aria-describedby="helpId" placeholder="">
        </div>
        <div class="mb-3 col-6">
          <label for="" class="form-label">Sqaure Foot</label>
          <input type="number" class="form-control" name="sqfoot" id="sqfoot" aria-describedby="helpId" placeholder="">
        </div>
        <div class="mb-3 col-6">
          <label for="" class="form-label">ImgUrl</label>
          <input type="text" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="helpId" placeholder="">
        </div>
        <button class="col-4 offset-8 btn btn-success"> Create</button>
      </form>
  `
}