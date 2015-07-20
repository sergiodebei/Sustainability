$(document).ready(function(){
        try {
        	$("#post_form").submit(function( event ) {
        
	          // Stop form from submitting normally
	          event.preventDefault();
	          // Get some values from elements on the page:
	          var $form = $( this ),
	          name_val = $form.find( "input[name='username']" ).val(),
	          email_val = $form.find( "input[name='email']" ).val(),
	          address_val = $form.find( "input[name='address']" ).val(),
	          university_val = $form.find( "input[name='university']" ).val();
	          // Send the data using post
	          var posting = $.post( "jaxrs/users",
	                       { username: name_val, email:email_val, address: address_val, university: university_val } );
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