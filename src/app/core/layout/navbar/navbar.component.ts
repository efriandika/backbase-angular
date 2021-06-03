import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

/**
 * Navbar component
 *
 * @author
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public appName: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.appName = environment.appName;
  }
}
