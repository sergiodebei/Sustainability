$(document).ready(function(){
        try {
        	$("#post_form").submit(function( event ) {
        
	          // Stop form from submitting normally
	          event.preventDefault();
	          // Get some values from elements on the page:
	          var $form = $( this ),
	          userid_val = $form.find( "input[name='userid']" ).val(),
	          topic_val = $form.find( "input[name='topic']" ).val(),
	          difficulty_val = $form.find( "input[name='difficulty']" ).val();
	          // Send the data using post
	          var posting = $.post( "jaxrs/test",
	                       { userid: userid_val, topic: topic_val, difficulty: difficulty_val } );
	          // Put the results in a div
	          posting.done(function( data ) {
	            $( "#result" ).empty().append( "Created new Test with id: "+data );
	          });
	        });
        }
        catch(e){
   		 alert('An error has occurred: '+e.message);
       }
}); 