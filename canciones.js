export default class Canciones{
    constructor({
        tituloCancion,
        duracionCancion,
        letraCancion,
        album = {},

        


    }){
        this._tituloCancion = tituloCancion;
        this.duracionCancion = duracionCancion;
        this.letraCancion = letraCancion;
        this.album = album;
        

    }
    get tituloCancion(){
        return this._tituloCancion
    }
    
    set tituloCancion(nuevoTitulo){
        this._tituloCancion = nuevoTitulo
    }

}




