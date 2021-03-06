import { CadastroOrcamentoPage } from './../cadastroorcamentos/cadastroorcamentos';
import { VeiculoService } from './../../services/veiculo-service';
import { Veiculo } from './../../model/veiculo';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-veiculos',
  templateUrl: 'veiculos.html',
  providers: [VeiculoService]
})
export class VeiculosPage {

  public lista: Array<Veiculo>;
  public veiculo: Veiculo;

  constructor(public navCtrl: NavController,
              public veiculoService: VeiculoService,) {

    this.buscarVeiculo();             
  }

  buscarVeiculo(){
    this.veiculoService.listaveiculo(new Veiculo()).subscribe(response => {
      this.lista = response;
    }, error =>{
      console.error(error);
    })
  }

  abrirOrcamento(veiculo){
    console.log(veiculo);
    this.navCtrl.push(CadastroOrcamentoPage, {veiculoparam: veiculo});
  }
}

