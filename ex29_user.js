class user {
    #nom
    #pseudo
    #password

    setNom(nom) {
        this.nom = nom;
    }

    setPseudo(pseudo) {
        this.pseudo = pseudo;
    }

    setPassword(password) {
        this.password = password;
    }

    getNom() {
        return this.nom;
    }

    getPseudo() {
        return this.pseudo;
    }

    getPassword() {
        return this.password;
    }
}