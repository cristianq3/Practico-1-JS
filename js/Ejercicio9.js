let frase = prompt("Ingrese una frase");

for (i = 0; i < frase.length; i++) {
  if (
    frase.charAt(i) === "a" ||
    frase.charAt(i) === "e" ||
    frase.charAt(i) === "i" ||
    frase.charAt(i) === "o" ||
    frase.charAt(i) === "u"
  ) {
    document.write(frase.substr(i, 1));
  }
}
