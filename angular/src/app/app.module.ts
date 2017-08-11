import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http'; 



//Components
import { AppComponent } from './app.component';
//Modules
import { FooterModule } from './footer/footer.module';
import { FormularioContatoModule } from './formulario-contato/formulario-contato.module';
import { GoogleMapsContainerModule } from './google-maps-container/google-maps-container.module';
import { HeaderModule } from './header/header.module';
import { InfosAdicionaisModule } from './infos-adicionais/infos-adicionais.module';
import { SliderModule } from './slider/slider.module';
import { MateriasModule } from './materias/materias.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FooterModule,
    FormularioContatoModule,
    GoogleMapsContainerModule,
    HeaderModule,
    InfosAdicionaisModule,
    SliderModule,
    MateriasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
