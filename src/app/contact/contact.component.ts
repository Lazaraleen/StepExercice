import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_mr786bc', 'template_v1dgasc', e.target as HTMLFormElement, 'YOUR_PUBLIC_KEY')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}

// emailjs.send("service_mr786bc","template_v1dgasc", {
//   name: "",
//   name2: "",
//   phone: "",
//   email: "",
//   message: "",
//   enterprise: "",
// });