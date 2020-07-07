import React from 'react'
import $ from "jquery";

const AddModalForm = () => {

  const handleSubmit = e =>{
    e.preventDefault()
    $.ajax({
        url:'./addContact.php',
        type:'post',
        data:$('#myAddForm').serialize(),
        success:function(){
            alert("contact added");
        }
    });
  }

  return (
    <>
      <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="addModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addModalLabel">Add contact</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form id='myAddForm' onSubmit={handleSubmit} action="./addContact.php" method="POST">
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
              <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Save contact</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddModalForm;
