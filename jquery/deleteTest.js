$(document).ready(function(){
	try{
    //populate the select on loading of the page, and store the results in listOfReviews
    $.getJSON("jaxrs/test/", function(data,status){
        output="";
        $.each( data, function( i, item ) {
        	output += "<option value="+">"+item.testid+" - "
            + item.topic+" - " +item.difficulty+"</option>";
        });
        $("#testToDeleteControl").append( "<option value='-1'>"+
                "Select a Test"+"</option>");
        $("#testToDeleteControl").append(output);
    });
 
    $("#deleteTestButton").click(function(data){
 
        $.ajax({
              url: 'jaxrs/test'+$("#testToDeleteControl").val(),
              type: 'DELETE',
              complete: function(jqXHR, textStatus ) {
                  alert ("Deleting test with id: "+
                     $("#testToDeleteControl").val()+
                      " reported status: "+textStatus);
                  location.reload(true);

              }
            });
    	});
	}
    catch(e){
		 alert('An error has occurred: '+e.message);
		} 
});