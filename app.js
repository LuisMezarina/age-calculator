const btnE1 = document.getElementById("btn")
const birthdayE1 = document.getElementById("birthdate")
const resultE1 = document.getElementById("result")


function calculateAge(){
    const birthdayValue = birthdayE1.value; 
    console.log(birthdayValue);
    if(birthdayValue === ""){
        alert("Please enter your bithdate")
    }
    else {
        let age = getAge(birthdayValue)
        console.log(age); 
        resultE1.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }

    



}

function getAge(birthdayValue){
    const currentDate = new Date()
    console.log(currentDate)
    const birthdateDate = new Date(birthdayValue)
    let age = currentDate.getFullYear() - birthdateDate.getFullYear();
    console.log(age); 
    const month  = currentDate.getMonth() - birthdateDate.getMonth();
    if(month<0 || (month === 0 && currentDate.getDate() < birthdateDate.getDate())){
    age--
    }
    
    return age; 

}

btnE1.addEventListener("click", calculateAge)