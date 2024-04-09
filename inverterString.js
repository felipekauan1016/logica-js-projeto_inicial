
function inverterString() {

   

    let inputString = prompt("Digite uma string para inverter:");
 


    if (inputString === null || inputString === "") {

        alert("Nenhuma string foi inserida.");

        return;

    }
 


    let invertedString = inputString.split("").reverse().join("");


    alert("String invertida: " + invertedString);

}

inverterString();
