import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../../seo.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  public search: string;
  constructor(
    private router: Router,
    private titleService: Title,
    private seo: SeoService
  ) {
    this.search = '';
  }

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'search',
      description: 'busqueda Mercado Libre',
      image: 'https://http2.mlstatic.com/storage/developers-site-cms-admin/321781592385-366633181898-logo-developers.png',
      slug: 'search'
    });
  }


  redirecTo(): void {
    this.titleService.setTitle(this.search);
    this.router.navigate(['items/', this.search]);
    this.seo.generateTags({
      title: this.search,
      description: 'busqueda Mercado Libre',
      image: 'https://http2.mlstatic.com/storage/developers-site-cms-admin/321781592385-366633181898-logo-developers.png',
      slug: 'search'
    });
  }
}
