import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private apiUrl = 'http://localhost:8000/core/web_scrape/';

  constructor(private http: HttpClient) { }

  getDados(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getDadosMock(): Observable<any> {
    const dadosMock = {
      "data": [
        {
          "endereco": "Rua 3 - Parque Iracema, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 106,
          "valor_aluguel": 1100,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Elevador",
            "Varanda",
            "Academia",
            "Playground",
            "Varanda gourmet"
          ],
          "descricao": "Apartamento com 3 Quartos para venda ou aluguel, 106m² em Parque Iracema, Fortaleza",
          "coords": {
            "lat": -3.802647,
            "lng": -38.4983268
          }
        },
        {
          "endereco": "Rua Dom Quintino, 1328 - Pirambú, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 70,
          "valor_aluguel": 4200,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [

          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 70m² em Pirambú, Fortaleza",
          "coords": {
            "lat": -3.7095435,
            "lng": -38.5603668
          }
        },
        {
          "endereco": "Rua Murará, 101 - Paupina, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 57,
          "valor_aluguel": 800,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Playground",
            "Salão de festas"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 57m² em Paupina, Fortaleza",
          "coords": {
            "lat": -3.8439561,
            "lng": -38.4930956
          }
        },
        {
          "endereco": "Rua Eduardo Garcia - Aldeota, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 65,
          "valor_aluguel": 1050,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 2 Quartos para alugar, 65m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7397941,
            "lng": -38.4940919
          }
        },
        {
          "endereco": "Rua Evaristo da Veiga, 140 - Parque Iracema, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 116,
          "valor_aluguel": 1300,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 3 Quartos para alugar, 116m² em Parque Iracema, Fortaleza",
          "coords": {
            "lat": -3.807807899999999,
            "lng": -38.4955479
          }
        },
        {
          "endereco": "Rua Eunice Weaver, 1425 - Sapiranga / Coité, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 66,
          "valor_aluguel": 1550,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Varanda",
            "Piscina",
            "Churrasqueira",
            "Salão de festas"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 66m² em Sapiranga / Coité, Fortaleza",
          "coords": {
            "lat": -3.7935749,
            "lng": -38.4621247
          }
        },
        {
          "endereco": "Rua Professor Otávio Lobo, 681 - Cocó, Fortaleza - CE",
          "banheiros": 2,
          "vagas": 2,
          "area": 105,
          "valor_aluguel": 3000,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [],
          "descricao": null,
          "coords": {
            "lat": -3.7455114,
            "lng": -38.4793844
          }
        },
        {
          "endereco": "Rua A do Loteamento Residencial Célio Gurgel, 227 - Barroso, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 42,
          "valor_aluguel": 1100,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Garagem"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 42m² em Barroso, Fortaleza",
          "coords": {
            "lat": -3.821732,
            "lng": -38.5817975
          }
        },
        {
          "endereco": "Rua Barão de Aracati, 160 - Meireles, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 71,
          "valor_aluguel": 1750,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Elevador",
            "Interfone",
            "Mobiliado",
            "Vista para o mar"
          ],
          "descricao": "Apartamento com 2 Quartos para venda ou aluguel, 71m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.723098899999999,
            "lng": -38.5091703
          }
        },
        {
          "endereco": "Rua Melo César, 358 - Cidade dos Funcionários, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 180,
          "valor_aluguel": 2250,
          "url_imagem": "../assets/img/properties/house3.jpg",
          "amenidades": [
            "Varanda",
            ,
            "Garagem",
            "Área de serviço"
          ],
          "descricao": "Casa com 2 Quartos para alugar, 180m² em Cidade dos Funcionários, Fortaleza",
          "coords": {
            "lat": -3.796779599999999,
            "lng": -38.5033927
          }
        },
        {
          "endereco": "Rua Crisanto Arruda - Passaré, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 47,
          "valor_aluguel": 4350,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 47m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.8138221,
            "lng": -38.523546
          }
        },
        {
          "endereco": "Rua Antônio Candeia, 30 - Guajiru, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 50,
          "valor_aluguel": 2050,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Varanda",
            "Garagem",
            "Cozinha",
            "Jardim",

          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 50m² em Guajiru, Fortaleza",
          "coords": {
            "lat": -3.8283112,
            "lng": -38.4804338
          }
        },
        {
          "endereco": "Avenida Desembargador Moreira, 2120 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 49,
          "valor_aluguel": 1200,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 49m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.743545,
            "lng": -38.500781
          }
        },
        {
          "endereco": "Rua Coronel Chico Alves, 21 - Passaré, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 45,
          "valor_aluguel": 3250,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Garagem"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 45m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.8070699,
            "lng": -38.5263296
          }
        },
        {
          "endereco": "Rua Afonso Celso, 423 - Aldeota, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 75,
          "valor_aluguel": 2200,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Piscina",
            "Mobiliado",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado"
          ],
          "descricao": "Apartamento com 2 Quartos para venda ou aluguel, 75m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7365079,
            "lng": -38.5079335
          }
        },
        {
          "endereco": "Parque Iracema, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 53,
          "valor_aluguel": 1850,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Área de serviço",
            "Varanda gourmet"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 53m² em Parque Iracema, Fortaleza",
          "coords": {
            "lat": -3.8055771,
            "lng": -38.49746
          }
        },
        {
          "endereco": "Rua Amâncio Valente, 1555 - Cambeba, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 1,
          "area": 63,
          "valor_aluguel": 4950,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Varanda"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 63m² em Cambeba, Fortaleza",
          "coords": {
            "lat": -3.8071692,
            "lng": -38.4839189
          }
        },
        {
          "endereco": "Rua Joaquim Torres, 654 - Joaquim Tavora, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 302,
          "valor_aluguel": 4350,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 302m² em Joaquim Tavora, Fortaleza",
          "coords": {
            "lat": -3.7420371,
            "lng": -38.5172212
          }
        },
        {
          "endereco": "Rua Padre Constantino, 19 - Jacarecanga, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 48,
          "valor_aluguel": 4850,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Piscina",
            "Varanda",
            "Academia",
            "Garagem"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 48m² em Jacarecanga, Fortaleza",
          "coords": {
            "lat": -3.7164706,
            "lng": -38.5458408
          }
        },
        {
          "endereco": "Rua Tenente Roma, 5405 - Montese, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 1,
          "area": 88,
          "valor_aluguel": 1500,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Playground",
            "Quadra poliesportiva",
            "Área de serviço"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 88m² em Montese, Fortaleza",
          "coords": {
            "lat": -3.7675015,
            "lng": -38.5133246
          }
        },
        {
          "endereco": "Rua Doutor Rodrigo Codes Sandoval, 250 - Mondubim, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 1,
          "area": 89,
          "valor_aluguel": 3500,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 89m² em Mondubim, Fortaleza",
          "coords": {
            "lat": -3.8048948,
            "lng": -38.5716441
          }
        },
        {
          "endereco": "Rua André Dall'Olio, 530 - Papicu, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 63,
          "valor_aluguel": 2000,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Condomínio fechado",
            "Elevador",
            "Varanda",
            "Área de serviço"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 63m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7367417,
            "lng": -38.47969459999999
          }
        },
        {
          "endereco": "Avenida da Abolição, 4792 - Mucuripe, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 63,
          "valor_aluguel": 2200,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Mobiliado",
            "Elevador",
            "Condomínio fechado",
            "Varanda",
            "Academia"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 63m² em Mucuripe, Fortaleza",
          "coords": {
            "lat": -3.7222955,
            "lng": -38.47881160000001
          }
        },
        {
          "endereco": "Rua Solon Pinheiro, 683 - José Bonifácio, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 11111,
          "valor_aluguel": 3350,
          "url_imagem": "../assets/img/properties/house2.jpg",
          "amenidades": [],
          "descricao": "Casa com 3 Quartos para alugar, 11111m² em José Bonifácio, Fortaleza",
          "coords": {
            "lat": -3.7363739,
            "lng": -38.5282258
          }
        },
        {
          "endereco": "Sapiranga, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 160,
          "valor_aluguel": 4000,
          "url_imagem": "../assets/img/properties/house5.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Condomínio fechado",
            "Área de serviço",
            "Cozinha"
          ],
          "descricao": "Casa de Condomínio com 3 Quartos para alugar, 160m² em Sapiranga, Fortaleza",
          "coords": {
            "lat": -3.7952935,
            "lng": -38.4757701
          }
        },
        {
          "endereco": "Rua Henriqueta Galeno, 1040 - Cocó, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 98,
          "valor_aluguel": 2800,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 3 Quartos para alugar, 98m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.748269799999999,
            "lng": -38.4903922
          }
        },
        {
          "endereco": "Rua José Mário Mamede, 159 - Edson Queiroz, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 68,
          "valor_aluguel": 3050,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Academia"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 68m² em Edson Queiroz, Fortaleza",
          "coords": {
            "lat": -3.7877911,
            "lng": -38.478111
          }
        },
        {
          "endereco": "Rua Paulo Firmeza, 1608 - Tauape, Fortaleza - CE",
          "area": 407,
          "valor_aluguel": 2450,
          "url_imagem": "../assets/img/properties/ground3.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar, 407m² em Tauape, Fortaleza",
          "coords": {
            "lat": -3.7565734,
            "lng": -38.5049988
          }
        },
        {
          "endereco": "Avenida Desembargador Moreira, 2800 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": 2900,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Varanda gourmet"
          ],
          "descricao": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7500892,
            "lng": -38.5031234
          }
        },
        {
          "endereco": "Avenida Mister Hull, 4148 - Padre Andrade, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 35,
          "valor_aluguel": 1850,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 35m² em Padre Andrade, Fortaleza",
          "coords": {
            "lat": -3.7377538,
            "lng": -38.5813294
          }
        },
        {
          "endereco": "Rua Eduardo Novaes, 250 - Sapiranga, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 125,
          "valor_aluguel": 950,
          "url_imagem": "../assets/img/properties/house5.jpg",
          "amenidades": [
            "Churrasqueira",
            "Condomínio fechado",
            "Cozinha",
            "Piscina",
            "Área de serviço"
          ],
          "descricao": "Casa de Condomínio com 3 Quartos para alugar, 125m² em Sapiranga, Fortaleza",
          "coords": {
            "lat": -3.800616,
            "lng": -38.4772786
          }
        },
        {
          "endereco": "Rua Vicente Linhares, 521 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 34,
          "valor_aluguel": 2650,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 34m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7420164,
            "lng": -38.4998565
          }
        },
        {
          "endereco": "Vila Três Américas, 1064 - Itaperi, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 95,
          "valor_aluguel": 4400,
          "url_imagem": "../assets/img/properties/house5.jpg",
          "amenidades": [
            ,
            "Área de serviço",
            "Armário embutido",
            "Interfone"
          ],
          "descricao": "Casa com 3 Quartos para alugar, 95m² em Itaperi, Fortaleza",
          "coords": {
            "lat": -3.787515,
            "lng": -38.5265098
          }
        },
        {
          "endereco": "Vila Três Américas, 114 - Maraponga, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 200,
          "valor_aluguel": 1450,
          "url_imagem": "../assets/img/properties/house1.jpg",
          "amenidades": [
            "Cozinha",
            "Área de serviço",
            ,

          ],
          "descricao": "Casa com 3 Quartos para venda ou aluguel, 200m² em Maraponga, Fortaleza",
          "coords": {
            "lat": -3.793095,
            "lng": -38.5659336
          }
        },
        {
          "endereco": "Avenida Rui Barbosa, 595 - Meireles, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 372,
          "valor_aluguel": 2150,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Copa",
            "Área de serviço"
          ],
          "descricao": "Ponto Comercial para alugar, 372m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7282209,
            "lng": -38.5066921
          }
        },
        {
          "endereco": "Rua Coronel Honório Vieira, 735 - Parque Manibura, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 67,
          "valor_aluguel": 2350,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 2 Quartos para alugar, 67m² em Parque Manibura, Fortaleza",
          "coords": {
            "lat": -3.7901543,
            "lng": -38.4868539
          }
        },
        {
          "endereco": "Rua Vicente Linhares, 521 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 33,
          "valor_aluguel": 2350,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 33m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7420164,
            "lng": -38.4998565
          }
        },
        {
          "endereco": "Rua Antonina do Norte, 194 - Sao Gerardo, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 1,
          "area": 80,
          "valor_aluguel": 800,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Conexão à internet"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 80m² em Sao Gerardo, Fortaleza",
          "coords": {
            "lat": -3.730291,
            "lng": -38.5538035
          }
        },
        {
          "endereco": "Avenida Viena Weyne, 510 - Cambeba, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 216,
          "valor_aluguel": 3400,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 216m² em Cambeba, Fortaleza",
          "coords": {
            "lat": -3.801849,
            "lng": -38.489821
          }
        },
        {
          "endereco": "Rua Pereira de Miranda - Papicu, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 1,
          "area": 70,
          "valor_aluguel": 1650,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Academia"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 70m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7411076,
            "lng": -38.4778514
          }
        },
        {
          "endereco": "Rua Júlio Alcides, 320 - Maraponga, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 43,
          "valor_aluguel": 1000,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Playground",
            "Área de serviço",
            "Piscina para adulto",
            "Churrasqueira",
            "Piscina"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 43m² em Maraponga, Fortaleza",
          "coords": {
            "lat": -3.788962199999999,
            "lng": -38.5626947
          }
        },
        {
          "endereco": "Rua Equador, 1198 - Parangaba, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 60,
          "valor_aluguel": 1450,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 60m² em Parangaba, Fortaleza",
          "coords": {
            "lat": -3.7780885,
            "lng": -38.5539582
          }
        },
        {
          "endereco": "Rua Desembargador Lauro Nogueira, 1267 - Papicu, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 157,
          "valor_aluguel": 3050,
          "url_imagem": "../assets/img/properties/house4.jpg",
          "amenidades": [
            "Cozinha",

          ],
          "descricao": "Casa com 3 Quartos para alugar, 157m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7410804,
            "lng": -38.4747965
          }
        },
        {
          "endereco": "Rua das Laranjeiras, 455 - Lagoa Redonda, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 83,
          "valor_aluguel": 750,
          "url_imagem": "../assets/img/properties/house1.jpg",
          "amenidades": [
            "Churrasqueira",
            "Condomínio fechado",
            ,
            "Ar-condicionado"
          ],
          "descricao": "Casa de Condomínio com 3 Quartos para alugar, 83m² em Lagoa Redonda, Fortaleza",
          "coords": {
            "lat": -3.8204159,
            "lng": -38.4497579
          }
        },
        {
          "endereco": "Rua José Cavalcante Sobrinho, 120 - Messejana, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 63,
          "valor_aluguel": 3900,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Área de serviço",
            "Playground",
            "Quadra poliesportiva"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 63m² em Messejana, Fortaleza",
          "coords": {
            "lat": -3.8364575,
            "lng": -38.4868426
          }
        },
        {
          "endereco": "Rua A Lot Messejana, 25 - Paupina, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 46,
          "valor_aluguel": 1200,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 2 Quartos para alugar, 46m² em Paupina, Fortaleza",
          "coords": {
            "lat": -3.8445236,
            "lng": -38.4916609
          }
        },
        {
          "endereco": "Rua das Laranjeiras, 455 - Lagoa Redonda, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 83,
          "valor_aluguel": 2350,
          "url_imagem": "../assets/img/properties/house4.jpg",
          "amenidades": [
            "Churrasqueira",
            "Condomínio fechado",
            ,
            "Ar-condicionado"
          ],
          "descricao": "Casa de Condomínio com 3 Quartos para alugar, 83m² em Lagoa Redonda, Fortaleza",
          "coords": {
            "lat": -3.8204159,
            "lng": -38.4497579
          }
        },
        {
          "endereco": "Maraponga, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 45,
          "valor_aluguel": 2750,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Área de serviço"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 45m² em Maraponga, Fortaleza",
          "coords": {
            "lat": -3.793095,
            "lng": -38.5659336
          }
        },
        {
          "endereco": "Rua Taquatiara, 100 - Messejana, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 55,
          "valor_aluguel": 4850,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Academia",
            "Playground",
            "Salão de festas"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 55m² em Messejana, Fortaleza",
          "coords": {
            "lat": -3.8303781,
            "lng": -38.5010523
          }
        },
        {
          "endereco": "Rua Estrela do Norte, 208 - Álvaro Weyne, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 100,
          "valor_aluguel": 2350,
          "url_imagem": "../assets/img/properties/house3.jpg",
          "amenidades": [
            "Cozinha",
            "Área de serviço"
          ],
          "descricao": "Casa com 2 Quartos para alugar, 100m² em Álvaro Weyne, Fortaleza",
          "coords": {
            "lat": -3.7181368,
            "lng": -38.56470110000001
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 38,
          "valor_aluguel": 4700,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Rua Farias Lemos, 800 - Parque Iracema, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 47,
          "valor_aluguel": 750,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Churrasqueira",
            "Área de serviço",
            "Playground",
            "Cozinha"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 47m² em Parque Iracema, Fortaleza",
          "coords": {
            "lat": -3.8138253,
            "lng": -38.4943965
          }
        },
        {
          "endereco": "Rua Senador Pompeu, 649 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 2296,
          "valor_aluguel": 650,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 2296m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724452299999999,
            "lng": -38.5287254
          }
        },
        {
          "endereco": "Rua Raul Uchôa, 608 - Bom Futuro, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 156,
          "valor_aluguel": 4600,
          "url_imagem": "../assets/img/properties/house1.jpg",
          "amenidades": [
            "Copa",
            "Varanda gourmet",

          ],
          "descricao": "Casa com 2 Quartos para alugar, 156m² em Bom Futuro, Fortaleza",
          "coords": {
            "lat": -3.7582357,
            "lng": -38.5480279
          }
        },
        {
          "endereco": "Antônio Bezerra, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 40,
          "valor_aluguel": 1050,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Lavanderia",
            "Sala de jantar",
            "Cozinha",
            "Garagem"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 40m² em Antônio Bezerra, Fortaleza",
          "coords": {
            "lat": -3.740141199999999,
            "lng": -38.5946171
          }
        },
        {
          "endereco": "Avenida Ministro José Américo, 150 - Parque Iracema, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 1,
          "area": 60,
          "valor_aluguel": 3550,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Academia",
            "Jardim"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 60m² em Parque Iracema, Fortaleza",
          "coords": {
            "lat": -3.8122656,
            "lng": -38.497466
          }
        },
        {
          "endereco": "Rua Dom Sebastião Leme, 477 - Fátima, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 90,
          "valor_aluguel": 1600,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 3 Quartos para alugar, 90m² em Fátima, Fortaleza",
          "coords": {
            "lat": -3.745701,
            "lng": -38.5261942
          }
        },
        {
          "endereco": "Rua Barbosa de Freitas, 229 - Meireles, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 62,
          "valor_aluguel": 4850,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Área de serviço"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 62m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7295657,
            "lng": -38.4950252
          }
        },
        {
          "endereco": "Rua Alcântara Bilhar, 4174 - Padre Andrade, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 35,
          "valor_aluguel": 1800,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 35m² em Padre Andrade, Fortaleza",
          "coords": {
            "lat": -3.7370093,
            "lng": -38.5819121
          }
        },
        {
          "endereco": "Rua João Sales, 1665 - Planalto Ayrton Senna, Fortaleza - CE",
          "area": 1241,
          "valor_aluguel": 1800,
          "url_imagem": "../assets/img/properties/ground2.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar, 1241m² em Planalto Ayrton Senna, Fortaleza",
          "coords": {
            "lat": -3.8283714,
            "lng": -38.5779207
          }
        },
        {
          "endereco": "Rua A do Loteamento Residencial Célio Gurgel, 227 - Barroso, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 46,
          "valor_aluguel": 4150,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Playground",
            "Área de serviço",
            "Piscina para adulto",
            "Churrasqueira",
            "Piscina"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 46m² em Barroso, Fortaleza",
          "coords": {
            "lat": -3.821732,
            "lng": -38.5817975
          }
        },
        {
          "endereco": "Avenida Antônio Sales, 1317 - Joaquim Tavora, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 35,
          "valor_aluguel": 4150,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 35m² em Joaquim Tavora, Fortaleza",
          "coords": {
            "lat": -3.7424386,
            "lng": -38.5116182
          }
        },
        {
          "endereco": "Rua Senador Pompeu, 2610 - José Bonifácio, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 50,
          "valor_aluguel": 2650,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Piscina",
            "Mobiliado",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 50m² em José Bonifácio, Fortaleza",
          "coords": {
            "lat": -3.7409871,
            "lng": -38.5339556
          }
        },
        {
          "endereco": "Rua Antônio Augusto, 2070 - Aldeota, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 1,
          "area": 111,
          "valor_aluguel": 4450,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 3 Quartos para alugar, 111m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7385355,
            "lng": -38.5165029
          }
        },
        {
          "endereco": "Rua Alfredo Mamede - Mondubim, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 60,
          "valor_aluguel": 1150,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Ar-condicionado",
            "Cozinha",
            "Área de serviço"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 60m² em Mondubim, Fortaleza",
          "coords": {
            "lat": -3.8104619,
            "lng": -38.5826668
          }
        },
        {
          "endereco": "Rua Capitão Clóvis Maia, 177 - Alto da Balança, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 94,
          "valor_aluguel": 600,
          "url_imagem": "../assets/img/properties/house2.jpg",
          "amenidades": [
            "Conexão à internet",

          ],
          "descricao": "Casa com 2 Quartos para alugar, 94m² em Alto da Balança, Fortaleza",
          "coords": {
            "lat": -3.7687042,
            "lng": -38.5157641
          }
        },
        {
          "endereco": "Rua Chico Lemos, 689 - Cidade dos Funcionários, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 150,
          "valor_aluguel": 3700,
          "url_imagem": "../assets/img/properties/house3.jpg",
          "amenidades": [

          ],
          "descricao": "Casa com 2 Quartos para alugar, 150m² em Cidade dos Funcionários, Fortaleza",
          "coords": {
            "lat": -3.7943435,
            "lng": -38.4977026
          }
        },
        {
          "endereco": "Rua I, 207 - Itaperi, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 70,
          "valor_aluguel": 2650,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 2 Quartos para alugar, 70m² em Itaperi, Fortaleza",
          "coords": {
            "lat": -3.7989426,
            "lng": -38.5521626
          }
        },
        {
          "endereco": "Rua Nunes Valente, 1880 - Meireles, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 95,
          "valor_aluguel": 3800,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 95m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7406843,
            "lng": -38.505337
          }
        },
        {
          "endereco": "Rua Frei Teobaldo, 701 - Álvaro Weyne, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 1,
          "area": 50,
          "valor_aluguel": 4850,
          "url_imagem": "../assets/img/properties/house5.jpg",
          "amenidades": [
            "Cozinha",
            "Varanda"
          ],
          "descricao": "Casa com 1 Quarto para alugar, 50m² em Álvaro Weyne, Fortaleza",
          "coords": {
            "lat": -3.717385299999999,
            "lng": -38.5616214
          }
        },
        {
          "endereco": "Rua Gonçalves Ledo, 30 - Praia de Iracema, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 36,
          "valor_aluguel": 750,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 36m² em Praia de Iracema, Fortaleza",
          "coords": {
            "lat": -3.7237187,
            "lng": -38.51387769999999
          }
        },
        {
          "endereco": "Rua Gomes Brasil, 340 - Parangaba, Fortaleza - CE",
          "area": 260,
          "valor_aluguel": 4050,
          "url_imagem": "../assets/img/properties/ground3.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar, 260m² em Parangaba, Fortaleza",
          "coords": {
            "lat": -3.7725383,
            "lng": -38.5682202
          }
        },
        {
          "endereco": "Rua Doutor José Frota, 29 - Mucuripe, Fortaleza - CE",
          "area": 80,
          "valor_aluguel": 4550,
          "url_imagem": "../assets/img/properties/ground2.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar, 80m² em Mucuripe, Fortaleza",
          "coords": {
            "lat": -3.7268153,
            "lng": -38.4864193
          }
        },
        {
          "endereco": "Rua Crisanto Arruda, 0 - Passaré, Fortaleza - CE",
          "area": 2000,
          "valor_aluguel": 5000,
          "url_imagem": "../assets/img/properties/ground3.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar, 2000m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.8094465,
            "lng": -38.5223847
          }
        },
        {
          "endereco": "Rua Senador Pompeu, 2420 - Benfica, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 53,
          "valor_aluguel": 1200,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda",
            "Academia"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 53m² em Benfica, Fortaleza",
          "coords": {
            "lat": -3.7397652,
            "lng": -38.5336579
          }
        },
        {
          "endereco": "Rua Ary Barroso, 70 - Papicu, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": 650,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 30m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7396641,
            "lng": -38.4727638
          }
        },
        {
          "endereco": "Rua Crisanto Arruda, 752 - Passaré, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 47,
          "valor_aluguel": 1900,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Churrasqueira",
            "Piscina",
            "Quadra poliesportiva",
            "Salão de festas"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 47m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.815880199999999,
            "lng": -38.5241305
          }
        },
        {
          "endereco": "Avenida Senador Carlos Jereissati - Dias Macedo, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 200,
          "valor_aluguel": 4950,
          "url_imagem": "../assets/img/properties/storage1.jpg",
          "amenidades": [
            "Condomínio fechado"
          ],
          "descricao": "Galpão/Depósito/Armazém para alugar, 200m² em Dias Macedo, Fortaleza",
          "coords": {
            "lat": -3.7832708,
            "lng": -38.5242645
          }
        },
        {
          "endereco": "Rua Tomás Pompeu, 550 - Meireles, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 1,
          "area": 50,
          "valor_aluguel": 4200,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Elevador",
            "Interfone",
            "Mobiliado",

          ],
          "descricao": "Apartamento com 1 Quarto para venda ou aluguel, 50m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7266296,
            "lng": -38.50377659999999
          }
        },
        {
          "endereco": "Rua Vicente Leite, 1960 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 400,
          "valor_aluguel": 3700,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [
            "Copa",
            "Área de serviço"
          ],
          "descricao": "Ponto Comercial para alugar, 400m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7447198,
            "lng": -38.4977728
          }
        },
        {
          "endereco": "Avenida Bernardo Manuel, 8600 - Itaperi, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 50,
          "valor_aluguel": 1700,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Condomínio fechado",
            "Cozinha",
            "Interfone",
            "Área de serviço"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 50m² em Itaperi, Fortaleza",
          "coords": {
            "lat": -3.794945999999999,
            "lng": -38.5505012
          }
        },
        {
          "endereco": "Rua França, 1151 - Maraponga, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 100,
          "valor_aluguel": 2100,
          "url_imagem": "../assets/img/properties/house5.jpg",
          "amenidades": [
            "Varanda",
            "Garagem",
            "Cozinha",
            "Varanda gourmet",

          ],
          "descricao": "Casa com 3 Quartos para alugar, 100m² em Maraponga, Fortaleza",
          "coords": {
            "lat": -3.7938598,
            "lng": -38.5638725
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 6740 - Cocó, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 28,
          "valor_aluguel": 3400,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Espaço gourmet",
            "Elevador",
            "Ar-condicionado",
            "Jardim",
            "Quadra de tênis"
          ],
          "descricao": "Sala Comercial para alugar, 28m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.744682199999999,
            "lng": -38.4730944
          }
        },
        {
          "endereco": "Rua Osvaldo Cruz, 2133 - Dionísio Torres, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 300,
          "valor_aluguel": 600,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 300m² em Dionísio Torres, Fortaleza",
          "coords": {
            "lat": -3.7440734,
            "lng": -38.5029206
          }
        },
        {
          "endereco": "Rua Luiza Miranda Coelho, 1355 - Engenheiro Luciano Cavalcante, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 1,
          "area": 70,
          "valor_aluguel": 3050,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 70m² em Engenheiro Luciano Cavalcante, Fortaleza",
          "coords": {
            "lat": -3.7753744,
            "lng": -38.4844584
          }
        },
        {
          "endereco": "Rua Manuel Teixeira, 131 - JOSE DE ALENCAR, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 51,
          "valor_aluguel": 3200,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Cozinha",
            "Área de serviço"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 51m² em JOSE DE ALENCAR, Fortaleza",
          "coords": {
            "lat": -3.8157835,
            "lng": -38.4782644
          }
        },
        {
          "endereco": "Pedras, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 25,
          "valor_aluguel": 1550,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [
            "Cozinha"
          ],
          "descricao": "Ponto Comercial para alugar, 25m² em Pedras, Fortaleza",
          "coords": {
            "lat": -3.873815,
            "lng": -38.5073967
          }
        },
        {
          "endereco": "Avenida Pintor Antônio Bandeira, 4250 - Praia do Futuro II, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 80,
          "valor_aluguel": 3100,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Salão de festas",
            "Segurança 24h"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 80m² em Praia do Futuro II, Fortaleza",
          "coords": {
            "lat": -3.7503376,
            "lng": -38.4511247
          }
        },
        {
          "endereco": "Rua Pedro Borges, 33 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 38,
          "valor_aluguel": 2900,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7279488,
            "lng": -38.5255179
          }
        },
        {
          "endereco": "Rua Zózimo Barroso, 53 - Fátima, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 56,
          "valor_aluguel": 2150,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 2 Quartos para alugar, 56m² em Fátima, Fortaleza",
          "coords": {
            "lat": -3.750779699999999,
            "lng": -38.52818070000001
          }
        },
        {
          "endereco": "Parque Dois Irmãos, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 43,
          "valor_aluguel": 2350,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Varanda gourmet",
            "Quadra poliesportiva"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 43m² em Parque Dois Irmãos, Fortaleza",
          "coords": {
            "lat": -3.8089995,
            "lng": -38.5495815
          }
        },
        {
          "endereco": "Avenida Engenheiro Leal Lima Verde, 1401 - JOSE DE ALENCAR, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 55,
          "valor_aluguel": 1350,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 55m² em JOSE DE ALENCAR, Fortaleza",
          "coords": {
            "lat": -3.802248,
            "lng": -38.4748688
          }
        },
        {
          "endereco": "Rua Coronel Jucá, 960 - Aldeota, Fortaleza - CE",
          "quartos": 4,
          "banheiros": 3,
          "vagas": 1,
          "area": 200,
          "valor_aluguel": 4150,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Piscina",
            "Mobiliado",
            "Churrasqueira",
            "Academia",
            "Playground"
          ],
          "descricao": "Apartamento com 4 Quartos para alugar, 200m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.740460499999999,
            "lng": -38.4923081
          }
        },
        {
          "endereco": "Rua Beatriz Segal, 0 - Barroso, Fortaleza - CE",
          "area": 396,
          "valor_aluguel": 3950,
          "url_imagem": "../assets/img/properties/ground2.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar, 396m² em Barroso, Fortaleza",
          "coords": {
            "lat": -3.7994272,
            "lng": -38.5086053
          }
        },
        {
          "endereco": "Avenida Engenheiro Alberto Sá, 705 - Papicu, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 53,
          "valor_aluguel": 4900,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial com 2 Quartos para alugar, 53m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7348957,
            "lng": -38.4741872
          }
        },
        {
          "endereco": "Rua das Carnaúbas, 371 - Passaré, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 55,
          "valor_aluguel": 2150,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Piscina",
            "Mobiliado",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 55m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.8076908,
            "lng": -38.5350887
          }
        },
        {
          "endereco": "Rua Suíça, 320 - Maraponga, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 60,
          "valor_aluguel": 2750,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Jardim",
            "Área de serviço"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 60m² em Maraponga, Fortaleza",
          "coords": {
            "lat": -3.7934327,
            "lng": -38.5728626
          }
        },
        {
          "endereco": "Rua Princesa Isabel, 27 - Centro, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 60,
          "valor_aluguel": 2300,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Condomínio fechado",
            "Portão eletrônico",
            "Portaria 24h",
            "Cozinha americana"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 60m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7213196,
            "lng": -38.5336779
          }
        },
        {
          "endereco": "Avenida Rogaciano Leite, 900 - Salinas, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 112,
          "valor_aluguel": 1050,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Área de serviço"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 112m² em Salinas, Fortaleza",
          "coords": {
            "lat": -3.7647759,
            "lng": -38.4956173
          }
        },
        {
          "endereco": "Rua General Sampaio, 1746 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 5493,
          "valor_aluguel": 4200,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [
            "Copa"
          ],
          "descricao": "Prédio Comercial para alugar, 5493m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7335625,
            "lng": -38.5331861
          }
        },
        {
          "endereco": "Rua Paulo Faustino, 181 - Engenheiro Luciano Cavalcante, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 1,
          "area": 75,
          "valor_aluguel": 3350,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Área de serviço"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 75m² em Engenheiro Luciano Cavalcante, Fortaleza",
          "coords": {
            "lat": -3.782945199999999,
            "lng": -38.4840272
          }
        },
        {
          "endereco": "Avenida Washington Soares, 3663 - Edson Queiroz, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 30,
          "valor_aluguel": 3250,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Garagem",
            "Cozinha",
            "Elevador"
          ],
          "descricao": "Sala Comercial para alugar, 30m² em Edson Queiroz, Fortaleza",
          "coords": {
            "lat": -3.7881216,
            "lng": -38.4799297
          }
        },
        {
          "endereco": "Rua Monsenhor Liberato, 1815 - Fátima, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 1,
          "area": 60,
          "valor_aluguel": 3650,
          "url_imagem": "../assets/img/properties/house1.jpg",
          "amenidades": [
            "Área de serviço",
            "Box blindex",
            "Interfone",
            ,

          ],
          "descricao": "Casa com 3 Quartos para alugar, 60m² em Fátima, Fortaleza",
          "coords": {
            "lat": -3.7496721,
            "lng": -38.5305471
          }
        },
        {
          "endereco": "Rua Oliveira Filho, 1300 - Vicente Pinzon, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 53,
          "valor_aluguel": 1850,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Elevador",
            "Piscina",
            "Playground",
            "Salão de festas",
            "Segurança 24h"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 53m² em Vicente Pinzon, Fortaleza",
          "coords": {
            "lat": -3.729226299999999,
            "lng": -38.4630062
          }
        },
        {
          "endereco": "Avenida Juscelino Kubitschek, 4950 - Passaré, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 50,
          "valor_aluguel": 2750,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Piscina",
            "Condomínio fechado",
            "Academia",
            "Jardim"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 50m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.8202034,
            "lng": -38.5346914
          }
        },
        {
          "endereco": "Centro, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 50,
          "valor_aluguel": 3350,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Varanda",
            "Área de serviço",
            "Armário na cozinha",
            "Cozinha",
            "Interfone"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 50m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7329688,
            "lng": -38.5264661
          }
        },
        {
          "endereco": "Rua Barão do Rio Branco, 1071 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 40,
          "valor_aluguel": 3100,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Cozinha",
            "Segurança 24h",
            "Vigia"
          ],
          "descricao": "Sala Comercial para alugar, 40m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7277511,
            "lng": -38.5283848
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 304 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 30,
          "valor_aluguel": 1350,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 30m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7291185,
            "lng": -38.5207227
          }
        },
        {
          "endereco": "Rua Pedro Borges, 33 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 34,
          "valor_aluguel": 2650,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para venda ou aluguel, 34m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7279488,
            "lng": -38.5255179
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 6997 - Papicu, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 100,
          "valor_aluguel": 750,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Jardim",
            "Playground"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 100m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7449705,
            "lng": -38.4701489
          }
        },
        {
          "endereco": "Rua Visconde de Mauá, 530 - Meireles, Fortaleza - CE",
          "area": 8,
          "valor_aluguel": 2950,
          "url_imagem": "../assets/img/properties/ground1.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar, 8m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7305609,
            "lng": -38.49791
          }
        },
        {
          "endereco": "Rua Waldery Uchôa - Benfica, Fortaleza - CE",
          "quartos": 4,
          "banheiros": 3,
          "vagas": 2,
          "area": 120,
          "valor_aluguel": 1000,
          "url_imagem": "../assets/img/properties/house5.jpg",
          "amenidades": [
            "Garagem",
            "Cozinha"
          ],
          "descricao": "Casa com 4 Quartos para alugar, 120m² em Benfica, Fortaleza",
          "coords": {
            "lat": -3.7471849,
            "lng": -38.5417218
          }
        },
        {
          "endereco": "Avenida Alberto Craveiro, 1240 - Dias Macedo, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 55,
          "valor_aluguel": 1350,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Piscina",
            "Salão de festas",
            "Quadra poliesportiva",
            "Churrasqueira",
            "Playground"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 55m² em Dias Macedo, Fortaleza",
          "coords": {
            "lat": -3.7892032,
            "lng": -38.5177181
          }
        },
        {
          "endereco": "Avenida da Abolição, 2950 - Meireles, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 45,
          "valor_aluguel": 3600,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Condomínio fechado"
          ],
          "descricao": "Ponto Comercial para alugar, 45m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7273338,
            "lng": -38.4931173
          }
        },
        {
          "endereco": "Estrada de Ferro, 0 - Maraponga, Fortaleza - CE",
          "area": 1300,
          "valor_aluguel": 3250,
          "url_imagem": "../assets/img/properties/ground3.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar, 1300m² em Maraponga, Fortaleza",
          "coords": {
            "lat": -3.8209388,
            "lng": -38.5878606
          }
        },
        {
          "endereco": "Rua Murará, 100 - Paupina, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 120,
          "valor_aluguel": 4850,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Condomínio fechado",
            "Jardim"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 120m² em Paupina, Fortaleza",
          "coords": {
            "lat": -3.844198,
            "lng": -38.493833
          }
        },
        {
          "endereco": "Rua República do Líbano, 1200 - Varjota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 400,
          "valor_aluguel": 2350,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Área de serviço"
          ],
          "descricao": "Ponto Comercial para alugar, 400m² em Varjota, Fortaleza",
          "coords": {
            "lat": -3.7339583,
            "lng": -38.4889511
          }
        },
        {
          "endereco": "Avenida Luciano Carneiro, 869 - Fátima, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 110,
          "valor_aluguel": 4300,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Condomínio fechado",
            "Varanda",
            "Área de serviço",
            "Portaria 24h"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 110m² em Fátima, Fortaleza",
          "coords": {
            "lat": -3.7557858,
            "lng": -38.5336375
          }
        },
        {
          "endereco": "Rua Professor Jacinto Botelho, 75 - Guararapes, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 50,
          "valor_aluguel": 950,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 50m² em Guararapes, Fortaleza",
          "coords": {
            "lat": -3.757879,
            "lng": -38.4905585
          }
        },
        {
          "endereco": "Rua Carlos Vasconcelos, 617 - Meireles, Fortaleza - CE",
          "quartos": 4,
          "banheiros": 2,
          "vagas": 2,
          "area": 225,
          "valor_aluguel": 1600,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 4 Quartos para alugar, 225m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7277308,
            "lng": -38.508865
          }
        },
        {
          "endereco": "Rua da Assunção, 944 - Centro, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 41,
          "valor_aluguel": 4400,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 2 Quartos para alugar, 41m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7381767,
            "lng": -38.5301699
          }
        },
        {
          "endereco": "Rua Paulo Mendes, 155 - Praia do Futuro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 98,
          "valor_aluguel": 950,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 98m² em Praia do Futuro, Fortaleza",
          "coords": {
            "lat": -3.7492867,
            "lng": -38.44709840000001
          }
        },
        {
          "endereco": "Rua Álvaro Bomilcar, 3873 - Tauape, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 80,
          "valor_aluguel": 3350,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Varanda",
            "Garagem",
            "Cozinha",
            "Interfone",
            "Área de serviço"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 80m² em Tauape, Fortaleza",
          "coords": {
            "lat": -3.7586767,
            "lng": -38.5095168
          }
        },
        {
          "endereco": "Rua H, 0 - Parque Dois Irmãos, Fortaleza - CE",
          "area": 438,
          "valor_aluguel": 1250,
          "url_imagem": "../assets/img/properties/ground3.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar, 438m² em Parque Dois Irmãos, Fortaleza",
          "coords": {
            "lat": -3.8010167,
            "lng": -38.5502464
          }
        },
        {
          "endereco": "Avenida Américo Barreira, 909 - Demócrito Rocha, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 360,
          "valor_aluguel": 2900,
          "url_imagem": "../assets/img/properties/storage1.jpg",
          "amenidades": [
            "Rampa",
            "Acesso para deficientes",
            "Estacionamento",
            "Escritório"
          ],
          "descricao": "Galpão/Depósito/Armazém para alugar, 360m² em Demócrito Rocha, Fortaleza",
          "coords": {
            "lat": -3.763959,
            "lng": -38.56628200000001
          }
        },
        {
          "endereco": "Rua Pereira Filgueiras, 149 - Centro, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 2,
          "area": 55,
          "valor_aluguel": 2550,
          "url_imagem": "../assets/img/properties/house5.jpg",
          "amenidades": [],
          "descricao": "Casa com 1 Quarto para alugar, 55m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.72564,
            "lng": -38.521067
          }
        },
        {
          "endereco": "Avenida da Abolição, 2021 - Meireles, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 1,
          "area": 144,
          "valor_aluguel": 3500,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Ar-condicionado",
            "Área de serviço",
            "Piscina para adulto",
            "Piscina"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 144m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7255013,
            "lng": -38.5004864
          }
        },
        {
          "endereco": "Rua Azevedo Bolão, 1290 - Parquelândia, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 50,
          "valor_aluguel": 900,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 50m² em Parquelândia, Fortaleza",
          "coords": {
            "lat": -3.736308,
            "lng": -38.555715
          }
        },
        {
          "endereco": "Rua Andrade Furtado, 1179 - Cocó, Fortaleza - CE",
          "quartos": 4,
          "banheiros": 2,
          "vagas": 1,
          "area": 178,
          "valor_aluguel": 850,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Academia",
            "Espaço gourmet",
            "Ar-condicionado"
          ],
          "descricao": "Apartamento com 4 Quartos para alugar, 178m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.7459107,
            "lng": -38.4784905
          }
        },
        {
          "endereco": "Rua Pedro Borges, 30 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 40,
          "valor_aluguel": 2400,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 40m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.728075,
            "lng": -38.5260597
          }
        },
        {
          "endereco": "Rua 101 - Novo Mondubim, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 41,
          "valor_aluguel": 1050,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Churrasqueira",
            "Interfone",
            "Quadra poliesportiva",

          ],
          "descricao": "Apartamento com 2 Quartos para venda ou aluguel, 41m² em Novo Mondubim, Fortaleza",
          "coords": {
            "lat": -3.8105478,
            "lng": -38.5886361
          }
        },
        {
          "endereco": "Rua das Oiticicas, 111 - Passaré, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 47,
          "valor_aluguel": 800,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Churrasqueira",
            "Piscina"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 47m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.8049495,
            "lng": -38.5352584
          }
        },
        {
          "endereco": "Rua Doutor Salustio de Pinho, 1 - Praia do Futuro II, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 1,
          "area": 200,
          "valor_aluguel": 3000,
          "url_imagem": "../assets/img/properties/house4.jpg",
          "amenidades": [
            "Piscina",
            "Condomínio fechado",
            "Varanda",
            "Jardim"
          ],
          "descricao": "Casa de Condomínio com 3 Quartos para alugar, 200m² em Praia do Futuro II, Fortaleza",
          "coords": {
            "lat": -3.751626,
            "lng": -38.44677799999999
          }
        },
        {
          "endereco": "Rua Senador Pompeu, 649 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 23,
          "valor_aluguel": 3700,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Cozinha",
            "Segurança 24h",
            "Elevador",
            "Vigia"
          ],
          "descricao": "Sala Comercial para alugar, 23m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724452299999999,
            "lng": -38.5287254
          }
        },
        {
          "endereco": "Rua do Parque, 333 - Cambeba, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 70,
          "valor_aluguel": 2400,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 70m² em Cambeba, Fortaleza",
          "coords": {
            "lat": -3.8058571,
            "lng": -38.4813991
          }
        },
        {
          "endereco": "Antônio Bezerra, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 40,
          "valor_aluguel": 4750,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Lavanderia",
            "Sala de jantar",
            "Cozinha"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 40m² em Antônio Bezerra, Fortaleza",
          "coords": {
            "lat": -3.740141199999999,
            "lng": -38.5946171
          }
        },
        {
          "endereco": "Avenida Dom Manuel, 259 - Centro, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 1,
          "area": 22,
          "valor_aluguel": 4250,
          "url_imagem": "",
          "amenidades": [],
          "descricao": "Kitnet com 1 Quarto para alugar, 22m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7264458,
            "lng": -38.5203816
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 75,
          "valor_aluguel": 4750,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 75m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Rua A do Loteamento Residencial Célio Gurgel, 227 - Barroso, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 42,
          "valor_aluguel": 1200,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Garagem"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 42m² em Barroso, Fortaleza",
          "coords": {
            "lat": -3.821732,
            "lng": -38.5817975
          }
        },
        {
          "endereco": "Rua Mucambinho - Barroso, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 45,
          "valor_aluguel": 3100,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Interfone",

          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 45m² em Barroso, Fortaleza",
          "coords": {
            "lat": -3.8283031,
            "lng": -38.5067122
          }
        },
        {
          "endereco": "Rua C, 105 - Parque Dois Irmãos, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 44,
          "valor_aluguel": 1000,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Garagem",
            "Área de serviço"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 44m² em Parque Dois Irmãos, Fortaleza",
          "coords": {
            "lat": -3.8151226,
            "lng": -38.5542233
          }
        },
        {
          "endereco": "Rua Bento Albuquerque, 1555 - Cocó, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 118,
          "valor_aluguel": 1200,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Portaria 24h",
            "Portão eletrônico"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 118m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.746066,
            "lng": -38.4753206
          }
        },
        {
          "endereco": "Alameda Maria Doralice, 209 - Cidade 2000, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 54,
          "valor_aluguel": 3050,
          "url_imagem": "../assets/img/properties/house5.jpg",
          "amenidades": [
            "Copa",
            "Área de serviço"
          ],
          "descricao": "Casa com 2 Quartos para alugar, 54m² em Cidade 2000, Fortaleza",
          "coords": {
            "lat": -3.750010999999999,
            "lng": -38.4696247
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 459 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 44,
          "valor_aluguel": 1350,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 44m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7264026,
            "lng": -38.5303294
          }
        },
        {
          "endereco": "Rua Justiniano de Serpa, 268 - Farias Brito, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 60,
          "valor_aluguel": 4500,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 2 Quartos para alugar, 60m² em Farias Brito, Fortaleza",
          "coords": {
            "lat": -3.7335104,
            "lng": -38.5424416
          }
        },
        {
          "endereco": "Avenida da Saudade, 95 - Passaré, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 60,
          "valor_aluguel": 1300,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Condomínio fechado",
            "Varanda",
            "Academia"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 60m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.8137683,
            "lng": -38.5313796
          }
        },
        {
          "endereco": "Rua Padre Pedro de Alencar, 1662 - Messejana, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 1,
          "area": 60,
          "valor_aluguel": 3750,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Interfone"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 60m² em Messejana, Fortaleza",
          "coords": {
            "lat": -3.8425132,
            "lng": -38.4946428
          }
        },
        {
          "endereco": "Rua Doutor Salustio de Pinho, 1 - Praia do Futuro II, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 160,
          "valor_aluguel": 4150,
          "url_imagem": "../assets/img/properties/house3.jpg",
          "amenidades": [
            "Piscina",
            "Condomínio fechado",
            "Jardim",
            "Área de serviço",
            "Portaria 24h"
          ],
          "descricao": "Casa de Condomínio com 2 Quartos para alugar, 160m² em Praia do Futuro II, Fortaleza",
          "coords": {
            "lat": -3.751626,
            "lng": -38.44677799999999
          }
        },
        {
          "endereco": "Rua Hil de Moraes, 12 - Guararapes, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 70,
          "valor_aluguel": 4800,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 70m² em Guararapes, Fortaleza",
          "coords": {
            "lat": -3.7754212,
            "lng": -38.4780354
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 76,
          "valor_aluguel": 4100,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 76m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Rua Pereira Filgueiras, 778 - Centro, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 142,
          "valor_aluguel": 1050,
          "url_imagem": "../assets/img/properties/house5.jpg",
          "amenidades": [],
          "descricao": "Casa com 2 Quartos para alugar, 142m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7275622,
            "lng": -38.5157641
          }
        },
        {
          "endereco": "Rua Alcântara Bilhar, 4174 Altos - Padre Andrade, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 35,
          "valor_aluguel": 2850,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 35m² em Padre Andrade, Fortaleza",
          "coords": {
            "lat": -3.7370093,
            "lng": -38.5819121
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 75,
          "valor_aluguel": 4900,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 75m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Rua Zacarias Gondim, 54 - Montese, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 40,
          "valor_aluguel": 3050,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Cozinha",
            "Condomínio fechado"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 40m² em Montese, Fortaleza",
          "coords": {
            "lat": -3.7634121,
            "lng": -38.5562277
          }
        },
        {
          "endereco": "Avenida João Pessoa, 4693 - Damas, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 1,
          "area": 100,
          "valor_aluguel": 1450,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Garagem",
            "Cozinha",
            "Condomínio fechado"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 100m² em Damas, Fortaleza",
          "coords": {
            "lat": -3.7561965,
            "lng": -38.5517456
          }
        },
        {
          "endereco": "Rua José Vilar, 267 - Meireles, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 65,
          "valor_aluguel": 4800,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 2 Quartos para alugar, 65m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7269282,
            "lng": -38.5017384
          }
        },
        {
          "endereco": "Rua 101 - Mondubim, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 43,
          "valor_aluguel": 1700,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Interfone",
            "Quadra poliesportiva",
            "Sistema de alarme",

          ],
          "descricao": "Apartamento com 2 Quartos para venda ou aluguel, 43m² em Mondubim, Fortaleza",
          "coords": {
            "lat": -3.8073942,
            "lng": -38.5856592
          }
        },
        {
          "endereco": "Avenida da Saudade, 95 - Passaré, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 1,
          "area": 60,
          "valor_aluguel": 4100,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Condomínio fechado",
            "Varanda",
            "Academia"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 60m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.8137683,
            "lng": -38.5313796
          }
        },
        {
          "endereco": "Rua Senador Alencar, 632 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 40,
          "valor_aluguel": 2600,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Cozinha"
          ],
          "descricao": "Sala Comercial para alugar, 40m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7236585,
            "lng": -38.5315161
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 42,
          "valor_aluguel": 1550,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Avenida Geógrafo Antônio Ribeiro Zaranza, 2598 - Cajazeiras, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 45,
          "valor_aluguel": 3800,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Churrasqueira",
            "Playground",
            "Salão de festas",
            "Conexão à internet"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 45m² em Cajazeiras, Fortaleza",
          "coords": {
            "lat": -3.8082689,
            "lng": -38.5132471
          }
        },
        {
          "endereco": "Rua Edmundo Falcão, 1 - Antônio Diogo, Fortaleza - CE",
          "area": 825,
          "valor_aluguel": 4600,
          "url_imagem": "../assets/img/properties/ground1.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar, 825m² em Antônio Diogo, Fortaleza",
          "coords": {
            "lat": -3.7521079,
            "lng": -38.4553776
          }
        },
        {
          "endereco": "Rua Pedro I, 233 - Centro, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 1,
          "area": 40,
          "valor_aluguel": 1350,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Condomínio fechado",
            "Portaria 24h",
            "Interfone",
            "Janela grande",
            "Portão eletrônico"
          ],
          "descricao": "Apartamento com 1 Quarto para alugar, 40m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7318577,
            "lng": -38.526936
          }
        },
        {
          "endereco": "Rua Manoel Monteiro, 685 - Cidade dos Funcionários, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 55,
          "valor_aluguel": 2500,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Área de serviço",
            "Perto de vias de acesso"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 55m² em Cidade dos Funcionários, Fortaleza",
          "coords": {
            "lat": -3.7927977,
            "lng": -38.49386810000001
          }
        },
        {
          "endereco": "Rua Senador Pompeu, 649 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 23,
          "valor_aluguel": 4250,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [
            "Cozinha",
            "Segurança 24h",
            "Elevador",
            "Vigia"
          ],
          "descricao": "Sala Comercial para alugar, 23m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724452299999999,
            "lng": -38.5287254
          }
        },
        {
          "endereco": "Rua Senador Alencar, 1649 - Centro, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 1,
          "area": 40,
          "valor_aluguel": 1650,
          "url_imagem": "",
          "amenidades": [
            "Condomínio fechado",
            "Portão eletrônico",
            "Portaria 24h",

          ],
          "descricao": "Kitnet com 1 Quarto para alugar, 40m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7211643,
            "lng": -38.5402725
          }
        },
        {
          "endereco": "Rua Hil de Moraes, 12 - Edson Queiroz, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 55,
          "valor_aluguel": 1350,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 55m² em Edson Queiroz, Fortaleza",
          "coords": {
            "lat": -3.7754212,
            "lng": -38.4780354
          }
        },
        {
          "endereco": "Rua Padre Guerra, 178 - Pici, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 150,
          "valor_aluguel": 3600,
          "url_imagem": "../assets/img/properties/house4.jpg",
          "amenidades": [
            "Área de serviço",
            ,
            "Interfone",

          ],
          "descricao": "Casa com 2 Quartos para alugar, 150m² em Pici, Fortaleza",
          "coords": {
            "lat": -3.7364791,
            "lng": -38.5454594
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 31,
          "valor_aluguel": 2850,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 34,
          "valor_aluguel": 1350,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 34m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Avenida Pedro Lazar, 830 - Cambeba, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 52,
          "valor_aluguel": 700,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 52m² em Cambeba, Fortaleza",
          "coords": {
            "lat": -3.8032847,
            "lng": -38.4886881
          }
        },
        {
          "endereco": "Rua do Pocinho, 33 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 34,
          "valor_aluguel": 1100,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para venda ou aluguel, 34m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.728003,
            "lng": -38.52548
          }
        },
        {
          "endereco": "Rua Vicente de Castro Filho, 1460 - Engenheiro Luciano Cavalcante, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 70,
          "valor_aluguel": 700,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Área de serviço",
            "Portaria 24h"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 70m² em Engenheiro Luciano Cavalcante, Fortaleza",
          "coords": {
            "lat": -3.779084299999999,
            "lng": -38.4838331
          }
        },
        {
          "endereco": "Rua Emílio Sá, 560 - Jardim Cearense, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 65,
          "valor_aluguel": 850,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 65m² em Jardim Cearense, Fortaleza",
          "coords": {
            "lat": -3.8032285,
            "lng": -38.5683344
          }
        },
        {
          "endereco": "Rua Pereira Filgueiras, 2020 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 36,
          "valor_aluguel": 3500,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 36m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.73106,
            "lng": -38.50461
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 32,
          "valor_aluguel": 4450,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 32m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Avenida Mozart Pinheiro de Lucena, 3106 - Quintino Cunha, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 60,
          "valor_aluguel": 3650,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 2 Quartos para alugar, 60m² em Quintino Cunha, Fortaleza",
          "coords": {
            "lat": -3.731846,
            "lng": -38.5996924
          }
        },
        {
          "endereco": "Rua Doutor Edmilson Barros de Oliveira - Cocó, Fortaleza - CE",
          "area": 440,
          "valor_aluguel": 600,
          "url_imagem": "../assets/img/properties/ground2.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para venda ou aluguel, 440m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.7515363,
            "lng": -38.4940296
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 42,
          "valor_aluguel": 1550,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 75,
          "valor_aluguel": 2150,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 75m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Avenida Desembargador Moreira, 1701 - Meireles, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 28,
          "valor_aluguel": 1250,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Prédio Comercial para alugar, 28m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7411064,
            "lng": -38.4996512
          }
        },
        {
          "endereco": "Rua Pedro Dantas, 415 - Dias Macedo, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 176,
          "valor_aluguel": 2400,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 176m² em Dias Macedo, Fortaleza",
          "coords": {
            "lat": -3.7861273,
            "lng": -38.5212914
          }
        },
        {
          "endereco": "Rua C, 91 - Passaré, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 45,
          "valor_aluguel": 3700,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Condomínio fechado",
            "Academia"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 45m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.8017106,
            "lng": -38.5397131
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 42,
          "valor_aluguel": 3900,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Carlos Vasconcelos, 889 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 35,
          "valor_aluguel": 1900,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Cozinha"
          ],
          "descricao": "Sala Comercial para alugar, 35m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7299914,
            "lng": -38.5095862
          }
        },
        {
          "endereco": "Rua Bento Albuquerque, 1555 - Cocó, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 120,
          "valor_aluguel": 2400,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Jardim",
            "Área de serviço"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 120m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.746066,
            "lng": -38.4753206
          }
        },
        {
          "endereco": "Rua Monsenhor Catão, 200 - Aldeota, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 96,
          "valor_aluguel": 4350,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Varanda",
            "Academia"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 96m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7364652,
            "lng": -38.4899636
          }
        },
        {
          "endereco": "Rua Dom Sebastião Leme, 477 - Fátima, Fortaleza - CE",
          "quartos": 4,
          "banheiros": 2,
          "vagas": 2,
          "area": 90,
          "valor_aluguel": 2000,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Varanda",
            "Garagem",
            "Jardim",
            "Playground"
          ],
          "descricao": "Apartamento com 4 Quartos para alugar, 90m² em Fátima, Fortaleza",
          "coords": {
            "lat": -3.745701,
            "lng": -38.5261942
          }
        },
        {
          "endereco": "Rua João Gentil, 2964 - Granja Lisboa, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 85,
          "valor_aluguel": 4950,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [
            "Conexão à internet"
          ],
          "descricao": "Ponto Comercial para alugar, 85m² em Granja Lisboa, Fortaleza",
          "coords": {
            "lat": -3.7911215,
            "lng": -38.6246533
          }
        },
        {
          "endereco": "Avenida da Saudade, 95 - Passaré, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 1,
          "area": 60,
          "valor_aluguel": 1000,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 60m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.8137683,
            "lng": -38.5313796
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 38,
          "valor_aluguel": 4450,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Rua Padre Severiano, 90 - Messejana, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 1,
          "area": 62,
          "valor_aluguel": 700,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Playground",
            "Ar-condicionado",
            "Área de serviço",
            "Churrasqueira"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 62m² em Messejana, Fortaleza",
          "coords": {
            "lat": -3.8342701,
            "lng": -38.4916857
          }
        },
        {
          "endereco": "Rua Barão do Rio Branco, 1071 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 27,
          "valor_aluguel": 3000,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Elevador",
            "Interfone"
          ],
          "descricao": "Sala Comercial para alugar, 27m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7277511,
            "lng": -38.5283848
          }
        },
        {
          "endereco": "Avenida Washington Soares, 1400 - Edson Queiroz, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 48,
          "valor_aluguel": 1150,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 48m² em Edson Queiroz, Fortaleza",
          "coords": {
            "lat": -3.7712784,
            "lng": -38.4825694
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 42,
          "valor_aluguel": 2150,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 42,
          "valor_aluguel": 1650,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 38,
          "valor_aluguel": 2750,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Rua Bento Albuquerque, 1555 - Cocó, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 120,
          "valor_aluguel": 3150,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Jardim",
            "Área de serviço"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 120m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.746066,
            "lng": -38.4753206
          }
        },
        {
          "endereco": "Rua do Rosário, 77 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 60,
          "valor_aluguel": 800,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 60m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.728418999999999,
            "lng": -38.5262788
          }
        },
        {
          "endereco": "Rua Professor Solon Farias, Lt-07 - Sapiranga, Fortaleza - CE",
          "area": 1720,
          "valor_aluguel": 2150,
          "url_imagem": "../assets/img/properties/ground3.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar, 1720m² em Sapiranga, Fortaleza",
          "coords": {
            "lat": -3.7860838,
            "lng": -38.4774042
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 60,
          "valor_aluguel": 2100,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 60m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 31,
          "valor_aluguel": 1700,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 74,
          "valor_aluguel": 2800,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 74m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Avenida Senador Virgílio Távora, 1701 - Meireles, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 35,
          "valor_aluguel": 1300,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 35m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7403814,
            "lng": -38.4939797
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 402 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 578,
          "valor_aluguel": 4500,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [
            "Copa"
          ],
          "descricao": "Ponto Comercial para alugar, 578m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7259726,
            "lng": -38.5268868
          }
        },
        {
          "endereco": "Rua Maria Maia, 75 - Siqueira, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 45,
          "valor_aluguel": 2000,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 45m² em Siqueira, Fortaleza",
          "coords": {
            "lat": -3.8105548,
            "lng": -38.6169552
          }
        },
        {
          "endereco": "Rua Senador Alencar - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 26,
          "valor_aluguel": 3450,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 26m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7229233,
            "lng": -38.5340305
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 34,
          "valor_aluguel": 2600,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 34m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 75,
          "valor_aluguel": 1800,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 75m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Rua A do Loteamento Residencial Célio Gurgel, 1697 - Barroso, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 42,
          "valor_aluguel": 1650,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Garagem"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 42m² em Barroso, Fortaleza",
          "coords": {
            "lat": -3.821732,
            "lng": -38.5817975
          }
        },
        {
          "endereco": "Avenida Dom Luís, 1233 - Meireles, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 31,
          "valor_aluguel": 4950,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [
            "Varanda"
          ],
          "descricao": "Sala Comercial para alugar, 31m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.735538,
            "lng": -38.4897752
          }
        },
        {
          "endereco": "Rua Pedro Borges, 33 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 35,
          "valor_aluguel": 2300,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 35m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7279488,
            "lng": -38.5255179
          }
        },
        {
          "endereco": "Rua Pedro Borges, 30 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 52,
          "valor_aluguel": 3550,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Cozinha"
          ],
          "descricao": "Sala Comercial para alugar, 52m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.728075,
            "lng": -38.5260597
          }
        },
        {
          "endereco": "Rua Afrânio Peixoto, 288 - Parangaba, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 60,
          "valor_aluguel": 1400,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 2 Quartos para alugar, 60m² em Parangaba, Fortaleza",
          "coords": {
            "lat": -3.7805487,
            "lng": -38.5724567
          }
        },
        {
          "endereco": "Rua Três de Maio, 1140 - Bela Vista, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 75,
          "valor_aluguel": 1550,
          "url_imagem": "../assets/img/properties/house2.jpg",
          "amenidades": [
            "Varanda gourmet"
          ],
          "descricao": "Casa com 2 Quartos para alugar, 75m² em Bela Vista, Fortaleza",
          "coords": {
            "lat": -3.7492958,
            "lng": -38.5640791
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 31,
          "valor_aluguel": 4750,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Avenida Senador Virgílio Távora, 1701 - Meireles, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 35,
          "valor_aluguel": 2450,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 35m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7403814,
            "lng": -38.4939797
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 42,
          "valor_aluguel": 1950,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 89,
          "valor_aluguel": 3400,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 89m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Rua Senador Pompeu, 649 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 23,
          "valor_aluguel": 4800,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [
            "Cozinha",
            "Segurança 24h",
            "Elevador",
            "Vigia"
          ],
          "descricao": "Sala Comercial para alugar, 23m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724452299999999,
            "lng": -38.5287254
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 89,
          "valor_aluguel": 2100,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 89m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 6740 - Papicu, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 28,
          "valor_aluguel": 2850,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 28m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.744682199999999,
            "lng": -38.4730944
          }
        },
        {
          "endereco": "Rodovia BR-116, 5850 - Cajazeiras, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": 2300,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 30m² em Cajazeiras, Fortaleza",
          "coords": {
            "lat": -3.7727805,
            "lng": -38.5166922
          }
        },
        {
          "endereco": "Avenida da Saudade, 95 - Passaré, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 60,
          "valor_aluguel": 1900,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 60m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.8137683,
            "lng": -38.5313796
          }
        },
        {
          "endereco": "Rua Beatriz Segal, 0 - Barroso, Fortaleza - CE",
          "area": 495,
          "valor_aluguel": 1700,
          "url_imagem": "../assets/img/properties/ground1.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar, 495m² em Barroso, Fortaleza",
          "coords": {
            "lat": -3.7994272,
            "lng": -38.5086053
          }
        },
        {
          "endereco": "Rua Nunes Valente, 2025 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 134,
          "valor_aluguel": 4750,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 134m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7423873,
            "lng": -38.505871
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 5335 - Papicu, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": 2550,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 30m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7407389,
            "lng": -38.48346919999999
          }
        },
        {
          "endereco": "Cidade dos Funcionários, Fortaleza - CE",
          "area": 225,
          "valor_aluguel": 1950,
          "url_imagem": "../assets/img/properties/ground2.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar, 225m² em Cidade dos Funcionários, Fortaleza",
          "coords": {
            "lat": -3.7971588,
            "lng": -38.4999808
          }
        },
        {
          "endereco": "Rua Pedro Dantas, 413 - Dias Macedo, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 80,
          "valor_aluguel": 3350,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 80m² em Dias Macedo, Fortaleza",
          "coords": {
            "lat": -3.7861367,
            "lng": -38.5212685
          }
        },
        {
          "endereco": "Rua Dragão do Mar, 345 - Praia de Iracema, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 1,
          "area": 41,
          "valor_aluguel": 3650,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda"
          ],
          "descricao": "Apartamento com 1 Quarto para alugar, 41m² em Praia de Iracema, Fortaleza",
          "coords": {
            "lat": -3.7217218,
            "lng": -38.5177504
          }
        },
        {
          "endereco": "Rua Barão do Rio Branco, 1071 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 27,
          "valor_aluguel": 2550,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Elevador",
            "Portaria 24h"
          ],
          "descricao": "Sala Comercial para alugar, 27m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7277511,
            "lng": -38.5283848
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 42,
          "valor_aluguel": 2550,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 31,
          "valor_aluguel": 2800,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Rua Perboyre e Silva, 114 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 47,
          "valor_aluguel": 3400,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 47m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7290021,
            "lng": -38.527104
          }
        },
        {
          "endereco": "Rua Paulo de Almeida Sanford, 145 - Edson Queiroz, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 1,
          "area": 171,
          "valor_aluguel": 1100,
          "url_imagem": "../assets/img/properties/house1.jpg",
          "amenidades": [
            "Cozinha",
            "Área de serviço",

          ],
          "descricao": "Casa com 3 Quartos para venda ou aluguel, 171m² em Edson Queiroz, Fortaleza",
          "coords": {
            "lat": -3.7877666,
            "lng": -38.4752562
          }
        },
        {
          "endereco": "Avenida Dom Luís, 500 - Meireles, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 76,
          "valor_aluguel": 1400,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": null,
          "coords": {
            "lat": -3.7356097,
            "lng": -38.4909979
          }
        },
        {
          "endereco": "Rua Alberto Magno, 1374 - Montese, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 30,
          "valor_aluguel": 3850,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 30m² em Montese, Fortaleza",
          "coords": {
            "lat": -3.7660701,
            "lng": -38.5511422
          }
        },
        {
          "endereco": "Rua Major Facundo, 1680 - Fátima, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 80,
          "valor_aluguel": 4400,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 80m² em Fátima, Fortaleza",
          "coords": {
            "lat": -3.7375185,
            "lng": -38.5312369
          }
        },
        {
          "endereco": "Rua Pascoal de Castro Alves, 500 - Papicu, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 1,
          "area": 230,
          "valor_aluguel": 4100,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial com 3 Quartos para alugar, 230m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7327933,
            "lng": -38.4774281
          }
        },
        {
          "endereco": "Rua Brigadeiro Haroldo Veloso, 568 - Sapiranga, Fortaleza - CE",
          "quartos": 5,
          "banheiros": 2,
          "vagas": 1,
          "area": 480,
          "valor_aluguel": 2350,
          "url_imagem": "../assets/img/properties/house5.jpg",
          "amenidades": [
            "Churrasqueira",
            ,
            "Área de serviço",
            "Escritório"
          ],
          "descricao": "Casa com 5 Quartos para alugar, 480m² em Sapiranga, Fortaleza",
          "coords": {
            "lat": -3.797762,
            "lng": -38.4637465
          }
        },
        {
          "endereco": "Rodovia BR-116, 5850 - Cajazeiras, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": 2250,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 30m² em Cajazeiras, Fortaleza",
          "coords": {
            "lat": -3.7727805,
            "lng": -38.5166922
          }
        },
        {
          "endereco": "Rua Vilebaldo Aguiar, 1151 - Cocó, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 1,
          "area": 71,
          "valor_aluguel": 2700,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Área de serviço",
            "Piscina para adulto",
            "Churrasqueira",
            "Piscina"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 71m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.7435432,
            "lng": -38.4779613
          }
        },
        {
          "endereco": "Avenida Presidente Artur Bernardes, 3470 - JOSE DE ALENCAR, Fortaleza - CE",
          "banheiros": 3,
          "vagas": 2,
          "area": 4066,
          "valor_aluguel": 2050,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Prédio Comercial com 40 Quartos para alugar, 4066m² em JOSE DE ALENCAR, Fortaleza",
          "coords": {
            "lat": -3.8089627,
            "lng": -38.4704225
          }
        },
        {
          "endereco": "Avenida Senador Virgílio Távora, 1701 - Meireles, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 35,
          "valor_aluguel": 1200,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 35m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7403814,
            "lng": -38.4939797
          }
        },
        {
          "endereco": "Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 27,
          "valor_aluguel": 4950,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para venda ou aluguel, 27m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7329688,
            "lng": -38.5264661
          }
        },
        {
          "endereco": "Avenida Ministro Albuquerque Lima, 894 - Conjunto Ceará, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": 600,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 30m² em Conjunto Ceará, Fortaleza",
          "coords": {
            "lat": -3.7708043,
            "lng": -38.6048985
          }
        },
        {
          "endereco": "Rua Benjamim Brasil, 626 - Jardim Cearense, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 100,
          "valor_aluguel": 4450,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [
            "Copa"
          ],
          "descricao": "Ponto Comercial para alugar, 100m² em Jardim Cearense, Fortaleza",
          "coords": {
            "lat": -3.8049738,
            "lng": -38.5671828
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 5335 - Papicu, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": 3550,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 30m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7407389,
            "lng": -38.48346919999999
          }
        },
        {
          "endereco": "Rua Pereira Filgueiras - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 36,
          "valor_aluguel": 4250,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Elevador",
            "Sistema de alarme"
          ],
          "descricao": "Sala Comercial para alugar, 36m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7271875,
            "lng": -38.5165491
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 76,
          "valor_aluguel": 3750,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 76m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Rua Senador Pompeu, 649 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 23,
          "valor_aluguel": 4850,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [
            "Cozinha",
            "Segurança 24h",
            "Elevador",
            "Vigia"
          ],
          "descricao": "Sala Comercial para alugar, 23m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724452299999999,
            "lng": -38.5287254
          }
        },
        {
          "endereco": "Edson Queiroz, Fortaleza - CE",
          "area": 1440,
          "valor_aluguel": 4150,
          "url_imagem": "../assets/img/properties/ground2.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar, 1440m² em Edson Queiroz, Fortaleza",
          "coords": {
            "lat": -3.7708535,
            "lng": -38.4746411
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 203,
          "valor_aluguel": 4650,
          "url_imagem": "../assets/img/properties/ground2.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rua Doutor Atualpa Barbosa Lima, 145 - Praia de Iracema, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 100,
          "valor_aluguel": 4400,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Elevador",
            "Varanda",
            "Garagem",
            "Jardim"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 100m² em Praia de Iracema, Fortaleza",
          "coords": {
            "lat": -3.7232051,
            "lng": -38.5136444
          }
        },
        {
          "endereco": "Rua Genipo Fernandes, 15 - Quintino Cunha, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 60,
          "valor_aluguel": 1100,
          "url_imagem": "../assets/img/properties/house3.jpg",
          "amenidades": [],
          "descricao": "Casa com 2 Quartos para alugar, 60m² em Quintino Cunha, Fortaleza",
          "coords": {
            "lat": -3.7293547,
            "lng": -38.6030528
          }
        },
        {
          "endereco": "Rua Afonso Celso, 423 - Aldeota, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 80,
          "valor_aluguel": 3500,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 80m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7365079,
            "lng": -38.5079335
          }
        },
        {
          "endereco": "Rua Pedro Borges, 30 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 52,
          "valor_aluguel": 4950,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Cozinha"
          ],
          "descricao": "Sala Comercial para alugar, 52m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.728075,
            "lng": -38.5260597
          }
        },
        {
          "endereco": "Travessa Armando Oliveira, 14 - Parquelândia, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 40,
          "valor_aluguel": 1100,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Cozinha",
            "Área de serviço"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 40m² em Parquelândia, Fortaleza",
          "coords": {
            "lat": -3.7367765,
            "lng": -38.5670222
          }
        },
        {
          "endereco": "Rua Raimundo Oliveira Filho, 659 - Papicu, Fortaleza - CE",
          "area": 1100,
          "valor_aluguel": 2900,
          "url_imagem": "../assets/img/properties/ground3.jpg",
          "amenidades": [
            "Frente para o leste",
            "Frente para o sul",
            "Arenoso",
            "Plano",
            "Rua asfaltada"
          ],
          "descricao": "Lote/Terreno para alugar, 1100m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.737842399999999,
            "lng": -38.4792223
          }
        },
        {
          "endereco": "Avenida Gurgel do Amaral, 1250 - Coaçu, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 21,
          "valor_aluguel": 4750,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 21m² em Coaçu, Fortaleza",
          "coords": {
            "lat": -3.8363856,
            "lng": -38.4851693
          }
        },
        {
          "endereco": "Rua Maria Alice, SN - Engenheiro Luciano Cavalcante, Fortaleza - CE",
          "area": 841,
          "valor_aluguel": 2950,
          "url_imagem": "../assets/img/properties/ground2.jpg",
          "amenidades": [
            "Desnível para frente (rua)",
            "Plano",
            "Rua asfaltada"
          ],
          "descricao": "Lote/Terreno para alugar, 841m² em Engenheiro Luciano Cavalcante, Fortaleza",
          "coords": {
            "lat": -3.7740998,
            "lng": -38.491673
          }
        },
        {
          "endereco": "Avenida da Saudade, 95 - Passaré, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 60,
          "valor_aluguel": 3700,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Condomínio fechado",
            "Varanda",
            "Academia"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 60m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.8137683,
            "lng": -38.5313796
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 39,
          "valor_aluguel": 2200,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 39m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 42,
          "valor_aluguel": 2500,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 42,
          "valor_aluguel": 2900,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Avenida Duque de Caxias, 823 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 36,
          "valor_aluguel": 3100,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Circuito de segurança",
            "Elevador"
          ],
          "descricao": "Sala Comercial para alugar, 36m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7313072,
            "lng": -38.5317182
          }
        },
        {
          "endereco": "Rua José Napoleão, 200 - Meireles, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 1,
          "area": 61,
          "valor_aluguel": 1700,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Ar-condicionado",
            "Área de serviço",
            "Churrasqueira"
          ],
          "descricao": "Apartamento com 1 Quarto para alugar, 61m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7271861,
            "lng": -38.4904303
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 42,
          "valor_aluguel": 2650,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Avenida Mister Hull, 3522 - Presidente Kennedy, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 55,
          "valor_aluguel": 600,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 55m² em Presidente Kennedy, Fortaleza",
          "coords": {
            "lat": -3.7370827,
            "lng": -38.5760548
          }
        },
        {
          "endereco": "Rua Maximino, 237 - JOSE DE ALENCAR, Fortaleza - CE",
          "area": 720,
          "valor_aluguel": 3550,
          "url_imagem": "../assets/img/properties/ground2.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar, 720m² em JOSE DE ALENCAR, Fortaleza",
          "coords": {
            "lat": -3.8096866,
            "lng": -38.465966
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 60,
          "valor_aluguel": 4050,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 60m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Rua do Pocinho, 20 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 74,
          "valor_aluguel": 750,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 74m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282036,
            "lng": -38.5253929
          }
        },
        {
          "endereco": "Pedras, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 15,
          "valor_aluguel": 3450,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [
            "Cozinha"
          ],
          "descricao": "Ponto Comercial para alugar, 15m² em Pedras, Fortaleza",
          "coords": {
            "lat": -3.873815,
            "lng": -38.5073967
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1267 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 25,
          "valor_aluguel": 1050,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [
            "Mobiliado"
          ],
          "descricao": "Sala Comercial para alugar, 25m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7313778,
            "lng": -38.5121337
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 38,
          "valor_aluguel": 850,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Rua Barão de Aracati, 145 - Meireles, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 56,
          "valor_aluguel": 4750,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Piscina",
            "Mobiliado",
            "Elevador",
            "Condomínio fechado",
            "Academia"
          ],
          "descricao": "Apartamento com 2 Quartos para venda ou aluguel, 56m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7233292,
            "lng": -38.5087503
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 5335 - Papicu, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 30,
          "valor_aluguel": 3150,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 30m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7407389,
            "lng": -38.48346919999999
          }
        },
        {
          "endereco": "Rua A do Loteamento Residencial Célio Gurgel, 227 - Barroso, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 45,
          "valor_aluguel": 900,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Playground",
            "Área de serviço",
            "Piscina para adulto",
            "Churrasqueira",
            "Piscina"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 45m² em Barroso, Fortaleza",
          "coords": {
            "lat": -3.821732,
            "lng": -38.5817975
          }
        },
        {
          "endereco": "Rua Leonardo Mota, 400 - Meireles, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 167,
          "valor_aluguel": 3950,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 3 Quartos para alugar, 167m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7303397,
            "lng": -38.4944757
          }
        },
        {
          "endereco": "Rua Pedro Borges, 33 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 30,
          "valor_aluguel": 2850,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 30m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7279488,
            "lng": -38.5255179
          }
        },
        {
          "endereco": "Rua Barão de Aracati, 160 - Meireles, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 64,
          "valor_aluguel": 1650,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Ar-condicionado",
            "Jardim"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 64m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.723098899999999,
            "lng": -38.5091703
          }
        },
        {
          "endereco": "Avenida Padre Antônio Tomás, 2420 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 30,
          "valor_aluguel": 3850,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7433887,
            "lng": -38.4905038
          }
        },
        {
          "endereco": "Avenida Humberto Monte, 2929 - Pici, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 64,
          "valor_aluguel": 4050,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Ar-condicionado"
          ],
          "descricao": "Ponto Comercial para alugar, 64m² em Pici, Fortaleza",
          "coords": {
            "lat": -3.7372751,
            "lng": -38.5694572
          }
        },
        {
          "endereco": "Rua Embaúba - Eusebio, Eusébio - CE",
          "quartos": 4,
          "banheiros": 2,
          "vagas": 2,
          "area": 142,
          "valor_aluguel": 2600,
          "url_imagem": "../assets/img/properties/house2.jpg",
          "amenidades": [
            "Varanda gourmet"
          ],
          "descricao": "Casa com 4 Quartos para alugar, 142m² em Eusebio, Fortaleza",
          "coords": {
            "lat": -3.8961082,
            "lng": -38.4558729
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 39,
          "valor_aluguel": 1600,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 39m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Fiuza de Pontes, 48 - Aldeota, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 1,
          "area": 200,
          "valor_aluguel": 3150,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Portão eletrônico"
          ],
          "descricao": "Imóvel Comercial com 3 Quartos para alugar, 200m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7332865,
            "lng": -38.5185166
          }
        },
        {
          "endereco": "Rua Isac Meyer, 50 - Aldeota, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 1,
          "area": 358,
          "valor_aluguel": 4150,
          "url_imagem": "../assets/img/properties/house1.jpg",
          "amenidades": [],
          "descricao": "Casa com 3 Quartos para alugar, 358m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7312746,
            "lng": -38.5118172
          }
        },
        {
          "endereco": "Avenida Bulevar III, 318 - Jangurussu, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 33,
          "valor_aluguel": 2400,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Cozinha",
            "Sistema de alarme",
            "Área de serviço",

          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 33m² em Jangurussu, Fortaleza",
          "coords": {
            "lat": -3.8351004,
            "lng": -38.5183076
          }
        },
        {
          "endereco": "Travessa Armando Oliveira, 14 - Parquelândia, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 40,
          "valor_aluguel": 3400,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Cozinha",
            "Área de serviço"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 40m² em Parquelândia, Fortaleza",
          "coords": {
            "lat": -3.7367765,
            "lng": -38.5670222
          }
        },
        {
          "endereco": "Rua General Bernardo Figueiredo, 415 - Amadeu Furtado, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 45,
          "valor_aluguel": 4550,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 45m² em Amadeu Furtado, Fortaleza",
          "coords": {
            "lat": -3.7398369,
            "lng": -38.5519993
          }
        },
        {
          "endereco": "Rua Recanto Verde, 1479 - Jangurussu, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 90,
          "valor_aluguel": 1850,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [
            ,
            "Área de serviço",
            "Cozinha",
            "Interfone"
          ],
          "descricao": "Imóvel Comercial com 2 Quartos para alugar, 90m² em Jangurussu, Fortaleza",
          "coords": {
            "lat": -3.8394547,
            "lng": -38.5118371
          }
        },
        {
          "endereco": "Avenida Pontes Vieira, 2340 - Dionísio Torres, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 49,
          "valor_aluguel": 2500,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 49m² em Dionísio Torres, Fortaleza",
          "coords": {
            "lat": -3.7513729,
            "lng": -38.5007311
          }
        },
        {
          "endereco": "Rua Senador Pompeu, 649 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 23,
          "valor_aluguel": 900,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Cozinha",
            "Segurança 24h",
            "Elevador",
            "Vigia"
          ],
          "descricao": "Sala Comercial para alugar, 23m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724452299999999,
            "lng": -38.5287254
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 39,
          "valor_aluguel": 4150,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 39m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Cidade dos Funcionários, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 16,
          "valor_aluguel": 1650,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 16m² em Cidade dos Funcionários, Fortaleza",
          "coords": {
            "lat": -3.7971588,
            "lng": -38.4999808
          }
        },
        {
          "endereco": "Rua Pedro Borges, 33 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 38,
          "valor_aluguel": 750,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7279488,
            "lng": -38.5255179
          }
        },
        {
          "endereco": "Rua Senador Alencar - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 26,
          "valor_aluguel": 1300,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 26m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7229233,
            "lng": -38.5340305
          }
        },
        {
          "endereco": "Parque Dois Irmãos, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 22,
          "valor_aluguel": 750,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 22m² em Parque Dois Irmãos, Fortaleza",
          "coords": {
            "lat": -3.8089995,
            "lng": -38.5495815
          }
        },
        {
          "endereco": "Rua H, 0 - Parque Dois Irmãos, Fortaleza - CE",
          "area": 438,
          "valor_aluguel": 4050,
          "url_imagem": "../assets/img/properties/ground1.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar, 438m² em Parque Dois Irmãos, Fortaleza",
          "coords": {
            "lat": -3.8010167,
            "lng": -38.5502464
          }
        },
        {
          "endereco": "Rua General Bernardo Figueiredo, 2020 - Parquelândia, Fortaleza - CE",
          "quartos": 5,
          "banheiros": 2,
          "vagas": 1,
          "area": 440,
          "valor_aluguel": 1100,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial com 5 Quartos para alugar, 440m² em Parquelândia, Fortaleza",
          "coords": {
            "lat": -3.7404762,
            "lng": -38.5549276
          }
        },
        {
          "endereco": "Rua da Assunção, 443 - José Bonifácio, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 35,
          "valor_aluguel": 2550,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial com 2 Quartos para alugar, 35m² em José Bonifácio, Fortaleza",
          "coords": {
            "lat": -3.7340616,
            "lng": -38.5282924
          }
        },
        {
          "endereco": "Avenida Presidente Artur Bernardes, 3470 - JOSE DE ALENCAR, Fortaleza - CE",
          "banheiros": 2,
          "vagas": 1,
          "area": 4066,
          "valor_aluguel": 2650,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Prédio Comercial com 40 Quartos para alugar, 4066m² em JOSE DE ALENCAR, Fortaleza",
          "coords": {
            "lat": -3.8089627,
            "lng": -38.4704225
          }
        },
        {
          "endereco": "Rua Pedro Borges, 30 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 40,
          "valor_aluguel": 2750,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [
            "Cozinha"
          ],
          "descricao": "Sala Comercial para alugar, 40m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.728075,
            "lng": -38.5260597
          }
        },
        {
          "endereco": "Rua Dona Leopoldina, 388 - Centro, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 1,
          "area": 25,
          "valor_aluguel": 1700,
          "url_imagem": "",
          "amenidades": [
            "Cozinha"
          ],
          "descricao": "Kitnet com 1 Quarto para alugar, 25m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7285962,
            "lng": -38.5189349
          }
        },
        {
          "endereco": "Avenida Maestro Lisboa, 401 - JOSE DE ALENCAR, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 17,
          "valor_aluguel": 1600,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 17m² em JOSE DE ALENCAR, Fortaleza",
          "coords": {
            "lat": -3.8077569,
            "lng": -38.476729
          }
        },
        {
          "endereco": "Rua França, 1061 - Maraponga, Fortaleza - CE",
          "quartos": 4,
          "banheiros": 3,
          "vagas": 2,
          "area": 253,
          "valor_aluguel": 3950,
          "url_imagem": "../assets/img/properties/house4.jpg",
          "amenidades": [
            "Varanda",
            "Garagem",
            "Cozinha",
            "Área de serviço",

          ],
          "descricao": "Casa com 4 Quartos para alugar, 253m² em Maraponga, Fortaleza",
          "coords": {
            "lat": -3.7922468,
            "lng": -38.5624482
          }
        },
        {
          "endereco": "Rua 101 - Novo Mondubim, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 41,
          "valor_aluguel": 3400,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Churrasqueira",
            "Interfone",
            "Quadra poliesportiva",

          ],
          "descricao": "Apartamento com 2 Quartos para venda ou aluguel, 41m² em Novo Mondubim, Fortaleza",
          "coords": {
            "lat": -3.8105478,
            "lng": -38.5886361
          }
        },
        {
          "endereco": "Papicu, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 300,
          "valor_aluguel": 3550,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [
            "Cozinha"
          ],
          "descricao": "Ponto Comercial para venda ou aluguel, 300m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.740604199999999,
            "lng": -38.4764189
          }
        },
        {
          "endereco": "Rua Professor Jacinto Botelho, 60 - Guararapes, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 1,
          "area": 100,
          "valor_aluguel": 4150,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [

          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 100m² em Guararapes, Fortaleza",
          "coords": {
            "lat": -3.7577411,
            "lng": -38.4907183
          }
        },
        {
          "endereco": "Rua Rafael Tobias, 2800 - JOSE DE ALENCAR, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 126,
          "valor_aluguel": 1200,
          "url_imagem": "../assets/img/properties/house2.jpg",
          "amenidades": [
            "Cozinha",
            "Interfone",
            "Área de serviço",

          ],
          "descricao": "Casa com 3 Quartos para alugar, 126m² em JOSE DE ALENCAR, Fortaleza",
          "coords": {
            "lat": -3.8061471,
            "lng": -38.4714507
          }
        },
        {
          "endereco": "Rua Capitão Melo, 3358 - Joaquim Tavora, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 25,
          "valor_aluguel": 1050,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Cozinha"
          ],
          "descricao": "Ponto Comercial para alugar, 25m² em Joaquim Tavora, Fortaleza",
          "coords": {
            "lat": -3.7518544,
            "lng": -38.5140818
          }
        },
        {
          "endereco": "Rua Daura, 151 - Barroso, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 41,
          "valor_aluguel": 800,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Playground",
            "Área de serviço",
            "Piscina para adulto",
            "Piscina"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 41m² em Barroso, Fortaleza",
          "coords": {
            "lat": -3.823082,
            "lng": -38.50589160000001
          }
        },
        {
          "endereco": "Rua Tomás Acioli, 840 - Joaquim Tavora, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 59,
          "valor_aluguel": 3650,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [
            "Cozinha",
            "Elevador"
          ],
          "descricao": "Sala Comercial para venda ou aluguel, 59m² em Joaquim Tavora, Fortaleza",
          "coords": {
            "lat": -3.7448791,
            "lng": -38.5101609
          }
        },
        {
          "endereco": "Rua José Hipólito, 120 - Messejana, Fortaleza - CE",
          "quartos": 4,
          "banheiros": 3,
          "vagas": 1,
          "area": 125,
          "valor_aluguel": 3300,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Área de serviço",
            "Playground",
            "Quadra poliesportiva"
          ],
          "descricao": "Apartamento com 4 Quartos para alugar, 125m² em Messejana, Fortaleza",
          "coords": {
            "lat": -3.8329294,
            "lng": -38.493973
          }
        },
        {
          "endereco": "Rua Pereira Filgueiras, 2392 - Centro, Fortaleza - CE",
          "banheiros": 2,
          "vagas": 2,
          "area": 167,
          "valor_aluguel": 3900,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [],
          "descricao": null,
          "coords": {
            "lat": -3.7320987,
            "lng": -38.5019141
          }
        },
        {
          "endereco": "Avenida Antônio Sales, 1516 - Joaquim Tavora, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 43,
          "valor_aluguel": 3900,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 43m² em Joaquim Tavora, Fortaleza",
          "coords": {
            "lat": -3.7431975,
            "lng": -38.51011949999999
          }
        },
        {
          "endereco": "Rua Barão de Aracati, 145 - Meireles, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 56,
          "valor_aluguel": 3150,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Piscina",
            "Mobiliado",
            "Elevador",
            "Condomínio fechado",
            "Academia"
          ],
          "descricao": "Apartamento com 2 Quartos para venda ou aluguel, 56m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7233292,
            "lng": -38.5087503
          }
        },
        {
          "endereco": "Avenida Dolor Barreira, 1000 - De Lourdes, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 2,
          "area": 21,
          "valor_aluguel": 2950,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [
            "Hall de entrada",
            "Sala de reunião"
          ],
          "descricao": "Sala Comercial com 1 Quarto para alugar, 21m² em De Lourdes, Fortaleza",
          "coords": {
            "lat": -3.7352823,
            "lng": -38.46967679999999
          }
        },
        {
          "endereco": "Rua Hil de Moraes, 12 - Guararapes, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 70,
          "valor_aluguel": 3550,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 70m² em Guararapes, Fortaleza",
          "coords": {
            "lat": -3.7754212,
            "lng": -38.4780354
          }
        },
        {
          "endereco": "Cidade dos Funcionários, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 35,
          "valor_aluguel": 2350,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [
            "Interfone"
          ],
          "descricao": "Sala Comercial para alugar, 35m² em Cidade dos Funcionários, Fortaleza",
          "coords": {
            "lat": -3.7971588,
            "lng": -38.4999808
          }
        },
        {
          "endereco": "Rua General Clarindo de Queiroz, 800 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 30,
          "valor_aluguel": 1800,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [
            "Cozinha",
            "Elevador",
            "Interfone",
            "Escritório"
          ],
          "descricao": "Sala Comercial para alugar, 30m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7322325,
            "lng": -38.531384
          }
        },
        {
          "endereco": "Rua Pinto Madeira, 1075 - Centro, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 2,
          "area": 30,
          "valor_aluguel": 4850,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Lavanderia",
            "Cozinha",
            "Área de serviço"
          ],
          "descricao": "Apartamento com 1 Quarto para alugar, 30m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.732812,
            "lng": -38.5156213
          }
        },
        {
          "endereco": "Rua João Gentil, 2964 - Granja Lisboa, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 85,
          "valor_aluguel": 1000,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [
            "Conexão à internet"
          ],
          "descricao": "Ponto Comercial para alugar, 85m² em Granja Lisboa, Fortaleza",
          "coords": {
            "lat": -3.7911215,
            "lng": -38.6246533
          }
        },
        {
          "endereco": "Avenida Senador Virgílio Távora, 1701 - Meireles, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 35,
          "valor_aluguel": 4600,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 35m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7403814,
            "lng": -38.4939797
          }
        },
        {
          "endereco": "Rua Doutor Manuel Teófilo, 995 - Itaperi, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 60,
          "valor_aluguel": 3450,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Condomínio fechado",
            "Jardim",
            "Área de serviço"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 60m² em Itaperi, Fortaleza",
          "coords": {
            "lat": -3.7868361,
            "lng": -38.562494
          }
        },
        {
          "endereco": "Avenida da Saudade - Passaré, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 48,
          "valor_aluguel": 1650,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Interfone",

          ],
          "descricao": "Apartamento com 2 Quartos para venda ou aluguel, 48m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.8160621,
            "lng": -38.5361605
          }
        },
        {
          "endereco": "Rua Pedro Borges, 33 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 34,
          "valor_aluguel": 3250,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para venda ou aluguel, 34m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7279488,
            "lng": -38.5255179
          }
        },
        {
          "endereco": "Rua do Pocinho, 33 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 34,
          "valor_aluguel": 4800,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para venda ou aluguel, 34m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.728003,
            "lng": -38.52548
          }
        },
        {
          "endereco": "Rua Alagoas, 2910 - Pici, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 55,
          "valor_aluguel": 4350,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 55m² em Pici, Fortaleza",
          "coords": {
            "lat": -3.7531168,
            "lng": -38.5770872
          }
        },
        {
          "endereco": "Avenida Dom Luís, 500 - Meireles, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 32,
          "valor_aluguel": 850,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 32m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7356097,
            "lng": -38.4909979
          }
        },
        {
          "endereco": "Maraponga, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 550,
          "valor_aluguel": 4300,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [
            "Depósito"
          ],
          "descricao": "Prédio Comercial para venda ou aluguel, 550m² em Maraponga, Fortaleza",
          "coords": {
            "lat": -3.793095,
            "lng": -38.5659336
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 31,
          "valor_aluguel": 3650,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Rua Maria Pinheiro Campelo, 673 - Lagoa Redonda, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 2,
          "area": 45,
          "valor_aluguel": 2850,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Cozinha",
            "Área de serviço"
          ],
          "descricao": "Apartamento com 1 Quarto para alugar, 45m² em Lagoa Redonda, Fortaleza",
          "coords": {
            "lat": -3.8331138,
            "lng": -38.4592679
          }
        },
        {
          "endereco": "Rua Waldery Uchôa - Benfica, Fortaleza - CE",
          "quartos": 4,
          "banheiros": 3,
          "vagas": 1,
          "area": 120,
          "valor_aluguel": 5000,
          "url_imagem": "../assets/img/properties/house1.jpg",
          "amenidades": [
            "Garagem",
            "Cozinha"
          ],
          "descricao": "Casa com 4 Quartos para alugar, 120m² em Benfica, Fortaleza",
          "coords": {
            "lat": -3.7471849,
            "lng": -38.5417218
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 5335 - Papicu, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": 700,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 30m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7407389,
            "lng": -38.48346919999999
          }
        },
        {
          "endereco": "Avenida Dom Luís, 500 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 62,
          "valor_aluguel": 2150,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Escritório",
            "Vista para o mar"
          ],
          "descricao": "Sala Comercial para alugar, 62m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7340637,
            "lng": -38.49696480000001
          }
        },
        {
          "endereco": "Rua Bento Albuquerque, 3300 - Manoel Dias Branco, Fortaleza - CE",
          "quartos": 4,
          "banheiros": 2,
          "vagas": 1,
          "area": 163,
          "valor_aluguel": 1100,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",

          ],
          "descricao": "Apartamento com 4 Quartos para alugar, 163m² em Manoel Dias Branco, Fortaleza",
          "coords": {
            "lat": -3.751343,
            "lng": -38.4608411
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 42,
          "valor_aluguel": 1650,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Parque Manibura, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 50,
          "valor_aluguel": 1600,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 50m² em Parque Manibura, Fortaleza",
          "coords": {
            "lat": -3.7912376,
            "lng": -38.4877551
          }
        },
        {
          "endereco": "Vila Nazira, 96 - Fátima, Fortaleza - CE",
          "quartos": 6,
          "banheiros": 2,
          "vagas": 2,
          "area": 250,
          "valor_aluguel": 3300,
          "url_imagem": "../assets/img/properties/house3.jpg",
          "amenidades": [],
          "descricao": "Casa com 6 Quartos para alugar, 250m² em Fátima, Fortaleza",
          "coords": {
            "lat": -3.7424532,
            "lng": -38.5339863
          }
        },
        {
          "endereco": "Rua Andrade Furtado, 0 - Cocó, Fortaleza - CE",
          "area": 498,
          "valor_aluguel": 2800,
          "url_imagem": "../assets/img/properties/ground1.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar, 498m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.7427741,
            "lng": -38.4889202
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 31,
          "valor_aluguel": 1150,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Rua Pereira Filgueiras, 2020 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 36,
          "valor_aluguel": 3600,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 36m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7311979,
            "lng": -38.50466
          }
        },
        {
          "endereco": "Rua Roberto Gradvohl, 1 - JOSE DE ALENCAR, Fortaleza - CE",
          "area": 1000,
          "valor_aluguel": 4550,
          "url_imagem": "../assets/img/properties/ground1.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar, 1000m² em JOSE DE ALENCAR, Fortaleza",
          "coords": {
            "lat": -3.8093649,
            "lng": -38.47705
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 72,
          "valor_aluguel": 1650,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 72m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 75,
          "valor_aluguel": 4650,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 75m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Avenida Senador Virgílio Távora, 1901 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 28,
          "valor_aluguel": 1450,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 28m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.743278,
            "lng": -38.495201
          }
        },
        {
          "endereco": "Rua Porto Velho, 9 - João XXIII, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 50,
          "valor_aluguel": 4800,
          "url_imagem": "../assets/img/properties/house4.jpg",
          "amenidades": [
            "Varanda",
            "Cozinha",

          ],
          "descricao": "Casa com 2 Quartos para alugar, 50m² em João XXIII, Fortaleza",
          "coords": {
            "lat": -3.7670131,
            "lng": -38.5829132
          }
        },
        {
          "endereco": "Rua Maria Alice, SN - Engenheiro Luciano Cavalcante, Fortaleza - CE",
          "area": 841,
          "valor_aluguel": 4400,
          "url_imagem": "../assets/img/properties/ground1.jpg",
          "amenidades": [
            "Desnível para frente (rua)",
            "Plano",
            "Rua asfaltada"
          ],
          "descricao": "Lote/Terreno para alugar, 841m² em Engenheiro Luciano Cavalcante, Fortaleza",
          "coords": {
            "lat": -3.7740998,
            "lng": -38.491673
          }
        },
        {
          "endereco": "Rua Nogueira Acioli, 1365 - Aldeota, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 89,
          "valor_aluguel": 600,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Área de serviço"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 89m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7357398,
            "lng": -38.5186815
          }
        },
        {
          "endereco": "Rua Raimundo Oliveira Filho, 720 - Papicu, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 1,
          "area": 100,
          "valor_aluguel": 4650,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Varanda",
            "Playground"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 100m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7384958,
            "lng": -38.4790876
          }
        },
        {
          "endereco": "Rua 5, 350 - Parque Iracema, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 70,
          "valor_aluguel": 2550,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 2 Quartos para alugar, 70m² em Parque Iracema, Fortaleza",
          "coords": {
            "lat": -3.8042961,
            "lng": -38.4986963
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 31,
          "valor_aluguel": 950,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 31,
          "valor_aluguel": 4950,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Avenida Duque de Caxias, 823 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 36,
          "valor_aluguel": 2050,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Circuito de segurança",
            "Elevador"
          ],
          "descricao": "Sala Comercial para alugar, 36m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7313072,
            "lng": -38.5317182
          }
        },
        {
          "endereco": "Avenida da Abolição, 3089 - Beira Mar, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": 1850,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Câmera de segurança",
            "Jardim",
            "Portão eletrônico",
            "Portaria 24h",
            "Closet"
          ],
          "descricao": "Apartamento com 1 Quarto para alugar, 30m² em Beira Mar, Fortaleza",
          "coords": {
            "lat": -3.726603,
            "lng": -38.4916884
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1267 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 23,
          "valor_aluguel": 750,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [
            "Elevador",
            "Escritório"
          ],
          "descricao": "Sala Comercial para alugar, 23m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7313778,
            "lng": -38.5121337
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 128,
          "valor_aluguel": 3550,
          "url_imagem": "../assets/img/properties/ground2.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rua Vereador Ademar Arruda, 95 - Centro, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 85,
          "valor_aluguel": 2650,
          "url_imagem": "../assets/img/properties/house5.jpg",
          "amenidades": [
            "Varanda",
            "Cozinha",
            "Área de serviço",

          ],
          "descricao": "Casa com 2 Quartos para alugar, 85m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724565999999999,
            "lng": -38.51720299999999
          }
        },
        {
          "endereco": "Rua Antônio Augusto, 120 - Meireles, Fortaleza - CE",
          "area": 54,
          "valor_aluguel": 1150,
          "url_imagem": "../assets/img/properties/ground2.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7221461,
            "lng": -38.5110242
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 42,
          "valor_aluguel": 1350,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Pedro Borges, 30 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 50,
          "valor_aluguel": 3850,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [
            "Cozinha"
          ],
          "descricao": "Sala Comercial para alugar, 50m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.728075,
            "lng": -38.5260597
          }
        },
        {
          "endereco": "Avenida Pontes Vieira, 2340 - Dionísio Torres, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 34,
          "valor_aluguel": 1750,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 34m² em Dionísio Torres, Fortaleza",
          "coords": {
            "lat": -3.7513729,
            "lng": -38.5007311
          }
        },
        {
          "endereco": "Parangaba, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 35,
          "valor_aluguel": 1500,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 35m² em Parangaba, Fortaleza",
          "coords": {
            "lat": -3.7771358,
            "lng": -38.5620583
          }
        },
        {
          "endereco": "Rua Araripe Júnior, 0 - Cambeba, Fortaleza - CE",
          "area": 1000,
          "valor_aluguel": 1550,
          "url_imagem": "../assets/img/properties/ground1.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para venda ou aluguel, 1000m² em Cambeba, Fortaleza",
          "coords": {
            "lat": -3.8096082,
            "lng": -38.4788459
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 42,
          "valor_aluguel": 3350,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Pedro I, 663 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 20,
          "valor_aluguel": 4000,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 20m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7306716,
            "lng": -38.5306338
          }
        },
        {
          "endereco": "Rua José Alves Cavalcante, 211 - Cidade dos Funcionários, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 130,
          "valor_aluguel": 1200,
          "url_imagem": "../assets/img/properties/house5.jpg",
          "amenidades": [],
          "descricao": "Casa com 3 Quartos para alugar, 130m² em Cidade dos Funcionários, Fortaleza",
          "coords": {
            "lat": -3.793137499999999,
            "lng": -38.5048447
          }
        },
        {
          "endereco": "Rua Pedro Aristides Albuquerque, 550 - Joaquim Tavora, Fortaleza - CE",
          "quartos": 4,
          "banheiros": 2,
          "vagas": 1,
          "area": 250,
          "valor_aluguel": 1900,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Portão eletrônico",
            "Cozinha americana"
          ],
          "descricao": "Imóvel Comercial com 4 Quartos para alugar, 250m² em Joaquim Tavora, Fortaleza",
          "coords": {
            "lat": -3.7487795,
            "lng": -38.5154402
          }
        },
        {
          "endereco": "Avenida Antônio Sales, 1950 - Dionísio Torres, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 28,
          "valor_aluguel": 2100,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 28m² em Dionísio Torres, Fortaleza",
          "coords": {
            "lat": -3.7442774,
            "lng": -38.5070424
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1343 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 32,
          "valor_aluguel": 3550,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [
            "Cozinha",
            "Circuito de segurança",
            "Interfone",
            "Elevador"
          ],
          "descricao": "Sala Comercial para alugar, 32m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7316032,
            "lng": -38.5117003
          }
        },
        {
          "endereco": "Rua Monsenhor Bruno, 289 - Meireles, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 85,
          "valor_aluguel": 1750,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Elevador",
            "Varanda",
            "Garagem",
            "Cozinha"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 85m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7247262,
            "lng": -38.5067742
          }
        },
        {
          "endereco": "Rua Peru, 279 - Itaperi, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 110,
          "valor_aluguel": 4400,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 110m² em Itaperi, Fortaleza",
          "coords": {
            "lat": -3.7842759,
            "lng": -38.5557001
          }
        },
        {
          "endereco": "Rua Barão do Rio Branco, 1071 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 27,
          "valor_aluguel": 3900,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Elevador",
            "Interfone"
          ],
          "descricao": "Sala Comercial para alugar, 27m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7277511,
            "lng": -38.5283848
          }
        },
        {
          "endereco": "Avenida da Saudade, 95 - Passaré, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 60,
          "valor_aluguel": 1000,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Condomínio fechado",
            "Varanda",
            "Academia"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 60m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.8137683,
            "lng": -38.5313796
          }
        },
        {
          "endereco": "Avenida Pedro Lazar, 830 - Cambeba, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 52,
          "valor_aluguel": 1250,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 52m² em Cambeba, Fortaleza",
          "coords": {
            "lat": -3.8032847,
            "lng": -38.4886881
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 89,
          "valor_aluguel": 4850,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 89m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 76,
          "valor_aluguel": 4050,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 76m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Avenida Visconde do Rio Branco, 2125 - Joaquim Tavora, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 1,
          "area": 100,
          "valor_aluguel": 3400,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 3 Quartos para alugar, 100m² em Joaquim Tavora, Fortaleza",
          "coords": {
            "lat": -3.7394224,
            "lng": -38.5232752
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 31,
          "valor_aluguel": 4800,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 31,
          "valor_aluguel": 2600,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 156,
          "valor_aluguel": 1800,
          "url_imagem": "../assets/img/properties/ground3.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rodovia BR-116, 6163 - Aerolândia, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 256,
          "valor_aluguel": 2700,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 256m² em Aerolândia, Fortaleza",
          "coords": {
            "lat": -3.775246,
            "lng": -38.5153475
          }
        },
        {
          "endereco": "Via Paisagística do Loteamento Itaperussú, 80 - Itaperi, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 53,
          "valor_aluguel": 1700,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",

          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 53m² em Itaperi, Fortaleza",
          "coords": {
            "lat": -3.7961599,
            "lng": -38.5360689
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 23,
          "valor_aluguel": 950,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 23m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Rua do Rosário, 77 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 56,
          "valor_aluguel": 2500,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 56m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.728418999999999,
            "lng": -38.5262788
          }
        },
        {
          "endereco": "Antônio Bezerra, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 40,
          "valor_aluguel": 3300,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Lavanderia",
            "Sala de jantar",
            "Cozinha"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 40m² em Antônio Bezerra, Fortaleza",
          "coords": {
            "lat": -3.740141199999999,
            "lng": -38.5946171
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 31,
          "valor_aluguel": 1450,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Rua Bento Albuquerque, 1633 - Cocó, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 74,
          "valor_aluguel": 2400,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Área de serviço"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 74m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.746507199999999,
            "lng": -38.4742645
          }
        },
        {
          "endereco": "Rua Pereira Filgueiras, 149 - Centro, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 2,
          "area": 55,
          "valor_aluguel": 1150,
          "url_imagem": "../assets/img/properties/house2.jpg",
          "amenidades": [],
          "descricao": "Casa com 1 Quarto para alugar, 55m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.72564,
            "lng": -38.521067
          }
        },
        {
          "endereco": "Rua José Vilar, 3333 - Dionísio Torres, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 65,
          "valor_aluguel": 2500,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Circuito de segurança",
            "Elevador",
            "Portaria 24h",
            "Portão eletrônico",
            "Condomínio fechado"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 65m² em Dionísio Torres, Fortaleza",
          "coords": {
            "lat": -3.7533526,
            "lng": -38.5102818
          }
        },
        {
          "endereco": "Rua Artur de Carvalho, 187 - Vila União, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 1,
          "area": 19,
          "valor_aluguel": 4150,
          "url_imagem": "../assets/img/properties/house4.jpg",
          "amenidades": [

          ],
          "descricao": "Casa com 3 Quartos para alugar, 19m² em Vila União, Fortaleza",
          "coords": {
            "lat": -3.7608826,
            "lng": -38.53450530000001
          }
        },
        {
          "endereco": "Rua Doutor Edmilson Barros de Oliveira - Cocó, Fortaleza - CE",
          "area": 440,
          "valor_aluguel": 1700,
          "url_imagem": "../assets/img/properties/ground3.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para venda ou aluguel, 440m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.7515363,
            "lng": -38.4940296
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 6870 - Papicu, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 45,
          "valor_aluguel": 4750,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 45m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7448345,
            "lng": -38.4723958
          }
        },
        {
          "endereco": "Rua Doutor Gilberto Studart, 55 - Cocó, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 40,
          "valor_aluguel": 3650,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 40m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.743293,
            "lng": -38.482377
          }
        },
        {
          "endereco": "Rua Senador Pompeu, 649 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 23,
          "valor_aluguel": 1450,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Cozinha",
            "Segurança 24h",
            "Elevador",
            "Vigia"
          ],
          "descricao": "Sala Comercial para alugar, 23m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724452299999999,
            "lng": -38.5287254
          }
        },
        {
          "endereco": "Rua Doutor Salustio de Pinho, 1 - Praia do Futuro II, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 160,
          "valor_aluguel": 2650,
          "url_imagem": "../assets/img/properties/house4.jpg",
          "amenidades": [
            "Piscina",
            "Condomínio fechado",
            "Jardim",
            "Área de serviço",
            "Portaria 24h"
          ],
          "descricao": "Casa de Condomínio com 2 Quartos para alugar, 160m² em Praia do Futuro II, Fortaleza",
          "coords": {
            "lat": -3.751626,
            "lng": -38.44677799999999
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 38,
          "valor_aluguel": 3800,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Avenida Duque de Caxias, 641 - Centro, Fortaleza - CE",
          "quartos": 8,
          "banheiros": 3,
          "vagas": 2,
          "area": 600,
          "valor_aluguel": 850,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial com 8 Quartos para alugar, 600m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7317895,
            "lng": -38.5302448
          }
        },
        {
          "endereco": "Avenida Geógrafo Antônio Ribeiro Zaranza, 2598 - Cajazeiras, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 45,
          "valor_aluguel": 1050,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Churrasqueira",
            "Playground",
            "Salão de festas",
            "Conexão à internet"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 45m² em Cajazeiras, Fortaleza",
          "coords": {
            "lat": -3.8082689,
            "lng": -38.5132471
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 31,
          "valor_aluguel": 3450,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Rua João Cordeiro, 688 - Aldeota, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 1,
          "area": 44,
          "valor_aluguel": 3150,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Varanda",
            "Academia"
          ],
          "descricao": "Apartamento com 1 Quarto para alugar, 44m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7260913,
            "lng": -38.51349390000001
          }
        },
        {
          "endereco": "Rua Francisco Nogueira, 340 - Cajazeiras, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 70,
          "valor_aluguel": 4800,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Mobiliado",
            "Playground",
            "Salão de festas",
            "Quadra poliesportiva"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 70m² em Cajazeiras, Fortaleza",
          "coords": {
            "lat": -3.801292,
            "lng": -38.5057423
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 39,
          "valor_aluguel": 3050,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 39m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Avenida Engenheiro Alberto Sá, 705 - Papicu, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 54,
          "valor_aluguel": 1050,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [
            "Depósito"
          ],
          "descricao": "Ponto Comercial para alugar, 54m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7348957,
            "lng": -38.4741872
          }
        },
        {
          "endereco": "Rua A do Loteamento Residencial Célio Gurgel, 1697 - Barroso, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 42,
          "valor_aluguel": 3600,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Garagem"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 42m² em Barroso, Fortaleza",
          "coords": {
            "lat": -3.821732,
            "lng": -38.5817975
          }
        },
        {
          "endereco": "Rua Cruzeiro do Sul, 669 - Álvaro Weyne, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 75,
          "valor_aluguel": 5000,
          "url_imagem": "../assets/img/properties/house1.jpg",
          "amenidades": [
            "Cozinha",
            "Área de serviço"
          ],
          "descricao": "Casa com 2 Quartos para alugar, 75m² em Álvaro Weyne, Fortaleza",
          "coords": {
            "lat": -3.7153258,
            "lng": -38.5628823
          }
        },
        {
          "endereco": "Rua Alencar Oliveira - Passaré, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 44,
          "valor_aluguel": 3050,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Interfone",
            "Quadra poliesportiva",
            "Sistema de alarme",

          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 44m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.8147776,
            "lng": -38.5199405
          }
        },
        {
          "endereco": "Rua Paulo de Almeida Sanford, 145 - Edson Queiroz, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 1,
          "area": 171,
          "valor_aluguel": 2500,
          "url_imagem": "../assets/img/properties/house4.jpg",
          "amenidades": [
            "Cozinha",
            "Área de serviço",

          ],
          "descricao": "Casa com 3 Quartos para venda ou aluguel, 171m² em Edson Queiroz, Fortaleza",
          "coords": {
            "lat": -3.7877666,
            "lng": -38.4752562
          }
        },
        {
          "endereco": "Avenida Trajano de Medeiros, 2150 - Vicente Pinzon, Fortaleza - CE",
          "quartos": 5,
          "banheiros": 3,
          "vagas": 1,
          "area": 500,
          "valor_aluguel": 2600,
          "url_imagem": "../assets/img/properties/house2.jpg",
          "amenidades": [],
          "descricao": "Casa com 5 Quartos para alugar, 500m² em Vicente Pinzon, Fortaleza",
          "coords": {
            "lat": -3.7381928,
            "lng": -38.4611437
          }
        },
        {
          "endereco": "Rua Rafael Tobias, 2800 - JOSE DE ALENCAR, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 126,
          "valor_aluguel": 2550,
          "url_imagem": "../assets/img/properties/house2.jpg",
          "amenidades": [
            "Cozinha",
            "Interfone",
            "Área de serviço",

          ],
          "descricao": "Casa com 3 Quartos para alugar, 126m² em JOSE DE ALENCAR, Fortaleza",
          "coords": {
            "lat": -3.8061471,
            "lng": -38.4714507
          }
        },
        {
          "endereco": "Rua Hil de Moraes, 12 - Edson Queiroz, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 55,
          "valor_aluguel": 2850,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 55m² em Edson Queiroz, Fortaleza",
          "coords": {
            "lat": -3.7754212,
            "lng": -38.4780354
          }
        },
        {
          "endereco": "Sapiranga, Fortaleza - CE",
          "quartos": 4,
          "banheiros": 2,
          "vagas": 1,
          "area": 269,
          "valor_aluguel": 3100,
          "url_imagem": "../assets/img/properties/house2.jpg",
          "amenidades": [
            "Churrasqueira",
            "Cozinha",
            "Área de serviço",
            ,

          ],
          "descricao": "Casa com 4 Quartos para alugar, 269m² em Sapiranga, Fortaleza",
          "coords": {
            "lat": -3.7952935,
            "lng": -38.4757701
          }
        },
        {
          "endereco": "Rua B, 120 - Messejana, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 48,
          "valor_aluguel": 2900,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Condomínio fechado",
            "Área de serviço",
            "Playground"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 48m² em Messejana, Fortaleza",
          "coords": {
            "lat": -3.8079795,
            "lng": -38.5058186
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 3870 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 8,
          "valor_aluguel": 3950,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 8m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7396991,
            "lng": -38.4894273
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 38,
          "valor_aluguel": 4000,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Avenida Santos Dumont - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 58,
          "valor_aluguel": 3400,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 58m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7349664,
            "lng": -38.5022633
          }
        },
        {
          "endereco": "Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 27,
          "valor_aluguel": 2650,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [
            "Elevador"
          ],
          "descricao": "Sala Comercial para venda ou aluguel, 27m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7329688,
            "lng": -38.5264661
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 159,
          "valor_aluguel": 2900,
          "url_imagem": "../assets/img/properties/ground1.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rua Firmino Rocha Aguiar, 1033 - Guararapes, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 72,
          "valor_aluguel": 2350,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 2 Quartos para alugar, 72m² em Guararapes, Fortaleza",
          "coords": {
            "lat": -3.7628197,
            "lng": -38.4838811
          }
        },
        {
          "endereco": "Rua do Parque, 333 - Cambeba, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 70,
          "valor_aluguel": 1250,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 70m² em Cambeba, Fortaleza",
          "coords": {
            "lat": -3.8058571,
            "lng": -38.4813991
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 31,
          "valor_aluguel": 1950,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Rua Bento Albuquerque, 1555 - Cocó, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 1,
          "area": 120,
          "valor_aluguel": 4700,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Jardim",
            "Área de serviço"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 120m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.746066,
            "lng": -38.4753206
          }
        },
        {
          "endereco": "Rua Afrânio Peixoto, 288 - Parangaba, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 60,
          "valor_aluguel": 3950,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 2 Quartos para alugar, 60m² em Parangaba, Fortaleza",
          "coords": {
            "lat": -3.7805487,
            "lng": -38.5724567
          }
        },
        {
          "endereco": "Rua Marcondes Pereira, 537 - Joaquim Tavora, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 134,
          "valor_aluguel": 4950,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Depósito",
            "Salão de festas"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 134m² em Joaquim Tavora, Fortaleza",
          "coords": {
            "lat": -3.747585199999999,
            "lng": -38.5122196
          }
        },
        {
          "endereco": "Rua Pedro Borges, 33 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 34,
          "valor_aluguel": 4900,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [
            "Elevador",
            "Portaria 24h",
            "Acesso para deficientes"
          ],
          "descricao": "Sala Comercial para alugar, 34m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7279488,
            "lng": -38.5255179
          }
        },
        {
          "endereco": "Rua Vilebaldo Aguiar, 2246 - Cocó, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 68,
          "valor_aluguel": 1000,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Salão de festas",
            "Closet"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 68m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.747638,
            "lng": -38.4661795
          }
        },
        {
          "endereco": "Rua Gonçalves Ledo, 177 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 35,
          "valor_aluguel": 2800,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [
            "Cozinha"
          ],
          "descricao": "Sala Comercial para alugar, 35m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7254872,
            "lng": -38.5141632
          }
        },
        {
          "endereco": "Avenida Ministro Albuquerque Lima, 894 - Conjunto Ceará, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": 3950,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 30m² em Conjunto Ceará, Fortaleza",
          "coords": {
            "lat": -3.7708043,
            "lng": -38.6048985
          }
        },
        {
          "endereco": "Rua Vinícios de Morais, 1064 - Maraponga, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 1,
          "area": 95,
          "valor_aluguel": 3350,
          "url_imagem": "../assets/img/properties/house4.jpg",
          "amenidades": [
            "Área de serviço"
          ],
          "descricao": "Casa com 3 Quartos para alugar, 95m² em Maraponga, Fortaleza",
          "coords": {
            "lat": -3.7957514,
            "lng": -38.57333089999999
          }
        },
        {
          "endereco": "Rua João Cordeiro, 1377 - Aldeota, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 30,
          "valor_aluguel": 1500,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Portaria 24h",
            "Cozinha americana"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 30m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7325145,
            "lng": -38.5151073
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": 1000,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 42,
          "valor_aluguel": 1650,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 72,
          "valor_aluguel": 1400,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 72m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Rua Major Facundo, 1344 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 140,
          "valor_aluguel": 2450,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 140m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.734789,
            "lng": -38.530111
          }
        },
        {
          "endereco": "Rua Miguel Calmont, 350 - Vicente Pinzon, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 30,
          "valor_aluguel": 1500,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 30m² em Vicente Pinzon, Fortaleza",
          "coords": {
            "lat": -3.727287099999999,
            "lng": -38.4635009
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 5335 - Papicu, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": 2050,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 30m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7407389,
            "lng": -38.48346919999999
          }
        },
        {
          "endereco": "Rodovia BR-116, 5870 - Aerolândia, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 73,
          "valor_aluguel": 3550,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 73m² em Aerolândia, Fortaleza",
          "coords": {
            "lat": -3.7728982,
            "lng": -38.5165825
          }
        },
        {
          "endereco": "Avenida Visconde do Rio Branco, 1728 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 463,
          "valor_aluguel": 3050,
          "url_imagem": "../assets/img/properties/storage3.jpg",
          "amenidades": [
            "Escritório"
          ],
          "descricao": "Galpão/Depósito/Armazém para alugar, 463m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7361,
            "lng": -38.5241708
          }
        },
        {
          "endereco": "Rua Amazonas, 201 - Bela Vista, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 1,
          "area": 90,
          "valor_aluguel": 4050,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Varanda",
            "Garagem",
            "Playground",
            "Quadra poliesportiva",
            "Cozinha"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 90m² em Bela Vista, Fortaleza",
          "coords": {
            "lat": -3.7568438,
            "lng": -38.5596013
          }
        },
        {
          "endereco": "Rua Gustavo Braga, 128 - Rodolfo Teófilo, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 1,
          "area": 112,
          "valor_aluguel": 3850,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Varanda",
            "Garagem",
            "Cozinha",
            "Área de serviço",

          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 112m² em Rodolfo Teófilo, Fortaleza",
          "coords": {
            "lat": -3.750614,
            "lng": -38.5528189
          }
        },
        {
          "endereco": "Avenida Alberto Craveiro, 1240 - Dias Macedo, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 45,
          "valor_aluguel": 4200,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Garagem",
            "Jardim"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 45m² em Dias Macedo, Fortaleza",
          "coords": {
            "lat": -3.7892032,
            "lng": -38.5177181
          }
        },
        {
          "endereco": "Rua Pereira Filgueiras, 2249 - Aldeota, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 2,
          "area": 45,
          "valor_aluguel": 950,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Cozinha",

          ],
          "descricao": "Apartamento com 1 Quarto para alugar, 45m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.731558,
            "lng": -38.50290020000001
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 42,
          "valor_aluguel": 2450,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Tibúrcio Cavalcanti, 155 - Meireles, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 80,
          "valor_aluguel": 4750,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 2 Quartos para alugar, 80m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7265791,
            "lng": -38.4994531
          }
        },
        {
          "endereco": "Rua B - Itaperi, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 120,
          "valor_aluguel": 1050,
          "url_imagem": "../assets/img/properties/house1.jpg",
          "amenidades": [
            "Cozinha",
            "Lavanderia",
            "Área de serviço",
            ,

          ],
          "descricao": "Casa com 3 Quartos para venda ou aluguel, 120m² em Itaperi, Fortaleza",
          "coords": {
            "lat": -3.7943601,
            "lng": -38.5389192
          }
        },
        {
          "endereco": "Rua Barão do Rio Branco - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 36,
          "valor_aluguel": 2400,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 36m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.730413,
            "lng": -38.5295336
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 140,
          "valor_aluguel": 4150,
          "url_imagem": "../assets/img/properties/ground3.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rua Guilherme Moreira, 345 - Fátima, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 28,
          "valor_aluguel": 2050,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 28m² em Fátima, Fortaleza",
          "coords": {
            "lat": -3.7500579,
            "lng": -38.5245693
          }
        },
        {
          "endereco": "Rua Pedro Borges, 33 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 34,
          "valor_aluguel": 3300,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 34m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7279488,
            "lng": -38.5255179
          }
        },
        {
          "endereco": "Rua José Napoleão, 355 - Meireles, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 1,
          "area": 130,
          "valor_aluguel": 4350,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 3 Quartos para alugar, 130m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7285157,
            "lng": -38.489875
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 69,
          "valor_aluguel": 3450,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 69m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Rua Fiscal Vieira, 3575 - Joaquim Tavora, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 314,
          "valor_aluguel": 4800,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Prédio Comercial para alugar, 314m² em Joaquim Tavora, Fortaleza",
          "coords": {
            "lat": -3.752580999999999,
            "lng": -38.5160321
          }
        },
        {
          "endereco": "Rua Xavier de Oliveira, 338 - Amadeu Furtado, Fortaleza - CE",
          "quartos": 4,
          "banheiros": 2,
          "vagas": 1,
          "area": 160,
          "valor_aluguel": 1600,
          "url_imagem": "../assets/img/properties/house3.jpg",
          "amenidades": [],
          "descricao": "Casa com 4 Quartos para alugar, 160m² em Amadeu Furtado, Fortaleza",
          "coords": {
            "lat": -3.7474077,
            "lng": -38.5609252
          }
        },
        {
          "endereco": "Passaré, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 80,
          "valor_aluguel": 2450,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [
            "Cozinha"
          ],
          "descricao": "Ponto Comercial para alugar, 80m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.8163239,
            "lng": -38.5316373
          }
        },
        {
          "endereco": "Rua Tomás Lopes, 113 - Praia de Iracema, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 1,
          "area": 33,
          "valor_aluguel": 3500,
          "url_imagem": "",
          "amenidades": [],
          "descricao": "Kitnet com 1 Quarto para alugar, 33m² em Praia de Iracema, Fortaleza",
          "coords": {
            "lat": -3.7214121,
            "lng": -38.5155561
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 619 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 40,
          "valor_aluguel": 3400,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 40m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.727184,
            "lng": -38.532761
          }
        },
        {
          "endereco": "Rua Crispina de Freitas, 100 - Edson Queiroz, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 43,
          "valor_aluguel": 4700,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 43m² em Edson Queiroz, Fortaleza",
          "coords": {
            "lat": -3.7869021,
            "lng": -38.4791339
          }
        },
        {
          "endereco": "Avenida Bezerra de Menezes, 1966 - Sao Gerardo, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 121,
          "valor_aluguel": 700,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Piscina",
            "Mobiliado",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 121m² em Sao Gerardo, Fortaleza",
          "coords": {
            "lat": -3.7349166,
            "lng": -38.56197450000001
          }
        },
        {
          "endereco": "Rua do Rosário, 94 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 52,
          "valor_aluguel": 2900,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 52m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7284303,
            "lng": -38.5264456
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 42,
          "valor_aluguel": 4750,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Centro, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 2,
          "area": 20,
          "valor_aluguel": 3800,
          "url_imagem": "",
          "amenidades": [
            "Cozinha"
          ],
          "descricao": "Kitnet com 1 Quarto para alugar, 20m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7329688,
            "lng": -38.5264661
          }
        },
        {
          "endereco": "Rua Mário Alencar Araripe, 1565 - JOSE DE ALENCAR, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 26,
          "valor_aluguel": 2300,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [
            "Escritório"
          ],
          "descricao": "Sala Comercial para alugar, 26m² em JOSE DE ALENCAR, Fortaleza",
          "coords": {
            "lat": -3.8024617,
            "lng": -38.4774563
          }
        },
        {
          "endereco": "Rua Coronel Manuel Albano, 656 - Maraponga, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 60,
          "valor_aluguel": 2300,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Playground",
            "Salão de festas"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 60m² em Maraponga, Fortaleza",
          "coords": {
            "lat": -3.805704099999999,
            "lng": -38.5721383
          }
        },
        {
          "endereco": "Rua Rafael Tobias, 2800 - JOSE DE ALENCAR, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 126,
          "valor_aluguel": 3950,
          "url_imagem": "../assets/img/properties/house2.jpg",
          "amenidades": [
            "Cozinha",
            "Interfone",
            "Área de serviço",

          ],
          "descricao": "Casa com 3 Quartos para alugar, 126m² em JOSE DE ALENCAR, Fortaleza",
          "coords": {
            "lat": -3.8061471,
            "lng": -38.4714507
          }
        },
        {
          "endereco": "Rua Capitão Clóvis Maia, 47 - Alto da Balança, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 41,
          "valor_aluguel": 1750,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Cozinha",
            "Área de serviço"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 41m² em Alto da Balança, Fortaleza",
          "coords": {
            "lat": -3.7689883,
            "lng": -38.5168621
          }
        },
        {
          "endereco": "Lagoa Sapiranga Coité, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 8,
          "valor_aluguel": 2550,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 8m² em Lagoa Sapiranga Coité, Fortaleza",
          "coords": {
            "lat": -3.7952935,
            "lng": -38.4757701
          }
        },
        {
          "endereco": "Rua Doutor João Amora, 504 - Manuel Sátiro, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 90,
          "valor_aluguel": 3150,
          "url_imagem": "../assets/img/properties/house2.jpg",
          "amenidades": [],
          "descricao": "Casa com 3 Quartos para alugar, 90m² em Manuel Sátiro, Fortaleza",
          "coords": {
            "lat": -3.7998042,
            "lng": -38.5787511
          }
        },
        {
          "endereco": "Rua Leonardo Mota, 400 - Meireles, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 1,
          "area": 167,
          "valor_aluguel": 4300,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 3 Quartos para alugar, 167m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7303397,
            "lng": -38.4944757
          }
        },
        {
          "endereco": "Rua Monsenhor Bruno, 1590 - Aldeota, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 2,
          "area": 35,
          "valor_aluguel": 3500,
          "url_imagem": "",
          "amenidades": [
            "Cozinha"
          ],
          "descricao": "Kitnet com 1 Quarto para alugar, 35m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7361825,
            "lng": -38.5107553
          }
        },
        {
          "endereco": "Avenida Geógrafo Antônio Ribeiro Zaranza, 2598 - Cajazeiras, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 44,
          "valor_aluguel": 4950,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Churrasqueira",
            "Garagem",
            "Playground",
            "Salão de festas"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 44m² em Cajazeiras, Fortaleza",
          "coords": {
            "lat": -3.8082689,
            "lng": -38.5132471
          }
        },
        {
          "endereco": "Rua Marechal Deodoro, 535 - Benfica, Fortaleza - CE",
          "quartos": 5,
          "banheiros": 3,
          "vagas": 1,
          "area": 153,
          "valor_aluguel": 3800,
          "url_imagem": "../assets/img/properties/house1.jpg",
          "amenidades": [
            "Varanda",
            ,
            "Garagem",
            "Área de serviço"
          ],
          "descricao": "Casa com 5 Quartos para alugar, 153m² em Benfica, Fortaleza",
          "coords": {
            "lat": -3.7403257,
            "lng": -38.53532970000001
          }
        },
        {
          "endereco": "Rua Tibúrcio Cavalcanti, 2111 - Dionísio Torres, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 100,
          "valor_aluguel": 1300,
          "url_imagem": "../assets/img/properties/house4.jpg",
          "amenidades": [
            "Área de serviço",
            "Box blindex",
            "Interfone",
            ,

          ],
          "descricao": "Casa com 3 Quartos para alugar, 100m² em Dionísio Torres, Fortaleza",
          "coords": {
            "lat": -3.7434415,
            "lng": -38.5048242
          }
        },
        {
          "endereco": "Avenida Dom Luís, 500 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 39,
          "valor_aluguel": 4300,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 39m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7340637,
            "lng": -38.49696480000001
          }
        },
        {
          "endereco": "Avenida Desembargador Moreira, 1701 - Meireles, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 28,
          "valor_aluguel": 2700,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Prédio Comercial para alugar, 28m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7411064,
            "lng": -38.4996512
          }
        },
        {
          "endereco": "Avenida Dioguinho, 4200 - Praia do Futuro, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 2,
          "area": 61,
          "valor_aluguel": 1300,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 1 Quarto para alugar, 61m² em Praia do Futuro, Fortaleza",
          "coords": {
            "lat": -3.7492867,
            "lng": -38.44709840000001
          }
        },
        {
          "endereco": "Rua José Vilar - Dionísio Torres, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 31,
          "valor_aluguel": 4000,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Garagem",
            "Área de serviço",
            "Escritório"
          ],
          "descricao": "Sala Comercial para alugar, 31m² em Dionísio Torres, Fortaleza",
          "coords": {
            "lat": -3.7474473,
            "lng": -38.5084379
          }
        },
        {
          "endereco": "Rua Tomás Lopes, 113 - Praia de Iracema, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 1,
          "area": 33,
          "valor_aluguel": 750,
          "url_imagem": "",
          "amenidades": [],
          "descricao": "Kitnet com 1 Quarto para alugar, 33m² em Praia de Iracema, Fortaleza",
          "coords": {
            "lat": -3.7214121,
            "lng": -38.5155561
          }
        },
        {
          "endereco": "Rua Ministro Eduardo Ellery Barreira, 60 - Guararapes, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 1,
          "area": 110,
          "valor_aluguel": 3650,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 3 Quartos para alugar, 110m² em Guararapes, Fortaleza",
          "coords": {
            "lat": -3.7612735,
            "lng": -38.4840272
          }
        },
        {
          "endereco": "Rua Benjamim Brasil, 2150 - Mondubim, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 420,
          "valor_aluguel": 700,
          "url_imagem": "../assets/img/properties/storage2.jpg",
          "amenidades": [
            "Estacionamento",
            "Rampa",
            "Vestiário",
            "Cozinha"
          ],
          "descricao": "Galpão/Depósito/Armazém para alugar, 420m² em Mondubim, Fortaleza",
          "coords": {
            "lat": -3.808796799999999,
            "lng": -38.5577412
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 76,
          "valor_aluguel": 650,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 76m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Avenida Visconde do Rio Branco, 1725 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 58,
          "valor_aluguel": 1850,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 58m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7359587,
            "lng": -38.5240499
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 42,
          "valor_aluguel": 4950,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Luiza Miranda Coelho, 1130 - Engenheiro Luciano Cavalcante, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 1,
          "area": 75,
          "valor_aluguel": 1550,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Piscina",
            "Mobiliado",
            "Elevador",
            "Condomínio fechado",
            "Varanda"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 75m² em Engenheiro Luciano Cavalcante, Fortaleza",
          "coords": {
            "lat": -3.7752479,
            "lng": -38.4867463
          }
        },
        {
          "endereco": "Avenida José Bastos, 4140 - Rodolfo Teófilo, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 32,
          "valor_aluguel": 3750,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 32m² em Rodolfo Teófilo, Fortaleza",
          "coords": {
            "lat": -3.7536176,
            "lng": -38.5543672
          }
        },
        {
          "endereco": "Montese, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 179,
          "valor_aluguel": 2850,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 179m² em Montese, Fortaleza",
          "coords": {
            "lat": -3.7683772,
            "lng": -38.5517784
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 42,
          "valor_aluguel": 4350,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Padre Valdevino, 1777 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 58,
          "valor_aluguel": 4300,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 58m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.741841,
            "lng": -38.50844319999999
          }
        },
        {
          "endereco": "Rua Joaquim Manuel de Macêdo, 1768 - Henrique Jorge, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 50,
          "valor_aluguel": 2550,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Condomínio fechado",
            "Área de serviço",
            "Perto de vias de acesso"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 50m² em Henrique Jorge, Fortaleza",
          "coords": {
            "lat": -3.7675156,
            "lng": -38.587034
          }
        },
        {
          "endereco": "Rua Francisco Nogueira, 340 - Cajazeiras, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 1,
          "area": 70,
          "valor_aluguel": 1700,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Garagem",
            "Ar-condicionado",
            "Jardim",
            "Área de serviço"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 70m² em Cajazeiras, Fortaleza",
          "coords": {
            "lat": -3.801292,
            "lng": -38.5057423
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 30,
          "valor_aluguel": 1100,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rua Antônio Atualpa Rodrigues, 100 - Praia do Futuro II, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 90,
          "valor_aluguel": 1950,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Piscina",
            "Mobiliado",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 90m² em Praia do Futuro II, Fortaleza",
          "coords": {
            "lat": -3.749558,
            "lng": -38.4483997
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 1235 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": 2100,
          "url_imagem": "",
          "amenidades": [],
          "descricao": "Kitnet para alugar, 30m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7255337,
            "lng": -38.5381513
          }
        },
        {
          "endereco": "Avenida Dom Luís, 500 - Meireles, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 84,
          "valor_aluguel": 1900,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": null,
          "coords": {
            "lat": -3.7356097,
            "lng": -38.4909979
          }
        },
        {
          "endereco": "Rua Barão Aquiraz, 120 - Messejana, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 45,
          "valor_aluguel": 2550,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 2 Quartos para alugar, 45m² em Messejana, Fortaleza",
          "coords": {
            "lat": -3.832464,
            "lng": -38.4901051
          }
        },
        {
          "endereco": "Rua Delmiro de Farias, 1741 - Rodolfo Teófilo, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 425,
          "valor_aluguel": 4500,
          "url_imagem": "../assets/img/properties/storage2.jpg",
          "amenidades": [],
          "descricao": "Galpão/Depósito/Armazém para alugar, 425m² em Rodolfo Teófilo, Fortaleza",
          "coords": {
            "lat": -3.7455877,
            "lng": -38.5529949
          }
        },
        {
          "endereco": "Rua Tenente Moacir Matos, 55 - Montese, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 72,
          "valor_aluguel": 2550,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Condomínio fechado",
            "Cozinha",
            "Quadra poliesportiva",
            "Salão de festas",
            "Área de serviço"
          ],
          "descricao": "Apartamento com 2 Quartos para venda ou aluguel, 72m² em Montese, Fortaleza",
          "coords": {
            "lat": -3.7638542,
            "lng": -38.5575775
          }
        },
        {
          "endereco": "Avenida Doutor Theberge, 1859 - Presidente Kennedy, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 108,
          "valor_aluguel": 4550,
          "url_imagem": "../assets/img/properties/house1.jpg",
          "amenidades": [
            "Ar-condicionado",
            "Cozinha",
            "TV a cabo",
            "Área de serviço"
          ],
          "descricao": "Casa com 2 Quartos para alugar, 108m² em Presidente Kennedy, Fortaleza",
          "coords": {
            "lat": -3.7170836,
            "lng": -38.5656666
          }
        },
        {
          "endereco": "Rua Anário Braga, 100 - Antônio Bezerra, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 1,
          "area": 71,
          "valor_aluguel": 3900,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Garagem",
            "Cozinha",

          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 71m² em Antônio Bezerra, Fortaleza",
          "coords": {
            "lat": -3.7382683,
            "lng": -38.58754589999999
          }
        },
        {
          "endereco": "Avenida Desembargador Moreira, 2020 - Aldeota, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 2,
          "area": 29,
          "valor_aluguel": 3400,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Elevador",
            "Segurança 24h"
          ],
          "descricao": "Sala Comercial com 1 Quarto para alugar, 29m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7428401,
            "lng": -38.5008998
          }
        },
        {
          "endereco": "Rua do Rosário, 77 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 60,
          "valor_aluguel": 2000,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 60m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.728418999999999,
            "lng": -38.5262788
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 26,
          "valor_aluguel": 1300,
          "url_imagem": "../assets/img/properties/ground3.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Avenida Beira Mar, 4444 - Mucuripe, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 2,
          "area": 40,
          "valor_aluguel": 4550,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Elevador",
            "Área de serviço",
            "Cozinha",
            "Interfone"
          ],
          "descricao": "Apartamento com 1 Quarto para alugar, 40m² em Mucuripe, Fortaleza",
          "coords": {
            "lat": -3.722651,
            "lng": -38.4814927
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 38,
          "valor_aluguel": 2800,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 253,
          "valor_aluguel": 1150,
          "url_imagem": "../assets/img/properties/ground3.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 60,
          "valor_aluguel": 2600,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 60m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Avenida Barão de Studart, 2358 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 33,
          "valor_aluguel": 1900,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 33m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7441496,
            "lng": -38.5096904
          }
        },
        {
          "endereco": "Rua Manuel Teixeira, 131 - Cambeba, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 51,
          "valor_aluguel": 1600,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 2 Quartos para alugar, 51m² em Cambeba, Fortaleza",
          "coords": {
            "lat": -3.8157835,
            "lng": -38.4782644
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 1235 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": 2550,
          "url_imagem": "",
          "amenidades": [],
          "descricao": "Kitnet para alugar, 30m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7255337,
            "lng": -38.5381513
          }
        },
        {
          "endereco": "Rua Luiza Guimarães, 709 - Lagoa Redonda, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 83,
          "valor_aluguel": 1700,
          "url_imagem": "../assets/img/properties/house4.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Varanda",

          ],
          "descricao": "Casa de Condomínio com 3 Quartos para alugar, 83m² em Lagoa Redonda, Fortaleza",
          "coords": {
            "lat": -3.833829499999999,
            "lng": -38.4625151
          }
        },
        {
          "endereco": "Rua Bento Albuquerque, 1210 - Cocó, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 127,
          "valor_aluguel": 4950,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Jardim",
            "Portaria 24h"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 127m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.7455203,
            "lng": -38.4779449
          }
        },
        {
          "endereco": "Rua José Cavalcante Sobrinho, 120 - Messejana, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 48,
          "valor_aluguel": 3900,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Ar-condicionado",
            "Área de serviço",
            "Playground"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 48m² em Messejana, Fortaleza",
          "coords": {
            "lat": -3.8364575,
            "lng": -38.4868426
          }
        },
        {
          "endereco": "Avenida Rui Barbosa, 2694 - Joaquim Tavora, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 2,
          "area": 35,
          "valor_aluguel": 1750,
          "url_imagem": "",
          "amenidades": [
            "Cozinha",
            "Praça"
          ],
          "descricao": "Kitnet com 1 Quarto para alugar, 35m² em Joaquim Tavora, Fortaleza",
          "coords": {
            "lat": -3.7459977,
            "lng": -38.5128437
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 128,
          "valor_aluguel": 2950,
          "url_imagem": "../assets/img/properties/ground1.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Avenida Trajano de Medeiros, 1970 - De Lourdes, Fortaleza - CE",
          "quartos": 5,
          "banheiros": 2,
          "vagas": 2,
          "area": 880,
          "valor_aluguel": 3050,
          "url_imagem": "../assets/img/properties/house3.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Varanda",
            ,
            "Ar-condicionado"
          ],
          "descricao": "Casa com 5 Quartos para alugar, 880m² em De Lourdes, Fortaleza",
          "coords": {
            "lat": -3.7360977,
            "lng": -38.462272
          }
        },
        {
          "endereco": "Rua A do Loteamento Residencial Célio Gurgel, 1697 - Barroso, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 42,
          "valor_aluguel": 2350,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Garagem"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 42m² em Barroso, Fortaleza",
          "coords": {
            "lat": -3.821732,
            "lng": -38.5817975
          }
        },
        {
          "endereco": "Rua João Cordeiro, 688 - Praia de Iracema, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 1,
          "area": 80,
          "valor_aluguel": 1050,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Área de serviço"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 80m² em Praia de Iracema, Fortaleza",
          "coords": {
            "lat": -3.7260995,
            "lng": -38.513464
          }
        },
        {
          "endereco": "Avenida Bernardo Manuel, 8600 - Itaperi, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 47,
          "valor_aluguel": 2300,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Condomínio fechado",
            "Cozinha"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 47m² em Itaperi, Fortaleza",
          "coords": {
            "lat": -3.794945999999999,
            "lng": -38.5505012
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": 2400,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Avenida Dom Manuel, 277 - Centro, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 60,
          "valor_aluguel": 3950,
          "url_imagem": "../assets/img/properties/house4.jpg",
          "amenidades": [],
          "descricao": "Casa com 2 Quartos para alugar, 60m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7266173,
            "lng": -38.5203919
          }
        },
        {
          "endereco": "Rua do Rosário, 119 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 70,
          "valor_aluguel": 2800,
          "url_imagem": "../assets/img/properties/storage3.jpg",
          "amenidades": [],
          "descricao": "Galpão/Depósito/Armazém para alugar, 70m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.728648,
            "lng": -38.5262544
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 31,
          "valor_aluguel": 800,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 5335 - Papicu, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 30,
          "valor_aluguel": 2350,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 30m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7407389,
            "lng": -38.48346919999999
          }
        },
        {
          "endereco": "Rua Monsenhor Bruno, 1153 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 35,
          "valor_aluguel": 2700,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 35m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7332159,
            "lng": -38.5094206
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 31,
          "valor_aluguel": 4150,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Rua Bento Albuquerque, 2158 - Cocó, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 126,
          "valor_aluguel": 4900,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Área de serviço",
            "Playground",
            "Quadra poliesportiva"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 126m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.7481744,
            "lng": -38.4703862
          }
        },
        {
          "endereco": "Avenida Recreio, 1870 - Lagoa Redonda, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 69,
          "valor_aluguel": 3550,
          "url_imagem": "../assets/img/properties/house1.jpg",
          "amenidades": [
            "Churrasqueira",
            "Condomínio fechado",
            ,
            "Área de serviço",
            "Cozinha"
          ],
          "descricao": "Casa de Condomínio com 2 Quartos para venda ou aluguel, 69m² em Lagoa Redonda, Fortaleza",
          "coords": {
            "lat": -3.8183481,
            "lng": -38.4507
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 128,
          "valor_aluguel": 1800,
          "url_imagem": "../assets/img/properties/ground2.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Avenida Engenheiro Alberto Sá - Papicu, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 25,
          "valor_aluguel": 2500,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 25m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7342568,
            "lng": -38.4769619
          }
        },
        {
          "endereco": "Rua Zuca Accioly, 1101 - Manoel Dias Branco, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 1,
          "area": 120,
          "valor_aluguel": 1950,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Condomínio fechado",
            "Varanda"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 120m² em Manoel Dias Branco, Fortaleza",
          "coords": {
            "lat": -3.754632999999999,
            "lng": -38.468151
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 42,
          "valor_aluguel": 1350,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 30,
          "valor_aluguel": 1450,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rua Doutor Gilberto Studart, 2155 - Papicu, Fortaleza - CE",
          "quartos": 4,
          "banheiros": 2,
          "vagas": 2,
          "area": 210,
          "valor_aluguel": 3700,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Varanda",
            "Cozinha",
            "Piscina",
            "Área de serviço"
          ],
          "descricao": "Apartamento com 4 Quartos para alugar, 210m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7472002,
            "lng": -38.4690189
          }
        },
        {
          "endereco": "Rua Monsenhor Dantas, 100 - Jacarecanga, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 65,
          "valor_aluguel": 5000,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda",
            "Academia"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 65m² em Jacarecanga, Fortaleza",
          "coords": {
            "lat": -3.719867,
            "lng": -38.5454539
          }
        },
        {
          "endereco": "Rua República do Líbano, 1330 - Varjota, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 1,
          "area": 107,
          "valor_aluguel": 2250,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Mobiliado",
            "Playground",
            "Varanda gourmet",
            "Salão de festas"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 107m² em Varjota, Fortaleza",
          "coords": {
            "lat": -3.733988999999999,
            "lng": -38.4878053
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 268,
          "valor_aluguel": 3750,
          "url_imagem": "../assets/img/properties/ground1.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rua José Cavalcante Sobrinho, 120 - Messejana, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 52,
          "valor_aluguel": 3150,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 2 Quartos para alugar, 52m² em Messejana, Fortaleza",
          "coords": {
            "lat": -3.8364575,
            "lng": -38.4868426
          }
        },
        {
          "endereco": "Avenida Professor Gomes de Matos, 661 B - Parreão, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 100,
          "valor_aluguel": 2500,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [
            "Copa",
            "Área de serviço"
          ],
          "descricao": "Ponto Comercial para alugar, 100m² em Parreão, Fortaleza",
          "coords": {
            "lat": -3.7592447,
            "lng": -38.5438087
          }
        },
        {
          "endereco": "Rua Francisco Glicério, 742 - Maraponga, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 2,
          "area": 30,
          "valor_aluguel": 1100,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 1 Quarto para alugar, 30m² em Maraponga, Fortaleza",
          "coords": {
            "lat": -3.7961716,
            "lng": -38.5680381
          }
        },
        {
          "endereco": "Dionísio Torres, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 95,
          "valor_aluguel": 1450,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 95m² em Dionísio Torres, Fortaleza",
          "coords": {
            "lat": -3.7493092,
            "lng": -38.5025502
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 2100 - Centro, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 2,
          "area": 30,
          "valor_aluguel": 4250,
          "url_imagem": "",
          "amenidades": [
            "Área de serviço"
          ],
          "descricao": "Kitnet com 1 Quarto para alugar, 30m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7405483,
            "lng": -38.53170009999999
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 6740 - Cocó, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 55,
          "valor_aluguel": 2350,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [
            "Condomínio fechado",
            "Elevador"
          ],
          "descricao": "Sala Comercial para venda ou aluguel, 55m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.744682199999999,
            "lng": -38.4730944
          }
        },
        {
          "endereco": "Parque Manibura, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 1,
          "area": 134,
          "valor_aluguel": 3050,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Cozinha",
            "Área de serviço",

          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 134m² em Parque Manibura, Fortaleza",
          "coords": {
            "lat": -3.7912376,
            "lng": -38.4877551
          }
        },
        {
          "endereco": "Rua Silva Jatahy, 600 - Meireles, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 58,
          "valor_aluguel": 2200,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Academia"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 58m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7275791,
            "lng": -38.4986979
          }
        },
        {
          "endereco": "Rua Franco Rocha, 477 - Henrique Jorge, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 1,
          "area": 45,
          "valor_aluguel": 2200,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Condomínio fechado",
            "Portão eletrônico",
            "Cozinha americana"
          ],
          "descricao": "Apartamento com 1 Quarto para alugar, 45m² em Henrique Jorge, Fortaleza",
          "coords": {
            "lat": -3.7547539,
            "lng": -38.58065089999999
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 1299 - Centro, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 53,
          "valor_aluguel": 4900,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 2 Quartos para alugar, 53m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.723799999999999,
            "lng": -38.53774
          }
        },
        {
          "endereco": "Avenida Padre Antônio Tomás, 2420 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": 1250,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [
            "Elevador"
          ],
          "descricao": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7433887,
            "lng": -38.4905038
          }
        },
        {
          "endereco": "Rua José Vilar, 2350 - Dionísio Torres, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 1,
          "area": 306,
          "valor_aluguel": 1300,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 3 Quartos para alugar, 306m² em Dionísio Torres, Fortaleza",
          "coords": {
            "lat": -3.7449555,
            "lng": -38.5077635
          }
        },
        {
          "endereco": "Rodovia BR-116, 5850 - Cajazeiras, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": 750,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 30m² em Cajazeiras, Fortaleza",
          "coords": {
            "lat": -3.7727805,
            "lng": -38.5166922
          }
        },
        {
          "endereco": "Rua Fiscal Vieira, 3575 - Joaquim Tavora, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 90,
          "valor_aluguel": 4500,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 90m² em Joaquim Tavora, Fortaleza",
          "coords": {
            "lat": -3.752580999999999,
            "lng": -38.5160321
          }
        },
        {
          "endereco": "Rua Paulo Firmeza, 685 - Tauape, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 180,
          "valor_aluguel": 3950,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 180m² em Tauape, Fortaleza",
          "coords": {
            "lat": -3.7570709,
            "lng": -38.5133484
          }
        },
        {
          "endereco": "Rua Padre Valdevino, 1138 - Joaquim Tavora, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": 1550,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [
            "Sistema de alarme"
          ],
          "descricao": "Ponto Comercial com 1 Quarto para alugar, 30m² em Joaquim Tavora, Fortaleza",
          "coords": {
            "lat": -3.7401053,
            "lng": -38.5141392
          }
        },
        {
          "endereco": "Rua Pastor Samuel Munguba, 1424 - Rodolfo Teófilo, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 120,
          "valor_aluguel": 3800,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 120m² em Rodolfo Teófilo, Fortaleza",
          "coords": {
            "lat": -3.7502822,
            "lng": -38.5519125
          }
        },
        {
          "endereco": "Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 27,
          "valor_aluguel": 3900,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para venda ou aluguel, 27m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7329688,
            "lng": -38.5264661
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1267 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 25,
          "valor_aluguel": 4000,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 25m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7313778,
            "lng": -38.5121337
          }
        },
        {
          "endereco": "Avenida Farias Brito, 160 - Varjota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 36,
          "valor_aluguel": 800,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 36m² em Varjota, Fortaleza",
          "coords": {
            "lat": -3.7360992,
            "lng": -38.4875178
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 300,
          "valor_aluguel": 3300,
          "url_imagem": "../assets/img/properties/ground3.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rua Gustavo Braga, 425 - Rodolfo Teófilo, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 52,
          "valor_aluguel": 1900,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 52m² em Rodolfo Teófilo, Fortaleza",
          "coords": {
            "lat": -3.7485862,
            "lng": -38.555394
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 5335 - Papicu, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": 3900,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 30m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7407389,
            "lng": -38.48346919999999
          }
        },
        {
          "endereco": "Avenida Antônio Sales, 1950 - Dionísio Torres, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 28,
          "valor_aluguel": 2550,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 28m² em Dionísio Torres, Fortaleza",
          "coords": {
            "lat": -3.7442774,
            "lng": -38.5070424
          }
        },
        {
          "endereco": "Avenida Senador Virgílio Távora, 1701 - Meireles, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 35,
          "valor_aluguel": 3650,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 35m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7403814,
            "lng": -38.4939797
          }
        },
        {
          "endereco": "Rua Crisanto Arruda, 752 - Passaré, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 48,
          "valor_aluguel": 1450,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Piscina",
            "Mobiliado",
            "Churrasqueira",
            "Elevador",
            "Academia"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 48m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.815880199999999,
            "lng": -38.5241305
          }
        },
        {
          "endereco": "Rua Pereira Filgueiras, 555 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 45,
          "valor_aluguel": 1900,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 45m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7266715,
            "lng": -38.5176522
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 60,
          "valor_aluguel": 3850,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 60m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Rua João Cordeiro, 1306 - Aldeota, Fortaleza - CE",
          "quartos": 7,
          "banheiros": 3,
          "vagas": 1,
          "area": 350,
          "valor_aluguel": 1950,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [
            "Área de serviço",
            "Estacionamento",
            "Escritório",
            "Depósito"
          ],
          "descricao": "Imóvel Comercial com 7 Quartos para alugar, 350m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7317344,
            "lng": -38.5152736
          }
        },
        {
          "endereco": "Avenida Professor Gomes de Matos, 625 - Montese, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 540,
          "valor_aluguel": 1400,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 540m² em Montese, Fortaleza",
          "coords": {
            "lat": -3.7590998,
            "lng": -38.5436821
          }
        },
        {
          "endereco": "Rua Alberto Magno, 243 - Montese, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 120,
          "valor_aluguel": 2200,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 120m² em Montese, Fortaleza",
          "coords": {
            "lat": -3.7585526,
            "lng": -38.5442034
          }
        },
        {
          "endereco": "Jangurussu, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 9,
          "valor_aluguel": 4100,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Ar-condicionado"
          ],
          "descricao": "Sala Comercial para alugar, 9m² em Jangurussu, Fortaleza",
          "coords": {
            "lat": -3.8476311,
            "lng": -38.5150619
          }
        },
        {
          "endereco": "Rua Mário Alencar Araripe, 1545 - Agua Fria, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 201,
          "valor_aluguel": 3350,
          "url_imagem": "../assets/img/properties/house1.jpg",
          "amenidades": [
            "Área de serviço",

          ],
          "descricao": "Casa com 3 Quartos para alugar, 201m² em Agua Fria, Fortaleza",
          "coords": {
            "lat": -3.802232899999999,
            "lng": -38.4775736
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 31,
          "valor_aluguel": 1500,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 30,
          "valor_aluguel": 1400,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Avenida Washington Soares, 1400 - Engenheiro Luciano Cavalcante, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 76,
          "valor_aluguel": 3550,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [
            "Cozinha",
            "Segurança 24h",
            "Jardim",
            "Vigia"
          ],
          "descricao": "Sala Comercial para alugar, 76m² em Engenheiro Luciano Cavalcante, Fortaleza",
          "coords": {
            "lat": -3.7712784,
            "lng": -38.4825694
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 30,
          "valor_aluguel": 1450,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Avenida Bezerra de Menezes, 1351 - Sao Gerardo, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 29,
          "valor_aluguel": 2950,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [
            "Serviços públicos essenciais",
            "Condomínio fechado"
          ],
          "descricao": "Sala Comercial para alugar, 29m² em Sao Gerardo, Fortaleza",
          "coords": {
            "lat": -3.7343863,
            "lng": -38.556772
          }
        },
        {
          "endereco": "Rua Visconde de Mauá, 1661 - Aldeota, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 95,
          "valor_aluguel": 700,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Varanda",
            "Área de serviço"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 95m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7414715,
            "lng": -38.5009113
          }
        },
        {
          "endereco": "Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 400,
          "valor_aluguel": 4800,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Interfone"
          ],
          "descricao": "Imóvel Comercial para venda ou aluguel, 400m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.740179299999999,
            "lng": -38.49966209999999
          }
        },
        {
          "endereco": "Rua Gonçalves Ledo, 177 - Praia de Iracema, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 27,
          "valor_aluguel": 950,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [
            "Cozinha"
          ],
          "descricao": "Ponto Comercial para alugar, 27m² em Praia de Iracema, Fortaleza",
          "coords": {
            "lat": -3.7254872,
            "lng": -38.5141632
          }
        },
        {
          "endereco": "Avenida Independência, 1546 - Vila Velha, Fortaleza - CE",
          "area": 412,
          "valor_aluguel": 4950,
          "url_imagem": "../assets/img/properties/ground1.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar, 412m² em Vila Velha, Fortaleza",
          "coords": {
            "lat": -3.725621899999999,
            "lng": -38.5944039
          }
        },
        {
          "endereco": "Rua Senador Pompeu, 649 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 23,
          "valor_aluguel": 2800,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Cozinha",
            "Segurança 24h",
            "Elevador",
            "Vigia"
          ],
          "descricao": "Sala Comercial para alugar, 23m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724452299999999,
            "lng": -38.5287254
          }
        },
        {
          "endereco": "Rua Capitão Olavo, 1093 - Aerolândia, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 2,
          "area": 48,
          "valor_aluguel": 3150,
          "url_imagem": "../assets/img/properties/house3.jpg",
          "amenidades": [
            "Cozinha",
            "Área de serviço",
            ,

          ],
          "descricao": "Casa com 1 Quarto para alugar, 48m² em Aerolândia, Fortaleza",
          "coords": {
            "lat": -3.7718236,
            "lng": -38.514652
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 42,
          "valor_aluguel": 3800,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": 1750,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rua Equador, 1198 - Parangaba, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 58,
          "valor_aluguel": 2100,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Academia",
            "Jardim",
            "Playground"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 58m² em Parangaba, Fortaleza",
          "coords": {
            "lat": -3.7780885,
            "lng": -38.5539582
          }
        },
        {
          "endereco": "Rua Capitão Américo Menezes, 277 - Parangaba, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 83,
          "valor_aluguel": 1150,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Varanda",
            "Garagem",
            "Cozinha",

          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 83m² em Parangaba, Fortaleza",
          "coords": {
            "lat": -3.7821133,
            "lng": -38.5678687
          }
        },
        {
          "endereco": "Rua Doutor Joaquim Bento, 207 - Messejana, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 840,
          "valor_aluguel": 2800,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 840m² em Messejana, Fortaleza",
          "coords": {
            "lat": -3.829112,
            "lng": -38.489654
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 38,
          "valor_aluguel": 4650,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 39,
          "valor_aluguel": 2800,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 39m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Desembargador Faustino de Albuquerque, 781 - Cidade dos Funcionários, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 65,
          "valor_aluguel": 3400,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 65m² em Cidade dos Funcionários, Fortaleza",
          "coords": {
            "lat": -3.786462499999999,
            "lng": -38.4994675
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 31,
          "valor_aluguel": 3100,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Avenida Dom Manuel, 277 - Centro, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 51,
          "valor_aluguel": 3250,
          "url_imagem": "../assets/img/properties/house4.jpg",
          "amenidades": [],
          "descricao": "Casa com 2 Quartos para alugar, 51m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7266173,
            "lng": -38.5203919
          }
        },
        {
          "endereco": "Rua Costa Sousa, 146 - Benfica, Fortaleza - CE",
          "area": 19,
          "valor_aluguel": 4000,
          "url_imagem": "../assets/img/properties/ground1.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar, 19m² em Benfica, Fortaleza",
          "coords": {
            "lat": -3.7440145,
            "lng": -38.5401311
          }
        },
        {
          "endereco": "Rua Monsenhor Bruno, 1153 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 35,
          "valor_aluguel": 1600,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 35m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7332159,
            "lng": -38.5094206
          }
        },
        {
          "endereco": "Rua Engenheiro Antônio Ferreira Antero, 160 - Parque Manibura, Fortaleza - CE",
          "quartos": 4,
          "banheiros": 3,
          "vagas": 1,
          "area": 220,
          "valor_aluguel": 2200,
          "url_imagem": "../assets/img/properties/house3.jpg",
          "amenidades": [],
          "descricao": "Casa com 4 Quartos para alugar, 220m² em Parque Manibura, Fortaleza",
          "coords": {
            "lat": -3.7887442,
            "lng": -38.4843307
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 42,
          "valor_aluguel": 2400,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 61,
          "valor_aluguel": 1950,
          "url_imagem": "../assets/img/properties/ground1.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": 900,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rua Vilebaldo Aguiar, 0 - Manoel Dias Branco, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 29,
          "valor_aluguel": 4400,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 29m² em Manoel Dias Branco, Fortaleza",
          "coords": {
            "lat": -3.7411057,
            "lng": -38.4861231
          }
        },
        {
          "endereco": "Avenida Senador Virgílio Távora, 1701 - Meireles, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 35,
          "valor_aluguel": 1250,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 35m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7403814,
            "lng": -38.4939797
          }
        },
        {
          "endereco": "Avenida Juscelino Kubitschek, 4950 - Passaré, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 48,
          "valor_aluguel": 2450,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Playground",
            "Área de serviço",
            "Piscina para adulto",
            "Churrasqueira",
            "Piscina"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 48m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.8202034,
            "lng": -38.5346914
          }
        },
        {
          "endereco": "Rua Senador Alencar, 1649 - Centro, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 2,
          "area": 40,
          "valor_aluguel": 2250,
          "url_imagem": "",
          "amenidades": [
            "Condomínio fechado",
            "Portão eletrônico",
            "Portaria 24h",

          ],
          "descricao": "Kitnet com 1 Quarto para alugar, 40m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7211643,
            "lng": -38.5402725
          }
        },
        {
          "endereco": "Parangaba, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 13,
          "valor_aluguel": 900,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 13m² em Parangaba, Fortaleza",
          "coords": {
            "lat": -3.7771358,
            "lng": -38.5620583
          }
        },
        {
          "endereco": "Avenida João Pessoa, 0 - Damas, Fortaleza - CE",
          "area": 2077,
          "valor_aluguel": 950,
          "url_imagem": "../assets/img/properties/ground3.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar, 2077m² em Damas, Fortaleza",
          "coords": {
            "lat": -3.7674607,
            "lng": -38.5598103
          }
        },
        {
          "endereco": "Rua A do Loteamento Residencial Célio Gurgel, 1697 - Barroso, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 42,
          "valor_aluguel": 650,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Garagem"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 42m² em Barroso, Fortaleza",
          "coords": {
            "lat": -3.821732,
            "lng": -38.5817975
          }
        },
        {
          "endereco": "Rua Afonso Pena, 99 - Edson Queiroz, Fortaleza - CE",
          "area": 1040,
          "valor_aluguel": 3250,
          "url_imagem": "../assets/img/properties/ground3.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar, 1040m² em Edson Queiroz, Fortaleza",
          "coords": {
            "lat": -3.791358899999999,
            "lng": -38.4629978
          }
        },
        {
          "endereco": "Rua do Pocinho, 30 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 37,
          "valor_aluguel": 1250,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 37m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282174,
            "lng": -38.5254514
          }
        },
        {
          "endereco": "Rua 08H, 201 - Prefeito José Walter, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 60,
          "valor_aluguel": 2450,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Garagem",
            "Playground",
            "Salão de festas"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 60m² em Prefeito José Walter, Fortaleza",
          "coords": {
            "lat": -3.8324922,
            "lng": -38.5529854
          }
        },
        {
          "endereco": "Rua Fiuza de Pontes, 191 - Centro, Fortaleza - CE",
          "quartos": 4,
          "banheiros": 2,
          "vagas": 2,
          "area": 284,
          "valor_aluguel": 1250,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Academia",
            "Jardim",
            "Área de serviço"
          ],
          "descricao": "Apartamento com 4 Quartos para alugar, 284m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7333401,
            "lng": -38.5172221
          }
        },
        {
          "endereco": "Avenida Professor Gomes de Matos, 648 - Bom Futuro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 25,
          "valor_aluguel": 2450,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 25m² em Bom Futuro, Fortaleza",
          "coords": {
            "lat": -3.7589887,
            "lng": -38.54405980000001
          }
        },
        {
          "endereco": "Rua Martinho Rodrigues, 510 - Fátima, Fortaleza - CE",
          "area": 547,
          "valor_aluguel": 1850,
          "url_imagem": "../assets/img/properties/ground1.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar, 547m² em Fátima, Fortaleza",
          "coords": {
            "lat": -3.7561814,
            "lng": -38.5282959
          }
        },
        {
          "endereco": "Rua 1010, 56 - Conjunto Ceará, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 80,
          "valor_aluguel": 2400,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Cozinha",
            "Área de serviço"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 80m² em Conjunto Ceará, Fortaleza",
          "coords": {
            "lat": -3.771626899999999,
            "lng": -38.61814
          }
        },
        {
          "endereco": "Rua Mário Mamede, 1214 - Fátima, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 100,
          "valor_aluguel": 3950,
          "url_imagem": "../assets/img/properties/house4.jpg",
          "amenidades": [
            ,
            "Garagem",
            "Perto de vias de acesso"
          ],
          "descricao": "Casa com 2 Quartos para alugar, 100m² em Fátima, Fortaleza",
          "coords": {
            "lat": -3.749909,
            "lng": -38.53058480000001
          }
        },
        {
          "endereco": "Avenida Doutor Silas Munguba, 728 - Itaperi, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 60,
          "valor_aluguel": 2850,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 2 Quartos para alugar, 60m² em Itaperi, Fortaleza",
          "coords": {
            "lat": -3.7804924,
            "lng": -38.5592508
          }
        },
        {
          "endereco": "Avenida da Saudade, 3251 - Passaré, Fortaleza - CE",
          "area": 5454,
          "valor_aluguel": 4500,
          "url_imagem": "../assets/img/properties/ground2.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar, 5454m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.8153585,
            "lng": -38.5354956
          }
        },
        {
          "endereco": "Rua Sabino Borges, 66 - Aerolândia, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 1,
          "area": 22,
          "valor_aluguel": 1900,
          "url_imagem": "",
          "amenidades": [],
          "descricao": "Kitnet com 1 Quarto para alugar, 22m² em Aerolândia, Fortaleza",
          "coords": {
            "lat": -3.7729528,
            "lng": -38.51698349999999
          }
        },
        {
          "endereco": "Avenida João Pessoa, 5233 - Damas, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 734,
          "valor_aluguel": 4300,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 734m² em Damas, Fortaleza",
          "coords": {
            "lat": -3.7574896,
            "lng": -38.5536394
          }
        },
        {
          "endereco": "Rua Amaro Cavalcante, 104 - Monte Castelo, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 100,
          "valor_aluguel": 5000,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 100m² em Monte Castelo, Fortaleza",
          "coords": {
            "lat": -3.7238635,
            "lng": -38.5543546
          }
        },
        {
          "endereco": "Avenida Dom Luís, 1233 - Meireles, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 31,
          "valor_aluguel": 3000,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [
            "Varanda"
          ],
          "descricao": "Sala Comercial para alugar, 31m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.735538,
            "lng": -38.4897752
          }
        },
        {
          "endereco": "Rua Napoleão Quezado, 201 - Parangaba, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 4094,
          "valor_aluguel": 2950,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Copa",
            "Ar-condicionado",
            "Mobiliado"
          ],
          "descricao": "Ponto Comercial para alugar, 4094m² em Parangaba, Fortaleza",
          "coords": {
            "lat": -3.7782511,
            "lng": -38.5663525
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 134,
          "valor_aluguel": 1300,
          "url_imagem": "../assets/img/properties/ground1.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rua da Assunção, 950 - Centro, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 2,
          "area": 53,
          "valor_aluguel": 1450,
          "url_imagem": "../assets/img/properties/house5.jpg",
          "amenidades": [],
          "descricao": "Casa com 1 Quarto para alugar, 53m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.738547,
            "lng": -38.5297596
          }
        },
        {
          "endereco": "Rua Eduardo Barros Leal, 80 - Sao Gerardo, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 113,
          "valor_aluguel": 4850,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Espaço gourmet"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 113m² em Sao Gerardo, Fortaleza",
          "coords": {
            "lat": -3.7347576,
            "lng": -38.5634227
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 241,
          "valor_aluguel": 700,
          "url_imagem": "../assets/img/properties/ground3.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Avenida Pontes Vieira, 2340 - Dionísio Torres, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 68,
          "valor_aluguel": 650,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 68m² em Dionísio Torres, Fortaleza",
          "coords": {
            "lat": -3.7513729,
            "lng": -38.5007311
          }
        },
        {
          "endereco": "Rua Domingos Olímpio, 96 - José Bonifácio, Fortaleza - CE",
          "area": 80,
          "valor_aluguel": 2900,
          "url_imagem": "../assets/img/properties/ground2.jpg",
          "amenidades": [
            "Frente para o oeste",
            "Rede de água e esgoto",
            "Rua asfaltada",
            "Plano",
            "Arenoso"
          ],
          "descricao": "Lote/Terreno para alugar, 80m² em José Bonifácio, Fortaleza",
          "coords": {
            "lat": -3.7384427,
            "lng": -38.5246545
          }
        },
        {
          "endereco": "Rua Tomás Lopes, 113 - Praia de Iracema, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 2,
          "area": 33,
          "valor_aluguel": 4150,
          "url_imagem": "",
          "amenidades": [],
          "descricao": "Kitnet com 1 Quarto para alugar, 33m² em Praia de Iracema, Fortaleza",
          "coords": {
            "lat": -3.7214121,
            "lng": -38.5155561
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 224,
          "valor_aluguel": 750,
          "url_imagem": "../assets/img/properties/ground3.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Avenida Mem de Sá, 383 - Messejana, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 280,
          "valor_aluguel": 3050,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 280m² em Messejana, Fortaleza",
          "coords": {
            "lat": -3.8256908,
            "lng": -38.4850026
          }
        },
        {
          "endereco": "Rua Dom Lustosa, 985 - Jangurussu, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 2,
          "area": 59,
          "valor_aluguel": 4000,
          "url_imagem": "../assets/img/properties/apartament1.jpg",
          "amenidades": [
            "Churrasqueira",
            "Garagem",
            "Ar-condicionado",
            "Playground"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 59m² em Jangurussu, Fortaleza",
          "coords": {
            "lat": -3.8478487,
            "lng": -38.5116161
          }
        },
        {
          "endereco": "Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 30,
          "valor_aluguel": 1900,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.740179299999999,
            "lng": -38.49966209999999
          }
        },
        {
          "endereco": "Rua Vilebaldo Aguiar, 0 - Manoel Dias Branco, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 29,
          "valor_aluguel": 1600,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 29m² em Manoel Dias Branco, Fortaleza",
          "coords": {
            "lat": -3.7411057,
            "lng": -38.4861231
          }
        },
        {
          "endereco": "Parangaba, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 15,
          "valor_aluguel": 3250,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 15m² em Parangaba, Fortaleza",
          "coords": {
            "lat": -3.7771358,
            "lng": -38.5620583
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 75,
          "valor_aluguel": 3650,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 75m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 42,
          "valor_aluguel": 2700,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 31,
          "valor_aluguel": 1550,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 1235 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": 2900,
          "url_imagem": "",
          "amenidades": [],
          "descricao": "Kitnet para alugar, 30m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7255337,
            "lng": -38.5381513
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 42,
          "valor_aluguel": 3200,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Alto da Balança, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 59,
          "valor_aluguel": 3750,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 59m² em Alto da Balança, Fortaleza",
          "coords": {
            "lat": -3.7653561,
            "lng": -38.5158958
          }
        },
        {
          "endereco": "Rua Álvaro de Alencar, 320 - Jacarecanga, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 40,
          "valor_aluguel": 3350,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 40m² em Jacarecanga, Fortaleza",
          "coords": {
            "lat": -3.7095402,
            "lng": -38.5566853
          }
        },
        {
          "endereco": "Via Paisagística do Loteamento Itaperussú, 06 - Itaperi, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 47,
          "valor_aluguel": 2500,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [
            "Garagem",
            "Área de serviço",
            "Playground",
            "Salão de festas"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 47m² em Itaperi, Fortaleza",
          "coords": {
            "lat": -3.796546799999999,
            "lng": -38.53682200000001
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 62,
          "valor_aluguel": 4200,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 62m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 38,
          "valor_aluguel": 4350,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Rua Álef de Souza Cavalcante, 1077 - Jangurussu, Fortaleza - CE",
          "area": 790,
          "valor_aluguel": 1450,
          "url_imagem": "../assets/img/properties/ground2.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar, 790m² em Jangurussu, Fortaleza",
          "coords": {
            "lat": -3.8299171,
            "lng": -38.5213888
          }
        },
        {
          "endereco": "Rua Luiza Guimarães, 709 - Lagoa Redonda, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 1,
          "area": 83,
          "valor_aluguel": 1150,
          "url_imagem": "../assets/img/properties/house3.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Varanda",

          ],
          "descricao": "Casa de Condomínio com 3 Quartos para alugar, 83m² em Lagoa Redonda, Fortaleza",
          "coords": {
            "lat": -3.833829499999999,
            "lng": -38.4625151
          }
        },
        {
          "endereco": "Rua Ana Bilhar, 987 - Meireles, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 1,
          "area": 77,
          "valor_aluguel": 1450,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Vigia",
            "Câmera de segurança"
          ],
          "descricao": "Sala Comercial com 1 Quarto para alugar, 77m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7309224,
            "lng": -38.4904205
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 42,
          "valor_aluguel": 2300,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Pedro Borges, 30 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 52,
          "valor_aluguel": 950,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [
            "Copa",
            "Ar-condicionado"
          ],
          "descricao": "Sala Comercial para alugar, 52m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.728075,
            "lng": -38.5260597
          }
        },
        {
          "endereco": "Rua Barão de Aratanha, 857 - Fátima, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 187,
          "valor_aluguel": 4550,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Cozinha",
            "Piscina",
            "Área de serviço",
            ,

          ],
          "descricao": "Imóvel Comercial com 3 Quartos para alugar, 187m² em Fátima, Fortaleza",
          "coords": {
            "lat": -3.7403946,
            "lng": -38.5287677
          }
        },
        {
          "endereco": "Rua Francisco Virgílio Filho, 10 - Edson Queiroz, Fortaleza - CE",
          "quartos": 4,
          "banheiros": 3,
          "vagas": 2,
          "area": 244,
          "valor_aluguel": 4400,
          "url_imagem": "../assets/img/properties/house3.jpg",
          "amenidades": [
            "Closet",
            "Varanda gourmet",
            "Área de serviço",
            ,

          ],
          "descricao": "Casa com 4 Quartos para alugar, 244m² em Edson Queiroz, Fortaleza",
          "coords": {
            "lat": -3.7827248,
            "lng": -38.4785309
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 127,
          "valor_aluguel": 1100,
          "url_imagem": "../assets/img/properties/ground3.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 187,
          "valor_aluguel": 3350,
          "url_imagem": "../assets/img/properties/ground3.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rua Barão do Rio Branco, 1071 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 33,
          "valor_aluguel": 3850,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 33m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7277511,
            "lng": -38.5283848
          }
        },
        {
          "endereco": "Travessa Contaneide, 12 - Edson Queiroz, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": 4950,
          "url_imagem": "../assets/img/properties/apartament3.jpg",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda"
          ],
          "descricao": "Apartamento com 1 Quarto para alugar, 30m² em Edson Queiroz, Fortaleza",
          "coords": {
            "lat": -3.775279499999999,
            "lng": -38.475562
          }
        },
        {
          "endereco": "Rua Romeu Aldigueri, 22 - Guararapes, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 216,
          "valor_aluguel": 1150,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 216m² em Guararapes, Fortaleza",
          "coords": {
            "lat": -3.7655248,
            "lng": -38.4888106
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 61,
          "valor_aluguel": 3900,
          "url_imagem": "../assets/img/properties/ground2.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Avenida Senador Virgílio Távora, 1701 - Meireles, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 35,
          "valor_aluguel": 2750,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 35m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7403814,
            "lng": -38.4939797
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 5753 - Papicu, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 45,
          "valor_aluguel": 1150,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 45m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7417295,
            "lng": -38.4801094
          }
        },
        {
          "endereco": "Travessa Ouvidor - Centro, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 1,
          "area": 22,
          "valor_aluguel": 4800,
          "url_imagem": "",
          "amenidades": [],
          "descricao": "Kitnet com 1 Quarto para alugar, 22m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7409446,
            "lng": -38.531908
          }
        },
        {
          "endereco": "Rua Vilebaldo Aguiar, 1151 - Cocó, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 1,
          "area": 71,
          "valor_aluguel": 3450,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [
            "Área de serviço",
            "Piscina para adulto",
            "Churrasqueira",
            "Piscina"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 71m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.7435432,
            "lng": -38.4779613
          }
        },
        {
          "endereco": "Rua Justino Café Neto, 240 - Guararapes, Fortaleza - CE",
          "banheiros": 3,
          "vagas": 2,
          "area": 76,
          "valor_aluguel": 2100,
          "url_imagem": "../assets/img/properties/apartament2.jpg",
          "amenidades": [],
          "descricao": null,
          "coords": {
            "lat": -3.7589949,
            "lng": -38.4893554
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 42,
          "valor_aluguel": 650,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 1235 - Centro, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 2,
          "vagas": 2,
          "area": 30,
          "valor_aluguel": 1400,
          "url_imagem": "",
          "amenidades": [],
          "descricao": "Kitnet com 1 Quarto para alugar, 30m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7255337,
            "lng": -38.5381513
          }
        },
        {
          "endereco": "Avenida Pontes Vieira, 2340 - Dionísio Torres, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 57,
          "valor_aluguel": 4000,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 57m² em Dionísio Torres, Fortaleza",
          "coords": {
            "lat": -3.7513729,
            "lng": -38.5007311
          }
        },
        {
          "endereco": "Rua Bárbara de Alencar, 1837 - Aldeota, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 20,
          "valor_aluguel": 4000,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Imóvel Comercial para alugar, 20m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7397229,
            "lng": -38.5084529
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 31,
          "valor_aluguel": 3200,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Avenida Aguanambi, 806 - Fátima, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 36,
          "valor_aluguel": 2550,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Garagem",
            "Cozinha"
          ],
          "descricao": "Ponto Comercial para alugar, 36m² em Fátima, Fortaleza",
          "coords": {
            "lat": -3.743739999999999,
            "lng": -38.5258
          }
        },
        {
          "endereco": "Rua Adélia Feijó, 884 - BOA VISTA, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 312,
          "valor_aluguel": 1850,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 312m² em BOA VISTA, Fortaleza",
          "coords": {
            "lat": -3.8062307,
            "lng": -38.5159271
          }
        },
        {
          "endereco": "Avenida Viena Weyne, 845 - Cambeba, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 23,
          "valor_aluguel": 4950,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 23m² em Cambeba, Fortaleza",
          "coords": {
            "lat": -3.8011169,
            "lng": -38.4870045
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "area": 8,
          "valor_aluguel": 3400,
          "url_imagem": "../assets/img/properties/ground2.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar, 8m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Rua 1068, 35 - Conjunto Ceara II, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 306,
          "valor_aluguel": 4500,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Prédio Comercial para alugar, 306m² em Conjunto Ceara II, Fortaleza",
          "coords": {
            "lat": -3.7671569,
            "lng": -38.6139157
          }
        },
        {
          "endereco": "Avenida Juscelino Kubitschek, 4950 - Passaré, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 60,
          "valor_aluguel": 3300,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Piscina",
            "Elevador",
            "Condomínio fechado",
            "Área de serviço",
            "Cozinha"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 60m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.8202034,
            "lng": -38.5346914
          }
        },
        {
          "endereco": "Rua Itapagé, 32 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 36,
          "valor_aluguel": 2900,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 36m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7312728,
            "lng": -38.5390134
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 39,
          "valor_aluguel": 1200,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 39m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 1235 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": 2250,
          "url_imagem": "",
          "amenidades": [],
          "descricao": "Kitnet para alugar, 30m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7255337,
            "lng": -38.5381513
          }
        },
        {
          "endereco": "Rua Professora Stella Cochrane, 341 - Passaré, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 45,
          "valor_aluguel": 1250,
          "url_imagem": "../assets/img/properties/apartament5.jpg",
          "amenidades": [],
          "descricao": "Apartamento com 2 Quartos para alugar, 45m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.7957662,
            "lng": -38.5367562
          }
        },
        {
          "endereco": "Rua Padre Pedro de Alencar, 632 - Messejana, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 42,
          "valor_aluguel": 850,
          "url_imagem": "../assets/img/properties/office1.jpg",
          "amenidades": [],
          "descricao": "Ponto Comercial para alugar, 42m² em Messejana, Fortaleza",
          "coords": {
            "lat": -3.8333816,
            "lng": -38.4942222
          }
        },
        {
          "endereco": "Avenida da Universidade, 3056 - Benfica, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": 1,
          "area": 57,
          "valor_aluguel": 1850,
          "url_imagem": "../assets/img/properties/apartament4.jpg",
          "amenidades": [
            "Piscina",
            "Elevador",
            "Condomínio fechado",
            "Área de serviço",
            "Quadra poliesportiva"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 57m² em Benfica, Fortaleza",
          "coords": {
            "lat": -3.7423986,
            "lng": -38.5410526
          }
        },
        {
          "endereco": "Rua Brigadeiro Haroldo Veloso, 568 - Sapiranga, Fortaleza - CE",
          "quartos": 5,
          "banheiros": 2,
          "vagas": 1,
          "area": 480,
          "valor_aluguel": 4750,
          "url_imagem": "../assets/img/properties/house4.jpg",
          "amenidades": [
            "Churrasqueira",
            ,
            "Área de serviço",
            "Escritório"
          ],
          "descricao": "Casa com 5 Quartos para alugar, 480m² em Sapiranga, Fortaleza",
          "coords": {
            "lat": -3.797762,
            "lng": -38.4637465
          }
        },
        {
          "endereco": "Rua Ernesto Pedro dos Santos, 421 - Jóquei Clube, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 397,
          "valor_aluguel": 2300,
          "url_imagem": "../assets/img/properties/storage3.jpg",
          "amenidades": [
            "Escritório"
          ],
          "descricao": "Galpão/Depósito/Armazém para alugar, 397m² em Jóquei Clube, Fortaleza",
          "coords": {
            "lat": -3.763381899999999,
            "lng": -38.5764956
          }
        },
        {
          "endereco": "Rua Paulo Firmeza, 1364 - Tauape, Fortaleza - CE",
          "area": 407,
          "valor_aluguel": 3600,
          "url_imagem": "../assets/img/properties/ground3.jpg",
          "amenidades": [],
          "descricao": "Lote/Terreno para alugar, 407m² em Tauape, Fortaleza",
          "coords": {
            "lat": -3.7568462,
            "lng": -38.5069106
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 39,
          "valor_aluguel": 2100,
          "url_imagem": "../assets/img/properties/office3.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 39m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua do Rosário, 77 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 85,
          "valor_aluguel": 650,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 85m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.728418999999999,
            "lng": -38.5262788
          }
        },
        {
          "endereco": "Rua Senador Pompeu, 649 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 23,
          "valor_aluguel": 2500,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [
            "Cozinha",
            "Segurança 24h",
            "Elevador",
            "Vigia"
          ],
          "descricao": "Sala Comercial para alugar, 23m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724452299999999,
            "lng": -38.5287254
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 1235 - Centro, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 2,
          "area": 30,
          "valor_aluguel": 1350,
          "url_imagem": "",
          "amenidades": [],
          "descricao": "Kitnet para alugar, 30m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7255337,
            "lng": -38.5381513
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 5554 - Cocó, Fortaleza - CE",
          "banheiros": 1,
          "vagas": 1,
          "area": 26,
          "valor_aluguel": 950,
          "url_imagem": "../assets/img/properties/office2.jpg",
          "amenidades": [],
          "descricao": "Sala Comercial para alugar, 26m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.7414838,
            "lng": -38.482827
          }
        }
      ],
      "status": "OK"
    };

    return of(dadosMock);;
  }
}
