import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HandleUserService } from '../services/handle-user.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EntryComponent implements OnInit {
  returnUrl: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private handleUserService: HandleUserService,
    private formBuilder: FormBuilder
  ) {
    // redirect to home if already logged in
    if (this.handleUserService.currentUserValue) {
      this.router.navigate(['/posts']);
    }
  }
  userForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    phone: ['', Validators.required]
  });
  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/posts';
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.userForm.controls;
  }
  setName() {
    this.handleUserService.signIn(this.userForm.value.name).pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          console.log(error);
        });
  }
}
