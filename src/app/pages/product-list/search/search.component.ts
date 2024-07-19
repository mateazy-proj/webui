import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-list-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() emitFormGroup: EventEmitter<any> = new EventEmitter<any>;
  public form!: FormGroup


  constructor(private formBuilder: FormBuilder) {
    this.createFormControls()
  }

  createFormControls() {
    this.form = this.formBuilder.group({
      checkImage: [true],
      name: [''],
      description: ['']
    })
  }

  submit() {
    this.emitFormGroup.emit(this.form.value)
  }

}
