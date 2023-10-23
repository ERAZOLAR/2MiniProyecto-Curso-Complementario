export default class Album{
    constructor({
        nombreAlbum,
        fechaAlbum,
        cancionesAlbum,
        companiaDiscografica,
        duracionAlbum,
        banda = {},
        



    }){
        this._nombreAlbum = nombreAlbum;
        this.fechaAlbum = fechaAlbum;
        this.cancionesAlbum = cancionesAlbum;
        this.companiaDiscografica = companiaDiscografica;
        this.duracionAlbum = duracionAlbum;
        this.banda = banda;
        
    }
    get nombreAlbum(){
        return this._nombreAlbum
    }
    
    set nombreAlbum(nuevoNombre){
        this._nombreAlbum = nuevoNombre
    }

}




