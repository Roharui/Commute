
const CM = {
    
    getComtime(){
        let comtime = localStorage.getItem("Cometime")
        let i = parseInt(comtime)
        return new Date(i).format("HH:mm")
    },

    setCometime(time) {
        if(time != undefined)
        {
            let date = new Date("2020-01-01:" + time)

            if(date == "Invalid Date"){ alert("Invalid Date"); return;}

            localStorage.setItem("Cometime", date.getTime())
        } else {
            localStorage.setItem("Cometime", new Date().getTime())
        }
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