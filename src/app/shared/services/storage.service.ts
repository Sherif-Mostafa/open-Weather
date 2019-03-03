import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getLocalStorage(key: string) {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return value;
    } catch (error) {
      return localStorage.getItem(key);
    }
  }

  public setLocalStorage(key: string, value: any) {
    // Add to localstorage
    if (typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, String(value));
    }
  }

  public removeFromLocalStorage(key: string) {
    localStorage.removeItem(key);
  }

}

