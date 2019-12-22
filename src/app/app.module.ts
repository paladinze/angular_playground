import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GundamsComponent } from './gundams/gundams.component';
import { GundamListComponent } from './gundams/gundam-list/gundam-list.component';
import { GundamItemComponent } from './gundams/gundam-list/gundam-item/gundam-item.component';
import { GundamDetailComponent } from './gundams/gundam-detail/gundam-detail.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { WeaponEditComponent } from './weapons/weapon-edit/weapon-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GundamsComponent,
    GundamListComponent,
    GundamItemComponent,
    GundamDetailComponent,
    WeaponsComponent,
    WeaponEditComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
