import { NgModule } from '@angular/core';
import { MatButtonModule,
          MatSidenavModule,
          MatMenuModule,
          MatIconModule,
          MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class MaterialModule {}
