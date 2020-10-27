
const CM = {
    
    getComtime(){
        let comtime = sessionStorage.getItem("Comtime")
        let i = parseInt(comtime)
        return new Date(i).format("HH:mm")
    },

    setCometime(time) {
        if(time != undefined)
        {
            try{
                sessionStorage.setItem("Comtime", new Date("2020-01-01:" + time).getTime())
            } catch(e) {
                alert("Invaild date")
            }
            return;
        }
            
        sessionStorage.setItem("Comtime", new Date().getTime())
    },

    timeparse(time) {

    }

}