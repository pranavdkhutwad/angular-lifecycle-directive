import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestFormComponent } from './test-form/test-form.component';
import { FormsModule } from '@angular/forms';
import { TestEmpComponent } from './test-emp/test-emp.component';
import { DomHighlightDirective } from './directives/dom-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestFormComponent,
    TestEmpComponent,
    DomHighlightDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
