import { Component } from '@angular/core';

@Component({
    selector: 'Mi-Cuerpo',
    templateUrl: './cuerpo.component.html'
})

export class MiCuerpo{
    public titulo: string;
    public comentario: string;
    public anio: string;


    constructor(){
        this.titulo = "Hola Mundo soy El Cuerpo";
        this.comentario = "Probando esto";
        this.anio = "2022";


        console.log('Componente MiCuerpo cargado!');
        console.log(this.titulo, this.comentario, this.anio);

    }
}