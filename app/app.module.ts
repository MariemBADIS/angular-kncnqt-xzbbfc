import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ListBoxAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';

import { AppComponent } from '../app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ListBoxAllModule,
    RichTextEditorAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }