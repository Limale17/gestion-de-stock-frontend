import { Component, OnInit } from '@angular/core';
import { Filiere } from '../modele/filiere.modele';
import { FiliereService } from '../service/filiere.service';

@Component({
  selector: 'app-filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.css']
})
export class FiliereComponent implements OnInit {

  filiere! : Filiere[];
  constructor(private filiereService : FiliereService) { }

  ngOnInit(): void {

    this.filiereService.getAllFilliere().subscribe(data=>{
      this.filiere = data;
    })

  }

}
