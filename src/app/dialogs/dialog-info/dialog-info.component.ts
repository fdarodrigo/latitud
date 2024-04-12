import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HelpersService } from 'src/app/services/helpers.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-info.component.html',
  styleUrls: ['./dialog-info.component.scss'],
  standalone: true,
  imports: [MatDialogModule, CommonModule, TranslateModule],
})
export class DialogInfoComponent implements OnInit {
  amenitiesPt!: string[];

  constructor(public dialogRef: MatDialogRef<DialogInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private translate: TranslateService,
    private helper: HelpersService ) {
  }

  ngOnInit() {

    console.log(this.data)

    if (this.data.lang === "pt") {
      this.translate.use('pt')
      for (let i = 0; i < this.data.amenities.length; i++) {
        const amenity = this.data.amenities[i];
        const translatedAmenity = this.translateAmenity(amenity);
        if (translatedAmenity !== amenity) {
            this.data.amenities[i] = translatedAmenity;
        }
    }
    }
    else if (this.data.lang === "en") {
      this.translate.use('en')
    }
  }

  translateDescription(descricao: string): string {
    return this.helper.translateDescription(descricao)
  }

  getIconClass(amenity: string): string | undefined {
    console.log('icon amenity> ', this.data.lang)
    if (amenity === '...') {
      return undefined;
    }

    return this.data.lang === "pt" ? this.helper.iconMapPt[amenity] : this.helper.iconMapEn[amenity];
  }

  translateAmenity(amenity: string): string {  
  
      if (this.helper.translationMap.hasOwnProperty(amenity)) {
        return this.helper.translationMap[amenity];
      } else return ''
  }


}
