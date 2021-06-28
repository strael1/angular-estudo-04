import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent {

    // Atributo customizado: element!
    @Input() usuario!: {name: string, email: string, phone: string};
}