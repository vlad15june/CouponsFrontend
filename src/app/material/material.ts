import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

@NgModule({
	imports: [
		MatListModule,
		MatInputModule,
		MatFormFieldModule,
		MatGridListModule,
		MatButtonModule,
		MatToolbarModule,
		MatMenuModule,
		MatIconModule
	],
	exports: [
		MatListModule,
		MatInputModule,
		MatFormFieldModule,
		MatGridListModule,
		MatButtonModule,
		MatToolbarModule,
		MatMenuModule,
		MatIconModule
	]
})

export class MaterialModule { }
