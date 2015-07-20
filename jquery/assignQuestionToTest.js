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

          //populate the select on loading of the page, and store the questions in listOfReviews
            $.getJSON("jaxrs/questions",
            	    function(data,status){
            	           output="<tr><td>id</td><td>topic</td><td>difficulty</td><td>question</td></tr>";
            	        $.each( data, function( i, item ) {
            	           output+="<tr><td>"+item.questionid+"</td><td>"+
            	                 item.topic+"</td><td>"+
            	                 item.difficulty+"</td><td>"+
            	                 item.content+"</td></tr>";
            	        });
            	            $("#table_body").html(output);
            	         });
        
        	$("#post_form").submit(function( event ) {
        
	          // Stop form from submitting normally
	          event.preventDefault();
	          // Get some values from elements on the page:
	          var $form = $( this ),
	          idTest_val = $form.find( "input[name='testToAddControl']" ).val(),
	          idQuestion_val = $form.find( "input[name='questionToAddControl']" ).val();
	          // Send the data using post
	          var posting = $.post( "jaxrs/questions",
	                       { testToAddControl: idTest_val, questionToAddControl:idQuestion_val } );
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