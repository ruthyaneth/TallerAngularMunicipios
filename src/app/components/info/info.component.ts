import { Component, OnInit } from '@angular/core';
import {MunicipiosService} from "../../services/municipios.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private _ms:MunicipiosService) { }

  ngOnInit() {
  }

}
