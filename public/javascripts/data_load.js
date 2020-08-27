$(document).ready(function () { 
  
    // FETCHING DATA FROM JSON FILE 
    $.getJSON("./data/gfgdetails.json",  
            function (data) { 
        var student = ''; 

        // ITERATING THROUGH OBJECTS 
        $.each(data, function (key, value) { 

            //CONSTRUCTION OF ROWS HAVING 
            // DATA FROM JSON OBJECT 
            student += '<tr>'; 
            student += '<td>' +  
                value.GFGUserName + '</td>'; 

            student += '<td>' +  
                value.NoOfProblems + '</td>'; 

            student += '<td>' +  
                value.TotalScore + '</td>'; 

            student += '<td>' +  
                value.Articles + '</td>'; 

            student += '</tr>'; 
        }); 
          
        //INSERTING ROWS INTO TABLE  
        $('#table').append(student); 
    }); 
}); 