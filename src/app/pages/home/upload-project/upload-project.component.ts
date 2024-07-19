import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-project',
  templateUrl: './upload-project.component.html',
  styleUrl: './upload-project.component.scss'
})
export class UploadProjectComponent {
  public itemForm!: FormGroup
  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    const data = this.router.getCurrentNavigation()?.extras.state?.['data']
    if (data) {
      this.triggerFileUpload(data)
    }
    this.createFormGroup()
  }

  createFormGroup() {
    this.itemForm = this.formBuilder.group({
      type: ['', Validators.required],
      title: ['', Validators.required],
      address: ['', [Validators.required]],
      client: ['', [Validators.required]],
      addNew: ['']
    });
  }

  submit() {
    console.log(this.itemForm.value)
  }

  triggerFileUpload(data: FormData) {
    console.log(data)

  }
}
