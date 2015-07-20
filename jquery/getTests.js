$(document).ready(function(){
  //$("#list_button").click(function(){
     $.getJSON("jaxrs/test",
    function(data,status){
           output="<div class='row'><div class='cell w-15 table first blue'><div class='title table headline'>testid</div></div><div class='cell w-15 table first blue'><div class='title table headline'>topic</div></div><div class='cell w-15 table first blue'><div class='title table headline'>difficulty</div></div><div class='cell w-15 table first blue'><div class='title table headline'>result</div></div></div>";
        $.each( data, function( i, item ) {
           output+="<div class='row'><div class='cell w-15 table first blue'><div class='title table headline'>"+item.testid+"</div></div><div class='cell w-15 table first blue'><div class='title table headline'>"+item.topic+"</div></div><div class='cell w-15 table first blue'><div class='title table headline'>"+item.difficulty+"</div></div><div class='cell w-15 table first blue'><div class='title table headline'>"+item.result+"</div></div></div>";
        });
            $("#table_body").html(output);
         });
});
