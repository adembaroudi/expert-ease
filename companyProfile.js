


 function profileLoading() {

    var companyDetails = JSON.parse(localStorage.getItem("companyProfiles")) || [];
    var connectedCompany = JSON.parse(localStorage.getItem("connectedCompany"))
    myId = connectedCompany.id
    console.log(myId);


    for (i = 0; i < companyDetails.length; i++) {
        // console.log(companyDetails[i].companyId);
        
        if (companyDetails[i].companyId == myId) {
            // console.log(companyDetails[i].companyId);
            document.getElementById("about").innerHTML = companyDetails[i].about;
            document.getElementById("year").innerHTML = companyDetails[i].year;
            document.getElementById("award").innerHTML = companyDetails[i].awards;
            document.getElementById("topName").innerHTML = companyDetails[i].companyName
            document.getElementById("leftAvatar").src = companyDetails[i].img
            document.getElementById("store").src = companyDetails[i].imgs
            document.getElementById("roundedAvatar").src = companyDetails[i].img
            document.getElementById("menuAvatar").src = companyDetails[i].img
            document.getElementById("zoom").src = companyDetails[i].imgs
            document.getElementById("location").innerHTML = companyDetails[i].adress
        
        }
  
    }
     
}


            
      
