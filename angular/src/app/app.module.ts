import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MateriasComponent } from './materias/materias.component';
import { SliderComponent } from './slider/slider.component';
import { GoogleMapsContainerComponent } from './google-maps-container/google-maps-container.component';
import { InfosAdicionaisComponent } from './infos-adicionais/infos-adicionais.component';
import { FormularioContatoComponent } from './formulario-contato/formulario-contato.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MateriasComponent,
    SliderComponent,
    GoogleMapsContainerComponent,
    InfosAdicionaisComponent,
    FormularioContatoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
