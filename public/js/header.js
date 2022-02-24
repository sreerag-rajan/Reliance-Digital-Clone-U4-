
function headerFunctionality(){
    //Ensuring the pop div stays open when needed
document.querySelector("#popupdiv").addEventListener("mouseover",()=>{
    document.querySelector("#popupdiv").style.display = "block"
})

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
    let terms = ["phone","smartphone","mobile","vivo","oppo","iphone","samsung","realme","redmi","apple","oneplus"]
    let searched_term = document.querySelector("#q").value;
    searched_term = searched_term.toLowerCase()
    let term_found = false;
    for(let i =0; i<terms.length;i++){
        if(searched_term===terms[i]){
            term_found = true;
            window.location.href = "productFromSearch.html"
        }
    }
    if(term_found === false){
        alert("Invalid Search! Only Mobile Products Available")
    }
})
}

export default headerFunctionality

