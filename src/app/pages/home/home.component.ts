import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { PageHeaderButton } from '../../shared/interfaces/page-header-button';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';
import { ListItem, projectData } from '../../shared/interfaces/list-item';
import { ToastService } from '../../shared/services/toast.service';
import * as _ from 'lodash'
import { ImageList } from '../../shared/interfaces/image-list';

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
  private imageList!: ImageList[]

  constructor(private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private toastService: ToastService,
    private dcRef: ChangeDetectorRef
  ) {
    this.router.events.subscribe((val) => {
      this.changePageHeader(this.router.url);
    })

  }

  updateImageList(event: ImageList[]) {
    this.imageList = event
    console.log(this.imageList)
    this.dcRef.detectChanges()
  }

  eventHandler() {
    switch (this.buttonOptions.eventType) {
      case 'file':
        this.fileInput?.nativeElement?.click();
        break;
      case 'action':
        break;
    }

  }

  listUpdateHandler(event: ListItem) {
    let list = this.projectData.materials

    const index = _.findIndex(list, { description: event.description });
    _.set(list, `[${index}]`, event);

    this.projectData.materials = list
    this.projectData = _.cloneDeep(this.projectData)

    this.dcRef.detectChanges()
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
