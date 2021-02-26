import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClientService } from 'src/app/service/httpclient/http-client.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {

  public producto: any;
  public description = '';

  constructor(
    private http: HttpClientService,
    private route: ActivatedRoute,
    private titleService: Title,
    private seo: SeoService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (data) => {
        const param = data.id || '';
        let url = environment.enpoints.host;
        url += environment.enpoints.detail;
        url = url.replace(':filter', param);
        this.http.get(url).subscribe(
          (info: any) => {
            if (info) {
              this.producto = info.items;
              this.titleService.setTitle(this.producto.title);
              this.seo.generateTags({
                title: this.producto.title,
                description: this.producto.description,
                image: this.producto.picture,
                slug: this.producto.id
              });
            }
          }
        );
      }
    );
  }

}
