$(document).ready(function () { 
  
    // FETCHING DATA FROM JSON FILE 
    $.getJSON("./data/roi.json",  
            function (data) { 
        var row = ''; 

        // ITERATING THROUGH OBJECTS 
        $.each(data, function (key, value) { 

            //CONSTRUCTION OF ROWS HAVING 
            // DATA FROM JSON OBJECT 
            row += '<tr>'; 
            row += '<td>' +  
                value.year + '</td>'; 

            row += '<td>' +  
                value.month + '</td>'; 

            row += '<td>' +  
                value.interest + '</td>'; 

            row += '<td>' +  
                value.principal + '</td>'; 

            row += '<td>' +  
                value.remaining_principal + '</td>'; 

            row += '<td>' +  
                value.tax + '</td>'; 

            row += '<td>' +  
                value.insurance + '</td>'; 

            row += '<td>' +  
                value.writeoff + '</td>'; 

            row += '<td>' +  
                value.appreciated_price + '</td>'; 

            row += '<td>' +  
                value.net_worth_gain + '</td>'; 

            row += '<td>' +  
                value.appreciated_net_worth_gain + '</td>'; 

            row += '<td>' +  
                value.rent_equivalent + '</td>'; 

            row += '<td>' +  
                value.appreciated_rent_equivalent + '</td>'; 

            row += '</tr>'; 
        }); 
          
        //INSERTING ROWS INTO TABLE  
        $('#table').append(row); 
    }); 
}); 