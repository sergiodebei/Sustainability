$(document).ready(function(){
    //memorize the data returned from the GET
    listOfTests=null;
 
    //hide the fields on loading of the page
    $("#displayResultToPut").hide();
 
    //populate the select on loading of the page,
    //and store the results in listOfTests
    $.getJSON("jaxrs/test",
              function(data,status){
    	listOfTests=data;
        output="";
        $.each( data, function( i, item ) {
            output += "<option value="+item.testid +">"+item.topic+" - "
            + item.difficulty+" - " + item.result +"</option>";
        });
        $("#resultToPutControl").append( "<option value='-1'>"
                +"Select a Test"+"</option>");
        $("#resultToPutControl").append(output);
    });
 
    //populate fields and show them on selecting a test
    $("#resultToPutControl").change(function(data){
        //show the fields on selecting a test
        $("#displayResultToPut").show();
        //loop over the results of the GET and find
        //the selected test to have all its details
        $.each( listOfTests, function( i, item ) {
            if(item.testid==$("#resultToPutControl").val()){
                $("#testIdControl").val(item.testid);
                $("#testTopicControl").val(item.topic);
                $("#testDifficultyControl").val(item.difficulty);
                $("#testResultControl").val(item.result);
                return false;//break out of the each loop
            }
        });
    });
    $("#putResultButton").click(function(data){
     $.ajax({
              url: 'jaxrs/test',
              type: 'PUT',
              contentType: 'application/json',
              data: "{\"testid\":\""+$("#testIdControl").val()+
              "\",\"topic\":\""+$("#testTopicControl").val()+
              "\",\"difficulty\":\""+$("#testDifficultyControl").val()+
              "\",\"result\":\""+$("#testResultControl").val()+
              "\",\"testid\":"+$("#resultToPutControl").val()+"}",
              success: function(data, textStatus, jqXHR) {
                  alert ("Stored result for test with id: "+
                    $("#userToPutControl").val()+
                     " reported status: "+textStatus);
              }
            });
    });
});