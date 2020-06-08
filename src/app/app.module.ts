import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CustomFormsModule } from 'ngx-custom-validators';
import { AuthGuardService } from 'shared/services/auth-guard.service';
import { SharedModule } from 'shared/shared.module';
import { firebaseConfigs } from 'src/environments/firebase-configs';

import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ShoppingModule } from './shopping/shopping.module';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfigs),
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }