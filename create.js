let url = `http://localhost:3000/tickets`

let form = document.querySelector('form')
form.addEventListener('submit', function() {
  getData();
})
async function getData() {
  event.preventDefault();
  let id = document.getElementById('input1').value;
  let date = document.getElementById('input2').value;
  let description = document.getElementById('input3').value;
  let status = document.getElementById('input4').value;

  let obj = {
    id,
    date,
    description,
    status
  }
  // console.log(obj)
  let response = await fetch(`${url}`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(obj)
  })
}






