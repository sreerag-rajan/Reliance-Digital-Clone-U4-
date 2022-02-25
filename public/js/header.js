
//Function to make changes to the displayed content within popup div
function openpopupdiv(id,popwinid){
    
    document.getElementById(id).addEventListener("mouseover",()=>{
        let tg = document.getElementsByClassName("toggledisp");
        for(let i =0; i<tg.length; i++){
            tg[i].style.display = "none";
            console.log(`display none`)
        }
        document.querySelector("#popupdiv").style.display = "block"
        document.getElementById(popwinid).style.display = "block"
    })
}

openpopupdiv("mt","toggle1")
openpopupdiv("ta","toggle2")
openpopupdiv("ha","toggle3")
openpopupdiv("co","toggle4")
openpopupdiv("ca","toggle5")
openpopupdiv("ka","toggle6")
openpopupdiv("pc","toggle7")
openpopupdiv("ac","toggle8")

//Closing pop up div
document.querySelector("#popupdiv").addEventListener("mouseleave",()=>{
    document.querySelector("#popupdiv").style.display = "none"
    let tg = document.getElementsByClassName("toggledisp");
    for(let i =0; i<tg.length; i++){
        tg[i].style.display = "none";
    }
})


//Search functionality

document.querySelector("#searchbtn").addEventListener("click",()=>{
    
    console.log("adjhf")
    let value = document.querySelector("#searchid").value;
    window.location.href="/search?q=" + value;
    
})





