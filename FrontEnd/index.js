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