const form = document.querySelector('#login-form');
form.addEventListener('submit', function(event) {
	event.preventDefault(); // empêche le formulaire de se soumettre normalement

	const username = document.querySelector('#username').value;
	const password = document.querySelector('#password').value;

	if (username === '' || password === '') {
		alert('Veuillez remplir tous les champs');

const response = await fetch(`http://localhost:5678/api/users/login`, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify(users)
});

if (response.ok === true) {
	console.log(response)
	let result = await response.json()
	console.log(result)

	console.log("réussi !")

	sessionStorage.setItem("token", result.token)
	window.location.href = 'index.html';

}
else if (inputEmail.velue || inputPassword.value !== true) {

	let myError = doucment.querySelector('#error')
	myError.innerHTML = "Identifiant ou mot de passe incorrecte !";
	myError.style.color = "red";

} else {
	throw new Error("Impossible d'accèder au serveur !")
	
}