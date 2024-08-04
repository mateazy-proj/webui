import { Component, ElementRef, ViewChild } from '@angular/core';
import { PageHeaderButton } from '../../shared/interfaces/page-header-button';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';
import { ListItem, projectData } from '../../shared/interfaces/list-item';
import { ToastService } from '../../shared/services/toast.service';
import * as _ from 'lodash'

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
    icon: 'bi-upload',
    eventType: 'file'
  };
  fileTypes = '.csv';
  public projectData!: projectData


  constructor(private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private toastService: ToastService
  ) {
    this.router.events.subscribe((val) => {
      this.changePageHeader(this.router.url);
    })

  }

  eventHandler() {
    switch (this.buttonOptions.eventType) {
      case 'file':
        this.fileInput?.nativeElement?.click();
        break;
      case 'action':
        console.log(this.projectData)
        break;
    }

  }

  listUpdateHandler(event: ListItem) {
    console.log(event)
    let list = this.projectData.materials

    const index = _.findIndex(list, { description: event.description });
    _.set(list, `[${index}]`, event);

    this.projectData.materials = list
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
        icon: 'bi-upload',
        eventType: 'file'
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
    const formData = new FormData();
    formData.append('file', file);
    this.toastService.showDefault("Em progresso", "Enviando arquivo")
    this.apiService.postFile(file).subscribe({
      next: (data) => {
        //console.log(data)
        this.projectData = data
        this.buttonOptions = {
          display: true,
          title: "Salvar e gerar relatrorio",
          icon: 'bi-save2',
          eventType: 'action'
        };
        this.toastService.clear()
        this.toastService.showSuccess("Sucesso", "Arquivo enviado com sucesso")
      }, error: (err) => {
        this.toastService.clear()
        this.toastService.showError("Erro", "Erro ao carregar arquivo")
      }
    })
    //this.navigateToUploadProject(file);
  }
}
