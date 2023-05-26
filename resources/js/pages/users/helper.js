import moment from "moment";

export function formatdate(value){
    if(value){
        return moment(String(value)).format('YYY-MM-DD');
    }
}
