
var companies = JSON.parse(localStorage.getItem("companies")) || [] ;
var companyProfiles = JSON.parse(localStorage.getItem("companyProfiles")) || [] ;
// var companies = JSON.parse(localStorage.getItem("companies"));
var logged = JSON.parse(localStorage.getItem("connectedCompany"));
// var userId = logged.id
// console.log(userId);
// var psudoName = document.getElementById('pseudo').value = logged.companyName
var email = document.getElementById('email').value = logged.companyEmail



// ___________________________________________________________________________________________

var imgUpdate = "";
var imgsUpdate = "";
function openFile(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
        imgUpdate = reader.result;
        document.getElementById("avatarimg").src = imgUpdate;
        document.getElementById("leftavatar").src = imgUpdate
        document.getElementById("topavatar").src = imgUpdate
        document.getElementById("menuavatar").src = imgUpdate

    };
    reader.readAsDataURL(input.files[0]);
  };


function openImage(event) {
    
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
        imgsUpdate = reader.result;

        console.log(imgsUpdate);
        document.getElementById("output").src = imgsUpdate



    };
    reader.readAsDataURL(input.files[0]);

  };
  

// ___________________________________________________________________________________________

function Modify() {


    
    companyId = logged.id
    console.log(companyId);

    for (i = 0; i < companies.length; i++) {
        console.log(companyId);
        
        if(companyId == companies[i].id){
            console.log("found");
            companyInfos = {
                companyId,
                psudoName : document.getElementById('pseudo').value,
                companyName : document.getElementById('companyName').value,
                email : document.getElementById('email').value,
                about : document.getElementById('about').value,
                mobile : document.getElementById('phone').value,
                adress : document.getElementById('CompanyAddress').value,
                state : document.getElementById('state').value,
                city : document.getElementById('city').value,
                zipCode : document.getElementById('zipCode').value,
                awards : document.getElementById('awards').value,
                year : document.getElementById('year').value,
            }
            var index = companyProfiles.map(item => {return item.companyId}).indexOf(companyInfos.companyId);
            if(imgUpdate !== "")
            {
                companyInfos['img'] = imgUpdate;
                console.log(imgUpdate);
                
            }else {
                companyInfos['img'] = companyProfiles[index].img;
                console.log(index);
                
            }
            if(imgsUpdate !== "") {
                companyInfos['imgs'] = imgsUpdate;
            }else {
                companyInfos['imgs'] = companyProfiles[index].imgs;

            }
            if(index !== -1) {
                companyProfiles[index] = companyInfos;

            } else {
                companyProfiles.push(companyInfos);
            }
            localStorage.setItem("companyProfiles", JSON.stringify( companyProfiles));
            location.replace("http://127.0.0.1:5500/Company%20Profile.html")
        }
    }

}   

window.onload = function profileLoading() {

    var companyDetails = JSON.parse(localStorage.getItem("companyProfiles")) || [] ;
    var connectedCompany = JSON.parse(localStorage.getItem("connectedCompany")).id;
    // console.log(connectedCompany);
    // console.log(companyDetails.userId);
    var find
    // console.log("found");
    for (i = 0; i < companyDetails.length; i++) {
        // console.log(userDetails[i].userId);
        // console.log(connectedUser);
        // console.log(userDetails[i].mobile);
        
    
        if (companyDetails[i].companyId == connectedCompany) {
            
            
            document.getElementById('pseudo').value = companyDetails[i].psudoName;
            document.getElementById('companyName').value = companyDetails[i].companyName;
            document.getElementById('topName').innerHTML = companyDetails[i].companyName;
            document.getElementById('email').value = companyDetails[i].email;
            document.getElementById('about').value = companyDetails[i].about; 
            document.getElementById('phone').value = companyDetails[i].mobile;
            document.getElementById('CompanyAddress').value = companyDetails[i].adress;
            document.getElementById('state').value = companyDetails[i].state;
            document.getElementById('city').value = companyDetails[i].city;
            document.getElementById('zipCode').value = companyDetails[i].zipCode; 
            document.getElementById('id').innerHTML = companyDetails[i].psudoName; 
            document.getElementById('name').innerHTML = companyDetails[i].companyName; 
            document.getElementById('awards').value = companyDetails[i].awards;
            document.getElementById('year').value = companyDetails[i].year;
            document.getElementById("avatarimg").src = companyDetails[i].img;
            document.getElementById("leftavatar").src = companyDetails[i].img;
            document.getElementById("topavatar").src = companyDetails[i].img;
            document.getElementById("menuavatar").src = companyDetails[i].img;
            document.getElementById("output").src = companyDetails[i].imgs;

        }

    }
    
          
}