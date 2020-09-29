import { Component, OnInit } from '@angular/core';
import {JsonReaderService} from '../_services/json-reader.service';
import {WeatherJSON} from '../_models/weather-json';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  constructor(private jsonReaderService: JsonReaderService) { }

  ngOnInit(): void {
  }
}
