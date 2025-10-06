function keydata(){
    window.addEventListener("keydown", (e) => {
        console.log(e)
        console.log(e.keyCode)
        console.log(e.key)
        console.log(e.code)
        console.log(e.location)
    })
}

keydata()