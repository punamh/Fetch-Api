let main = document.getElementById('container')
let url = `http://localhost:3000/tickets`
async function getData(){
 try {
   let res = await fetch(`http://localhost:3000/tickets`)
   let data = await res.json();
   console.log(data);
   displayData(data);
 }catch (error){
   console.log(error)
 }
}
getData()
// {id: 1, title: 'Task 1', description: 'Description for Task 1', status: 'Open', dueDate: '2024-06-10T12:00:00'}

function displayData(arr){
main.innerHTML="";
  arr.forEach((ele)=>{
    let card = document.createElement('div');

    let id = document.createElement('h2');
    id.innerText= `ID: ${ele.id}`;

    let title = document.createElement('h2');
    title.innerText = `Title: ${ele.title}`

    let Date = document.createElement('h2');
    Date.innerText= `DueDate: ${ele.dueDate}`;

    let description = document.createElement('h2');
    description.innerText= `Description: ${ele.description}`;

    let status = document.createElement('h2');
    status.innerText= `Status: ${ele.status}`;

    let deleteBtn = document.createElement('button');
      deleteBtn.textContent= 'Delete'

    let editBtn = document.createElement('button');
      editBtn.textContent= 'Edit';

    editBtn.addEventListener('click',function(){
      localStorage.setItem('EditItem',ele.id);
      window.location.href="edit.html";
    })

    deleteBtn.addEventListener('click', async function(){
      let response = await fetch(`${url}/${ele.id}`, {
        method: "DELETE"
      })
      getData();
    })
    
    card.append(id,title,Date,description,status,deleteBtn,editBtn);
    main.append(card);
  })
}