import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlunosService } from '../alunos.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy{

  id: number;
  inscricao: Subscription;
  aluno: any;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router
  ) { }

  editarAluno() {
    
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnInit() {

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.aluno = this.alunosService.getAluno(this.id);
        if(this.aluno == null) {
          this.router.navigate(['/nao-encontrado'])
        }
      }
    );
  }

  ngOnDestroy() {
    
    this.inscricao.unsubscribe();
  }

}
