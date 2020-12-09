//https://codingstatus.com/how-to-add-and-remove-input-fields-dynamically-using-jquey/
$(document).ready(function(){
  
  // add input fields dynamically
  var NewInputField=
    `<div class="new-input row p-3">
        <div class="col-6">
            <input class="form-control" min="1" max="20" id="improvement_name" name="improvement_name[]" type="text" required />
        </div>
        <div class="col-5">
            <input class="form-control" min="1" id="improvement_cost" name="improvement_cost[]" type="number" required/>
        </div>
        <div class="col-1 remove-input">
            <i class="fas fa-trash-alt fa-2x"></i>
        </div>
    </div>`;
  $(document).on('click','.add-new',function(e){
    e.preventDefault();
    $(this).parents('.default-input').find('.new-input-area').append(NewInputField);
  });
  
  // remove input fields dynamically
  $(document).on('click','.remove-input',function(e){
    e.preventDefault();
    $(this).parent('.new-input').remove();
  })
  
  // add input field on pressing Enter Key
  $(document).keydown(function (event) { 
    if (event.which == 13) { 
      event.preventDefault();
      $('.add-new').click(); 
             
    } 
  });
  
});