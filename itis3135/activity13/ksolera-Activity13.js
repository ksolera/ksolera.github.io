$(document).ready(function(){ 
    $.ajax({
        type: "get",
        url: "team.json",
        success: function(data) {
            $.each(data, function() { 
                $.each(this, function(key, value) { 
                    $("#team").append( 
                        "Name: " + value.name + "<br>" +  
                        "Title: " + value.title + "<br>" +  
                        "Bio: " + value.bio + "<br><br>" 
                    ); 
                }); 
            });  
        }
    })
     
});