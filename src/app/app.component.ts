import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Default Angular viwer";

  public get pdfUrl(): string {
    const url =
      "https://ng2-pdfjs-viewer.azurewebsites.net/assets/pdfjs/web/pdf-sample.pdf";
    return encodeURIComponent(url);
  }
}
