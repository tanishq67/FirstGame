import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import { RouterModule } from '@angular/router';
import { NbThemeModule, NbSidebarModule, NbLayoutModule, NbButtonModule} from '@nebular/theme';
import { routes } from '@nebular/auth';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, { useHash: true }),
    NbThemeModule.forRoot({name : 'cosmic'}),
    NbButtonModule,
    NbLayoutModule,
    NbSidebarModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
