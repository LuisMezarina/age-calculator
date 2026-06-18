const btnE1 = document.getElementById("btn")
const birthdayE1 = document.getElementById("birthdate")


function calculateAge(){
    const birthdayValue = birthdayE1.value; 
    console.log(birthdayValue);
    if(birthdayValue === ""){
        alert("Please enter your bithdate")
    }
}

btnE1.addEventListener("click", calculateAge)