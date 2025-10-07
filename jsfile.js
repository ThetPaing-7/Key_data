function keydata(themeswitch,prompt){
    window.addEventListener("keydown", (e) => {

        // 
        console.log(e.keyCode)
        console.log(e.key)
        console.log(e.code)
        console.log(e.location)
        console.log(e)
    })

    
    // Light mode and darkmode Changes
        let darmode = localStorage.getItem('darkmode')
        const themeSwitch = document.getElementById(themeswitch)

        const enableDarkmode = () =>{
            document.body.classList.add('darkmode')
            localStorage.setItem("darkmode","active")
        }

        const disableDarkmode = () =>{
            document.body.classList.remove("darkmode")
            localStorage.setItem("darkmode",null)
        }

        if(darmode === "active") enableDarkmode()

        themeSwitch.addEventListener("click",()=>{
            darmode = localStorage.getItem('darkmode')
            darmode != "active" ? enableDarkmode() : disableDarkmode()
        })

        
}

keydata('theme-switch')
