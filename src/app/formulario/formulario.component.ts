import { Component, EventEmitter, Output } from '@angular/core';

// Input: importa 

// Solução:
// Output: exporta 
// Emitir evento

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.css']
})

export class FormularioComponent {

    // Exportação de dados 
    // Evento customizado
    @Output() userCreated = new EventEmitter<{userName: string, userEmail: string, userPhone: string}>();


    name: string = '';
    email: string = '';
    phone: string = '';

    nameError = false;
    emailError = false;
    phoneError = false;

    inserirCliente() {
        if(this.name.length <= 0 && this.email.length <= 0 && this.phone.length <= 0){
          this.nameError = true;
          this.emailError = true;
          this.phoneError = true;
        }else if(this.email.length <= 0){
          this.emailError = true;
          this.phoneError = false;
          this.nameError = false;
        }else if (this.phone.length <= 0) {
          this.phoneError = true;
          
        } else if (this.name.length <= 0) {
          this.nameError = true;
        } else {

        this.userCreated.emit({
            userName: this.name,
            userEmail: this.email,
            userPhone: this.phone
        })
    
          this.name = '';
          this.email = '';
          this.phone = '';
        }
      }
}