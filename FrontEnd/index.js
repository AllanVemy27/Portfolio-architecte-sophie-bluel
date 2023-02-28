const form = document.querySelector('#login-form');
form.addEventListener('submit', function(event) {
	event.preventDefault(); // empêche le formulaire de se soumettre normalement

	const username = document.querySelector('#username').value;
	const password = document.querySelector('#password').value;

	if (username === '' || password === '') {
		alert('Veuillez remplir tous les champs');
	} else if (username !== 'mon_nom_utilisateur' || password !== 'mon_mot_de_passe') {
		alert('Nom d\'utilisateur ou mot de passe incorrect');
	} else {
		alert('Vous êtes connecté !');
	}
});
.then(response => response.json())
.then(data => {
  // Faire quelque chose avec les données
})
.catch(error => console.error(error))
fetch('http://localhost:5678/api-docs/', {
    method: 'GET'
})
.then(response => response.json())
.then(data => {
    // Faire quelque chose avec les données, par exemple :
    const container = document.getElementById('container');
    container.innerHTML = JSON.stringify(data);
})
.catch(error => console.error(error));

// Automatisation demande de token
// Définir les informations d'identifiacation de l'utilisateur
const username = "utilisateur";
const password = "motdepasse";

//Envoyer une demande d'authentification à l'API
fetch('http://localhost:5678/api-docs/'), {
	method: "POST",
	body: JSON.stringify({ username, password }),
	headers: { "Content-Type": "application/json" },
  }
	.then((response) => {
	  if (response.ok) {
		// Extraire le jeton d'authentification de la réponse de l'API
		return response.json();
	  } else {
		throw new Error("Erreur de demande d'authentification");
	  }
	})
	.then((data) => {
	  // Stocker le jeton d'authentification dans le stockage local
	  localStorage.setItem("token", data.token);
	  console.log("Jeton d'authentification reçu et stocké !");
	})
	.catch((error) => {
	  console.error(error);
	});



// Vérification des identifiants de l'utilisateur
if (identifiantsCorrects) {
	//Redirection vers la page d'accueil
	window.location.replace("index.html");
} else {
	// Affichage message d'erreur
	console.log("Identifiants incorrects");
}

// Stockage du token en local
localStorage.setItem('token', 'votre_token');

// Récupération du token depuis le stockage local
const token = localStorage.getItem('token');
console.log(token); // Affiche "votre_token"

