import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { PageHeaderButton } from '../../shared/interfaces/page-header-button';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';
import { ListItem, projectData } from '../../shared/interfaces/list-item';
import { ToastService } from '../../shared/services/toast.service';
import * as _ from 'lodash'
import { ImageList } from '../../shared/interfaces/image-list';
import { catchError, forkJoin, tap } from 'rxjs';
import { uploadingData } from './project-list/project-list.component';

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
  private imageList: ImageList[] = []
  uploader: uploadingData = {
    total: 10,
    current: 10,
    isUploading: false
  }

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
        this.checkForMissingImagesBeforeUpload()
        break;
      case 'clear':
        this.clearData()
        break;
    }

  }

  clearData() {
    this.setTitleToProjects()
    this.uploader.isUploading = false
    this.projectData = {
      title: "",
      name: "",
      address: "",
      projectType: "",
      materials: []
    }

  }

  checkForMissingImagesBeforeUpload() {
    /* possibly add some logic to check if any items are missing */
    let ammountMissing = this.projectData.materials.filter(item => item.imageUrl === "")
    if (ammountMissing.length > 0) {
      this.toastService.showError("AVISO! Imagens faltando", `Existem ${ammountMissing.length} itens sem imagem.`)
    }
    this.uploadImagesToCloudinary()

  }

  uploadImagesToCloudinary() {
    console.log('called upload to cloud')
    this.uploader.total = this.imageList.length;
    this.uploader.current = 0
    this.uploader.isUploading = true
    this.title = 'Enviando arquivos';
    this.buttonOptions = { display: false }

    console.log(this.imageList)

    const uploadObservables = this.imageList.map(item => {
      // Check if imageFile is a valid file object
      if (typeof item.imageFile !== 'string') {
        return this.apiService.uploadImage(item.imageFile).pipe(
          tap(() => {
            // Increment completedCount on successful upload
            this.uploader.current++;
            // Update progress status
          }),
          catchError(error => {
            // Handle upload error
            console.error('Upload failed', error);
            this.uploader.isUploading = false
            // Continue processing other files
            return [];
          })
        );
      }
      return [];
    });

    // Execute all upload observables in parallel

    forkJoin(uploadObservables).subscribe({
      next: (res) => {
        console.log(res)
        this.updateImageURLFromAPICall(res)
        if (this.uploader.current === this.uploader.total) {
          console.log(this.imageList)

          this.title = "Upload completo";
          this.buttonOptions = {
            display: true,
            title: "Carregar outro projeto",
            eventType: 'file'
          };
        }
      },
      error: (err) => {
        console.error('An error occurred during uploads', err);
        this.uploader.isUploading = false
        this.setTitleToProjects()
      }
    });
  }

  updateImageURLFromAPICall(res: any) {
    res.forEach((item: { original_filename: any; url: string; }) => {
      const index = _.findIndex(this.imageList, {
        sanitizedName: item.original_filename
      });

      // Update the item
      if (index !== -1) {
        this.imageList[index].imageFile = item.url;
      }
    }
    )
  }

  //updateImageListWithURLData

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

  setTitleToProjects() {
    this.title = "Seus projetos";
    this.buttonOptions = {
      display: true,
      title: "Carregar projeto",
      icon: 'bi-upload',
      eventType: 'file'
    };
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
