import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeslaBatteryService } from './tesla-battery.service';
import { TeslaBatteryComponent } from './containers/tesla-battery/tesla-battery.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TeslaCarComponent } from './components/tesla-car/tesla-car.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    TeslaBatteryComponent,
    TeslaCarComponent
  ],
  providers: [
    TeslaBatteryService
  ],
  exports: [
    TeslaBatteryComponent
  ]
})
export class TeslaBatteryModule { }
