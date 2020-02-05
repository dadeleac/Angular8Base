import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable()
export class MessageSnackBarService{
    
    setAutoHide: boolean = true;
    autoHide: number = 5000; 
    horizontalPosition: MatSnackBarHorizontalPosition = 'center'; 
    verticalPosition: MatSnackBarVerticalPosition = 'bottom'; 
    
    constructor(public snackBar : MatSnackBar) {  }

    show(message: string, action? : string, duration?: number){

        let config = new MatSnackBarConfig(); 
        config.verticalPosition = this.verticalPosition; 
        config.horizontalPosition = this.horizontalPosition; 
        config.duration = this.setAutoHide ? (duration != null ? duration : this.autoHide) : 0; 
        this.snackBar.open(message, (action != null ? action : 'OK'), config); 
    }


}