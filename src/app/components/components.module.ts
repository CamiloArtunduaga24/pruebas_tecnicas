import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContactEmptyComponent } from './contact-empty/contact-empty.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HeaderComponent, ContactEmptyComponent],
  imports: [CommonModule, TranslateModule],
  exports: [HeaderComponent, ContactEmptyComponent],
})
export class ComponentsModule {}
