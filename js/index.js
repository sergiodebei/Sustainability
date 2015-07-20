var resultUsernameTendina = function() {
	$.getJSON("jaxrs/users", function(data,status){
        output="";
        $.each( data, function( i, item ) {
            output += "<option value="+item.id +">"+item.username+"</option>";
        });
        $("#usernameSelect").append( "<option value='-1'>"+
                "Select a Username"+"</option>");
        $("#usernameSelect").append(output);
    });
};

var resultTestIdTendina = function() {
	$.getJSON("jaxrs/test", function(data,status){
        output="";
        $.each( data, function( i, item ) {
            output += "<option value="+item.id +">"+item.username+"</option>";
        });
        $("#testIdSelect").append( "<option value='-1'>"+
                "Select a Test ID"+"</option>");
        $("#testIdSelect").append(output);
    });
};


var getAllUser = function() {
    var userTemplate = _.template("<% _.each(users, function(user){ %><div class='row userrow' data-id='<%= user.id%>' ><div class='cell w-15'><div class='table'><%= user.username%></div></div><div class='cell w-15'><div class='table'><%= user.email%></div></div><div class='cell w-15'><div class='table'><%= user.address%></div></div><div class='cell w-15'><div class='table'><%= user.university%></div></div><div class='cell'><a class='icon entypo-cancel' href='#' data-cancel data-id='<% = user.id %>'></a></div></div><% })%>");
	var getting = $.getJSON("jaxrs/users");
	getting.done(function(data) {
        $(".userrow").remove();
        $("#usertable").append(userTemplate({ users: data}));
 });
};

var addUser = function() {
    try {
        $("#tab-form-user").submit(function(event) {

            // Stop form from submitting normally
            event.preventDefault();
            // Get some values from elements on the page:            
	          var $form = $( this ),
	          	username_val = $form.find( "input[name='username']" ).val(),
		          email_val = $form.find( "input[name='email']" ).val(),
		          address_val = $form.find( "input[name='address']" ).val(),
		          university_val = $form.find( "input[name='university']" ).val();
            // Send the data using post
	          var posting = $.post( "jaxrs/users",
                      { username: username_val, email:email_val, address: address_val, university: university_val } );
            // Put the results in a div
            posting.done(function(data) {
            	$('#tab-form-user')[0].reset();
            	$('label[for="t-2"]').trigger('click');
            });
        });
    }
    catch (e) {
        alert('An error has occurred: ' + e.message);
    }
};

var getAllTest = function() {
    var testTemplate = _.template("<% _.each(tests, function(test){ %><div class='row testrow' data-id='<%= test.id%>' ><div class='cell w-15'><div class='table'><%= test.id%></div></div><div class='cell'><a class='icon entypo-cancel' href='#' data-cancel data-id='<% = test.id %>'></a></div></div><% })%>");
	var getting = $.get( "jaxrs/tests" );
	getting.done(function(data) {
	var result = JSON.parse(data);
        $(".testrow").remove();
        $("#testtable").append(testTemplate({ tests: getting}));
});
};

var addTest = function() {
    try {
        $("#tab-form-test").submit(function(event) {

            // Stop form from submitting normally
            event.preventDefault();
            // Get some values from elements on the page:            
	          var $form = $( this ),
	          	topic_val = $form.find( "input[name='topic']" ).val(),
		          difficulty_val = $form.find( "input[name='difficulty']" ).val(),
		          username_val = $form.find( "input[name='username']" ).val();
            // Send the data using post
	          var posting = $.post( "jaxrs/test",
                      { topic: topic_val, difficulty:difficulty_val, username: username_val} );
            // Put the results in a div
            posting.done(function(data) {
            	$('#tab-form-test')[0].reset();
            	$('label[for="t-4"]').trigger('click');
            });
        });
    }
    catch (e) {
        alert('An error has occurred: ' + e.message);
    }
};

var getAllQuestion = function() {
    var questionTemplate = _.template("<% _.each(questions, function(question){ %><div class='row questionrow' data-id='<%= question.id%>' ><div class='cell w-15'><div class='table'><%= question.content%></div></div><div class='cell w-15'><div class='table'><%= question.topic%></div></div><div class='cell w-15'><div class='table'><%= question.difficulty%></div></div><div class='cell'><a class='icon entypo-cancel' href='#' data-cancel data-id='<% = question.id %>'></a></div></div><% })%>");
	var getting = $.get( "jaxrs/questions" );
	getting.done(function(data) {
	var result = JSON.parse(data);
        $(".questionrow").remove();
        $("#questiontable").append(questionTemplate({ questions: getting}));
});
};

var addQuestion = function() {
    try {
        $("#tab-form-question").submit(function(event) {
            // Stop form from submitting normally
            event.preventDefault();
            // Get some values from elements on the page:            
	          var $form = $( this ),
	          	topic_val = $form.find( "input[name='topic']" ).val(),
		          difficulty_val = $form.find( "input[name='difficulty']" ).val(),
		          content_val = $form.find( "input[name='content']" ).val();
            // Send the data using post
	          var posting = $.post( "jaxrs/questions",
                      { topic: topic_val, difficulty:difficulty_val, content: content_val} );
            // Put the results in a div
            posting.done(function(data) {
            	$('#tab-form-question')[0].reset();
            	$('label[for="t-6"]').trigger('click');
            });
        });
    }
    catch (e) {
        alert('An error has occurred: ' + e.message);
    }
};

var getAllResult = function() {
    var resultTemplate = _.template("<% _.each(results, function(test){ %><div class='row resultrow' data-id='<%= result.id%>' ><div class='cell w-15'><div class='table'><%= result.username%></div></div><div class='cell w-15'><div class='table'><%= result.testId%></div></div><div class='cell w-15'><div class='table'><%= result.points%></div></div><div class='cell'><a class='icon entypo-cancel' href='#' data-cancel data-id='<% = result.id %>'></a><a class='icon entypo-pencil' href='#' data-edit data-id='<% = result.id %>'></a></div></div><% })%>");
	var getting = $.get( "jaxrs/results" );
	getting.done(function(data) {
	var result = JSON.parse(data);
        $(".resultrow").remove();
        $("#resulttable").append(resultTemplate({ results: getting}));
});
};

var addResult = function() {
    try {
        $("#tab-form-result").submit(function(event) {

            // Stop form from submitting normally
            event.preventDefault();
            // Get some values from elements on the page:            
	          var $form = $( this ),
	          username_val = $form.find( "input[name='username']" ).val(),
	          testId_val = $form.find( "input[name='testId']" ).val(),
	          points_val = $form.find( "input[name='points']" ).val();
            // Send the data using post
	          var posting = $.post( "jaxrs/results",
                      { username: username_val, testId:testId_val, points: points_val} );
            // Put the results in a div
            posting.done(function(data) {
            	$('#tab-form-result')[0].reset();
            	$('label[for="t-8"]').trigger('click');
            });
        });
    }
    catch (e) {
        alert('An error has occurred: ' + e.message);
    }
};

var deleteUser = function() {	
};





var deleteTest = function() {	
};




var deleteQuestion= function() {	
};





var deleteResult = function() {	
};

var editResult = function() {
	
};

$(document).ready(function(){
    getAllUser();
    addUser();
    deleteUser();
    getAllTest();
    addTest();
    deleteTest();
    getAllQuestion();
    addQuestion();
    deleteQuestion();
    getAllResult();
    addResult();
    deleteResult();
    editResult();
    resultUsernameTendina();
    resultTestIdTendina();
}); 