import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  signupForm: FormGroup;
  forbiddenUsernames = ["Chris", "Ana"];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails
        ),
      }),
      gender: new FormControl("male"),
      hobbies: new FormArray([]),
    });
  }

  onSubmit(): void {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    // O exemplo não envia os dados; evita registrar informações pessoais no console.
    this.signupForm.reset({ gender: "male" });
  }

  onAddHobby(): void {
    const control = new FormControl(null, Validators.required);
    (this.signupForm.get("hobbies") as FormArray).push(control);
  }

  get controls() {
    return (this.signupForm.get("hobbies") as FormArray).controls;
  }

  forbiddenNames(control: FormControl): { [key: string]: boolean } | null {
    return this.forbiddenUsernames.includes(control.value)
      ? { nameIsForbidden: true }
      : null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          control.value === "test@test.com" ? { emailIsForbidden: true } : null
        );
      }, 500);
    });
  }
}
