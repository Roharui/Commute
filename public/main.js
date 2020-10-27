const changer = {
    "date" : function(){
        let date = new Date();
        return date.format("MM월 dd일")
    },

    "checkin" : CM.getComtime,

    "checkout" : function(){
        let date = new Date();
        return date.format("hh:mm")
    },

    "day_work" : function(){

    },

    "total_work" : function(){
        
    },
}

function log(){
    let text = $("#logger").val()
    
    Object.keys(changer).forEach(x => {
        text = text.replace("{" + x + "}", changer[x]())
    })

    $("#result").val(text)
}

function save(){
    let text = prompt("이 템플릿의 이름을 적어주세요.")
    console.log(text)
}

function update(){
    let comtime = CM.getComtime()

    $("#comtime_viewer").val(comtime)
    log()
}

$(document).ready(function(){
    CM.setCometime()
    update()
})