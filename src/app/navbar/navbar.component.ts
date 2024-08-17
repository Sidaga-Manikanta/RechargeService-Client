import { Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import bootstrap from '../../main.server';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  formSubmitted = false;
  formData = {
    clientName: '',
    clientEmail: '',
    clientAddress: ''
  };

  onFormSubmit() {
    this.formSubmitted = true;
    console.log(this.formData)
    

  }

  closeSuccessMessage() {
    this.formData = {
      clientName: '',
      clientEmail: '',
      clientAddress: ''
    };
    this.formSubmitted = false;

    // Optionally, close the modal
    const modal = document.getElementById('connectModal');
    if (modal) {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
      modal.removeAttribute('aria-modal');
      modal.style.display = 'none';

      const modalBackdrop = document.querySelector('.modal-backdrop');
      if (modalBackdrop) {
        modalBackdrop.remove();
      }
    }
  }
}