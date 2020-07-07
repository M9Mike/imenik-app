import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import AddModalForm from './AddModalForm';
import EditModalForm from './EditModalForm';
import './App.css';
import $ from "jquery";

function App() {
  const [kontakti,setKontakti] = useState([])
  const [id,setId] = useState('')

  const handleZemi = async () =>{
    try{
      const response = await fetch('./get-phones.php')
      if(response.ok){
        // console.log(response)
        const json = await response.json()
        setKontakti(json)
      }
      else{
        throw new Error('Response fail')
      }
    }catch(err){
      console.log(err);
    }
  }


//Delete Contact
function deleteContact(event){
    event.preventDefault();

    $.ajax({
        url: './deleteContact.php',
        type: 'post',
        data: {id: event.target.id},
        success: function(response){
            if (response == 1){
                alert('Contact deleted');
            }
            else {
                alert('Error! Check if contact exists.');
            }
        }
    });
}

  return (
    <div className="App">
    <div className="container">
        <div>
          <h3>Contacts:</h3>
          <button onClick={handleZemi} className="btn btn-info">Update Contact list</button>
          <hr/>
          <ul className="list-group">
            {
              kontakti.map((x,i)=><li key={i} className='list-group-item list-group-item-action'>{x.FirstName} {x.LastName} {x.Phone} {x.Email}
              <div>
                <button  id={x.Phone} type="button" className="btn btn-warning btn-sm" onClick={ ()=>{setId(x.Phone)} } data-toggle="modal" data-target="#editModal">Edit</button>
                <button  id={x.Phone} type="button" className="btn btn-danger btn-sm" onClick={deleteContact}>Delete</button>
              </div></li>)
            }
          </ul>
        </div>
        <hr/>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addModal">
          Add new contact
        </button>
        <AddModalForm />
        <EditModalForm id={id} />
      </div>
    </div>
  );
}

export default App;
