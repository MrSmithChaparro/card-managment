import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent {
  franchising = 'VISA'
  rate = 48
  quota = 1000000
  
}
