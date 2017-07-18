import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})

export class LoginComponent implements OnInit {
  @Input() value: string;
  @Input() showPrompt: boolean;
  @Input() placeholder: string;
  @Input() title: string;
  @Input() template: string;
  @Input() okText: string;
  @Input() cancelText: string;
  @Output() valueEmitted = new EventEmitter<string>();

  public textboxclass = '';

  constructor() {
    this.okText = 'OK';
    this.cancelText = 'Cancel';
  }

  ngOnInit() {
  }

  onClick(event){
    //alert(this) ;
  }

  onBlur(event){
    if(event.target.value == ""){
      event.target.classList.remove('used');
    }else{
      event.target.classList.add('used');
    }
  }

  emitValue(value) {
    this.valueEmitted.emit(value);
  }
}
