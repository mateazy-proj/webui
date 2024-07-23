import { Component, ElementRef, ViewChild } from '@angular/core';
import { PageHeaderButton } from '../../shared/interfaces/page-header-button';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('file') fileInput: ElementRef | undefined;
  public title: string = "Seus projetos"
  public buttonOptions: PageHeaderButton = {
    display: true,
    title: "Carregar projeto",
    icon: 'bi-upload'
  };
  fileTypes = '.csv';

  constructor(private router: Router,
    private route: ActivatedRoute
  ) {
    this.router.events.subscribe((val) => {
      this.changePageHeader(this.router.url);
    })

  }
  eventHandler() {
    this.fileInput?.nativeElement?.click();
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploadFile(file);
    }
  }

  /**
   * Methos should change this.title and this.buttonOptions according to path
   */
  changePageHeader(route: string) {
    if (route === '/home/project-list') {
      this.title = "Seus projetos";
      this.buttonOptions = {
        display: true,
        title: "Carregar projeto",
        icon: 'bi-upload'
      };
    } else if (route === '/home/upload-project') {
      this.title = "Dados do projeto";
      this.buttonOptions = {
        display: false
      };
    }
  }

  navigateToUploadProject(data: any) {
    this.router.navigate(['/home/upload-project'], { state: { data: data } });
  }
  uploadFile(file: File) {
    //const formData = new FormData();
    //formData.append('file', file, file.name);
    this.navigateToUploadProject(file);
  }
}
