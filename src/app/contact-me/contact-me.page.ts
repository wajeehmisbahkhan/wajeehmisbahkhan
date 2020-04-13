import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AlertController } from '@ionic/angular';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.page.html',
  styleUrls: ['./contact-me.page.scss']
})
export class ContactMePage implements OnInit {
  lat: number;
  lng: number;
  sending: boolean;
  // Form
  email: string;
  message: string;
  constructor(private alertController: AlertController) {
    this.sending = false;
    this.lat = 24.9231609;
    this.lng = 67.0921413;
  }

  ngOnInit() {
    emailjs.init(environment.emailjs);
  }

  async sendEmail(emailForm: NgForm) {
    this.sending = true;
    try {
      const response = await emailjs.send('mailgun', 'wajeehmisbahkhan', {
        from: this.email,
        text: this.message
      });
      emailForm.resetForm();
      const alert = await this.alertController.create({
        header: 'Message Sent',
        message: 'Your message was sent successfully.',
        buttons: ['Okay']
      });
      await alert.present();
      console.log(response);
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Error Sending Message',
        message: 'Try contacting me at wajeehmisbahkhan@yahoo.com',
        buttons: ['Okay']
      });
      await alert.present();
      console.log(error);
    } finally {
      this.sending = false;
    }
  }
}
