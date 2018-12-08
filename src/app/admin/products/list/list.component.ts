import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.index();
  }

}
