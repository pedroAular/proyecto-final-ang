import { AbstractControl, ValidationErrors } from '@angular/forms';

export function minLengthValidator(minLength: number) {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value;
    if (value && value.trim().length < minLength) {
      return { minLength: true };
    }
    return null;
  };
}

export function passwordValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value: string = control.value;
  if (value === null) {
    return null; 
  }
  if (value.length < 6 || value.length > 8) {
    return { length: true };
  }
  const letterRegex = /[a-zA-Z]/g;
  const letterMatches = value.match(letterRegex) || [];
  if (letterMatches.length < 2) {
    return { letters: true };
  }
  const uppercaseRegex = /[A-Z]/g;
  if (!uppercaseRegex.test(value)) {
    return { uppercase: true };
  }
  const numberRegex = /[0-9]/g;
  if (!numberRegex.test(value)) {
    return { number: true };
  }
  const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
  if (!specialCharRegex.test(value)) {
    return { specialChar: true };
  }

  return null;
}
