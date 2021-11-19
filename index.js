function autocomplete(inp, arr) {
  
  var currentFocus;
  
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
  
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
  
      this.parentNode.appendChild(a);
      
      for (i = 0; i < arr.length; i++) {
        
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
         
          b = document.createElement("DIV");
         
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          
          b.addEventListener("click", function(e) {
              
              inp.value = this.getElementsByTagName("input")[0].value;

              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        
        currentFocus++;
       
        addActive(x);
      } else if (e.keyCode == 38) { //up
        
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
       
        e.preventDefault();
        if (currentFocus > -1) {
         
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
  
    if (!x) return false;
    
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
   
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
   
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

var data = ["Allergy & Immunology","Anatomic & Clinical Pathology","Anesthesiology","Bariatric Surgery","Cardiology","Critical Care","Demtisty*","Dermatology","Emergency Medicine","Endocrimology","ENT","Gastroenterology","General Surgery","Internal Medicine & Diabetology","Nephrology","Neurosciences","Obstetric & Gynacology","Opthalmology","Oncology","Orthopadics","Physiotherapy","Plastic Surgery","Psychiatry","Radiology","Urology"];

autocomplete(document.getElementById("myInput"), data);

function clicked(){

  document.getElementById("docs").style.display="flex";

  let dept=document.getElementById("myInput").value;
  console.log(dept)
  let docs={
    "Allergy & Immunology":{
      "doc1":{
        "name":"demo1",
        "des":"demo..1",
        "exp":"20years demo1",
        
      },
      "doc2":{
        "name":"demo2",
        "des":"demo..2",
        "exp":"20years demo2",
        
      },
      "doc3":{
        "name":"demo3",
        "des":"demo..3",
        "exp":"20years demo3",
        
      }
    },
    "Anatomic & Clinical Pathology":{
      "doc1":{
        "name":"demo11",
        "des":"demo..11",
        "exp":"20years demo11",
        
      },
      "doc2":{
        "name":"demo21",
        "des":"demo..21",
        "exp":"20years demo21",
        
      },
      "doc3":{
        "name":"demo31",
        "des":"demo..31",
        "exp":"20years demo31",
        
      }
    }

  }

  let det="\n DOCTOR NAME : "+docs[dept]["doc1"]["name"]+"\n"+docs[dept]["doc1"]["des"]+"\n"+docs[dept]["doc1"]["exp"]+"years exp\n";
  document.getElementById("details").innerText=det;
  

}