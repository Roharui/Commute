
const CM = {
    
    getComtime(){
        let comtime = localStorage.getItem("Comtime")
        let i = parseInt(comtime)
        return new Date(i).format("HH:mm")
    },

    setCometime(time) {
        if(time != undefined)
        {
            try{
                localStorage.setItem("Comtime", new Date("2020-01-01:" + time).getTime())
            } catch(e) {
                alert("Invaild date")
            }
            return;
        }
            
        localStorage.setItem("Comtime", new Date().getTime())
    },

    timeparse(time) {

    },

    init() {
        let last_data = localStorage.getItem("date")
        if(last_data == null || parseInt(last_data) != new Date().getDate()) {
            localStorage.clear()
            localStorage.setItem("date", new Date().getDate())
            this.setCometime()
        }
    }

}