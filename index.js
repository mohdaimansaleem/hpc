function autocomplete(inp, arr) {

  var currentFocus;

  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;
    closeAllLists();
    if (!val) { return false; }
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

        b.addEventListener("click", function (e) {

          inp.value = this.getElementsByTagName("input")[0].value;

          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });

  inp.addEventListener("keydown", function (e) {
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

var data = ["Allergy & Immunology", "Anatomic & Clinical Pathology", "Anesthesiology", "Bariatric Surgery", "Cardiology", "Critical Care", "Dentisty", "Dermatology", "Emergency Medicine", "Endocrinology", "ENT", "Gastroenterology", "General Surgery", "Internal Medicine & Diabetology", "Nephrology", "Neurosciences", "Obstetric & Gynacology", "Opthalmology", "Oncology", "Orthopedics", "Physiotherapy", "Plastic Surgery", "Psychiatry", "Radiology", "Urology"];

autocomplete(document.getElementById("myInput"), data);
let det1, det2, det3, dept;
let text = "\n\nENTER DATA";
var token = -1;

function clicked() {

  document.getElementById("docs").style.display = "flex";

  dept = document.getElementById("myInput").value;

  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if (element === dept) {
      token = 0;
      break;
    }

  }


  let docs = {
    "Allergy & Immunology": {
      "doc1": {
        "name": "demo1",
        "des": "demo..1",
        "exp": "20years demo1",
        "room": "01",
      },
      "doc2": {
        "name": "demo2",
        "des": "demo..2",
        "exp": "20years demo2",
        "room": "02",
      },
      "doc3": {
        "name": "demo3",
        "des": "demo..3",
        "exp": "20years demo3",
        "room": "03",
      }
    },
    "Anatomic & Clinical Pathology": {
      "doc1": {
        "name": "demo11",
        "des": "demo..11",
        "exp": "20years demo11",
        "room": "04",
      },
      "doc2": {
        "name": "demo21",
        "des": "demo..21",
        "exp": "20years demo21",
        "room": "05",
      },
      "doc3": {
        "name": "demo31",
        "des": "demo..31",
        "exp": "20years demo31",
        "room": "06",
      }
    },
    "Anesthesiology": {
      "doc1": {
        "name": "demo12",
        "des": "demo..12",
        "exp": "20years demo12",
        "room": "07",
      },
      "doc2": {
        "name": "demo22",
        "des": "demo..22",
        "exp": "20years demo22",
        "room": "08",
      },
      "doc3": {
        "name": "demo32",
        "des": "demo..32",
        "exp": "20years demo32",
        "room": "09",
      }
    },
    "Bariatric Surgery": {
      "doc1": {
        "name": "demo13",
        "des": "demo..13",
        "exp": "20years demo13",
        "room": "10",
      },
      "doc2": {
        "name": "demo23",
        "des": "demo..23",
        "exp": "20years demo23",
        "room": "11",
      },
      "doc3": {
        "name": "demo33",
        "des": "demo..33",
        "exp": "20years demo33",
        "room": "12",
      }
    },
    "Cardiology": {
      "doc1": {
        "name": "demo14",
        "des": "demo..14",
        "exp": "20years demo14",
        "room": "13",
      },
      "doc2": {
        "name": "demo24",
        "des": "demo..24",
        "exp": "20years demo24",
        "room": "14",
      },
      "doc3": {
        "name": "demo34",
        "des": "demo..34",
        "exp": "20years demo34",
        "room": "15",
      }
    },
    "Critical Care": {
      "doc1": {
        "name": "demo15",
        "des": "demo..15",
        "exp": "20years demo15",
        "room": "16",
      },
      "doc2": {
        "name": "demo25",
        "des": "demo..25",
        "exp": "20years demo25",
        "room": "17",
      },
      "doc3": {
        "name": "demo35",
        "des": "demo..35",
        "exp": "20years demo35",
        "room": "18",
      }
    },
    "Dentistry": {
      "doc1": {
        "name": "demo16",
        "des": "demo..16",
        "exp": "20years demo16",
        "room": "19",
      },
      "doc2": {
        "name": "demo26",
        "des": "demo..26",
        "exp": "20years demo26",
        "room": "20",
      },
      "doc3": {
        "name": "demo36",
        "des": "demo..36",
        "exp": "20years demo36",
        "room": "21",
      }
    },
    "Dermatology": {
      "doc1": {
        "name": "demo17",
        "des": "demo..17",
        "exp": "20years demo17",
        "room": "22",
      },
      "doc2": {
        "name": "demo27",
        "des": "demo..27",
        "exp": "20years demo27",
        "room": "23",
      },
      "doc3": {
        "name": "demo37",
        "des": "demo..37",
        "exp": "20years demo37",
        "room": "24",
      }
    },
    "Emergency Medicine": {
      "doc1": {
        "name": "demo18",
        "des": "demo..18",
        "exp": "20years demo18",
        "room": "25",
      },
      "doc2": {
        "name": "demo28",
        "des": "demo..28",
        "exp": "20years demo28",
        "room": "26",
      },
      "doc3": {
        "name": "demo38",
        "des": "demo..38",
        "exp": "20years demo38",
        "room": "27",
      }
    },
    "Endocrinology": {
      "doc1": {
        "name": "demo19",
        "des": "demo..19",
        "exp": "20years demo19",
        "room": "28",
      },
      "doc2": {
        "name": "demo29",
        "des": "demo..29",
        "exp": "20years demo29",
        "room": "29",
      },
      "doc3": {
        "name": "demo39",
        "des": "demo..39",
        "exp": "20years demo39",
        "room": "30",
      }
    },
    "ENT": {
      "doc1": {
        "name": "demo4",
        "des": "demo..4",
        "exp": "20years demo4",
        "room": "31",
      },
      "doc2": {
        "name": "demo5",
        "des": "demo..5",
        "exp": "20years demo5",
        "room": "32",
      },
      "doc3": {
        "name": "demo6",
        "des": "demo..6",
        "exp": "20years demo6",
        "room": "33",
      }
    },
    "Gastroenterology": {
      "doc1": {
        "name": "dem040",
        "des": "demo..40",
        "exp": "20years demo40",
        "room": "34",
      },
      "doc2": {
        "name": "demo50",
        "des": "demo..50",
        "exp": "20years demo50",
        "room": "35",
      },
      "doc3": {
        "name": "demo60",
        "des": "demo..60",
        "exp": "20years demo60",
        "room": "36",
      }
    },
    "General Surgery": {
      "doc1": {
        "name": "demo41",
        "des": "demo..41",
        "exp": "20years demo41",
        "room": "37",
      },
      "doc2": {
        "name": "demo51",
        "des": "demo..51",
        "exp": "20years demo51",
        "room": "38",
      },
      "doc3": {
        "name": "demo61",
        "des": "demo..61",
        "exp": "20years demo61",
        "room": "39",
      }
    },
    "Internal Medicine & Diabetology": {
      "doc1": {
        "name": "demo42",
        "des": "demo..42",
        "exp": "20years demo42",
        "room": "40",
      },
      "doc2": {
        "name": "demo52",
        "des": "demo..52",
        "exp": "20years demo52",
        "room": "41",
      },
      "doc3": {
        "name": "demo62",
        "des": "demo..62",
        "exp": "20years demo62",
        "room": "42",
      }
    },
    "Nephrology": {
      "doc1": {
        "name": "demo43",
        "des": "demo..43",
        "exp": "20years demo43",
        "room": "43",
      },
      "doc2": {
        "name": "demo53",
        "des": "demo..53",
        "exp": "20years demo53",
        "room": "44",
      },
      "doc3": {
        "name": "demo63",
        "des": "demo..63",
        "exp": "20years demo63",
        "room": "45",
      }
    },
    "Neurosciences": {
      "doc1": {
        "name": "demo44",
        "des": "demo..44",
        "exp": "20years demo44",
        "room": "46",
      },
      "doc2": {
        "name": "demo54",
        "des": "demo..54",
        "exp": "20years demo54",
        "room": "47",
      },
      "doc3": {
        "name": "demo64",
        "des": "demo..64",
        "exp": "20years demo64",
        "room": "48",
      }
    },
    "Obstetric & Gynacology": {
      "doc1": {
        "name": "demo45",
        "des": "demo..45",
        "exp": "20years demo45",
        "room": "49",
      },
      "doc2": {
        "name": "demo55",
        "des": "demo..55",
        "exp": "20years demo55",
        "room": "50",
      },
      "doc3": {
        "name": "demo65",
        "des": "demo..65",
        "exp": "20years demo65",
        "room": "51",
      }
    },
    "Opthamology": {
      "doc1": {
        "name": "demo46",
        "des": "demo..46",
        "exp": "20years demo46",
        "room": "52",
      },
      "doc2": {
        "name": "demo56",
        "des": "demo..56",
        "exp": "20years demo56",
        "room": "53",
      },
      "doc3": {
        "name": "demo66",
        "des": "demo..66",
        "exp": "20years demo66",
        "room": "54",
      }
    },
    "Oncology": {
      "doc1": {
        "name": "demo115",
        "des": "demo..115",
        "exp": "20years demo115",
        "room": "73",
      },
      "doc2": {
        "name": "demo216",
        "des": "demo..216",
        "exp": "20years demo216",
        "room": "74",
      },
      "doc3": {
        "name": "demo316",
        "des": "demo..316",
        "exp": "20years demo316",
        "room": "75",
      }
    },
    "Orthopedics": {
      "doc1": {
        "name": "demo47",
        "des": "demo..47",
        "exp": "20years demo47",
        "room": "55",
      },
      "doc2": {
        "name": "demo57",
        "des": "demo..57",
        "exp": "20years demo57",
        "room": "56",
      },
      "doc3": {
        "name": "demo67",
        "des": "demo..67",
        "exp": "20years demo67",
        "room": "57",
      }
    },
    "Physiotherapy": {
      "doc1": {
        "name": "demo48",
        "des": "demo..48",
        "exp": "20years demo48",
        "room": "58",
      },
      "doc2": {
        "name": "demo58",
        "des": "demo..58",
        "exp": "20years demo58",
        "room": "59",
      },
      "doc3": {
        "name": "demo68",
        "des": "demo..68",
        "exp": "20years demo68",
        "room": "60",
      }
    },
    "Plastic Surgery": {
      "doc1": {
        "name": "demo49",
        "des": "demo..49",
        "exp": "20years demo49",
        "room": "61",
      },
      "doc2": {
        "name": "demo59",
        "des": "demo..59",
        "exp": "20years demo59",
        "room": "62",
      },
      "doc3": {
        "name": "demo69",
        "des": "demo..69",
        "exp": "20years demo69",
        "room": "63",
      }
    },
    "Psychiatry": {
      "doc1": {
        "name": "dem111",
        "des": "demo..111",
        "exp": "20years demo111",
        "room": "64",
      },
      "doc2": {
        "name": "demo211",
        "des": "demo..211",
        "exp": "20years demo211",
        "room": "65",
      },
      "doc3": {
        "name": "demo311",
        "des": "demo..311",
        "exp": "20years demo311",
        "room": "66",
      }
    },
    "Radiology": {
      "doc1": {
        "name": "demo112",
        "des": "demo..112",
        "exp": "20years demo112",
        "room": "67",
      },
      "doc2": {
        "name": "demo212",
        "des": "demo..212",
        "exp": "20years demo212",
        "room": "68",
      },
      "doc3": {
        "name": "demo312",
        "des": "demo..312",
        "exp": "20years demo312",
        "room": "69",
      }
    },
    "Urology": {
      "doc1": {
        "name": "demo114",
        "des": "demo..114",
        "exp": "20years demo114",
        "room": "70",
      },
      "doc2": {
        "name": "demo214",
        "des": "demo..214",
        "exp": "20years demo214",
        "room": "71",
      },
      "doc3": {
        "name": "demo314",
        "des": "demo..314",
        "exp": "20years demo314",
        "room": "72",
      }
    },
  }

  console.log(token)
  if (token == 0) {
    det1 = "\n DOCTOR NAME : " + docs[dept]["doc1"]["name"] + "\n" + docs[dept]["doc1"]["des"] + "\n" + docs[dept]["doc1"]["exp"] + "years exp\n";
    document.getElementById("details1").innerText = det1;

    det2 = "\n DOCTOR NAME : " + docs[dept]["doc2"]["name"] + "\n" + docs[dept]["doc2"]["des"] + "\n" + docs[dept]["doc2"]["exp"] + "years exp\n";
    document.getElementById("details2").innerText = det2;

    det3 = "\n DOCTOR NAME : " + docs[dept]["doc3"]["name"] + "\n" + docs[dept]["doc3"]["des"] + "\n" + docs[dept]["doc3"]["exp"] + "years exp\n";
    document.getElementById("details3").innerText = det3;
  }
  if (token == -1) {
    document.getElementById("docs").style.display = "none"
    modal();
  }


}

function doc1() {

  document.getElementById("docs").style.display = "none";
  document.getElementById("main").style.display = "none";
  document.getElementById("box").style.display = "flex";

  document.getElementById("details").innerText = det1;


}

function doc2() {

  document.getElementById("docs").style.display = "none";
  document.getElementById("main").style.display = "none";
  document.getElementById("box").style.display = "flex";

  document.getElementById("details").innerText = det2;

}

function doc3() {

  document.getElementById("docs").style.display = "none";
  document.getElementById("main").style.display = "none";
  document.getElementById("box").style.display = "flex";

  document.getElementById("details").innerText = det3;

}

function modal() {

  var modal = document.getElementById("myModal");
  var btn = document.getElementById("submit");
  var span = document.getElementsByClassName("close")[0];
  document.getElementById("usertext").innerText = text;
  modal.style.display = "block";
  span.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


}
let Pname, Name, Numb;

function valid() {
  Name = document.getElementById("name").value
  Pname = document.getElementById("pname").value
  Numb = document.getElementById("number").value

  if (Numb == "" || Pname == "" || Name == "") {
    text = "\n\nENTER THE ABOVE DETAILS"
    modal();
  }
  else {
    text = "\n\nYOUR FORM IS SUCCESSFULLY SUBMITTED"
    modal();
  }
}
