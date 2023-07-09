function timer(){
    
    if(document.getElementById("time1").checked==true){
    
        document.getElementById("time_min").innerHTML="0"+(document.getElementById("time1_min").innerHTML-1).toString();
        document.getElementById("time_sec").innerHTML='59';
    }
    
    else if(document.getElementById("time2").checked==true){
        document.getElementById("time_min").innerHTML="0"+(document.getElementById("time2_min").innerHTML-1).toString();
        document.getElementById("time_sec").innerHTML='59';
    }
    else{
        document.getElementById("time_min").innerHTML="0"+(document.getElementById("time3_min").innerHTML-1).toString();
        document.getElementById("time_sec").innerHTML='59';
    }
    
        setInterval(() => {
    
            if(document.getElementById("time_sec").innerHTML=='00'){
                document.getElementById("time_sec").innerHTML="59";
            }
            else{
                if(parseInt(document.getElementById("time_sec").innerHTML)<=10){
                document.getElementById("time_sec").innerHTML="0"+(document.getElementById("time_sec").innerHTML-1).toString();
                }
                else{
                    document.getElementById("time_sec").innerHTML=document.getElementById("time_sec").innerHTML-1;
                }
            }
        }, 1000);
    
    
        setInterval(() => {
            if(document.getElementById("time_min").innerHTML=='00'){
                document.getElementById("time_sec").innerHTML='00';
                setTimeout(() => {
                    alert("you lost !!");
                }, 50);
            }
            else{
                if(parseInt(document.getElementById("time_min").innerHTML)<=10){
                document.getElementById("time_min").innerHTML="0"+(document.getElementById("time_min").innerHTML-1).toString();
                }
                else{
                    document.getElementById("time_min").innerHTML=document.getElementById("time_min").innerHTML-1;
                }
            }
        }, 60*1000);
    
    }
