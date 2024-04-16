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
          "address": "Rua (St) 3 - Parque Iracema, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 106,
          "rentValue": 1100,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Elevator",
            "Balcony",
            "Gym",
            "Playground",
            "Gourmet balcony"
          ],
          "description": "Apartamento com 3 Quartos para venda ou aluguel, 106m² em Parque Iracema, Fortaleza",
          "coordinates": {
            "lat": -3.802647,
            "lng": -38.4983268
          }
        },
        {
          "address": "Rua (St) Dom Quintino, 1328 - Pirambú, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 70,
          "rentValue": 4200,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [],
          "description": "Apartamento com 2 Quartos para alugar, 70m² em Pirambú, Fortaleza",
          "coordinates": {
            "lat": -3.7095435,
            "lng": -38.5603668
          }
        },
        {
          "address": "Rua (St) Murará, 101 - Paupina, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 57,
          "rentValue": 800,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Playground",
            "Party room"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 57m² em Paupina, Fortaleza",
          "coordinates": {
            "lat": -3.8439561,
            "lng": -38.4930956
          }
        },
        {
          "address": "Rua (St) Eduardo Garcia - Aldeota, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 65,
          "rentValue": 1050,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [],
          "description": "Apartamento com 2 Quartos para alugar, 65m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7397941,
            "lng": -38.4940919
          }
        },
        {
          "address": "Rua (St) Evaristo da Veiga, 140 - Parque Iracema, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 116,
          "rentValue": 1300,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [],
          "description": "Apartamento com 3 Quartos para alugar, 116m² em Parque Iracema, Fortaleza",
          "coordinates": {
            "lat": -3.807807899999999,
            "lng": -38.4955479
          }
        },
        {
          "address": "Rua (St) Eunice Weaver, 1425 - Sapiranga / Coité, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 66,
          "rentValue": 1550,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Balcony",
            "Pool",
            "Barbecue grill",
            "Party room"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 66m² em Sapiranga / Coité, Fortaleza",
          "coordinates": {
            "lat": -3.7935749,
            "lng": -38.4621247
          }
        },
        {
          "address": "Rua (St) Professor Otávio Lobo, 681 - Cocó, Fortaleza - CE",
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 105,
          "rentValue": 3000,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [],
          "description": "",
          "coordinates": {
            "lat": -3.7455114,
            "lng": -38.4793844
          }
        },
        {
          "address": "Rua (St) A do Loteamento Residencial Célio Gurgel, 227 - Barroso, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 42,
          "rentValue": 1100,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Garage"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 42m² em Barroso, Fortaleza",
          "coordinates": {
            "lat": -3.821732,
            "lng": -38.5817975
          }
        },
        {
          "address": "Rua (St) Barão de Aracati, 160 - Meireles, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 71,
          "rentValue": 1750,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Elevator",
            "Intercom",
            "Mobiliado",
            "Ocean view"
          ],
          "description": "Apartamento com 2 Quartos para venda ou aluguel, 71m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.723098899999999,
            "lng": -38.5091703
          }
        },
        {
          "address": "Rua (St) Melo César, 358 - Cidade dos Funcionários, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 180,
          "rentValue": 2250,
          "imageUrl": "assets/img/properties/house3.jpg",
          "amenities": [
            "Balcony",
            "Garage",
            "Laundry area"
          ],
          "description": "Casa com 2 Quartos para alugar, 180m² em Cidade dos Funcionários, Fortaleza",
          "coordinates": {
            "lat": -3.796779599999999,
            "lng": -38.5033927
          }
        },
        {
          "address": "Rua (St) Crisanto Arruda - Passaré, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 47,
          "rentValue": 4350,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Gated community"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 47m² em Passaré, Fortaleza",
          "coordinates": {
            "lat": -3.8138221,
            "lng": -38.523546
          }
        },
        {
          "address": "Rua (St) Antônio Candeia, 30 - Guajiru, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 50,
          "rentValue": 2050,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Balcony",
            "Garage",
            "Kitchen",
            "Garden"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 50m² em Guajiru, Fortaleza",
          "coordinates": {
            "lat": -3.8283112,
            "lng": -38.4804338
          }
        },
        {
          "address": "Avenida (Ave) Desembargador Moreira, 2120 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 49,
          "rentValue": 1200,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 49m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.743545,
            "lng": -38.500781
          }
        },
        {
          "address": "Rua (St) Coronel Chico Alves, 21 - Passaré, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 45,
          "rentValue": 3250,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Garage"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 45m² em Passaré, Fortaleza",
          "coordinates": {
            "lat": -3.8070699,
            "lng": -38.5263296
          }
        },
        {
          "address": "Rua (St) Afonso Celso, 423 - Aldeota, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 75,
          "rentValue": 2200,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Pool",
            "Mobiliado",
            "Barbecue grill",
            "Elevator",
            "Gated community"
          ],
          "description": "Apartamento com 2 Quartos para venda ou aluguel, 75m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7365079,
            "lng": -38.5079335
          }
        },
        {
          "address": "Parque Iracema, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 53,
          "rentValue": 1850,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Laundry area",
            "Gourmet balcony"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 53m² em Parque Iracema, Fortaleza",
          "coordinates": {
            "lat": -3.8055771,
            "lng": -38.49746
          }
        },
        {
          "address": "Rua (St) Amâncio Valente, 1555 - Cambeba, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 63,
          "rentValue": 4950,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Balcony"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 63m² em Cambeba, Fortaleza",
          "coordinates": {
            "lat": -3.8071692,
            "lng": -38.4839189
          }
        },
        {
          "address": "Rua (St) Joaquim Torres, 654 - Joaquim Tavora, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 302,
          "rentValue": 4350,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 302m² em Joaquim Tavora, Fortaleza",
          "coordinates": {
            "lat": -3.7420371,
            "lng": -38.5172212
          }
        },
        {
          "address": "Rua (St) Padre Constantino, 19 - Jacarecanga, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 48,
          "rentValue": 4850,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Pool",
            "Balcony",
            "Gym",
            "Garage"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 48m² em Jacarecanga, Fortaleza",
          "coordinates": {
            "lat": -3.7164706,
            "lng": -38.5458408
          }
        },
        {
          "address": "Rua (St) Tenente Roma, 5405 - Montese, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 88,
          "rentValue": 1500,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Playground",
            "Sports court",
            "Laundry area"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 88m² em Montese, Fortaleza",
          "coordinates": {
            "lat": -3.7675015,
            "lng": -38.5133246
          }
        },
        {
          "address": "Rua (St) Doutor Rodrigo Codes Sandoval, 250 - Mondubim, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 89,
          "rentValue": 3500,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Gated community"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 89m² em Mondubim, Fortaleza",
          "coordinates": {
            "lat": -3.8048948,
            "lng": -38.5716441
          }
        },
        {
          "address": "Rua (St) André Dall'Olio, 530 - Papicu, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 63,
          "rentValue": 2000,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Gated community",
            "Elevator",
            "Balcony",
            "Laundry area"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 63m² em Papicu, Fortaleza",
          "coordinates": {
            "lat": -3.7367417,
            "lng": -38.47969459999999
          }
        },
        {
          "address": "Avenida (Ave) da Abolição, 4792 - Mucuripe, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 63,
          "rentValue": 2200,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Mobiliado",
            "Elevator",
            "Gated community",
            "Balcony",
            "Gym"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 63m² em Mucuripe, Fortaleza",
          "coordinates": {
            "lat": -3.7222955,
            "lng": -38.47881160000001
          }
        },
        {
          "address": "Rua (St) Solon Pinheiro, 683 - José Bonifácio, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 11111,
          "rentValue": 3350,
          "imageUrl": "assets/img/properties/house2.jpg",
          "amenities": [],
          "description": "Casa com 3 Quartos para alugar, 11111m² em José Bonifácio, Fortaleza",
          "coordinates": {
            "lat": -3.7363739,
            "lng": -38.5282258
          }
        },
        {
          "address": "Sapiranga, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 160,
          "rentValue": 4000,
          "imageUrl": "assets/img/properties/house5.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Gated community",
            "Laundry area",
            "Kitchen"
          ],
          "description": "Casa de Condomínio com 3 Quartos para alugar, 160m² em Sapiranga, Fortaleza",
          "coordinates": {
            "lat": -3.7952935,
            "lng": -38.4757701
          }
        },
        {
          "address": "Rua (St) Henriqueta Galeno, 1040 - Cocó, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 98,
          "rentValue": 2800,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [],
          "description": "Apartamento com 3 Quartos para alugar, 98m² em Cocó, Fortaleza",
          "coordinates": {
            "lat": -3.748269799999999,
            "lng": -38.4903922
          }
        },
        {
          "address": "Rua (St) José Mário Mamede, 159 - Edson Queiroz, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 68,
          "rentValue": 3050,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Gated community",
            "Gym"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 68m² em Edson Queiroz, Fortaleza",
          "coordinates": {
            "lat": -3.7877911,
            "lng": -38.478111
          }
        },
        {
          "address": "Rua (St) Paulo Firmeza, 1608 - Tauape, Fortaleza - CE",
          "area": 407,
          "rentValue": 2450,
          "imageUrl": "assets/img/properties/ground3.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar, 407m² em Tauape, Fortaleza",
          "coordinates": {
            "lat": -3.7565734,
            "lng": -38.5049988
          }
        },
        {
          "address": "Avenida (Ave) Desembargador Moreira, 2800 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 30,
          "rentValue": 2900,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Gourmet balcony"
          ],
          "description": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7500892,
            "lng": -38.5031234
          }
        },
        {
          "address": "Avenida (Ave) Mister Hull, 4148 - Padre Andrade, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 35,
          "rentValue": 1850,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 35m² em Padre Andrade, Fortaleza",
          "coordinates": {
            "lat": -3.7377538,
            "lng": -38.5813294
          }
        },
        {
          "address": "Rua (St) Eduardo Novaes, 250 - Sapiranga, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 125,
          "rentValue": 950,
          "imageUrl": "assets/img/properties/house5.jpg",
          "amenities": [
            "Barbecue grill",
            "Gated community",
            "Kitchen",
            "Pool",
            "Laundry area"
          ],
          "description": "Casa de Condomínio com 3 Quartos para alugar, 125m² em Sapiranga, Fortaleza",
          "coordinates": {
            "lat": -3.800616,
            "lng": -38.4772786
          }
        },
        {
          "address": "Rua (St) Vicente Linhares, 521 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 34,
          "rentValue": 2650,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 34m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7420164,
            "lng": -38.4998565
          }
        },
        {
          "address": "Vila Três Américas, 1064 - Itaperi, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 95,
          "rentValue": 4400,
          "imageUrl": "assets/img/properties/house5.jpg",
          "amenities": [
            "Laundry area",
            "Built-in cabinet",
            "Intercom"
          ],
          "description": "Casa com 3 Quartos para alugar, 95m² em Itaperi, Fortaleza",
          "coordinates": {
            "lat": -3.787515,
            "lng": -38.5265098
          }
        },
        {
          "address": "Vila Três Américas, 114 - Maraponga, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 200,
          "rentValue": 1450,
          "imageUrl": "assets/img/properties/house1.jpg",
          "amenities": [
            "Kitchen",
            "Laundry area"
          ],
          "description": "Casa com 3 Quartos para venda ou aluguel, 200m² em Maraponga, Fortaleza",
          "coordinates": {
            "lat": -3.793095,
            "lng": -38.5659336
          }
        },
        {
          "address": "Avenida (Ave) Rui Barbosa, 595 - Meireles, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 372,
          "rentValue": 2150,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Cup",
            "Laundry area"
          ],
          "description": "Ponto Comercial para alugar, 372m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7282209,
            "lng": -38.5066921
          }
        },
        {
          "address": "Rua (St) Coronel Honório Vieira, 735 - Parque Manibura, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 67,
          "rentValue": 2350,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [],
          "description": "Apartamento com 2 Quartos para alugar, 67m² em Parque Manibura, Fortaleza",
          "coordinates": {
            "lat": -3.7901543,
            "lng": -38.4868539
          }
        },
        {
          "address": "Rua (St) Vicente Linhares, 521 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 33,
          "rentValue": 2350,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 33m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7420164,
            "lng": -38.4998565
          }
        },
        {
          "address": "Rua (St) Antonina do Norte, 194 - Sao Gerardo, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 80,
          "rentValue": 800,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Internet connection"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 80m² em Sao Gerardo, Fortaleza",
          "coordinates": {
            "lat": -3.730291,
            "lng": -38.5538035
          }
        },
        {
          "address": "Avenida (Ave) Viena Weyne, 510 - Cambeba, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 216,
          "rentValue": 3400,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 216m² em Cambeba, Fortaleza",
          "coordinates": {
            "lat": -3.801849,
            "lng": -38.489821
          }
        },
        {
          "address": "Rua (St) Pereira de Miranda - Papicu, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 70,
          "rentValue": 1650,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Gated community",
            "Gym"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 70m² em Papicu, Fortaleza",
          "coordinates": {
            "lat": -3.7411076,
            "lng": -38.4778514
          }
        },
        {
          "address": "Rua (St) Júlio Alcides, 320 - Maraponga, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 43,
          "rentValue": 1000,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Playground",
            "Laundry area",
            "Adult pool",
            "Barbecue grill",
            "Pool"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 43m² em Maraponga, Fortaleza",
          "coordinates": {
            "lat": -3.788962199999999,
            "lng": -38.5626947
          }
        },
        {
          "address": "Rua (St) Equador, 1198 - Parangaba, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 60,
          "rentValue": 1450,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Gated community"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 60m² em Parangaba, Fortaleza",
          "coordinates": {
            "lat": -3.7780885,
            "lng": -38.5539582
          }
        },
        {
          "address": "Rua (St) Desembargador Lauro Nogueira, 1267 - Papicu, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 157,
          "rentValue": 3050,
          "imageUrl": "assets/img/properties/house4.jpg",
          "amenities": [
            "Kitchen"
          ],
          "description": "Casa com 3 Quartos para alugar, 157m² em Papicu, Fortaleza",
          "coordinates": {
            "lat": -3.7410804,
            "lng": -38.4747965
          }
        },
        {
          "address": "Rua (St) das Laranjeiras, 455 - Lagoa Redonda, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 83,
          "rentValue": 750,
          "imageUrl": "assets/img/properties/house1.jpg",
          "amenities": [
            "Barbecue grill",
            "Gated community",
            "Air conditioning"
          ],
          "description": "Casa de Condomínio com 3 Quartos para alugar, 83m² em Lagoa Redonda, Fortaleza",
          "coordinates": {
            "lat": -3.8204159,
            "lng": -38.4497579
          }
        },
        {
          "address": "Rua (St) José Cavalcante Sobrinho, 120 - Messejana, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 63,
          "rentValue": 3900,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Laundry area",
            "Playground",
            "Sports court"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 63m² em Messejana, Fortaleza",
          "coordinates": {
            "lat": -3.8364575,
            "lng": -38.4868426
          }
        },
        {
          "address": "Rua (St) A Lot Messejana, 25 - Paupina, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 46,
          "rentValue": 1200,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [],
          "description": "Apartamento com 2 Quartos para alugar, 46m² em Paupina, Fortaleza",
          "coordinates": {
            "lat": -3.8445236,
            "lng": -38.4916609
          }
        },
        {
          "address": "Rua (St) das Laranjeiras, 455 - Lagoa Redonda, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 83,
          "rentValue": 2350,
          "imageUrl": "assets/img/properties/house4.jpg",
          "amenities": [
            "Barbecue grill",
            "Gated community",
            "Air conditioning"
          ],
          "description": "Casa de Condomínio com 3 Quartos para alugar, 83m² em Lagoa Redonda, Fortaleza",
          "coordinates": {
            "lat": -3.8204159,
            "lng": -38.4497579
          }
        },
        {
          "address": "Maraponga, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 45,
          "rentValue": 2750,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Laundry area"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 45m² em Maraponga, Fortaleza",
          "coordinates": {
            "lat": -3.793095,
            "lng": -38.5659336
          }
        },
        {
          "address": "Rua (St) Taquatiara, 100 - Messejana, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 55,
          "rentValue": 4850,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Gym",
            "Playground",
            "Party room"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 55m² em Messejana, Fortaleza",
          "coordinates": {
            "lat": -3.8303781,
            "lng": -38.5010523
          }
        },
        {
          "address": "Rua (St) Estrela do Norte, 208 - Álvaro Weyne, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 100,
          "rentValue": 2350,
          "imageUrl": "assets/img/properties/house3.jpg",
          "amenities": [
            "Kitchen",
            "Laundry area"
          ],
          "description": "Casa com 2 Quartos para alugar, 100m² em Álvaro Weyne, Fortaleza",
          "coordinates": {
            "lat": -3.7181368,
            "lng": -38.56470110000001
          }
        },
        {
          "address": "Rua (St) Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 38,
          "rentValue": 4700,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "address": "Rua (St) Farias Lemos, 800 - Parque Iracema, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 47,
          "rentValue": 750,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Barbecue grill",
            "Laundry area",
            "Playground",
            "Kitchen"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 47m² em Parque Iracema, Fortaleza",
          "coordinates": {
            "lat": -3.8138253,
            "lng": -38.4943965
          }
        },
        {
          "address": "Rua (St) Senador Pompeu, 649 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 2296,
          "rentValue": 650,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 2296m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724452299999999,
            "lng": -38.5287254
          }
        },
        {
          "address": "Rua (St) Raul Uchôa, 608 - Bom Futuro, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 156,
          "rentValue": 4600,
          "imageUrl": "assets/img/properties/house1.jpg",
          "amenities": [
            "Cup",
            "Gourmet balcony"
          ],
          "description": "Casa com 2 Quartos para alugar, 156m² em Bom Futuro, Fortaleza",
          "coordinates": {
            "lat": -3.7582357,
            "lng": -38.5480279
          }
        },
        {
          "address": "Antônio Bezerra, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 40,
          "rentValue": 1050,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Laundry",
            "Dining room",
            "Kitchen",
            "Garage"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 40m² em Antônio Bezerra, Fortaleza",
          "coordinates": {
            "lat": -3.740141199999999,
            "lng": -38.5946171
          }
        },
        {
          "address": "Avenida (Ave) Ministro José Américo, 150 - Parque Iracema, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 60,
          "rentValue": 3550,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Elevator",
            "Gated community",
            "Gym",
            "Garden"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 60m² em Parque Iracema, Fortaleza",
          "coordinates": {
            "lat": -3.8122656,
            "lng": -38.497466
          }
        },
        {
          "address": "Rua (St) Dom Sebastião Leme, 477 - Fátima, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 90,
          "rentValue": 1600,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [],
          "description": "Apartamento com 3 Quartos para alugar, 90m² em Fátima, Fortaleza",
          "coordinates": {
            "lat": -3.745701,
            "lng": -38.5261942
          }
        },
        {
          "address": "Rua (St) Barbosa de Freitas, 229 - Meireles, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 62,
          "rentValue": 4850,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Laundry area"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 62m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7295657,
            "lng": -38.4950252
          }
        },
        {
          "address": "Rua (St) Alcântara Bilhar, 4174 - Padre Andrade, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 35,
          "rentValue": 1800,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 35m² em Padre Andrade, Fortaleza",
          "coordinates": {
            "lat": -3.7370093,
            "lng": -38.5819121
          }
        },
        {
          "address": "Rua (St) João Sales, 1665 - Planalto Ayrton Senna, Fortaleza - CE",
          "area": 1241,
          "rentValue": 1800,
          "imageUrl": "assets/img/properties/ground2.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar, 1241m² em Planalto Ayrton Senna, Fortaleza",
          "coordinates": {
            "lat": -3.8283714,
            "lng": -38.5779207
          }
        },
        {
          "address": "Rua (St) A do Loteamento Residencial Célio Gurgel, 227 - Barroso, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 46,
          "rentValue": 4150,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Playground",
            "Laundry area",
            "Adult pool",
            "Barbecue grill",
            "Pool"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 46m² em Barroso, Fortaleza",
          "coordinates": {
            "lat": -3.821732,
            "lng": -38.5817975
          }
        },
        {
          "address": "Avenida (Ave) Antônio Sales, 1317 - Joaquim Tavora, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 35,
          "rentValue": 4150,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 35m² em Joaquim Tavora, Fortaleza",
          "coordinates": {
            "lat": -3.7424386,
            "lng": -38.5116182
          }
        },
        {
          "address": "Rua (St) Senador Pompeu, 2610 - José Bonifácio, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 50,
          "rentValue": 2650,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Pool",
            "Mobiliado",
            "Barbecue grill",
            "Elevator",
            "Gated community"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 50m² em José Bonifácio, Fortaleza",
          "coordinates": {
            "lat": -3.7409871,
            "lng": -38.5339556
          }
        },
        {
          "address": "Rua (St) Antônio Augusto, 2070 - Aldeota, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 111,
          "rentValue": 4450,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [],
          "description": "Apartamento com 3 Quartos para alugar, 111m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7385355,
            "lng": -38.5165029
          }
        },
        {
          "address": "Rua (St) Alfredo Mamede - Mondubim, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 60,
          "rentValue": 1150,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Air conditioning",
            "Kitchen",
            "Laundry area"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 60m² em Mondubim, Fortaleza",
          "coordinates": {
            "lat": -3.8104619,
            "lng": -38.5826668
          }
        },
        {
          "address": "Rua (St) Capitão Clóvis Maia, 177 - Alto da Balança, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 94,
          "rentValue": 600,
          "imageUrl": "assets/img/properties/house2.jpg",
          "amenities": [
            "Internet connection"
          ],
          "description": "Casa com 2 Quartos para alugar, 94m² em Alto da Balança, Fortaleza",
          "coordinates": {
            "lat": -3.7687042,
            "lng": -38.5157641
          }
        },
        {
          "address": "Rua (St) Chico Lemos, 689 - Cidade dos Funcionários, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 150,
          "rentValue": 3700,
          "imageUrl": "assets/img/properties/house3.jpg",
          "amenities": [],
          "description": "Casa com 2 Quartos para alugar, 150m² em Cidade dos Funcionários, Fortaleza",
          "coordinates": {
            "lat": -3.7943435,
            "lng": -38.4977026
          }
        },
        {
          "address": "Rua (St) I, 207 - Itaperi, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 70,
          "rentValue": 2650,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [],
          "description": "Apartamento com 2 Quartos para alugar, 70m² em Itaperi, Fortaleza",
          "coordinates": {
            "lat": -3.7989426,
            "lng": -38.5521626
          }
        },
        {
          "address": "Rua (St) Nunes Valente, 1880 - Meireles, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 95,
          "rentValue": 3800,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Gated community",
            "Balcony"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 95m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7406843,
            "lng": -38.505337
          }
        },
        {
          "address": "Rua (St) Frei Teobaldo, 701 - Álvaro Weyne, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 50,
          "rentValue": 4850,
          "imageUrl": "assets/img/properties/house5.jpg",
          "amenities": [
            "Kitchen",
            "Balcony"
          ],
          "description": "Casa com 1 Quarto para alugar, 50m² em Álvaro Weyne, Fortaleza",
          "coordinates": {
            "lat": -3.717385299999999,
            "lng": -38.5616214
          }
        },
        {
          "address": "Rua (St) Gonçalves Ledo, 30 - Praia de Iracema, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 36,
          "rentValue": 750,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 36m² em Praia de Iracema, Fortaleza",
          "coordinates": {
            "lat": -3.7237187,
            "lng": -38.51387769999999
          }
        },
        {
          "address": "Rua (St) Gomes Brasil, 340 - Parangaba, Fortaleza - CE",
          "area": 260,
          "rentValue": 4050,
          "imageUrl": "assets/img/properties/ground3.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar, 260m² em Parangaba, Fortaleza",
          "coordinates": {
            "lat": -3.7725383,
            "lng": -38.5682202
          }
        },
        {
          "address": "Rua (St) Doutor José Frota, 29 - Mucuripe, Fortaleza - CE",
          "area": 80,
          "rentValue": 4550,
          "imageUrl": "assets/img/properties/ground2.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar, 80m² em Mucuripe, Fortaleza",
          "coordinates": {
            "lat": -3.7268153,
            "lng": -38.4864193
          }
        },
        {
          "address": "Rua (St) Crisanto Arruda, 0 - Passaré, Fortaleza - CE",
          "area": 2000,
          "rentValue": 5000,
          "imageUrl": "assets/img/properties/ground3.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar, 2000m² em Passaré, Fortaleza",
          "coordinates": {
            "lat": -3.8094465,
            "lng": -38.5223847
          }
        },
        {
          "address": "Rua (St) Senador Pompeu, 2420 - Benfica, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 53,
          "rentValue": 1200,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Barbecue grill",
            "Elevator",
            "Gated community",
            "Balcony",
            "Gym"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 53m² em Benfica, Fortaleza",
          "coordinates": {
            "lat": -3.7397652,
            "lng": -38.5336579
          }
        },
        {
          "address": "Rua (St) Ary Barroso, 70 - Papicu, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 30,
          "rentValue": 650,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 30m² em Papicu, Fortaleza",
          "coordinates": {
            "lat": -3.7396641,
            "lng": -38.4727638
          }
        },
        {
          "address": "Rua (St) Crisanto Arruda, 752 - Passaré, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 47,
          "rentValue": 1900,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Barbecue grill",
            "Pool",
            "Sports court",
            "Party room"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 47m² em Passaré, Fortaleza",
          "coordinates": {
            "lat": -3.815880199999999,
            "lng": -38.5241305
          }
        },
        {
          "address": "Avenida (Ave) Senador Carlos Jereissati - Dias Macedo, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 200,
          "rentValue": 4950,
          "imageUrl": "assets/img/properties/storage1.jpg",
          "amenities": [
            "Gated community"
          ],
          "description": "Galpão para alugar, 200m² em Dias Macedo, Fortaleza",
          "coordinates": {
            "lat": -3.7832708,
            "lng": -38.5242645
          }
        },
        {
          "address": "Rua (St) Tomás Pompeu, 550 - Meireles, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 50,
          "rentValue": 4200,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Elevator",
            "Intercom",
            "Mobiliado"
          ],
          "description": "Apartamento com 1 Quarto para venda ou aluguel, 50m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7266296,
            "lng": -38.50377659999999
          }
        },
        {
          "address": "Rua (St) Vicente Leite, 1960 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 400,
          "rentValue": 3700,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [
            "Cup",
            "Laundry area"
          ],
          "description": "Ponto Comercial para alugar, 400m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7447198,
            "lng": -38.4977728
          }
        },
        {
          "address": "Avenida (Ave) Bernardo Manuel, 8600 - Itaperi, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 50,
          "rentValue": 1700,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Gated community",
            "Kitchen",
            "Intercom",
            "Laundry area"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 50m² em Itaperi, Fortaleza",
          "coordinates": {
            "lat": -3.794945999999999,
            "lng": -38.5505012
          }
        },
        {
          "address": "Rua (St) França, 1151 - Maraponga, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 100,
          "rentValue": 2100,
          "imageUrl": "assets/img/properties/house5.jpg",
          "amenities": [
            "Balcony",
            "Garage",
            "Kitchen",
            "Gourmet balcony"
          ],
          "description": "Casa com 3 Quartos para alugar, 100m² em Maraponga, Fortaleza",
          "coordinates": {
            "lat": -3.7938598,
            "lng": -38.5638725
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 6740 - Cocó, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 28,
          "rentValue": 3400,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Gourmet space",
            "Elevator",
            "Air conditioning",
            "Garden",
            "Tennis court"
          ],
          "description": "Sala Comercial para alugar, 28m² em Cocó, Fortaleza",
          "coordinates": {
            "lat": -3.744682199999999,
            "lng": -38.4730944
          }
        },
        {
          "address": "Rua (St) Osvaldo Cruz, 2133 - Dionísio Torres, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 300,
          "rentValue": 600,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 300m² em Dionísio Torres, Fortaleza",
          "coordinates": {
            "lat": -3.7440734,
            "lng": -38.5029206
          }
        },
        {
          "address": "Rua (St) Luiza Miranda Coelho, 1355 - Engenheiro Luciano Cavalcante, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 70,
          "rentValue": 3050,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Gated community",
            "Balcony"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 70m² em Engenheiro Luciano Cavalcante, Fortaleza",
          "coordinates": {
            "lat": -3.7753744,
            "lng": -38.4844584
          }
        },
        {
          "address": "Rua (St) Manuel Teixeira, 131 - JOSE DE ALENCAR, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 51,
          "rentValue": 3200,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Kitchen",
            "Laundry area"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 51m² em JOSE DE ALENCAR, Fortaleza",
          "coordinates": {
            "lat": -3.8157835,
            "lng": -38.4782644
          }
        },
        {
          "address": "Pedras, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 25,
          "rentValue": 1550,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [
            "Kitchen"
          ],
          "description": "Ponto Comercial para alugar, 25m² em Pedras, Fortaleza",
          "coordinates": {
            "lat": -3.873815,
            "lng": -38.5073967
          }
        },
        {
          "address": "Avenida (Ave) Pintor Antônio Bandeira, 4250 - Praia do Futuro II, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 80,
          "rentValue": 3100,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Party room",
            "24-hour security"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 80m² em Praia do Futuro II, Fortaleza",
          "coordinates": {
            "lat": -3.7503376,
            "lng": -38.4511247
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 33 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 38,
          "rentValue": 2900,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7279488,
            "lng": -38.5255179
          }
        },
        {
          "address": "Rua (St) Zózimo Barroso, 53 - Fátima, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 56,
          "rentValue": 2150,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [],
          "description": "Apartamento com 2 Quartos para alugar, 56m² em Fátima, Fortaleza",
          "coordinates": {
            "lat": -3.750779699999999,
            "lng": -38.52818070000001
          }
        },
        {
          "address": "Parque Dois Irmãos, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 43,
          "rentValue": 2350,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Gourmet balcony",
            "Sports court"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 43m² em Parque Dois Irmãos, Fortaleza",
          "coordinates": {
            "lat": -3.8089995,
            "lng": -38.5495815
          }
        },
        {
          "address": "Avenida (Ave) Engenheiro Leal Lima Verde, 1401 - JOSE DE ALENCAR, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 55,
          "rentValue": 1350,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 55m² em JOSE DE ALENCAR, Fortaleza",
          "coordinates": {
            "lat": -3.802248,
            "lng": -38.4748688
          }
        },
        {
          "address": "Rua (St) Coronel Jucá, 960 - Aldeota, Fortaleza - CE",
          "bedrooms": 4,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 200,
          "rentValue": 4150,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Pool",
            "Mobiliado",
            "Barbecue grill",
            "Gym",
            "Playground"
          ],
          "description": "Apartamento com 4 Quartos para alugar, 200m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.740460499999999,
            "lng": -38.4923081
          }
        },
        {
          "address": "Rua (St) Beatriz Segal, 0 - Barroso, Fortaleza - CE",
          "area": 396,
          "rentValue": 3950,
          "imageUrl": "assets/img/properties/ground2.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar, 396m² em Barroso, Fortaleza",
          "coordinates": {
            "lat": -3.7994272,
            "lng": -38.5086053
          }
        },
        {
          "address": "Avenida (Ave) Engenheiro Alberto Sá, 705 - Papicu, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 53,
          "rentValue": 4900,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Ponto Comercial com 2 Quartos para alugar, 53m² em Papicu, Fortaleza",
          "coordinates": {
            "lat": -3.7348957,
            "lng": -38.4741872
          }
        },
        {
          "address": "Rua (St) das Carnaúbas, 371 - Passaré, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 55,
          "rentValue": 2150,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Pool",
            "Mobiliado",
            "Barbecue grill",
            "Elevator",
            "Gated community"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 55m² em Passaré, Fortaleza",
          "coordinates": {
            "lat": -3.8076908,
            "lng": -38.5350887
          }
        },
        {
          "address": "Rua (St) Suíça, 320 - Maraponga, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 60,
          "rentValue": 2750,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Elevator",
            "Gated community",
            "Garden",
            "Laundry area"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 60m² em Maraponga, Fortaleza",
          "coordinates": {
            "lat": -3.7934327,
            "lng": -38.5728626
          }
        },
        {
          "address": "Rua (St) Princesa Isabel, 27 - Centro, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 60,
          "rentValue": 2300,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Gated community",
            "Electronic gate",
            "24-hour concierge",
            "American kitchen"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 60m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7213196,
            "lng": -38.5336779
          }
        },
        {
          "address": "Avenida (Ave) Rogaciano Leite, 900 - Salinas, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 112,
          "rentValue": 1050,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Laundry area"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 112m² em Salinas, Fortaleza",
          "coordinates": {
            "lat": -3.7647759,
            "lng": -38.4956173
          }
        },
        {
          "address": "Rua (St) General Sampaio, 1746 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 5493,
          "rentValue": 4200,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [
            "Cup"
          ],
          "description": "Prédio Comercial para alugar, 5493m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7335625,
            "lng": -38.5331861
          }
        },
        {
          "address": "Rua (St) Paulo Faustino, 181 - Engenheiro Luciano Cavalcante, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 75,
          "rentValue": 3350,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Laundry area"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 75m² em Engenheiro Luciano Cavalcante, Fortaleza",
          "coordinates": {
            "lat": -3.782945199999999,
            "lng": -38.4840272
          }
        },
        {
          "address": "Avenida (Ave) Washington Soares, 3663 - Edson Queiroz, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 30,
          "rentValue": 3250,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Garage",
            "Kitchen",
            "Elevator"
          ],
          "description": "Sala Comercial para alugar, 30m² em Edson Queiroz, Fortaleza",
          "coordinates": {
            "lat": -3.7881216,
            "lng": -38.4799297
          }
        },
        {
          "address": "Rua (St) Monsenhor Liberato, 1815 - Fátima, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 60,
          "rentValue": 3650,
          "imageUrl": "assets/img/properties/house1.jpg",
          "amenities": [
            "Laundry area",
            "Blindex box",
            "Intercom"
          ],
          "description": "Casa com 3 Quartos para alugar, 60m² em Fátima, Fortaleza",
          "coordinates": {
            "lat": -3.7496721,
            "lng": -38.5305471
          }
        },
        {
          "address": "Rua (St) Oliveira Filho, 1300 - Vicente Pinzon, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 53,
          "rentValue": 1850,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Elevator",
            "Pool",
            "Playground",
            "Party room",
            "24-hour security"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 53m² em Vicente Pinzon, Fortaleza",
          "coordinates": {
            "lat": -3.729226299999999,
            "lng": -38.4630062
          }
        },
        {
          "address": "Avenida (Ave) Juscelino Kubitschek, 4950 - Passaré, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 50,
          "rentValue": 2750,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Pool",
            "Gated community",
            "Gym",
            "Garden"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 50m² em Passaré, Fortaleza",
          "coordinates": {
            "lat": -3.8202034,
            "lng": -38.5346914
          }
        },
        {
          "address": "Centro, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 50,
          "rentValue": 3350,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Balcony",
            "Laundry area",
            "Kitchen cabinet",
            "Kitchen",
            "Intercom"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 50m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7329688,
            "lng": -38.5264661
          }
        },
        {
          "address": "Rua (St) Barão do Rio Branco, 1071 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 40,
          "rentValue": 3100,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Kitchen",
            "24-hour security",
            "Watchman"
          ],
          "description": "Sala Comercial para alugar, 40m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7277511,
            "lng": -38.5283848
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 304 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 30,
          "rentValue": 1350,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 30m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7291185,
            "lng": -38.5207227
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 33 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 34,
          "rentValue": 2650,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para venda ou aluguel, 34m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7279488,
            "lng": -38.5255179
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 6997 - Papicu, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 100,
          "rentValue": 750,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Elevator",
            "Gated community",
            "Garden",
            "Playground"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 100m² em Papicu, Fortaleza",
          "coordinates": {
            "lat": -3.7449705,
            "lng": -38.4701489
          }
        },
        {
          "address": "Rua (St) Visconde de Mauá, 530 - Meireles, Fortaleza - CE",
          "area": 8,
          "rentValue": 2950,
          "imageUrl": "assets/img/properties/ground1.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar, 8m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7305609,
            "lng": -38.49791
          }
        },
        {
          "address": "Rua (St) Waldery Uchôa - Benfica, Fortaleza - CE",
          "bedrooms": 4,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 120,
          "rentValue": 1000,
          "imageUrl": "assets/img/properties/house5.jpg",
          "amenities": [
            "Garage",
            "Kitchen"
          ],
          "description": "Casa com 4 Quartos para alugar, 120m² em Benfica, Fortaleza",
          "coordinates": {
            "lat": -3.7471849,
            "lng": -38.5417218
          }
        },
        {
          "address": "Avenida (Ave) Alberto Craveiro, 1240 - Dias Macedo, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 55,
          "rentValue": 1350,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Pool",
            "Party room",
            "Sports court",
            "Barbecue grill",
            "Playground"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 55m² em Dias Macedo, Fortaleza",
          "coordinates": {
            "lat": -3.7892032,
            "lng": -38.5177181
          }
        },
        {
          "address": "Avenida (Ave) da Abolição, 2950 - Meireles, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 45,
          "rentValue": 3600,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Gated community"
          ],
          "description": "Ponto Comercial para alugar, 45m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7273338,
            "lng": -38.4931173
          }
        },
        {
          "address": "Estrada de Ferro, 0 - Maraponga, Fortaleza - CE",
          "area": 1300,
          "rentValue": 3250,
          "imageUrl": "assets/img/properties/ground3.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar, 1300m² em Maraponga, Fortaleza",
          "coordinates": {
            "lat": -3.8209388,
            "lng": -38.5878606
          }
        },
        {
          "address": "Rua (St) Murará, 100 - Paupina, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 120,
          "rentValue": 4850,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Gated community",
            "Garden"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 120m² em Paupina, Fortaleza",
          "coordinates": {
            "lat": -3.844198,
            "lng": -38.493833
          }
        },
        {
          "address": "Rua (St) República do Líbano, 1200 - Varjota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 400,
          "rentValue": 2350,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Laundry area"
          ],
          "description": "Ponto Comercial para alugar, 400m² em Varjota, Fortaleza",
          "coordinates": {
            "lat": -3.7339583,
            "lng": -38.4889511
          }
        },
        {
          "address": "Avenida (Ave) Luciano Carneiro, 869 - Fátima, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 110,
          "rentValue": 4300,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Gated community",
            "Balcony",
            "Laundry area",
            "24-hour concierge"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 110m² em Fátima, Fortaleza",
          "coordinates": {
            "lat": -3.7557858,
            "lng": -38.5336375
          }
        },
        {
          "address": "Rua (St) Professor Jacinto Botelho, 75 - Guararapes, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 50,
          "rentValue": 950,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 50m² em Guararapes, Fortaleza",
          "coordinates": {
            "lat": -3.757879,
            "lng": -38.4905585
          }
        },
        {
          "address": "Rua (St) Carlos Vasconcelos, 617 - Meireles, Fortaleza - CE",
          "bedrooms": 4,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 225,
          "rentValue": 1600,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [],
          "description": "Apartamento com 4 Quartos para alugar, 225m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7277308,
            "lng": -38.508865
          }
        },
        {
          "address": "Rua (St) da Assunção, 944 - Centro, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 41,
          "rentValue": 4400,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [],
          "description": "Apartamento com 2 Quartos para alugar, 41m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7381767,
            "lng": -38.5301699
          }
        },
        {
          "address": "Rua (St) Paulo Mendes, 155 - Praia do Futuro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 98,
          "rentValue": 950,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 98m² em Praia do Futuro, Fortaleza",
          "coordinates": {
            "lat": -3.7492867,
            "lng": -38.44709840000001
          }
        },
        {
          "address": "Rua (St) Álvaro Bomilcar, 3873 - Tauape, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 80,
          "rentValue": 3350,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Balcony",
            "Garage",
            "Kitchen",
            "Intercom",
            "Laundry area"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 80m² em Tauape, Fortaleza",
          "coordinates": {
            "lat": -3.7586767,
            "lng": -38.5095168
          }
        },
        {
          "address": "Rua (St) H, 0 - Parque Dois Irmãos, Fortaleza - CE",
          "area": 438,
          "rentValue": 1250,
          "imageUrl": "assets/img/properties/ground3.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar, 438m² em Parque Dois Irmãos, Fortaleza",
          "coordinates": {
            "lat": -3.8010167,
            "lng": -38.5502464
          }
        },
        {
          "address": "Avenida (Ave) Américo Barreira, 909 - Demócrito Rocha, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 360,
          "rentValue": 2900,
          "imageUrl": "assets/img/properties/storage1.jpg",
          "amenities": [
            "Ramp",
            "Handicap access",
            "Parking lot",
            "Office"
          ],
          "description": "Galpão para alugar, 360m² em Demócrito Rocha, Fortaleza",
          "coordinates": {
            "lat": -3.763959,
            "lng": -38.56628200000001
          }
        },
        {
          "address": "Rua (St) Pereira Filgueiras, 149 - Centro, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 55,
          "rentValue": 2550,
          "imageUrl": "assets/img/properties/house5.jpg",
          "amenities": [],
          "description": "Casa com 1 Quarto para alugar, 55m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.72564,
            "lng": -38.521067
          }
        },
        {
          "address": "Avenida (Ave) da Abolição, 2021 - Meireles, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 144,
          "rentValue": 3500,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Air conditioning",
            "Laundry area",
            "Adult pool",
            "Pool"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 144m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7255013,
            "lng": -38.5004864
          }
        },
        {
          "address": "Rua (St) Azevedo Bolão, 1290 - Parquelândia, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 50,
          "rentValue": 900,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 50m² em Parquelândia, Fortaleza",
          "coordinates": {
            "lat": -3.736308,
            "lng": -38.555715
          }
        },
        {
          "address": "Rua (St) Andrade Furtado, 1179 - Cocó, Fortaleza - CE",
          "bedrooms": 4,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 178,
          "rentValue": 850,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Gym",
            "Gourmet space",
            "Air conditioning"
          ],
          "description": "Apartamento com 4 Quartos para alugar, 178m² em Cocó, Fortaleza",
          "coordinates": {
            "lat": -3.7459107,
            "lng": -38.4784905
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 30 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 40,
          "rentValue": 2400,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 40m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.728075,
            "lng": -38.5260597
          }
        },
        {
          "address": "Rua (St) 101 - Novo Mondubim, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 41,
          "rentValue": 1050,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Barbecue grill",
            "Intercom",
            "Sports court"
          ],
          "description": "Apartamento com 2 Quartos para venda ou aluguel, 41m² em Novo Mondubim, Fortaleza",
          "coordinates": {
            "lat": -3.8105478,
            "lng": -38.5886361
          }
        },
        {
          "address": "Rua (St) das Oiticicas, 111 - Passaré, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 47,
          "rentValue": 800,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Barbecue grill",
            "Pool"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 47m² em Passaré, Fortaleza",
          "coordinates": {
            "lat": -3.8049495,
            "lng": -38.5352584
          }
        },
        {
          "address": "Rua (St) Doutor Salustio de Pinho, 1 - Praia do Futuro II, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 200,
          "rentValue": 3000,
          "imageUrl": "assets/img/properties/house4.jpg",
          "amenities": [
            "Pool",
            "Gated community",
            "Balcony",
            "Garden"
          ],
          "description": "Casa de Condomínio com 3 Quartos para alugar, 200m² em Praia do Futuro II, Fortaleza",
          "coordinates": {
            "lat": -3.751626,
            "lng": -38.44677799999999
          }
        },
        {
          "address": "Rua (St) Senador Pompeu, 649 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 23,
          "rentValue": 3700,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Kitchen",
            "24-hour security",
            "Elevator",
            "Watchman"
          ],
          "description": "Sala Comercial para alugar, 23m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724452299999999,
            "lng": -38.5287254
          }
        },
        {
          "address": "Rua (St) do Parque, 333 - Cambeba, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 70,
          "rentValue": 2400,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Gated community"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 70m² em Cambeba, Fortaleza",
          "coordinates": {
            "lat": -3.8058571,
            "lng": -38.4813991
          }
        },
        {
          "address": "Antônio Bezerra, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 40,
          "rentValue": 4750,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Laundry",
            "Dining room",
            "Kitchen"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 40m² em Antônio Bezerra, Fortaleza",
          "coordinates": {
            "lat": -3.740141199999999,
            "lng": -38.5946171
          }
        },
        {
          "address": "Avenida (Ave) Dom Manuel, 259 - Centro, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 22,
          "rentValue": 4250,
          "imageUrl": "",
          "amenities": [],
          "description": "Kitnet com 1 Quarto para alugar, 22m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7264458,
            "lng": -38.5203816
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 20 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 75,
          "rentValue": 4750,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 75m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "address": "Rua (St) A do Loteamento Residencial Célio Gurgel, 227 - Barroso, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 42,
          "rentValue": 1200,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Garage"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 42m² em Barroso, Fortaleza",
          "coordinates": {
            "lat": -3.821732,
            "lng": -38.5817975
          }
        },
        {
          "address": "Rua (St) Mucambinho - Barroso, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 45,
          "rentValue": 3100,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Intercom"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 45m² em Barroso, Fortaleza",
          "coordinates": {
            "lat": -3.8283031,
            "lng": -38.5067122
          }
        },
        {
          "address": "Rua (St) C, 105 - Parque Dois Irmãos, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 44,
          "rentValue": 1000,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Garage",
            "Laundry area"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 44m² em Parque Dois Irmãos, Fortaleza",
          "coordinates": {
            "lat": -3.8151226,
            "lng": -38.5542233
          }
        },
        {
          "address": "Rua (St) Bento Albuquerque, 1555 - Cocó, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 118,
          "rentValue": 1200,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Elevator",
            "Gated community",
            "24-hour concierge",
            "Electronic gate"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 118m² em Cocó, Fortaleza",
          "coordinates": {
            "lat": -3.746066,
            "lng": -38.4753206
          }
        },
        {
          "address": "Alameda Maria Doralice, 209 - Cidade 2000, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 54,
          "rentValue": 3050,
          "imageUrl": "assets/img/properties/house5.jpg",
          "amenities": [
            "Cup",
            "Laundry area"
          ],
          "description": "Casa com 2 Quartos para alugar, 54m² em Cidade 2000, Fortaleza",
          "coordinates": {
            "lat": -3.750010999999999,
            "lng": -38.4696247
          }
        },
        {
          "address": "Rua (St) Guilherme Rocha, 459 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 44,
          "rentValue": 1350,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 44m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7264026,
            "lng": -38.5303294
          }
        },
        {
          "address": "Rua (St) Justiniano de Serpa, 268 - Farias Brito, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 60,
          "rentValue": 4500,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [],
          "description": "Apartamento com 2 Quartos para alugar, 60m² em Farias Brito, Fortaleza",
          "coordinates": {
            "lat": -3.7335104,
            "lng": -38.5424416
          }
        },
        {
          "address": "Avenida (Ave) da Saudade, 95 - Passaré, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 60,
          "rentValue": 1300,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Gated community",
            "Balcony",
            "Gym"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 60m² em Passaré, Fortaleza",
          "coordinates": {
            "lat": -3.8137683,
            "lng": -38.5313796
          }
        },
        {
          "address": "Rua (St) Padre Pedro de Alencar, 1662 - Messejana, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 60,
          "rentValue": 3750,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Intercom"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 60m² em Messejana, Fortaleza",
          "coordinates": {
            "lat": -3.8425132,
            "lng": -38.4946428
          }
        },
        {
          "address": "Rua (St) Doutor Salustio de Pinho, 1 - Praia do Futuro II, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 160,
          "rentValue": 4150,
          "imageUrl": "assets/img/properties/house3.jpg",
          "amenities": [
            "Pool",
            "Gated community",
            "Garden",
            "Laundry area",
            "24-hour concierge"
          ],
          "description": "Casa de Condomínio com 2 Quartos para alugar, 160m² em Praia do Futuro II, Fortaleza",
          "coordinates": {
            "lat": -3.751626,
            "lng": -38.44677799999999
          }
        },
        {
          "address": "Rua (St) Hil de Moraes, 12 - Guararapes, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 70,
          "rentValue": 4800,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Gated community",
            "Balcony"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 70m² em Guararapes, Fortaleza",
          "coordinates": {
            "lat": -3.7754212,
            "lng": -38.4780354
          }
        },
        {
          "address": "Rua (St) Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 76,
          "rentValue": 4100,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 76m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "address": "Rua (St) Pereira Filgueiras, 778 - Centro, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 142,
          "rentValue": 1050,
          "imageUrl": "assets/img/properties/house5.jpg",
          "amenities": [],
          "description": "Casa com 2 Quartos para alugar, 142m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7275622,
            "lng": -38.5157641
          }
        },
        {
          "address": "Rua (St) Alcântara Bilhar, 4174 Altos - Padre Andrade, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 35,
          "rentValue": 2850,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 35m² em Padre Andrade, Fortaleza",
          "coordinates": {
            "lat": -3.7370093,
            "lng": -38.5819121
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 20 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 75,
          "rentValue": 4900,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 75m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "address": "Rua (St) Zacarias Gondim, 54 - Montese, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 40,
          "rentValue": 3050,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Kitchen",
            "Gated community"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 40m² em Montese, Fortaleza",
          "coordinates": {
            "lat": -3.7634121,
            "lng": -38.5562277
          }
        },
        {
          "address": "Avenida (Ave) João Pessoa, 4693 - Damas, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 100,
          "rentValue": 1450,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Garage",
            "Kitchen",
            "Gated community"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 100m² em Damas, Fortaleza",
          "coordinates": {
            "lat": -3.7561965,
            "lng": -38.5517456
          }
        },
        {
          "address": "Rua (St) José Vilar, 267 - Meireles, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 65,
          "rentValue": 4800,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [],
          "description": "Apartamento com 2 Quartos para alugar, 65m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7269282,
            "lng": -38.5017384
          }
        },
        {
          "address": "Rua (St) 101 - Mondubim, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 43,
          "rentValue": 1700,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Intercom",
            "Sports court",
            "Alarm system"
          ],
          "description": "Apartamento com 2 Quartos para venda ou aluguel, 43m² em Mondubim, Fortaleza",
          "coordinates": {
            "lat": -3.8073942,
            "lng": -38.5856592
          }
        },
        {
          "address": "Avenida (Ave) da Saudade, 95 - Passaré, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 60,
          "rentValue": 4100,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Gated community",
            "Balcony",
            "Gym"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 60m² em Passaré, Fortaleza",
          "coordinates": {
            "lat": -3.8137683,
            "lng": -38.5313796
          }
        },
        {
          "address": "Rua (St) Senador Alencar, 632 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 40,
          "rentValue": 2600,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Kitchen"
          ],
          "description": "Sala Comercial para alugar, 40m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7236585,
            "lng": -38.5315161
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 42,
          "rentValue": 1550,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Avenida (Ave) Geógrafo Antônio Ribeiro Zaranza, 2598 - Cajazeiras, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 45,
          "rentValue": 3800,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Barbecue grill",
            "Playground",
            "Party room",
            "Internet connection"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 45m² em Cajazeiras, Fortaleza",
          "coordinates": {
            "lat": -3.8082689,
            "lng": -38.5132471
          }
        },
        {
          "address": "Rua (St) Edmundo Falcão, 1 - Antônio Diogo, Fortaleza - CE",
          "area": 825,
          "rentValue": 4600,
          "imageUrl": "assets/img/properties/ground1.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar, 825m² em Antônio Diogo, Fortaleza",
          "coordinates": {
            "lat": -3.7521079,
            "lng": -38.4553776
          }
        },
        {
          "address": "Rua (St) Pedro I, 233 - Centro, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 40,
          "rentValue": 1350,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Gated community",
            "24-hour concierge",
            "Intercom",
            "Big window",
            "Electronic gate"
          ],
          "description": "Apartamento com 1 Quarto para alugar, 40m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7318577,
            "lng": -38.526936
          }
        },
        {
          "address": "Rua (St) Manoel Monteiro, 685 - Cidade dos Funcionários, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 55,
          "rentValue": 2500,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Elevator",
            "Gated community",
            "Laundry area",
            "Perto de vias de acesso"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 55m² em Cidade dos Funcionários, Fortaleza",
          "coordinates": {
            "lat": -3.7927977,
            "lng": -38.49386810000001
          }
        },
        {
          "address": "Rua (St) Senador Pompeu, 649 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 23,
          "rentValue": 4250,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [
            "Kitchen",
            "24-hour security",
            "Elevator",
            "Watchman"
          ],
          "description": "Sala Comercial para alugar, 23m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724452299999999,
            "lng": -38.5287254
          }
        },
        {
          "address": "Rua (St) Senador Alencar, 1649 - Centro, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 40,
          "rentValue": 1650,
          "imageUrl": "",
          "amenities": [
            "Gated community",
            "Electronic gate",
            "24-hour concierge"
          ],
          "description": "Kitnet com 1 Quarto para alugar, 40m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7211643,
            "lng": -38.5402725
          }
        },
        {
          "address": "Rua (St) Hil de Moraes, 12 - Edson Queiroz, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 55,
          "rentValue": 1350,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Gated community",
            "Balcony"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 55m² em Edson Queiroz, Fortaleza",
          "coordinates": {
            "lat": -3.7754212,
            "lng": -38.4780354
          }
        },
        {
          "address": "Rua (St) Padre Guerra, 178 - Pici, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 150,
          "rentValue": 3600,
          "imageUrl": "assets/img/properties/house4.jpg",
          "amenities": [
            "Laundry area",
            "Intercom"
          ],
          "description": "Casa com 2 Quartos para alugar, 150m² em Pici, Fortaleza",
          "coordinates": {
            "lat": -3.7364791,
            "lng": -38.5454594
          }
        },
        {
          "address": "Rua (St) Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 31,
          "rentValue": 2850,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "address": "Rua (St) Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 34,
          "rentValue": 1350,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 34m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "address": "Avenida (Ave) Pedro Lazar, 830 - Cambeba, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 52,
          "rentValue": 700,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Gated community",
            "Balcony"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 52m² em Cambeba, Fortaleza",
          "coordinates": {
            "lat": -3.8032847,
            "lng": -38.4886881
          }
        },
        {
          "address": "Rua (St) do Pocinho, 33 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 34,
          "rentValue": 1100,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para venda ou aluguel, 34m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.728003,
            "lng": -38.52548
          }
        },
        {
          "address": "Rua (St) Vicente de Castro Filho, 1460 - Engenheiro Luciano Cavalcante, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 70,
          "rentValue": 700,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Elevator",
            "Gated community",
            "Laundry area",
            "24-hour concierge"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 70m² em Engenheiro Luciano Cavalcante, Fortaleza",
          "coordinates": {
            "lat": -3.779084299999999,
            "lng": -38.4838331
          }
        },
        {
          "address": "Rua (St) Emílio Sá, 560 - Jardim Cearense, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 65,
          "rentValue": 850,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Gated community",
            "Balcony"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 65m² em Jardim Cearense, Fortaleza",
          "coordinates": {
            "lat": -3.8032285,
            "lng": -38.5683344
          }
        },
        {
          "address": "Rua (St) Pereira Filgueiras, 2020 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 36,
          "rentValue": 3500,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 36m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.73106,
            "lng": -38.50461
          }
        },
        {
          "address": "Rua (St) Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 32,
          "rentValue": 4450,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 32m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "address": "Avenida (Ave) Mozart Pinheiro de Lucena, 3106 - Quintino Cunha, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 60,
          "rentValue": 3650,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [],
          "description": "Apartamento com 2 Quartos para alugar, 60m² em Quintino Cunha, Fortaleza",
          "coordinates": {
            "lat": -3.731846,
            "lng": -38.5996924
          }
        },
        {
          "address": "Rua (St) Doutor Edmilson Barros de Oliveira - Cocó, Fortaleza - CE",
          "area": 440,
          "rentValue": 600,
          "imageUrl": "assets/img/properties/ground2.jpg",
          "amenities": [],
          "description": "Lote/Terreno para venda ou aluguel, 440m² em Cocó, Fortaleza",
          "coordinates": {
            "lat": -3.7515363,
            "lng": -38.4940296
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 42,
          "rentValue": 1550,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 20 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 75,
          "rentValue": 2150,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 75m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "address": "Avenida (Ave) Desembargador Moreira, 1701 - Meireles, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 28,
          "rentValue": 1250,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Prédio Comercial para alugar, 28m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7411064,
            "lng": -38.4996512
          }
        },
        {
          "address": "Rua (St) Pedro Dantas, 415 - Dias Macedo, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 176,
          "rentValue": 2400,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 176m² em Dias Macedo, Fortaleza",
          "coordinates": {
            "lat": -3.7861273,
            "lng": -38.5212914
          }
        },
        {
          "address": "Rua (St) C, 91 - Passaré, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 45,
          "rentValue": 3700,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Gated community",
            "Gym"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 45m² em Passaré, Fortaleza",
          "coordinates": {
            "lat": -3.8017106,
            "lng": -38.5397131
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 42,
          "rentValue": 3900,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Rua (St) Carlos Vasconcelos, 889 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 35,
          "rentValue": 1900,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Kitchen"
          ],
          "description": "Sala Comercial para alugar, 35m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7299914,
            "lng": -38.5095862
          }
        },
        {
          "address": "Rua (St) Bento Albuquerque, 1555 - Cocó, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 120,
          "rentValue": 2400,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Elevator",
            "Gated community",
            "Garden",
            "Laundry area"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 120m² em Cocó, Fortaleza",
          "coordinates": {
            "lat": -3.746066,
            "lng": -38.4753206
          }
        },
        {
          "address": "Rua (St) Monsenhor Catão, 200 - Aldeota, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 96,
          "rentValue": 4350,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Elevator",
            "Gated community",
            "Balcony",
            "Gym"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 96m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7364652,
            "lng": -38.4899636
          }
        },
        {
          "address": "Rua (St) Dom Sebastião Leme, 477 - Fátima, Fortaleza - CE",
          "bedrooms": 4,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 90,
          "rentValue": 2000,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Balcony",
            "Garage",
            "Garden",
            "Playground"
          ],
          "description": "Apartamento com 4 Quartos para alugar, 90m² em Fátima, Fortaleza",
          "coordinates": {
            "lat": -3.745701,
            "lng": -38.5261942
          }
        },
        {
          "address": "Rua (St) João Gentil, 2964 - Granja Lisboa, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 85,
          "rentValue": 4950,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [
            "Internet connection"
          ],
          "description": "Ponto Comercial para alugar, 85m² em Granja Lisboa, Fortaleza",
          "coordinates": {
            "lat": -3.7911215,
            "lng": -38.6246533
          }
        },
        {
          "address": "Avenida (Ave) da Saudade, 95 - Passaré, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 60,
          "rentValue": 1000,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Gated community",
            "Balcony"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 60m² em Passaré, Fortaleza",
          "coordinates": {
            "lat": -3.8137683,
            "lng": -38.5313796
          }
        },
        {
          "address": "Rua (St) Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 38,
          "rentValue": 4450,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "address": "Rua (St) Padre Severiano, 90 - Messejana, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 62,
          "rentValue": 700,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Playground",
            "Air conditioning",
            "Laundry area",
            "Barbecue grill"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 62m² em Messejana, Fortaleza",
          "coordinates": {
            "lat": -3.8342701,
            "lng": -38.4916857
          }
        },
        {
          "address": "Rua (St) Barão do Rio Branco, 1071 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 27,
          "rentValue": 3000,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Elevator",
            "Intercom"
          ],
          "description": "Sala Comercial para alugar, 27m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7277511,
            "lng": -38.5283848
          }
        },
        {
          "address": "Avenida (Ave) Washington Soares, 1400 - Edson Queiroz, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 48,
          "rentValue": 1150,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 48m² em Edson Queiroz, Fortaleza",
          "coordinates": {
            "lat": -3.7712784,
            "lng": -38.4825694
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 42,
          "rentValue": 2150,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 42,
          "rentValue": 1650,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Rua (St) Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 38,
          "rentValue": 2750,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "address": "Rua (St) Bento Albuquerque, 1555 - Cocó, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 120,
          "rentValue": 3150,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Elevator",
            "Gated community",
            "Garden",
            "Laundry area"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 120m² em Cocó, Fortaleza",
          "coordinates": {
            "lat": -3.746066,
            "lng": -38.4753206
          }
        },
        {
          "address": "Rua (St) do Rosário, 77 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 60,
          "rentValue": 800,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 60m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.728418999999999,
            "lng": -38.5262788
          }
        },
        {
          "address": "Rua (St) Professor Solon Farias, Lt-07 - Sapiranga, Fortaleza - CE",
          "area": 1720,
          "rentValue": 2150,
          "imageUrl": "assets/img/properties/ground3.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar, 1720m² em Sapiranga, Fortaleza",
          "coordinates": {
            "lat": -3.7860838,
            "lng": -38.4774042
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 20 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 60,
          "rentValue": 2100,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 60m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "address": "Rua (St) Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 31,
          "rentValue": 1700,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 20 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 74,
          "rentValue": 2800,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 74m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "address": "Avenida (Ave) Senador Virgílio Távora, 1701 - Meireles, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 35,
          "rentValue": 1300,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 35m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7403814,
            "lng": -38.4939797
          }
        },
        {
          "address": "Rua (St) Floriano Peixoto, 402 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 578,
          "rentValue": 4500,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [
            "Cup"
          ],
          "description": "Ponto Comercial para alugar, 578m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7259726,
            "lng": -38.5268868
          }
        },
        {
          "address": "Rua (St) Maria Maia, 75 - Siqueira, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 45,
          "rentValue": 2000,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Gated community"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 45m² em Siqueira, Fortaleza",
          "coordinates": {
            "lat": -3.8105548,
            "lng": -38.6169552
          }
        },
        {
          "address": "Rua (St) Senador Alencar - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 26,
          "rentValue": 3450,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 26m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7229233,
            "lng": -38.5340305
          }
        },
        {
          "address": "Rua (St) Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 34,
          "rentValue": 2600,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 34m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 20 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 75,
          "rentValue": 1800,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 75m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "address": "Rua (St) A do Loteamento Residencial Célio Gurgel, 1697 - Barroso, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 42,
          "rentValue": 1650,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Garage"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 42m² em Barroso, Fortaleza",
          "coordinates": {
            "lat": -3.821732,
            "lng": -38.5817975
          }
        },
        {
          "address": "Avenida (Ave) Dom Luís, 1233 - Meireles, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 31,
          "rentValue": 4950,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [
            "Balcony"
          ],
          "description": "Sala Comercial para alugar, 31m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.735538,
            "lng": -38.4897752
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 33 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 35,
          "rentValue": 2300,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 35m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7279488,
            "lng": -38.5255179
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 30 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 52,
          "rentValue": 3550,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Kitchen"
          ],
          "description": "Sala Comercial para alugar, 52m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.728075,
            "lng": -38.5260597
          }
        },
        {
          "address": "Rua (St) Afrânio Peixoto, 288 - Parangaba, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 60,
          "rentValue": 1400,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [],
          "description": "Apartamento com 2 Quartos para alugar, 60m² em Parangaba, Fortaleza",
          "coordinates": {
            "lat": -3.7805487,
            "lng": -38.5724567
          }
        },
        {
          "address": "Rua (St) Três de Maio, 1140 - Bela Vista, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 75,
          "rentValue": 1550,
          "imageUrl": "assets/img/properties/house2.jpg",
          "amenities": [
            "Gourmet balcony"
          ],
          "description": "Casa com 2 Quartos para alugar, 75m² em Bela Vista, Fortaleza",
          "coordinates": {
            "lat": -3.7492958,
            "lng": -38.5640791
          }
        },
        {
          "address": "Rua (St) Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 31,
          "rentValue": 4750,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "address": "Avenida (Ave) Senador Virgílio Távora, 1701 - Meireles, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 35,
          "rentValue": 2450,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 35m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7403814,
            "lng": -38.4939797
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 42,
          "rentValue": 1950,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 20 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 89,
          "rentValue": 3400,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 89m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "address": "Rua (St) Senador Pompeu, 649 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 23,
          "rentValue": 4800,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [
            "Kitchen",
            "24-hour security",
            "Elevator",
            "Watchman"
          ],
          "description": "Sala Comercial para alugar, 23m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724452299999999,
            "lng": -38.5287254
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 20 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 89,
          "rentValue": 2100,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 89m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 6740 - Papicu, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 28,
          "rentValue": 2850,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 28m² em Papicu, Fortaleza",
          "coordinates": {
            "lat": -3.744682199999999,
            "lng": -38.4730944
          }
        },
        {
          "address": "Rodovia BR-116, 5850 - Cajazeiras, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 30,
          "rentValue": 2300,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 30m² em Cajazeiras, Fortaleza",
          "coordinates": {
            "lat": -3.7727805,
            "lng": -38.5166922
          }
        },
        {
          "address": "Avenida (Ave) da Saudade, 95 - Passaré, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 60,
          "rentValue": 1900,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Gated community",
            "Balcony"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 60m² em Passaré, Fortaleza",
          "coordinates": {
            "lat": -3.8137683,
            "lng": -38.5313796
          }
        },
        {
          "address": "Rua (St) Beatriz Segal, 0 - Barroso, Fortaleza - CE",
          "area": 495,
          "rentValue": 1700,
          "imageUrl": "assets/img/properties/ground1.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar, 495m² em Barroso, Fortaleza",
          "coordinates": {
            "lat": -3.7994272,
            "lng": -38.5086053
          }
        },
        {
          "address": "Rua (St) Nunes Valente, 2025 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 134,
          "rentValue": 4750,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 134m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7423873,
            "lng": -38.505871
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 5335 - Papicu, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 30,
          "rentValue": 2550,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 30m² em Papicu, Fortaleza",
          "coordinates": {
            "lat": -3.7407389,
            "lng": -38.48346919999999
          }
        },
        {
          "address": "Cidade dos Funcionários, Fortaleza - CE",
          "area": 225,
          "rentValue": 1950,
          "imageUrl": "assets/img/properties/ground2.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar, 225m² em Cidade dos Funcionários, Fortaleza",
          "coordinates": {
            "lat": -3.7971588,
            "lng": -38.4999808
          }
        },
        {
          "address": "Rua (St) Pedro Dantas, 413 - Dias Macedo, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 80,
          "rentValue": 3350,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 80m² em Dias Macedo, Fortaleza",
          "coordinates": {
            "lat": -3.7861367,
            "lng": -38.5212685
          }
        },
        {
          "address": "Rua (St) Dragão do Mar, 345 - Praia de Iracema, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 41,
          "rentValue": 3650,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Gated community",
            "Balcony"
          ],
          "description": "Apartamento com 1 Quarto para alugar, 41m² em Praia de Iracema, Fortaleza",
          "coordinates": {
            "lat": -3.7217218,
            "lng": -38.5177504
          }
        },
        {
          "address": "Rua (St) Barão do Rio Branco, 1071 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 27,
          "rentValue": 2550,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Elevator",
            "24-hour concierge"
          ],
          "description": "Sala Comercial para alugar, 27m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7277511,
            "lng": -38.5283848
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 42,
          "rentValue": 2550,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Rua (St) Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 31,
          "rentValue": 2800,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "address": "Rua (St) Perboyre e Silva, 114 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 47,
          "rentValue": 3400,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 47m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7290021,
            "lng": -38.527104
          }
        },
        {
          "address": "Rua (St) Paulo de Almeida Sanford, 145 - Edson Queiroz, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 171,
          "rentValue": 1100,
          "imageUrl": "assets/img/properties/house1.jpg",
          "amenities": [
            "Kitchen",
            "Laundry area"
          ],
          "description": "Casa com 3 Quartos para venda ou aluguel, 171m² em Edson Queiroz, Fortaleza",
          "coordinates": {
            "lat": -3.7877666,
            "lng": -38.4752562
          }
        },
        {
          "address": "Avenida (Ave) Dom Luís, 500 - Meireles, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 76,
          "rentValue": 1400,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "",
          "coordinates": {
            "lat": -3.7356097,
            "lng": -38.4909979
          }
        },
        {
          "address": "Rua (St) Alberto Magno, 1374 - Montese, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 30,
          "rentValue": 3850,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 30m² em Montese, Fortaleza",
          "coordinates": {
            "lat": -3.7660701,
            "lng": -38.5511422
          }
        },
        {
          "address": "Rua (St) Major Facundo, 1680 - Fátima, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 80,
          "rentValue": 4400,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 80m² em Fátima, Fortaleza",
          "coordinates": {
            "lat": -3.7375185,
            "lng": -38.5312369
          }
        },
        {
          "address": "Rua (St) Pascoal de Castro Alves, 500 - Papicu, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 230,
          "rentValue": 4100,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Imóvel Comercial com 3 Quartos para alugar, 230m² em Papicu, Fortaleza",
          "coordinates": {
            "lat": -3.7327933,
            "lng": -38.4774281
          }
        },
        {
          "address": "Rua (St) Brigadeiro Haroldo Veloso, 568 - Sapiranga, Fortaleza - CE",
          "bedrooms": 5,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 480,
          "rentValue": 2350,
          "imageUrl": "assets/img/properties/house5.jpg",
          "amenities": [
            "Barbecue grill",
            "Laundry area",
            "Office"
          ],
          "description": "Casa com 5 Quartos para alugar, 480m² em Sapiranga, Fortaleza",
          "coordinates": {
            "lat": -3.797762,
            "lng": -38.4637465
          }
        },
        {
          "address": "Rodovia BR-116, 5850 - Cajazeiras, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 30,
          "rentValue": 2250,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 30m² em Cajazeiras, Fortaleza",
          "coordinates": {
            "lat": -3.7727805,
            "lng": -38.5166922
          }
        },
        {
          "address": "Rua (St) Vilebaldo Aguiar, 1151 - Cocó, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 71,
          "rentValue": 2700,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Laundry area",
            "Adult pool",
            "Barbecue grill",
            "Pool"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 71m² em Cocó, Fortaleza",
          "coordinates": {
            "lat": -3.7435432,
            "lng": -38.4779613
          }
        },
        {
          "address": "Avenida (Ave) Presidente Artur Bernardes, 3470 - JOSE DE ALENCAR, Fortaleza - CE",
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 4066,
          "rentValue": 2050,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Prédio Comercial com 40 Quartos para alugar, 4066m² em JOSE DE ALENCAR, Fortaleza",
          "coordinates": {
            "lat": -3.8089627,
            "lng": -38.4704225
          }
        },
        {
          "address": "Avenida (Ave) Senador Virgílio Távora, 1701 - Meireles, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 35,
          "rentValue": 1200,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 35m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7403814,
            "lng": -38.4939797
          }
        },
        {
          "address": "Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 27,
          "rentValue": 4950,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para venda ou aluguel, 27m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7329688,
            "lng": -38.5264661
          }
        },
        {
          "address": "Avenida (Ave) Ministro Albuquerque Lima, 894 - Conjunto Ceará, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 30,
          "rentValue": 600,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 30m² em Conjunto Ceará, Fortaleza",
          "coordinates": {
            "lat": -3.7708043,
            "lng": -38.6048985
          }
        },
        {
          "address": "Rua (St) Benjamim Brasil, 626 - Jardim Cearense, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 100,
          "rentValue": 4450,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [
            "Cup"
          ],
          "description": "Ponto Comercial para alugar, 100m² em Jardim Cearense, Fortaleza",
          "coordinates": {
            "lat": -3.8049738,
            "lng": -38.5671828
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 5335 - Papicu, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 30,
          "rentValue": 3550,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 30m² em Papicu, Fortaleza",
          "coordinates": {
            "lat": -3.7407389,
            "lng": -38.48346919999999
          }
        },
        {
          "address": "Rua (St) Pereira Filgueiras - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 36,
          "rentValue": 4250,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Elevator",
            "Alarm system"
          ],
          "description": "Sala Comercial para alugar, 36m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7271875,
            "lng": -38.5165491
          }
        },
        {
          "address": "Rua (St) Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 76,
          "rentValue": 3750,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 76m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "address": "Rua (St) Senador Pompeu, 649 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 23,
          "rentValue": 4850,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [
            "Kitchen",
            "24-hour security",
            "Elevator",
            "Watchman"
          ],
          "description": "Sala Comercial para alugar, 23m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724452299999999,
            "lng": -38.5287254
          }
        },
        {
          "address": "Edson Queiroz, Fortaleza - CE",
          "area": 1440,
          "rentValue": 4150,
          "imageUrl": "assets/img/properties/ground2.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar, 1440m² em Edson Queiroz, Fortaleza",
          "coordinates": {
            "lat": -3.7708535,
            "lng": -38.4746411
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 203,
          "rentValue": 4650,
          "imageUrl": "assets/img/properties/ground2.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "address": "Rua (St) Doutor Atualpa Barbosa Lima, 145 - Praia de Iracema, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 100,
          "rentValue": 4400,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Elevator",
            "Balcony",
            "Garage",
            "Garden"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 100m² em Praia de Iracema, Fortaleza",
          "coordinates": {
            "lat": -3.7232051,
            "lng": -38.5136444
          }
        },
        {
          "address": "Rua (St) Genipo Fernandes, 15 - Quintino Cunha, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 60,
          "rentValue": 1100,
          "imageUrl": "assets/img/properties/house3.jpg",
          "amenities": [],
          "description": "Casa com 2 Quartos para alugar, 60m² em Quintino Cunha, Fortaleza",
          "coordinates": {
            "lat": -3.7293547,
            "lng": -38.6030528
          }
        },
        {
          "address": "Rua (St) Afonso Celso, 423 - Aldeota, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 80,
          "rentValue": 3500,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Gated community",
            "Balcony"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 80m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7365079,
            "lng": -38.5079335
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 30 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 52,
          "rentValue": 4950,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Kitchen"
          ],
          "description": "Sala Comercial para alugar, 52m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.728075,
            "lng": -38.5260597
          }
        },
        {
          "address": "Travessa Armando Oliveira, 14 - Parquelândia, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 40,
          "rentValue": 1100,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Kitchen",
            "Laundry area"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 40m² em Parquelândia, Fortaleza",
          "coordinates": {
            "lat": -3.7367765,
            "lng": -38.5670222
          }
        },
        {
          "address": "Rua (St) Raimundo Oliveira Filho, 659 - Papicu, Fortaleza - CE",
          "area": 1100,
          "rentValue": 2900,
          "imageUrl": "assets/img/properties/ground3.jpg",
          "amenities": [
            "East-facing",
            "South-facing",
            "Sandy",
            "Plain",
            "Rua (St) asfaltada"
          ],
          "description": "Lote/Terreno para alugar, 1100m² em Papicu, Fortaleza",
          "coordinates": {
            "lat": -3.737842399999999,
            "lng": -38.4792223
          }
        },
        {
          "address": "Avenida (Ave) Gurgel do Amaral, 1250 - Coaçu, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 21,
          "rentValue": 4750,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 21m² em Coaçu, Fortaleza",
          "coordinates": {
            "lat": -3.8363856,
            "lng": -38.4851693
          }
        },
        {
          "address": "Rua (St) Maria Alice, SN - Engenheiro Luciano Cavalcante, Fortaleza - CE",
          "area": 841,
          "rentValue": 2950,
          "imageUrl": "assets/img/properties/ground2.jpg",
          "amenities": [
            "Desnível para frente (Rua (St))",
            "Plain",
            "Rua (St) asfaltada"
          ],
          "description": "Lote/Terreno para alugar, 841m² em Engenheiro Luciano Cavalcante, Fortaleza",
          "coordinates": {
            "lat": -3.7740998,
            "lng": -38.491673
          }
        },
        {
          "address": "Avenida (Ave) da Saudade, 95 - Passaré, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 60,
          "rentValue": 3700,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Gated community",
            "Balcony",
            "Gym"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 60m² em Passaré, Fortaleza",
          "coordinates": {
            "lat": -3.8137683,
            "lng": -38.5313796
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 39,
          "rentValue": 2200,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 39m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 42,
          "rentValue": 2500,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 42,
          "rentValue": 2900,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Avenida (Ave) Duque de Caxias, 823 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 36,
          "rentValue": 3100,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Security circuit",
            "Elevator"
          ],
          "description": "Sala Comercial para alugar, 36m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7313072,
            "lng": -38.5317182
          }
        },
        {
          "address": "Rua (St) José Napoleão, 200 - Meireles, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 61,
          "rentValue": 1700,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Air conditioning",
            "Laundry area",
            "Barbecue grill"
          ],
          "description": "Apartamento com 1 Quarto para alugar, 61m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7271861,
            "lng": -38.4904303
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 42,
          "rentValue": 2650,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Avenida (Ave) Mister Hull, 3522 - Presidente Kennedy, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 55,
          "rentValue": 600,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 55m² em Presidente Kennedy, Fortaleza",
          "coordinates": {
            "lat": -3.7370827,
            "lng": -38.5760548
          }
        },
        {
          "address": "Rua (St) Maximino, 237 - JOSE DE ALENCAR, Fortaleza - CE",
          "area": 720,
          "rentValue": 3550,
          "imageUrl": "assets/img/properties/ground2.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar, 720m² em JOSE DE ALENCAR, Fortaleza",
          "coordinates": {
            "lat": -3.8096866,
            "lng": -38.465966
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 20 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 60,
          "rentValue": 4050,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 60m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "address": "Rua (St) do Pocinho, 20 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 74,
          "rentValue": 750,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 74m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7282036,
            "lng": -38.5253929
          }
        },
        {
          "address": "Pedras, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 15,
          "rentValue": 3450,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [
            "Kitchen"
          ],
          "description": "Ponto Comercial para alugar, 15m² em Pedras, Fortaleza",
          "coordinates": {
            "lat": -3.873815,
            "lng": -38.5073967
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1267 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 25,
          "rentValue": 1050,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [
            "Mobiliado"
          ],
          "description": "Sala Comercial para alugar, 25m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7313778,
            "lng": -38.5121337
          }
        },
        {
          "address": "Rua (St) Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 38,
          "rentValue": 850,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "address": "Rua (St) Barão de Aracati, 145 - Meireles, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 56,
          "rentValue": 4750,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Pool",
            "Mobiliado",
            "Elevator",
            "Gated community",
            "Gym"
          ],
          "description": "Apartamento com 2 Quartos para venda ou aluguel, 56m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7233292,
            "lng": -38.5087503
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 5335 - Papicu, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 30,
          "rentValue": 3150,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 30m² em Papicu, Fortaleza",
          "coordinates": {
            "lat": -3.7407389,
            "lng": -38.48346919999999
          }
        },
        {
          "address": "Rua (St) A do Loteamento Residencial Célio Gurgel, 227 - Barroso, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 45,
          "rentValue": 900,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Playground",
            "Laundry area",
            "Adult pool",
            "Barbecue grill",
            "Pool"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 45m² em Barroso, Fortaleza",
          "coordinates": {
            "lat": -3.821732,
            "lng": -38.5817975
          }
        },
        {
          "address": "Rua (St) Leonardo Mota, 400 - Meireles, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 167,
          "rentValue": 3950,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [],
          "description": "Apartamento com 3 Quartos para alugar, 167m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7303397,
            "lng": -38.4944757
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 33 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 30,
          "rentValue": 2850,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 30m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7279488,
            "lng": -38.5255179
          }
        },
        {
          "address": "Rua (St) Barão de Aracati, 160 - Meireles, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 64,
          "rentValue": 1650,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Elevator",
            "Gated community",
            "Air conditioning",
            "Garden"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 64m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.723098899999999,
            "lng": -38.5091703
          }
        },
        {
          "address": "Avenida (Ave) Padre Antônio Tomás, 2420 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 30,
          "rentValue": 3850,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7433887,
            "lng": -38.4905038
          }
        },
        {
          "address": "Avenida (Ave) Humberto Monte, 2929 - Pici, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 64,
          "rentValue": 4050,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Elevator",
            "Gated community",
            "Air conditioning"
          ],
          "description": "Ponto Comercial para alugar, 64m² em Pici, Fortaleza",
          "coordinates": {
            "lat": -3.7372751,
            "lng": -38.5694572
          }
        },
        {
          "address": "Rua (St) Embaúba - Eusebio, Eusébio - CE",
          "bedrooms": 4,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 142,
          "rentValue": 2600,
          "imageUrl": "assets/img/properties/house2.jpg",
          "amenities": [
            "Gourmet balcony"
          ],
          "description": "Casa com 4 Quartos para alugar, 142m² em Eusebio, Fortaleza",
          "coordinates": {
            "lat": -3.8961082,
            "lng": -38.4558729
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 39,
          "rentValue": 1600,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 39m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Rua (St) Fiuza de Pontes, 48 - Aldeota, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 200,
          "rentValue": 3150,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Electronic gate"
          ],
          "description": "Imóvel Comercial com 3 Quartos para alugar, 200m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7332865,
            "lng": -38.5185166
          }
        },
        {
          "address": "Rua (St) Isac Meyer, 50 - Aldeota, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 358,
          "rentValue": 4150,
          "imageUrl": "assets/img/properties/house1.jpg",
          "amenities": [],
          "description": "Casa com 3 Quartos para alugar, 358m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7312746,
            "lng": -38.5118172
          }
        },
        {
          "address": "Avenida (Ave) Bulevar III, 318 - Jangurussu, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 33,
          "rentValue": 2400,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Kitchen",
            "Alarm system",
            "Laundry area"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 33m² em Jangurussu, Fortaleza",
          "coordinates": {
            "lat": -3.8351004,
            "lng": -38.5183076
          }
        },
        {
          "address": "Travessa Armando Oliveira, 14 - Parquelândia, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 40,
          "rentValue": 3400,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Kitchen",
            "Laundry area"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 40m² em Parquelândia, Fortaleza",
          "coordinates": {
            "lat": -3.7367765,
            "lng": -38.5670222
          }
        },
        {
          "address": "Rua (St) General Bernardo Figueiredo, 415 - Amadeu Furtado, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 45,
          "rentValue": 4550,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 45m² em Amadeu Furtado, Fortaleza",
          "coordinates": {
            "lat": -3.7398369,
            "lng": -38.5519993
          }
        },
        {
          "address": "Rua (St) Recanto Verde, 1479 - Jangurussu, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 90,
          "rentValue": 1850,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [
            "Laundry area",
            "Kitchen",
            "Intercom"
          ],
          "description": "Imóvel Comercial com 2 Quartos para alugar, 90m² em Jangurussu, Fortaleza",
          "coordinates": {
            "lat": -3.8394547,
            "lng": -38.5118371
          }
        },
        {
          "address": "Avenida (Ave) Pontes Vieira, 2340 - Dionísio Torres, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 49,
          "rentValue": 2500,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 49m² em Dionísio Torres, Fortaleza",
          "coordinates": {
            "lat": -3.7513729,
            "lng": -38.5007311
          }
        },
        {
          "address": "Rua (St) Senador Pompeu, 649 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 23,
          "rentValue": 900,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Kitchen",
            "24-hour security",
            "Elevator",
            "Watchman"
          ],
          "description": "Sala Comercial para alugar, 23m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724452299999999,
            "lng": -38.5287254
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 39,
          "rentValue": 4150,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 39m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Cidade dos Funcionários, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 16,
          "rentValue": 1650,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 16m² em Cidade dos Funcionários, Fortaleza",
          "coordinates": {
            "lat": -3.7971588,
            "lng": -38.4999808
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 33 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 38,
          "rentValue": 750,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7279488,
            "lng": -38.5255179
          }
        },
        {
          "address": "Rua (St) Senador Alencar - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 26,
          "rentValue": 1300,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 26m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7229233,
            "lng": -38.5340305
          }
        },
        {
          "address": "Parque Dois Irmãos, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 22,
          "rentValue": 750,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 22m² em Parque Dois Irmãos, Fortaleza",
          "coordinates": {
            "lat": -3.8089995,
            "lng": -38.5495815
          }
        },
        {
          "address": "Rua (St) H, 0 - Parque Dois Irmãos, Fortaleza - CE",
          "area": 438,
          "rentValue": 4050,
          "imageUrl": "assets/img/properties/ground1.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar, 438m² em Parque Dois Irmãos, Fortaleza",
          "coordinates": {
            "lat": -3.8010167,
            "lng": -38.5502464
          }
        },
        {
          "address": "Rua (St) General Bernardo Figueiredo, 2020 - Parquelândia, Fortaleza - CE",
          "bedrooms": 5,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 440,
          "rentValue": 1100,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Imóvel Comercial com 5 Quartos para alugar, 440m² em Parquelândia, Fortaleza",
          "coordinates": {
            "lat": -3.7404762,
            "lng": -38.5549276
          }
        },
        {
          "address": "Rua (St) da Assunção, 443 - José Bonifácio, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 35,
          "rentValue": 2550,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Ponto Comercial com 2 Quartos para alugar, 35m² em José Bonifácio, Fortaleza",
          "coordinates": {
            "lat": -3.7340616,
            "lng": -38.5282924
          }
        },
        {
          "address": "Avenida (Ave) Presidente Artur Bernardes, 3470 - JOSE DE ALENCAR, Fortaleza - CE",
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 4066,
          "rentValue": 2650,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Prédio Comercial com 40 Quartos para alugar, 4066m² em JOSE DE ALENCAR, Fortaleza",
          "coordinates": {
            "lat": -3.8089627,
            "lng": -38.4704225
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 30 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 40,
          "rentValue": 2750,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [
            "Kitchen"
          ],
          "description": "Sala Comercial para alugar, 40m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.728075,
            "lng": -38.5260597
          }
        },
        {
          "address": "Rua (St) Dona Leopoldina, 388 - Centro, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 25,
          "rentValue": 1700,
          "imageUrl": "",
          "amenities": [
            "Kitchen"
          ],
          "description": "Kitnet com 1 Quarto para alugar, 25m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7285962,
            "lng": -38.5189349
          }
        },
        {
          "address": "Avenida (Ave) Maestro Lisboa, 401 - JOSE DE ALENCAR, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 17,
          "rentValue": 1600,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 17m² em JOSE DE ALENCAR, Fortaleza",
          "coordinates": {
            "lat": -3.8077569,
            "lng": -38.476729
          }
        },
        {
          "address": "Rua (St) França, 1061 - Maraponga, Fortaleza - CE",
          "bedrooms": 4,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 253,
          "rentValue": 3950,
          "imageUrl": "assets/img/properties/house4.jpg",
          "amenities": [
            "Balcony",
            "Garage",
            "Kitchen",
            "Laundry area"
          ],
          "description": "Casa com 4 Quartos para alugar, 253m² em Maraponga, Fortaleza",
          "coordinates": {
            "lat": -3.7922468,
            "lng": -38.5624482
          }
        },
        {
          "address": "Rua (St) 101 - Novo Mondubim, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 41,
          "rentValue": 3400,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Barbecue grill",
            "Intercom",
            "Sports court"
          ],
          "description": "Apartamento com 2 Quartos para venda ou aluguel, 41m² em Novo Mondubim, Fortaleza",
          "coordinates": {
            "lat": -3.8105478,
            "lng": -38.5886361
          }
        },
        {
          "address": "Papicu, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 300,
          "rentValue": 3550,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [
            "Kitchen"
          ],
          "description": "Ponto Comercial para venda ou aluguel, 300m² em Papicu, Fortaleza",
          "coordinates": {
            "lat": -3.740604199999999,
            "lng": -38.4764189
          }
        },
        {
          "address": "Rua (St) Professor Jacinto Botelho, 60 - Guararapes, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 100,
          "rentValue": 4150,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [],
          "description": "Apartamento com 3 Quartos para alugar, 100m² em Guararapes, Fortaleza",
          "coordinates": {
            "lat": -3.7577411,
            "lng": -38.4907183
          }
        },
        {
          "address": "Rua (St) Rafael Tobias, 2800 - JOSE DE ALENCAR, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 126,
          "rentValue": 1200,
          "imageUrl": "assets/img/properties/house2.jpg",
          "amenities": [
            "Kitchen",
            "Intercom",
            "Laundry area"
          ],
          "description": "Casa com 3 Quartos para alugar, 126m² em JOSE DE ALENCAR, Fortaleza",
          "coordinates": {
            "lat": -3.8061471,
            "lng": -38.4714507
          }
        },
        {
          "address": "Rua (St) Capitão Melo, 3358 - Joaquim Tavora, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 25,
          "rentValue": 1050,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Kitchen"
          ],
          "description": "Ponto Comercial para alugar, 25m² em Joaquim Tavora, Fortaleza",
          "coordinates": {
            "lat": -3.7518544,
            "lng": -38.5140818
          }
        },
        {
          "address": "Rua (St) Daura, 151 - Barroso, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 41,
          "rentValue": 800,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Playground",
            "Laundry area",
            "Adult pool",
            "Pool"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 41m² em Barroso, Fortaleza",
          "coordinates": {
            "lat": -3.823082,
            "lng": -38.50589160000001
          }
        },
        {
          "address": "Rua (St) Tomás Acioli, 840 - Joaquim Tavora, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 59,
          "rentValue": 3650,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [
            "Kitchen",
            "Elevator"
          ],
          "description": "Sala Comercial para venda ou aluguel, 59m² em Joaquim Tavora, Fortaleza",
          "coordinates": {
            "lat": -3.7448791,
            "lng": -38.5101609
          }
        },
        {
          "address": "Rua (St) José Hipólito, 120 - Messejana, Fortaleza - CE",
          "bedrooms": 4,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 125,
          "rentValue": 3300,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Laundry area",
            "Playground",
            "Sports court"
          ],
          "description": "Apartamento com 4 Quartos para alugar, 125m² em Messejana, Fortaleza",
          "coordinates": {
            "lat": -3.8329294,
            "lng": -38.493973
          }
        },
        {
          "address": "Rua (St) Pereira Filgueiras, 2392 - Centro, Fortaleza - CE",
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 167,
          "rentValue": 3900,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [],
          "description": "",
          "coordinates": {
            "lat": -3.7320987,
            "lng": -38.5019141
          }
        },
        {
          "address": "Avenida (Ave) Antônio Sales, 1516 - Joaquim Tavora, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 43,
          "rentValue": 3900,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 43m² em Joaquim Tavora, Fortaleza",
          "coordinates": {
            "lat": -3.7431975,
            "lng": -38.51011949999999
          }
        },
        {
          "address": "Rua (St) Barão de Aracati, 145 - Meireles, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 56,
          "rentValue": 3150,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Pool",
            "Mobiliado",
            "Elevator",
            "Gated community",
            "Gym"
          ],
          "description": "Apartamento com 2 Quartos para venda ou aluguel, 56m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7233292,
            "lng": -38.5087503
          }
        },
        {
          "address": "Avenida (Ave) Dolor Barreira, 1000 - De Lourdes, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 21,
          "rentValue": 2950,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [
            "Entrance hall",
            "Meeting room"
          ],
          "description": "Sala Comercial com 1 Quarto para alugar, 21m² em De Lourdes, Fortaleza",
          "coordinates": {
            "lat": -3.7352823,
            "lng": -38.46967679999999
          }
        },
        {
          "address": "Rua (St) Hil de Moraes, 12 - Guararapes, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 70,
          "rentValue": 3550,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Gated community",
            "Balcony"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 70m² em Guararapes, Fortaleza",
          "coordinates": {
            "lat": -3.7754212,
            "lng": -38.4780354
          }
        },
        {
          "address": "Cidade dos Funcionários, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 35,
          "rentValue": 2350,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [
            "Intercom"
          ],
          "description": "Sala Comercial para alugar, 35m² em Cidade dos Funcionários, Fortaleza",
          "coordinates": {
            "lat": -3.7971588,
            "lng": -38.4999808
          }
        },
        {
          "address": "Rua (St) General Clarindo de Queiroz, 800 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 30,
          "rentValue": 1800,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [
            "Kitchen",
            "Elevator",
            "Intercom",
            "Office"
          ],
          "description": "Sala Comercial para alugar, 30m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7322325,
            "lng": -38.531384
          }
        },
        {
          "address": "Rua (St) Pinto Madeira, 1075 - Centro, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 30,
          "rentValue": 4850,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Laundry",
            "Kitchen",
            "Laundry area"
          ],
          "description": "Apartamento com 1 Quarto para alugar, 30m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.732812,
            "lng": -38.5156213
          }
        },
        {
          "address": "Rua (St) João Gentil, 2964 - Granja Lisboa, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 85,
          "rentValue": 1000,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [
            "Internet connection"
          ],
          "description": "Ponto Comercial para alugar, 85m² em Granja Lisboa, Fortaleza",
          "coordinates": {
            "lat": -3.7911215,
            "lng": -38.6246533
          }
        },
        {
          "address": "Avenida (Ave) Senador Virgílio Távora, 1701 - Meireles, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 35,
          "rentValue": 4600,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 35m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7403814,
            "lng": -38.4939797
          }
        },
        {
          "address": "Rua (St) Doutor Manuel Teófilo, 995 - Itaperi, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 60,
          "rentValue": 3450,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Gated community",
            "Garden",
            "Laundry area"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 60m² em Itaperi, Fortaleza",
          "coordinates": {
            "lat": -3.7868361,
            "lng": -38.562494
          }
        },
        {
          "address": "Avenida (Ave) da Saudade - Passaré, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 48,
          "rentValue": 1650,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Intercom"
          ],
          "description": "Apartamento com 2 Quartos para venda ou aluguel, 48m² em Passaré, Fortaleza",
          "coordinates": {
            "lat": -3.8160621,
            "lng": -38.5361605
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 33 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 34,
          "rentValue": 3250,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para venda ou aluguel, 34m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7279488,
            "lng": -38.5255179
          }
        },
        {
          "address": "Rua (St) do Pocinho, 33 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 34,
          "rentValue": 4800,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para venda ou aluguel, 34m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.728003,
            "lng": -38.52548
          }
        },
        {
          "address": "Rua (St) Alagoas, 2910 - Pici, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 55,
          "rentValue": 4350,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 55m² em Pici, Fortaleza",
          "coordinates": {
            "lat": -3.7531168,
            "lng": -38.5770872
          }
        },
        {
          "address": "Avenida (Ave) Dom Luís, 500 - Meireles, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 32,
          "rentValue": 850,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 32m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7356097,
            "lng": -38.4909979
          }
        },
        {
          "address": "Maraponga, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 550,
          "rentValue": 4300,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [
            "Deposit"
          ],
          "description": "Prédio Comercial para venda ou aluguel, 550m² em Maraponga, Fortaleza",
          "coordinates": {
            "lat": -3.793095,
            "lng": -38.5659336
          }
        },
        {
          "address": "Rua (St) Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 31,
          "rentValue": 3650,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "address": "Rua (St) Maria Pinheiro Campelo, 673 - Lagoa Redonda, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 45,
          "rentValue": 2850,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Kitchen",
            "Laundry area"
          ],
          "description": "Apartamento com 1 Quarto para alugar, 45m² em Lagoa Redonda, Fortaleza",
          "coordinates": {
            "lat": -3.8331138,
            "lng": -38.4592679
          }
        },
        {
          "address": "Rua (St) Waldery Uchôa - Benfica, Fortaleza - CE",
          "bedrooms": 4,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 120,
          "rentValue": 5000,
          "imageUrl": "assets/img/properties/house1.jpg",
          "amenities": [
            "Garage",
            "Kitchen"
          ],
          "description": "Casa com 4 Quartos para alugar, 120m² em Benfica, Fortaleza",
          "coordinates": {
            "lat": -3.7471849,
            "lng": -38.5417218
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 5335 - Papicu, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 30,
          "rentValue": 700,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 30m² em Papicu, Fortaleza",
          "coordinates": {
            "lat": -3.7407389,
            "lng": -38.48346919999999
          }
        },
        {
          "address": "Avenida (Ave) Dom Luís, 500 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 62,
          "rentValue": 2150,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Office",
            "Ocean view"
          ],
          "description": "Sala Comercial para alugar, 62m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7340637,
            "lng": -38.49696480000001
          }
        },
        {
          "address": "Rua (St) Bento Albuquerque, 3300 - Manoel Dias Branco, Fortaleza - CE",
          "bedrooms": 4,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 163,
          "rentValue": 1100,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Gated community"
          ],
          "description": "Apartamento com 4 Quartos para alugar, 163m² em Manoel Dias Branco, Fortaleza",
          "coordinates": {
            "lat": -3.751343,
            "lng": -38.4608411
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 42,
          "rentValue": 1650,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Parque Manibura, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 50,
          "rentValue": 1600,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 50m² em Parque Manibura, Fortaleza",
          "coordinates": {
            "lat": -3.7912376,
            "lng": -38.4877551
          }
        },
        {
          "address": "Vila Nazira, 96 - Fátima, Fortaleza - CE",
          "bedrooms": 6,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 250,
          "rentValue": 3300,
          "imageUrl": "assets/img/properties/house3.jpg",
          "amenities": [],
          "description": "Casa com 6 Quartos para alugar, 250m² em Fátima, Fortaleza",
          "coordinates": {
            "lat": -3.7424532,
            "lng": -38.5339863
          }
        },
        {
          "address": "Rua (St) Andrade Furtado, 0 - Cocó, Fortaleza - CE",
          "area": 498,
          "rentValue": 2800,
          "imageUrl": "assets/img/properties/ground1.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar, 498m² em Cocó, Fortaleza",
          "coordinates": {
            "lat": -3.7427741,
            "lng": -38.4889202
          }
        },
        {
          "address": "Rua (St) Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 31,
          "rentValue": 1150,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "address": "Rua (St) Pereira Filgueiras, 2020 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 36,
          "rentValue": 3600,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 36m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7311979,
            "lng": -38.50466
          }
        },
        {
          "address": "Rua (St) Roberto Gradvohl, 1 - JOSE DE ALENCAR, Fortaleza - CE",
          "area": 1000,
          "rentValue": 4550,
          "imageUrl": "assets/img/properties/ground1.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar, 1000m² em JOSE DE ALENCAR, Fortaleza",
          "coordinates": {
            "lat": -3.8093649,
            "lng": -38.47705
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 20 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 72,
          "rentValue": 1650,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 72m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 20 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 75,
          "rentValue": 4650,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 75m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "address": "Avenida (Ave) Senador Virgílio Távora, 1901 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 28,
          "rentValue": 1450,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 28m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.743278,
            "lng": -38.495201
          }
        },
        {
          "address": "Rua (St) Porto Velho, 9 - João XXIII, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 50,
          "rentValue": 4800,
          "imageUrl": "assets/img/properties/house4.jpg",
          "amenities": [
            "Balcony",
            "Kitchen"
          ],
          "description": "Casa com 2 Quartos para alugar, 50m² em João XXIII, Fortaleza",
          "coordinates": {
            "lat": -3.7670131,
            "lng": -38.5829132
          }
        },
        {
          "address": "Rua (St) Maria Alice, SN - Engenheiro Luciano Cavalcante, Fortaleza - CE",
          "area": 841,
          "rentValue": 4400,
          "imageUrl": "assets/img/properties/ground1.jpg",
          "amenities": [
            "Desnível para frente (Rua (St))",
            "Plain",
            "Rua (St) asfaltada"
          ],
          "description": "Lote/Terreno para alugar, 841m² em Engenheiro Luciano Cavalcante, Fortaleza",
          "coordinates": {
            "lat": -3.7740998,
            "lng": -38.491673
          }
        },
        {
          "address": "Rua (St) Nogueira Acioli, 1365 - Aldeota, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 89,
          "rentValue": 600,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Laundry area"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 89m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7357398,
            "lng": -38.5186815
          }
        },
        {
          "address": "Rua (St) Raimundo Oliveira Filho, 720 - Papicu, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 100,
          "rentValue": 4650,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Elevator",
            "Gated community",
            "Balcony",
            "Playground"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 100m² em Papicu, Fortaleza",
          "coordinates": {
            "lat": -3.7384958,
            "lng": -38.4790876
          }
        },
        {
          "address": "Rua (St) 5, 350 - Parque Iracema, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 70,
          "rentValue": 2550,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [],
          "description": "Apartamento com 2 Quartos para alugar, 70m² em Parque Iracema, Fortaleza",
          "coordinates": {
            "lat": -3.8042961,
            "lng": -38.4986963
          }
        },
        {
          "address": "Rua (St) Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 31,
          "rentValue": 950,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "address": "Rua (St) Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 31,
          "rentValue": 4950,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "address": "Avenida (Ave) Duque de Caxias, 823 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 36,
          "rentValue": 2050,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Security circuit",
            "Elevator"
          ],
          "description": "Sala Comercial para alugar, 36m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7313072,
            "lng": -38.5317182
          }
        },
        {
          "address": "Avenida (Ave) da Abolição, 3089 - Beira Mar, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 30,
          "rentValue": 1850,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Security camera",
            "Garden",
            "Electronic gate",
            "24-hour concierge",
            "Closet"
          ],
          "description": "Apartamento com 1 Quarto para alugar, 30m² em Beira Mar, Fortaleza",
          "coordinates": {
            "lat": -3.726603,
            "lng": -38.4916884
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1267 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 23,
          "rentValue": 750,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [
            "Elevator",
            "Office"
          ],
          "description": "Sala Comercial para alugar, 23m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7313778,
            "lng": -38.5121337
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 128,
          "rentValue": 3550,
          "imageUrl": "assets/img/properties/ground2.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "address": "Rua (St) Vereador Ademar Arruda, 95 - Centro, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 85,
          "rentValue": 2650,
          "imageUrl": "assets/img/properties/house5.jpg",
          "amenities": [
            "Balcony",
            "Kitchen",
            "Laundry area"
          ],
          "description": "Casa com 2 Quartos para alugar, 85m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724565999999999,
            "lng": -38.51720299999999
          }
        },
        {
          "address": "Rua (St) Antônio Augusto, 120 - Meireles, Fortaleza - CE",
          "area": 54,
          "rentValue": 1150,
          "imageUrl": "assets/img/properties/ground2.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7221461,
            "lng": -38.5110242
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 42,
          "rentValue": 1350,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 30 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 50,
          "rentValue": 3850,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [
            "Kitchen"
          ],
          "description": "Sala Comercial para alugar, 50m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.728075,
            "lng": -38.5260597
          }
        },
        {
          "address": "Avenida (Ave) Pontes Vieira, 2340 - Dionísio Torres, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 34,
          "rentValue": 1750,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 34m² em Dionísio Torres, Fortaleza",
          "coordinates": {
            "lat": -3.7513729,
            "lng": -38.5007311
          }
        },
        {
          "address": "Parangaba, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 35,
          "rentValue": 1500,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 35m² em Parangaba, Fortaleza",
          "coordinates": {
            "lat": -3.7771358,
            "lng": -38.5620583
          }
        },
        {
          "address": "Rua (St) Araripe Júnior, 0 - Cambeba, Fortaleza - CE",
          "area": 1000,
          "rentValue": 1550,
          "imageUrl": "assets/img/properties/ground1.jpg",
          "amenities": [],
          "description": "Lote/Terreno para venda ou aluguel, 1000m² em Cambeba, Fortaleza",
          "coordinates": {
            "lat": -3.8096082,
            "lng": -38.4788459
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 42,
          "rentValue": 3350,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Rua (St) Pedro I, 663 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 20,
          "rentValue": 4000,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 20m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7306716,
            "lng": -38.5306338
          }
        },
        {
          "address": "Rua (St) José Alves Cavalcante, 211 - Cidade dos Funcionários, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 130,
          "rentValue": 1200,
          "imageUrl": "assets/img/properties/house5.jpg",
          "amenities": [],
          "description": "Casa com 3 Quartos para alugar, 130m² em Cidade dos Funcionários, Fortaleza",
          "coordinates": {
            "lat": -3.793137499999999,
            "lng": -38.5048447
          }
        },
        {
          "address": "Rua (St) Pedro Aristides Albuquerque, 550 - Joaquim Tavora, Fortaleza - CE",
          "bedrooms": 4,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 250,
          "rentValue": 1900,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Electronic gate",
            "American kitchen"
          ],
          "description": "Imóvel Comercial com 4 Quartos para alugar, 250m² em Joaquim Tavora, Fortaleza",
          "coordinates": {
            "lat": -3.7487795,
            "lng": -38.5154402
          }
        },
        {
          "address": "Avenida (Ave) Antônio Sales, 1950 - Dionísio Torres, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 28,
          "rentValue": 2100,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 28m² em Dionísio Torres, Fortaleza",
          "coordinates": {
            "lat": -3.7442774,
            "lng": -38.5070424
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1343 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 32,
          "rentValue": 3550,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [
            "Kitchen",
            "Security circuit",
            "Intercom",
            "Elevator"
          ],
          "description": "Sala Comercial para alugar, 32m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7316032,
            "lng": -38.5117003
          }
        },
        {
          "address": "Rua (St) Monsenhor Bruno, 289 - Meireles, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 85,
          "rentValue": 1750,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Elevator",
            "Balcony",
            "Garage",
            "Kitchen"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 85m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7247262,
            "lng": -38.5067742
          }
        },
        {
          "address": "Rua (St) Peru, 279 - Itaperi, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 110,
          "rentValue": 4400,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 110m² em Itaperi, Fortaleza",
          "coordinates": {
            "lat": -3.7842759,
            "lng": -38.5557001
          }
        },
        {
          "address": "Rua (St) Barão do Rio Branco, 1071 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 27,
          "rentValue": 3900,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Elevator",
            "Intercom"
          ],
          "description": "Sala Comercial para alugar, 27m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7277511,
            "lng": -38.5283848
          }
        },
        {
          "address": "Avenida (Ave) da Saudade, 95 - Passaré, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 60,
          "rentValue": 1000,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Gated community",
            "Balcony",
            "Gym"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 60m² em Passaré, Fortaleza",
          "coordinates": {
            "lat": -3.8137683,
            "lng": -38.5313796
          }
        },
        {
          "address": "Avenida (Ave) Pedro Lazar, 830 - Cambeba, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 52,
          "rentValue": 1250,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Gated community",
            "Balcony"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 52m² em Cambeba, Fortaleza",
          "coordinates": {
            "lat": -3.8032847,
            "lng": -38.4886881
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 20 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 89,
          "rentValue": 4850,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 89m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "address": "Rua (St) Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 76,
          "rentValue": 4050,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 76m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "address": "Avenida (Ave) Visconde do Rio Branco, 2125 - Joaquim Tavora, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 100,
          "rentValue": 3400,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [],
          "description": "Apartamento com 3 Quartos para alugar, 100m² em Joaquim Tavora, Fortaleza",
          "coordinates": {
            "lat": -3.7394224,
            "lng": -38.5232752
          }
        },
        {
          "address": "Rua (St) Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 31,
          "rentValue": 4800,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "address": "Rua (St) Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 31,
          "rentValue": 2600,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 156,
          "rentValue": 1800,
          "imageUrl": "assets/img/properties/ground3.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "address": "Rodovia BR-116, 6163 - Aerolândia, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 256,
          "rentValue": 2700,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 256m² em Aerolândia, Fortaleza",
          "coordinates": {
            "lat": -3.775246,
            "lng": -38.5153475
          }
        },
        {
          "address": "Via Paisagística do Loteamento Itaperussú, 80 - Itaperi, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 53,
          "rentValue": 1700,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 53m² em Itaperi, Fortaleza",
          "coordinates": {
            "lat": -3.7961599,
            "lng": -38.5360689
          }
        },
        {
          "address": "Rua (St) Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 23,
          "rentValue": 950,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 23m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "address": "Rua (St) do Rosário, 77 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 56,
          "rentValue": 2500,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 56m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.728418999999999,
            "lng": -38.5262788
          }
        },
        {
          "address": "Antônio Bezerra, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 40,
          "rentValue": 3300,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Laundry",
            "Dining room",
            "Kitchen"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 40m² em Antônio Bezerra, Fortaleza",
          "coordinates": {
            "lat": -3.740141199999999,
            "lng": -38.5946171
          }
        },
        {
          "address": "Rua (St) Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 31,
          "rentValue": 1450,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "address": "Rua (St) Bento Albuquerque, 1633 - Cocó, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 74,
          "rentValue": 2400,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Laundry area"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 74m² em Cocó, Fortaleza",
          "coordinates": {
            "lat": -3.746507199999999,
            "lng": -38.4742645
          }
        },
        {
          "address": "Rua (St) Pereira Filgueiras, 149 - Centro, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 55,
          "rentValue": 1150,
          "imageUrl": "assets/img/properties/house2.jpg",
          "amenities": [],
          "description": "Casa com 1 Quarto para alugar, 55m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.72564,
            "lng": -38.521067
          }
        },
        {
          "address": "Rua (St) José Vilar, 3333 - Dionísio Torres, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 65,
          "rentValue": 2500,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Security circuit",
            "Elevator",
            "24-hour concierge",
            "Electronic gate",
            "Gated community"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 65m² em Dionísio Torres, Fortaleza",
          "coordinates": {
            "lat": -3.7533526,
            "lng": -38.5102818
          }
        },
        {
          "address": "Rua (St) Artur de Carvalho, 187 - Vila União, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 19,
          "rentValue": 4150,
          "imageUrl": "assets/img/properties/house4.jpg",
          "amenities": [],
          "description": "Casa com 3 Quartos para alugar, 19m² em Vila União, Fortaleza",
          "coordinates": {
            "lat": -3.7608826,
            "lng": -38.53450530000001
          }
        },
        {
          "address": "Rua (St) Doutor Edmilson Barros de Oliveira - Cocó, Fortaleza - CE",
          "area": 440,
          "rentValue": 1700,
          "imageUrl": "assets/img/properties/ground3.jpg",
          "amenities": [],
          "description": "Lote/Terreno para venda ou aluguel, 440m² em Cocó, Fortaleza",
          "coordinates": {
            "lat": -3.7515363,
            "lng": -38.4940296
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 6870 - Papicu, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 45,
          "rentValue": 4750,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 45m² em Papicu, Fortaleza",
          "coordinates": {
            "lat": -3.7448345,
            "lng": -38.4723958
          }
        },
        {
          "address": "Rua (St) Doutor Gilberto Studart, 55 - Cocó, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 40,
          "rentValue": 3650,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 40m² em Cocó, Fortaleza",
          "coordinates": {
            "lat": -3.743293,
            "lng": -38.482377
          }
        },
        {
          "address": "Rua (St) Senador Pompeu, 649 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 23,
          "rentValue": 1450,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Kitchen",
            "24-hour security",
            "Elevator",
            "Watchman"
          ],
          "description": "Sala Comercial para alugar, 23m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724452299999999,
            "lng": -38.5287254
          }
        },
        {
          "address": "Rua (St) Doutor Salustio de Pinho, 1 - Praia do Futuro II, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 160,
          "rentValue": 2650,
          "imageUrl": "assets/img/properties/house4.jpg",
          "amenities": [
            "Pool",
            "Gated community",
            "Garden",
            "Laundry area",
            "24-hour concierge"
          ],
          "description": "Casa de Condomínio com 2 Quartos para alugar, 160m² em Praia do Futuro II, Fortaleza",
          "coordinates": {
            "lat": -3.751626,
            "lng": -38.44677799999999
          }
        },
        {
          "address": "Rua (St) Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 38,
          "rentValue": 3800,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "address": "Avenida (Ave) Duque de Caxias, 641 - Centro, Fortaleza - CE",
          "bedrooms": 8,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 600,
          "rentValue": 850,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Imóvel Comercial com 8 Quartos para alugar, 600m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7317895,
            "lng": -38.5302448
          }
        },
        {
          "address": "Avenida (Ave) Geógrafo Antônio Ribeiro Zaranza, 2598 - Cajazeiras, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 45,
          "rentValue": 1050,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Barbecue grill",
            "Playground",
            "Party room",
            "Internet connection"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 45m² em Cajazeiras, Fortaleza",
          "coordinates": {
            "lat": -3.8082689,
            "lng": -38.5132471
          }
        },
        {
          "address": "Rua (St) Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 31,
          "rentValue": 3450,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "address": "Rua (St) João Cordeiro, 688 - Aldeota, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 44,
          "rentValue": 3150,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Balcony",
            "Gym"
          ],
          "description": "Apartamento com 1 Quarto para alugar, 44m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7260913,
            "lng": -38.51349390000001
          }
        },
        {
          "address": "Rua (St) Francisco Nogueira, 340 - Cajazeiras, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 70,
          "rentValue": 4800,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Mobiliado",
            "Playground",
            "Party room",
            "Sports court"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 70m² em Cajazeiras, Fortaleza",
          "coordinates": {
            "lat": -3.801292,
            "lng": -38.5057423
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 39,
          "rentValue": 3050,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 39m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Avenida (Ave) Engenheiro Alberto Sá, 705 - Papicu, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 54,
          "rentValue": 1050,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [
            "Deposit"
          ],
          "description": "Ponto Comercial para alugar, 54m² em Papicu, Fortaleza",
          "coordinates": {
            "lat": -3.7348957,
            "lng": -38.4741872
          }
        },
        {
          "address": "Rua (St) A do Loteamento Residencial Célio Gurgel, 1697 - Barroso, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 42,
          "rentValue": 3600,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Garage"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 42m² em Barroso, Fortaleza",
          "coordinates": {
            "lat": -3.821732,
            "lng": -38.5817975
          }
        },
        {
          "address": "Rua (St) Cruzeiro do Sul, 669 - Álvaro Weyne, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 75,
          "rentValue": 5000,
          "imageUrl": "assets/img/properties/house1.jpg",
          "amenities": [
            "Kitchen",
            "Laundry area"
          ],
          "description": "Casa com 2 Quartos para alugar, 75m² em Álvaro Weyne, Fortaleza",
          "coordinates": {
            "lat": -3.7153258,
            "lng": -38.5628823
          }
        },
        {
          "address": "Rua (St) Alencar Oliveira - Passaré, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 44,
          "rentValue": 3050,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Intercom",
            "Sports court",
            "Alarm system"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 44m² em Passaré, Fortaleza",
          "coordinates": {
            "lat": -3.8147776,
            "lng": -38.5199405
          }
        },
        {
          "address": "Rua (St) Paulo de Almeida Sanford, 145 - Edson Queiroz, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 171,
          "rentValue": 2500,
          "imageUrl": "assets/img/properties/house4.jpg",
          "amenities": [
            "Kitchen",
            "Laundry area"
          ],
          "description": "Casa com 3 Quartos para venda ou aluguel, 171m² em Edson Queiroz, Fortaleza",
          "coordinates": {
            "lat": -3.7877666,
            "lng": -38.4752562
          }
        },
        {
          "address": "Avenida (Ave) Trajano de Medeiros, 2150 - Vicente Pinzon, Fortaleza - CE",
          "bedrooms": 5,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 500,
          "rentValue": 2600,
          "imageUrl": "assets/img/properties/house2.jpg",
          "amenities": [],
          "description": "Casa com 5 Quartos para alugar, 500m² em Vicente Pinzon, Fortaleza",
          "coordinates": {
            "lat": -3.7381928,
            "lng": -38.4611437
          }
        },
        {
          "address": "Rua (St) Rafael Tobias, 2800 - JOSE DE ALENCAR, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 126,
          "rentValue": 2550,
          "imageUrl": "assets/img/properties/house2.jpg",
          "amenities": [
            "Kitchen",
            "Intercom",
            "Laundry area"
          ],
          "description": "Casa com 3 Quartos para alugar, 126m² em JOSE DE ALENCAR, Fortaleza",
          "coordinates": {
            "lat": -3.8061471,
            "lng": -38.4714507
          }
        },
        {
          "address": "Rua (St) Hil de Moraes, 12 - Edson Queiroz, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 55,
          "rentValue": 2850,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Gated community",
            "Balcony"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 55m² em Edson Queiroz, Fortaleza",
          "coordinates": {
            "lat": -3.7754212,
            "lng": -38.4780354
          }
        },
        {
          "address": "Sapiranga, Fortaleza - CE",
          "bedrooms": 4,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 269,
          "rentValue": 3100,
          "imageUrl": "assets/img/properties/house2.jpg",
          "amenities": [
            "Barbecue grill",
            "Kitchen",
            "Laundry area"
          ],
          "description": "Casa com 4 Quartos para alugar, 269m² em Sapiranga, Fortaleza",
          "coordinates": {
            "lat": -3.7952935,
            "lng": -38.4757701
          }
        },
        {
          "address": "Rua (St) B, 120 - Messejana, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 48,
          "rentValue": 2900,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Gated community",
            "Laundry area",
            "Playground"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 48m² em Messejana, Fortaleza",
          "coordinates": {
            "lat": -3.8079795,
            "lng": -38.5058186
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 3870 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 8,
          "rentValue": 3950,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 8m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7396991,
            "lng": -38.4894273
          }
        },
        {
          "address": "Rua (St) Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 38,
          "rentValue": 4000,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 58,
          "rentValue": 3400,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 58m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7349664,
            "lng": -38.5022633
          }
        },
        {
          "address": "Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 27,
          "rentValue": 2650,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [
            "Elevator"
          ],
          "description": "Sala Comercial para venda ou aluguel, 27m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7329688,
            "lng": -38.5264661
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 159,
          "rentValue": 2900,
          "imageUrl": "assets/img/properties/ground1.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "address": "Rua (St) Firmino Rocha Aguiar, 1033 - Guararapes, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 72,
          "rentValue": 2350,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [],
          "description": "Apartamento com 2 Quartos para alugar, 72m² em Guararapes, Fortaleza",
          "coordinates": {
            "lat": -3.7628197,
            "lng": -38.4838811
          }
        },
        {
          "address": "Rua (St) do Parque, 333 - Cambeba, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 70,
          "rentValue": 1250,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Gated community"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 70m² em Cambeba, Fortaleza",
          "coordinates": {
            "lat": -3.8058571,
            "lng": -38.4813991
          }
        },
        {
          "address": "Rua (St) Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 31,
          "rentValue": 1950,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "address": "Rua (St) Bento Albuquerque, 1555 - Cocó, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 120,
          "rentValue": 4700,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Elevator",
            "Gated community",
            "Garden",
            "Laundry area"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 120m² em Cocó, Fortaleza",
          "coordinates": {
            "lat": -3.746066,
            "lng": -38.4753206
          }
        },
        {
          "address": "Rua (St) Afrânio Peixoto, 288 - Parangaba, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 60,
          "rentValue": 3950,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [],
          "description": "Apartamento com 2 Quartos para alugar, 60m² em Parangaba, Fortaleza",
          "coordinates": {
            "lat": -3.7805487,
            "lng": -38.5724567
          }
        },
        {
          "address": "Rua (St) Marcondes Pereira, 537 - Joaquim Tavora, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 134,
          "rentValue": 4950,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Deposit",
            "Party room"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 134m² em Joaquim Tavora, Fortaleza",
          "coordinates": {
            "lat": -3.747585199999999,
            "lng": -38.5122196
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 33 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 34,
          "rentValue": 4900,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [
            "Elevator",
            "24-hour concierge",
            "Handicap access"
          ],
          "description": "Sala Comercial para alugar, 34m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7279488,
            "lng": -38.5255179
          }
        },
        {
          "address": "Rua (St) Vilebaldo Aguiar, 2246 - Cocó, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 68,
          "rentValue": 1000,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Elevator",
            "Gated community",
            "Party room",
            "Closet"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 68m² em Cocó, Fortaleza",
          "coordinates": {
            "lat": -3.747638,
            "lng": -38.4661795
          }
        },
        {
          "address": "Rua (St) Gonçalves Ledo, 177 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 35,
          "rentValue": 2800,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [
            "Kitchen"
          ],
          "description": "Sala Comercial para alugar, 35m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7254872,
            "lng": -38.5141632
          }
        },
        {
          "address": "Avenida (Ave) Ministro Albuquerque Lima, 894 - Conjunto Ceará, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 30,
          "rentValue": 3950,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 30m² em Conjunto Ceará, Fortaleza",
          "coordinates": {
            "lat": -3.7708043,
            "lng": -38.6048985
          }
        },
        {
          "address": "Rua (St) Vinícios de Morais, 1064 - Maraponga, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 95,
          "rentValue": 3350,
          "imageUrl": "assets/img/properties/house4.jpg",
          "amenities": [
            "Laundry area"
          ],
          "description": "Casa com 3 Quartos para alugar, 95m² em Maraponga, Fortaleza",
          "coordinates": {
            "lat": -3.7957514,
            "lng": -38.57333089999999
          }
        },
        {
          "address": "Rua (St) João Cordeiro, 1377 - Aldeota, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 30,
          "rentValue": 1500,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Elevator",
            "Gated community",
            "24-hour concierge",
            "American kitchen"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 30m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7325145,
            "lng": -38.5151073
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 30,
          "rentValue": 1000,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 42,
          "rentValue": 1650,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 20 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 72,
          "rentValue": 1400,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 72m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "address": "Rua (St) Major Facundo, 1344 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 140,
          "rentValue": 2450,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 140m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.734789,
            "lng": -38.530111
          }
        },
        {
          "address": "Rua (St) Miguel Calmont, 350 - Vicente Pinzon, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 30,
          "rentValue": 1500,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 30m² em Vicente Pinzon, Fortaleza",
          "coordinates": {
            "lat": -3.727287099999999,
            "lng": -38.4635009
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 5335 - Papicu, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 30,
          "rentValue": 2050,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 30m² em Papicu, Fortaleza",
          "coordinates": {
            "lat": -3.7407389,
            "lng": -38.48346919999999
          }
        },
        {
          "address": "Rodovia BR-116, 5870 - Aerolândia, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 73,
          "rentValue": 3550,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 73m² em Aerolândia, Fortaleza",
          "coordinates": {
            "lat": -3.7728982,
            "lng": -38.5165825
          }
        },
        {
          "address": "Avenida (Ave) Visconde do Rio Branco, 1728 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 463,
          "rentValue": 3050,
          "imageUrl": "assets/img/properties/storage3.jpg",
          "amenities": [
            "Office"
          ],
          "description": "Galpão para alugar, 463m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7361,
            "lng": -38.5241708
          }
        },
        {
          "address": "Rua (St) Amazonas, 201 - Bela Vista, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 90,
          "rentValue": 4050,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Balcony",
            "Garage",
            "Playground",
            "Sports court",
            "Kitchen"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 90m² em Bela Vista, Fortaleza",
          "coordinates": {
            "lat": -3.7568438,
            "lng": -38.5596013
          }
        },
        {
          "address": "Rua (St) Gustavo Braga, 128 - Rodolfo Teófilo, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 112,
          "rentValue": 3850,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Balcony",
            "Garage",
            "Kitchen",
            "Laundry area"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 112m² em Rodolfo Teófilo, Fortaleza",
          "coordinates": {
            "lat": -3.750614,
            "lng": -38.5528189
          }
        },
        {
          "address": "Avenida (Ave) Alberto Craveiro, 1240 - Dias Macedo, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 45,
          "rentValue": 4200,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Garage",
            "Garden"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 45m² em Dias Macedo, Fortaleza",
          "coordinates": {
            "lat": -3.7892032,
            "lng": -38.5177181
          }
        },
        {
          "address": "Rua (St) Pereira Filgueiras, 2249 - Aldeota, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 45,
          "rentValue": 950,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Kitchen"
          ],
          "description": "Apartamento com 1 Quarto para alugar, 45m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.731558,
            "lng": -38.50290020000001
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 42,
          "rentValue": 2450,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Rua (St) Tibúrcio Cavalcanti, 155 - Meireles, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 80,
          "rentValue": 4750,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [],
          "description": "Apartamento com 2 Quartos para alugar, 80m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7265791,
            "lng": -38.4994531
          }
        },
        {
          "address": "Rua (St) B - Itaperi, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 120,
          "rentValue": 1050,
          "imageUrl": "assets/img/properties/house1.jpg",
          "amenities": [
            "Kitchen",
            "Laundry",
            "Laundry area"
          ],
          "description": "Casa com 3 Quartos para venda ou aluguel, 120m² em Itaperi, Fortaleza",
          "coordinates": {
            "lat": -3.7943601,
            "lng": -38.5389192
          }
        },
        {
          "address": "Rua (St) Barão do Rio Branco - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 36,
          "rentValue": 2400,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 36m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.730413,
            "lng": -38.5295336
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 140,
          "rentValue": 4150,
          "imageUrl": "assets/img/properties/ground3.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "address": "Rua (St) Guilherme Moreira, 345 - Fátima, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 28,
          "rentValue": 2050,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 28m² em Fátima, Fortaleza",
          "coordinates": {
            "lat": -3.7500579,
            "lng": -38.5245693
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 33 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 34,
          "rentValue": 3300,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 34m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7279488,
            "lng": -38.5255179
          }
        },
        {
          "address": "Rua (St) José Napoleão, 355 - Meireles, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 130,
          "rentValue": 4350,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [],
          "description": "Apartamento com 3 Quartos para alugar, 130m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7285157,
            "lng": -38.489875
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 20 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 69,
          "rentValue": 3450,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 69m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "address": "Rua (St) Fiscal Vieira, 3575 - Joaquim Tavora, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 314,
          "rentValue": 4800,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Prédio Comercial para alugar, 314m² em Joaquim Tavora, Fortaleza",
          "coordinates": {
            "lat": -3.752580999999999,
            "lng": -38.5160321
          }
        },
        {
          "address": "Rua (St) Xavier de Oliveira, 338 - Amadeu Furtado, Fortaleza - CE",
          "bedrooms": 4,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 160,
          "rentValue": 1600,
          "imageUrl": "assets/img/properties/house3.jpg",
          "amenities": [],
          "description": "Casa com 4 Quartos para alugar, 160m² em Amadeu Furtado, Fortaleza",
          "coordinates": {
            "lat": -3.7474077,
            "lng": -38.5609252
          }
        },
        {
          "address": "Passaré, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 80,
          "rentValue": 2450,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [
            "Kitchen"
          ],
          "description": "Ponto Comercial para alugar, 80m² em Passaré, Fortaleza",
          "coordinates": {
            "lat": -3.8163239,
            "lng": -38.5316373
          }
        },
        {
          "address": "Rua (St) Tomás Lopes, 113 - Praia de Iracema, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 33,
          "rentValue": 3500,
          "imageUrl": "",
          "amenities": [],
          "description": "Kitnet com 1 Quarto para alugar, 33m² em Praia de Iracema, Fortaleza",
          "coordinates": {
            "lat": -3.7214121,
            "lng": -38.5155561
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 619 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 40,
          "rentValue": 3400,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 40m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.727184,
            "lng": -38.532761
          }
        },
        {
          "address": "Rua (St) Crispina de Freitas, 100 - Edson Queiroz, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 43,
          "rentValue": 4700,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 43m² em Edson Queiroz, Fortaleza",
          "coordinates": {
            "lat": -3.7869021,
            "lng": -38.4791339
          }
        },
        {
          "address": "Avenida (Ave) Bezerra de Menezes, 1966 - Sao Gerardo, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 121,
          "rentValue": 700,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Pool",
            "Mobiliado",
            "Barbecue grill",
            "Elevator",
            "Gated community"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 121m² em Sao Gerardo, Fortaleza",
          "coordinates": {
            "lat": -3.7349166,
            "lng": -38.56197450000001
          }
        },
        {
          "address": "Rua (St) do Rosário, 94 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 52,
          "rentValue": 2900,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 52m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7284303,
            "lng": -38.5264456
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 42,
          "rentValue": 4750,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Centro, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 20,
          "rentValue": 3800,
          "imageUrl": "",
          "amenities": [
            "Kitchen"
          ],
          "description": "Kitnet com 1 Quarto para alugar, 20m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7329688,
            "lng": -38.5264661
          }
        },
        {
          "address": "Rua (St) Mário Alencar Araripe, 1565 - JOSE DE ALENCAR, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 26,
          "rentValue": 2300,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [
            "Office"
          ],
          "description": "Sala Comercial para alugar, 26m² em JOSE DE ALENCAR, Fortaleza",
          "coordinates": {
            "lat": -3.8024617,
            "lng": -38.4774563
          }
        },
        {
          "address": "Rua (St) Coronel Manuel Albano, 656 - Maraponga, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 60,
          "rentValue": 2300,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Playground",
            "Party room"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 60m² em Maraponga, Fortaleza",
          "coordinates": {
            "lat": -3.805704099999999,
            "lng": -38.5721383
          }
        },
        {
          "address": "Rua (St) Rafael Tobias, 2800 - JOSE DE ALENCAR, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 126,
          "rentValue": 3950,
          "imageUrl": "assets/img/properties/house2.jpg",
          "amenities": [
            "Kitchen",
            "Intercom",
            "Laundry area"
          ],
          "description": "Casa com 3 Quartos para alugar, 126m² em JOSE DE ALENCAR, Fortaleza",
          "coordinates": {
            "lat": -3.8061471,
            "lng": -38.4714507
          }
        },
        {
          "address": "Rua (St) Capitão Clóvis Maia, 47 - Alto da Balança, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 41,
          "rentValue": 1750,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Kitchen",
            "Laundry area"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 41m² em Alto da Balança, Fortaleza",
          "coordinates": {
            "lat": -3.7689883,
            "lng": -38.5168621
          }
        },
        {
          "address": "Lagoa Sapiranga Coité, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 8,
          "rentValue": 2550,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 8m² em Lagoa Sapiranga Coité, Fortaleza",
          "coordinates": {
            "lat": -3.7952935,
            "lng": -38.4757701
          }
        },
        {
          "address": "Rua (St) Doutor João Amora, 504 - Manuel Sátiro, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 90,
          "rentValue": 3150,
          "imageUrl": "assets/img/properties/house2.jpg",
          "amenities": [],
          "description": "Casa com 3 Quartos para alugar, 90m² em Manuel Sátiro, Fortaleza",
          "coordinates": {
            "lat": -3.7998042,
            "lng": -38.5787511
          }
        },
        {
          "address": "Rua (St) Leonardo Mota, 400 - Meireles, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 167,
          "rentValue": 4300,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [],
          "description": "Apartamento com 3 Quartos para alugar, 167m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7303397,
            "lng": -38.4944757
          }
        },
        {
          "address": "Rua (St) Monsenhor Bruno, 1590 - Aldeota, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 35,
          "rentValue": 3500,
          "imageUrl": "",
          "amenities": [
            "Kitchen"
          ],
          "description": "Kitnet com 1 Quarto para alugar, 35m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7361825,
            "lng": -38.5107553
          }
        },
        {
          "address": "Avenida (Ave) Geógrafo Antônio Ribeiro Zaranza, 2598 - Cajazeiras, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 44,
          "rentValue": 4950,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Barbecue grill",
            "Garage",
            "Playground",
            "Party room"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 44m² em Cajazeiras, Fortaleza",
          "coordinates": {
            "lat": -3.8082689,
            "lng": -38.5132471
          }
        },
        {
          "address": "Rua (St) Marechal Deodoro, 535 - Benfica, Fortaleza - CE",
          "bedrooms": 5,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 153,
          "rentValue": 3800,
          "imageUrl": "assets/img/properties/house1.jpg",
          "amenities": [
            "Balcony",
            "Garage",
            "Laundry area"
          ],
          "description": "Casa com 5 Quartos para alugar, 153m² em Benfica, Fortaleza",
          "coordinates": {
            "lat": -3.7403257,
            "lng": -38.53532970000001
          }
        },
        {
          "address": "Rua (St) Tibúrcio Cavalcanti, 2111 - Dionísio Torres, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 100,
          "rentValue": 1300,
          "imageUrl": "assets/img/properties/house4.jpg",
          "amenities": [
            "Laundry area",
            "Blindex box",
            "Intercom"
          ],
          "description": "Casa com 3 Quartos para alugar, 100m² em Dionísio Torres, Fortaleza",
          "coordinates": {
            "lat": -3.7434415,
            "lng": -38.5048242
          }
        },
        {
          "address": "Avenida (Ave) Dom Luís, 500 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 39,
          "rentValue": 4300,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 39m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7340637,
            "lng": -38.49696480000001
          }
        },
        {
          "address": "Avenida (Ave) Desembargador Moreira, 1701 - Meireles, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 28,
          "rentValue": 2700,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Prédio Comercial para alugar, 28m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7411064,
            "lng": -38.4996512
          }
        },
        {
          "address": "Avenida (Ave) Dioguinho, 4200 - Praia do Futuro, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 61,
          "rentValue": 1300,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [],
          "description": "Apartamento com 1 Quarto para alugar, 61m² em Praia do Futuro, Fortaleza",
          "coordinates": {
            "lat": -3.7492867,
            "lng": -38.44709840000001
          }
        },
        {
          "address": "Rua (St) José Vilar - Dionísio Torres, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 31,
          "rentValue": 4000,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Garage",
            "Laundry area",
            "Office"
          ],
          "description": "Sala Comercial para alugar, 31m² em Dionísio Torres, Fortaleza",
          "coordinates": {
            "lat": -3.7474473,
            "lng": -38.5084379
          }
        },
        {
          "address": "Rua (St) Tomás Lopes, 113 - Praia de Iracema, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 33,
          "rentValue": 750,
          "imageUrl": "",
          "amenities": [],
          "description": "Kitnet com 1 Quarto para alugar, 33m² em Praia de Iracema, Fortaleza",
          "coordinates": {
            "lat": -3.7214121,
            "lng": -38.5155561
          }
        },
        {
          "address": "Rua (St) Ministro Eduardo Ellery Barreira, 60 - Guararapes, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 110,
          "rentValue": 3650,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [],
          "description": "Apartamento com 3 Quartos para alugar, 110m² em Guararapes, Fortaleza",
          "coordinates": {
            "lat": -3.7612735,
            "lng": -38.4840272
          }
        },
        {
          "address": "Rua (St) Benjamim Brasil, 2150 - Mondubim, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 420,
          "rentValue": 700,
          "imageUrl": "assets/img/properties/storage2.jpg",
          "amenities": [
            "Parking lot",
            "Ramp",
            "Vestiário",
            "Kitchen"
          ],
          "description": "Galpão para alugar, 420m² em Mondubim, Fortaleza",
          "coordinates": {
            "lat": -3.808796799999999,
            "lng": -38.5577412
          }
        },
        {
          "address": "Rua (St) Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 76,
          "rentValue": 650,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 76m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "address": "Avenida (Ave) Visconde do Rio Branco, 1725 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 58,
          "rentValue": 1850,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 58m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7359587,
            "lng": -38.5240499
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 42,
          "rentValue": 4950,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Rua (St) Luiza Miranda Coelho, 1130 - Engenheiro Luciano Cavalcante, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 75,
          "rentValue": 1550,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Pool",
            "Mobiliado",
            "Elevator",
            "Gated community",
            "Balcony"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 75m² em Engenheiro Luciano Cavalcante, Fortaleza",
          "coordinates": {
            "lat": -3.7752479,
            "lng": -38.4867463
          }
        },
        {
          "address": "Avenida (Ave) José Bastos, 4140 - Rodolfo Teófilo, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 32,
          "rentValue": 3750,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 32m² em Rodolfo Teófilo, Fortaleza",
          "coordinates": {
            "lat": -3.7536176,
            "lng": -38.5543672
          }
        },
        {
          "address": "Montese, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 179,
          "rentValue": 2850,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 179m² em Montese, Fortaleza",
          "coordinates": {
            "lat": -3.7683772,
            "lng": -38.5517784
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 42,
          "rentValue": 4350,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Rua (St) Padre Valdevino, 1777 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 58,
          "rentValue": 4300,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 58m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.741841,
            "lng": -38.50844319999999
          }
        },
        {
          "address": "Rua (St) Joaquim Manuel de Macêdo, 1768 - Henrique Jorge, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 50,
          "rentValue": 2550,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Gated community",
            "Laundry area",
            "Perto de vias de acesso"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 50m² em Henrique Jorge, Fortaleza",
          "coordinates": {
            "lat": -3.7675156,
            "lng": -38.587034
          }
        },
        {
          "address": "Rua (St) Francisco Nogueira, 340 - Cajazeiras, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 70,
          "rentValue": 1700,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Garage",
            "Air conditioning",
            "Garden",
            "Laundry area"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 70m² em Cajazeiras, Fortaleza",
          "coordinates": {
            "lat": -3.801292,
            "lng": -38.5057423
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 30,
          "rentValue": 1100,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "address": "Rua (St) Antônio Atualpa Rodrigues, 100 - Praia do Futuro II, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 90,
          "rentValue": 1950,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Pool",
            "Mobiliado",
            "Barbecue grill",
            "Elevator",
            "Gated community"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 90m² em Praia do Futuro II, Fortaleza",
          "coordinates": {
            "lat": -3.749558,
            "lng": -38.4483997
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 1235 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 30,
          "rentValue": 2100,
          "imageUrl": "",
          "amenities": [],
          "description": "Kitnet para alugar, 30m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7255337,
            "lng": -38.5381513
          }
        },
        {
          "address": "Avenida (Ave) Dom Luís, 500 - Meireles, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 84,
          "rentValue": 1900,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "",
          "coordinates": {
            "lat": -3.7356097,
            "lng": -38.4909979
          }
        },
        {
          "address": "Rua (St) Barão Aquiraz, 120 - Messejana, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 45,
          "rentValue": 2550,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [],
          "description": "Apartamento com 2 Quartos para alugar, 45m² em Messejana, Fortaleza",
          "coordinates": {
            "lat": -3.832464,
            "lng": -38.4901051
          }
        },
        {
          "address": "Rua (St) Delmiro de Farias, 1741 - Rodolfo Teófilo, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 425,
          "rentValue": 4500,
          "imageUrl": "assets/img/properties/storage2.jpg",
          "amenities": [],
          "description": "Galpão para alugar, 425m² em Rodolfo Teófilo, Fortaleza",
          "coordinates": {
            "lat": -3.7455877,
            "lng": -38.5529949
          }
        },
        {
          "address": "Rua (St) Tenente Moacir Matos, 55 - Montese, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 72,
          "rentValue": 2550,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Gated community",
            "Kitchen",
            "Sports court",
            "Party room",
            "Laundry area"
          ],
          "description": "Apartamento com 2 Quartos para venda ou aluguel, 72m² em Montese, Fortaleza",
          "coordinates": {
            "lat": -3.7638542,
            "lng": -38.5575775
          }
        },
        {
          "address": "Avenida (Ave) Doutor Theberge, 1859 - Presidente Kennedy, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 108,
          "rentValue": 4550,
          "imageUrl": "assets/img/properties/house1.jpg",
          "amenities": [
            "Air conditioning",
            "Kitchen",
            "Cable TV",
            "Laundry area"
          ],
          "description": "Casa com 2 Quartos para alugar, 108m² em Presidente Kennedy, Fortaleza",
          "coordinates": {
            "lat": -3.7170836,
            "lng": -38.5656666
          }
        },
        {
          "address": "Rua (St) Anário Braga, 100 - Antônio Bezerra, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 71,
          "rentValue": 3900,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Garage",
            "Kitchen"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 71m² em Antônio Bezerra, Fortaleza",
          "coordinates": {
            "lat": -3.7382683,
            "lng": -38.58754589999999
          }
        },
        {
          "address": "Avenida (Ave) Desembargador Moreira, 2020 - Aldeota, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 29,
          "rentValue": 3400,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Elevator",
            "24-hour security"
          ],
          "description": "Sala Comercial com 1 Quarto para alugar, 29m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7428401,
            "lng": -38.5008998
          }
        },
        {
          "address": "Rua (St) do Rosário, 77 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 60,
          "rentValue": 2000,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 60m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.728418999999999,
            "lng": -38.5262788
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 26,
          "rentValue": 1300,
          "imageUrl": "assets/img/properties/ground3.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "address": "Avenida (Ave) Beira Mar, 4444 - Mucuripe, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 40,
          "rentValue": 4550,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Elevator",
            "Laundry area",
            "Kitchen",
            "Intercom"
          ],
          "description": "Apartamento com 1 Quarto para alugar, 40m² em Mucuripe, Fortaleza",
          "coordinates": {
            "lat": -3.722651,
            "lng": -38.4814927
          }
        },
        {
          "address": "Rua (St) Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 38,
          "rentValue": 2800,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 253,
          "rentValue": 1150,
          "imageUrl": "assets/img/properties/ground3.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 20 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 60,
          "rentValue": 2600,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 60m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "address": "Avenida (Ave) Barão de Studart, 2358 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 33,
          "rentValue": 1900,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 33m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7441496,
            "lng": -38.5096904
          }
        },
        {
          "address": "Rua (St) Manuel Teixeira, 131 - Cambeba, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 51,
          "rentValue": 1600,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [],
          "description": "Apartamento com 2 Quartos para alugar, 51m² em Cambeba, Fortaleza",
          "coordinates": {
            "lat": -3.8157835,
            "lng": -38.4782644
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 1235 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 30,
          "rentValue": 2550,
          "imageUrl": "",
          "amenities": [],
          "description": "Kitnet para alugar, 30m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7255337,
            "lng": -38.5381513
          }
        },
        {
          "address": "Rua (St) Luiza Guimarães, 709 - Lagoa Redonda, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 83,
          "rentValue": 1700,
          "imageUrl": "assets/img/properties/house4.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Balcony"
          ],
          "description": "Casa de Condomínio com 3 Quartos para alugar, 83m² em Lagoa Redonda, Fortaleza",
          "coordinates": {
            "lat": -3.833829499999999,
            "lng": -38.4625151
          }
        },
        {
          "address": "Rua (St) Bento Albuquerque, 1210 - Cocó, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 127,
          "rentValue": 4950,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Elevator",
            "Gated community",
            "Garden",
            "24-hour concierge"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 127m² em Cocó, Fortaleza",
          "coordinates": {
            "lat": -3.7455203,
            "lng": -38.4779449
          }
        },
        {
          "address": "Rua (St) José Cavalcante Sobrinho, 120 - Messejana, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 48,
          "rentValue": 3900,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Air conditioning",
            "Laundry area",
            "Playground"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 48m² em Messejana, Fortaleza",
          "coordinates": {
            "lat": -3.8364575,
            "lng": -38.4868426
          }
        },
        {
          "address": "Avenida (Ave) Rui Barbosa, 2694 - Joaquim Tavora, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 35,
          "rentValue": 1750,
          "imageUrl": "",
          "amenities": [
            "Kitchen",
            "Square"
          ],
          "description": "Kitnet com 1 Quarto para alugar, 35m² em Joaquim Tavora, Fortaleza",
          "coordinates": {
            "lat": -3.7459977,
            "lng": -38.5128437
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 128,
          "rentValue": 2950,
          "imageUrl": "assets/img/properties/ground1.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "address": "Avenida (Ave) Trajano de Medeiros, 1970 - De Lourdes, Fortaleza - CE",
          "bedrooms": 5,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 880,
          "rentValue": 3050,
          "imageUrl": "assets/img/properties/house3.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Balcony",
            "Air conditioning"
          ],
          "description": "Casa com 5 Quartos para alugar, 880m² em De Lourdes, Fortaleza",
          "coordinates": {
            "lat": -3.7360977,
            "lng": -38.462272
          }
        },
        {
          "address": "Rua (St) A do Loteamento Residencial Célio Gurgel, 1697 - Barroso, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 42,
          "rentValue": 2350,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Garage"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 42m² em Barroso, Fortaleza",
          "coordinates": {
            "lat": -3.821732,
            "lng": -38.5817975
          }
        },
        {
          "address": "Rua (St) João Cordeiro, 688 - Praia de Iracema, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 80,
          "rentValue": 1050,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Laundry area"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 80m² em Praia de Iracema, Fortaleza",
          "coordinates": {
            "lat": -3.7260995,
            "lng": -38.513464
          }
        },
        {
          "address": "Avenida (Ave) Bernardo Manuel, 8600 - Itaperi, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 47,
          "rentValue": 2300,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Gated community",
            "Kitchen"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 47m² em Itaperi, Fortaleza",
          "coordinates": {
            "lat": -3.794945999999999,
            "lng": -38.5505012
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 30,
          "rentValue": 2400,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "address": "Avenida (Ave) Dom Manuel, 277 - Centro, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 60,
          "rentValue": 3950,
          "imageUrl": "assets/img/properties/house4.jpg",
          "amenities": [],
          "description": "Casa com 2 Quartos para alugar, 60m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7266173,
            "lng": -38.5203919
          }
        },
        {
          "address": "Rua (St) do Rosário, 119 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 70,
          "rentValue": 2800,
          "imageUrl": "assets/img/properties/storage3.jpg",
          "amenities": [],
          "description": "Galpão para alugar, 70m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.728648,
            "lng": -38.5262544
          }
        },
        {
          "address": "Rua (St) Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 31,
          "rentValue": 800,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 5335 - Papicu, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 30,
          "rentValue": 2350,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 30m² em Papicu, Fortaleza",
          "coordinates": {
            "lat": -3.7407389,
            "lng": -38.48346919999999
          }
        },
        {
          "address": "Rua (St) Monsenhor Bruno, 1153 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 35,
          "rentValue": 2700,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 35m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7332159,
            "lng": -38.5094206
          }
        },
        {
          "address": "Rua (St) Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 31,
          "rentValue": 4150,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "address": "Rua (St) Bento Albuquerque, 2158 - Cocó, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 126,
          "rentValue": 4900,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Laundry area",
            "Playground",
            "Sports court"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 126m² em Cocó, Fortaleza",
          "coordinates": {
            "lat": -3.7481744,
            "lng": -38.4703862
          }
        },
        {
          "address": "Avenida (Ave) Recreio, 1870 - Lagoa Redonda, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 69,
          "rentValue": 3550,
          "imageUrl": "assets/img/properties/house1.jpg",
          "amenities": [
            "Barbecue grill",
            "Gated community",
            "Laundry area",
            "Kitchen"
          ],
          "description": "Casa de Condomínio com 2 Quartos para venda ou aluguel, 69m² em Lagoa Redonda, Fortaleza",
          "coordinates": {
            "lat": -3.8183481,
            "lng": -38.4507
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 128,
          "rentValue": 1800,
          "imageUrl": "assets/img/properties/ground2.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "address": "Avenida (Ave) Engenheiro Alberto Sá - Papicu, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 25,
          "rentValue": 2500,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 25m² em Papicu, Fortaleza",
          "coordinates": {
            "lat": -3.7342568,
            "lng": -38.4769619
          }
        },
        {
          "address": "Rua (St) Zuca Accioly, 1101 - Manoel Dias Branco, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 120,
          "rentValue": 1950,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Gated community",
            "Balcony"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 120m² em Manoel Dias Branco, Fortaleza",
          "coordinates": {
            "lat": -3.754632999999999,
            "lng": -38.468151
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 42,
          "rentValue": 1350,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 30,
          "rentValue": 1450,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "address": "Rua (St) Doutor Gilberto Studart, 2155 - Papicu, Fortaleza - CE",
          "bedrooms": 4,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 210,
          "rentValue": 3700,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Balcony",
            "Kitchen",
            "Pool",
            "Laundry area"
          ],
          "description": "Apartamento com 4 Quartos para alugar, 210m² em Papicu, Fortaleza",
          "coordinates": {
            "lat": -3.7472002,
            "lng": -38.4690189
          }
        },
        {
          "address": "Rua (St) Monsenhor Dantas, 100 - Jacarecanga, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 65,
          "rentValue": 5000,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Barbecue grill",
            "Elevator",
            "Gated community",
            "Balcony",
            "Gym"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 65m² em Jacarecanga, Fortaleza",
          "coordinates": {
            "lat": -3.719867,
            "lng": -38.5454539
          }
        },
        {
          "address": "Rua (St) República do Líbano, 1330 - Varjota, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 107,
          "rentValue": 2250,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Mobiliado",
            "Playground",
            "Gourmet balcony",
            "Party room"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 107m² em Varjota, Fortaleza",
          "coordinates": {
            "lat": -3.733988999999999,
            "lng": -38.4878053
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 268,
          "rentValue": 3750,
          "imageUrl": "assets/img/properties/ground1.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "address": "Rua (St) José Cavalcante Sobrinho, 120 - Messejana, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 52,
          "rentValue": 3150,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [],
          "description": "Apartamento com 2 Quartos para alugar, 52m² em Messejana, Fortaleza",
          "coordinates": {
            "lat": -3.8364575,
            "lng": -38.4868426
          }
        },
        {
          "address": "Avenida (Ave) Professor Gomes de Matos, 661 B - Parreão, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 100,
          "rentValue": 2500,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [
            "Cup",
            "Laundry area"
          ],
          "description": "Ponto Comercial para alugar, 100m² em Parreão, Fortaleza",
          "coordinates": {
            "lat": -3.7592447,
            "lng": -38.5438087
          }
        },
        {
          "address": "Rua (St) Francisco Glicério, 742 - Maraponga, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 30,
          "rentValue": 1100,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [],
          "description": "Apartamento com 1 Quarto para alugar, 30m² em Maraponga, Fortaleza",
          "coordinates": {
            "lat": -3.7961716,
            "lng": -38.5680381
          }
        },
        {
          "address": "Dionísio Torres, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 95,
          "rentValue": 1450,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 95m² em Dionísio Torres, Fortaleza",
          "coordinates": {
            "lat": -3.7493092,
            "lng": -38.5025502
          }
        },
        {
          "address": "Rua (St) Floriano Peixoto, 2100 - Centro, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 30,
          "rentValue": 4250,
          "imageUrl": "",
          "amenities": [
            "Laundry area"
          ],
          "description": "Kitnet com 1 Quarto para alugar, 30m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7405483,
            "lng": -38.53170009999999
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 6740 - Cocó, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 55,
          "rentValue": 2350,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [
            "Gated community",
            "Elevator"
          ],
          "description": "Sala Comercial para venda ou aluguel, 55m² em Cocó, Fortaleza",
          "coordinates": {
            "lat": -3.744682199999999,
            "lng": -38.4730944
          }
        },
        {
          "address": "Parque Manibura, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 134,
          "rentValue": 3050,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Kitchen",
            "Laundry area"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 134m² em Parque Manibura, Fortaleza",
          "coordinates": {
            "lat": -3.7912376,
            "lng": -38.4877551
          }
        },
        {
          "address": "Rua (St) Silva Jatahy, 600 - Meireles, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 58,
          "rentValue": 2200,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Gated community",
            "Gym"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 58m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7275791,
            "lng": -38.4986979
          }
        },
        {
          "address": "Rua (St) Franco Rocha, 477 - Henrique Jorge, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 45,
          "rentValue": 2200,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Gated community",
            "Electronic gate",
            "American kitchen"
          ],
          "description": "Apartamento com 1 Quarto para alugar, 45m² em Henrique Jorge, Fortaleza",
          "coordinates": {
            "lat": -3.7547539,
            "lng": -38.58065089999999
          }
        },
        {
          "address": "Rua (St) Guilherme Rocha, 1299 - Centro, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 53,
          "rentValue": 4900,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [],
          "description": "Apartamento com 2 Quartos para alugar, 53m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.723799999999999,
            "lng": -38.53774
          }
        },
        {
          "address": "Avenida (Ave) Padre Antônio Tomás, 2420 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 30,
          "rentValue": 1250,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [
            "Elevator"
          ],
          "description": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7433887,
            "lng": -38.4905038
          }
        },
        {
          "address": "Rua (St) José Vilar, 2350 - Dionísio Torres, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 306,
          "rentValue": 1300,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [],
          "description": "Apartamento com 3 Quartos para alugar, 306m² em Dionísio Torres, Fortaleza",
          "coordinates": {
            "lat": -3.7449555,
            "lng": -38.5077635
          }
        },
        {
          "address": "Rodovia BR-116, 5850 - Cajazeiras, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 30,
          "rentValue": 750,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 30m² em Cajazeiras, Fortaleza",
          "coordinates": {
            "lat": -3.7727805,
            "lng": -38.5166922
          }
        },
        {
          "address": "Rua (St) Fiscal Vieira, 3575 - Joaquim Tavora, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 90,
          "rentValue": 4500,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 90m² em Joaquim Tavora, Fortaleza",
          "coordinates": {
            "lat": -3.752580999999999,
            "lng": -38.5160321
          }
        },
        {
          "address": "Rua (St) Paulo Firmeza, 685 - Tauape, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 180,
          "rentValue": 3950,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 180m² em Tauape, Fortaleza",
          "coordinates": {
            "lat": -3.7570709,
            "lng": -38.5133484
          }
        },
        {
          "address": "Rua (St) Padre Valdevino, 1138 - Joaquim Tavora, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 30,
          "rentValue": 1550,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [
            "Alarm system"
          ],
          "description": "Ponto Comercial com 1 Quarto para alugar, 30m² em Joaquim Tavora, Fortaleza",
          "coordinates": {
            "lat": -3.7401053,
            "lng": -38.5141392
          }
        },
        {
          "address": "Rua (St) Pastor Samuel Munguba, 1424 - Rodolfo Teófilo, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 120,
          "rentValue": 3800,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 120m² em Rodolfo Teófilo, Fortaleza",
          "coordinates": {
            "lat": -3.7502822,
            "lng": -38.5519125
          }
        },
        {
          "address": "Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 27,
          "rentValue": 3900,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para venda ou aluguel, 27m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7329688,
            "lng": -38.5264661
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1267 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 25,
          "rentValue": 4000,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 25m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7313778,
            "lng": -38.5121337
          }
        },
        {
          "address": "Avenida (Ave) Farias Brito, 160 - Varjota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 36,
          "rentValue": 800,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 36m² em Varjota, Fortaleza",
          "coordinates": {
            "lat": -3.7360992,
            "lng": -38.4875178
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 300,
          "rentValue": 3300,
          "imageUrl": "assets/img/properties/ground3.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "address": "Rua (St) Gustavo Braga, 425 - Rodolfo Teófilo, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 52,
          "rentValue": 1900,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 52m² em Rodolfo Teófilo, Fortaleza",
          "coordinates": {
            "lat": -3.7485862,
            "lng": -38.555394
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 5335 - Papicu, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 30,
          "rentValue": 3900,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 30m² em Papicu, Fortaleza",
          "coordinates": {
            "lat": -3.7407389,
            "lng": -38.48346919999999
          }
        },
        {
          "address": "Avenida (Ave) Antônio Sales, 1950 - Dionísio Torres, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 28,
          "rentValue": 2550,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 28m² em Dionísio Torres, Fortaleza",
          "coordinates": {
            "lat": -3.7442774,
            "lng": -38.5070424
          }
        },
        {
          "address": "Avenida (Ave) Senador Virgílio Távora, 1701 - Meireles, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 35,
          "rentValue": 3650,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 35m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7403814,
            "lng": -38.4939797
          }
        },
        {
          "address": "Rua (St) Crisanto Arruda, 752 - Passaré, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 48,
          "rentValue": 1450,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Pool",
            "Mobiliado",
            "Barbecue grill",
            "Elevator",
            "Gym"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 48m² em Passaré, Fortaleza",
          "coordinates": {
            "lat": -3.815880199999999,
            "lng": -38.5241305
          }
        },
        {
          "address": "Rua (St) Pereira Filgueiras, 555 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 45,
          "rentValue": 1900,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 45m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7266715,
            "lng": -38.5176522
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 20 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 60,
          "rentValue": 3850,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 60m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "address": "Rua (St) João Cordeiro, 1306 - Aldeota, Fortaleza - CE",
          "bedrooms": 7,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 350,
          "rentValue": 1950,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [
            "Laundry area",
            "Parking lot",
            "Office",
            "Deposit"
          ],
          "description": "Imóvel Comercial com 7 Quartos para alugar, 350m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7317344,
            "lng": -38.5152736
          }
        },
        {
          "address": "Avenida (Ave) Professor Gomes de Matos, 625 - Montese, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 540,
          "rentValue": 1400,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 540m² em Montese, Fortaleza",
          "coordinates": {
            "lat": -3.7590998,
            "lng": -38.5436821
          }
        },
        {
          "address": "Rua (St) Alberto Magno, 243 - Montese, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 120,
          "rentValue": 2200,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 120m² em Montese, Fortaleza",
          "coordinates": {
            "lat": -3.7585526,
            "lng": -38.5442034
          }
        },
        {
          "address": "Jangurussu, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 9,
          "rentValue": 4100,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Air conditioning"
          ],
          "description": "Sala Comercial para alugar, 9m² em Jangurussu, Fortaleza",
          "coordinates": {
            "lat": -3.8476311,
            "lng": -38.5150619
          }
        },
        {
          "address": "Rua (St) Mário Alencar Araripe, 1545 - Agua Fria, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 201,
          "rentValue": 3350,
          "imageUrl": "assets/img/properties/house1.jpg",
          "amenities": [
            "Laundry area"
          ],
          "description": "Casa com 3 Quartos para alugar, 201m² em Agua Fria, Fortaleza",
          "coordinates": {
            "lat": -3.802232899999999,
            "lng": -38.4775736
          }
        },
        {
          "address": "Rua (St) Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 31,
          "rentValue": 1500,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 30,
          "rentValue": 1400,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "address": "Avenida (Ave) Washington Soares, 1400 - Engenheiro Luciano Cavalcante, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 76,
          "rentValue": 3550,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [
            "Kitchen",
            "24-hour security",
            "Garden",
            "Watchman"
          ],
          "description": "Sala Comercial para alugar, 76m² em Engenheiro Luciano Cavalcante, Fortaleza",
          "coordinates": {
            "lat": -3.7712784,
            "lng": -38.4825694
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 30,
          "rentValue": 1450,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "address": "Avenida (Ave) Bezerra de Menezes, 1351 - Sao Gerardo, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 29,
          "rentValue": 2950,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [
            "Serviços públicos essenciais",
            "Gated community"
          ],
          "description": "Sala Comercial para alugar, 29m² em Sao Gerardo, Fortaleza",
          "coordinates": {
            "lat": -3.7343863,
            "lng": -38.556772
          }
        },
        {
          "address": "Rua (St) Visconde de Mauá, 1661 - Aldeota, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 95,
          "rentValue": 700,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Elevator",
            "Gated community",
            "Balcony",
            "Laundry area"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 95m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7414715,
            "lng": -38.5009113
          }
        },
        {
          "address": "Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 400,
          "rentValue": 4800,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Intercom"
          ],
          "description": "Imóvel Comercial para venda ou aluguel, 400m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.740179299999999,
            "lng": -38.49966209999999
          }
        },
        {
          "address": "Rua (St) Gonçalves Ledo, 177 - Praia de Iracema, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 27,
          "rentValue": 950,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [
            "Kitchen"
          ],
          "description": "Ponto Comercial para alugar, 27m² em Praia de Iracema, Fortaleza",
          "coordinates": {
            "lat": -3.7254872,
            "lng": -38.5141632
          }
        },
        {
          "address": "Avenida (Ave) Independência, 1546 - Vila Velha, Fortaleza - CE",
          "area": 412,
          "rentValue": 4950,
          "imageUrl": "assets/img/properties/ground1.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar, 412m² em Vila Velha, Fortaleza",
          "coordinates": {
            "lat": -3.725621899999999,
            "lng": -38.5944039
          }
        },
        {
          "address": "Rua (St) Senador Pompeu, 649 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 23,
          "rentValue": 2800,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Kitchen",
            "24-hour security",
            "Elevator",
            "Watchman"
          ],
          "description": "Sala Comercial para alugar, 23m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724452299999999,
            "lng": -38.5287254
          }
        },
        {
          "address": "Rua (St) Capitão Olavo, 1093 - Aerolândia, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 48,
          "rentValue": 3150,
          "imageUrl": "assets/img/properties/house3.jpg",
          "amenities": [
            "Kitchen",
            "Laundry area"
          ],
          "description": "Casa com 1 Quarto para alugar, 48m² em Aerolândia, Fortaleza",
          "coordinates": {
            "lat": -3.7718236,
            "lng": -38.514652
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 42,
          "rentValue": 3800,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 30,
          "rentValue": 1750,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "address": "Rua (St) Equador, 1198 - Parangaba, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 58,
          "rentValue": 2100,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Gym",
            "Garden",
            "Playground"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 58m² em Parangaba, Fortaleza",
          "coordinates": {
            "lat": -3.7780885,
            "lng": -38.5539582
          }
        },
        {
          "address": "Rua (St) Capitão Américo Menezes, 277 - Parangaba, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 83,
          "rentValue": 1150,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Balcony",
            "Garage",
            "Kitchen"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 83m² em Parangaba, Fortaleza",
          "coordinates": {
            "lat": -3.7821133,
            "lng": -38.5678687
          }
        },
        {
          "address": "Rua (St) Doutor Joaquim Bento, 207 - Messejana, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 840,
          "rentValue": 2800,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 840m² em Messejana, Fortaleza",
          "coordinates": {
            "lat": -3.829112,
            "lng": -38.489654
          }
        },
        {
          "address": "Rua (St) Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 38,
          "rentValue": 4650,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 39,
          "rentValue": 2800,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 39m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Rua (St) Desembargador Faustino de Albuquerque, 781 - Cidade dos Funcionários, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 65,
          "rentValue": 3400,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 65m² em Cidade dos Funcionários, Fortaleza",
          "coordinates": {
            "lat": -3.786462499999999,
            "lng": -38.4994675
          }
        },
        {
          "address": "Rua (St) Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 31,
          "rentValue": 3100,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "address": "Avenida (Ave) Dom Manuel, 277 - Centro, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 51,
          "rentValue": 3250,
          "imageUrl": "assets/img/properties/house4.jpg",
          "amenities": [],
          "description": "Casa com 2 Quartos para alugar, 51m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7266173,
            "lng": -38.5203919
          }
        },
        {
          "address": "Rua (St) Costa Sousa, 146 - Benfica, Fortaleza - CE",
          "area": 19,
          "rentValue": 4000,
          "imageUrl": "assets/img/properties/ground1.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar, 19m² em Benfica, Fortaleza",
          "coordinates": {
            "lat": -3.7440145,
            "lng": -38.5401311
          }
        },
        {
          "address": "Rua (St) Monsenhor Bruno, 1153 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 35,
          "rentValue": 1600,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 35m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7332159,
            "lng": -38.5094206
          }
        },
        {
          "address": "Rua (St) Engenheiro Antônio Ferreira Antero, 160 - Parque Manibura, Fortaleza - CE",
          "bedrooms": 4,
          "bathrooms": 3,
          "parkingSpaces": 1,
          "area": 220,
          "rentValue": 2200,
          "imageUrl": "assets/img/properties/house3.jpg",
          "amenities": [],
          "description": "Casa com 4 Quartos para alugar, 220m² em Parque Manibura, Fortaleza",
          "coordinates": {
            "lat": -3.7887442,
            "lng": -38.4843307
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 42,
          "rentValue": 2400,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 61,
          "rentValue": 1950,
          "imageUrl": "assets/img/properties/ground1.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 30,
          "rentValue": 900,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "address": "Rua (St) Vilebaldo Aguiar, 0 - Manoel Dias Branco, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 29,
          "rentValue": 4400,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 29m² em Manoel Dias Branco, Fortaleza",
          "coordinates": {
            "lat": -3.7411057,
            "lng": -38.4861231
          }
        },
        {
          "address": "Avenida (Ave) Senador Virgílio Távora, 1701 - Meireles, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 35,
          "rentValue": 1250,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 35m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7403814,
            "lng": -38.4939797
          }
        },
        {
          "address": "Avenida (Ave) Juscelino Kubitschek, 4950 - Passaré, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 48,
          "rentValue": 2450,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Playground",
            "Laundry area",
            "Adult pool",
            "Barbecue grill",
            "Pool"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 48m² em Passaré, Fortaleza",
          "coordinates": {
            "lat": -3.8202034,
            "lng": -38.5346914
          }
        },
        {
          "address": "Rua (St) Senador Alencar, 1649 - Centro, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 40,
          "rentValue": 2250,
          "imageUrl": "",
          "amenities": [
            "Gated community",
            "Electronic gate",
            "24-hour concierge"
          ],
          "description": "Kitnet com 1 Quarto para alugar, 40m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7211643,
            "lng": -38.5402725
          }
        },
        {
          "address": "Parangaba, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 13,
          "rentValue": 900,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 13m² em Parangaba, Fortaleza",
          "coordinates": {
            "lat": -3.7771358,
            "lng": -38.5620583
          }
        },
        {
          "address": "Avenida (Ave) João Pessoa, 0 - Damas, Fortaleza - CE",
          "area": 2077,
          "rentValue": 950,
          "imageUrl": "assets/img/properties/ground3.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar, 2077m² em Damas, Fortaleza",
          "coordinates": {
            "lat": -3.7674607,
            "lng": -38.5598103
          }
        },
        {
          "address": "Rua (St) A do Loteamento Residencial Célio Gurgel, 1697 - Barroso, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 42,
          "rentValue": 650,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Garage"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 42m² em Barroso, Fortaleza",
          "coordinates": {
            "lat": -3.821732,
            "lng": -38.5817975
          }
        },
        {
          "address": "Rua (St) Afonso Pena, 99 - Edson Queiroz, Fortaleza - CE",
          "area": 1040,
          "rentValue": 3250,
          "imageUrl": "assets/img/properties/ground3.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar, 1040m² em Edson Queiroz, Fortaleza",
          "coordinates": {
            "lat": -3.791358899999999,
            "lng": -38.4629978
          }
        },
        {
          "address": "Rua (St) do Pocinho, 30 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 37,
          "rentValue": 1250,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 37m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7282174,
            "lng": -38.5254514
          }
        },
        {
          "address": "Rua (St) 08H, 201 - Prefeito José Walter, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 60,
          "rentValue": 2450,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Garage",
            "Playground",
            "Party room"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 60m² em Prefeito José Walter, Fortaleza",
          "coordinates": {
            "lat": -3.8324922,
            "lng": -38.5529854
          }
        },
        {
          "address": "Rua (St) Fiuza de Pontes, 191 - Centro, Fortaleza - CE",
          "bedrooms": 4,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 284,
          "rentValue": 1250,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Gym",
            "Garden",
            "Laundry area"
          ],
          "description": "Apartamento com 4 Quartos para alugar, 284m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7333401,
            "lng": -38.5172221
          }
        },
        {
          "address": "Avenida (Ave) Professor Gomes de Matos, 648 - Bom Futuro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 25,
          "rentValue": 2450,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 25m² em Bom Futuro, Fortaleza",
          "coordinates": {
            "lat": -3.7589887,
            "lng": -38.54405980000001
          }
        },
        {
          "address": "Rua (St) Martinho Rodrigues, 510 - Fátima, Fortaleza - CE",
          "area": 547,
          "rentValue": 1850,
          "imageUrl": "assets/img/properties/ground1.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar, 547m² em Fátima, Fortaleza",
          "coordinates": {
            "lat": -3.7561814,
            "lng": -38.5282959
          }
        },
        {
          "address": "Rua (St) 1010, 56 - Conjunto Ceará, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 80,
          "rentValue": 2400,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Kitchen",
            "Laundry area"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 80m² em Conjunto Ceará, Fortaleza",
          "coordinates": {
            "lat": -3.771626899999999,
            "lng": -38.61814
          }
        },
        {
          "address": "Rua (St) Mário Mamede, 1214 - Fátima, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 100,
          "rentValue": 3950,
          "imageUrl": "assets/img/properties/house4.jpg",
          "amenities": [
            "Garage",
            "Perto de vias de acesso"
          ],
          "description": "Casa com 2 Quartos para alugar, 100m² em Fátima, Fortaleza",
          "coordinates": {
            "lat": -3.749909,
            "lng": -38.53058480000001
          }
        },
        {
          "address": "Avenida (Ave) Doutor Silas Munguba, 728 - Itaperi, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 60,
          "rentValue": 2850,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [],
          "description": "Apartamento com 2 Quartos para alugar, 60m² em Itaperi, Fortaleza",
          "coordinates": {
            "lat": -3.7804924,
            "lng": -38.5592508
          }
        },
        {
          "address": "Avenida (Ave) da Saudade, 3251 - Passaré, Fortaleza - CE",
          "area": 5454,
          "rentValue": 4500,
          "imageUrl": "assets/img/properties/ground2.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar, 5454m² em Passaré, Fortaleza",
          "coordinates": {
            "lat": -3.8153585,
            "lng": -38.5354956
          }
        },
        {
          "address": "Rua (St) Sabino Borges, 66 - Aerolândia, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 22,
          "rentValue": 1900,
          "imageUrl": "",
          "amenities": [],
          "description": "Kitnet com 1 Quarto para alugar, 22m² em Aerolândia, Fortaleza",
          "coordinates": {
            "lat": -3.7729528,
            "lng": -38.51698349999999
          }
        },
        {
          "address": "Avenida (Ave) João Pessoa, 5233 - Damas, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 734,
          "rentValue": 4300,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 734m² em Damas, Fortaleza",
          "coordinates": {
            "lat": -3.7574896,
            "lng": -38.5536394
          }
        },
        {
          "address": "Rua (St) Amaro Cavalcante, 104 - Monte Castelo, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 100,
          "rentValue": 5000,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 100m² em Monte Castelo, Fortaleza",
          "coordinates": {
            "lat": -3.7238635,
            "lng": -38.5543546
          }
        },
        {
          "address": "Avenida (Ave) Dom Luís, 1233 - Meireles, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 31,
          "rentValue": 3000,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [
            "Balcony"
          ],
          "description": "Sala Comercial para alugar, 31m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.735538,
            "lng": -38.4897752
          }
        },
        {
          "address": "Rua (St) Napoleão Quezado, 201 - Parangaba, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 4094,
          "rentValue": 2950,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Cup",
            "Air conditioning",
            "Mobiliado"
          ],
          "description": "Ponto Comercial para alugar, 4094m² em Parangaba, Fortaleza",
          "coordinates": {
            "lat": -3.7782511,
            "lng": -38.5663525
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 134,
          "rentValue": 1300,
          "imageUrl": "assets/img/properties/ground1.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "address": "Rua (St) da Assunção, 950 - Centro, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 53,
          "rentValue": 1450,
          "imageUrl": "assets/img/properties/house5.jpg",
          "amenities": [],
          "description": "Casa com 1 Quarto para alugar, 53m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.738547,
            "lng": -38.5297596
          }
        },
        {
          "address": "Rua (St) Eduardo Barros Leal, 80 - Sao Gerardo, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 113,
          "rentValue": 4850,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Barbecue grill",
            "Elevator",
            "Gated community",
            "Gourmet space"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 113m² em Sao Gerardo, Fortaleza",
          "coordinates": {
            "lat": -3.7347576,
            "lng": -38.5634227
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 241,
          "rentValue": 700,
          "imageUrl": "assets/img/properties/ground3.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "address": "Avenida (Ave) Pontes Vieira, 2340 - Dionísio Torres, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 68,
          "rentValue": 650,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 68m² em Dionísio Torres, Fortaleza",
          "coordinates": {
            "lat": -3.7513729,
            "lng": -38.5007311
          }
        },
        {
          "address": "Rua (St) Domingos Olímpio, 96 - José Bonifácio, Fortaleza - CE",
          "area": 80,
          "rentValue": 2900,
          "imageUrl": "assets/img/properties/ground2.jpg",
          "amenities": [
            "West-facing",
            "Rede de água e esgoto",
            "Rua (St) asfaltada",
            "Plain",
            "Sandy"
          ],
          "description": "Lote/Terreno para alugar, 80m² em José Bonifácio, Fortaleza",
          "coordinates": {
            "lat": -3.7384427,
            "lng": -38.5246545
          }
        },
        {
          "address": "Rua (St) Tomás Lopes, 113 - Praia de Iracema, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 33,
          "rentValue": 4150,
          "imageUrl": "",
          "amenities": [],
          "description": "Kitnet com 1 Quarto para alugar, 33m² em Praia de Iracema, Fortaleza",
          "coordinates": {
            "lat": -3.7214121,
            "lng": -38.5155561
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 224,
          "rentValue": 750,
          "imageUrl": "assets/img/properties/ground3.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "address": "Avenida (Ave) Mem de Sá, 383 - Messejana, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 280,
          "rentValue": 3050,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 280m² em Messejana, Fortaleza",
          "coordinates": {
            "lat": -3.8256908,
            "lng": -38.4850026
          }
        },
        {
          "address": "Rua (St) Dom Lustosa, 985 - Jangurussu, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 59,
          "rentValue": 4000,
          "imageUrl": "assets/img/properties/apartament1.jpg",
          "amenities": [
            "Barbecue grill",
            "Garage",
            "Air conditioning",
            "Playground"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 59m² em Jangurussu, Fortaleza",
          "coordinates": {
            "lat": -3.8478487,
            "lng": -38.5116161
          }
        },
        {
          "address": "Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 30,
          "rentValue": 1900,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.740179299999999,
            "lng": -38.49966209999999
          }
        },
        {
          "address": "Rua (St) Vilebaldo Aguiar, 0 - Manoel Dias Branco, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 29,
          "rentValue": 1600,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 29m² em Manoel Dias Branco, Fortaleza",
          "coordinates": {
            "lat": -3.7411057,
            "lng": -38.4861231
          }
        },
        {
          "address": "Parangaba, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 15,
          "rentValue": 3250,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 15m² em Parangaba, Fortaleza",
          "coordinates": {
            "lat": -3.7771358,
            "lng": -38.5620583
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 20 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 75,
          "rentValue": 3650,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 75m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 42,
          "rentValue": 2700,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Rua (St) Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 31,
          "rentValue": 1550,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 1235 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 30,
          "rentValue": 2900,
          "imageUrl": "",
          "amenities": [],
          "description": "Kitnet para alugar, 30m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7255337,
            "lng": -38.5381513
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 42,
          "rentValue": 3200,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Alto da Balança, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 59,
          "rentValue": 3750,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 59m² em Alto da Balança, Fortaleza",
          "coordinates": {
            "lat": -3.7653561,
            "lng": -38.5158958
          }
        },
        {
          "address": "Rua (St) Álvaro de Alencar, 320 - Jacarecanga, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 40,
          "rentValue": 3350,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 40m² em Jacarecanga, Fortaleza",
          "coordinates": {
            "lat": -3.7095402,
            "lng": -38.5566853
          }
        },
        {
          "address": "Via Paisagística do Loteamento Itaperussú, 06 - Itaperi, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 47,
          "rentValue": 2500,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [
            "Garage",
            "Laundry area",
            "Playground",
            "Party room"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 47m² em Itaperi, Fortaleza",
          "coordinates": {
            "lat": -3.796546799999999,
            "lng": -38.53682200000001
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 62,
          "rentValue": 4200,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 62m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "address": "Rua (St) Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 38,
          "rentValue": 4350,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "address": "Rua (St) Álef de Souza Cavalcante, 1077 - Jangurussu, Fortaleza - CE",
          "area": 790,
          "rentValue": 1450,
          "imageUrl": "assets/img/properties/ground2.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar, 790m² em Jangurussu, Fortaleza",
          "coordinates": {
            "lat": -3.8299171,
            "lng": -38.5213888
          }
        },
        {
          "address": "Rua (St) Luiza Guimarães, 709 - Lagoa Redonda, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 83,
          "rentValue": 1150,
          "imageUrl": "assets/img/properties/house3.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Balcony"
          ],
          "description": "Casa de Condomínio com 3 Quartos para alugar, 83m² em Lagoa Redonda, Fortaleza",
          "coordinates": {
            "lat": -3.833829499999999,
            "lng": -38.4625151
          }
        },
        {
          "address": "Rua (St) Ana Bilhar, 987 - Meireles, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 77,
          "rentValue": 1450,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Watchman",
            "Security camera"
          ],
          "description": "Sala Comercial com 1 Quarto para alugar, 77m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7309224,
            "lng": -38.4904205
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 42,
          "rentValue": 2300,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 30 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 52,
          "rentValue": 950,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [
            "Cup",
            "Air conditioning"
          ],
          "description": "Sala Comercial para alugar, 52m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.728075,
            "lng": -38.5260597
          }
        },
        {
          "address": "Rua (St) Barão de Aratanha, 857 - Fátima, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 187,
          "rentValue": 4550,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Kitchen",
            "Pool",
            "Laundry area"
          ],
          "description": "Imóvel Comercial com 3 Quartos para alugar, 187m² em Fátima, Fortaleza",
          "coordinates": {
            "lat": -3.7403946,
            "lng": -38.5287677
          }
        },
        {
          "address": "Rua (St) Francisco Virgílio Filho, 10 - Edson Queiroz, Fortaleza - CE",
          "bedrooms": 4,
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 244,
          "rentValue": 4400,
          "imageUrl": "assets/img/properties/house3.jpg",
          "amenities": [
            "Closet",
            "Gourmet balcony",
            "Laundry area"
          ],
          "description": "Casa com 4 Quartos para alugar, 244m² em Edson Queiroz, Fortaleza",
          "coordinates": {
            "lat": -3.7827248,
            "lng": -38.4785309
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 127,
          "rentValue": 1100,
          "imageUrl": "assets/img/properties/ground3.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 187,
          "rentValue": 3350,
          "imageUrl": "assets/img/properties/ground3.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "address": "Rua (St) Barão do Rio Branco, 1071 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 33,
          "rentValue": 3850,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 33m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7277511,
            "lng": -38.5283848
          }
        },
        {
          "address": "Travessa Contaneide, 12 - Edson Queiroz, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 30,
          "rentValue": 4950,
          "imageUrl": "assets/img/properties/apartament3.jpg",
          "amenities": [
            "Pool",
            "Barbecue grill",
            "Elevator",
            "Gated community",
            "Balcony"
          ],
          "description": "Apartamento com 1 Quarto para alugar, 30m² em Edson Queiroz, Fortaleza",
          "coordinates": {
            "lat": -3.775279499999999,
            "lng": -38.475562
          }
        },
        {
          "address": "Rua (St) Romeu Aldigueri, 22 - Guararapes, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 216,
          "rentValue": 1150,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 216m² em Guararapes, Fortaleza",
          "coordinates": {
            "lat": -3.7655248,
            "lng": -38.4888106
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "area": 61,
          "rentValue": 3900,
          "imageUrl": "assets/img/properties/ground2.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "address": "Avenida (Ave) Senador Virgílio Távora, 1701 - Meireles, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 35,
          "rentValue": 2750,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 35m² em Meireles, Fortaleza",
          "coordinates": {
            "lat": -3.7403814,
            "lng": -38.4939797
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 5753 - Papicu, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 45,
          "rentValue": 1150,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 45m² em Papicu, Fortaleza",
          "coordinates": {
            "lat": -3.7417295,
            "lng": -38.4801094
          }
        },
        {
          "address": "Travessa Ouvidor - Centro, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 22,
          "rentValue": 4800,
          "imageUrl": "",
          "amenities": [],
          "description": "Kitnet com 1 Quarto para alugar, 22m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7409446,
            "lng": -38.531908
          }
        },
        {
          "address": "Rua (St) Vilebaldo Aguiar, 1151 - Cocó, Fortaleza - CE",
          "bedrooms": 3,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 71,
          "rentValue": 3450,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [
            "Laundry area",
            "Adult pool",
            "Barbecue grill",
            "Pool"
          ],
          "description": "Apartamento com 3 Quartos para alugar, 71m² em Cocó, Fortaleza",
          "coordinates": {
            "lat": -3.7435432,
            "lng": -38.4779613
          }
        },
        {
          "address": "Rua (St) Justino Café Neto, 240 - Guararapes, Fortaleza - CE",
          "bathrooms": 3,
          "parkingSpaces": 2,
          "area": 76,
          "rentValue": 2100,
          "imageUrl": "assets/img/properties/apartament2.jpg",
          "amenities": [],
          "description": "",
          "coordinates": {
            "lat": -3.7589949,
            "lng": -38.4893554
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 42,
          "rentValue": 650,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 1235 - Centro, Fortaleza - CE",
          "bedrooms": 1,
          "bathrooms": 2,
          "parkingSpaces": 2,
          "area": 30,
          "rentValue": 1400,
          "imageUrl": "",
          "amenities": [],
          "description": "Kitnet com 1 Quarto para alugar, 30m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7255337,
            "lng": -38.5381513
          }
        },
        {
          "address": "Avenida (Ave) Pontes Vieira, 2340 - Dionísio Torres, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 57,
          "rentValue": 4000,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 57m² em Dionísio Torres, Fortaleza",
          "coordinates": {
            "lat": -3.7513729,
            "lng": -38.5007311
          }
        },
        {
          "address": "Rua (St) Bárbara de Alencar, 1837 - Aldeota, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 20,
          "rentValue": 4000,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Imóvel Comercial para alugar, 20m² em Aldeota, Fortaleza",
          "coordinates": {
            "lat": -3.7397229,
            "lng": -38.5084529
          }
        },
        {
          "address": "Rua (St) Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 31,
          "rentValue": 3200,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "address": "Avenida (Ave) Aguanambi, 806 - Fátima, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 36,
          "rentValue": 2550,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Garage",
            "Kitchen"
          ],
          "description": "Ponto Comercial para alugar, 36m² em Fátima, Fortaleza",
          "coordinates": {
            "lat": -3.743739999999999,
            "lng": -38.5258
          }
        },
        {
          "address": "Rua (St) Adélia Feijó, 884 - BOA VISTA, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 312,
          "rentValue": 1850,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 312m² em BOA VISTA, Fortaleza",
          "coordinates": {
            "lat": -3.8062307,
            "lng": -38.5159271
          }
        },
        {
          "address": "Avenida (Ave) Viena Weyne, 845 - Cambeba, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 23,
          "rentValue": 4950,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 23m² em Cambeba, Fortaleza",
          "coordinates": {
            "lat": -3.8011169,
            "lng": -38.4870045
          }
        },
        {
          "address": "Rua (St) Pedro Borges, 20 - Centro, Fortaleza - CE",
          "area": 8,
          "rentValue": 3400,
          "imageUrl": "assets/img/properties/ground2.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar, 8m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "address": "Rua (St) 1068, 35 - Conjunto Ceara II, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 306,
          "rentValue": 4500,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Prédio Comercial para alugar, 306m² em Conjunto Ceara II, Fortaleza",
          "coordinates": {
            "lat": -3.7671569,
            "lng": -38.6139157
          }
        },
        {
          "address": "Avenida (Ave) Juscelino Kubitschek, 4950 - Passaré, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 60,
          "rentValue": 3300,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Pool",
            "Elevator",
            "Gated community",
            "Laundry area",
            "Kitchen"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 60m² em Passaré, Fortaleza",
          "coordinates": {
            "lat": -3.8202034,
            "lng": -38.5346914
          }
        },
        {
          "address": "Rua (St) Itapagé, 32 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 36,
          "rentValue": 2900,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 36m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7312728,
            "lng": -38.5390134
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 39,
          "rentValue": 1200,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 39m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 1235 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 30,
          "rentValue": 2250,
          "imageUrl": "",
          "amenities": [],
          "description": "Kitnet para alugar, 30m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7255337,
            "lng": -38.5381513
          }
        },
        {
          "address": "Rua (St) Professora Stella Cochrane, 341 - Passaré, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 45,
          "rentValue": 1250,
          "imageUrl": "assets/img/properties/apartament5.jpg",
          "amenities": [],
          "description": "Apartamento com 2 Quartos para alugar, 45m² em Passaré, Fortaleza",
          "coordinates": {
            "lat": -3.7957662,
            "lng": -38.5367562
          }
        },
        {
          "address": "Rua (St) Padre Pedro de Alencar, 632 - Messejana, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 42,
          "rentValue": 850,
          "imageUrl": "assets/img/properties/office1.jpg",
          "amenities": [],
          "description": "Ponto Comercial para alugar, 42m² em Messejana, Fortaleza",
          "coordinates": {
            "lat": -3.8333816,
            "lng": -38.4942222
          }
        },
        {
          "address": "Avenida (Ave) da Universidade, 3056 - Benfica, Fortaleza - CE",
          "bedrooms": 2,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 57,
          "rentValue": 1850,
          "imageUrl": "assets/img/properties/apartament4.jpg",
          "amenities": [
            "Pool",
            "Elevator",
            "Gated community",
            "Laundry area",
            "Sports court"
          ],
          "description": "Apartamento com 2 Quartos para alugar, 57m² em Benfica, Fortaleza",
          "coordinates": {
            "lat": -3.7423986,
            "lng": -38.5410526
          }
        },
        {
          "address": "Rua (St) Brigadeiro Haroldo Veloso, 568 - Sapiranga, Fortaleza - CE",
          "bedrooms": 5,
          "bathrooms": 2,
          "parkingSpaces": 1,
          "area": 480,
          "rentValue": 4750,
          "imageUrl": "assets/img/properties/house4.jpg",
          "amenities": [
            "Barbecue grill",
            "Laundry area",
            "Office"
          ],
          "description": "Casa com 5 Quartos para alugar, 480m² em Sapiranga, Fortaleza",
          "coordinates": {
            "lat": -3.797762,
            "lng": -38.4637465
          }
        },
        {
          "address": "Rua (St) Ernesto Pedro dos Santos, 421 - Jóquei Clube, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 397,
          "rentValue": 2300,
          "imageUrl": "assets/img/properties/storage3.jpg",
          "amenities": [
            "Office"
          ],
          "description": "Galpão para alugar, 397m² em Jóquei Clube, Fortaleza",
          "coordinates": {
            "lat": -3.763381899999999,
            "lng": -38.5764956
          }
        },
        {
          "address": "Rua (St) Paulo Firmeza, 1364 - Tauape, Fortaleza - CE",
          "area": 407,
          "rentValue": 3600,
          "imageUrl": "assets/img/properties/ground3.jpg",
          "amenities": [],
          "description": "Lote/Terreno para alugar, 407m² em Tauape, Fortaleza",
          "coordinates": {
            "lat": -3.7568462,
            "lng": -38.5069106
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 39,
          "rentValue": 2100,
          "imageUrl": "assets/img/properties/office3.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 39m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "address": "Rua (St) do Rosário, 77 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 85,
          "rentValue": 650,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 85m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.728418999999999,
            "lng": -38.5262788
          }
        },
        {
          "address": "Rua (St) Senador Pompeu, 649 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 23,
          "rentValue": 2500,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [
            "Kitchen",
            "24-hour security",
            "Elevator",
            "Watchman"
          ],
          "description": "Sala Comercial para alugar, 23m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.724452299999999,
            "lng": -38.5287254
          }
        },
        {
          "address": "Rua (St) Liberato Barroso, 1235 - Centro, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 2,
          "area": 30,
          "rentValue": 1350,
          "imageUrl": "",
          "amenities": [],
          "description": "Kitnet para alugar, 30m² em Centro, Fortaleza",
          "coordinates": {
            "lat": -3.7255337,
            "lng": -38.5381513
          }
        },
        {
          "address": "Avenida (Ave) Santos Dumont, 5554 - Cocó, Fortaleza - CE",
          "bathrooms": 1,
          "parkingSpaces": 1,
          "area": 26,
          "rentValue": 950,
          "imageUrl": "assets/img/properties/office2.jpg",
          "amenities": [],
          "description": "Sala Comercial para alugar, 26m² em Cocó, Fortaleza",
          "coordinates": {
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
