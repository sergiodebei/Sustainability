$(document).ready(function(){
        try {
        	$("#post_form").submit(function( event ) {
        
	          // Stop form from submitting normally
	          event.preventDefault();
	          // Get some values from elements on the page:
	          var $form = $( this ),
	          topic_val = $form.find( "input[name='topic']" ).val(),
	          difficulty_val = $form.find( "input[name='difficulty']" ).val(),
	          content_val = $form.find( "input[name='content']" ).val();
	          // Send the data using post
	          var posting = $.post( "jaxrs/questions",
	                       { topic: topic_val, difficulty: difficulty_val, content: content_val } );
	          // Put the results in a div
	          posting.done(function( data ) {
	            $( "#result" ).empty().append( data );
	          });
	        });
        }
        catch(e){
   		 alert('An error has occurred: '+e.message);
       }
}); 