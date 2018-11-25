import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HandleUserService } from '../services/handle-user.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  returnUrl: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private handleUserService: HandleUserService,
  ) {
    // redirect to home if already logged in
    if (this.handleUserService.currentUserValue) {
      this.router.navigate(['/posts']);
    }
  }
  name = new FormControl('', [Validators.required, Validators.minLength(4)]);
  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/posts';
  }
  setName() {
    this.handleUserService.signIn(this.name.value).pipe(first())
    .subscribe(
        data => {
          console.log(data);
            this.router.navigate([this.returnUrl]);
        },
        error => {
          console.log(error);
        });
  }
}
