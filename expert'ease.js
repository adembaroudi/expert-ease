var img = "";



function openFile(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function () {
        img = reader.result;
        console.log(img);

    };
    reader.readAsDataURL(input.files[0]);
};

function vide() {
    let price = document.getElementById("option-price-2").value;
    let Name = document.getElementById("Jobtittle").value;
    let type = document.getElementById("jobtype").value;
    let company = document.getElementById("company").value;
    let specialities = document.getElementById("specialities").value;
    let location = document.getElementById("location").value;
    let description = document.getElementById("jobdescription").value;
    let image = document.getElementById("image").value;


    if ((price.length == 0) || (Name.length == 0) || (type.length == 0) || (company.length == 0) || (specialities.length == 0) || (location.length == 0) || (description.length == 0) || (image.length == 0)) {

        return false;
    } else {

        return true;
    }
}
// company's functions start from here//

// this function is about company add job
function AddJob() {
    let list = JSON.parse(localStorage.getItem('job offer'))
    // let companycn = JSON.parse(localStorage.getItem('companyConnected'))||[]
    if (list == null) {
        list = [];
    }
    var object = {
        id: Math.floor(Math.random() * 1000) + 1,
        price: document.getElementById("option-price-2").value,
        Name: document.getElementById("Jobtittle").value,
        type: document.getElementById("jobtype").value,
        company: document.getElementById("company").value,
        specialities: document.getElementById("specialities").value,
        location: document.getElementById("location").value,
        image: img,
        description: document.getElementById("jobdescription").value,
        status: "inprogress"
        // owner : companycn

    };
    if (vide()) {

        list.push(object);
        localStorage.setItem('job offer', JSON.stringify(list));
        // localStorage.setItem('companyConnected',JSON.stringify(list))
        location.href = "http://127.0.0.1:5500/Company-profile.html";
    } else {
        alert("champs obligatoire");
    }


}
//--/ this function is about company add job//

// this function is about company display job//
function displayJob() {
    let jobOffers = JSON.parse(localStorage.getItem('job offer')) || [];
    // companyCn =JSON.parse(localStorage.getItem('companyConnected')).id|| {};

    let html = `<div class="text-center">
            <a href="http://127.0.0.1:5500/comp-add-job-offer.html"
                class="add-new-btn">Add a job offer</a>
                
                 
            <a href="http://127.0.0.1:5500/Expert'ease-home.html"
                class=" add-new-btn">post a job offer</a>
        </div>`
    for (let i = 0; i < jobOffers.length; i++) {
        //   if(jobOffers[i].owner==companyCn){


        html += `
                <div class="location-list">
                <div class="row">
                <div class="text-right">
                </div>
        
                <div class="col-md-6">
                <div class="clinic-content">
                <div class="text-right">
                
        </div>
        <a href="${jobOffers[i].image}" data-fancybox="gallery2">
        <img src="${jobOffers[i].image}" style="height:20% ;width :20%; border-radius:20%">
        <h4 class="clinic-name">${jobOffers[i].company}</h4>
        </a>
        
        
        <p class="doc-speciality">${jobOffers[i].specialities}</p>
        <div class="clinic-details mb-0">
        <p class="clinic-direction"> <i class="fas fa-map-marker-alt"></i>${jobOffers[i].location} <br></p>
        <span>${jobOffers[i].type}</span>
        
        </div>
        
        </div>
        </div>
        <div class="col-md-4">
        <div class="clinic-timing">
        <div>
        <p class="timings-days">
        <h4 class="clinic-name"> ${jobOffers[i].Name}</h4>
        <span><p>${jobOffers[i].description}</p></span>
                 </p>
                 
                 </div>
                 </div>
                 </div>
                 
                 
                 <div class="col-md-2">
                 <div class="consult-price">
                 <span>${jobOffers[i].price}</span><br>
                 <span  style="display : none;">${[i]}</span><br>
                 <a type="button" class="btn btn-sm bg-success-light" onclick="editJob(${jobOffers[i].id})"><i class="fas fa-edit"></i>  Edit  </a><br>
                 <a type="button" class="btn btn-sm bg-danger-light" onclick="deleteJob(${jobOffers[i].id})"><i class="far fa-trash-alt" ></i>Delete</a><br>
                 <a style="display:none;" class="btn btn-sm bg-danger-light" onclick="qualifJob(${jobOffers[i].id})"><i class="far fa-trash-alt" ></i> Delete</a>
                                     
                 
                 
         
                 </div>
                 </div>
                 </div>
                 </div>`









        // }
    }
    document.getElementById("job").innerHTML = html;
}
//--/ this function is about company display job//

//this function is about company post job// 
function affichage() {
    let jobOffers = JSON.parse(localStorage.getItem('job offer')) || [];

    let html = `<div id="myDiv">`

    
    for (let i = 0; i < jobOffers.length; i++) {
        if (jobOffers[i].status == "accepted") {



            html += `<div class="col-md-12 col-lg-8 col-xl-9">
                        
                                          
            <div class="card">
                <div class="card-body">
                    <div class="doctor-widget">
                        <div class="doc-info-left">
                            <div class="doctor-img">
                                <a href="company-profile.html">
                                    <img src="${jobOffers[i].image}" class="img-fluid" alt="User Image">
                                </a>
                            </div>
                            <div class="doc-info-cont">
                                <h5 class="doc-department">${jobOffers[i].company}</h5>
                                
                                <p class="doc-speciality">${jobOffers[i].Name}</p>
                                <p class="spec doc-speciality">${jobOffers[i].specialities}</p>

                                
                                <div class="clinic-details">
                                    <p class="doc-location"> ${jobOffers[i].type}</p>
                                   
                                </div>
                               
                            </div>
                        </div>
                        <div class="doc-info-right">
                            <div class="clini-infos">
                                 <ul>
                                    
                                    <li><i class="far fa-comment"></i> ${jobOffers[i].description}</li>
                                    <li><i class="fas fa-map-marker-alt"></i> ${jobOffers[i].location}</li>
                                    <li><i class="far fa-money-bill-alt"></i> ${jobOffers[i].price} </li>
                                </ul> 
                            </div>
                            <div class="clinic-booking">
                                <a class="view-pro-btn" href="expert-profile.html">View Profile</a>
                                <a class="apt-btn"  onclick="qualifJob()">send request</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
                            </div>`
                
                        }
                        
                    }
                    html+=`</div>`
                    document.getElementById("display").innerHTML = html
                    var w = document.getElementById("jobform");
                    w.style.display = "none";
}
//--/this function is about company post job// 

// this function is about company edit job//
function editJob(id) {


    let user = JSON.parse(localStorage.getItem('job offer')) || [];
    for (let i = 0; i < user.length; i++) {
        if (user[i].id == id) {

            document.getElementById("option-price-2").value = user[i].price
            document.getElementById("Jobtittle").value = user[i].Name
            document.getElementById("company").value = user[i].company
            document.getElementById("jobtype").value = user[i].type
            document.getElementById("specialities").value = user[i].specialities
            document.getElementById("location").value = user[i].location
            document.getElementById("jobdescription").value = user[i].description
            document.getElementById("indice").value = id
        }
    }

    var w = document.getElementById("form");
    w.style.display = "block";
}

function APPLY() {
    let user = JSON.parse(localStorage.getItem('job offer')) || []
    var id = document.getElementById("indice").value

    for (let i = 0; i < user.length; i++) {
        if (user[i].id == id) {
            user[i].price = document.getElementById("option-price-2").value
            user[i].Name = document.getElementById("Jobtittle").value
            user[i].company = document.getElementById("company").value
            user[i].type = document.getElementById("jobtype").value
            user[i].specialities = document.getElementById("specialities").value
            user[i].location = document.getElementById("location").value
            user[i].description = document.getElementById("jobdescription").value


            localStorage.setItem('job offer', JSON.stringify(user));
        }
    }
    var w = document.getElementById("form");
    w.style.display = "none";

}

function load() {
    let y = document.getElementById("form");

    y.style.display = "none";

}
// --/this function is about company edit job//

// this function is about company delete job //
function deleteJob(id) {
    console.log(id)
    let company = JSON.parse(localStorage.getItem('job offer')) || [];
    for (let i = 0; i < company.length; i++) {
        if (company[i].id == id) {
            company.splice(i, 1);
            localStorage.setItem('job offer', JSON.stringify(company));
        }
    }

}
//--/ this function is about company delete job //

// this function is about company search job//
function searchJob() {

    let exp = JSON.parse(localStorage.getItem('job offer expert')) || [];
    var location = document.getElementById("searchlocation").value
    expert = document.getElementById("searchexpert").value
    price = document.getElementById("searchexpert").value
    Name = document.getElementById("searchexpert").value
    type = document.getElementById("searchexpert").value
    specialities = document.getElementById("searchexpert").value
    description = document.getElementById("searchexpert").value
    for (let i = 0; i < exp.length; i++) {
        console.log(1)
        if ((exp[i].location == location) || (exp[i].company == expert) || (exp[i].Name == Name) || (exp[i].description == description) || (exp[i].price == price) || (exp[i].type == type)) {

            location.href = "http://127.0.0.1:5500/Expert'ease/Expert'ease-home.html";

        } else {
            alert("none")
        }
    }
}

// --/this function is about company search job//

// this function is about company send job request//
function sendJob(id) {
    let user = JSON.parse(localStorage.getItem('job offer')) || [];
    for (i = 0; i < user.length; i++) {
        if (user[i].id == id) {
            document.getElementById("price").value = user[i].price
            document.getElementById("jobtittle").value = user[i].Name
            document.getElementById("jobtype").value = user[i].type
            document.getElementById("company").value = user[i].company
            document.getElementById("specialities").value = user[i].specialities
            document.getElementById("location").value = user[i].location
            document.getElementById("jobdescription").value = user[i].description



        }


    }
    localStorage.setItem('job request', JSON.stringify(user));
}

//--/ this function is about company send job request//

// company's functions ends here//



// expert's functions start from here//
function none() {
    let expert = document.getElementById("expert").value;
    let price = document.getElementById("option-price-2").value;
    let Name = document.getElementById("Jobtittle").value;
    let type = document.getElementById("jobtype").value;
    let specialities = document.getElementById("specialities").value;
    let location = document.getElementById("location").value;
    let description = document.getElementById("jobdescription").value;


    if ((price.length == 0) || (Name.length == 0) || (type.length == 0) || (expert.length == 0) || (specialities.length == 0) || (location.length == 0) || (description.length == 0)) {

        return false;
    } else {

        return true;
    }
}
// this function is about expert post job //
function postJob() {
    let list = JSON.parse(localStorage.getItem('job offer expert'))
    // let expertcn = JSON.parse(localStorage.getItem('expertConnected'))||[]
    if (list == null) {
        list = [];
    }
    var object = {
        id: Math.floor(Math.random() * 1000) + 1,
        expert: document.getElementById("expert").value,
        price: document.getElementById("option-price-2").value,
        Name: document.getElementById("Jobtittle").value,
        type: document.getElementById("jobtype").value,
        specialities: document.getElementById("specialities").value,
        location: document.getElementById("location").value,
        image: img,
        status: "in progress",
        description: document.getElementById("jobdescription").value
        // owner : companycn

    };
    if (none()) {
        list.push(object);
        localStorage.setItem('job offer expert', JSON.stringify(list));
        // localStorage.setItem('expertConnected',JSON.stringify(list))
        location.href = "http://127.0.0.1:5500/Expert-profile.html";
    } else {
        alert("champs obligatoires")
    }

}
// --/this function is about expert post job //

// this function is to refresh inputs//
function actualiser() {
    document.getElementById("expert").value = ''
    document.getElementById("option-price-2").value = ''
    document.getElementById("Jobtittle").value = ''
    document.getElementById("jobtype").value = ''
    document.getElementById("specialities").value = ''
    document.getElementById("location").value = ''
    document.getElementById("jobdescription").value = ''
}
//--/ this function is to refresh inputs//
// this function is about expert display job//
function afficheJob() {
    let jobOffers = JSON.parse(localStorage.getItem('job offer expert')) || [];

    let html = `<div class="text-right">
                        <a href="http://127.0.0.1:5500/expert-add.html" type="button"
                            class="add-new-btn">Post job offer</a>
                    </div>
                    <div class="card card-table mb-0">
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-hover table-center mb-0">
                                    <thead>
                                        <tr>
                                            <th> photo </th>
                                            <th>Expert's name </th>
                                            <th>Job tittle</th>
                                            <th>Specialities </th>
                                            <th>Job Type</th>
                                            <th>Price</th>
                                            <th>Location</th>
                                            <th>Description</th>
                                            <th>Actions</th>
                                            <th style="display : none;">i</th>
                    
                                        </tr>
                                    </thead>
                                     `
    html += `	<tbody> `

    for (let i = 0; i < jobOffers.length; i++) {
        html += `
                                        <tr>
                                        <td>
                                    
                                        <img src="${jobOffers[i].image}" style="height:20% ;width :150%; border-radius:20%"></td>
                                        <td>${jobOffers[i].expert}</td>
                                            <td>${jobOffers[i].Name}</td>
                                            <td>${jobOffers[i].specialities}</td>
                                            <td>${jobOffers[i].type}</td>
                                            <td>${jobOffers[i].price}</td>
                                            <td>${jobOffers[i].location}</td>
                                            <td>${jobOffers[i].description}</td>
                                            <td  style="display : none;">${i}</td><br>
                    
                                            <td class="text-right">
                                                <div class="table-action">
                    
                                                <a class="btn btn-sm bg-success-light" onclick="modifJob(${jobOffers[i].id})"><i class="fas fa-edit"></i> Edit</a>
                                                <a class="btn btn-sm bg-danger-light" onclick="supprimerJob(${jobOffers[i].id})"><i class="far fa-trash-alt" ></i> Delete</a>
                                                <a style="display:none;" class="btn btn-sm bg-danger-light" onclick="qualifJob(${jobOffers[i].id})"><i class="far fa-trash-alt" ></i> Delete</a>


                                                </div>
                                            </td>
                                        </tr>
                                   
                                `

    }
    html += ` </tbody>
                                    </table>
                                    `
    document.getElementById("pres").innerHTML = html

}
//--/ this function is about expert display job//

// this function is about expert edit job //
function modifJob(id) {

    let user = JSON.parse(localStorage.getItem('job offer expert')) || [];
    for (let i = 0; i < user.length; i++) {
        if (user[i].id == id) {
            document.getElementById("expert").value = user[i].expert
            document.getElementById("option-price-2").value = user[i].price
            document.getElementById("Jobtittle").value = user[i].Name
            document.getElementById("jobtype").value = user[i].type
            document.getElementById("specialities").value = user[i].specialities
            document.getElementById("location").value = user[i].location
            document.getElementById("jobdescription").value = user[i].description
            document.getElementById("indice").value = id

        }
    }

    var w = document.getElementById("jobform");
    w.style.display = "block";
}

function appliquer() {
    let user = JSON.parse(localStorage.getItem('job offer expert')) || []
    var id = document.getElementById("indice").value

    for (let i = 0; i < user.length; i++) {
        if (user[i].id == id) {
            user[i].company = document.getElementById("expert").value
            user[i].price = document.getElementById("option-price-2").value
            user[i].Name = document.getElementById("Jobtittle").value
            user[i].type = document.getElementById("jobtype").value
            user[i].specialities = document.getElementById("specialities").value
            user[i].location = document.getElementById("location").value
            user[i].description = document.getElementById("jobdescription").value


            localStorage.setItem('job offer expert', JSON.stringify(user));
        }
    }
    var w = document.getElementById("jobform");
    w.style.display = "none";

}
//--/ this function is about expert edit job //

// this function is about expert delete job//
function supprimerJob(id) {
    let expert = JSON.parse(localStorage.getItem('job offer expert')) || [];
    for (let i = 0; i < expert.length; i++) {
        if (expert[i].id == id) {
            expert.splice(i, 1);
            localStorage.setItem('job offer expert', JSON.stringify(expert));
        }
    }

}
//--/ this function is about expert delete job//

// this function is to load page//
function chargement() {
    let y = document.getElementById("jobform");

    y.style.display = "none";

}
//--/ this function is to load page//




//this function is about expert apply job//        
function qualifJob(id) {
    let user = JSON.parse(localStorage.getItem('job offer expert')) || []
    console.log(user);

    for (i = 0; i < user.length; i++) {
        if (user[i].id == id) {

            document.getElementById("expert").value = user[i].expert
            document.getElementById("jobtittle").value = user[i].Name
            document.getElementById("specialities").value = user[i].specialities
            document.getElementById("location").value = user[i].location
            document.getElementById("jobdescription").value = user[i].description
        }
    }

    localStorage.setItem('expert applied', JSON.stringify(user));
}





//--/this function is about expert apply job// 

//this function is about expert posting profil//
function publication() {
    let jobOffers = JSON.parse(localStorage.getItem('job offer expert')) || [];
    let html = `<div id="myDiv">`
    document.getElementByc
    for (let i = 0; i < jobOffers.length; i++) {
        html += `<div class="col-md-12 col-lg-8 col-xl-9">
                        
                                          
                                          <div class="card">
                                              <div class="card-body">
                                                  <div class="doctor-widget">
                                                      <div class="doc-info-left">
                                                          <div class="doctor-img">
                                                              <a href="expert-profile.html">
                                                                  <img src="${jobOffers[i].image}" class="img-fluid" alt="User Image">
                                                              </a>
                                                          </div>
                                                          <div class="doc-info-cont">
                                                              <h5 class="doc-department">${jobOffers[i].expert}</h5>
                                                              
                                                              <p class="doc-speciality">${jobOffers[i].Name}</p>
                                                              <p class="spec doc-speciality">${jobOffers[i].specialities}</p>

                                                              
                                                              <div class="clinic-details">
                                                                  <p class="doc-location"> ${jobOffers[i].type}</p>
                                                                 
                                                              </div>
                                                             
                                                          </div>
                                                      </div>
                                                      <div class="doc-info-right">
                                                          <div class="clini-infos">
                                                               <ul>
                                                                  
                                                                  <li><i class="far fa-comment"></i> ${jobOffers[i].description}</li>
                                                                  <li><i class="fas fa-map-marker-alt"></i> ${jobOffers[i].location}</li>
                                                                  <li><i class="far fa-money-bill-alt"></i> ${jobOffers[i].price} </li>
                                                              </ul> 
                                                          </div>
                                                          <div class="clinic-booking">
                                                              <a class="view-pro-btn" href="expert-profile.html">View Profile</a>
                                                              <a class="apt-btn"  onclick="sendJob()">send request</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                        
                                                          </div>`
    }
    html += `</div>`
    document.getElementById("display").innerHTML = html
    var w = document.getElementById("jobform");
    w.style.display = "none";
}

function mySearch() {
    var myDiv, input, col12, card, cardBody, Doctorwidget, infoleft, infocont, h5, filter, txtValue;
    input = document.getElementById("searchexpert");
    filter = input.value.toUpperCase();
    myDiv = document.getElementById("myDiv");
    col12 = myDiv.getElementsByClassName("col-md-12");

    for (let i = 0; i < col12.length; i++) {
        card = col12[i].getElementsByClassName("card")[0];
        cardBody = card.getElementsByClassName("card-body")[0];
        Doctorwidget = cardBody.getElementsByClassName("doctor-widget")[0];
        infoleft = Doctorwidget.getElementsByClassName("doc-info-left")[0];
        infocont = infoleft.getElementsByClassName("doc-info-cont")[0];
        h5 = infocont.getElementsByTagName("h5")[0];
    
        txtValue = h5.textContent || h5.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
    


            col12[i].style.display = "";


        } else {
            col12[i].style.display = "none";
        

        }

    }
}

function searchspec() {

    var myDiv, input, col12, card, cardBody, Doctorwidget, infoleft, infocont, p, txtValue;
    input = document.getElementById("specialities");
    txtValue = input.options[input.selectedIndex].value;
    myDiv = document.getElementById("myDiv");
    col12 = myDiv.getElementsByClassName("col-md-12");

    for (let i = 0; i < col12.length; i++) {
        card = col12[i].getElementsByClassName("card")[0];
        cardBody = card.getElementsByClassName("card-body")[0];
        Doctorwidget = cardBody.getElementsByClassName("doctor-widget")[0];
        infoleft = Doctorwidget.getElementsByClassName("doc-info-left")[0];
        infocont = infoleft.getElementsByClassName("doc-info-cont")[0];
        p = infocont.getElementsByClassName("spec")[0];
        
        
        if (txtValue == p.innerHTML) {
           

            col12[i].style.display = ""
        } else {
            col12[i].style.display = "none";

        }
    }

}

//--/this function is about expert posting profil//

// expert's functions ends here//

function specialities() {
    console.log(2);
    let speciality = JSON.parse(localStorage.getItem('Spec')) || []

    var html = `	  <div>
    <select id="specialities"class="form ui selection dropdown font-weight-bold" onchange="searchspec()" >
        <option value="none" ><h1>Specialities</h1></option>`
    for (i = 0; i < speciality.length; i++) {
        console.log(3);

        html += ` 
      <option  value="${speciality[i].Name}"><h6>${speciality[i].Name}</h6></option>`
    }
    html += `  </select>
  </div><br> <br>`
    document.getElementById("specialities").innerHTML = html;
    document.getElementById("filter").innerHTML = html;

}
function spechome() {
    speciality = JSON.parse(localStorage.getItem('Spec')) || [];
    var html = `	<div class="filter-widget">
    <h4>Select Specialist</h4>
    <div>`
    for (i = 0; i < speciality.length; i++) {
        html += `<label class="custom_check">
        <input type="checkbox" name="select_specialist" checked>
        <span class="checkmark"></span> ${speciality[i].Name}`
    }
    html += `</label>
    </div>`
    document.getElementById("filter").innerHTML = html
}



function displayRequest() {
    let display = JSON.parse(localStorage.getItem('expert applied')) || []
    html = `<div class="tab-pane" >
  
    <div class="card card-table mb-0">
        <div class="card-body">
            <div class="table-responsive">

                <table class="table table-hover table-center mb-0">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Job tittle</th>
                            <th>Specialities</th>
                            <th>Job type</th>
                            <th>Location</th>
                            <th>Job description</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>`
    for (i = 0; i < display.length; i++) {
        html += `
                            <td>
                                <h2 class="table-avatar">
                                    <a href="doctor-profile.html"
                                    class="avatar avatar-sm mr-2">
                                    <img class="avatar-img rounded-circle"
                                    src="${display[i].image}"
                                    alt="User Image">
                                </a>
                                <a href="doctor-profile.html">${display[i].expert}
                                    
                                </h2>
                            </td>
                                            <td>
                                                <a href="invoice-view.html">${display[i].Name}</a>
                                            </td>
                                            <td>${display[i].specialities}</td>
                                            <td>${display[i].type}</td>
                                            <td>${display[i].location}</td>
                                            <td>${display[i].description}</td>
                                            <td>${display[i].price}</td>
                                            <td style="display : none;">${[i]}</td>
                                            <td class="text-right"><div class="table-action">

                                            <button class="like-btn" id="accept-${display[i].id}" style="background-color:green; color:white" onclick="admis(${display[i].id})"><i class="far fa-thumbs-up"></i> Accept</button>
                                            <button class="dislike-btn" id="reject-${display[i].id}" style="background-color:red; color: white;" onclick="refus(${display[i].id})"><i class="far fa-thumbs-down"></i> Reject</button>
                                            </div></td>
                                            
                                            </tr>`
    }
    html += `
                    </tbody>
                    </div>`
    document.getElementById("request").innerHTML = html
}

function affRequest() {
    let display = JSON.parse(localStorage.getItem('job request')) || [];
    html = `<div class="tab-pane" >
  
    <div class="card card-table mb-0">
        <div class="card-body">
            <div class="table-responsive">

                <table class="table table-hover table-center mb-0">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Job tittle</th>
                            <th>Specialities</th>
                            <th>Job type</th>
                            <th>Location</th>
                            <th>Job description</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>`
    for (i = 0; i < display.length; i++) {
        html += `
                            <td>
                                <h2 class="table-avatar">
                                    <a href="doctor-profile.html"
                                    class="avatar avatar-sm mr-2">
                                    <img class="avatar-img rounded-circle"
                                    src="${display[i].image}"
                                    alt="User Image">
                                </a>
                                <a href="doctor-profile.html">${display[i].company}
                                    
                                </h2>
                            </td>
                                            <td>
                                                <a href="invoice-view.html">${display[i].Name}</a>
                                            </td>
                                            <td>${display[i].specialities}</td>
                                            <td>${display[i].type}</td>
                                            <td>${display[i].location}</td>
                                            <td>${display[i].description}</td>
                                            <td>${display[i].price}</td>
                                            <td style="display : none;">${[i]}</td>
                                            <td class="text-right"><div class="table-action">

                                            <button class="like-btn" id="accept-${display[i].id}" style="background-color:green; color:white" onclick="accept(${display[i].id})"><i class="far fa-thumbs-up"></i> Accept</button>
                                            <button class="dislike-btn" id="reject-${display[i].id}" style="background-color:red; color: white;" onclick="reject(${display[i].id})"><i class="far fa-thumbs-down"></i> Reject</button>
                                            </div></td>
                                            
                                            </tr>`
    }
    html += `
                    </tbody>
                    </div>`
    document.getElementById("billing").innerHTML = html

}

function reject(id) {
    console.log(id);

    let reject = JSON.parse(localStorage.getItem('job offer')) || [];


    for (i = 0; i < reject.length; i++) {
        console.log(i);

        if (reject[i].id == id) {
            console.log(id);

            reject[i].status = "rejected"
            document.getElementById("accept-" + id).disabled = true;
            document.getElementById("accept-" + id).style.color = "grey";
        }
    }

    localStorage.setItem('job offer', JSON.stringify(reject));
}

function accept(id) {
    console.log(id);

    let accept = JSON.parse(localStorage.getItem('job offer')) || [];

    for (i = 0; i < accept.length; i++) {
        console.log(i);


        if (accept[i].id == id) {
            console.log(id);

            accept[i].status = "accepted"
            document.getElementById("reject-" + id).disabled = true;
            document.getElementById("reject-" + id).style.color = "grey";



        }
    }

    localStorage.setItem('job request', JSON.stringify(accept))
}

function AcRe() {
    AR = JSON.parse(localStorage.getItem('job offer')) || [];
    for (i = 0; i < AR.length; i++) {
        var id = AR[i].id
        if (AR[i].status == "rejected") {

            document.getElementById("accept-" + id).style.color = "grey";
            document.getElementById("reject-" + id).disabled = true;

            document.getElementById("accept-" + id).disabled = true;
        } else if (AR[i].status == "accepted") {

            document.getElementById("reject-" + id).style.color = "grey";

            document.getElementById("reject-" + id).disabled = true;
            document.getElementById("accept-" + id).disabled = true;

        }
    }

}

function refus(id) {
    refus = JSON.parse(localStorage.getItem('job offer expert')) || [];
    console.log(id);




    for (i = 0; i < refus.length; i++) {
        console.log(i);

        if (refus[i].id == id) {
            console.log(id);

            refus[i].status = "rejected"
            document.getElementById("accept-" + id).disabled = true;
            document.getElementById("accept-" + id).style.color = "grey";
        }
    }
    localStorage.setItem('job offer expert', JSON.stringify(refus));
}

function admis(id) {
    admis = JSON.parse(localStorage.getItem('job offer expert')) || [];
    for (i = 0; i < admis.length; i++) {
        console.log(i);


        if (admis[i].id == id) {
            console.log(id);

            admis[i].status = "accepted"
            document.getElementById("reject-" + id).disabled = true;
            document.getElementById("reject-" + id).style.color = "grey";



        }
    }

    localStorage.setItem('job offer expert', JSON.stringify(admis))
}

function AdRe() {
    AR = JSON.parse(localStorage.getItem('job offer expert')) || [];
    for (i = 0; i < AR.length; i++) {
        var id = AR[i].id
        if (AR[i].status == "rejected") {

            document.getElementById("accept-" + id).style.color = "grey";
            document.getElementById("reject-" + id).disabled = true;

            document.getElementById("accept-" + id).disabled = true;
        } else if (AR[i].status == "accepted") {

            document.getElementById("reject-" + id).style.color = "grey";

            document.getElementById("reject-" + id).disabled = true;
            document.getElementById("accept-" + id).disabled = true;

        }
    }

}
