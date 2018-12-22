import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages/pages.service';
import { Product } from 'src/app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products: Product[];

  constructor(private pageService: PagesService) { }

  ngOnInit() {
    this.pageService.home().subscribe(res => {
      this.products = res.data.products;
    });
  }

}
