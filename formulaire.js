

document.getElementById('maPage').addEventListener('submit', function(event) {
    event.preventDefault();
    validerFormulaire(event);
});

function validerFormulaire(event) {
    event.preventDefault();

    const user = {
        nom: document.getElementById('nom').value.trim(),
        prenom: document.getElementById('prenom').value.trim(),
        email: document.getElementById('email').value.trim(),
        age: parseInt(document.getElementById('age').value, 10),
        pays: document.getElementById('pays').value,
        guess: parseInt(document.getElementById('guess').value, 10)
    }

    if (!user.email.includes('@') || !user.email.includes('.')) {
        alert('Email invalide');
        return 
    }

    if (user.age < 16 || user.age > 50) {
        alert('Âge hors limite');
        return
    }

    if (!user.pays) {
        alert('Pays non sélectionné');
        return;
    }

    if (user.guess !== 8) {
        alert('Mauvais chiffre, essayez encore !');
        return;
    }

    window.location.href = "https://www.google.com"
    
    return;
}
