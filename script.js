document.addEventListener("click",(e)=>{
    let x = e.clientX
    let y = e.clientY
    let w =document.body.clientWidth
    let h =document.body.clientHeight
    let x0 = w/2
    let y0 = h/2
    let dx = x-x0
    let dy = y0-y
    let theta = Math.atan(dy/dx)*180/Math.PI
    if(dx<0){
        theta+=180
    }
    console.log(dx,dy)
    console.log(theta)
    document.querySelector(".x").setAttribute("style",`rotate:${-theta}deg`)
})