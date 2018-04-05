
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Ng4LoadingSpinnerJbkForkService } from './ng4LoadingSpinnerJbkFork.service';
import { Ng4LoadingSpinnerJbkForkComponent } from './ng4LoadingSpinnerJbkFork.component';

export * from './ng4LoadingSpinnerJbkFork.service';
export * from './ng4LoadingSpinnerJbkFork.component';

@NgModule({
  imports: [],
  declarations: [Ng4LoadingSpinnerJbkForkComponent],
  exports: [Ng4LoadingSpinnerJbkForkComponent],
  providers: [Ng4LoadingSpinnerJbkForkService]
})
export class Ng4LoadingSpinnerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Ng4LoadingSpinnerModule,
      providers: [Ng4LoadingSpinnerJbkForkService]
    };
  }
}
