
function companyLogin() {
    var companyList = JSON.parse(localStorage.getItem('companies'))
    var companyPass = document.getElementById("logpass").value
    var companyMail = document.getElementById("logmail").value
    var test = false;
    for (i = 0; i < companyList.length; i++) {
        if ((companyPass == companyList[i].passConf) && (companyMail == companyList[i].companyEmail)) {
            localStorage.setItem("connectedCompany" ,JSON.stringify(companyList[i]));
            test = true;
        }
        
    }
    if (test) {
        window.location.href = "/companyProfileEdit.html";
    }
 
}
// ________________________________________________________________________________________________

function expertLogin() {
    var expertList = JSON.parse(localStorage.getItem('Experts'))
    var expertPass = document.getElementById("logpass").value
    var expertMail = document.getElementById("logmail").value
    var test = false
    for (i = 0; i < expertList.length; i++) {
        if ((expertPass == expertList[i].passConf) && (expertMail == expertList[i].mail)) {
            localStorage.setItem("connectedExpert" ,JSON.stringify(expertList[i]));
            test = true;
        }
    }
    if (test) {
        window.location.href = "/profileEdit.html";

    }
    // else {
    //     console.log("Something Went Wrong!");

    // }
}