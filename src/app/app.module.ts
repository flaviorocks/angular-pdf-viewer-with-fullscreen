import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { PdfJsViewerModule } from "ng2-pdfjs-viewer";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, FormsModule, PdfJsViewerModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
