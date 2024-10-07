import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler) {
          const bsCollapse = new (window as any).bootstrap.Collapse(document.querySelector('#navbarNav'), {
            toggle: false
          });
          bsCollapse.hide();
        }
      }
    });
  }
}
