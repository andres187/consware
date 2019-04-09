import { Component, OnInit } from '@angular/core';
import { ICliente } from './cliente';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: ICliente[];

  constructor(private clientesservices: ClientesService) { }

  ngOnInit() {
    this.clientesservices.getClientes().subscribe(clientes => this.clientes = clientes, error => console.error(error));
  }

}
