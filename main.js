document.write("55.to check whether a given string contains an equal number of p's and t's"+"<br>");
function test55(str){
    var x=str.replace(/[^p]/g,"").length;
    var y=str.replace(/[^t]/g,"").length;
    if(x==y){
        return true;
    }
    return false;
}
document.write("The string :pattp , Ans :"+test55("pattp")+"<br><br>");