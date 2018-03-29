function loadjson(file,callback) {
var xhr=new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=function () {
  if(xhr.readyState ===4 && xhr.status=="200") {
    callback(xhr.responseText);
  }
}
xhr.send();
  }
  loadjson("data.json",function (text) {
    let data=JSON.parse(text);
console.log(data);
basics(data.left);
education(data.ed);
skill(data.skills);
})
 //var main=document.queryselector('.main');
 var main=document.getElementById('main');
 var left=document.createElement("div");
 left.classList.add("left");

 left.textContent="profile details";
 left.appendChild(document.createElement("HR"));
  main.appendChild(left);
function basics(leftside) {
  var image=document.createElement("img");
  image.src=leftside.photo;
  left.appendChild(image);
  var name=document.createElement("h1");
  name.textContent=leftside.name;
  left.appendChild(name);
  var email=document.createElement("email");
  email.textContent=leftside.email;
  left.appendChild(email);
  var ph=document.createElement("p");

  ph.textContent=leftside.phone;
  email.appendChild(ph);
  console.log(left);

}
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);
var edu=document.createElement("div");
edu.classList.add("edu");
edu.textContent="educational details";
edu.appendChild(document.createElement("HR"));
right.appendChild(edu);
function education(edua) {
  for(i in edua){
    var e1=document.createElement("div");
    e1.classList.add("edu1");
    e1.textContent=edua[i].course;
    var ul=document.createElement("ul");
    for(j in edua[i].college){
      var li=document.createElement("li");
      li.textContent=edua[i].college[j];
      ul.appendChild(li);
      e1.appendChild(ul);
      edu.appendChild(e1);
      console.log(edu);

    }
  }
}

  var st=document.createElement("div");
  st.classList.add("ts");
  st.textContent="Technical skills";
  st.appendChild(document.createElement("HR"));
  right.appendChild(st);
function skill(tsk) {

  var table=document.createElement("table");
  //table.setAttribute("id","tab");
 var row="";
 for(var i=0;i<tsk.length;i++)
 {
   row =row+"<tr><td>"+tsk[i].name+"</td><td>"+tsk[i].value+"</td></tr>";
 }
 table.innerHTML=row;
 st.appendChild(table);
}
