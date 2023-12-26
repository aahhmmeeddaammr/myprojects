
var title = document.getElementById('prtitle')
var cat = document.getElementById('prcat')
var pr = document.getElementById('prprice')
var desc = document.getElementById('prdesc')
var table=document.getElementById('tbody')
var btn=document.getElementById("mybtn");

var mood="create";
var ind=0;
var products = new Array();
var nulll=localStorage.getItem("products");
if(nulll){
     products= JSON.parse(nulll);
}
show_data();
function getInputs() {
     if(mood=="create"){
           addproduct();
          show_data();
          cls();  
          btn.innerHTML="Add Product"
     }else{
          products[ind].name=title.value;
          products[ind].category=cat.value;
          products[ind].price=pr.value;
          products[ind].description=desc.value;
          show_data();
          cls();   
          mood="create";
          btn.innerHTML="Add Product"
     }
    
}

function addproduct(){
     var product = {
          name: title.value,
          category: cat.value,
          price: pr.value,
          description: desc.value
     }
     products.push(product);
     localStorage.setItem("products",JSON.stringify(products));
}


function  cls(){
     title.value="";
     cat.value="";
     pr.value="";
     desc.value="";
}


function show_data(){
     var productt = ``
     for (var i = 0; i < products.length; i++) {
          productt += `
          <tr>
               <td>${i}</td>
               <td>${products[i].name}</td>
               <td>${products[i].category}</td>
               <td>${products[i].price}</td>
               <td>${products[i].description}</td>
               <td><button onclick="DELET(${i})" class="btn btn-danger">DELETE</button></td>
               <td><button  onclick="update(${i})" class="btn btn-warning">UBDATE</button></td>
          </tr>
          `
     }
     table.innerHTML=productt;
}

function DELET(i){
     products.splice(i,1);
     localStorage.setItem("products",JSON.stringify(products));
     show_data()
}
function update(i){
     btn.innerHTML="Update Product"
     title.value=products[i].name;
     cat.value=products[i].category;
     pr.value=products[i].price;
     desc.value=products[i].description;
     ind=i;
     mood="update";
     window.scrollTo(top);
}


//validation يامعلم احمد 
