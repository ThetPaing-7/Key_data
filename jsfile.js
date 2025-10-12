function keydata(themeswitch,prompt,containerHolder,hexa,Binary,eventKey,keyLocation,keycode,keycodeNumber,keyType){
    window.addEventListener("keydown", (e) => {

        // Variable needed
        let numbericKey = e.keyCode
        let key = e.key
        let code = e.code
        let location = e.location
        let keyTypeVale = classifyKey();
        let hexaText = "A9"
        let BinaryText = "101010"

        let headerLists = ["Hexa","Binary","Key Name","Location","Code","Key Number","Key Type"]
        let notesLists = [
            "Hexadecimal value of a key",
            "Binary value of a key",
            "string representing the printable character or key identifier",
            "numeric code indicating the location of the key on the keyboard",
            "a string representing the physical key on the keyboard layout",
            "the numeric code representing the key pressed",
            "The type of key reprsenting the key pressed"

        ]
        let content = [hexaText,BinaryText,key,location,code,numbericKey,keyTypeVale]
        let Element = [hexa,Binary,eventKey,keyLocation,keycode,keycodeNumber,keyType]

        // Grab the whole Container
        let container = document.getElementById(containerHolder) 
        // Grab the prompt the remove
        let display


        clearMainContent()
        updateMainArea()
        
        clearContect()
        updateCard()

    // Update prompt Display Area
    function updateMainArea(){
        
        let head = document.createElement("h4")
        head.textContent = "Key Code"
        
        let display = document.createElement("div")
        display.setAttribute('class','promptAreaDisplay')

        display.textContent = e.keyCode;
        display.append(head)
        container.append(display)
        
    }

    function clearMainContent(){
        let elements = document.getElementsByClassName('promptAreaDisplay')
        for(let i = elements.length - 1; i >= 0; i--){
            elements[i].remove()
        }
    }

    

    // function to clear the content before update
    function clearContect(){
        for(let i = 0; i < Element.length; i++){
            let holder = document.getElementById(Element[i])
            holder.textContent = ""
   
        }
    }


    // Function to update all grid with data
    function updateCard(){
        
        // Loop all element and append the text
        for(let i = 0; i < Element.length; i++){
            let holder = document.getElementById(Element[i])

            let header = document.createElement("div")
            header.textContent = headerLists[i]
            header.setAttribute("class","header")
            holder.append(header)

            let data = document.createElement('div')
            data.setAttribute("class","data")
            data.textContent = content[i]
            holder.append(data)

            

            let note = document.createElement('div')
            note.textContent = notesLists[i]
            note.setAttribute('class',"note")
            holder.append(note)

        }

    }

    function classifyKey(e){
        // const key = e.key;
        // const code = e.code;

        // Check function key(F1 - F2)
        if(/^F\d+$/.test(key)){
            return 'FuntionKey'
        }

        // Check Modifier Key
        if(['Shift','Control','Alt','Meta','CapsLock','NumLock','ScrollLock','ContextMenu'].includes(key)){
            return 'ModifierKey'
        }

        if(/^Arrow/.test(key) || ['Home','End','PageUp','PageDown','Insert','Delete'].includes(key)){
            return 'NavigationKey'
        }

        if(key === ' '){
            return 'Spacebar'
        }

        // Letter keys(A-Z,case-insensitive)
        if(key.length === 1 && /[0-9]/.test(key)){
            if(/^Digits\d$/.test(code)){
                return 'NumberKey'
            }
        }

        if(key.length === 1 && /[a-z]/i.test(key)){
            if(/^Key[A-Z]$/.test(code)){
                return 'LetterKey'
            }
        }

        if(/^Numpad/.test(code)){
            if(/[0-9]/.test(key)){
                return 'NumpadDigitKey'
            }
        }

        if(['+','-','*','/,','Enter','.'].includes(key)){
            return 'OperarorKey'
        }

        if(key.length === 1){
            return 'SymbolKey'
        }

        return 'OtherKey'

    }
    
    console.log(e)
    // function to handle prompt and remove after click 
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

keydata('theme-switch','prompt','containerHolder','hexa','Binary','eventKey','keyLocation','keycode','keycodeNumber','keyType')
