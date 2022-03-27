var NameSurname = prompt("Qual é o seu nome e sobrenome?");

var firstInitial = NameSurname.slice (0,1);

var secondInitialPosition = NameSurname.indexOf(" ") + 1;

var secondInitial = NameSurname.slice (secondInitialPosition, secondInitialPosition + 1);

document.write("Suas iniciais são: " + firstInitial.toUpperCase() + secondInitial.toUpperCase());




