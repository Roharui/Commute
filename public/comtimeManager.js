
const CM = {
    
    getComtime(){
        let comtime = sessionStorage.getItem("ComeTime")
        if(comtime == null) {
            return this.setCometime()
        }
    
        return comtime
    },

    setCometime(time) {
        let date;
    
        if(time == undefined) {
            date = new Date().format("hh:mm")
        } else {
            date = time
        }
    
        sessionStorage.setItem("ComeTime", date);
    
        return date
    },
}