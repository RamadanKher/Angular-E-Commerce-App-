import { RouterModule ,Router} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { SpinerComponent } from './component/spiner/spiner.component';
import { SelectComponent } from './component/select/select.component';
import { FooterComponent } from './component/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinerComponent,
    SelectComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    
  ],
  exports:[
    HeaderComponent,SpinerComponent,SelectComponent,FooterComponent
  ]
})
export class SharedModule { }
