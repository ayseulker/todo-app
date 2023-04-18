// let yapilacak = [];
// let button = document.getElementById("button");
// let table = document.getElementById("table");

// button.addEventListener("click", function () {
//     add();
// });

// document.querySelector("form").addEventListener("submit", function (event) {
//     event.preventDefault();
// });

// function add() {
//     let todo = document.getElementById("toDo").value;

//     const tr = document.createElement("tr");
//     const tdCheck = document.createElement("td");
//     const tdText = document.createElement("td");

//     const input = document.createElement("input");
//     input.type = "checkbox";
//     input.addEventListener("change", function() {
//         if (input.checked) {
//             tdText.style.textDecoration = "line-through";
//         } else {
//             tdText.style.textDecoration = "none";
//         }
  
//        
// });
//     tdCheck.appendChild(input);

//     const textNode = document.createTextNode(todo);
//     tdText.appendChild(textNode);

//     tr.appendChild(tdCheck);
//     tr.appendChild(tdText);

//     table.appendChild(tr);

//     yapilacak.push(todo);

//     document.getElementById("toDo").value = "";
// }



//! locale kaydedemediğim için chatgbt den yardım aldım :)

let button = document.getElementById("button");
let table = document.getElementById("table");

window.onload = function() {
    // localStorage'dan verileri yükle
    let yapilacak = JSON.parse(localStorage.getItem("yapilacak")) || [];

    // tabloyu oluştur
    for (let i = 0; i < yapilacak.length; i++) {
        const tr = document.createElement("tr");
        const tdCheck = document.createElement("td");
        const tdText = document.createElement("td");

        const input = document.createElement("input");
        input.type = "checkbox";
        input.checked = yapilacak[i].isChecked || false; // default false
        input.addEventListener("change", function() {
            yapilacak[i].isChecked = input.checked;
            yapilacak[i].text = tdText.textContent;
            localStorage.setItem("yapilacak", JSON.stringify(yapilacak));

            if (input.checked) {
                tdText.style.textDecoration = "line-through";
            } else {
                tdText.style.textDecoration = "none";
            }
        });
        tdCheck.appendChild(input);

        const textNode = document.createTextNode(yapilacak[i].text);
        tdText.appendChild(textNode);
        if (yapilacak[i].isChecked) {
            tdText.style.textDecoration = "line-through";
        }

        tr.appendChild(tdCheck);
        tr.appendChild(tdText);

        table.appendChild(tr);

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "X";
        deleteButton.addEventListener("click", function() {
            let index = yapilacak.indexOf(yapilacak[yapilacak.length-1]);
            yapilacak.splice(index, 1);
            localStorage.setItem("yapilacak", JSON.stringify(yapilacak));
            tr.remove(); // tablodan siliniyor
        });
        const td = document.createElement("td"); // define the td variable here
        td.appendChild(deleteButton);
        tr.appendChild(td);
        
    }

    // Ekle butonuna tıklandığında yapılacakları ekle
    button.addEventListener("click", function () {
        add();
    });

    // Formun submit olayını engelle
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
    });

    function add() {
        let todo = document.getElementById("toDo").value;
        if(todo!=""){
        const tr = document.createElement("tr");
        const tdCheck = document.createElement("td");
        const tdText = document.createElement("td");
    
        const input = document.createElement("input");
        input.type = "checkbox";
        input.addEventListener("change", function() {
            yapilacak[yapilacak.length - 1].isChecked = input.checked;
            yapilacak[yapilacak.length - 1].text = tdText.textContent;
            localStorage.setItem("yapilacak", JSON.stringify(yapilacak));
    

            if (input.checked) {
                tdText.style.textDecoration = "line-through";
            } else {
                tdText.style.textDecoration = "none";
            }
        });
        tdCheck.appendChild(input);
    
        const textNode = document.createTextNode(todo);
        tdText.appendChild(textNode);
    
        tr.appendChild(tdCheck);
        tr.appendChild(tdText);
    
        table.appendChild(tr);
    
        yapilacak.push({ text: todo, isChecked: false });
        localStorage.setItem("yapilacak", JSON.stringify(yapilacak));
    
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "X";
        deleteButton.addEventListener("click", function() {
            let index = yapilacak.indexOf(yapilacak[yapilacak.length-1]);
            yapilacak.splice(index, 1);
            localStorage.setItem("yapilacak", JSON.stringify(yapilacak));
            tr.remove(); // tablodan siliniyor
        });
        const td = document.createElement("td"); // define the td variable here
        td.appendChild(deleteButton);
        tr.appendChild(td);
    
        table.appendChild(tr);
    }else{
        alert("Lütfen todo alanını boş bırakmayınız.")
    }
    
        document.getElementById("toDo").value = "";
    }
    
};
