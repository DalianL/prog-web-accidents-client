import { Component } from '@angular/core';

import { AddPage } from '../add/add';
import { ContactPage } from '../contact/contact';
import { ManagerPage } from '../homeManager/homeManager';

@Component({
  templateUrl: 'tabsManager.html'
})
export class TabsManager {

  tab1Root = ManagerPage;
  tab2Root = AddPage;
  tab3Root = ContactPage;

  constructor() {
    
  }
}
