import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListItem } from '../../../shared/interfaces/list-item';
import { ApiService } from '../../../shared/services/api.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-upload-project',
  templateUrl: './upload-project.component.html',
  styleUrl: './upload-project.component.scss'
})
export class UploadProjectComponent {
  public itemForm!: FormGroup;
  public list: ListItem[] = []
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private api: ApiService,
    private toastService: ToastService
  ) {
    const data = this.router.getCurrentNavigation()?.extras.state?.['data']
    if (data) {
      this.triggerFileUpload(data)
    }
    this.createFormGroup()
    this.api.getList().subscribe({
      next: (res) => {
        this.list = res
      },
      error: (err) => {
        console.error(err)
      }
    })
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
    this.toastService.showDefault('Sucesso', 'Cadastro realizado com sucesso')
  }

  triggerFileUpload(data: FormData) {
    console.log(data)

  }
}
