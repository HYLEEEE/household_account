function goAddSubmit() {
    var formData = $("#addModel_form").serialize();    
    $.ajax({

        type: 'POST',
        url: './withdrawal/add',
        data : formData, 
        error : function(error) {
            console.log(error)
            alert(error);
        },
        success : function(data) {
            console.log(data)
            alert("데이터 추가를 성공적으로 요청했습니다.")
            location.href = location.href;
        }
    }); // $.ajax */
}

$(function() {
    $("#addModelBtn").click(function () {
        getStandardsList();
        getUsersList();
        getBankAccountList();
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
            $('#user_id').empty();
            
            for(var count = 0; count < result.length; count++){                
                var option = $("<option value="+result[count]["id"]+" >"+result[count]["name"]+" : "+result[count]["username"]+"</option>");
                $('#user_id').append(option);
            }
        }
    });
}


function getBankAccountList(){
    $.ajax({
        type: 'POST',
        url: '/bank_account',
        error: function(error) {
            console.log(error)
        },
        success: function(result) {
            $('#bank_account_id').empty();
            
            for(var count = 0; count < result.length; count++){                
                var option = $("<option value="+result[count]["id"]+" >"+result[count]["name"]+" : "+result[count]["account_number"]+"</option>");
                $('#bank_account_id').append(option);
            }
        }
    });
}


function updateWithdrawal(id){
    
}

function deleteWithdrawal(id){
    
}