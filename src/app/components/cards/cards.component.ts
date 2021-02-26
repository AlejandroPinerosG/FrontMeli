import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/service/httpclient/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {

  public listItems: any = [];

  constructor(
    private http: HttpClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (data) => {
        const param = data.search || '';
        let url = environment.enpoints.host;
        url += environment.enpoints.search;
        url = url.replace(':filter', param);
        this.http.get(url).subscribe(
          (info) => {
            if (info.items && info.items.length > 0) {
              this.listItems = info.items;
            }
          }
        );
      }
    );

  }
}

