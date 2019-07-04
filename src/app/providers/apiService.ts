import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class apiService {
constructor(private http: HttpClient) {
}

getCurrentWeatherData(): Promise<any> {
    return new Promise<any>((resolve, reject)=>{
        this.http.get("https://samples.openweathermap.org/data/2.5/weather", {
            params: {
                'q': 'London', 
                'appid':'b6907d289e10d714a6e88b30761fae22'
            }
        }).pipe(
            catchError(this.handleError)
          ).subscribe((data)=>{
            console.log("received data",data);
            resolve(data);
        });
    });
}

private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error.message}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

}