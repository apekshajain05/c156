AFRAME.registerComponent('score2',{
    init:function(){
        this.isCollided(elementId)
    },
    updateTargets:function(){
        const element=document.querySelector('#targets-remaining');
        var count=element.getAttribute('text',{
            value:currentTargets
        })
        let currentTargets=parseInt(count)
        currentTargets-=1
    },
    updateScore:function(){
        const element=document.querySelector('#score1');
        var count=element.getAttribute('text').value
        let currentScore=parseInt(count)
        currentScore+=50
        element.setAttribute('text',{
            value:currentScore
        })
    },
    isCollided:function(elementId){
        const element=document.querySelector(elementId)
        element.addEventListener('collide',(e)=>{
            if(elementId.includes('#ring')){
                element.setAttribute('visible',false)
                this.updateScore()
                this.updateTargets()
            }
        })
    }
})