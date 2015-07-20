$(document).ready(function(){
  //$("#list_button").click(function(){
     $.getJSON("jaxrs/questions",
    function(data,status){
           output="<div class='row'><div class='cell w-15 table first blue'><div class='title table headline'>id</div></div><div class='cell w-15 table first blue'><div class='title table headline'>topic</div></div><div class='cell w-15 table first blue'><div class='title table headline'>difficulty</div></div><div class='cell w-15 table first blue'><div class='title table headline'>question</div></div></div>";
        $.each( data, function( i, item ) {
           output+="<div class='row'><div class='cell w-15 table first blue'><div class='title table headline'>"+item.questionid+"</div></div><div class='cell w-15 table first blue'><div class='title table headline'>"+item.topic+"</div></div><div class='cell w-15 table first blue'><div class='title table headline'>"+item.difficulty+"</div></div><div class='cell w-15 table first blue'><div class='title table headline'>"+item.content+"</div></div></div>";
        });
            $("#table_body").html(output);
         });
});