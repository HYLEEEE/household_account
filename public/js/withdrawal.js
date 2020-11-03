function goAddSubmit() {
    // add 정보 보내기
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

function goUpdateSubmit() {
    //update 정보 보내기 
    var formData = $("#updateModel_form").serialize();
    console.log(formData);
    var id = $("#update_id").val();
    console.log(id);
    $.ajax({

        type: 'POST',
        url: './withdrawal/update/'+id,
        data : formData, 
        error : function(error) {
            console.log(error)
            alert(error);
        },
        success : function(data) {
            console.log(data)
            alert("데이터 수정을 성공적으로 요청했습니다.")
            location.href = location.href;
        }
    }); // $.ajax */
}


function goDeleteSubmit(id) {
    //delete 정보 보내기 
    var con_test = confirm("입출금을 삭제하시겠습니까?");
    if(con_test == true){
        $.ajax({
            type: 'POST',
            url: './withdrawal/delete/'+id,
            error : function(error) {
                console.log(error)
                alert(error);
            },
            success : function(data) {
                console.log(data)
                alert("데이터 삭제를 성공적으로 요청했습니다.")
                location.href = location.href;
            }
        }); // $.ajax */
    }
    else if(con_test == false){
        alert("취소되었습니다.");
    }
}



$(function() {
    $("#addModelBtn").on('click', function () {
        // add 모달 띄울 때
        getStandardsList('#standard_id');
        getUsersList('#user_id');
        getBankAccountList('#dealer')
        getBankAccountList('#bank_account_id');
    });


    $("#dealer_select_type").on('change', function () {
        // 구매처 select이 변할 때
        var value = $("#dealer_select_type");
        console.log(value.val())
        if(value.val() == 1){
            $("#dealer").remove()
            $("#dealer_select_type").parent().append(`<select class="form-control" id="dealer" name="dealer" placeholder="구매처"></select>`)
            getBankAccountList('#dealer')
        } else {
            $("#dealer").remove()
            $("#dealer_select_type").parent().append(`<input type="input" class="form-control" id="dealer" name="dealer" placeholder="구매처">`)
        }
    });

    $("#update_dealer_select_type").on('change', function () {
        // 구매처 select이 변할 때
        var value = $("#update_dealer_select_type");
        console.log(value.val())
        if(value.val() == 1){
            $("#update_dealer").remove()
            $("#update_dealer_select_type").parent().append(`<select class="form-control" id="update_dealer" name="dealer" placeholder="구매처"></select>`)
            getBankAccountList('#update_dealer')
        } else {
            $("#update_dealer").remove()
            $("#update_dealer_select_type").parent().append(`<input type="input" class="form-control" id="update_dealer" name="dealer" placeholder="구매처">`)
        }
    });

})

function getStandardsList(html_id_str){
    // 기준값리스트 가져와서 뿌리기
    $.ajax({
        type: 'POST',
        url: '/standard',
        error: function(error) {
            console.log(error)
        },
        success: function(result) {
            $(html_id_str).empty();
            
            for(var count = 0; count < result.length; count++){                
                var option = $("<option value="+result[count]["id"]+" >"+result[count]["name"]+"</option>");
                $(html_id_str).append(option);
            }
        }
    });
}


function getUsersList(html_id_str){
    // 유저리스트 가져와서 뿌리기
    $.ajax({
        type: 'POST',
        url: '/user',
        error: function(error) {
            console.log(error)
        },
        success: function(result) {
            $(html_id_str).empty();
            
            for(var count = 0; count < result.length; count++){                
                var option = $("<option value="+result[count]["id"]+" >"+result[count]["name"]+" : "+result[count]["username"]+"</option>");
                $(html_id_str).append(option);
            }
        }
    });
}


function getBankAccountList(html_id_str){
    // 계좌값 리스트 가져와서 뿌리기
    console.log(html_id_str)
    $.ajax({
        type: 'POST',
        url: '/bank_account',
        error: function(error) {
            console.log(error)
        },
        success: function(result) {
            $(html_id_str).empty();
            console.log(result);
            
            for(var count = 0; count < result.length; count++){                
                var option = $("<option value="+result[count]["id"]+" >"+result[count]["name"]+" : "+result[count]["account_number"]+"</option>");
                $(html_id_str).append(option);
            }
        }
    });
}







function getUpdateStandardsList(id){
    
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
                if(result[count]["id"] == id){
                    option = $("<option value="+result[count]["id"]+" selected>"+result[count]["name"]+"</option>");
                }
                $('#update_standard_id').append(option);
            }
        }
    });
}


function getUpdateUsersList(id){
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
                if(result[count]["id"] == id){
                    option = $("<option value="+result[count]["id"]+" selected>"+result[count]["name"]+" : "+result[count]["username"]+"</option>");
                }
                $('#update_user_id').append(option);
            }
        }
    });
}


function getUpdateBankAccountList(id){
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
                if(result[count]["id"] == id){
                    option = $("<option value="+result[count]["id"]+" selected>"+result[count]["name"]+" : "+result[count]["account_number"]+"</option>");
                }
                $('#update_bank_account_id').append(option);
            }
        }
    });
}




function updateWithdrawal(id){
    // 수정 모달을 띄워질 때 값 가져와서 채우기
    getWithdrawal(id)
    console.log(id);
    $('#update_id').val(id);

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
            // 가져온 값을 modal에 넣기
//            $('#update_bank_account_id').empty();
            var data = result.results[0];


            getUpdateStandardsList(data.standard_id);
            getUpdateUsersList(data.user_id);
            getUpdateBankAccountList(data.bank_account_id);
        

            $('#update_contents').val(data.contents);
            $('#update_dealer').val(data.dealer);

            $('#update_price').val(data.price);


        }
    });
}
