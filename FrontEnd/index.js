//Catégorisation 


//Modale





// Configuration formulaire
const formEl = document.getElementById('login-form');
console.log(formEl);

formEl.addEventListener('submit',() => {
    event.preventDefault();

    const formData = new formData(formEl);
    console.log(FormData.get('email'));
    console.log(formData.get('password'));
    fetch('http://localhost:5678/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(result => console.log(result))
    .catch(error => console.log(error));
})

// Programmation Connexion / Déconnexion
if (email && password true) {
    window.location.href='./index.html';
} 
else (email && password false){
    console.log("Erreur dans l'identifiant ou le mot de passe");
}
