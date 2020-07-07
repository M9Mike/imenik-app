import React from 'react'
import $ from "jquery";

const EditModalForm = ({id}) => {
  //Edit Contact
  const editContact = (event) =>{
    event.preventDefault()

    const data = $('#myEditForm').serializeArray();
    data.push({
      name: 'id',
      value: id
  });

    $.ajax({
        url:'./editContact.php',
        type:'post',
        data: data,
        success:function(response){
          if (response == 1){
              alert('Contact updated');
          }
          else {
              alert('Error! Check if contact exists.');
          }
        }
    });
  }

  return (
    <>
      <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editModalLabel">Edit contact</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form id='myEditForm' onSubmit={editContact} action="./editContact.php" method="POST">
                <div class="form-group">
                  <label for="name">Name: </label>
                  <input class="form-control" type='text' placeholder='First Name' name='name' required />
                </div>
                <div class="form-group">
                  <label for="lastName">Last Name: </label>
                  <input class="form-control" type='text' placeholder='Last Name' name='lastName' required />
                </div>
                <div class="form-group">
                  <label name="phone">Phone Number: </label>
                  <input class="form-control" type='text' placeholder='Phone' name='phone' required />
                </div>
                <div class="form-group">
                  <label name="email">Email: </label>
                  <input class="form-control" type='text' placeholder='Email' name='email' required />
                </div>
                {
                  //<button className="btn btn-primary">Submit</button>
                }
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary" onClick={editContact}>Save contact</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditModalForm;
