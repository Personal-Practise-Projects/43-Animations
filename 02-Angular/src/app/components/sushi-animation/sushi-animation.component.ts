import { Component, OnInit } from '@angular/core';
import { animation } from './animation';

@Component({
  selector: 'app-sushi-animation',
  templateUrl: './sushi-animation.component.html',
  styleUrls: ['./sushi-animation.component.scss']
})

export class SushiAnimationComponent implements OnInit {
  ngOnInit() {
    animation();
  }
}
