import { Component, inject, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    

  })

  firebaseSvc = inject(FirebaseService);

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {

      this.firebaseSvc.sendRecoveryEmail(this.form.value.email).then(res => {
        console.log(res);

      })

    }
  }



}



