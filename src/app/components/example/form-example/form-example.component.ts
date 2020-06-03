import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app1-form-example',
  templateUrl:'form-example.component.html',
  styles: []
})
export class FormExampleComponent implements OnInit {

  name;
  myemail;
  nameValid;

  @ViewChild('txtNameChild') myName:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  submit(input:HTMLInputElement ){
    console.log(<HTMLInputElement>input)
    // console.log(input.value)
    // console.log(input.classList)
    // console.log(input.className)
  }

  onSaveName(myNameInput: HTMLInputElement) {
    console.log((<HTMLInputElement>myNameInput).value);
    console.log((<HTMLInputElement>myNameInput).classList);
    console.log((<HTMLInputElement>myNameInput)['errors']);
  }

  onDoSomething(){
    console.log(this.myName);
    console.log(this.myName.nativeElement.value);
  }

  checkInput(txtName){
    console.log(txtName.value);
    console.log(txtName['errors']);
  }

}
