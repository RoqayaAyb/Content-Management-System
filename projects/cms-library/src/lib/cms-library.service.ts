import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CmsLibraryService {
  constructor() {}

  getLibraryInfo() {
    return 'This is the CMS Library service providing reusable functionalities.';
  }
}
