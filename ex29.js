const user1 = new user();
const user2 = new user();

user1.setNom("Truc");
user1.setPseudo("TrucZkj");
user1.setPassword("passwd");

user2.setNom("Crut");
user2.setPseudo("jkZcruT");
user2.setPassword("dwssap");

document.getElementById("nom1").innerHTML = user1.getNom();
document.getElementById("pseudo1").innerHTML = user1.getPseudo();
document.getElementById("password1").innerHTML = "Pas cette fois ;]";

document.getElementById("nom2").innerHTML = user2.getNom();
document.getElementById("pseudo2").innerHTML = user2.getPseudo();
document.getElementById("password2").innerHTML = "Pas cette fois non plus ;]";