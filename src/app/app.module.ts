import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { BackgroundComponent } from './background/background.component';
import { ButtonComponent } from './button/button.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    ButtonComponent,
    ContentAreaComponent,
    CardComponent,
    MenuBarComponent,
    FormsModule,
    ReactiveFormsModule,
    ModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    BackgroundComponent,
    ButtonComponent,
    ContentAreaComponent,
    CardComponent,
    MenuBarComponent
  ]
})
export class AppModule { }
