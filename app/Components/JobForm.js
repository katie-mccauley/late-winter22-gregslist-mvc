export function getJobForm() {
  return `<form class="row bg-white p-2" onsubmit="app.jobsController.createJob(event)">
  <h3 class="col-12">GET JOB</h3>
  <div class="mb-3 col-5">
    <label for="" class="form-label">Position</label>
    <input type="text" class="form-control" name="position" id="position" aria-describedby="helpId"
      placeholder="">
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
  <div class="mb-3 col-2">
    <label for="" class="form-label">Salary</label>
    <input type="number" class="form-control" name="salary" id="salary" aria-describedby="helpId" placeholder=""
      value="2000" min="1990" max="3000">
  </div>
  <div class="mb-3 col-6">
    <label for="" class="form-label">ImgUrl</label>
    <input type="text" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="helpId" placeholder="">
  </div>
  <button class="col-4 offset-8 btn btn-success"> Create</button>
</form>`
}