import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-project',
  templateUrl: './upload-project.component.html',
  styleUrl: './upload-project.component.scss'
})
export class UploadProjectComponent {

  constructor(private router: Router) {
    const data = this.router.getCurrentNavigation()?.extras.state?.['data']
    if (data)
      this.triggerFileUpload(data)
  }

  triggerFileUpload(data: FormData) {
    console.log(data)

  }
}
