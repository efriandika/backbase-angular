import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * HTTP Client
 * @author efriandika
 */
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private host?: string;

  constructor(
    private http: HttpClient,
  ) {
  }

  /**
   * Perform api request to the back end by using GET method
   * @see {@link http://www.restapitutorial.com/lessons/httpmethods.html} for further detail
   *
   * @param path
   * @param params
   * @param headers
   */
  public get<T>(path: string, params: object = {}, headers: { [name: string]: string } = {}): Observable<T> {
    return this.http.get<T>(this.getFullURL(path), {
      params: this.makeHttpParams(params),
      headers: new HttpHeaders(headers)
    });
  }

  /**
   * Perform api request to the back end by using PUT method
   * @see {@link http://www.restapitutorial.com/lessons/httpmethods.html} for further detail
   *
   * @param path
   * @param body
   * @param params
   * @param headers
   */
  public put<T>(path: string, body: object = {}, params: object = {}, headers: { [name: string]: string } = {}): Observable<T> {
    return this.http.put<T>(this.getFullURL(path), JSON.stringify(body), {
      params: this.makeHttpParams(params),
      headers: new HttpHeaders(headers)
    });
  }

  /**
   * Perform api request to the back end by using POST method
   * @see {@link http://www.restapitutorial.com/lessons/httpmethods.html} for further detail
   *
   * @param path
   * @param body
   * @param params
   * @param headers
   */
  public post<T>(path: string, body: object = {}, params: object = {}, headers: { [name: string]: string } = {}): Observable<T> {
    return this.http.post<T>(this.getFullURL(path), JSON.stringify(body), {
      params: this.makeHttpParams(params),
      headers: new HttpHeaders(headers)
    });
  }

  /**
   * Perform api request to the back end by using POST method
   * @see {@link http://www.restapitutorial.com/lessons/httpmethods.html} for further detail
   *
   * @param path
   * @param params
   * @param headers
   */
  public delete<T>(path: string, params: object = {}, headers: { [name: string]: string } = {}): Observable<T> {
    return this.http.delete<T>(this.getFullURL(path), {
      params: this.makeHttpParams(params),
      headers: new HttpHeaders(headers)
    });
  }

  /**
   * Set custom host
   *
   * @param host
   */
  public setHost(host: string): HttpService {
    this.host = host;
    return this;
  }

  /**
   * Convert an object into Http Params based on angular > 4.3.x
   *
   * @param object
   * @return HttpParams
   */
  public makeHttpParams(object: any): HttpParams {
    let params: HttpParams = new HttpParams();

    // Make it flatten
    if (object != null) {
      object = this.flatten(object);
    }

    for (let property in object) {
      if (object != null && object.hasOwnProperty(property)) {
        if (object[property] != null && Array.isArray(object[property])) {
          object[property].forEach((element: string | []): any => {
            params = params.append(property, String(element));
          });
        } else if (object[property] != null) {
          params = params.set(property, String(object[property]));
        } else {
          params = params.set(property, '');
        }
      }
    }

    return params;
  }

  /**
   * Flatten object by using dot notation
   */
  private flatten(object: object, separator = '.'): any {

    const isValidObject = (value: {}) => {
      if (!value) {
        return false;
      }

      const isArray = Array.isArray(value);
      const isObject = Object.prototype.toString.call(value) === '[object Object]';
      const hasKeys = !!Object.keys(value).length;

      return !isArray && isObject && hasKeys;
    };

    const walker = (child: any, path: string[] = []): any => {
      const source = Object.keys(child).map(key => {
        if (isValidObject(child[key])) {
          return walker(child[key], path.concat([key]));
        } else {
          return { [path.concat([key]).join(separator)]: child[key] };
        }
      });

      return Object.assign({}, ...source);
    };

    return Object.assign({}, walker(object));
  }

  /**
   * Get full URL for API Service. It uses host in env config (by default),
   * but we can specify special host to specific request (by using setHost.
   * for example: this.apiService.setHost('http://other').get(...) )
   *
   * @param path
   * @returns {string}
   */
  private getFullURL(path: string): string {
    if (this.host != null) {
      return `${this.host}${path}`;
    } else {
      return `${environment.backendBaseURL}${path}`;
    }
  }
}
