setInterval( () =>{
   date = new Date();
    htime =  date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();
    
    // rotation
    hrotation = 30*htime + mtime/2 ;
    mrotation = 6*mtime ;
    srotation = 6*stime ; 

    // set css 
    hour.style.transform = `rotate(${hrotation}deg)`
    min.style.transform = `rotate(${mrotation}deg)`
    sec.style.transform = `rotate(${srotation}deg)`
    
} , 1000)