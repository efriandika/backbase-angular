import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from '../environments/environment';
import { Title } from '@angular/platform-browser';

/**
 * Main Application Component
 * @author efriandika
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.initNavigationInterceptors();
  }

  /**
   * Set navigation interceptors
   */
  public initNavigationInterceptors(): void {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.makeTitle();
      }
    })
  }

  /**
   * Create page title automatically
   */
  public makeTitle(): void {
    let titleSource = this.getRouterTitleProperties(this.router.routerState, this.router.routerState.root);

    let title = titleSource.join(' - ') + ' - ' + environment.appName;

    // Set Document Title
    this.titleService.setTitle(title);
  }

  /**
   * collect that title data properties from all child routes
   *
   * @param state
   * @param parent
   */
  public getRouterTitleProperties(state: any, parent: any): any[] {
    let data = [];

    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getRouterTitleProperties(state, state.firstChild(parent)));
    }

    return data;
  }
}
