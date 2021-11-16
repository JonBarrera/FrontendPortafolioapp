import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imagenCarousel1 = '/assets/carrousel/web-imagen1.jpg'
  imagenCarousel2 = '/assets/carrousel/web-imagen2.jpg'
  imagenCarousel3 = '/assets/carrousel/web-imagen3.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
