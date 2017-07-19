import { Component, OnInit , ViewEncapsulation} from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss", "./menu.component.less"],
  encapsulation: ViewEncapsulation.None
})

export class MenuComponent {

  //public sidenav: any;
  
  dismiss(event,sidenav){
    sidenav.toggle();
    event.target.style.display= 'none'
  }
  /*
  onHover(event){
    event.target.classList.add('hover');
  }


  onHoverExit(event){
    event.target.classList.remove('hover');
  }*/

}
