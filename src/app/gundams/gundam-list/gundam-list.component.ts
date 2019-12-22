import { Component, OnInit } from '@angular/core';
import { Gundam } from '../models/gundam.model';

@Component({
  selector: 'app-gundam-list',
  templateUrl: './gundam-list.component.html',
  styleUrls: ['./gundam-list.component.scss']
})
export class GundamListComponent implements OnInit {

  gundams: Gundam[] = [
    new Gundam('freedom', 'seed series', false, 'https://images.unsplash.com/photo-1554131905-cea2b924e23e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'),
    new Gundam('unicorn', 'seed series', true, 'https://images.unsplash.com/photo-1561279629-78600d1156b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80'),
    new Gundam('freedom', 'seed series', false, 'https://images.unsplash.com/photo-1554131905-cea2b924e23e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
