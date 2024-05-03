import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  @Input() dish: any;
  combos = [{
    name: 'Combo "Sabores del mar"',
    image: 'assets/images/sushi-salmon-aguacate.jpg',
    description: 'Sushi roll de salmón y palta + Sopa de pescado con vegetales',
    calories: '300 + 200 kcal',
    proteins: '15 + 10 g',
    fats: '10 + 5 g',
    price: 'S/ 28.90',
  }, {
    name: 'Combo "Fusión Peruana"',
    image: 'assets/images/lomo-saltado.jpg',
    description: 'Lomo saltado + Causa rellena de atún',
    calories: '400 + 250 kcal',
    proteins: '20  +  10 g',
    fats: '15  +  10  g',
    price: 'S/ 28.90',
  }, {
    name: 'Combo "Peruvian Delight"',
    image: 'assets/images/tacutacu-lomo.jpg',
    description: 'Tacu tacu con lomo saltado + Ají de gallina con arroz integral',
    calories: '500 + 250 kcal',
    proteins: '30  +  15 g',
    fats: '20  +  18  g',
    price: 'S/ 28.90',
  }, {
    name: 'Combo "Cocina Criolla"',
    image: 'assets/images/seco-de-cordero.jpg',
    description: 'Ají de gallina con arroz + Seco de cordero con frejoles y arroz integral',
    calories: '500 + 450 kcal',
    proteins: '20  +  25 g',
    fats: '25  +  20  g',
    price: 'S/ 28.90',
  }, {
    name: 'Combo "Criollo Especial"',
    image: 'assets/images/arroz-con-pato.jpg',
    description: 'Arroz con pato + Chupe de camarones',
    calories: '450 + 400 kcal',
    proteins: '25  +  20 g',
    fats: '20  +  15  g',
    price: 'S/ 28.90',
  }, {
    name: 'Combo "Vegetariano Fresco"',
    image: 'assets/images/ensalada-de-quinoa.jpg',
    description: 'Ensalada de quinoa con vegetales frescos +  Papa rellena de espinacas y queso',
    calories: '300 + 250 kcal',
    proteins: '10  +  8 g',
    fats: '10  +  10  g',
    price: 'S/ 28.90',
  }];

  addToCard() {
    console.log('Added to card');
  }
}



