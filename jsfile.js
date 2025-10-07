function keydata(themeswitch,prompt,containerHolder){
    window.addEventListener("keydown", (e) => {

        
        // Grab the whole Container
        let container = document.getElementById(containerHolder) 
        // Grab the prompt the remove
        let display = document.createElement("div")
        display.setAttribute('class','promptAreaDisplay')
        
        
        display.textContent = e.keyCode;
        container.append(display)
    

        

    
        console.log(e.keyCode)
        console.log(e.key)
        console.log(e.code)
        console.log(e.location)
        console.log(e)


        
        function handlePrompt(e){
            let promptDisplay = document.getElementById(prompt)
            if(promptDisplay){
                promptDisplay.remove()
            }

            window.removeEventListener("keydown",handlePrompt)

        }

        handlePrompt();
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

keydata('theme-switch','prompt','containerHolder')
