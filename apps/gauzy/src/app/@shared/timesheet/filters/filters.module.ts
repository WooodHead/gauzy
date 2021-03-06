import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters.component';
import { FormsModule } from '@angular/forms';
import { EmployeeMultiSelectModule } from '../../employee/employee-multi-select/employee-multi-select.module';
import {
	NbButtonModule,
	NbPopoverModule,
	NbSelectModule,
	NbDatepickerModule,
	NbIconModule,
	NbCalendarRangeModule,
	NbInputModule
} from '@nebular/theme';
import { Ng5SliderModule } from 'ng5-slider';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared.module';
import { ProjectSelectModule } from '../../project-select/project-select.module';

@NgModule({
	declarations: [FiltersComponent],
	exports: [FiltersComponent],
	imports: [
		CommonModule,
		SharedModule,
		FormsModule,
		EmployeeMultiSelectModule,
		NbButtonModule,
		NbPopoverModule,
		NbSelectModule,
		NbDatepickerModule,
		NbIconModule,
		NbInputModule,
		Ng5SliderModule,
		TranslateModule,
		ProjectSelectModule,
		NbCalendarRangeModule
	]
})
export class FiltersModule {}
