import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { ManagerPage } from '../homeManager/homeManager';

@Component({
  templateUrl: 'tabsManager.html'
})
export class TabsManager {

  tab1Root = ManagerPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {
    
  }
}
