setTimeout( function () {
    console.log("펑")
},3000)
3
// VM7418:2 펑


setInterval(function(){
    console.log("1초가 지났다")
},1000)
324
// 6VM211:2 1초가 지났다


// let time = 10
// setInterval( function() {
//     if(time>=0){
//         console.log(time)
//         time=time-1
//     }
// },1000)


let time = 180
setInterval( function(){
    if(time>=0) {
        let min = Math.floor( time/60 )
        let sec = String(time % 60).padStart(2, "0")
        console.log(min + ":" + sec)
        time = time-1
    }
},1000)