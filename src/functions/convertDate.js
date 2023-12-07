export const convertDate = (date)=>{
    let newDate = new Date (date);
    return newDate.getDate() +'/'+ (newDate.getMonth()+1);
}