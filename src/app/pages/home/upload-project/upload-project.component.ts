import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListItem, projectData } from '../../../shared/interfaces/list-item';
import { ApiService } from '../../../shared/services/api.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ImageList } from '../../../shared/interfaces/image-list';

@Component({
  selector: 'app-upload-project',
  templateUrl: './upload-project.component.html',
  styleUrl: './upload-project.component.scss'
})
export class UploadProjectComponent implements OnChanges {
  @Input() projectData!: projectData
  @Output() updateItem: EventEmitter<ListItem> = new EventEmitter<ListItem>();

  @Output() imageListChange: EventEmitter<ImageList[]> = new EventEmitter<ImageList[]>()
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


  }

  updateImageList(event: ImageList[]) {
    this.imageListChange.emit(event)
  }

  listUpdateHandler(event: ListItem) {
    console.log(event)
    this.updateItem.emit(event)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.projectData) {
      //console.log(this.projectData)
      this.createFormGroup(this.projectData)
      this.list = this.projectData.materials
    }
  }

  handleSelectedItem(item: ListItem) {
    //console.log(item)
  }

  createFormGroup(projectData: projectData) {
    this.itemForm = this.formBuilder.group({
      type: [projectData.projectType || '', Validators.required],
      title: [projectData.title || '', Validators.required],
      address: [projectData.address || '', [Validators.required]],
      client: [projectData.name || '', [Validators.required]],
      addNew: ['']
    });
  }

  submit() {
    //console.log(this.itemForm.value)
    this.toastService.showDefault('Sucesso', 'Cadastro realizado com sucesso')
  }

  triggerFileUpload(data: FormData) {
    //console.log(data)

  }
}
