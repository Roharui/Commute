
function writeLog(e){
    let text = $("#logger").val()
    $("#logger").val(text + e.innerHTML)
    log()
}