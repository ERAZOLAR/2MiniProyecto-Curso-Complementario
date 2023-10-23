export default class Integrantes{
    constructor({
        nombreIntegrante,
        fechaNacimiento,
        nacionalidadIntegrante,
        trayectoria,
        nominacion,
        genero,
        fechaMuerte,
        instrumentoIntegrante,



    }){
        this._nombreIntegrante = nombreIntegrante;
        this.fechaNacimiento = fechaNacimiento;
        this.nacionalidadIntegrante = nacionalidadIntegrante;
        this.trayectoria = trayectoria;
        this.nominacion = nominacion;
        this.genero = genero;
        this.fechaMuerte = fechaMuerte;
        this.instrumentoIntegrante = instrumentoIntegrante;

    }
    get nombreIntegrante(){
        return this._nombreIntegrante
    }
    
    set nombreIntegrante(nuevoNombre){
        this._nombreIntegrante = nuevoNombre
    }

}




