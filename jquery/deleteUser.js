$(document).ready(function(){
    //populate the select on loading of the page, and store the results in listOfUsers
    $.getJSON("jaxrs/users", function(data,status){
        output="";
        $.each( data, function( i, item ) {
            output += "<option value="+item.userid +">"+item.username+" - "
           + item.address+" - " + item.email+" - " + item.university+"</option>";
        });
        $("#userToDeleteControl").append( "<option value='-1'>"+
                "Select a User"+"</option>");
        $("#userToDeleteControl").append(output);
    });
 
    $("#deleteUserButton").click(function(data){
        $.ajax({
              url: 'jaxrs/users/'+151,
              type: 'DELETE',
              complete: function(jqXHR, textStatus ) {
                  alert ("Deleting user with id: "+151+
                      " reported status: "+textStatus);
                  location.reload(true);

              }
            });
    });
});