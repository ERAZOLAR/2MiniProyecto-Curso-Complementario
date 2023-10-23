export default class Banda{
    constructor({
        nombre,
        tipo,
        integrantes = [],
        anoFundacion,
        nacionalidad,
        anoDisolucion,
        idioma,
        influencia,
        instrumentos,



    }){
        this._nombre = nombre;
        this.tipo = tipo;
        this.integrantes = integrantes;
        this.anoFundacion = anoFundacion;
        this.nacionalidad = nacionalidad;
        this.anoDisolucion = anoDisolucion;
        this.idioma = idioma;
        this.influencia = influencia;
        this.instrumentos = instrumentos;

    }
    get nombre(){
        return this._nombrenombre
    }
    
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre
    }

}




