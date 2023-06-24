function Update(){
        const currentYear=new Date().getFullYear();
        const currentDate=new Date();
        /*to calculate newyear we want to pass constructor values */
        const newYear=new Date(`Jan 01 ${currentYear+1} 00:00:00`)
        const remainder=newYear-currentDate;
        /*program concept of milliseconds to all */
        const day=Math.floor(remainder/1000/60/60/24);
        const hour=Math.floor(((remainder/1000/60/60)%24));
        const minute=Math.floor(((remainder/1000/60)%60));
        const second=Math.floor((remainder/1000)%60);

        const days=document.querySelector("#days");
        const hours=document.querySelector("#hours");
        const minutes=document.querySelector("#minutes");
        const seconds=document.querySelector("#seconds");
        days.innerHTML=day<10?"0"+day:day;
        hours.innerHTML=day<10?"0"+hour:hour;
        minutes.innerHTML=day<10?"0"+minute:minute;
        seconds.innerHTML=day<10?"0"+second:second;
    }
    setInterval(Update,1000);
