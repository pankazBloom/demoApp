import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { testRoutingModule } from './test.routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    testRoutingModule
  ]
})
export class TestModule { }
