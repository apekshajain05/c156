AFRAME.registerComponent('timer1',{
    init:function(){
        var duration=120;
        const timerEl=document.querySelector('#timer')
        this.startTimer(duration,timerEl)
    },
    startTimer:function(duration,timerEl){
        var min,sec;
        setInterval(()=>{
            if(duration>=0){
                min=parseInt(duration/60);
                sec=parseInt(duration%60);
                if(sec<10){
                    sec='0'+sec;
                }
                timerEl.setAttribute('text',{
                    value:'0'+min+':'+sec
                })
                duration-=1
            }

        },1000)
    }
})