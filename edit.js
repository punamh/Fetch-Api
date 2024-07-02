let url = `http://localhost:3000/tickets`
document.getElementById('edit').addEventListener('click',function(){
  editData();
})
async function editData(){
  let id = localStorage.getItem('EditItem')
  let value = document.getElementById('input1').value;
  console.log(value);

  let obj = {
    title:value
  }
  
  let response = await fetch(`${url}/${id}`,{
    method: "PATCH",
    headers: {
      "content-type":"application/json"
    },
    body: JSON.stringify(obj)
  })
  window.location.href="index.html";
}
