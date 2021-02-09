import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListAllComponent {

  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['modalidade', 'date', 'municipio', 'position'];
  expandedElement: PeriodicElement | null;

}
export interface PeriodicElement {
  objeto: string;
  position: number;
  modalidade: string;
  date: string;
  municipio: string;
  status: string;
  file: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    modalidade: 'Pregão Presencial',
    date: '11/02/2021',
    municipio: 'Ladário',
    objeto: `Prestação de serviço nenhum.`,
    status: 'Iniciado',
    file: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
  },
  {
    position: 4,
    modalidade: 'Pregão Presencial',
    date: '11/02/2021',
    municipio: 'Ladário',
    objeto: `Aquisição de nadastandard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
    status: 'Iniciado',
    file: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
  }, 
  {
    position: 3,
    modalidade: 'Pregão Presencial',
    date: '11/02/2021',
    municipio: 'Ladário',
    objeto: `Aquisição de nadastandard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
    status: 'Iniciado',
    file: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
  }, 
  {
    position: 2,
    modalidade: 'Pregão Presencial',
    date: '11/02/2021',
    municipio: 'Ladário',
    objeto: `Aquisição de nadastandard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
    status: 'Iniciado',
    file: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
  }, 
];