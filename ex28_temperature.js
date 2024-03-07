console.log("Chargement de la classe temperature");

class Temperature {

    //Membre ou propriété
    #valeurTemperature;

    //Methodes
    setTemperature(var1) {
        //Ex 28 : Vérifier que var1 à une valeur entre -30 et 60
        if(var1 > -30 || var1 < 60) this.valeurTemperature = this.#valeurTemperature = var1;
    }

    getTemperature() {
        return this.valeurTemperature;
    }
}