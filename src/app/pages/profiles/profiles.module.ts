import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesContainerComponent } from './profiles-container/profiles-container.component';
import { SharedModule } from '../../@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { profileReducer } from './profile-reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './profile-effects';
import { ProfileService } from './profile.service';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('profile', {
      profileState: profileReducer
    }),
    EffectsModule.forFeature([ProfileEffects])
  ],
  declarations: [ProfilesContainerComponent],
  providers: [ProfileService]
})
export class ProfilesModule { }
