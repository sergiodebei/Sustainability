$(document).ready(function(){
  //$('#list_button').click(function(){
    $.getJSON('jaxrs/users',
    function(data,status){
           output="<div class='row'><div class='cell w-15 table first blue'><div class='title table headline'>username</div></div><div class='cell w-15 table first blue'><div class='title table headline'>email</div></div><div class='cell w-15 table first blue'><div class='title table headline'>address</div></div><div class='cell w-15 table first blue'><div class='title table headline'>university</div></div></div>";
        $.each( data, function( i, item ) {
           output+="<div class='row'><div class='cell w-15 table first blue'><div class='title table headline'>"+item.username+"</div></div><div class='cell w-15 table first blue'><div class='title table headline'>"+item.address+"</div></div><div class='cell w-15 table first blue'><div class='title table headline'>"+item.email+"</div></div><div class='cell w-15 table first blue'><div class='title table headline'>"+item.university+"</div></div></div>";
        });
            $("#table_body").html(output);
         });
});
