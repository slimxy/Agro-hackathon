
let sign = document.querySelector(".details");
let login = document.querySelector(".log");
let select = document.querySelector(".select")


function log(){
    login.classList.add("active");
 select.classList.remove("active")
 sign.classList.remove("active");

}
function form(){
sign.classList.add("active");
select.classList.add("active")
login.classList.remove("active");


}

// function trial(){
// if((document.querySelector("#login")&&(document.querySelector("#farmer"))).click){
//     console.log("farmer selected");
//     login.classList.add("active");
//   }


// if(document.querySelector("#signup"&&"#farmer").click){
//     sign.classList.add("active");

// }

// }