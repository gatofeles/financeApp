function setAppear(){

    let dropdown = document.getElementById("dropDownHome");
     if (dropdown.className === "dropAppear"){
         dropdown.className = "dropDiss";
     }
     else{
         dropdown.className = "dropAppear";
     }
    console.log("appers "+dropdown.className);
};