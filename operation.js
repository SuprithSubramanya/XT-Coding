(function(){
        
  function createNode(element) {
      return document.createElement(element);
  }
  function append(parent, el) {
    return parent.appendChild(el);
  }
  const url ='https://api.spacexdata.com/v3/launches?limit=100';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    //Side year display, without repetation
    console.log(data.land_success);
    const uniqueYear = Array.from(new Set(data.map(a => a.launch_year))).map(id => {
      return data.find(a => a.launch_year === id)
  })
        
  for(let i=0;i<uniqueYear.length;i++) // to display all the year
    {
      var SidefilterVariable = document.getElementById("Filter");
      var blockSecbuttonDiv = document.createElement("div");
        var blockSecbutton = document.createElement("button");
        blockSecbutton.value=uniqueYear[i].launch_year;
        blockSecbutton.type="button";
        blockSecbutton.innerHTML=uniqueYear[i].launch_year;
        blockSecbutton.className="buttonShape";
        blockSecbutton.id=uniqueYear[i].launch_year;
        copyId = blockSecbutton.id;
        blockSecbutton.onclick = getFinalValue;
        SidefilterVariable.append(blockSecbutton);
    }    
  //To filter depending on search
  function getFinalValue(){
      let DataStatus = 0;
        let allData2006 = data.filter(a => a.launch_year === this.id);
          var Sidefilter = document.getElementById("PostSection");
            Sidefilter.innerHTML = '';
              for(let j = 0; j<allData2006.length;j++){
                  if(DataStatus === 0){
                        var sideDiv = document.createElement("div");
                        sideDiv.className="sideDivStyle";
                        var sideParaImg = document.createElement("img");
                        sideParaImg.className="sideParaImage";
                        sideParaImg.src=allData2006[j].links.mission_patch;
                        var anchor = document.createElement('a');
                        anchor.className="anchorStyle";
                        anchor.href=allData2006[j].links.wikipedia;
                        var sideParaMission = document.createElement("p");
                        sideParaMission.className="sideParaStyleSucess";
                        sideParaMission.innerHTML=allData2006[j].mission_name;
                        var sideParaFlight = document.createElement("p");
                        sideParaFlight.className="sideParaStyleSucess";
                        sideParaFlight.innerHTML="#" + allData2006[j].flight_number;
                        var sideParaMissionId = document.createElement("ul");
                        sideParaMissionId.className="styleUL";
                        sideParaMissionId.innerHTML="Mission Ids:"
                        sideParaMission.className="sideParaStyleSucessList";
                        var sideParaMissionIdEle = document.createElement("li");
                        sideParaMissionIdEle.className="sideParaMissionIdEleLI"
                            if(allData2006[j].mission_id == ""){
                              sideParaMissionIdEle.innerHTML="{List mission Id}";
                            }
                            else{
                              sideParaMissionIdEle.innerHTML=allData2006[j].mission_id;
                            }
                        sideDivSupport = document.createElement("div");
                        var sideParaMissionLaunchYear = document.createElement("span");
                        sideParaMissionLaunchYear.className="sideParaStyleSucessPara";
                        sideParaMissionLaunchYear.innerHTML="Launch Year:";
                        var sideParaMissionLaunchYearVal = document.createElement("span");
                        // sideParaMissionLaunchYearVal.className="sideParaStyleSucessSpan";               
                        sideParaMissionLaunchYearVal.innerHTML=allData2006[j].launch_year;
                        sideDivSupport1 = document.createElement("div");
                        sideDivSupport1.className="SupportDiv";
                        var sideParaMissionLaunchSuccess = document.createElement("p");
                        sideParaMissionLaunchSuccess.className="sideParaStyleSucessPara";
                        sideParaMissionLaunchSuccess.innerHTML="Successful Launch:";
                        var sideParaMissionLaunchSuccessVal = document.createElement("span");
                        sideParaMissionLaunchSuccessVal.className="sideParaStyleSucessSpan";
                        sideParaMissionLaunchSuccessVal.innerHTML=allData2006[j].launch_success;      
                        sideDivSupport2 = document.createElement("div");
                        sideDivSupport2.className="SupportDivLanding";
                        var sideParaMissionLandSuccess = document.createElement("p");
                        sideParaMissionLandSuccess.className="sideParaStyleSucessPara";
                        sideParaMissionLandSuccess.innerHTML="Successful Landing:";
                        var sideParaMissionLandSuccessVal = document.createElement("span");
                        sideParaMissionLandSuccessVal.className="sideParaStyleSucessSpan";
                            if(allData2006[j].land_success === undefined){
                              sideParaMissionLandSuccessVal.innerHTML="{Launch_landing}";
                            }
                            else{
                              sideParaMissionLandSuccessVal.innerHTML=allData2006[j].land_success;
                            }
                        Sidefilter.append(sideDiv);
                        sideDiv.append(sideParaImg);
                        sideDiv.append(anchor);
                        anchor.append(sideParaMission);
                        anchor.append(sideParaFlight);
                        sideDiv.append(sideParaMissionId);
                        sideDiv.append(sideParaMissionIdEle);
                        sideDiv.append(sideDivSupport)
                        sideDivSupport.append(sideParaMissionLaunchYear);
                        sideDivSupport.append(sideParaMissionLaunchYearVal);
                        sideDiv.append(sideDivSupport1);
                        sideDivSupport1.append(sideParaMissionLaunchSuccess);
                        sideDivSupport1.append(sideParaMissionLaunchSuccessVal);
                        sideDiv.append(sideDivSupport2);
                        sideDivSupport2.append(sideParaMissionLandSuccess);
                        sideDivSupport2.append(sideParaMissionLandSuccessVal);
                        DataStatus = 1;
                      }                                   
                  else{
                        var sideDiv = document.createElement("div");
                        sideDiv.className="sideDivStyle";
                        var sideParaImg = document.createElement("img");
                        sideParaImg.className="sideParaImage";
                        sideParaImg.innerHTML ="";
                        var sideDiv = document.createElement("div");
                        sideDiv.className="sideDivStyle";
                        var sideParaImg = document.createElement("img");
                        sideParaImg.className="sideParaImage";
                        sideParaImg.src=allData2006[j].links.mission_patch;
                        var anchor = document.createElement('a');
                        anchor.className="anchorStyle";
                        anchor.href=allData2006[j].links.wikipedia;
                        var sideParaMission = document.createElement("p");
                        sideParaMission.className="sideParaStyleSucess";
                        sideParaMission.innerHTML=allData2006[j].mission_name;
                        var sideParaFlight = document.createElement("p");
                        sideParaFlight.className="sideParaStyleSucess";
                        sideParaFlight.innerHTML="#" + allData2006[j].flight_number;
                        var sideParaMissionId = document.createElement("ul");
                        sideParaMissionId.className="styleUL";
                        sideParaMissionId.innerHTML="Mission Ids:"
                        sideParaMission.className="sideParaStyleSucessList";
                        var sideParaMissionIdEle = document.createElement("li");
                        sideParaMissionIdEle.className="sideParaMissionIdEleLI"
                            if(allData2006[j].mission_id == ""){
                                    sideParaMissionIdEle.innerHTML="{List mission Id}";
                                  }
                            else{
                                    sideParaMissionIdEle.innerHTML=allData2006[j].mission_id;
                                  }
                        sideDivSupport = document.createElement("div");
                        sideDivSupport.className="LauchDetails";
                        var sideParaMissionLaunchYear = document.createElement("span");
                        sideParaMissionLaunchYear.className="sideParaStyleSucessPara";
                        sideParaMissionLaunchYear.innerHTML="Launch Year:";
                        var sideParaMissionLaunchYearVal = document.createElement("span");
                        // sideParaMissionLaunchYearVal.className="sideParaStyleSucessSpan";
                        sideParaMissionLaunchYearVal.innerHTML=allData2006[j].launch_year;
                        sideDivSupport1 = document.createElement("div");
                        sideDivSupport1.className="SupportDiv";
                        var sideParaMissionLaunchSuccess = document.createElement("p");
                        sideParaMissionLaunchSuccess.className="sideParaStyleSucessPara";
                        sideParaMissionLaunchSuccess.innerHTML="Successful Launch:";
                        var sideParaMissionLaunchSuccessVal = document.createElement("span");
                        sideParaMissionLaunchSuccessVal.className="sideParaStyleSucessSpan";
                        sideParaMissionLaunchSuccessVal.innerHTML=allData2006[j].launch_success;  
                        sideDivSupport2 = document.createElement("div");
                        sideDivSupport2.className="SupportDivLanding";
                        var sideParaMissionLandSuccess = document.createElement("p");
                        sideParaMissionLandSuccess.className="sideParaStyleSucessPara";
                        sideParaMissionLandSuccess.innerHTML="Successful Landing:";
                        var sideParaMissionLandSuccessVal = document.createElement("span");
                        sideParaMissionLandSuccessVal.className="sideParaStyleSucessSpan";
                            if(allData2006[j].land_success === undefined){
                                    sideParaMissionLandSuccessVal.innerHTML="{Launch_landing}";
                                  }
                            else{
                                    sideParaMissionLandSuccessVal.innerHTML=allData2006[j].land_success;
                                  }
                        Sidefilter.append(sideDiv);
                        sideDiv.append(sideParaImg);
                        sideDiv.append(anchor);
                        anchor.append(sideParaMission);
                        anchor.append(sideParaFlight);
                        sideDiv.append(sideParaMissionId);
                        sideDiv.append(sideParaMissionIdEle);
                        sideDiv.append(sideDivSupport);
                        sideDivSupport.append(sideParaMissionLaunchYear);
                        sideDivSupport.append(sideParaMissionLaunchYearVal);
                        sideDiv.append(sideDivSupport1);
                        sideDivSupport1.append(sideParaMissionLaunchSuccess);
                        sideDivSupport1.append(sideParaMissionLaunchSuccessVal);
                        sideDiv.append(sideDivSupport2);
                        sideDivSupport2.append(sideParaMissionLandSuccess);
                        sideDivSupport2.append(sideParaMissionLandSuccessVal);
                      }          
                    }//For loop
                  }// function loop

//To create Successfull Launch button
  var SidefilterVariable = document.getElementById("successfullLaunch");
  var launchSecbuttonTrue = document.createElement("button");
  var launchSecbuttonFalse = document.createElement("button");
  launchSecbuttonTrue.value="True";
  launchSecbuttonFalse.value="false";
  launchSecbuttonTrue.type="button";
  launchSecbuttonFalse.type="button";
  launchSecbuttonTrue.innerHTML="True";
  launchSecbuttonFalse.innerHTML="False";
  launchSecbuttonTrue.id="buttonTrueLaunch";
  launchSecbuttonFalse.id="buttonFalseLaunch";
  launchSecbuttonTrue.onclick = getFinalTrue;
  launchSecbuttonFalse.onclick = getFinalFalse;
  launchSecbuttonTrue.className="buttonShape"
  launchSecbuttonFalse.className="buttonShape"
  SidefilterVariable.append(launchSecbuttonTrue);
  SidefilterVariable.append(launchSecbuttonFalse);

//To create Successfull Landing button
  var SidefilterVariable = document.getElementById("successfullLanding");
  var launchSecbuttonTrue = document.createElement("button");
  var launchSecbuttonFalse = document.createElement("button");
  launchSecbuttonTrue.value="True";
  launchSecbuttonFalse.value="false";
  launchSecbuttonTrue.type="button";
  launchSecbuttonFalse.type="button";
  launchSecbuttonTrue.innerHTML="True";
  launchSecbuttonFalse.innerHTML="False";
  launchSecbuttonTrue.id="buttonTrue";
  launchSecbuttonFalse.id="buttonFalse";
  //launchSecbuttonTrue.onclick = getFinalLandingTrue;
  //launchSecbuttonFalse.onclick = getFinalLandingFalse;
  launchSecbuttonTrue.className="buttonShape"
  launchSecbuttonFalse.className="buttonShape"
  SidefilterVariable.append(launchSecbuttonTrue);
  SidefilterVariable.append(launchSecbuttonFalse);
            
  // function to check launch true or false
  function getFinalTrue(){
    let DataStatus = 0;
      let launchTrue = data.filter(a => a.launch_success === true);
        let buttonClickedTrue = document.getElementById('buttonTrueLaunch').value;
          let buttonClickedFalse = document.getElementById('buttonFalseLaunch').value;
            var Sidefilter = document.getElementById("PostSection");
              Sidefilter.innerHTML = '';
                for(let j = 0; j<launchTrue.length;j++){
                    if(DataStatus === 0){
                        var sideDiv = document.createElement("div");
                        sideDiv.className="sideDivStyle";
                        var sideParaImg = document.createElement("img");
                        sideParaImg.className="sideParaImage";
                        sideParaImg.src=launchTrue[j].links.mission_patch;
                        var anchor = document.createElement('a');
                        anchor.className="anchorStyle";
                        anchor.href=launchTrue[j].links.wikipedia;
                        var sideParaMission = document.createElement("p");
                        sideParaMission.className="sideParaStyleSucess";
                        sideParaMission.innerHTML=launchTrue[j].mission_name;
                        var sideParaFlight = document.createElement("p");
                        sideParaFlight.className="sideParaStyleSucess";
                        sideParaFlight.innerHTML="#" + launchTrue[j].flight_number;
                        var sideParaMissionId = document.createElement("ul");
                        sideParaMissionId.className="styleUL";
                        sideParaMissionId.innerHTML="Mission Ids:"
                        sideParaMission.className="sideParaStyleSucessList";
                        var sideParaMissionIdEle = document.createElement("li");
                        sideParaMissionIdEle.className="sideParaMissionIdEleLI"
                            if(launchTrue[j].mission_id == ""){
                              sideParaMissionIdEle.innerHTML="{List mission Id}";
                            }
                            else{
                              sideParaMissionIdEle.innerHTML=launchTrue[j].mission_id;
                            }
                        sideDivSupport = document.createElement("div");
                        var sideParaMissionLaunchYear = document.createElement("span");
                        sideParaMissionLaunchYear.className="sideParaStyleSucessPara";
                        sideParaMissionLaunchYear.innerHTML="Launch Year:";
                        var sideParaMissionLaunchYearVal = document.createElement("span");
                        // sideParaMissionLaunchYearVal.className="sideParaStyleSucessSpan";               
                        sideParaMissionLaunchYearVal.innerHTML=launchTrue[j].launch_year;
                        sideDivSupport1 = document.createElement("div");
                        sideDivSupport1.className="SupportDiv";
                        var sideParaMissionLaunchSuccess = document.createElement("p");
                        sideParaMissionLaunchSuccess.className="sideParaStyleSucessPara";
                        sideParaMissionLaunchSuccess.innerHTML="Successful Launch:";
                        var sideParaMissionLaunchSuccessVal = document.createElement("span");
                        sideParaMissionLaunchSuccessVal.className="sideParaStyleSucessSpan";
                        sideParaMissionLaunchSuccessVal.innerHTML=launchTrue[j].launch_success;      
                        sideDivSupport2 = document.createElement("div");
                        sideDivSupport2.className="SupportDivLanding";
                        var sideParaMissionLandSuccess = document.createElement("p");
                        sideParaMissionLandSuccess.className="sideParaStyleSucessPara";
                        sideParaMissionLandSuccess.innerHTML="Successful Landing:";
                        var sideParaMissionLandSuccessVal = document.createElement("span");
                        sideParaMissionLandSuccessVal.className="sideParaStyleSucessSpan";
                            if(launchTrue[j].land_success === undefined){
                              sideParaMissionLandSuccessVal.innerHTML="{Launch_landing}";
                            }
                            else{
                              sideParaMissionLandSuccessVal.innerHTML=launchTrue[j].land_success;
                            }
                        Sidefilter.append(sideDiv);
                        sideDiv.append(sideParaImg);
                        sideDiv.append(anchor);
                        anchor.append(sideParaMission);
                        anchor.append(sideParaFlight);
                        sideDiv.append(sideParaMissionId);
                        sideDiv.append(sideParaMissionIdEle);
                        sideDiv.append(sideDivSupport)
                        sideDivSupport.append(sideParaMissionLaunchYear);
                        sideDivSupport.append(sideParaMissionLaunchYearVal);
                        sideDiv.append(sideDivSupport1);
                        sideDivSupport1.append(sideParaMissionLaunchSuccess);
                        sideDivSupport1.append(sideParaMissionLaunchSuccessVal);
                        sideDiv.append(sideDivSupport2);
                        sideDivSupport2.append(sideParaMissionLandSuccess);
                        sideDivSupport2.append(sideParaMissionLandSuccessVal);
                        DataStatus = 1;
                  }                                   
                  else{
                        var sideDiv = document.createElement("div");
                        sideDiv.className="sideDivStyle";
                        var sideParaImg = document.createElement("img");
                        sideParaImg.className="sideParaImage";
                        sideParaImg.innerHTML ="";
                        var sideDiv = document.createElement("div");
                        sideDiv.className="sideDivStyle";
                        var sideParaImg = document.createElement("img");
                        sideParaImg.className="sideParaImage";
                        sideParaImg.src=launchTrue[j].links.mission_patch;
                        var anchor = document.createElement('a');
                        anchor.className="anchorStyle";
                        anchor.href=launchTrue[j].links.wikipedia;
                        var sideParaMission = document.createElement("p");
                        sideParaMission.className="sideParaStyleSucess";
                        sideParaMission.innerHTML=launchTrue[j].mission_name;
                        var sideParaFlight = document.createElement("p");
                        sideParaFlight.className="sideParaStyleSucess";
                        sideParaFlight.innerHTML="#" + launchTrue[j].flight_number;
                        var sideParaMissionId = document.createElement("ul");
                        sideParaMissionId.className="styleUL";
                        sideParaMissionId.innerHTML="Mission Ids:"
                        sideParaMission.className="sideParaStyleSucessList";
                        var sideParaMissionIdEle = document.createElement("li");
                        sideParaMissionIdEle.className="sideParaMissionIdEleLI"
                            if(launchTrue[j].mission_id == ""){
                                    sideParaMissionIdEle.innerHTML="{List mission Id}";
                                  }
                            else{
                                    sideParaMissionIdEle.innerHTML=launchTrue[j].mission_id;
                                  }
                        sideDivSupport = document.createElement("div");
                        var sideParaMissionLaunchYear = document.createElement("span");
                        sideParaMissionLaunchYear.className="sideParaStyleSucessPara";
                        sideParaMissionLaunchYear.innerHTML="Launch Year:";
                        var sideParaMissionLaunchYearVal = document.createElement("span");
                        // sideParaMissionLaunchYearVal.className="sideParaStyleSucessSpan";
                        sideParaMissionLaunchYearVal.innerHTML=launchTrue[j].launch_year;
                        sideDivSupport1 = document.createElement("div");
                        sideDivSupport1.className="SupportDiv";
                        var sideParaMissionLaunchSuccess = document.createElement("p");
                        sideParaMissionLaunchSuccess.className="sideParaStyleSucessPara";
                        sideParaMissionLaunchSuccess.innerHTML="Successful Launch:";
                        var sideParaMissionLaunchSuccessVal = document.createElement("span");
                        sideParaMissionLaunchSuccessVal.className="sideParaStyleSucessSpan";
                        sideParaMissionLaunchSuccessVal.innerHTML=launchTrue[j].launch_success;  
                        sideDivSupport2 = document.createElement("div");
                        sideDivSupport2.className="SupportDivLanding";
                        var sideParaMissionLandSuccess = document.createElement("p");
                        sideParaMissionLandSuccess.className="sideParaStyleSucessPara";
                        sideParaMissionLandSuccess.innerHTML="Successful Landing:";
                        var sideParaMissionLandSuccessVal = document.createElement("span");
                        sideParaMissionLandSuccessVal.className="sideParaStyleSucessSpan";
                          if(launchTrue[j].land_success === undefined){
                                  sideParaMissionLandSuccessVal.innerHTML="{Launch_landing}";
                                }
                          else{
                                  sideParaMissionLandSuccessVal.innerHTML=launchTrue[j].land_success;
                                }
                        Sidefilter.append(sideDiv);
                        sideDiv.append(sideParaImg);
                        sideDiv.append(anchor);
                        anchor.append(sideParaMission);
                        anchor.append(sideParaFlight);
                        sideDiv.append(sideParaMissionId);
                        sideDiv.append(sideParaMissionIdEle);
                        sideDiv.append(sideDivSupport);
                        sideDivSupport.append(sideParaMissionLaunchYear);
                        sideDivSupport.append(sideParaMissionLaunchYearVal);
                        sideDiv.append(sideDivSupport1);
                        sideDivSupport1.append(sideParaMissionLaunchSuccess);
                        sideDivSupport1.append(sideParaMissionLaunchSuccessVal);
                        sideDiv.append(sideDivSupport2);
                        sideDivSupport2.append(sideParaMissionLandSuccess);
                        sideDivSupport2.append(sideParaMissionLandSuccessVal);
                  }          
              }
          } 
function getFinalFalse(){
  let DataStatus = 0;
    let launchTrue = data.filter(a => a.launch_success === false);
      let buttonClickedTrue = document.getElementById('buttonTrueLaunch').value;
        let buttonClickedFalse = document.getElementById('buttonFalseLaunch').value;
          var Sidefilter = document.getElementById("PostSection");
            Sidefilter.innerHTML = '';
              for(let j = 0; j<launchTrue.length;j++){
                  if(DataStatus === 0){
                        var sideDiv = document.createElement("div");
                        sideDiv.className="sideDivStyle";
                        var sideParaImg = document.createElement("img");
                        sideParaImg.className="sideParaImage";
                        sideParaImg.src=launchTrue[j].links.mission_patch;
                        var anchor = document.createElement('a');
                        anchor.className="anchorStyle";
                        anchor.href=launchTrue[j].links.wikipedia;
                        var sideParaMission = document.createElement("p");
                        sideParaMission.className="sideParaStyleSucess";
                        sideParaMission.innerHTML=launchTrue[j].mission_name;
                        var sideParaFlight = document.createElement("p");
                        sideParaFlight.className="sideParaStyleSucess";
                        sideParaFlight.innerHTML="#" + launchTrue[j].flight_number;
    
                        var sideParaMissionId = document.createElement("ul");
                        sideParaMissionId.className="styleUL";
                        sideParaMissionId.innerHTML="Mission Ids:"
                        sideParaMission.className="sideParaStyleSucessList";
                        var sideParaMissionIdEle = document.createElement("li");
                        sideParaMissionIdEle.className="sideParaMissionIdEleLI"
                            if(launchTrue[j].mission_id == ""){
                              sideParaMissionIdEle.innerHTML="{List mission Id}";
                            }
                            else{
                              sideParaMissionIdEle.innerHTML=launchTrue[j].mission_id;
                            }
                        sideDivSupport = document.createElement("div");
                        var sideParaMissionLaunchYear = document.createElement("span");
                        sideParaMissionLaunchYear.className="sideParaStyleSucessPara";
                        sideParaMissionLaunchYear.innerHTML="Launch Year:";
                        var sideParaMissionLaunchYearVal = document.createElement("span");
                        // sideParaMissionLaunchYearVal.className="sideParaStyleSucessSpan";               
                        sideParaMissionLaunchYearVal.innerHTML=launchTrue[j].launch_year;
                        sideDivSupport1 = document.createElement("div");
                        sideDivSupport1.className="SupportDiv";
                        var sideParaMissionLaunchSuccess = document.createElement("p");
                        sideParaMissionLaunchSuccess.className="sideParaStyleSucessPara";
                        sideParaMissionLaunchSuccess.innerHTML="Successful Launch:";
                        var sideParaMissionLaunchSuccessVal = document.createElement("span");
                        sideParaMissionLaunchSuccessVal.className="sideParaStyleSucessSpan";
                        sideParaMissionLaunchSuccessVal.innerHTML=launchTrue[j].launch_success;      
                        sideDivSupport2 = document.createElement("div");
                        sideDivSupport2.className="SupportDiv";
                        var sideParaMissionLandSuccess = document.createElement("p");
                        sideParaMissionLandSuccess.className="sideParaStyleSucessPara";
                        sideParaMissionLandSuccess.innerHTML="Successful Landing:";
                        var sideParaMissionLandSuccessVal = document.createElement("span");
                        sideParaMissionLandSuccessVal.className="sideParaStyleSucessSpan";
                            if(launchTrue[j].land_success === undefined){
                              sideParaMissionLandSuccessVal.innerHTML="{Launch_landing}";
                            }
                            else{
                              sideParaMissionLandSuccessVal.innerHTML=launchTrue[j].land_success;
                            }
                        Sidefilter.append(sideDiv);
                        sideDiv.append(sideParaImg);
                        sideDiv.append(anchor);
                        anchor.append(sideParaMission);
                        anchor.append(sideParaFlight);
                        sideDiv.append(sideParaMissionId);
                        sideDiv.append(sideParaMissionIdEle);
                        sideDiv.append(sideDivSupport)
                        sideDivSupport.append(sideParaMissionLaunchYear);
                        sideDivSupport.append(sideParaMissionLaunchYearVal);
                        sideDiv.append(sideDivSupport1);
                        sideDivSupport1.append(sideParaMissionLaunchSuccess);
                        sideDivSupport1.append(sideParaMissionLaunchSuccessVal);
                        sideDiv.append(sideDivSupport2);
                        sideDivSupport2.append(sideParaMissionLandSuccess);
                        sideDivSupport2.append(sideParaMissionLandSuccessVal);
                        DataStatus = 1;
                  }                                   
                  else{
                        var sideDiv = document.createElement("div");
                        sideDiv.className="sideDivStyle";
                        var sideParaImg = document.createElement("img");
                        sideParaImg.className="sideParaImage";
                        sideParaImg.innerHTML ="";
                        var sideDiv = document.createElement("div");
                        sideDiv.className="sideDivStyle";
                        var sideParaImg = document.createElement("img");
                        sideParaImg.className="sideParaImage";
                        sideParaImg.src=launchTrue[j].links.mission_patch;
                        var anchor = document.createElement('a');
                        anchor.className="anchorStyle";
                        anchor.href=launchTrue[j].links.wikipedia;
                        var sideParaMission = document.createElement("p");
                        sideParaMission.className="sideParaStyleSucess";
                        sideParaMission.innerHTML=launchTrue[j].mission_name;
                        var sideParaFlight = document.createElement("p");
                        sideParaFlight.className="sideParaStyleSucess";
                        sideParaFlight.innerHTML="#" + launchTrue[j].flight_number;
                        var sideParaMissionId = document.createElement("ul");
                        sideParaMissionId.className="styleUL";
                        sideParaMissionId.innerHTML="Mission Ids:"
                        sideParaMission.className="sideParaStyleSucessList";
                        var sideParaMissionIdEle = document.createElement("li");
                        sideParaMissionIdEle.className="sideParaMissionIdEleLI"
                          if(launchTrue[j].mission_id == ""){
                                  sideParaMissionIdEle.innerHTML="{List mission Id}";
                                }
                          else{
                                  sideParaMissionIdEle.innerHTML=launchTrue[j].mission_id;
                                }
                        sideDivSupport = document.createElement("div");
                        var sideParaMissionLaunchYear = document.createElement("span");
                        sideParaMissionLaunchYear.className="sideParaStyleSucessPara";
                        sideParaMissionLaunchYear.innerHTML="Launch Year:";
                        var sideParaMissionLaunchYearVal = document.createElement("span");
                        // sideParaMissionLaunchYearVal.className="sideParaStyleSucessSpan";
                        sideParaMissionLaunchYearVal.innerHTML=launchTrue[j].launch_year;
                        sideDivSupport1 = document.createElement("div");
                        sideDivSupport1.className="SupportDiv";
                        var sideParaMissionLaunchSuccess = document.createElement("p");
                        sideParaMissionLaunchSuccess.className="sideParaStyleSucessPara";
                        sideParaMissionLaunchSuccess.innerHTML="Successful Launch:";
                        var sideParaMissionLaunchSuccessVal = document.createElement("span");
                        sideParaMissionLaunchSuccessVal.className="sideParaStyleSucessSpan";
                        sideParaMissionLaunchSuccessVal.innerHTML=launchTrue[j].launch_success;                          
                        sideDivSupport2 = document.createElement("div");
                        sideDivSupport2.className="SupportDiv";
                        var sideParaMissionLandSuccess = document.createElement("p");
                        sideParaMissionLandSuccess.className="sideParaStyleSucessPara";
                        sideParaMissionLandSuccess.innerHTML="Successful Landing:";
                        var sideParaMissionLandSuccessVal = document.createElement("span");
                        sideParaMissionLandSuccessVal.className="sideParaStyleSucessSpan";
                          if(launchTrue[j].land_success === undefined){
                                  sideParaMissionLandSuccessVal.innerHTML="{Launch_landing}";
                                }
                          else{
                                  sideParaMissionLandSuccessVal.innerHTML=launchTrue[j].land_success;
                                }
                        Sidefilter.append(sideDiv);
                        sideDiv.append(sideParaImg);
                        sideDiv.append(anchor);
                        anchor.append(sideParaMission);
                        anchor.append(sideParaFlight);
                        sideDiv.append(sideParaMissionId);
                        sideDiv.append(sideParaMissionIdEle);
                        sideDiv.append(sideDivSupport);
                        sideDivSupport.append(sideParaMissionLaunchYear);
                        sideDivSupport.append(sideParaMissionLaunchYearVal);
                        sideDiv.append(sideDivSupport1);
                        sideDivSupport1.append(sideParaMissionLaunchSuccess);
                        sideDivSupport1.append(sideParaMissionLaunchSuccessVal);
                        sideDiv.append(sideDivSupport2);
                        sideDivSupport2.append(sideParaMissionLandSuccess);
                        sideDivSupport2.append(sideParaMissionLandSuccessVal);
                  }          
              }
          }  
        })
        .catch(function(error) {
          console.log(error);
        }); 
  }
)();


