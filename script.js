
        let botMsgCnt = document.getElementById("botMsgCnt");
        let botImg = document.getElementById("botImg");
        let cross = document.getElementById("cross")
        botImg.addEventListener("click", ()=>{
            botMsgCnt.style.display = "block"
        })

        cross.addEventListener("click", ()=>{
            botMsgCnt.style.display = "none"
        })
