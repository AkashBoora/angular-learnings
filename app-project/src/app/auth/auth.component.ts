import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceHolderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnDestroy {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceHolderDirective, {static: false}) alertPost: PlaceHolderDirective;

  private closeSub: Subscription;

  constructor(private authService: AuthService, private router: Router, private componentFactoryREsolver:ComponentFactoryResolver) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signUp(email, password);
    }

    authObs.subscribe(
      (resData) => {
        this.isLoading = false;
        console.log(resData);
        this.router.navigate(['./recipes']);
      },
      (errorRes) => {
        this.error = errorRes;
        this.ShowErrorAlert(this.error);
        this.isLoading = false;
      }
    );

    form.reset();
  }

  onHandleError(){
    this.error = null;
  }

  private ShowErrorAlert(error: string) {
    const alertComponentFactory = this.componentFactoryREsolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertPost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(alertComponentFactory);
    componentRef.instance.message = error;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

  ngOnDestroy(): void {
      if(this.closeSub){
        this.closeSub.unsubscribe();
      }
  }
}
