
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const removebtn = document.getElementById("removeAllBtn")
const T = document.getElementById("try");
const thead = document.getElementById("thead");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const htmlTotal = document.getElementById("total");
img1_clone = img1.cloneNode(true);
img2_clone = img2.cloneNode(true);
img3_clone = img3.cloneNode(true);
btn1_clone = btn1.cloneNode(true);

let totalcounter1 = 0;
let totalcounter2 = 0;
let totalcounter3 = 0;
let item1cost = 0;
let item2cost = 0;
let item3cost = 0;

const itemPrices = {
    shoes: 50,
    watch: 100,
    IPhone: 3000
  };

let TOTAL = totalcounter1 + totalcounter2 + totalcounter3;
  
let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}



function updateTotal() {
    TOTAL = totalcounter1 + totalcounter2 + totalcounter3;
    htmlTotal.textContent = "Total: $" + TOTAL;
}



let func1Executed = false;
let corrector1 = 0;

function Func1() {
    if (!func1Executed) {
 
        let A = false;
        totalcounter1 += itemPrices.shoes;
        updateTotal();

        const row = document.createElement("tr");
        const img0 = document.createElement("td");
        img1_clone.style.width = "100%";
        img0.style.borderBottom = "1px solid black";

        const name1 = document.createElement("td");
        name1.textContent = "Shoes";
        name1.style.textAlign = "center";
        name1.style.fontWeight = "bold";
        name1.style.fontSize = "1.4em";
        name1.style.borderBottom = "1px solid black";

        const price1 = document.createElement("td");
        price1.textContent = "$49.99";
        price1.style.textAlign = "center";
        price1.style.fontWeight = "bold";
        price1.style.fontSize = "1.4em";
        price1.style.borderBottom = "1px solid black";

        const qty1 = document.createElement("td");
        qty1.textContent = 1;
        qty1.style.textAlign = "center";
        qty1.style.fontWeight = "bold";
        qty1.style.fontSize = "1.4em";
        qty1.style.borderBottom = "1px solid black";

        const td = document.createElement("td");
        const removebtn1 = document.createElement("button");
        removebtn1.textContent = "Remove item";
        removebtn1.className = "JSbtn";
        td.style.borderBottom = "1px solid black";

        btn1.addEventListener("click", function () {
            let currentQty = parseInt(qty1.textContent);
            currentQty += 1;
            qty1.textContent = currentQty;
            totalcounter1 = itemPrices.shoes * qty1.textContent;
            item1cost = totalcounter1;
            while(A){
                totalcounter1 -= corrector1;
                A = false;
            };
            updateTotal();
        });

        thead.appendChild(row);
        row.appendChild(img0);
        img0.appendChild(img1_clone);
        row.appendChild(name1);
        row.appendChild(price1);
        row.appendChild(qty1);
        row.appendChild(td);
        td.appendChild(removebtn1);

        func1Executed = true;

        removebtn1.addEventListener("click", function () {
            A = true;
            corrector1 = totalcounter1;
            totalcounter1 = 0;
            updateTotal()

        
            thead.removeChild(row);
            func1Executed = false;
        });

    }
}




let func2executed = false ;
let corrector2 = 0;

function Func2(){

    if(!func2executed){
    let B = false;

    totalcounter2 += itemPrices.watch;
    updateTotal();
    
    const row = document.createElement("tr");
    const img0 = document.createElement("td");
    img2_clone.style.width = "100%";
    img0.style.borderBottom = "1px solid black"

    const name1 = document.createElement("td");
    name1.textContent = "Watch";
    name1.style.textAlign = "center";
    name1.style.fontWeight = "bold";
    name1.style.fontSize = "1.4em";
    name1.style.borderBottom = "1px solid black"

    const price1 = document.createElement("td");
    price1.textContent = "$99.99";
    price1.style.textAlign = "center";
    price1.style.fontWeight = "bold";
    price1.style.fontSize = "1.4em";
    price1.style.borderBottom = "1px solid black"

    const qty1 = document.createElement("td");
    qty1.textContent = 1;
    qty1.style.textAlign = "center";
    qty1.style.fontWeight = "bold";
    qty1.style.fontSize = "1.4em";
    qty1.style.borderBottom = "1px solid black"

    const td = document.createElement("td");
    const removebtn = document.createElement("button");
    removebtn.textContent = "Remove item";
    removebtn.className = "JSbtn";
    td.style.borderBottom = "1px solid black"

    btn2.addEventListener("click", function () {
        let currentQty = parseInt(qty1.textContent);
        currentQty += 1;
        qty1.textContent = currentQty;
        totalcounter2 = itemPrices.watch * currentQty;
        item2cost = totalcounter2;
        while(B){
            totalcounter2 -= corrector2;
            B = false;
        }
        updateTotal();
    });

    thead.appendChild(row);
    row.appendChild(img0);
    img0.appendChild(img2_clone);
    row.appendChild(name1);
    row.appendChild(price1);
    row.appendChild(qty1);
    row.appendChild(td);
    td.appendChild(removebtn);

    func2executed = true

    removebtn.addEventListener("click", function () {
        B = true;
        corrector2 = totalcounter2;
        totalcounter2 = 0;
        updateTotal();


        row.removeChild(name1);
        row.removeChild(price1);
        row.removeChild(qty1);
        row.removeChild(td);
        td.removeChild(removebtn);
        thead.removeChild(row);
        row.removeChild(img0);
        img0.removeChild(img2_clone);
        func2executed = false;
    });
    }
}



let func3executed = false;
let corrector3 = 0;

function Func3(){

    if(!func3executed){

    let C = false;
    totalcounter3 += itemPrices.IPhone;
    updateTotal();

    const row = document.createElement("tr");
    const img0 = document.createElement("td");
    img3_clone.style.width = "100%";
    img0.style.borderBottom = "1px solid black"

    const name1 = document.createElement("td");
    name1.textContent = "IPhone";
    name1.style.textAlign = "center";
    name1.style.fontWeight = "bold";
    name1.style.fontSize = "1.4em";
    name1.style.borderBottom = "1px solid black"

    const price1 = document.createElement("td");
    price1.textContent = "$3000.00";
    price1.style.textAlign = "center";
    price1.style.fontWeight = "bold";
    price1.style.fontSize = "1.4em";
    price1.style.borderBottom = "1px solid black"

    const qty1 = document.createElement("td");
    qty1.textContent = 1;
    qty1.style.textAlign = "center";
    qty1.style.fontWeight = "bold";
    qty1.style.fontSize = "1.4em";
    qty1.style.borderBottom = "1px solid black"

    const td = document.createElement("td");
    const removebtn3 = document.createElement("button");
    removebtn3.textContent = "Remove item";
    removebtn3.className = "JSbtn";
    td.style.borderBottom = "1px solid black"

    btn3.addEventListener("click", function () {
        let currentQty = parseInt(qty1.textContent);
        currentQty += 1;
        qty1.textContent = currentQty;
        totalcounter3 = itemPrices.IPhone * currentQty;
        item3cost = totalcounter3;
        while(C){
            totalcounter3 -= corrector3;
            C = false;
        }
        updateTotal();
    });

    thead.appendChild(row);
    row.appendChild(img0);
    img0.appendChild(img3_clone);
    row.appendChild(name1);
    row.appendChild(price1);
    row.appendChild(qty1);
    row.appendChild(td);
    td.appendChild(removebtn3);

    func3executed = true;

    removebtn3.addEventListener("click", function () {
        C = true;
        corrector3 = totalcounter3;
        totalcounter3 = 0;
        updateTotal();

        row.removeChild(name1);
        row.removeChild(price1);
        row.removeChild(qty1);
        row.removeChild(td);
        td.removeChild(removebtn3);
        thead.removeChild(row);
        row.removeChild(img0);
        img0.removeChild(img3_clone);
        func3executed = false;
    });
    }
}

function RemoveAll(){
    while(thead.hasChildNodes()){
        thead.removeChild(thead.firstChild);
    };
    func1Executed = false;
    func2executed = false;
    func3executed = false;

    totalcounter1 = 0;
    totalcounter2 = 0;
    totalcounter3 = 0;
    updateTotal();

}