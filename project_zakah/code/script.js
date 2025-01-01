function zakah(){
    let amount=document.getElementById("num").value;
    let x;
    if(amount==0){
        x="Enter a number please";
    }
    else{
        x=0.025 *amount;
    }
    document.getElementById("result").innerHTML=x;
}