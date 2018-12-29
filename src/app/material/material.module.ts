import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatIconModule, MatListModule, MatFormFieldModule, MatInputModule } from '@angular/material';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})
export class MaterialModule { }
