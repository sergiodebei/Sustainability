$(document).ready(function(){
        try {

            //populate the select on loading of the page, and store the test in listOfReviews
            $.getJSON("jaxrs/test/", function(data,status){
                output="";
                $.each( data, function( i, item ) {
                	output += "<option value="+">"+item.testid+" - "
                    + item.topic+" - " +item.difficulty+"</option>";
                });
                $("#testToAddControl").append( "<option value='-1'>"+
                        "Select a Test"+"</option>");
                $("#testToAddControl").append(output);
            });

            //populate the select on loading of the page, and store the users in listOfUsers
            $.getJSON("jaxrs/users", function(data,status){
                output="";
                $.each( data, function( i, item ) {
                    output += "<option value="+item.userid +">"+item.username+" - "
                   + item.address+" - " + item.email+" - " + item.university+"</option>";
                });
                $("#userToAddControl").append( "<option value='-1'>"+
                        "Select a User"+"</option>");
                $("#userToAddControl").append(output);
            });

        	
        	$("#post_form").submit(function( event ) {
        
	          // Stop form from submitting normally
	          event.preventDefault();
	          // Get some values from elements on the page:
	          var $form = $( this ),
	          idTest_val = $form.find( "input[name='testToAddControl']" ).val(),
	          idUser_val = $form.find( "input[name='UserToAddControl']" ).val();
	          // Send the data using post
	          var posting = $.post( "jaxrs/tests",
	                       { testToAddControl: idTest_val, UserToAddControl:idUser_val } );
	          // Put the results in a div
	          posting.done(function( data ) {
	            $( "#result" ).empty().append( "Created new item with id: "+data );
	          });
	        });
        }
        catch(e){
   		 alert('An error has occurred: '+e.message);
       }
}); 