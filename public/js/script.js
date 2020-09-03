function goAddSubmit() {
    document.addModel.submit();
}

$(function() {
    $("#addModelBtn").click(function () {
        getStandardsList();
        getUsersList();
    });
})

function getStandardsList(){
    $.ajax({
        type: 'POST',
        url: '/standard',
        error: function(error) {
            console.log(error)
        },
        success: function(result) {
            console.log(result)
            $('#standard_id').empty();
            
            for(var count = 0; count < result.length; count++){                
                var option = $("<option value="+result[count]["id"]+" >"+result[count]["name"]+"</option>");
                $('#standard_id').append(option);
            }
        }
    });
}


function getUsersList(){
    $.ajax({
        type: 'POST',
        url: '/user',
        error: function(error) {
            console.log(error)
        },
        success: function(result) {
            console.log(result)
            $('#user_id').empty();
            
            for(var count = 0; count < result.length; count++){                
                var option = $("<option value="+result[count]["id"]+" >"+result[count]["name"]+" : "+result[count]["username"]+"</option>");
                $('#user_id').append(option);
            }
        }
    });
}