function add() {
    let SpecList = JSON.parse(localStorage.getItem('Spec')) || []
    var Spec = {
        id: Math.floor(Math.random() * 1000) + 1,
        Name: document.getElementById('Specialities').value,



    }
    SpecList.push(Spec);
    localStorage.setItem('Spec', JSON.stringify(SpecList));
}





function displaySpec() {
    let SpecList = JSON.parse(localStorage.getItem('Spec')) || []

    let html = ` <table id="tab">
    <thead>
    <tr>
        <th>ID</th>
        <th>Specialities</th>
        <th class="text-right">Actions</th>
    </tr>
    </thead>
    `;

    for (i = 0; i < SpecList.length; i++) {

        html += ` 
          <tbody>
          <tr>
          <td>${SpecList[i].id}</td>
          <td>${SpecList[i].Name}</td>
          <td class="text-right">
          <div class="actions">
              <a class="btn btn-sm bg-success-light" data-toggle="modal"  onclick="editSpec(${SpecList[i].id})" href="#edit_specialities_details">
                  <i class="fe fe-pencil"></i> Edit
              </a>
              <a  data-toggle="modal" href="#delete_modal" class="btn btn-sm bg-danger-light">
                  <i class="fe fe-trash"></i> Delete
              </a>
          </div>
            </td> 
            </tr>
            </tbody>
            `;
        html += `
        <div class="modal fade" id="delete_modal" aria-hidden="true" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document" >
                        <div class="modal-content">
                        	<div class="modal-header">
                                <h5 class="modal-title">Delete</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="form-content p-2">
                                    <h4 class="modal-title">Delete</h4>
                                    <p class="mb-4">Are you sure want to delete?</p>
                                    <button type="button" class="btn btn-primary"  onclick="deleteSpec(${SpecList[i].id})">delete </button>
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
        `
        html+=`
        <div class="modal fade" id="edit_specialities_details" aria-hidden="true" role="dialog">
				<div class="modal-dialog modal-dialog-centered" role="document" >
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">Edit Specialities</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<form>
								<div class="row form-row">
									<div class="col-12 col-sm-6">
										<div class="form-group">
											<label>Specialities</label>
											<input type="text" class="form-control"  id="editSpec">
										</div>
									</div>
									<div class="col-12 col-sm-6">
										<div class="form-group">
											<label>Image</label>
											<input type="file"  class="form-control">
										</div>
									</div>
									
								</div>
								<button type="submit" class="btn btn-primary btn-block" onclick="editSpec(${SpecList[i].id})">Save Changes</button>
							</form>
						</div>
					</div>
				</div>
			</div>
        `

    }
    document.getElementById("tab").innerHTML = html
}


function deleteSpec(id) {
    let list = JSON.parse(localStorage.getItem("Spec")) || [];
  
    
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == id) {
        //   console.log(list[i].id);
          list.splice(i, 1);
      }
    }
localStorage.setItem("Spec", JSON.stringify(list));
location.reload();
    }


    function editSpec(id) {
        let list = JSON.parse(localStorage.getItem("Spec")) || [];
      
        
        for (let i = 0; i < list.length; i++) {
          if (list[i].id == id) {
   
        document.getElementById("editSpec").value = (list[i].Name);
       
        }
       
        
    localStorage.setItem("Spec", JSON.stringify(list));
    
    }
}

    function confirm() {
        let list = JSON.parse(localStorage.getItem("Spec")) || [];
        
      
        
      
        list[i].Name = document.getElementById("editSpec").value;
       
      
        localStorage.setItem("Spec", JSON.stringify(list));
        location.reload();
    
        
      }



      function displayExpert() {
        let ExpertList = JSON.parse(localStorage.getItem('expert')) || []
    
        let html = ` <table id="exptab">
        <thead>
        <thead>
        <tr>
            <th>Name</th>
            <th>Speciality</th>
            <th>Account Status</th>
            <th class="text-right">Actions</th>
            

        </tr>
    </thead>
        `;
    
        for (i = 0; i < ExpertList.length; i++) {
    
            html += ` 
              <tbody>
              <tr>
              <td>${ExpertList[i].userName}</td>
              <td>${ExpertList[i].phoneNumber}</td>
              <td>${ExpertList[i].accountStatus}</td>
              <td class="text-right">
              <div class="actions">
              <a  data-toggle="modal" href="#accept_modal" onclick="acceptExpert(${ExpertList[i].id})"  class="btn btn-sm bg-success-light">
              <i class="fa fa-check"></i> Accept
              </a>
              <a  data-toggle="modal" href="#reject_modal" onclick="rejectExpert(${ExpertList[i].id})"  class="btn btn-sm bg-danger-light">
              <i class="fa fa-times"></i> Reject
              </a>
              <a  data-toggle="modal" href="#delete_modal" onclick="deleteExpert(${ExpertList[i].id})" class="btn btn-sm bg-info-light">
                  <i class="fe fe-trash"></i> Delete
              </a>
          </div>
              
                </td> 
                </tr>
                </tbody>
                `;
        }
        document.getElementById("exptab").innerHTML = html
    }


    function displayCompany() {
        let CompanyList = JSON.parse(localStorage.getItem('company')) || []
    
        let html = ` <table id="cmptab">
        <thead>
        <thead>
        <tr>
            <th>Name</th>
            <th>Speciality</th>
            <th>Account Status</th>
            <th class="text-right">Actions</th>
            

        </tr>
    </thead>
        `;
    
        for (i = 0; i < CompanyList.length; i++) {
    
            html += ` 
              <tbody>
              <tr>
              <td>${CompanyList[i].userName}</td>
              <td>${CompanyList[i].phoneNumber}</td>
              <td>${CompanyList[i].accountStatus}</td>
              <td class="text-right">
              <div class="actions">
              <a  data-toggle="modal" href="#accept_modal" onclick="acceptCompany(${CompanyList[i].id})"  class="btn btn-sm bg-success-light">
              <i class="fa fa-check"></i> Accept
              </a>
              <a  data-toggle="modal" href="#reject_modal" onclick="rejectCompany(${CompanyList[i].id})"  class="btn btn-sm bg-danger-light">
              <i class="fa fa-times"></i> Reject
              </a>
              <a  data-toggle="modal" href="#delete_modal" onclick="deleteCompany(${CompanyList[i].id})" class="btn btn-sm bg-info-light">
                  <i class="fe fe-trash"></i> Delete
              </a>
          </div>
              
                </td> 
                </tr>
                </tbody>
                `;
        }
        document.getElementById("cmptab").innerHTML = html
    }


    //   <Delete Accept Reject , Company & Expert>

    function deleteCompany(id) {
        let list = JSON.parse(localStorage.getItem("company")) || [];
      
        
        for (let i = 0; i < list.length; i++) {
          if (list[i].id == id) {
            //   console.log(list[i].id);
              list.splice(i, 1);
          }
        }
    localStorage.setItem("company", JSON.stringify(list));
    location.reload();
        }




        function deleteExpert(id) {
            let list = JSON.parse(localStorage.getItem("expert")) || [];
          
            
            for (let i = 0; i < list.length; i++) {
              if (list[i].id == id) {
                //   console.log(list[i].id);
                  list.splice(i, 1);
              }
            }
        localStorage.setItem("expert", JSON.stringify(list));
        location.reload();
            }


 function acceptExpert(id) {
       let list = JSON.parse(localStorage.getItem("expert")) || [];
       let Activation="Active"
                
            for (let i = 0; i < list.length; i++) {
                  if (list[i].id == id) {
                (list[i].accountStatus)=Activation;
                  }
                }
            localStorage.setItem("expert", JSON.stringify(list));
            location.reload();
                }





 function acceptCompany(id) {
     let list = JSON.parse(localStorage.getItem("company")) || [];
     let Activation="Active"
                    
        for (let i = 0; i < list.length; i++) {
            if (list[i].id == id) {
            (list[i].accountStatus)=Activation;
                      }
                    }
        localStorage.setItem("company", JSON.stringify(list));
    location.reload();
                    }



 function rejectExpert(id) {

     let list = JSON.parse(localStorage.getItem("expert")) || [];
     let Reject="Rejected"
                        
        for (let i = 0; i < list.length; i++) {
            if (list[i].id == id) {
            (list[i].accountStatus)=Reject;
                 }
                }
        localStorage.setItem("expert", JSON.stringify(list));
        location.reload();
                    }
        
        
        
        
        
function rejectCompany(id) {

    let list = JSON.parse(localStorage.getItem("company")) || [];
    let Reject="Rejected"
                            
        for (let i = 0; i < list.length; i++) {
          if (list[i].id == id) {
          (list[i].accountStatus)=Reject;
        }
        }
      localStorage.setItem("company", JSON.stringify(list));
      location.reload();
}
    //   <Delete Accept Reject , Company & Expert>     
    

        //  <Display Job offers Of companies>


    function displayJobC() {
        let jobOffers = JSON.parse(localStorage.getItem('CompanyJobOffer')) || []
    
        let html = ` <table id="cjobOffer">
        <thead>
        <tr>
            <th>Company</th>
            <th>Description</th>
            <th>Validity</th>
            <th class="text-right">Actions</th>
            
        </tr>
    </thead>
        `;
    
        for (i = 0; i < jobOffers.length; i++) {
    
            html += ` 
              <tbody>
              <tr>
              <td>${jobOffers[i].company}</td>
              <td>${jobOffers[i].description}</td>
              <td>${jobOffers[i].type}</td>
              <td class="text-right">
              <div class="actions">
              <a  data-toggle="modal" href="#reject_modal" onclick="viewOfferC(${jobOffers[i].id})"  class="btn btn btn-sm bg-info-light">
              <i class="fa fa-eye"></i> View
              </a>
              <a  data-toggle="modal" href="#delete_modal" onclick="deleteOfferC(${jobOffers[i].id})" class="btn btn-sm bg-danger-light">
                  <i class="fe fe-trash"></i> Delete
              </a>
          </div>
              
                </td> 
                </tr>
                </tbody>
                `;
                
        }
        document.getElementById("cjobOffer").innerHTML = html
    }


    function displayJobE() {
        let jobOffers = JSON.parse(localStorage.getItem('ExpertJobOffer')) || []
    
        let html = ` <table id="ejobOffer">
        <thead>
        <tr>
              <th>Expert</th>
              <th>Description</th>
              <th>Validity</th>
              <th class="text-right">Actions</th>
            
        </tr>
    </thead>
        `;
    
        for (i = 0; i < jobOffers.length; i++) {
    
            html += ` 
              <tbody>
              <tr>
              <td>${jobOffers[i].expert}</td>
              <td>${jobOffers[i].description}</td>
              <td>${jobOffers[i].type}</td>
              <td class="text-right">
              <div class="actions">
              <a  data-toggle="modal" href="#reject_modal" onclick="viewOfferE(${jobOffers[i].id})"  class="btn btn btn-sm bg-info-light">
              <i class="fa fa-eye"></i> View
              </a>
              <a  data-toggle="modal" href="#delete_modal" onclick="deleteOfferE(${jobOffers[i].id})" class="btn btn-sm bg-danger-light">
                  <i class="fe fe-trash"></i> Delete
              </a>
          </div>
              
                </td> 
                </tr>
                </tbody>
                `;
                
        }
        document.getElementById("ejobOffer").innerHTML = html
    }


    function deleteOfferE(id) {
        let list = JSON.parse(localStorage.getItem("ExpertJobOffer")) || [];
      
        
        for (let i = 0; i < list.length; i++) {
          if (list[i].id == id) {
            
              list.splice(i, 1);
          }
        }
    localStorage.setItem("ExpertJobOffer", JSON.stringify(list));
    location.reload();
        }



        function deleteOfferC(id) {
            let list = JSON.parse(localStorage.getItem("CompanyJobOffer")) || [];
          
            
            for (let i = 0; i < list.length; i++) {
              if (list[i].id == id) {
                
                  list.splice(i, 1);
              }
            }
        localStorage.setItem("CompanyJobOffer", JSON.stringify(list));
        location.reload();
            }


            


            