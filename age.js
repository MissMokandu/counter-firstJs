function calc(){
       const today = new Date();
       const birthDate = new Date(document.getElementById("dateOfBirth").value);

       let age = today.getFullYear() - birthDate.getFullYear();

    document.getElementById("ageIs").innerHTML = `Your age is ${age}`;
}
