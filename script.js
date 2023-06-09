const input = document.querySelector("input");
const btnAdd = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty")

btnAdd.addEventListener("click", (e)=>{
   e.preventDefault();
   
   const text = input.value;

   if(text !== ""){
    const li = document.createElement("li");
    const p = document.createElement("p");

    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
   }
});

function addDeleteBtn() {
    const btnDelete = document.createElement("button");
    btnDelete.textContent ="x";
    btnDelete.className = "btn-delete";

    btnDelete.addEventListener("click", (e)=>{
      const item = e.target.parentElement;
      ul.removeChild(item)
      const items = document.querySelectorAll("li")
       if(items.length === 0){
        empty.style.display = "flex";
       } 
    });
    return btnDelete
};