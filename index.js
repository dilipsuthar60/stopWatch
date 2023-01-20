let displayTime=document.getElementById("current_time");

let [second,minitus,hour]=[0,0,0];
let time=null;
let setime=()=>{
    console.log("yes");
    second++;
    if(second==60)
    {
        second=0;
        minitus++;
        if(minitus==60)
        {
            minitus=0;
            hour++;
        }
    }
    let s=second<10?"0"+second:second;
    let m=minitus<10?"0"+minitus:minitus;
    let h=hour<10?"0"+hour:hour;
    displayTime.innerHTML=h+":"+m+":"+s;
}

let runstopwatch=()=>{
    time=setInterval(setime,1000);
}

let stop=()=>
{
    clearInterval(time);   
}
let reset=()=>{
    clearInterval(time);
    [second,minitus,hour]=[0,0,0];
    displayTime.innerHTML=`00:00:00`;
}