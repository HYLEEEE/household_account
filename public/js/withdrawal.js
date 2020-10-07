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


function getUpdateStandardsList(){
    $.ajax({
        type: 'POST',
        url: '/standard',
        error: function(error) {
            console.log(error)
        },
        success: function(result) {
            $('#update_standard_id').empty();
            
            for(var count = 0; count < result.length; count++){                
                var option = $("<option value="+result[count]["id"]+" >"+result[count]["name"]+"</option>");
                $('#update_standard_id').append(option);
            }
        }
    });
}


function getUpdateUsersList(){
    $.ajax({
        type: 'POST',
        url: '/user',
        error: function(error) {
            console.log(error)
        },
        success: function(result) {
            $('#update_user_id').empty();
            
            for(var count = 0; count < result.length; count++){                
                var option = $("<option value="+result[count]["id"]+" >"+result[count]["name"]+" : "+result[count]["username"]+"</option>");
                $('#update_user_id').append(option);
            }
        }
    });
}


function getUpdateBankAccountList(){
    $.ajax({
        type: 'POST',
        url: '/bank_account',
        error: function(error) {
            console.log(error)
        },
        success: function(result) {
            $('#update_bank_account_id').empty();
            
            for(var count = 0; count < result.length; count++){                
                var option = $("<option value="+result[count]["id"]+" >"+result[count]["name"]+" : "+result[count]["account_number"]+"</option>");
                $('#update_bank_account_id').append(option);
            }
        }
    });
}




function updateWithdrawal(id){
    getWithdrawal(id)
    console.log(id);
    $('#update_id').val(id);

    getUpdateStandardsList();
    getUpdateUsersList();
    getUpdateBankAccountList();
}

function getWithdrawal(id){

    $.ajax({
        type: 'POST',
        url: '/withdrawal/'+id,
        error: function(error) {
            console.log(error)
        },
        success: function(result) {
            console.log(result);
/*
            $('#update_bank_account_id').empty();
            
            for(var count = 0; count < result.length; count++){                
                var option = $("<option value="+result[count]["id"]+" >"+result[count]["name"]+" : "+result[count]["account_number"]+"</option>");
                $('#update_bank_account_id').append(option);
            }
            */
        }
    });
}

function deleteWithdrawal(id){
    
}