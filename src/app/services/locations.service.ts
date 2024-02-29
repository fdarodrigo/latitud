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
          "banheiros": 3,
          "vagas": 2,
          "area": 106,
          "valor_aluguel": "1.800",
          "url_imagem": null,
          "url_detalhes": "/imovel/apartamento-3-quartos-parque-iracema-bairros-fortaleza-com-garagem-106m2-venda-RS485000-id-2684789898/",
          "amenidades": [
            "Elevador",
            "Varanda",
            "Academia",
            "Playground",
            "Varanda gourmet",
            "..."
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
          "banheiros": 1,
          "vagas": null,
          "area": 70,
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/699f12803d5eeffc00c462dca9f6e9db/foto-1-de-apartamento-com-2-quartos-para-alugar,-70-em-pirambú,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-pirambu-bairros-fortaleza-70m2-aluguel-RS1200-id-2684877609/",
          "amenidades": [
            "Quintal"
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
          "banheiros": 1,
          "vagas": null,
          "area": 57,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/bb872f33e96b7f777453e37ec6c881d4/foto-1-de-apartamento-com-2-quartos-para-alugar,-57-em-paupina,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-paupina-bairros-fortaleza-57m2-aluguel-RS750-id-2684877608/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Aceita animais",
            "Playground",
            "Salão de festas",
            "..."
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
          "vagas": 1,
          "area": 65,
          "valor_aluguel": "1.750",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a6ce400b1df749981552f60880764bd4/foto-1-de-apartamento-com-2-quartos-para-alugar,-65-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-aldeota-bairros-fortaleza-com-garagem-65m2-aluguel-RS1750-id-2684826596/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 65m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7397941,
            "lng": -38.4940919
          }
        },
        {
          "endereco": "Rua Evaristo da Veiga, 140 - Parque Iracema, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 4,
          "vagas": 2,
          "area": 116,
          "valor_aluguel": "3.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/ce45e0b0b7061ae53120e26a9bcb8851/foto-1-de-apartamento-com-3-quartos-para-alugar,-116-em-parque-iracema,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-parque-iracema-bairros-fortaleza-com-garagem-116m2-aluguel-RS3000-id-2684896809/",
          "amenidades": [

          ],
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
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/c432114f4ce8f4c4ca2753bf36173040/foto-1-de-apartamento-com-3-quartos-para-alugar,-66-em-sapiranga-/-coité,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-sapiranga-coite-bairros-fortaleza-com-garagem-66m2-aluguel-RS800-id-2684738508/",
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
          "quartos": 2,
          "banheiros": 3,
          "vagas": 1,
          "area": 65,
          "valor_aluguel": "1.400",
          "url_imagem": null,
          "url_detalhes": "/imovel/apartamento-2-quartos-coco-bairros-fortaleza-com-garagem-65m2-aluguel-RS1400-id-2684760696/",
          "amenidades": [

          ],
          "descricao": null,
          "coords": {
            "lat": -3.7455114,
            "lng": -38.4793844
          }
        },
        {
          "endereco": "Rua A do Loteamento Residencial Célio Gurgel, 227 - Barroso, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": 1,
          "area": 42,
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/ee246288a281e58d1d4bb676b71a0964/foto-1-de-apartamento-com-2-quartos-para-alugar,-42-em-barroso,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-barroso-bairros-fortaleza-com-garagem-42m2-aluguel-RS1000-id-2684405238/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Aceita animais",
            "Garagem",
            "..."
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
          "vagas": 1,
          "area": 71,
          "valor_aluguel": "3.600",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/80e672686ced9461a8908956664e7f81/foto-1-de-apartamento-com-2-quartos-para-venda-ou-aluguel,-71-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-meireles-bairros-fortaleza-com-garagem-71m2-venda-RS720000-id-2684749094/",
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
          "vagas": 3,
          "area": 180,
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/f4b19e8de6a8978a4b89339d8835f5d5/foto-1-de-casa-com-2-quartos-para-alugar,-180-em-cidade-dos-funcionários,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-2-quartos-cidade-dos-funcionarios-bairros-fortaleza-com-garagem-180m2-aluguel-RS1000-id-2684738697/",
          "amenidades": [
            "Varanda",
            "Quintal",
            "Aceita animais",
            "Garagem",
            "Área de serviço",
            "..."
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
          "banheiros": 1,
          "vagas": 1,
          "area": 47,
          "valor_aluguel": "1.250",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/3171ec6fd4ef48b224e7d8bfd1fd13d9/foto-1-de-apartamento-com-2-quartos-para-alugar,-47-em-passaré,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-passare-bairros-fortaleza-com-garagem-47m2-aluguel-RS1250-id-2684818898/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Aceita animais",
            "..."
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
          "vagas": 1,
          "area": 50,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/261e80c2e19d8427f680c8c07503d31a/foto-1-de-apartamento-com-2-quartos-para-alugar,-50-em-guajiru,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-guajiru-bairros-fortaleza-com-garagem-50m2-aluguel-RS800-id-2684738799/",
          "amenidades": [
            "Varanda",
            "Garagem",
            "Cozinha",
            "Jardim",
            "Aceita animais"
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 50m² em Guajiru, Fortaleza",
          "coords": {
            "lat": -3.8283112,
            "lng": -38.4804338
          }
        },
        {
          "endereco": "Avenida Desembargador Moreira, 2120 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 49,
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/18ecfec3f304ac9e33ea6fd153041c41/foto-1-de-imóvel-comercial-para-alugar,-49-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-aldeota-bairros-fortaleza-49m2-aluguel-RS1200-id-2684760796/",
          "amenidades": [

          ],
          "descricao": "Imóvel Comercial para alugar, 49m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.743545,
            "lng": -38.500781
          }
        },
        {
          "endereco": "Rua Coronel Chico Alves, 21 - Passaré, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": 1,
          "area": 45,
          "valor_aluguel": "1.400",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a3fa723b375d21aa80299059a5a5b4f0/foto-1-de-apartamento-com-2-quartos-para-alugar,-45-em-passaré,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-passare-bairros-fortaleza-com-garagem-45m2-aluguel-RS1400-id-2684735736/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Aceita animais",
            "Garagem",
            "..."
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
          "vagas": 2,
          "area": 75,
          "valor_aluguel": "3.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/b175570e9f4d3d7a55feb15f11f51b46/foto-1-de-apartamento-com-2-quartos-para-venda-ou-aluguel,-75-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-aldeota-bairros-fortaleza-com-garagem-75m2-venda-RS850000-id-2684723293/",
          "amenidades": [
            "Piscina",
            "Mobiliado",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "..."
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
          "valor_aluguel": "2.600",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2fe371feb237046eb01920f6c779ed43/foto-1-de-apartamento-com-2-quartos-para-alugar,-53-em-parque-iracema,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-parque-iracema-bairros-fortaleza-com-garagem-53m2-aluguel-RS2600-id-2684665368/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Aceita animais",
            "Área de serviço",
            "Varanda gourmet",
            "..."
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
          "banheiros": 2,
          "vagas": 1,
          "area": 63,
          "valor_aluguel": "1.800",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a00210accb890747d034da006db0b379/foto-1-de-apartamento-com-3-quartos-para-alugar,-63-em-cambeba,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-cambeba-bairros-fortaleza-com-garagem-63m2-aluguel-RS1800-id-2684738694/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Varanda",
            "Aceita animais",
            "..."
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 63m² em Cambeba, Fortaleza",
          "coords": {
            "lat": -3.8071692,
            "lng": -38.4839189
          }
        },
        {
          "endereco": "Rua Joaquim Torres, 654 - Joaquim Tavora, Fortaleza - CE",
          "quartos": null,
          "banheiros": 4,
          "vagas": 11,
          "area": 302,
          "valor_aluguel": "7.999",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/38a3b992d62a57837a7edb7e360e5a2d/foto-1-de-sala-comercial-para-alugar,-302-em-joaquim-tavora,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-joaquim-tavora-bairros-fortaleza-com-garagem-302m2-aluguel-RS7999-id-2684779500/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 302m² em Joaquim Tavora, Fortaleza",
          "coords": {
            "lat": -3.7420371,
            "lng": -38.5172212
          }
        },
        {
          "endereco": "Rua Padre Constantino, 19 - Jacarecanga, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": 1,
          "area": 48,
          "valor_aluguel": "1.400",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/7892dbf9b910471510bf123259574b99/foto-1-de-apartamento-com-2-quartos-para-alugar,-48-em-jacarecanga,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-jacarecanga-bairros-fortaleza-com-garagem-48m2-aluguel-RS1400-id-2684405433/",
          "amenidades": [
            "Piscina",
            "Varanda",
            "Academia",
            "Aceita animais",
            "Garagem",
            "..."
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
          "banheiros": 3,
          "vagas": 1,
          "area": 88,
          "valor_aluguel": "1.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/3628a87cb1b4d1fc19678c294aa8054e/foto-1-de-apartamento-com-3-quartos-para-alugar,-88-em-montese,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-montese-bairros-fortaleza-com-garagem-88m2-aluguel-RS1500-id-2684735456/",
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
          "banheiros": 1,
          "vagas": 1,
          "area": 89,
          "valor_aluguel": "1.809",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/21ab2a2c0577ca2ea9bf79c8517ca992/foto-1-de-apartamento-com-3-quartos-para-alugar,-89-em-mondubim,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-mondubim-bairros-fortaleza-com-garagem-89m2-aluguel-RS1809-id-2684878448/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Aceita animais",
            "..."
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
          "vagas": 1,
          "area": 63,
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2bc5a20705fcf736a7583892a08c9ff3/foto-1-de-apartamento-com-3-quartos-para-alugar,-63-em-papicu,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-papicu-bairros-fortaleza-com-garagem-63m2-aluguel-RS1200-id-2684633507/",
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
          "banheiros": 1,
          "vagas": 1,
          "area": 63,
          "valor_aluguel": "3.600",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/70574cd321e23eec44b1f528d33644ad/foto-1-de-apartamento-com-2-quartos-para-alugar,-63-em-mucuripe,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-mucuripe-bairros-fortaleza-com-garagem-63m2-aluguel-RS3600-id-2684680322/",
          "amenidades": [
            "Mobiliado",
            "Elevador",
            "Condomínio fechado",
            "Varanda",
            "Academia",
            "..."
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
          "vagas": null,
          "area": 11111,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/3d01ea442d433e82a42041a1eb29404c/foto-1-de-casa-com-3-quartos-para-alugar,-11111-em-josé-bonifácio,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-3-quartos-jose-bonifacio-bairros-fortaleza-11111m2-aluguel-RS800-id-2684240346/",
          "amenidades": [

          ],
          "descricao": "Casa com 3 Quartos para alugar, 11111m² em José Bonifácio, Fortaleza",
          "coords": {
            "lat": -3.7363739,
            "lng": -38.5282258
          }
        },
        {
          "endereco": "Sapiranga, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 1,
          "vagas": 2,
          "area": 160,
          "valor_aluguel": "2.700",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/326ce42fd7a54cbefbf1d6c2d14fe60e/foto-1-de-casa-de-condomínio-com-3-quartos-para-alugar,-160-em-sapiranga,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-de-condominio-3-quartos-sapiranga-bairros-fortaleza-com-garagem-160m2-aluguel-RS2700-id-2684811596/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Condomínio fechado",
            "Área de serviço",
            "Cozinha",
            "..."
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
          "banheiros": 1,
          "vagas": 2,
          "area": 98,
          "valor_aluguel": "2.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/202747481c88a1897a4daca07b71486e/foto-1-de-apartamento-com-3-quartos-para-alugar,-98-em-cocó,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-coco-bairros-fortaleza-com-garagem-98m2-aluguel-RS2000-id-2684653231/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 98m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.748269799999999,
            "lng": -38.4903922
          }
        },
        {
          "endereco": "Rua José Mário Mamede, 159 - Edson Queiroz, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 3,
          "vagas": 2,
          "area": 68,
          "valor_aluguel": "2.300",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2bcfc77411a87c7d5f2f75eecb2f353a/foto-1-de-apartamento-com-2-quartos-para-alugar,-68-em-edson-queiroz,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-edson-queiroz-bairros-fortaleza-com-garagem-68m2-aluguel-RS2300-id-2684551997/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Academia",
            "..."
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 68m² em Edson Queiroz, Fortaleza",
          "coords": {
            "lat": -3.7877911,
            "lng": -38.478111
          }
        },
        {
          "endereco": "Rua Paulo Firmeza, 1608 - Tauape, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 407,
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/8d392ce61d8b2e9dbf0f9300c3ee7967/foto-1-de-lote/terreno-para-alugar,-407-em-tauape,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-tauape-bairros-fortaleza-407m2-aluguel-RS1000-id-2682677721/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar, 407m² em Tauape, Fortaleza",
          "coords": {
            "lat": -3.7565734,
            "lng": -38.5049988
          }
        },
        {
          "endereco": "Avenida Desembargador Moreira, 2800 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/5bc10a3522e0ee6e33bd4f6ac454993a/foto-1-de-sala-comercial-para-alugar,-30-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-aldeota-bairros-fortaleza-30m2-aluguel-RS1000-id-2684518740/",
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
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 35,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a5ebc70e18474cd8c47d8ad80986c5ba/foto-1-de-ponto-comercial-para-alugar,-35-em-padre-andrade,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-padre-andrade-bairros-fortaleza-35m2-aluguel-RS900-id-2684397933/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 35m² em Padre Andrade, Fortaleza",
          "coords": {
            "lat": -3.7377538,
            "lng": -38.5813294
          }
        },
        {
          "endereco": "Rua Eduardo Novaes, 250 - Sapiranga, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 4,
          "vagas": 3,
          "area": 125,
          "valor_aluguel": "3.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/de4716e57a8c7e913a67c4e9ea222e9b/foto-1-de-casa-de-condomínio-com-3-quartos-para-alugar,-125-em-sapiranga,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-de-condominio-3-quartos-sapiranga-bairros-fortaleza-com-garagem-125m2-aluguel-RS3500-id-2684631217/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 34,
          "valor_aluguel": "1.700",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/92e2361c06c910927aa80482a29bd7d1/foto-1-de-sala-comercial-para-alugar,-34-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-aldeota-bairros-fortaleza-34m2-aluguel-RS1700-id-2684626708/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 34m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7420164,
            "lng": -38.4998565
          }
        },
        {
          "endereco": "Vila Três Américas, 1064 - Itaperi, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 1,
          "area": 95,
          "valor_aluguel": "1.800",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/bea33017cf712e2dbbdbf52db00349b1/foto-1-de-casa-com-3-quartos-para-alugar,-95-em-itaperi,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-3-quartos-itaperi-bairros-fortaleza-com-garagem-95m2-aluguel-RS1800-id-2684053721/",
          "amenidades": [
            "Quintal",
            "Aceita animais",
            "Área de serviço",
            "Armário embutido",
            "Interfone",
            "..."
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
          "vagas": 1,
          "area": 200,
          "valor_aluguel": "1.700",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/4a0a9c849e2cece71419e8c3c1db1f24/foto-1-de-casa-com-3-quartos-para-venda-ou-aluguel,-200-em-maraponga,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-3-quartos-maraponga-bairros-fortaleza-com-garagem-200m2-venda-RS390000-id-2684618204/",
          "amenidades": [
            "Cozinha",
            "Área de serviço",
            "Quintal",
            "Aceita animais"
          ],
          "descricao": "Casa com 3 Quartos para venda ou aluguel, 200m² em Maraponga, Fortaleza",
          "coords": {
            "lat": -3.793095,
            "lng": -38.5659336
          }
        },
        {
          "endereco": "Avenida Rui Barbosa, 595 - Meireles, Fortaleza - CE",
          "quartos": null,
          "banheiros": 5,
          "vagas": null,
          "area": 372,
          "valor_aluguel": "17.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/5f17dfdf46d72d7755a1399263931085/foto-1-de-ponto-comercial-para-alugar,-372-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-meireles-bairros-fortaleza-372m2-aluguel-RS17000-id-2666411879/",
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
          "banheiros": 3,
          "vagas": 2,
          "area": 67,
          "valor_aluguel": "1.800",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/6feb05ccf7faa7ce423fd2c296640731/foto-1-de-apartamento-com-2-quartos-para-alugar,-67-em-parque-manibura,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-parque-manibura-bairros-fortaleza-com-garagem-67m2-aluguel-RS1800-id-2684761393/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 67m² em Parque Manibura, Fortaleza",
          "coords": {
            "lat": -3.7901543,
            "lng": -38.4868539
          }
        },
        {
          "endereco": "Rua Vicente Linhares, 521 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 33,
          "valor_aluguel": "1.700",
          "url_imagem": null,
          "url_detalhes": "/imovel/sala-comercial-aldeota-bairros-fortaleza-33m2-aluguel-RS1700-id-2684628607/",
          "amenidades": [

          ],
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
          "vagas": null,
          "area": 80,
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/8ca5f22febf216571bbd2fafcd0b9945/foto-1-de-apartamento-com-3-quartos-para-alugar,-80-em-sao-gerardo,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-sao-gerardo-bairros-fortaleza-80m2-aluguel-RS1200-id-2684522601/",
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
          "quartos": null,
          "banheiros": null,
          "vagas": 6,
          "area": 216,
          "valor_aluguel": "12.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/e2d2e49bfae9029976777c34cfb0b1ee/foto-1-de-imóvel-comercial-para-alugar,-216-em-cambeba,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-cambeba-bairros-fortaleza-com-garagem-216m2-aluguel-RS12000-id-2684628100/",
          "amenidades": [

          ],
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
          "valor_aluguel": "2.800",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/236cce3ec2fd70eb7466a73c27723def/foto-1-de-apartamento-com-3-quartos-para-alugar,-70-em-papicu,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-papicu-bairros-fortaleza-com-garagem-70m2-aluguel-RS2800-id-2682070037/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Academia",
            "..."
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
          "banheiros": 1,
          "vagas": 1,
          "area": 43,
          "valor_aluguel": "1.100",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/9af354ff01dbd217a76dd1b01b58edef/foto-1-de-apartamento-com-2-quartos-para-alugar,-43-em-maraponga,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-maraponga-bairros-fortaleza-com-garagem-43m2-aluguel-RS1100-id-2684517110/",
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
          "valor_aluguel": "2.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/18642000420fdf08bd6ed8070a29a0bd/foto-1-de-apartamento-com-2-quartos-para-alugar,-60-em-parangaba,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-parangaba-bairros-fortaleza-com-garagem-60m2-aluguel-RS2000-id-2684013617/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Aceita animais",
            "..."
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
          "banheiros": 3,
          "vagas": 5,
          "area": 157,
          "valor_aluguel": "3.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/cf99db211e33343025ebc17143ea7a80/foto-1-de-casa-com-3-quartos-para-alugar,-157-em-papicu,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-3-quartos-papicu-bairros-fortaleza-com-garagem-157m2-aluguel-RS3000-id-2684628140/",
          "amenidades": [
            "Cozinha",
            "Quintal"
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
          "banheiros": 2,
          "vagas": 2,
          "area": 83,
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2f889a3e53572a6aa491e0f25ead575c/foto-1-de-casa-de-condomínio-com-3-quartos-para-alugar,-83-em-lagoa-redonda,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-de-condominio-3-quartos-lagoa-redonda-bairros-fortaleza-com-garagem-83m2-aluguel-RS1200-id-2684700396/",
          "amenidades": [
            "Churrasqueira",
            "Condomínio fechado",
            "Quintal",
            "Aceita animais",
            "Ar-condicionado",
            "..."
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
          "vagas": 1,
          "area": 63,
          "valor_aluguel": "1.300",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/7e7463d1efef0c26a8e3db267d5636cc/foto-1-de-apartamento-com-3-quartos-para-alugar,-63-em-messejana,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-messejana-bairros-fortaleza-com-garagem-63m2-aluguel-RS1300-id-2684519105/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Área de serviço",
            "Playground",
            "Quadra poliesportiva",
            "..."
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
          "banheiros": 1,
          "vagas": 1,
          "area": 46,
          "valor_aluguel": "1.300",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d252de296f8ad856aeaf5a138b76d73c/foto-1-de-apartamento-com-2-quartos-para-alugar,-46-em-paupina,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-paupina-bairros-fortaleza-com-garagem-46m2-aluguel-RS1300-id-2684866832/",
          "amenidades": [

          ],
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
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2f889a3e53572a6aa491e0f25ead575c/foto-1-de-casa-de-condomínio-com-3-quartos-para-alugar,-83-em-lagoa-redonda,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-de-condominio-3-quartos-lagoa-redonda-bairros-fortaleza-com-garagem-83m2-aluguel-RS1200-id-2684817807/",
          "amenidades": [
            "Churrasqueira",
            "Condomínio fechado",
            "Quintal",
            "Aceita animais",
            "Ar-condicionado",
            "..."
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
          "banheiros": 1,
          "vagas": 1,
          "area": 45,
          "valor_aluguel": "1.250",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/339cf6197b99829a1a44e96889847cc7/foto-1-de-apartamento-com-2-quartos-para-alugar,-45-em-maraponga,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-maraponga-bairros-fortaleza-com-garagem-45m2-aluguel-RS1250-id-2684665367/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Aceita animais",
            "Área de serviço",
            "..."
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
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/e4b9e24442565a54a3f4ccdc1ed9d9ae/foto-1-de-apartamento-com-2-quartos-para-alugar,-55-em-messejana,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-messejana-bairros-fortaleza-com-garagem-55m2-aluguel-RS1000-id-2684628816/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Academia",
            "Playground",
            "Salão de festas",
            "..."
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
          "banheiros": 1,
          "vagas": null,
          "area": 100,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/b1a3155682f110dc15814611f5fc4554/foto-1-de-casa-com-2-quartos-para-alugar,-100-em-álvaro-weyne,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-2-quartos-alvaro-weyne-bairros-fortaleza-100m2-aluguel-RS639-id-2684474193/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 38,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/3eb707fdfeb2dac4c7f79ec59998a5aa/foto-1-de-sala-comercial-para-alugar,-38-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-38m2-aluguel-RS250-id-2683883513/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Rua Farias Lemos, 800 - Parque Iracema, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": 1,
          "area": 47,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/6dbcdd6cbce3f9a29e0d910e868b6245/foto-1-de-apartamento-com-2-quartos-para-alugar,-47-em-parque-iracema,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-parque-iracema-bairros-fortaleza-com-garagem-47m2-aluguel-RS900-id-2684632023/",
          "amenidades": [
            "Churrasqueira",
            "Aceita animais",
            "Área de serviço",
            "Playground",
            "Cozinha",
            "..."
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 47m² em Parque Iracema, Fortaleza",
          "coords": {
            "lat": -3.8138253,
            "lng": -38.4943965
          }
        },
        {
          "endereco": "Rua Senador Pompeu, 649 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 2296,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/77fc0b2396fa346ee5476d4cf76f6639/foto-1-de-imóvel-comercial-para-alugar,-2296-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-centro-bairros-fortaleza-2296m2-aluguel-RS500-id-2682680987/",
          "amenidades": [

          ],
          "descricao": "Imóvel Comercial para alugar, 2296m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724452299999999,
            "lng": -38.5287254
          }
        },
        {
          "endereco": "Rua Raul Uchôa, 608 - Bom Futuro, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": null,
          "area": 156,
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/dca094ac75b2c0015adfff4e3d55fffe/foto-1-de-casa-com-2-quartos-para-alugar,-156-em-bom-futuro,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-2-quartos-bom-futuro-bairros-fortaleza-156m2-aluguel-RS1200-id-2684517014/",
          "amenidades": [
            "Copa",
            "Varanda gourmet",
            "Quintal"
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
          "banheiros": 1,
          "vagas": 1,
          "area": 40,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d53bcf289071fbaf51b0eb0ea53d6150/foto-1-de-apartamento-com-2-quartos-para-alugar,-40-em-antônio-bezerra,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-antonio-bezerra-bairros-fortaleza-com-garagem-40m2-aluguel-RS990-id-2684434802/",
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
          "banheiros": 2,
          "vagas": 1,
          "area": 60,
          "valor_aluguel": "1.800",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/1074e34c53b461421f322d6f23075597/foto-1-de-apartamento-com-3-quartos-para-alugar,-60-em-parque-iracema,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-parque-iracema-bairros-fortaleza-com-garagem-60m2-aluguel-RS1800-id-2682316440/",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Academia",
            "Aceita animais",
            "Jardim",
            "..."
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
          "vagas": 1,
          "area": 90,
          "valor_aluguel": "1.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/57e25f3aac58c9e6fbe42d61538059f4/foto-1-de-apartamento-com-3-quartos-para-alugar,-90-em-fátima,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-fatima-bairros-fortaleza-com-garagem-90m2-aluguel-RS1500-id-2684411639/",
          "amenidades": [

          ],
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
          "vagas": 2,
          "area": 62,
          "valor_aluguel": "2.300",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2915485d97fb3b61724b50925d745e2d/foto-1-de-apartamento-com-2-quartos-para-alugar,-62-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-meireles-bairros-fortaleza-com-garagem-62m2-aluguel-RS2300-id-2684518503/",
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
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 35,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/1adc823a056fd49f633a83d39e96bf1d/foto-1-de-ponto-comercial-para-alugar,-35-em-padre-andrade,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-padre-andrade-bairros-fortaleza-35m2-aluguel-RS700-id-2684397842/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 35m² em Padre Andrade, Fortaleza",
          "coords": {
            "lat": -3.7370093,
            "lng": -38.5819121
          }
        },
        {
          "endereco": "Rua João Sales, 1665 - Planalto Ayrton Senna, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 1241,
          "valor_aluguel": "4.800",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/f13e4cef4078e0242cb02ca1fdf1684f/foto-1-de-lote/terreno-para-alugar,-1241-em-planalto-ayrton-senna,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-planalto-ayrton-senna-bairros-fortaleza-1241m2-aluguel-RS4800-id-2684628396/",
          "amenidades": [

          ],
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
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/3df53f56c8640a3fd21c6f2b6027f643/foto-1-de-apartamento-com-2-quartos-para-alugar,-46-em-barroso,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-barroso-bairros-fortaleza-com-garagem-46m2-aluguel-RS1200-id-2684293603/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 35,
          "valor_aluguel": "1.300",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/3c06a92ab68d6b3ccda3359895770901/foto-1-de-sala-comercial-para-alugar,-35-em-joaquim-tavora,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-joaquim-tavora-bairros-fortaleza-35m2-aluguel-RS1300-id-2684748896/",
          "amenidades": [

          ],
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
          "valor_aluguel": "3.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a797bbee3626a429f6e5e725cce9900b/foto-1-de-apartamento-com-2-quartos-para-alugar,-50-em-josé-bonifácio,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-jose-bonifacio-bairros-fortaleza-com-garagem-50m2-aluguel-RS3000-id-2683738138/",
          "amenidades": [
            "Piscina",
            "Mobiliado",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "..."
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
          "vagas": null,
          "area": 111,
          "valor_aluguel": "3.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/b0028978a46a75ba5d0950971c1ebac6/foto-1-de-apartamento-com-3-quartos-para-alugar,-111-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-aldeota-bairros-fortaleza-111m2-aluguel-RS3000-id-2684754497/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 111m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7385355,
            "lng": -38.5165029
          }
        },
        {
          "endereco": "Rua Alfredo Mamede - Mondubim, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": 1,
          "area": 60,
          "valor_aluguel": "1.100",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/282bd5bf084efca9a832559773057003/foto-1-de-apartamento-com-2-quartos-para-alugar,-60-em-mondubim,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-mondubim-bairros-fortaleza-com-garagem-60m2-aluguel-RS1100-id-2684622023/",
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
          "vagas": null,
          "area": 94,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/1b807dcc809a56eeb9f6285f0c34a3ae/foto-1-de-casa-com-2-quartos-para-alugar,-94-em-alto-da-balança,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-2-quartos-alto-da-balanca-bairros-fortaleza-94m2-aluguel-RS800-id-2684522602/",
          "amenidades": [
            "Conexão à internet",
            "Quintal"
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
          "banheiros": 4,
          "vagas": null,
          "area": 150,
          "valor_aluguel": "2.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/497659c0de5b0bdc39cf6a44f87010e4/foto-1-de-casa-com-2-quartos-para-alugar,-150-em-cidade-dos-funcionários,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-2-quartos-cidade-dos-funcionarios-bairros-fortaleza-150m2-aluguel-RS2500-id-2684517013/",
          "amenidades": [
            "Aceita animais"
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
          "banheiros": 1,
          "vagas": null,
          "area": 70,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/ac815bc7ccc66990da65212aae08f65d/foto-1-de-apartamento-com-2-quartos-para-alugar,-70-em-itaperi,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-itaperi-bairros-fortaleza-70m2-aluguel-RS550-id-2682046540/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 70m² em Itaperi, Fortaleza",
          "coords": {
            "lat": -3.7989426,
            "lng": -38.5521626
          }
        },
        {
          "endereco": "Rua Nunes Valente, 1880 - Meireles, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 95,
          "valor_aluguel": "3.700",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d05fbdabdb91821387b274dd5807b547/foto-1-de-apartamento-com-3-quartos-para-alugar,-95-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-meireles-bairros-fortaleza-com-garagem-95m2-aluguel-RS3700-id-2682330353/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda",
            "..."
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
          "banheiros": 1,
          "vagas": null,
          "area": 50,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/b3571c9d23940464eb5189ff9a6d3fc9/foto-1-de-casa-com-1-quarto-para-alugar,-50-em-álvaro-weyne,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-1-quartos-alvaro-weyne-bairros-fortaleza-50m2-aluguel-RS459-id-2684473999/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 36,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/dbe0845e8e04432601dee188e2dec6ef/foto-1-de-ponto-comercial-para-alugar,-36-em-praia-de-iracema,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-praia-de-iracema-bairros-fortaleza-36m2-aluguel-RS900-id-2684824731/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 36m² em Praia de Iracema, Fortaleza",
          "coords": {
            "lat": -3.7237187,
            "lng": -38.51387769999999
          }
        },
        {
          "endereco": "Rua Gomes Brasil, 340 - Parangaba, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 260,
          "valor_aluguel": "1.700",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/efac27604a4c929afb5d644c8b392748/foto-1-de-lote/terreno-para-alugar,-260-em-parangaba,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-parangaba-bairros-fortaleza-260m2-aluguel-RS1700-id-2682677716/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar, 260m² em Parangaba, Fortaleza",
          "coords": {
            "lat": -3.7725383,
            "lng": -38.5682202
          }
        },
        {
          "endereco": "Rua Doutor José Frota, 29 - Mucuripe, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 80,
          "valor_aluguel": "1.000",
          "url_imagem": null,
          "url_detalhes": "/imovel/lote-terreno-mucuripe-bairros-fortaleza-80m2-aluguel-RS1000-id-2682680306/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar, 80m² em Mucuripe, Fortaleza",
          "coords": {
            "lat": -3.7268153,
            "lng": -38.4864193
          }
        },
        {
          "endereco": "Rua Crisanto Arruda, 0 - Passaré, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 2000,
          "valor_aluguel": "1.600",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/bec6d45e3daa1d97055be56da8f6a0f6/foto-1-de-lote/terreno-para-alugar,-2000-em-passaré,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-passare-bairros-fortaleza-2000m2-aluguel-RS1600-id-2682676831/",
          "amenidades": [

          ],
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
          "valor_aluguel": "2.300",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/8b71067bbb825585f421cb36293cc1d5/foto-1-de-apartamento-com-2-quartos-para-alugar,-53-em-benfica,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-benfica-bairros-fortaleza-com-garagem-53m2-aluguel-RS2300-id-2682070500/",
          "amenidades": [
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda",
            "Academia",
            "..."
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 53m² em Benfica, Fortaleza",
          "coords": {
            "lat": -3.7397652,
            "lng": -38.5336579
          }
        },
        {
          "endereco": "Rua Ary Barroso, 70 - Papicu, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": "1.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/9bad79e0fc70eb089c738711f50c4505/foto-1-de-sala-comercial-para-alugar,-30-em-papicu,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-papicu-bairros-fortaleza-30m2-aluguel-RS1500-id-2671188570/",
          "amenidades": [
            "Aceita animais"
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
          "vagas": 1,
          "area": 47,
          "valor_aluguel": "1.700",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d5f6fd3d1f49e0585a1f3c8fa3649a2b/foto-1-de-apartamento-com-2-quartos-para-alugar,-47-em-passaré,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-passare-bairros-fortaleza-com-garagem-47m2-aluguel-RS1700-id-2684626306/",
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
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 200,
          "valor_aluguel": "5.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/95e107d3abb3d469c7c1809f72e5061c/foto-1-de-galpão/depósito/armazém-para-alugar,-200-em-dias-macedo,-fortaleza.jpg",
          "url_detalhes": "/imovel/galpao-deposito-armazem-dias-macedo-bairros-fortaleza-200m2-aluguel-RS5000-id-2684555797/",
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
          "valor_aluguel": "2.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/ea29655fe2662ba8395ffb984b382a96/foto-1-de-apartamento-com-1-quarto-para-venda-ou-aluguel,-50-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-1-quartos-meireles-bairros-fortaleza-com-garagem-50m2-venda-RS480000-id-2681340507/",
          "amenidades": [
            "Elevador",
            "Interfone",
            "Mobiliado",
            "Aceita animais"
          ],
          "descricao": "Apartamento com 1 Quarto para venda ou aluguel, 50m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7266296,
            "lng": -38.50377659999999
          }
        },
        {
          "endereco": "Rua Vicente Leite, 1960 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": 7,
          "vagas": 5,
          "area": 400,
          "valor_aluguel": "6.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/7bb7461a8e6c8c3045eac356802e887a/foto-1-de-ponto-comercial-para-alugar,-400-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-aldeota-bairros-fortaleza-com-garagem-400m2-aluguel-RS6000-id-2669565494/",
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
          "banheiros": 1,
          "vagas": 1,
          "area": 50,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/9077b63f50629140831bbc2aafcc5c89/foto-1-de-apartamento-com-2-quartos-para-alugar,-50-em-itaperi,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-itaperi-bairros-fortaleza-com-garagem-50m2-aluguel-RS600-id-2682199712/",
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
          "vagas": 1,
          "area": 100,
          "valor_aluguel": "1.600",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/aa17da478bf78af07f10da89dca778e0/foto-1-de-casa-com-3-quartos-para-alugar,-100-em-maraponga,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-3-quartos-maraponga-bairros-fortaleza-com-garagem-100m2-aluguel-RS1600-id-2684737723/",
          "amenidades": [
            "Varanda",
            "Garagem",
            "Cozinha",
            "Varanda gourmet",
            "Quintal"
          ],
          "descricao": "Casa com 3 Quartos para alugar, 100m² em Maraponga, Fortaleza",
          "coords": {
            "lat": -3.7938598,
            "lng": -38.5638725
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 6740 - Cocó, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": 1,
          "area": 28,
          "valor_aluguel": "3.800",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/cfb9e088dab066885f28bcf82e8b8beb/foto-1-de-sala-comercial-para-alugar,-28-em-cocó,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-coco-bairros-fortaleza-com-garagem-28m2-aluguel-RS3800-id-2684576609/",
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
          "quartos": null,
          "banheiros": null,
          "vagas": 6,
          "area": 300,
          "valor_aluguel": "6.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a935ea31be13658aabf1005fa02721f0/foto-1-de-sala-comercial-para-alugar,-300-em-dionísio-torres,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-dionisio-torres-bairros-fortaleza-com-garagem-300m2-aluguel-RS6500-id-2666465660/",
          "amenidades": [

          ],
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
          "vagas": 2,
          "area": 70,
          "valor_aluguel": "2.700",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/1840d948e907e7488eb6d257319820bc/foto-1-de-apartamento-com-3-quartos-para-alugar,-70-em-engenheiro-luciano-cavalcante,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-engenheiro-luciano-cavalcante-bairros-fortaleza-com-garagem-70m2-aluguel-RS2700-id-2636845678/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda",
            "..."
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
          "banheiros": 1,
          "vagas": 1,
          "area": 51,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/060a305d45ce8802116b0ba72e20c501/foto-1-de-apartamento-com-2-quartos-para-alugar,-51-em-jose-de-alencar,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-jose-de-alencar-bairros-fortaleza-com-garagem-51m2-aluguel-RS650-id-2683618344/",
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
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 25,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/0ce9184f5c09f9ff9912772c72ec17f7/foto-1-de-ponto-comercial-para-alugar,-25-em-pedras,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-pedras-bairros-fortaleza-25m2-aluguel-RS850-id-2684194085/",
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
          "vagas": 1,
          "area": 80,
          "valor_aluguel": "1.300",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/833159046119d8c4595e2471e5cbec64/foto-1-de-apartamento-com-2-quartos-para-alugar,-80-em-praia-do-futuro-ii,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-praia-do-futuro-ii-bairros-fortaleza-com-garagem-80m2-aluguel-RS1300-id-2684627908/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 38,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/8a63f9468abb68190ae399c0a33eefe5/foto-1-de-sala-comercial-para-alugar,-38-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-38m2-aluguel-RS600-id-2604746986/",
          "amenidades": [

          ],
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
          "vagas": null,
          "area": 56,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/128f0ee130622aab9bd758422b787e91/foto-1-de-apartamento-com-2-quartos-para-alugar,-56-em-fátima,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-fatima-bairros-fortaleza-56m2-aluguel-RS960-id-2684754203/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 56m² em Fátima, Fortaleza",
          "coords": {
            "lat": -3.750779699999999,
            "lng": -38.52818070000001
          }
        },
        {
          "endereco": "Parque Dois Irmãos, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": 1,
          "area": 43,
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/1151e39f4bf9826f64359c468d624ab2/foto-1-de-apartamento-com-2-quartos-para-alugar,-43-em-parque-dois-irmãos,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-parque-dois-irmaos-bairros-fortaleza-com-garagem-43m2-aluguel-RS1000-id-2684577108/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Aceita animais",
            "Varanda gourmet",
            "Quadra poliesportiva",
            "..."
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 43m² em Parque Dois Irmãos, Fortaleza",
          "coords": {
            "lat": -3.8089995,
            "lng": -38.5495815
          }
        },
        {
          "endereco": "Avenida Engenheiro Leal Lima Verde, 1401 - JOSE DE ALENCAR, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": 5,
          "area": 55,
          "valor_aluguel": "1.650",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/c674773421fe69e8a01155a86fbe4688/foto-1-de-ponto-comercial-para-alugar,-55-em-jose-de-alencar,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-jose-de-alencar-bairros-fortaleza-com-garagem-55m2-aluguel-RS1650-id-2684199134/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 55m² em JOSE DE ALENCAR, Fortaleza",
          "coords": {
            "lat": -3.802248,
            "lng": -38.4748688
          }
        },
        {
          "endereco": "Rua Coronel Jucá, 960 - Aldeota, Fortaleza - CE",
          "quartos": 4,
          "banheiros": 5,
          "vagas": null,
          "area": 200,
          "valor_aluguel": "5.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2c07e07f87dcec13ed7e476e41d911fe/foto-1-de-apartamento-com-4-quartos-para-alugar,-200-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-4-quartos-aldeota-bairros-fortaleza-200m2-aluguel-RS5000-id-2684878003/",
          "amenidades": [
            "Piscina",
            "Mobiliado",
            "Churrasqueira",
            "Academia",
            "Playground",
            "..."
          ],
          "descricao": "Apartamento com 4 Quartos para alugar, 200m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.740460499999999,
            "lng": -38.4923081
          }
        },
        {
          "endereco": "Rua Beatriz Segal, 0 - Barroso, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 396,
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/aed4aff1f5555bb13a1c9d93e145c5a5/foto-1-de-lote/terreno-para-alugar,-396-em-barroso,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-barroso-bairros-fortaleza-396m2-aluguel-RS1000-id-2629140392/",
          "amenidades": [

          ],
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
          "vagas": 1,
          "area": 53,
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/3589395d1c5daf00f8a9be7f4aafe644/foto-1-de-ponto-comercial-com-2-quartos-para-alugar,-53-em-papicu,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-2-quartos-papicu-bairros-fortaleza-com-garagem-53m2-aluguel-RS1200-id-2681032903/",
          "amenidades": [

          ],
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
          "valor_aluguel": "1.800",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/385c531e97a372e9aef07a998f09e81e/foto-1-de-apartamento-com-2-quartos-para-alugar,-55-em-passaré,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-passare-bairros-fortaleza-com-garagem-55m2-aluguel-RS1800-id-2684483384/",
          "amenidades": [
            "Piscina",
            "Mobiliado",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "..."
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
          "banheiros": 2,
          "vagas": 1,
          "area": 60,
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/c735a0de13d8051e58d396b7291118d3/foto-1-de-apartamento-com-3-quartos-para-alugar,-60-em-maraponga,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-maraponga-bairros-fortaleza-com-garagem-60m2-aluguel-RS1000-id-2677895081/",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Aceita animais",
            "Jardim",
            "Área de serviço",
            "..."
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
          "vagas": 1,
          "area": 60,
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/cbeb3578735a820f4627d7da089a4153/foto-1-de-apartamento-com-2-quartos-para-alugar,-60-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-centro-bairros-fortaleza-com-garagem-60m2-aluguel-RS1200-id-2684474729/",
          "amenidades": [
            "Condomínio fechado",
            "Portão eletrônico",
            "Portaria 24h",
            "Aceita animais",
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
          "banheiros": 4,
          "vagas": 2,
          "area": 112,
          "valor_aluguel": "3.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/969b10976920026f89ade89c2c707751/foto-1-de-apartamento-com-3-quartos-para-alugar,-112-em-salinas,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-salinas-bairros-fortaleza-com-garagem-112m2-aluguel-RS3500-id-2675571825/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Aceita animais",
            "Área de serviço",
            "..."
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 112m² em Salinas, Fortaleza",
          "coords": {
            "lat": -3.7647759,
            "lng": -38.4956173
          }
        },
        {
          "endereco": "Rua General Sampaio, 1746 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 20,
          "vagas": null,
          "area": 5493,
          "valor_aluguel": "80.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/517f9e0348b9b9176b5a15520eec0f57/foto-1-de-prédio-comercial-para-alugar,-5493-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/predio-comercial-centro-bairros-fortaleza-5493m2-aluguel-RS80000-id-2659104186/",
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
          "banheiros": 2,
          "vagas": 1,
          "area": 75,
          "valor_aluguel": "1.450",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/3922bf2b284600c5afa46dd171c461b8/foto-1-de-apartamento-com-3-quartos-para-alugar,-75-em-engenheiro-luciano-cavalcante,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-engenheiro-luciano-cavalcante-bairros-fortaleza-com-garagem-75m2-aluguel-RS1450-id-2684517111/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": "2.600",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d9f5fbbf1c204736567e0d0def0e326d/foto-1-de-sala-comercial-para-alugar,-30-em-edson-queiroz,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-edson-queiroz-bairros-fortaleza-com-garagem-30m2-aluguel-RS2600-id-2684738698/",
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
          "banheiros": 3,
          "vagas": 2,
          "area": 60,
          "valor_aluguel": "1.700",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/baebe1a3d6fbdfd0896af41f2eb3a1df/foto-1-de-casa-com-3-quartos-para-alugar,-60-em-fátima,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-3-quartos-fatima-bairros-fortaleza-com-garagem-60m2-aluguel-RS1700-id-2658411013/",
          "amenidades": [
            "Área de serviço",
            "Box blindex",
            "Interfone",
            "Quintal",
            "Aceita animais"
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
          "valor_aluguel": "1.100",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/9dc3320e6a9d98f532a7ac0041cb87f8/foto-1-de-apartamento-com-2-quartos-para-alugar,-53-em-vicente-pinzon,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-vicente-pinzon-bairros-fortaleza-com-garagem-53m2-aluguel-RS1100-id-2684628632/",
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
          "banheiros": 1,
          "vagas": 1,
          "area": 50,
          "valor_aluguel": "1.100",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/1b65f40e7340ecfc646640a15f01b159/foto-1-de-apartamento-com-2-quartos-para-alugar,-50-em-passaré,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-passare-bairros-fortaleza-com-garagem-50m2-aluguel-RS1100-id-2673761991/",
          "amenidades": [
            "Piscina",
            "Condomínio fechado",
            "Academia",
            "Aceita animais",
            "Jardim",
            "..."
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
          "vagas": null,
          "area": 50,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/9a829d7ad3e16538ab26fdb5397bb521/foto-1-de-apartamento-com-2-quartos-para-alugar,-50-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-centro-bairros-fortaleza-50m2-aluguel-RS850-id-2684437633/",
          "amenidades": [
            "Varanda",
            "Área de serviço",
            "Armário na cozinha",
            "Cozinha",
            "Interfone",
            "..."
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 50m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7329688,
            "lng": -38.5264661
          }
        },
        {
          "endereco": "Rua Barão do Rio Branco, 1071 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 40,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/bd74b107b5a0ee4e7f9b99829394f7bc/foto-1-de-sala-comercial-para-alugar,-40-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-40m2-aluguel-RS350-id-2530359570/",
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
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 30,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/37d88609e70f10c01e7faaa058de8a24/foto-1-de-imóvel-comercial-para-alugar,-30-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-centro-bairros-fortaleza-30m2-aluguel-RS600-id-2682682959/",
          "amenidades": [

          ],
          "descricao": "Imóvel Comercial para alugar, 30m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7291185,
            "lng": -38.5207227
          }
        },
        {
          "endereco": "Rua Pedro Borges, 33 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 34,
          "valor_aluguel": null,
          "url_imagem": null,
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-34m2-venda-RS90000-id-2624365914/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para venda ou aluguel, 34m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7279488,
            "lng": -38.5255179
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 6997 - Papicu, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 3,
          "vagas": 1,
          "area": 100,
          "valor_aluguel": "1.600",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/3355f28399b035e1652f7968a1c58a9e/foto-1-de-apartamento-com-2-quartos-para-alugar,-100-em-papicu,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-papicu-bairros-fortaleza-com-garagem-100m2-aluguel-RS1600-id-2684591028/",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Aceita animais",
            "Jardim",
            "Playground",
            "..."
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 100m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7449705,
            "lng": -38.4701489
          }
        },
        {
          "endereco": "Rua Visconde de Mauá, 530 - Meireles, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 8,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/336d50229c7490058bf1985cb97f2778/foto-1-de-lote/terreno-para-alugar,-8-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-meireles-bairros-fortaleza-8m2-aluguel-RS200-id-2682679108/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar, 8m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7305609,
            "lng": -38.49791
          }
        },
        {
          "endereco": "Rua Waldery Uchôa - Benfica, Fortaleza - CE",
          "quartos": 4,
          "banheiros": 1,
          "vagas": 1,
          "area": 120,
          "valor_aluguel": "1.550",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a55ec77a33b28ce755e96fa36ef95517/foto-1-de-casa-com-4-quartos-para-alugar,-120-em-benfica,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-4-quartos-benfica-bairros-fortaleza-com-garagem-120m2-aluguel-RS1550-id-2684406870/",
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
          "vagas": 1,
          "area": 55,
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/49b269c3eee13d63d8da40a9fbcd59db/foto-1-de-apartamento-com-2-quartos-para-alugar,-55-em-dias-macedo,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-dias-macedo-bairros-fortaleza-com-garagem-55m2-aluguel-RS1200-id-2684632103/",
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
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 45,
          "valor_aluguel": "1.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/b2aea0b7320f1a695d594369bd8f9228/foto-1-de-ponto-comercial-para-alugar,-45-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-meireles-bairros-fortaleza-45m2-aluguel-RS1500-id-2659904068/",
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
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 1300,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/7190c60d909545065ee984c4db54e2a8/foto-1-de-lote/terreno-para-alugar,-1300-em-maraponga,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-maraponga-bairros-fortaleza-1300m2-aluguel-RS800-id-2672795083/",
          "amenidades": [

          ],
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
          "valor_aluguel": "1.400",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/93775309210fc493febc1de17090d737/foto-1-de-apartamento-com-3-quartos-para-alugar,-120-em-paupina,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-paupina-bairros-fortaleza-com-garagem-120m2-aluguel-RS1400-id-2680978123/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Condomínio fechado",
            "Aceita animais",
            "Jardim",
            "..."
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 120m² em Paupina, Fortaleza",
          "coords": {
            "lat": -3.844198,
            "lng": -38.493833
          }
        },
        {
          "endereco": "Rua República do Líbano, 1200 - Varjota, Fortaleza - CE",
          "quartos": null,
          "banheiros": 6,
          "vagas": null,
          "area": 400,
          "valor_aluguel": "9.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/7f1a0effed6c2f9c2bd1ca1c2eb42cbf/foto-1-de-ponto-comercial-para-alugar,-400-em-varjota,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-varjota-bairros-fortaleza-400m2-aluguel-RS9500-id-2678321198/",
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
          "vagas": 1,
          "area": 110,
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/5afbc4b5c80e53e0d1a613a2082448af/foto-1-de-apartamento-com-3-quartos-para-alugar,-110-em-fátima,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-fatima-bairros-fortaleza-com-garagem-110m2-aluguel-RS1200-id-2683698727/",
          "amenidades": [
            "Condomínio fechado",
            "Varanda",
            "Aceita animais",
            "Área de serviço",
            "Portaria 24h",
            "..."
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 110m² em Fátima, Fortaleza",
          "coords": {
            "lat": -3.7557858,
            "lng": -38.5336375
          }
        },
        {
          "endereco": "Rua Professor Jacinto Botelho, 75 - Guararapes, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 50,
          "valor_aluguel": "2.300",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/34c8b4ecab40ee88660b0199786c2ff2/foto-1-de-ponto-comercial-para-alugar,-50-em-guararapes,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-guararapes-bairros-fortaleza-50m2-aluguel-RS2300-id-2681918411/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 50m² em Guararapes, Fortaleza",
          "coords": {
            "lat": -3.757879,
            "lng": -38.4905585
          }
        },
        {
          "endereco": "Rua Carlos Vasconcelos, 617 - Meireles, Fortaleza - CE",
          "quartos": 4,
          "banheiros": 5,
          "vagas": 5,
          "area": 225,
          "valor_aluguel": "11.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/8e617cb88522bf6a7c52278bbb8bbe4a/foto-1-de-apartamento-com-4-quartos-para-alugar,-225-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-4-quartos-meireles-bairros-fortaleza-com-garagem-225m2-aluguel-RS11000-id-2683956439/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 4 Quartos para alugar, 225m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7277308,
            "lng": -38.508865
          }
        },
        {
          "endereco": "Rua da Assunção, 944 - Centro, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": null,
          "area": 41,
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/9843cb59e640bd071ef0f0931e2277d7/foto-1-de-apartamento-com-2-quartos-para-alugar,-41-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-centro-bairros-fortaleza-41m2-aluguel-RS1000-id-2684520105/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 41m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7381767,
            "lng": -38.5301699
          }
        },
        {
          "endereco": "Rua Paulo Mendes, 155 - Praia do Futuro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": 1,
          "area": 98,
          "valor_aluguel": "1.100",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/da28070b27aed9bdb78b3133aed883bd/foto-1-de-ponto-comercial-para-alugar,-98-em-praia-do-futuro,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-praia-do-futuro-bairros-fortaleza-com-garagem-98m2-aluguel-RS1100-id-2582780154/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 98m² em Praia do Futuro, Fortaleza",
          "coords": {
            "lat": -3.7492867,
            "lng": -38.44709840000001
          }
        },
        {
          "endereco": "Rua Álvaro Bomilcar, 3873 - Tauape, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": 1,
          "area": 80,
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a090ec623eba5e5f74ef423e127e7306/foto-1-de-apartamento-com-2-quartos-para-alugar,-80-em-tauape,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-tauape-bairros-fortaleza-com-garagem-80m2-aluguel-RS1200-id-2682138906/",
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
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 438,
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2e8200a92c2e3dbc71c74dbcdc3d100a/foto-1-de-lote/terreno-para-alugar,-438-em-parque-dois-irmãos,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-parque-dois-irmaos-bairros-fortaleza-438m2-aluguel-RS1200-id-2672791894/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar, 438m² em Parque Dois Irmãos, Fortaleza",
          "coords": {
            "lat": -3.8010167,
            "lng": -38.5502464
          }
        },
        {
          "endereco": "Avenida Américo Barreira, 909 - Demócrito Rocha, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": 5,
          "area": 360,
          "valor_aluguel": "5.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/41b1568a431446bfaebabff7d3c45c24/foto-1-de-galpão/depósito/armazém-para-alugar,-360-em-demócrito-rocha,-fortaleza.jpg",
          "url_detalhes": "/imovel/galpao-deposito-armazem-democrito-rocha-bairros-fortaleza-com-garagem-360m2-aluguel-RS5500-id-2674927699/",
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
          "banheiros": 1,
          "vagas": null,
          "area": 55,
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d9fd72bfbfcbd8e5bd7121ba50d5713a/foto-1-de-casa-com-1-quarto-para-alugar,-55-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-1-quartos-centro-bairros-fortaleza-55m2-aluguel-RS1000-id-2684409535/",
          "amenidades": [

          ],
          "descricao": "Casa com 1 Quarto para alugar, 55m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.72564,
            "lng": -38.521067
          }
        },
        {
          "endereco": "Avenida da Abolição, 2021 - Meireles, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 4,
          "vagas": 2,
          "area": 144,
          "valor_aluguel": "7.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/cebbeb5240a70f19291da0c715009568/foto-1-de-apartamento-com-3-quartos-para-alugar,-144-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-meireles-bairros-fortaleza-com-garagem-144m2-aluguel-RS7500-id-2684518712/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 50,
          "valor_aluguel": "1.300",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/4e38f6b3e927dd8097b0fa65f60820f3/foto-1-de-ponto-comercial-para-alugar,-50-em-parquelândia,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-parquelandia-bairros-fortaleza-50m2-aluguel-RS1300-id-2684397941/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 50m² em Parquelândia, Fortaleza",
          "coords": {
            "lat": -3.736308,
            "lng": -38.555715
          }
        },
        {
          "endereco": "Rua Andrade Furtado, 1179 - Cocó, Fortaleza - CE",
          "quartos": 4,
          "banheiros": 6,
          "vagas": 3,
          "area": 178,
          "valor_aluguel": "5.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/0166b899cc0f957a8d356b88f3e87155/foto-1-de-apartamento-com-4-quartos-para-alugar,-178-em-cocó,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-4-quartos-coco-bairros-fortaleza-com-garagem-178m2-aluguel-RS5500-id-2684628608/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Academia",
            "Espaço gourmet",
            "Ar-condicionado",
            "..."
          ],
          "descricao": "Apartamento com 4 Quartos para alugar, 178m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.7459107,
            "lng": -38.4784905
          }
        },
        {
          "endereco": "Rua Pedro Borges, 30 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 40,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/9594780f76930c6244d09b6b69656f15/foto-1-de-sala-comercial-para-alugar,-40-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-40m2-aluguel-RS800-id-2646364170/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 40m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.728075,
            "lng": -38.5260597
          }
        },
        {
          "endereco": "Rua 101 - Novo Mondubim, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": 1,
          "area": 41,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/56cef83022587dcc9a1d0179e11a1b47/foto-1-de-apartamento-com-2-quartos-para-venda-ou-aluguel,-41-em-novo-mondubim,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-novo-mondubim-bairros-fortaleza-com-garagem-41m2-venda-RS120000-id-2668724902/",
          "amenidades": [
            "Churrasqueira",
            "Interfone",
            "Quadra poliesportiva",
            "Aceita animais"
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
          "banheiros": 1,
          "vagas": 1,
          "area": 47,
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a20150c8f51ced96f7d631358c3a950b/foto-1-de-apartamento-com-2-quartos-para-alugar,-47-em-passaré,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-passare-bairros-fortaleza-com-garagem-47m2-aluguel-RS1200-id-2682201396/",
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
          "banheiros": 2,
          "vagas": 1,
          "area": 200,
          "valor_aluguel": "2.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/ff2f1852fcb89c9cead763aff1f3a77e/foto-1-de-casa-de-condomínio-com-3-quartos-para-alugar,-200-em-praia-do-futuro-ii,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-de-condominio-3-quartos-praia-do-futuro-ii-bairros-fortaleza-com-garagem-200m2-aluguel-RS2500-id-2664165403/",
          "amenidades": [
            "Piscina",
            "Condomínio fechado",
            "Varanda",
            "Aceita animais",
            "Jardim",
            "..."
          ],
          "descricao": "Casa de Condomínio com 3 Quartos para alugar, 200m² em Praia do Futuro II, Fortaleza",
          "coords": {
            "lat": -3.751626,
            "lng": -38.44677799999999
          }
        },
        {
          "endereco": "Rua Senador Pompeu, 649 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 23,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/1957ccadb915262e563085502ae84f98/foto-1-de-sala-comercial-para-alugar,-23-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-23m2-aluguel-RS600-id-2661379813/",
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
          "banheiros": 2,
          "vagas": 2,
          "area": 70,
          "valor_aluguel": "2.900",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/57974f8082264e21121355bdf167f51a/foto-1-de-apartamento-com-3-quartos-para-alugar,-70-em-cambeba,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-cambeba-bairros-fortaleza-com-garagem-70m2-aluguel-RS2900-id-2681779000/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Aceita animais",
            "..."
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
          "banheiros": 1,
          "vagas": null,
          "area": 40,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/007f3a9c14445b235ab6d84f5b84a6ca/foto-1-de-apartamento-com-2-quartos-para-alugar,-40-em-antônio-bezerra,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-antonio-bezerra-bairros-fortaleza-40m2-aluguel-RS880-id-2684430827/",
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
          "banheiros": 1,
          "vagas": null,
          "area": 22,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2bab2259207fca02dd562878fe4d8283/foto-1-de-kitnet-com-1-quarto-para-alugar,-22-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/kitnet-1-quartos-centro-bairros-fortaleza-22m2-aluguel-RS300-id-2684240737/",
          "amenidades": [

          ],
          "descricao": "Kitnet com 1 Quarto para alugar, 22m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7264458,
            "lng": -38.5203816
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 75,
          "valor_aluguel": "1.434",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/cc068260f6c05c394769a480f6a06ec2/foto-1-de-sala-comercial-para-alugar,-75-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-75m2-aluguel-RS1434-id-2561791253/",
          "amenidades": [

          ],
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
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/3383f3f7ee68794e219fab2460c802da/foto-1-de-apartamento-com-2-quartos-para-alugar,-42-em-barroso,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-barroso-bairros-fortaleza-com-garagem-42m2-aluguel-RS1000-id-2684139560/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Aceita animais",
            "Garagem",
            "..."
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
          "banheiros": 1,
          "vagas": 1,
          "area": 45,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/f641d6a1159961fcb870e1a27a0e79b7/foto-1-de-apartamento-com-2-quartos-para-alugar,-45-em-barroso,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-barroso-bairros-fortaleza-com-garagem-45m2-aluguel-RS900-id-2681989328/",
          "amenidades": [
            "Interfone",
            "Aceita animais"
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
          "banheiros": 1,
          "vagas": 1,
          "area": 44,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/7f9938513c824b440f60c5b981383a64/foto-1-de-apartamento-com-2-quartos-para-alugar,-44-em-parque-dois-irmãos,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-parque-dois-irmaos-bairros-fortaleza-com-garagem-44m2-aluguel-RS800-id-2608979675/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Aceita animais",
            "Garagem",
            "Área de serviço",
            "..."
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
          "valor_aluguel": "2.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/4ba82d0165b60016a142de04e4be873a/foto-1-de-apartamento-com-3-quartos-para-alugar,-118-em-cocó,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-coco-bairros-fortaleza-com-garagem-118m2-aluguel-RS2000-id-2641104237/",
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
          "banheiros": 1,
          "vagas": null,
          "area": 54,
          "valor_aluguel": "1.400",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/cda03429dd7ee44ccb1b0516dca95b20/foto-1-de-casa-com-2-quartos-para-alugar,-54-em-cidade-2000,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-2-quartos-cidade-2000-bairros-fortaleza-54m2-aluguel-RS1400-id-2684293620/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 44,
          "valor_aluguel": "3.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/8a1ad59ad147c8498874fe68cecea7ca/foto-1-de-ponto-comercial-para-alugar,-44-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-centro-bairros-fortaleza-44m2-aluguel-RS3000-id-2655309514/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 44m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7264026,
            "lng": -38.5303294
          }
        },
        {
          "endereco": "Rua Justiniano de Serpa, 268 - Farias Brito, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": null,
          "area": 60,
          "valor_aluguel": "1.000",
          "url_imagem": null,
          "url_detalhes": "/imovel/apartamento-2-quartos-farias-brito-bairros-fortaleza-60m2-aluguel-RS1000-id-2684621415/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 60m² em Farias Brito, Fortaleza",
          "coords": {
            "lat": -3.7335104,
            "lng": -38.5424416
          }
        },
        {
          "endereco": "Avenida da Saudade, 95 - Passaré, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 60,
          "valor_aluguel": "1.840",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/57221d852489e8186252e1c090710c71/foto-1-de-apartamento-com-3-quartos-para-alugar,-60-em-passaré,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-passare-bairros-fortaleza-com-garagem-60m2-aluguel-RS1840-id-2644301666/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Condomínio fechado",
            "Varanda",
            "Academia",
            "..."
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
          "banheiros": 1,
          "vagas": 1,
          "area": 60,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/529dca75a3bb314240f8f7b57274d2a6/foto-1-de-apartamento-com-3-quartos-para-alugar,-60-em-messejana,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-messejana-bairros-fortaleza-com-garagem-60m2-aluguel-RS800-id-2684735496/",
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
          "valor_aluguel": "2.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/cd3768d7c25b344b8e31d160b83a87e7/foto-1-de-casa-de-condomínio-com-2-quartos-para-alugar,-160-em-praia-do-futuro-ii,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-de-condominio-2-quartos-praia-do-futuro-ii-bairros-fortaleza-com-garagem-160m2-aluguel-RS2000-id-2664394600/",
          "amenidades": [
            "Piscina",
            "Condomínio fechado",
            "Jardim",
            "Área de serviço",
            "Portaria 24h",
            "..."
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
          "banheiros": 2,
          "vagas": 2,
          "area": 70,
          "valor_aluguel": "3.100",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/40f9484d507de8e6bf99b7ebbd06434d/foto-1-de-apartamento-com-3-quartos-para-alugar,-70-em-guararapes,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-guararapes-bairros-fortaleza-com-garagem-70m2-aluguel-RS3100-id-2575126594/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda",
            "..."
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 70m² em Guararapes, Fortaleza",
          "coords": {
            "lat": -3.7754212,
            "lng": -38.4780354
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 76,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/562de7287992cc57b665a87d231c5fbc/foto-1-de-sala-comercial-para-alugar,-76-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-76m2-aluguel-RS250-id-2566172878/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 76m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Rua Pereira Filgueiras, 778 - Centro, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 3,
          "vagas": 1,
          "area": 142,
          "valor_aluguel": "2.300",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/ce2898dfe4e86aafe507f0ca59578c5e/foto-1-de-casa-com-2-quartos-para-alugar,-142-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-2-quartos-centro-bairros-fortaleza-com-garagem-142m2-aluguel-RS2300-id-2684411540/",
          "amenidades": [

          ],
          "descricao": "Casa com 2 Quartos para alugar, 142m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7275622,
            "lng": -38.5157641
          }
        },
        {
          "endereco": "Rua Alcântara Bilhar, 4174 Altos - Padre Andrade, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 35,
          "valor_aluguel": "1.300",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/553f0d2b50b87f1653c5e16887fdd133/foto-1-de-ponto-comercial-para-alugar,-35-em-padre-andrade,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-padre-andrade-bairros-fortaleza-35m2-aluguel-RS1300-id-2684396349/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 35m² em Padre Andrade, Fortaleza",
          "coords": {
            "lat": -3.7370093,
            "lng": -38.5819121
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 75,
          "valor_aluguel": "1.434",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/6906a40f982bc393f868ce0668566e8e/foto-1-de-sala-comercial-para-alugar,-75-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-75m2-aluguel-RS1434-id-2547859694/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 75m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Rua Zacarias Gondim, 54 - Montese, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": null,
          "area": 40,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/bbaf1851bfef366dffe3c6eefa91c83b/foto-1-de-apartamento-com-2-quartos-para-alugar,-40-em-montese,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-montese-bairros-fortaleza-40m2-aluguel-RS760-id-2684637223/",
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
          "banheiros": 3,
          "vagas": 1,
          "area": 100,
          "valor_aluguel": "1.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d3276593b0ab80902e87a98b37c76227/foto-1-de-apartamento-com-3-quartos-para-alugar,-100-em-damas,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-damas-bairros-fortaleza-com-garagem-100m2-aluguel-RS1500-id-2684640596/",
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
          "banheiros": 4,
          "vagas": null,
          "area": 65,
          "valor_aluguel": "2.800",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/5c449ac4b3f62889f2e6347fcd1e6dc6/foto-1-de-apartamento-com-2-quartos-para-alugar,-65-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-meireles-bairros-fortaleza-65m2-aluguel-RS2800-id-2684411640/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 65m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7269282,
            "lng": -38.5017384
          }
        },
        {
          "endereco": "Rua 101 - Mondubim, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": 1,
          "area": 43,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/4a60d84b8bee63f31b7adb6d0d3301d6/foto-1-de-apartamento-com-2-quartos-para-venda-ou-aluguel,-43-em-mondubim,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-mondubim-bairros-fortaleza-com-garagem-43m2-venda-RS115000-id-2683324613/",
          "amenidades": [
            "Interfone",
            "Quadra poliesportiva",
            "Sistema de alarme",
            "Aceita animais"
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
          "vagas": 2,
          "area": 60,
          "valor_aluguel": "1.840",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/18a9ead0edabf199c78c2ce9f18e7af7/foto-1-de-apartamento-com-3-quartos-para-alugar,-60-em-passaré,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-passare-bairros-fortaleza-com-garagem-60m2-aluguel-RS1840-id-2644310895/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Condomínio fechado",
            "Varanda",
            "Academia",
            "..."
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 60m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.8137683,
            "lng": -38.5313796
          }
        },
        {
          "endereco": "Rua Senador Alencar, 632 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 40,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d090605b570ed592a227dde75ff7f638/foto-1-de-sala-comercial-para-alugar,-40-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-40m2-aluguel-RS800-id-2530358321/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/5fafec5fc09fb2b0904df9bea33ace18/foto-1-de-sala-comercial-para-alugar,-42-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-42m2-aluguel-RS500-id-2590874031/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Avenida Geógrafo Antônio Ribeiro Zaranza, 2598 - Cajazeiras, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": null,
          "area": 45,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d1dad68009e0ca0c0aca16aa92275e13/foto-1-de-apartamento-com-2-quartos-para-alugar,-45-em-cajazeiras,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-cajazeiras-bairros-fortaleza-45m2-aluguel-RS800-id-2660348681/",
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
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 825,
          "valor_aluguel": "1.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/f863cb8828b1b44e8851f00d9268055c/foto-1-de-lote/terreno-para-alugar,-825-em-antônio-diogo,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-antonio-diogo-bairros-fortaleza-825m2-aluguel-RS1500-id-2628642648/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar, 825m² em Antônio Diogo, Fortaleza",
          "coords": {
            "lat": -3.7521079,
            "lng": -38.4553776
          }
        },
        {
          "endereco": "Rua Pedro I, 233 - Centro, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 1,
          "vagas": null,
          "area": 40,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/524e5c055ab0a3449f3fa2298235eec5/foto-1-de-apartamento-com-1-quarto-para-alugar,-40-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-1-quartos-centro-bairros-fortaleza-40m2-aluguel-RS850-id-2684558812/",
          "amenidades": [
            "Condomínio fechado",
            "Portaria 24h",
            "Interfone",
            "Janela grande",
            "Portão eletrônico",
            "..."
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
          "banheiros": 1,
          "vagas": 1,
          "area": 55,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/b7172b3d65017bbb44bcdca94eb533ac/foto-1-de-apartamento-com-2-quartos-para-alugar,-55-em-cidade-dos-funcionários,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-cidade-dos-funcionarios-bairros-fortaleza-com-garagem-55m2-aluguel-RS900-id-2631478377/",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Aceita animais",
            "Área de serviço",
            "Perto de vias de acesso",
            "..."
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 55m² em Cidade dos Funcionários, Fortaleza",
          "coords": {
            "lat": -3.7927977,
            "lng": -38.49386810000001
          }
        },
        {
          "endereco": "Rua Senador Pompeu, 649 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 23,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/35f4e55c732df6c030670b4f96140901/foto-1-de-sala-comercial-para-alugar,-23-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-23m2-aluguel-RS600-id-2661380141/",
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
          "banheiros": 1,
          "vagas": null,
          "area": 40,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/9ffdbc3eae011b6e18d136bb48acf341/foto-1-de-kitnet-com-1-quarto-para-alugar,-40-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/kitnet-1-quartos-centro-bairros-fortaleza-40m2-aluguel-RS709-id-2684473410/",
          "amenidades": [
            "Condomínio fechado",
            "Portão eletrônico",
            "Portaria 24h",
            "Aceita animais"
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
          "banheiros": 3,
          "vagas": 1,
          "area": 55,
          "valor_aluguel": "3.100",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/71efce657d9e1317b0622f24dbd1fa28/foto-1-de-apartamento-com-2-quartos-para-alugar,-55-em-edson-queiroz,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-edson-queiroz-bairros-fortaleza-com-garagem-55m2-aluguel-RS3100-id-2667942620/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda",
            "..."
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
          "vagas": 1,
          "area": 150,
          "valor_aluguel": "1.550",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/bad9813fd803f5080c3a37fd2b43d233/foto-1-de-casa-com-2-quartos-para-alugar,-150-em-pici,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-2-quartos-pici-bairros-fortaleza-com-garagem-150m2-aluguel-RS1550-id-2659419792/",
          "amenidades": [
            "Área de serviço",
            "Quintal",
            "Interfone",
            "Aceita animais"
          ],
          "descricao": "Casa com 2 Quartos para alugar, 150m² em Pici, Fortaleza",
          "coords": {
            "lat": -3.7364791,
            "lng": -38.5454594
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 31,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/41ab5be5363f229251f4e5fac79ae6c7/foto-1-de-sala-comercial-para-alugar,-31-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-31m2-aluguel-RS400-id-2476318259/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 34,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/e158c037830585097407ced3df1124ec/foto-1-de-sala-comercial-para-alugar,-34-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-34m2-aluguel-RS250-id-2663153303/",
          "amenidades": [

          ],
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
          "valor_aluguel": "1.900",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/97bff4e9f5bf53e74680d55ee85f279c/foto-1-de-apartamento-com-2-quartos-para-alugar,-52-em-cambeba,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-cambeba-bairros-fortaleza-com-garagem-52m2-aluguel-RS1900-id-2681246395/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda",
            "..."
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 52m² em Cambeba, Fortaleza",
          "coords": {
            "lat": -3.8032847,
            "lng": -38.4886881
          }
        },
        {
          "endereco": "Rua do Pocinho, 33 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 34,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/439ab827e82749e54510b84c6207c112/foto-1-de-sala-comercial-para-venda-ou-aluguel,-34-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-34m2-venda-RS80000-id-2624366115/",
          "amenidades": [

          ],
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
          "valor_aluguel": "2.400",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/9e20d8677413c16fb57e64a4b4d51fdc/foto-1-de-apartamento-com-3-quartos-para-alugar,-70-em-engenheiro-luciano-cavalcante,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-engenheiro-luciano-cavalcante-bairros-fortaleza-com-garagem-70m2-aluguel-RS2400-id-2682326551/",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Aceita animais",
            "Área de serviço",
            "Portaria 24h",
            "..."
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
          "banheiros": 1,
          "vagas": 1,
          "area": 65,
          "valor_aluguel": "1.600",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/eddb6b75ba13bcaf7c5c42d2db0159ec/foto-1-de-apartamento-com-2-quartos-para-alugar,-65-em-jardim-cearense,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-jardim-cearense-bairros-fortaleza-com-garagem-65m2-aluguel-RS1600-id-2673763595/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda",
            "..."
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 65m² em Jardim Cearense, Fortaleza",
          "coords": {
            "lat": -3.8032285,
            "lng": -38.5683344
          }
        },
        {
          "endereco": "Rua Pereira Filgueiras, 2020 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 36,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d27ba26982f128d66ec96cc5596b2fa4/foto-1-de-sala-comercial-para-alugar,-36-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-aldeota-bairros-fortaleza-36m2-aluguel-RS800-id-2476320320/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 36m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.73106,
            "lng": -38.50461
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 32,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/bbc2ee269dcfc89d1217059a98870b81/foto-1-de-sala-comercial-para-alugar,-32-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-32m2-aluguel-RS250-id-2566171915/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 32m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Avenida Mozart Pinheiro de Lucena, 3106 - Quintino Cunha, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": null,
          "area": 60,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d14d12a5fe7aac1a6882ec2e2eb11290/foto-1-de-apartamento-com-2-quartos-para-alugar,-60-em-quintino-cunha,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-quintino-cunha-bairros-fortaleza-60m2-aluguel-RS509-id-2503692701/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 60m² em Quintino Cunha, Fortaleza",
          "coords": {
            "lat": -3.731846,
            "lng": -38.5996924
          }
        },
        {
          "endereco": "Rua Doutor Edmilson Barros de Oliveira - Cocó, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 440,
          "valor_aluguel": "2.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/fedc821d4670613a5cf4d3955d697198/foto-1-de-lote/terreno-para-venda-ou-aluguel,-440-em-cocó,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-coco-bairros-fortaleza-440m2-venda-RS650000-id-2554835498/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para venda ou aluguel, 440m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.7515363,
            "lng": -38.4940296
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/69e22e31169f42ecbcb967bdee084ca6/foto-1-de-sala-comercial-para-alugar,-42-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-42m2-aluguel-RS500-id-2476322391/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 75,
          "valor_aluguel": "1.434",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/4029b663c518540101ef35f09d68390d/foto-1-de-sala-comercial-para-alugar,-75-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-75m2-aluguel-RS1434-id-2547861672/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 75m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Avenida Desembargador Moreira, 1701 - Meireles, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 28,
          "valor_aluguel": null,
          "url_imagem": null,
          "url_detalhes": "/imovel/predio-comercial-meireles-bairros-fortaleza-28m2-aluguel-RS950-id-2647884959/",
          "amenidades": [

          ],
          "descricao": "Prédio Comercial para alugar, 28m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7411064,
            "lng": -38.4996512
          }
        },
        {
          "endereco": "Rua Pedro Dantas, 415 - Dias Macedo, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 176,
          "valor_aluguel": "4.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a3c3b6b8b9ff7f7472a72607e2d17a86/foto-1-de-ponto-comercial-para-alugar,-176-em-dias-macedo,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-dias-macedo-bairros-fortaleza-176m2-aluguel-RS4000-id-2657331833/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 176m² em Dias Macedo, Fortaleza",
          "coords": {
            "lat": -3.7861273,
            "lng": -38.5212914
          }
        },
        {
          "endereco": "Rua C, 91 - Passaré, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": 1,
          "area": 45,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d0ccf1a743ae1220db576f384a36410d/foto-1-de-apartamento-com-2-quartos-para-alugar,-45-em-passaré,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-passare-bairros-fortaleza-com-garagem-45m2-aluguel-RS900-id-2653978266/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Condomínio fechado",
            "Academia",
            "Aceita animais",
            "..."
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 45m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.8017106,
            "lng": -38.5397131
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/f85d53ad8ec5926217655f4a739d8c8a/foto-1-de-sala-comercial-para-alugar,-42-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-42m2-aluguel-RS500-id-2476317666/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Carlos Vasconcelos, 889 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 35,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/8d1565c3d0c732791f218dc9ac1a02a9/foto-1-de-sala-comercial-para-alugar,-35-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-aldeota-bairros-fortaleza-35m2-aluguel-RS880-id-2530357154/",
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
          "banheiros": 3,
          "vagas": 2,
          "area": 120,
          "valor_aluguel": "2.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/0761346444512ac54a47b03929216d90/foto-1-de-apartamento-com-3-quartos-para-alugar,-120-em-cocó,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-coco-bairros-fortaleza-com-garagem-120m2-aluguel-RS2000-id-2684005523/",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Aceita animais",
            "Jardim",
            "Área de serviço",
            "..."
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
          "valor_aluguel": "3.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/9306441e958d1987c0655b218f8c1247/foto-1-de-apartamento-com-3-quartos-para-alugar,-96-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-aldeota-bairros-fortaleza-com-garagem-96m2-aluguel-RS3000-id-2681233391/",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Varanda",
            "Academia",
            "Aceita animais",
            "..."
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
          "banheiros": 3,
          "vagas": 2,
          "area": 90,
          "valor_aluguel": "1.550",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/091a5dfc0bc5c9d695b3e6eada0a3e92/foto-1-de-apartamento-com-4-quartos-para-alugar,-90-em-fátima,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-4-quartos-fatima-bairros-fortaleza-com-garagem-90m2-aluguel-RS1550-id-2684405438/",
          "amenidades": [
            "Varanda",
            "Aceita animais",
            "Garagem",
            "Jardim",
            "Playground",
            "..."
          ],
          "descricao": "Apartamento com 4 Quartos para alugar, 90m² em Fátima, Fortaleza",
          "coords": {
            "lat": -3.745701,
            "lng": -38.5261942
          }
        },
        {
          "endereco": "Rua João Gentil, 2964 - Granja Lisboa, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 85,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/f71734cf29a0524704e9bb62eaf7734c/foto-1-de-ponto-comercial-para-alugar,-85-em-granja-lisboa,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-granja-lisboa-bairros-fortaleza-85m2-aluguel-RS850-id-2646365082/",
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
          "vagas": 2,
          "area": 60,
          "valor_aluguel": "1.900",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/5c4b02500b173c66afe7006df5777727/foto-1-de-apartamento-com-3-quartos-para-alugar,-60-em-passaré,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-passare-bairros-fortaleza-com-garagem-60m2-aluguel-RS1900-id-2664968766/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda",
            "..."
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 60m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.8137683,
            "lng": -38.5313796
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 38,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/6456c2125947790b80318e8fed025a8f/foto-1-de-sala-comercial-para-alugar,-38-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-38m2-aluguel-RS250-id-2566172134/",
          "amenidades": [

          ],
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
          "valor_aluguel": "1.300",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/73bb51af96946d185e6160cd59e3bfda/foto-1-de-apartamento-com-3-quartos-para-alugar,-62-em-messejana,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-messejana-bairros-fortaleza-com-garagem-62m2-aluguel-RS1300-id-2684025352/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 27,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/5aa8700094caf7edfd9eb6566811f65b/foto-1-de-sala-comercial-para-alugar,-27-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-27m2-aluguel-RS309-id-2567893407/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 48,
          "valor_aluguel": "1.300",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/60bfba0dbd790049a75f4c799be0fa1b/foto-1-de-sala-comercial-para-alugar,-48-em-edson-queiroz,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-edson-queiroz-bairros-fortaleza-48m2-aluguel-RS1300-id-2683072992/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 48m² em Edson Queiroz, Fortaleza",
          "coords": {
            "lat": -3.7712784,
            "lng": -38.4825694
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/120de48070281953c8f2b022383a9eb8/foto-1-de-sala-comercial-para-alugar,-42-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-42m2-aluguel-RS500-id-2476321811/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/67370ae820da3d5ba4893cc0b7b65d3d/foto-1-de-sala-comercial-para-alugar,-42-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-42m2-aluguel-RS500-id-2476322201/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 38,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/75155f69d779a9642d7f96b6ba3596e7/foto-1-de-sala-comercial-para-alugar,-38-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-38m2-aluguel-RS250-id-2566171914/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Rua Bento Albuquerque, 1555 - Cocó, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 120,
          "valor_aluguel": "2.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/8d0a423c2bcc748ae2c43cb34b20529a/foto-1-de-apartamento-com-3-quartos-para-alugar,-120-em-cocó,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-coco-bairros-fortaleza-com-garagem-120m2-aluguel-RS2000-id-2684003013/",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Aceita animais",
            "Jardim",
            "Área de serviço",
            "..."
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 120m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.746066,
            "lng": -38.4753206
          }
        },
        {
          "endereco": "Rua do Rosário, 77 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 60,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/1d153e9e90e1f68a332de8f78a4c1bdf/foto-1-de-sala-comercial-para-alugar,-60-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-60m2-aluguel-RS901-id-2547861196/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 60m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.728418999999999,
            "lng": -38.5262788
          }
        },
        {
          "endereco": "Rua Professor Solon Farias, Lt-07 - Sapiranga, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 1720,
          "valor_aluguel": "3.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/6e930dd34ee22a9b1866e02e25965dde/foto-1-de-lote/terreno-para-alugar,-1720-em-sapiranga,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-sapiranga-bairros-fortaleza-1720m2-aluguel-RS3500-id-2683714821/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar, 1720m² em Sapiranga, Fortaleza",
          "coords": {
            "lat": -3.7860838,
            "lng": -38.4774042
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 60,
          "valor_aluguel": "1.143",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/33511f9faf7d7343dc4d06058afaca8a/foto-1-de-sala-comercial-para-alugar,-60-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-60m2-aluguel-RS1143-id-2561791256/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 60m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 31,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/8b0cbaf2165fd170e4ee9270ebfeb319/foto-1-de-sala-comercial-para-alugar,-31-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-31m2-aluguel-RS400-id-2476321051/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 74,
          "valor_aluguel": "1.407",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/336504740e8a46aa1c3c5796a36e3e3e/foto-1-de-sala-comercial-para-alugar,-74-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-74m2-aluguel-RS1407-id-2574566704/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 74m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Avenida Senador Virgílio Távora, 1701 - Meireles, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": null,
          "area": 35,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d4226198618d853755c9ac341a39c4bb/foto-1-de-imóvel-comercial-para-alugar,-35-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-meireles-bairros-fortaleza-35m2-aluguel-RS795-id-2682677726/",
          "amenidades": [

          ],
          "descricao": "Imóvel Comercial para alugar, 35m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7403814,
            "lng": -38.4939797
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 402 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 5,
          "vagas": null,
          "area": 578,
          "valor_aluguel": "17.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/45f9f917405d96a8f424b329aab1a0d9/foto-1-de-ponto-comercial-para-alugar,-578-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-centro-bairros-fortaleza-578m2-aluguel-RS17000-id-2663598769/",
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
          "banheiros": 1,
          "vagas": 1,
          "area": 45,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/c6f7417cb8a2d160df226c41378747d0/foto-1-de-apartamento-com-2-quartos-para-alugar,-45-em-siqueira,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-siqueira-bairros-fortaleza-com-garagem-45m2-aluguel-RS700-id-2629077795/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Aceita animais",
            "..."
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 45m² em Siqueira, Fortaleza",
          "coords": {
            "lat": -3.8105548,
            "lng": -38.6169552
          }
        },
        {
          "endereco": "Rua Senador Alencar - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 26,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2676909b94bf22db9fe20911ff852bf5/foto-1-de-sala-comercial-para-alugar,-26-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-26m2-aluguel-RS400-id-2588260947/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 26m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7229233,
            "lng": -38.5340305
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 34,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/974885c4d82971cffe29022d2c6236c0/foto-1-de-sala-comercial-para-alugar,-34-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-34m2-aluguel-RS250-id-2566172874/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 34m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 75,
          "valor_aluguel": "1.434",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/f572c8a97d106d9ba43c24b566cceb0b/foto-1-de-sala-comercial-para-alugar,-75-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-75m2-aluguel-RS1434-id-2547860396/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 75m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Rua A do Loteamento Residencial Célio Gurgel, 1697 - Barroso, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": 1,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/7bec9652ff9e9fa6bf83dcc365aea55d/foto-1-de-apartamento-com-2-quartos-para-alugar,-42-em-barroso,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-barroso-bairros-fortaleza-com-garagem-42m2-aluguel-RS900-id-2674510892/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Aceita animais",
            "Garagem",
            "..."
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 42m² em Barroso, Fortaleza",
          "coords": {
            "lat": -3.821732,
            "lng": -38.5817975
          }
        },
        {
          "endereco": "Avenida Dom Luís, 1233 - Meireles, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 31,
          "valor_aluguel": "1.100",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/aa83e3634b78be9b50b89136a1cbfd2e/foto-1-de-sala-comercial-para-alugar,-31-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-meireles-bairros-fortaleza-31m2-aluguel-RS1100-id-2675887616/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 35,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/af452c1688eefc12c7ac18d44b2b0110/foto-1-de-imóvel-comercial-para-alugar,-35-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-centro-bairros-fortaleza-35m2-aluguel-RS300-id-2682682953/",
          "amenidades": [

          ],
          "descricao": "Imóvel Comercial para alugar, 35m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7279488,
            "lng": -38.5255179
          }
        },
        {
          "endereco": "Rua Pedro Borges, 30 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 52,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/fdddbc3f585b8d7a767b876f97180d0c/foto-1-de-sala-comercial-para-alugar,-52-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-52m2-aluguel-RS600-id-2640120875/",
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
          "banheiros": 3,
          "vagas": null,
          "area": 60,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/66f11ed4a6eb2e7e570f4df14696ef2e/foto-1-de-apartamento-com-2-quartos-para-alugar,-60-em-parangaba,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-parangaba-bairros-fortaleza-60m2-aluguel-RS950-id-2684550415/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 60m² em Parangaba, Fortaleza",
          "coords": {
            "lat": -3.7805487,
            "lng": -38.5724567
          }
        },
        {
          "endereco": "Rua Três de Maio, 1140 - Bela Vista, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": null,
          "area": 75,
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/57b6f7a1bbbc345afacf6224da60464a/foto-1-de-casa-com-2-quartos-para-alugar,-75-em-bela-vista,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-2-quartos-bela-vista-bairros-fortaleza-75m2-aluguel-RS1000-id-2684518742/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 31,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/086d7bde6ef66172f6ac10171821e009/foto-1-de-sala-comercial-para-alugar,-31-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-31m2-aluguel-RS400-id-2476321050/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Avenida Senador Virgílio Távora, 1701 - Meireles, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": null,
          "area": 35,
          "valor_aluguel": null,
          "url_imagem": null,
          "url_detalhes": "/imovel/imovel-comercial-meireles-bairros-fortaleza-35m2-aluguel-RS795-id-2682682961/",
          "amenidades": [

          ],
          "descricao": "Imóvel Comercial para alugar, 35m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7403814,
            "lng": -38.4939797
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/f83a56a177aed628efe894539ece8407/foto-1-de-sala-comercial-para-alugar,-42-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-42m2-aluguel-RS500-id-2476320440/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 89,
          "valor_aluguel": "1.691",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/269bd3ec27d20d6b523b3ffbaa686a9b/foto-1-de-sala-comercial-para-alugar,-89-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-89m2-aluguel-RS1691-id-2547859697/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 89m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Rua Senador Pompeu, 649 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 23,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/12af3c62d80915d578bd307218ba5f73/foto-1-de-sala-comercial-para-alugar,-23-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-23m2-aluguel-RS600-id-2661380142/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 89,
          "valor_aluguel": "1.682",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/aae5575619e1cad6ef97da5e1c5cb82d/foto-1-de-sala-comercial-para-alugar,-89-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-89m2-aluguel-RS1682-id-2567976400/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 89m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 6740 - Papicu, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": 1,
          "area": 28,
          "valor_aluguel": "1.400",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/49b9051e6be6ac8618f8278defcc7db3/foto-1-de-sala-comercial-para-alugar,-28-em-papicu,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-papicu-bairros-fortaleza-com-garagem-28m2-aluguel-RS1400-id-2630487620/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 28m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.744682199999999,
            "lng": -38.4730944
          }
        },
        {
          "endereco": "Rodovia BR-116, 5850 - Cajazeiras, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/8731494ee7c9611ba6d7dcfc0161733e/foto-1-de-sala-comercial-para-alugar,-30-em-cajazeiras,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-cajazeiras-bairros-fortaleza-30m2-aluguel-RS600-id-2631745502/",
          "amenidades": [

          ],
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
          "valor_aluguel": "1.840",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/36edc37855db421224a89894fd2fda1e/foto-1-de-apartamento-com-3-quartos-para-alugar,-60-em-passaré,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-passare-bairros-fortaleza-com-garagem-60m2-aluguel-RS1840-id-2664969638/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda",
            "..."
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 60m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.8137683,
            "lng": -38.5313796
          }
        },
        {
          "endereco": "Rua Beatriz Segal, 0 - Barroso, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 495,
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/59f2e4a8ed8615e573e81efe2a0e1606/foto-1-de-lote/terreno-para-alugar,-495-em-barroso,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-barroso-bairros-fortaleza-495m2-aluguel-RS1000-id-2629139128/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar, 495m² em Barroso, Fortaleza",
          "coords": {
            "lat": -3.7994272,
            "lng": -38.5086053
          }
        },
        {
          "endereco": "Rua Nunes Valente, 2025 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 134,
          "valor_aluguel": "4.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/e82b0ce5d265d4c83aa626ce34c94be1/foto-1-de-imóvel-comercial-para-alugar,-134-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-aldeota-bairros-fortaleza-134m2-aluguel-RS4000-id-2683571828/",
          "amenidades": [

          ],
          "descricao": "Imóvel Comercial para alugar, 134m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7423873,
            "lng": -38.505871
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 5335 - Papicu, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 30,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/5e3952114ff2f59d5b15c99f3d47aedc/foto-1-de-sala-comercial-para-alugar,-30-em-papicu,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-papicu-bairros-fortaleza-30m2-aluguel-RS750-id-2547859708/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 30m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7407389,
            "lng": -38.48346919999999
          }
        },
        {
          "endereco": "Cidade dos Funcionários, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 225,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/bae1f4e02ba9f3cb1d77d730ec9588fd/foto-1-de-lote/terreno-para-alugar,-225-em-cidade-dos-funcionários,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-cidade-dos-funcionarios-bairros-fortaleza-225m2-aluguel-RS600-id-2650167365/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar, 225m² em Cidade dos Funcionários, Fortaleza",
          "coords": {
            "lat": -3.7971588,
            "lng": -38.4999808
          }
        },
        {
          "endereco": "Rua Pedro Dantas, 413 - Dias Macedo, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 80,
          "valor_aluguel": "1.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/e30164ce69a81f5a50be60915d36ea19/foto-1-de-ponto-comercial-para-alugar,-80-em-dias-macedo,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-dias-macedo-bairros-fortaleza-80m2-aluguel-RS1500-id-2657335857/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 80m² em Dias Macedo, Fortaleza",
          "coords": {
            "lat": -3.7861367,
            "lng": -38.5212685
          }
        },
        {
          "endereco": "Rua Dragão do Mar, 345 - Praia de Iracema, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 1,
          "vagas": 1,
          "area": 41,
          "valor_aluguel": "2.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/5b3b0beba595ccc95df7dab428a7a803/foto-1-de-apartamento-com-1-quarto-para-alugar,-41-em-praia-de-iracema,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-1-quartos-praia-de-iracema-bairros-fortaleza-com-garagem-41m2-aluguel-RS2500-id-2677227697/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda",
            "..."
          ],
          "descricao": "Apartamento com 1 Quarto para alugar, 41m² em Praia de Iracema, Fortaleza",
          "coords": {
            "lat": -3.7217218,
            "lng": -38.5177504
          }
        },
        {
          "endereco": "Rua Barão do Rio Branco, 1071 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 27,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/10a6613126ba0d4cfd85194d04ed75c3/foto-1-de-sala-comercial-para-alugar,-27-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-27m2-aluguel-RS400-id-2559328778/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/4b73f87f969c4a54209d747f9e612efc/foto-1-de-sala-comercial-para-alugar,-42-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-42m2-aluguel-RS500-id-2476319993/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 31,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/95a50a0ff4a9afaa79465f585aef43fc/foto-1-de-sala-comercial-para-alugar,-31-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-31m2-aluguel-RS400-id-2476318262/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Rua Perboyre e Silva, 114 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 47,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2b34cb6a03200ebb924e7ce9771f6c02/foto-1-de-sala-comercial-para-alugar,-47-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-47m2-aluguel-RS450-id-2655352457/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 47m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7290021,
            "lng": -38.527104
          }
        },
        {
          "endereco": "Rua Paulo de Almeida Sanford, 145 - Edson Queiroz, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 4,
          "vagas": 2,
          "area": 171,
          "valor_aluguel": "3.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/cd9e45e4dc1eb60f85b85cd2f5411a6e/foto-1-de-casa-com-3-quartos-para-venda-ou-aluguel,-171-em-edson-queiroz,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-3-quartos-edson-queiroz-bairros-fortaleza-com-garagem-171m2-venda-RS545000-id-2646452460/",
          "amenidades": [
            "Cozinha",
            "Área de serviço",
            "Quintal"
          ],
          "descricao": "Casa com 3 Quartos para venda ou aluguel, 171m² em Edson Queiroz, Fortaleza",
          "coords": {
            "lat": -3.7877666,
            "lng": -38.4752562
          }
        },
        {
          "endereco": "Avenida Dom Luís, 500 - Meireles, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 28,
          "valor_aluguel": "1.100",
          "url_imagem": null,
          "url_detalhes": "/imovel/sala-comercial-meireles-bairros-fortaleza-28m2-aluguel-RS1100-id-2682046128/",
          "amenidades": [

          ],
          "descricao": null,
          "coords": {
            "lat": -3.7356097,
            "lng": -38.4909979
          }
        },
        {
          "endereco": "Rua Alberto Magno, 1374 - Montese, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2f4d8825689718732fe3a9b5d5f7edc0/foto-1-de-sala-comercial-para-alugar,-30-em-montese,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-montese-bairros-fortaleza-30m2-aluguel-RS1000-id-2646363314/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 30m² em Montese, Fortaleza",
          "coords": {
            "lat": -3.7660701,
            "lng": -38.5511422
          }
        },
        {
          "endereco": "Rua Major Facundo, 1680 - Fátima, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 80,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/da333c126791400b39f63452bdbcc45c/foto-1-de-ponto-comercial-para-alugar,-80-em-fátima,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-fatima-bairros-fortaleza-80m2-aluguel-RS700-id-2642813498/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 80m² em Fátima, Fortaleza",
          "coords": {
            "lat": -3.7375185,
            "lng": -38.5312369
          }
        },
        {
          "endereco": "Rua Pascoal de Castro Alves, 500 - Papicu, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 4,
          "vagas": 4,
          "area": 230,
          "valor_aluguel": "1.950",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/f77d62e81f5c942525e732efe06d4040/foto-1-de-imóvel-comercial-com-3-quartos-para-alugar,-230-em-papicu,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-3-quartos-papicu-bairros-fortaleza-com-garagem-230m2-aluguel-RS1950-id-2655437845/",
          "amenidades": [
            "Próximo a shopping"
          ],
          "descricao": "Imóvel Comercial com 3 Quartos para alugar, 230m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7327933,
            "lng": -38.4774281
          }
        },
        {
          "endereco": "Rua Brigadeiro Haroldo Veloso, 568 - Sapiranga, Fortaleza - CE",
          "quartos": 5,
          "banheiros": 5,
          "vagas": 16,
          "area": 480,
          "valor_aluguel": "5.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/c0c1ae244e6460cdbae0ca734d19aa59/foto-1-de-casa-com-5-quartos-para-alugar,-480-em-sapiranga,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-5-quartos-sapiranga-bairros-fortaleza-com-garagem-480m2-aluguel-RS5000-id-2682203200/",
          "amenidades": [
            "Churrasqueira",
            "Quintal",
            "Aceita animais",
            "Área de serviço",
            "Escritório",
            "..."
          ],
          "descricao": "Casa com 5 Quartos para alugar, 480m² em Sapiranga, Fortaleza",
          "coords": {
            "lat": -3.797762,
            "lng": -38.4637465
          }
        },
        {
          "endereco": "Rodovia BR-116, 5850 - Cajazeiras, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/50e400db0ffbd95847c805302f2ecf5e/foto-1-de-sala-comercial-para-alugar,-30-em-cajazeiras,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-cajazeiras-bairros-fortaleza-30m2-aluguel-RS600-id-2631743145/",
          "amenidades": [

          ],
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
          "vagas": 2,
          "area": 71,
          "valor_aluguel": "2.300",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/37839efbd2286556aebffbce08bc0e16/foto-1-de-apartamento-com-3-quartos-para-alugar,-71-em-cocó,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-coco-bairros-fortaleza-com-garagem-71m2-aluguel-RS2300-id-2684026525/",
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
          "quartos": 40,
          "banheiros": 40,
          "vagas": null,
          "area": 4066,
          "valor_aluguel": "78.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2db72ffd5132fbb886e1cef47523fcf8/foto-1-de-prédio-comercial-com-40-quartos-para-alugar,-4066-em-jose-de-alencar,-fortaleza.jpg",
          "url_detalhes": "/imovel/predio-comercial-40-quartos-jose-de-alencar-bairros-fortaleza-4066m2-aluguel-RS78000-id-2668527241/",
          "amenidades": [

          ],
          "descricao": "Prédio Comercial com 40 Quartos para alugar, 4066m² em JOSE DE ALENCAR, Fortaleza",
          "coords": {
            "lat": -3.8089627,
            "lng": -38.4704225
          }
        },
        {
          "endereco": "Avenida Senador Virgílio Távora, 1701 - Meireles, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": null,
          "area": 35,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/af98b42751eb146d0b7ee88e429e80b2/foto-1-de-imóvel-comercial-para-alugar,-35-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-meireles-bairros-fortaleza-35m2-aluguel-RS795-id-2682680992/",
          "amenidades": [

          ],
          "descricao": "Imóvel Comercial para alugar, 35m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7403814,
            "lng": -38.4939797
          }
        },
        {
          "endereco": "Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 27,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/0d4635163bb4bc236c3a5b6510a4c26b/foto-1-de-sala-comercial-para-venda-ou-aluguel,-27-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-27m2-venda-RS67000-id-2644947409/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para venda ou aluguel, 27m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7329688,
            "lng": -38.5264661
          }
        },
        {
          "endereco": "Avenida Ministro Albuquerque Lima, 894 - Conjunto Ceará, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": null,
          "area": 30,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/6633cd89be3d62a41e969022c9506429/foto-1-de-imóvel-comercial-para-alugar,-30-em-conjunto-ceará,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-conjunto-ceara-bairros-fortaleza-30m2-aluguel-RS600-id-2682682776/",
          "amenidades": [

          ],
          "descricao": "Imóvel Comercial para alugar, 30m² em Conjunto Ceará, Fortaleza",
          "coords": {
            "lat": -3.7708043,
            "lng": -38.6048985
          }
        },
        {
          "endereco": "Rua Benjamim Brasil, 626 - Jardim Cearense, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": null,
          "area": 100,
          "valor_aluguel": "1.600",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d589753ef4b37818c41b637550365d53/foto-1-de-ponto-comercial-para-alugar,-100-em-jardim-cearense,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-jardim-cearense-bairros-fortaleza-100m2-aluguel-RS1600-id-2648637173/",
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
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 30,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/944332ffdf835fe6c3ea2b1dc8515af9/foto-1-de-sala-comercial-para-alugar,-30-em-papicu,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-papicu-bairros-fortaleza-30m2-aluguel-RS750-id-2547860603/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 30m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7407389,
            "lng": -38.48346919999999
          }
        },
        {
          "endereco": "Rua Pereira Filgueiras - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 36,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/5ac7b7c9530fe073a4b15741a1caa9a5/foto-1-de-sala-comercial-para-alugar,-36-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-36m2-aluguel-RS800-id-2624351937/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 76,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a10958479a15bb1e2d32730a9748ca24/foto-1-de-sala-comercial-para-alugar,-76-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-76m2-aluguel-RS250-id-2641469864/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 76m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Rua Senador Pompeu, 649 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 23,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d8221e91e1750019a48a374eda3a9cf5/foto-1-de-sala-comercial-para-alugar,-23-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-23m2-aluguel-RS600-id-2661379814/",
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
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 1440,
          "valor_aluguel": "2.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/b7c773be4eb87bc5e3ee9bbebfcd8bc0/foto-1-de-lote/terreno-para-alugar,-1440-em-edson-queiroz,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-edson-queiroz-bairros-fortaleza-1440m2-aluguel-RS2200-id-2624423327/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar, 1440m² em Edson Queiroz, Fortaleza",
          "coords": {
            "lat": -3.7708535,
            "lng": -38.4746411
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": null,
          "valor_aluguel": null,
          "url_imagem": null,
          "url_detalhes": "/imovel/lote-terreno-aldeota-bairros-fortaleza-aluguel-RS180-id-2547859287/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rua Doutor Atualpa Barbosa Lima, 145 - Praia de Iracema, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 1,
          "area": 100,
          "valor_aluguel": "1.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/f0b50028706a21bf0bb9c0e03ee3495b/foto-1-de-apartamento-com-3-quartos-para-alugar,-100-em-praia-de-iracema,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-praia-de-iracema-bairros-fortaleza-com-garagem-100m2-aluguel-RS1500-id-2684404568/",
          "amenidades": [
            "Elevador",
            "Varanda",
            "Aceita animais",
            "Garagem",
            "Jardim",
            "..."
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
          "banheiros": 1,
          "vagas": null,
          "area": 60,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d389baca8992602a8ab54408c0e544a1/foto-1-de-casa-com-2-quartos-para-alugar,-60-em-quintino-cunha,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-2-quartos-quintino-cunha-bairros-fortaleza-60m2-aluguel-RS759-id-2684472597/",
          "amenidades": [

          ],
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
          "valor_aluguel": "3.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/9180bfdba5a4dda810abaaf2b10b015e/foto-1-de-apartamento-com-2-quartos-para-alugar,-80-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-aldeota-bairros-fortaleza-com-garagem-80m2-aluguel-RS3000-id-2675375306/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda",
            "..."
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 80m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7365079,
            "lng": -38.5079335
          }
        },
        {
          "endereco": "Rua Pedro Borges, 30 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 52,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/e6b2ee6d30b0b1f9b752a20689dd65df/foto-1-de-sala-comercial-para-alugar,-52-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-52m2-aluguel-RS600-id-2640120953/",
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
          "banheiros": 1,
          "vagas": null,
          "area": 40,
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/401f653125200578bd80427f71fa85fa/foto-1-de-apartamento-com-2-quartos-para-alugar,-40-em-parquelândia,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-parquelandia-bairros-fortaleza-40m2-aluguel-RS1000-id-2684829896/",
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
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 1100,
          "valor_aluguel": "3.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a20958a207d4ee1970af591b664bbb44/foto-1-de-lote/terreno-para-alugar,-1100-em-papicu,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-papicu-bairros-fortaleza-1100m2-aluguel-RS3000-id-2673408492/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 21,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/9e31644e85aec49757a90ea61db9b48e/foto-1-de-ponto-comercial-para-alugar,-21-em-coaçu,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-coacu-bairros-fortaleza-21m2-aluguel-RS616-id-2682070910/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 21m² em Coaçu, Fortaleza",
          "coords": {
            "lat": -3.8363856,
            "lng": -38.4851693
          }
        },
        {
          "endereco": "Rua Maria Alice, SN - Engenheiro Luciano Cavalcante, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 841,
          "valor_aluguel": "5.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/ab4758a63e4eb7639ef53e911127aa81/foto-1-de-lote/terreno-para-alugar,-841-em-engenheiro-luciano-cavalcante,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-engenheiro-luciano-cavalcante-bairros-fortaleza-841m2-aluguel-RS5500-id-2597718458/",
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
          "banheiros": 2,
          "vagas": 2,
          "area": 60,
          "valor_aluguel": "1.900",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/455a4209a49ed222c6ad47548a4b25db/foto-1-de-apartamento-com-3-quartos-para-alugar,-60-em-passaré,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-passare-bairros-fortaleza-com-garagem-60m2-aluguel-RS1900-id-2644286074/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Condomínio fechado",
            "Varanda",
            "Academia",
            "..."
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 60m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.8137683,
            "lng": -38.5313796
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 39,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/84d4e9bcb13e86550aa4ac19c025a219/foto-1-de-sala-comercial-para-alugar,-39-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-39m2-aluguel-RS500-id-2585981893/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 39m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/f0907dc1a942c0d286d80f426db2584d/foto-1-de-sala-comercial-para-alugar,-42-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-42m2-aluguel-RS500-id-2566289256/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/25aa8031a7898f123b20b413b53ddfa9/foto-1-de-sala-comercial-para-alugar,-42-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-42m2-aluguel-RS500-id-2510345984/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Avenida Duque de Caxias, 823 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 36,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/6e2fe8cdcf093136567ac29e01938ccf/foto-1-de-sala-comercial-para-alugar,-36-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-36m2-aluguel-RS600-id-78799530/",
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
          "vagas": 2,
          "area": 61,
          "valor_aluguel": "2.100",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/4cfc876669780be1be66b86009c6103a/foto-1-de-apartamento-com-1-quarto-para-alugar,-61-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-1-quartos-meireles-bairros-fortaleza-com-garagem-61m2-aluguel-RS2100-id-2663819545/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/11ed466fa75d1391417008e6d69c2537/foto-1-de-sala-comercial-para-alugar,-42-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-42m2-aluguel-RS500-id-2476321506/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Avenida Mister Hull, 3522 - Presidente Kennedy, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 55,
          "valor_aluguel": "1.400",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/211d1ca57ee57e337f54de0015f87fb6/foto-1-de-ponto-comercial-para-alugar,-55-em-presidente-kennedy,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-presidente-kennedy-bairros-fortaleza-55m2-aluguel-RS1400-id-2646364481/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 55m² em Presidente Kennedy, Fortaleza",
          "coords": {
            "lat": -3.7370827,
            "lng": -38.5760548
          }
        },
        {
          "endereco": "Rua Maximino, 237 - JOSE DE ALENCAR, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 720,
          "valor_aluguel": "1.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d41e0db4818ae1c1b06ca427cf624b0e/foto-1-de-lote/terreno-para-alugar,-720-em-jose-de-alencar,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-jose-de-alencar-bairros-fortaleza-720m2-aluguel-RS1500-id-2547860328/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar, 720m² em JOSE DE ALENCAR, Fortaleza",
          "coords": {
            "lat": -3.8096866,
            "lng": -38.465966
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 60,
          "valor_aluguel": "1.143",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2ec9e52919523691de759e1d687ff7d8/foto-1-de-sala-comercial-para-alugar,-60-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-60m2-aluguel-RS1143-id-2576463845/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 60m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Rua do Pocinho, 20 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 74,
          "valor_aluguel": "1.407",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/946e61a5afa7f5b4a01e5813d60579dc/foto-1-de-sala-comercial-para-alugar,-74-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-74m2-aluguel-RS1407-id-2561610726/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 74m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282036,
            "lng": -38.5253929
          }
        },
        {
          "endereco": "Pedras, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 15,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/eef1fb5b37873523d9c6d52d6897084b/foto-1-de-ponto-comercial-para-alugar,-15-em-pedras,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-pedras-bairros-fortaleza-15m2-aluguel-RS550-id-2684194340/",
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
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 25,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/dc058684d1d50005c01caf06dd59c59b/foto-1-de-sala-comercial-para-alugar,-25-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-25m2-aluguel-RS700-id-2620648828/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 38,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/64e31fabe5481cc970ed4915db817605/foto-1-de-sala-comercial-para-alugar,-38-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-38m2-aluguel-RS250-id-2634522799/",
          "amenidades": [

          ],
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
          "vagas": 1,
          "area": 56,
          "valor_aluguel": "4.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/6c9720b82c353cba6dad51fcd1d4762d/foto-1-de-apartamento-com-2-quartos-para-venda-ou-aluguel,-56-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-meireles-bairros-fortaleza-com-garagem-56m2-venda-RS890000-id-2652094959/",
          "amenidades": [
            "Piscina",
            "Mobiliado",
            "Elevador",
            "Condomínio fechado",
            "Academia",
            "..."
          ],
          "descricao": "Apartamento com 2 Quartos para venda ou aluguel, 56m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7233292,
            "lng": -38.5087503
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 5335 - Papicu, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 30,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/63588fd0d5ab8a9529b8d309eadf3f00/foto-1-de-sala-comercial-para-alugar,-30-em-papicu,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-papicu-bairros-fortaleza-30m2-aluguel-RS750-id-2547861987/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 30m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7407389,
            "lng": -38.48346919999999
          }
        },
        {
          "endereco": "Rua A do Loteamento Residencial Célio Gurgel, 227 - Barroso, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": 1,
          "area": 45,
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/1adcf938c3818a525b54fc8c7cd899fe/foto-1-de-apartamento-com-2-quartos-para-alugar,-45-em-barroso,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-barroso-bairros-fortaleza-com-garagem-45m2-aluguel-RS1200-id-2659109858/",
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
          "banheiros": 3,
          "vagas": 2,
          "area": 167,
          "valor_aluguel": "2.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/93095ada02ce958a1a48338c7010f11a/foto-1-de-apartamento-com-3-quartos-para-alugar,-167-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-meireles-bairros-fortaleza-com-garagem-167m2-aluguel-RS2000-id-2618675942/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 167m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7303397,
            "lng": -38.4944757
          }
        },
        {
          "endereco": "Rua Pedro Borges, 33 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/6763801cf6fab59e49c79ff2b9d0eb86/foto-1-de-sala-comercial-para-alugar,-30-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-30m2-aluguel-RS1000-id-2655686385/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 30m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7279488,
            "lng": -38.5255179
          }
        },
        {
          "endereco": "Rua Barão de Aracati, 160 - Meireles, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": 1,
          "area": 64,
          "valor_aluguel": "2.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/0d39e949dabddd11520eb746577fea1e/foto-1-de-apartamento-com-2-quartos-para-alugar,-64-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-meireles-bairros-fortaleza-com-garagem-64m2-aluguel-RS2500-id-2684355143/",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Aceita animais",
            "Ar-condicionado",
            "Jardim",
            "..."
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 64m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.723098899999999,
            "lng": -38.5091703
          }
        },
        {
          "endereco": "Avenida Padre Antônio Tomás, 2420 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": "1.100",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d8c687636cb1dd5dd89a7f919e8bef07/foto-1-de-sala-comercial-para-alugar,-30-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-aldeota-bairros-fortaleza-com-garagem-30m2-aluguel-RS1100-id-2663122600/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7433887,
            "lng": -38.4905038
          }
        },
        {
          "endereco": "Avenida Humberto Monte, 2929 - Pici, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": 2,
          "area": 64,
          "valor_aluguel": "1.650",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/7b30bf72777dd99740afa279e5c93d5f/foto-1-de-ponto-comercial-para-alugar,-64-em-pici,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-pici-bairros-fortaleza-com-garagem-64m2-aluguel-RS1650-id-2684263934/",
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
          "banheiros": 7,
          "vagas": 6,
          "area": 142,
          "valor_aluguel": "2.800",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/be271f008494fc30ef35378ebb29ad20/foto-1-de-casa-com-4-quartos-para-alugar,-142-em-eusebio,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-4-quartos-eusebio-bairros-fortaleza-com-garagem-142m2-aluguel-RS2800-id-2684624238/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 39,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2c3964bc0f973f3354fd253516da1d5e/foto-1-de-sala-comercial-para-alugar,-39-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-39m2-aluguel-RS500-id-2476321215/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 39m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Fiuza de Pontes, 48 - Aldeota, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 3,
          "area": 200,
          "valor_aluguel": "3.900",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/21549d66a0f8c1313fe89a4cbc273466/foto-1-de-imóvel-comercial-com-3-quartos-para-alugar,-200-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-3-quartos-aldeota-bairros-fortaleza-com-garagem-200m2-aluguel-RS3900-id-2672802976/",
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
          "valor_aluguel": "2.300",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/ffae8969008568527ee82668bfc060fb/foto-1-de-casa-com-3-quartos-para-alugar,-358-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-3-quartos-aldeota-bairros-fortaleza-com-garagem-358m2-aluguel-RS2300-id-2651474082/",
          "amenidades": [

          ],
          "descricao": "Casa com 3 Quartos para alugar, 358m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7312746,
            "lng": -38.5118172
          }
        },
        {
          "endereco": "Avenida Bulevar III, 318 - Jangurussu, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": null,
          "area": 33,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/6bb2e063728fb87cbbd7708b893aa303/foto-1-de-apartamento-com-2-quartos-para-alugar,-33-em-jangurussu,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-jangurussu-bairros-fortaleza-33m2-aluguel-RS600-id-2643235964/",
          "amenidades": [
            "Cozinha",
            "Sistema de alarme",
            "Área de serviço",
            "Aceita animais"
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
          "banheiros": 1,
          "vagas": null,
          "area": 40,
          "valor_aluguel": "1.000",
          "url_imagem": null,
          "url_detalhes": "/imovel/apartamento-2-quartos-parquelandia-bairros-fortaleza-40m2-aluguel-RS1000-id-2684829896/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 45,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/04389872eca79616570d619061d00d77/foto-1-de-ponto-comercial-para-alugar,-45-em-amadeu-furtado,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-amadeu-furtado-bairros-fortaleza-45m2-aluguel-RS900-id-2636124922/",
          "amenidades": [

          ],
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
          "vagas": null,
          "area": 90,
          "valor_aluguel": "1.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2865dbd1e442566c6cf1735583aba23e/foto-1-de-imóvel-comercial-com-2-quartos-para-alugar,-90-em-jangurussu,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-2-quartos-jangurussu-bairros-fortaleza-90m2-aluguel-RS1500-id-2682451372/",
          "amenidades": [
            "Quintal",
            "Aceita animais",
            "Área de serviço",
            "Cozinha",
            "Interfone",
            "..."
          ],
          "descricao": "Imóvel Comercial com 2 Quartos para alugar, 90m² em Jangurussu, Fortaleza",
          "coords": {
            "lat": -3.8394547,
            "lng": -38.5118371
          }
        },
        {
          "endereco": "Avenida Pontes Vieira, 2340 - Dionísio Torres, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": 1,
          "area": 49,
          "valor_aluguel": "2.450",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/e1cb50faf8832bbec0a65ea8c7279864/foto-1-de-sala-comercial-para-alugar,-49-em-dionísio-torres,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-dionisio-torres-bairros-fortaleza-com-garagem-49m2-aluguel-RS2450-id-2547859268/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 49m² em Dionísio Torres, Fortaleza",
          "coords": {
            "lat": -3.7513729,
            "lng": -38.5007311
          }
        },
        {
          "endereco": "Rua Senador Pompeu, 649 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 23,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/540801359c27613692e2f203b34df5ed/foto-1-de-sala-comercial-para-alugar,-23-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-23m2-aluguel-RS600-id-2661385887/",
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
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 39,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d432be3c114c47eef6cc91fed3d2fa1f/foto-1-de-sala-comercial-para-alugar,-39-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-39m2-aluguel-RS500-id-2476322199/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 39m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Cidade dos Funcionários, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 16,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/4219a3d7c1e80d4307f4bea738d8606d/foto-1-de-sala-comercial-para-alugar,-16-em-cidade-dos-funcionários,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-cidade-dos-funcionarios-bairros-fortaleza-16m2-aluguel-RS550-id-2684811695/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 16m² em Cidade dos Funcionários, Fortaleza",
          "coords": {
            "lat": -3.7971588,
            "lng": -38.4999808
          }
        },
        {
          "endereco": "Rua Pedro Borges, 33 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 38,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/8a63f9468abb68190ae399c0a33eefe5/foto-1-de-sala-comercial-para-alugar,-38-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-38m2-aluguel-RS600-id-2604746986/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7279488,
            "lng": -38.5255179
          }
        },
        {
          "endereco": "Rua Senador Alencar - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 26,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/bd3bd962c86f17272c2a165a540377aa/foto-1-de-sala-comercial-para-alugar,-26-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-26m2-aluguel-RS400-id-2588260948/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 26m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7229233,
            "lng": -38.5340305
          }
        },
        {
          "endereco": "Parque Dois Irmãos, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": null,
          "area": 22,
          "valor_aluguel": "4.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/e5330cca27f2d07edcaf5adab6a78db6/foto-1-de-ponto-comercial-para-alugar,-22-em-parque-dois-irmãos,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-parque-dois-irmaos-bairros-fortaleza-22m2-aluguel-RS4000-id-2637532974/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 22m² em Parque Dois Irmãos, Fortaleza",
          "coords": {
            "lat": -3.8089995,
            "lng": -38.5495815
          }
        },
        {
          "endereco": "Rua H, 0 - Parque Dois Irmãos, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 438,
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2e8200a92c2e3dbc71c74dbcdc3d100a/foto-1-de-lote/terreno-para-alugar,-438-em-parque-dois-irmãos,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-parque-dois-irmaos-bairros-fortaleza-438m2-aluguel-RS1200-id-2672791894/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar, 438m² em Parque Dois Irmãos, Fortaleza",
          "coords": {
            "lat": -3.8010167,
            "lng": -38.5502464
          }
        },
        {
          "endereco": "Rua General Bernardo Figueiredo, 2020 - Parquelândia, Fortaleza - CE",
          "quartos": 5,
          "banheiros": null,
          "vagas": 2,
          "area": 440,
          "valor_aluguel": "2.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/517cd81d87aa54968d45cd03c5ee3d4b/foto-1-de-imóvel-comercial-com-5-quartos-para-alugar,-440-em-parquelândia,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-5-quartos-parquelandia-bairros-fortaleza-com-garagem-440m2-aluguel-RS2500-id-2661439683/",
          "amenidades": [

          ],
          "descricao": "Imóvel Comercial com 5 Quartos para alugar, 440m² em Parquelândia, Fortaleza",
          "coords": {
            "lat": -3.7404762,
            "lng": -38.5549276
          }
        },
        {
          "endereco": "Rua da Assunção, 443 - José Bonifácio, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": null,
          "area": 35,
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/8d513b95ba8f689008d8499deb6f66ac/foto-1-de-ponto-comercial-com-2-quartos-para-alugar,-35-em-josé-bonifácio,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-2-quartos-jose-bonifacio-bairros-fortaleza-35m2-aluguel-RS1000-id-2650494916/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial com 2 Quartos para alugar, 35m² em José Bonifácio, Fortaleza",
          "coords": {
            "lat": -3.7340616,
            "lng": -38.5282924
          }
        },
        {
          "endereco": "Avenida Presidente Artur Bernardes, 3470 - JOSE DE ALENCAR, Fortaleza - CE",
          "quartos": 40,
          "banheiros": 40,
          "vagas": null,
          "area": 4066,
          "valor_aluguel": "78.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2db72ffd5132fbb886e1cef47523fcf8/foto-1-de-prédio-comercial-com-40-quartos-para-alugar,-4066-em-jose-de-alencar,-fortaleza.jpg",
          "url_detalhes": "/imovel/predio-comercial-40-quartos-jose-de-alencar-bairros-fortaleza-4066m2-aluguel-RS78000-id-2668527241/",
          "amenidades": [

          ],
          "descricao": "Prédio Comercial com 40 Quartos para alugar, 4066m² em JOSE DE ALENCAR, Fortaleza",
          "coords": {
            "lat": -3.8089627,
            "lng": -38.4704225
          }
        },
        {
          "endereco": "Rua Pedro Borges, 30 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 40,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/4ec62fd858a18881a60a910328b5bee1/foto-1-de-sala-comercial-para-alugar,-40-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-40m2-aluguel-RS600-id-2635497057/",
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
          "banheiros": 1,
          "vagas": null,
          "area": 25,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/6c6a7f589eb741900ecaf052bb6cfca3/foto-1-de-kitnet-com-1-quarto-para-alugar,-25-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/kitnet-1-quartos-centro-bairros-fortaleza-25m2-aluguel-RS600-id-2517306046/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 17,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/1f39d85e72174b4cced7f7c2d759e1c1/foto-1-de-sala-comercial-para-alugar,-17-em-jose-de-alencar,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-jose-de-alencar-bairros-fortaleza-17m2-aluguel-RS700-id-2551272056/",
          "amenidades": [

          ],
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
          "valor_aluguel": "1.900",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/efbec3321b8fcc89b4d78d134e2b1299/foto-1-de-casa-com-4-quartos-para-alugar,-253-em-maraponga,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-4-quartos-maraponga-bairros-fortaleza-com-garagem-253m2-aluguel-RS1900-id-2640115515/",
          "amenidades": [
            "Varanda",
            "Garagem",
            "Cozinha",
            "Área de serviço",
            "Aceita animais"
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
          "banheiros": 1,
          "vagas": 1,
          "area": 41,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/56cef83022587dcc9a1d0179e11a1b47/foto-1-de-apartamento-com-2-quartos-para-venda-ou-aluguel,-41-em-novo-mondubim,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-novo-mondubim-bairros-fortaleza-com-garagem-41m2-venda-RS120000-id-2668724902/",
          "amenidades": [
            "Churrasqueira",
            "Interfone",
            "Quadra poliesportiva",
            "Aceita animais"
          ],
          "descricao": "Apartamento com 2 Quartos para venda ou aluguel, 41m² em Novo Mondubim, Fortaleza",
          "coords": {
            "lat": -3.8105478,
            "lng": -38.5886361
          }
        },
        {
          "endereco": "Papicu, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": 3,
          "area": 300,
          "valor_aluguel": "7.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/858bc5300d0a4c6fdc80ff09c03fc242/foto-1-de-ponto-comercial-para-venda-ou-aluguel,-300-em-papicu,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-papicu-bairros-fortaleza-com-garagem-300m2-venda-RS4400000-id-2542701185/",
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
          "banheiros": 3,
          "vagas": null,
          "area": 100,
          "valor_aluguel": "3.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/424aade3ad076ad4d4427c9cebf6607f/foto-1-de-apartamento-com-3-quartos-para-alugar,-100-em-guararapes,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-guararapes-bairros-fortaleza-100m2-aluguel-RS3500-id-2646365200/",
          "amenidades": [
            "Aceita animais"
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
          "vagas": 5,
          "area": 126,
          "valor_aluguel": "3.150",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/fd2a3cd297d28445a9d352b62b064aaa/foto-1-de-casa-com-3-quartos-para-alugar,-126-em-jose-de-alencar,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-3-quartos-jose-de-alencar-bairros-fortaleza-com-garagem-126m2-aluguel-RS3150-id-2658741076/",
          "amenidades": [
            "Cozinha",
            "Interfone",
            "Área de serviço",
            "Aceita animais"
          ],
          "descricao": "Casa com 3 Quartos para alugar, 126m² em JOSE DE ALENCAR, Fortaleza",
          "coords": {
            "lat": -3.8061471,
            "lng": -38.4714507
          }
        },
        {
          "endereco": "Rua Capitão Melo, 3358 - Joaquim Tavora, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 25,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/e6c05ece3ba4774dea2ac4c93a609876/foto-1-de-ponto-comercial-para-alugar,-25-em-joaquim-tavora,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-joaquim-tavora-bairros-fortaleza-25m2-aluguel-RS800-id-2682649260/",
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
          "banheiros": 1,
          "vagas": 1,
          "area": 41,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/aa8dbbcf613ad8cbf5c260c86bdb1cf0/foto-1-de-apartamento-com-2-quartos-para-alugar,-41-em-barroso,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-barroso-bairros-fortaleza-com-garagem-41m2-aluguel-RS850-id-2659109859/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 59,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/b3d94be37164a787657b93f5ff6b84e4/foto-1-de-sala-comercial-para-venda-ou-aluguel,-59-em-joaquim-tavora,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-joaquim-tavora-bairros-fortaleza-59m2-venda-RS120000-id-2624493866/",
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
          "vagas": 2,
          "area": 125,
          "valor_aluguel": "2.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/7139fac32547e2bab663be2bb4c06f5e/foto-1-de-apartamento-com-4-quartos-para-alugar,-125-em-messejana,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-4-quartos-messejana-bairros-fortaleza-com-garagem-125m2-aluguel-RS2200-id-2661161856/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Área de serviço",
            "Playground",
            "Quadra poliesportiva",
            "..."
          ],
          "descricao": "Apartamento com 4 Quartos para alugar, 125m² em Messejana, Fortaleza",
          "coords": {
            "lat": -3.8329294,
            "lng": -38.493973
          }
        },
        {
          "endereco": "Rua Pereira Filgueiras, 2392 - Centro, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 2,
          "vagas": null,
          "area": 70,
          "valor_aluguel": "1.200",
          "url_imagem": null,
          "url_detalhes": "/imovel/apartamento-2-quartos-centro-bairros-fortaleza-70m2-aluguel-RS1200-id-2682377433/",
          "amenidades": [

          ],
          "descricao": null,
          "coords": {
            "lat": -3.7320987,
            "lng": -38.5019141
          }
        },
        {
          "endereco": "Avenida Antônio Sales, 1516 - Joaquim Tavora, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 43,
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d9f3b446377404a15b9ab5180b30f989/foto-1-de-sala-comercial-para-alugar,-43-em-joaquim-tavora,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-joaquim-tavora-bairros-fortaleza-43m2-aluguel-RS1200-id-2582208899/",
          "amenidades": [

          ],
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
          "vagas": 1,
          "area": 56,
          "valor_aluguel": "4.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/6c9720b82c353cba6dad51fcd1d4762d/foto-1-de-apartamento-com-2-quartos-para-venda-ou-aluguel,-56-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-meireles-bairros-fortaleza-com-garagem-56m2-venda-RS890000-id-2652094959/",
          "amenidades": [
            "Piscina",
            "Mobiliado",
            "Elevador",
            "Condomínio fechado",
            "Academia",
            "..."
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
          "banheiros": 1,
          "vagas": 14,
          "area": 21,
          "valor_aluguel": "2.290",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/56caadd9138f3f0c58fb74df32d833b8/foto-1-de-sala-comercial-com-1-quarto-para-alugar,-21-em-de-lourdes,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-1-quartos-de-lourdes-bairros-fortaleza-com-garagem-21m2-aluguel-RS2290-id-2548544438/",
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
          "valor_aluguel": "3.100",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/40f9484d507de8e6bf99b7ebbd06434d/foto-1-de-apartamento-com-3-quartos-para-alugar,-70-em-guararapes,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-guararapes-bairros-fortaleza-com-garagem-70m2-aluguel-RS3100-id-2575126594/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda",
            "..."
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 70m² em Guararapes, Fortaleza",
          "coords": {
            "lat": -3.7754212,
            "lng": -38.4780354
          }
        },
        {
          "endereco": "Cidade dos Funcionários, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 35,
          "valor_aluguel": "1.600",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/c17b5ddf1f318ffec8f0cf4ee29e45d6/foto-1-de-sala-comercial-para-alugar,-35-em-cidade-dos-funcionários,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-cidade-dos-funcionarios-bairros-fortaleza-35m2-aluguel-RS1600-id-2646444609/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": "1.300",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/5873c1f4e6fb381d93bb7c786d38e425/foto-1-de-sala-comercial-para-alugar,-30-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-30m2-aluguel-RS1300-id-2573298519/",
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
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/fb8ffa46c246cc5b19e0b957afb45634/foto-1-de-apartamento-com-1-quarto-para-alugar,-30-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-1-quartos-centro-bairros-fortaleza-30m2-aluguel-RS900-id-2639636979/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 85,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/f71734cf29a0524704e9bb62eaf7734c/foto-1-de-ponto-comercial-para-alugar,-85-em-granja-lisboa,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-granja-lisboa-bairros-fortaleza-85m2-aluguel-RS850-id-2646365082/",
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
          "quartos": null,
          "banheiros": 2,
          "vagas": null,
          "area": 35,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/af98b42751eb146d0b7ee88e429e80b2/foto-1-de-imóvel-comercial-para-alugar,-35-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-meireles-bairros-fortaleza-35m2-aluguel-RS795-id-2682680992/",
          "amenidades": [

          ],
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
          "vagas": 1,
          "area": 60,
          "valor_aluguel": null,
          "url_imagem": null,
          "url_detalhes": "/imovel/apartamento-3-quartos-itaperi-bairros-fortaleza-com-garagem-60m2-aluguel-RS909-id-2660637856/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Condomínio fechado",
            "Jardim",
            "Área de serviço",
            "..."
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
          "banheiros": 1,
          "vagas": 1,
          "area": 48,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/9310051f1d5e422f9b03791b95f67712/foto-1-de-apartamento-com-2-quartos-para-venda-ou-aluguel,-48-em-passaré,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-passare-bairros-fortaleza-com-garagem-48m2-venda-RS110000-id-2638186505/",
          "amenidades": [
            "Interfone",
            "Aceita animais"
          ],
          "descricao": "Apartamento com 2 Quartos para venda ou aluguel, 48m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.8160621,
            "lng": -38.5361605
          }
        },
        {
          "endereco": "Rua Pedro Borges, 33 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 34,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/f65cfc40f467f1a9841dc7a3a9f2dbf3/foto-1-de-sala-comercial-para-venda-ou-aluguel,-34-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-34m2-venda-RS90000-id-2624365914/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para venda ou aluguel, 34m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7279488,
            "lng": -38.5255179
          }
        },
        {
          "endereco": "Rua do Pocinho, 33 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 34,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/439ab827e82749e54510b84c6207c112/foto-1-de-sala-comercial-para-venda-ou-aluguel,-34-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-34m2-venda-RS80000-id-2624366115/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para venda ou aluguel, 34m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.728003,
            "lng": -38.52548
          }
        },
        {
          "endereco": "Rua Alagoas, 2910 - Pici, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 55,
          "valor_aluguel": "1.100",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/cde8d7734729b2dfc88338038b1182e5/foto-1-de-ponto-comercial-para-alugar,-55-em-pici,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-pici-bairros-fortaleza-55m2-aluguel-RS1100-id-2646362148/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 55m² em Pici, Fortaleza",
          "coords": {
            "lat": -3.7531168,
            "lng": -38.5770872
          }
        },
        {
          "endereco": "Avenida Dom Luís, 500 - Meireles, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 32,
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/db4dde466cba0d31a8ca7fe600b31e24/foto-1-de-sala-comercial-para-alugar,-32-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-meireles-bairros-fortaleza-32m2-aluguel-RS1200-id-2579525921/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 32m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7356097,
            "lng": -38.4909979
          }
        },
        {
          "endereco": "Maraponga, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": 7,
          "area": 550,
          "valor_aluguel": "6.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/539d6a0d0737f4fc51d98e59ee46e0ad/foto-1-de-prédio-comercial-para-venda-ou-aluguel,-550-em-maraponga,-fortaleza.jpg",
          "url_detalhes": "/imovel/predio-comercial-maraponga-bairros-fortaleza-com-garagem-550m2-venda-RS750000-id-2645797213/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 31,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/394684d67f3d7e98ecbd12c3830321c3/foto-1-de-sala-comercial-para-alugar,-31-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-31m2-aluguel-RS400-id-2476321047/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Rua Maria Pinheiro Campelo, 673 - Lagoa Redonda, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 1,
          "vagas": null,
          "area": 45,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/8a9681db0223da4d8e2375c34f2825ca/foto-1-de-apartamento-com-1-quarto-para-alugar,-45-em-lagoa-redonda,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-1-quartos-lagoa-redonda-bairros-fortaleza-45m2-aluguel-RS500-id-2643236681/",
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
          "banheiros": 1,
          "vagas": 1,
          "area": 120,
          "valor_aluguel": "1.550",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a55ec77a33b28ce755e96fa36ef95517/foto-1-de-casa-com-4-quartos-para-alugar,-120-em-benfica,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-4-quartos-benfica-bairros-fortaleza-com-garagem-120m2-aluguel-RS1550-id-2684406870/",
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
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 30,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/8dd531b6fd48712b1e4701190c9d1c02/foto-1-de-sala-comercial-para-alugar,-30-em-papicu,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-papicu-bairros-fortaleza-30m2-aluguel-RS750-id-2547859033/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 30m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7407389,
            "lng": -38.48346919999999
          }
        },
        {
          "endereco": "Avenida Dom Luís, 500 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": null,
          "area": 62,
          "valor_aluguel": "3.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/9b27ac258a1d63359b8f625c3df16526/foto-1-de-sala-comercial-para-alugar,-62-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-aldeota-bairros-fortaleza-62m2-aluguel-RS3000-id-2663432975/",
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
          "banheiros": 5,
          "vagas": 3,
          "area": 163,
          "valor_aluguel": "7.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/3c6c00806760aee12991c2fc2d32fc79/foto-1-de-apartamento-com-4-quartos-para-alugar,-163-em-manoel-dias-branco,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-4-quartos-manoel-dias-branco-bairros-fortaleza-com-garagem-163m2-aluguel-RS7000-id-2646838018/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Quintal",
            "..."
          ],
          "descricao": "Apartamento com 4 Quartos para alugar, 163m² em Manoel Dias Branco, Fortaleza",
          "coords": {
            "lat": -3.751343,
            "lng": -38.4608411
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/69e22e31169f42ecbcb967bdee084ca6/foto-1-de-sala-comercial-para-alugar,-42-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-42m2-aluguel-RS500-id-2476322391/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Parque Manibura, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 50,
          "valor_aluguel": "2.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/11f941b58b1bb27d559cd5b74f395d17/foto-1-de-ponto-comercial-para-alugar,-50-em-parque-manibura,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-parque-manibura-bairros-fortaleza-50m2-aluguel-RS2000-id-2627583062/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 50m² em Parque Manibura, Fortaleza",
          "coords": {
            "lat": -3.7912376,
            "lng": -38.4877551
          }
        },
        {
          "endereco": "Vila Nazira, 96 - Fátima, Fortaleza - CE",
          "quartos": 6,
          "banheiros": 4,
          "vagas": 1,
          "area": 250,
          "valor_aluguel": "3.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d5744e8a4b89ceaf464d87490eb6234b/foto-1-de-casa-com-6-quartos-para-alugar,-250-em-fátima,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-6-quartos-fatima-bairros-fortaleza-com-garagem-250m2-aluguel-RS3000-id-2684144537/",
          "amenidades": [

          ],
          "descricao": "Casa com 6 Quartos para alugar, 250m² em Fátima, Fortaleza",
          "coords": {
            "lat": -3.7424532,
            "lng": -38.5339863
          }
        },
        {
          "endereco": "Rua Andrade Furtado, 0 - Cocó, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 498,
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/18271c29c0ef2f471042aae6723f274e/foto-1-de-lote/terreno-para-alugar,-498-em-cocó,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-coco-bairros-fortaleza-498m2-aluguel-RS1000-id-2547861878/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar, 498m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.7427741,
            "lng": -38.4889202
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 31,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/782298b41e5832972c2002f756352a1e/foto-1-de-sala-comercial-para-alugar,-31-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-31m2-aluguel-RS400-id-2476321889/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Rua Pereira Filgueiras, 2020 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 36,
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/368e7a1049aed5fdb88646671b65a4b9/foto-1-de-sala-comercial-para-alugar,-36-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-36m2-aluguel-RS1200-id-2682985586/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 36m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7311979,
            "lng": -38.50466
          }
        },
        {
          "endereco": "Rua Roberto Gradvohl, 1 - JOSE DE ALENCAR, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 1000,
          "valor_aluguel": "2.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/5f372fd44cc89f1b90e29c7411b22cc4/foto-1-de-lote/terreno-para-alugar,-1000-em-jose-de-alencar,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-jose-de-alencar-bairros-fortaleza-1000m2-aluguel-RS2000-id-2682682862/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar, 1000m² em JOSE DE ALENCAR, Fortaleza",
          "coords": {
            "lat": -3.8093649,
            "lng": -38.47705
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 72,
          "valor_aluguel": "1.370",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/b9cb841eca518426ac020cf3106e5071/foto-1-de-sala-comercial-para-alugar,-72-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-72m2-aluguel-RS1370-id-2547860397/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 72m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 75,
          "valor_aluguel": "1.434",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/74f19e20f03700c5e7f1efee16a89bd4/foto-1-de-sala-comercial-para-alugar,-75-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-75m2-aluguel-RS1434-id-2561789776/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 75m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Avenida Senador Virgílio Távora, 1901 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 28,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/6ae12545fa452461608f2faa6cadc7c5/foto-1-de-sala-comercial-para-alugar,-28-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-aldeota-bairros-fortaleza-28m2-aluguel-RS800-id-2666643824/",
          "amenidades": [

          ],
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
          "vagas": null,
          "area": 50,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/5739fc25e5abb666d09d672b5968402e/foto-1-de-casa-com-2-quartos-para-alugar,-50-em-joão-xxiii,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-2-quartos-joao-xxiii-bairros-fortaleza-50m2-aluguel-RS950-id-2667603828/",
          "amenidades": [
            "Varanda",
            "Cozinha",
            "Aceita animais"
          ],
          "descricao": "Casa com 2 Quartos para alugar, 50m² em João XXIII, Fortaleza",
          "coords": {
            "lat": -3.7670131,
            "lng": -38.5829132
          }
        },
        {
          "endereco": "Rua Maria Alice, SN - Engenheiro Luciano Cavalcante, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 841,
          "valor_aluguel": "5.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/ab4758a63e4eb7639ef53e911127aa81/foto-1-de-lote/terreno-para-alugar,-841-em-engenheiro-luciano-cavalcante,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-engenheiro-luciano-cavalcante-bairros-fortaleza-841m2-aluguel-RS5500-id-2597718458/",
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
          "vagas": 1,
          "area": 89,
          "valor_aluguel": "1.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/9e6a57ff2826c626906270fff2b4796b/foto-1-de-apartamento-com-2-quartos-para-alugar,-89-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-aldeota-bairros-fortaleza-com-garagem-89m2-aluguel-RS1500-id-2663820182/",
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
          "valor_aluguel": "1.100",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/292f88bab30e6165f66cc1c98fde2ca9/foto-1-de-apartamento-com-3-quartos-para-alugar,-100-em-papicu,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-papicu-bairros-fortaleza-com-garagem-100m2-aluguel-RS1100-id-2684514900/",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Varanda",
            "Aceita animais",
            "Playground",
            "..."
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
          "banheiros": 5,
          "vagas": 2,
          "area": 70,
          "valor_aluguel": "2.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/9f8d2a642cf96361780d7f929a8d538f/foto-1-de-apartamento-com-2-quartos-para-alugar,-70-em-parque-iracema,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-parque-iracema-bairros-fortaleza-com-garagem-70m2-aluguel-RS2500-id-2675760018/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 70m² em Parque Iracema, Fortaleza",
          "coords": {
            "lat": -3.8042961,
            "lng": -38.4986963
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 31,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/65157e0ee66df419abb6a8b9ba58a32a/foto-1-de-sala-comercial-para-alugar,-31-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-31m2-aluguel-RS400-id-2650282769/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 31,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d73d569e292dc002728c41dee72cc010/foto-1-de-sala-comercial-para-alugar,-31-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-31m2-aluguel-RS400-id-2476320431/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Avenida Duque de Caxias, 823 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 36,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/6e2fe8cdcf093136567ac29e01938ccf/foto-1-de-sala-comercial-para-alugar,-36-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-36m2-aluguel-RS600-id-78799530/",
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
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/ecbaae1ce705a8e63bedc98f2386698f/foto-1-de-apartamento-com-1-quarto-para-alugar,-30-em-beira-mar,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-1-quartos-beira-mar-bairros-fortaleza-30m2-aluguel-RS1200-id-2556387735/",
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
          "quartos": null,
          "banheiros": null,
          "vagas": 1,
          "area": 23,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/c0569160c3045eef686c5ea164de25ad/foto-1-de-sala-comercial-para-alugar,-23-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-aldeota-bairros-fortaleza-com-garagem-23m2-aluguel-RS700-id-2632882309/",
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
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": null,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a99bd99ece715c5d7d55b753739fd7c2/foto-1-de-lote/terreno-para-alugar-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-aldeota-bairros-fortaleza-aluguel-RS180-id-2614654708/",
          "amenidades": [

          ],
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
          "vagas": null,
          "area": 85,
          "valor_aluguel": "1.390",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/57404c86a3529aeda31fe69aa439a5d2/foto-1-de-casa-com-2-quartos-para-alugar,-85-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-2-quartos-centro-bairros-fortaleza-85m2-aluguel-RS1390-id-2682649364/",
          "amenidades": [
            "Varanda",
            "Cozinha",
            "Área de serviço",
            "Aceita animais"
          ],
          "descricao": "Casa com 2 Quartos para alugar, 85m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724565999999999,
            "lng": -38.51720299999999
          }
        },
        {
          "endereco": "Rua Antônio Augusto, 120 - Meireles, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": null,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/6e64e3c764b6846fd4f32216e0ab3231/foto-1-de-lote/terreno-para-alugar-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-meireles-bairros-fortaleza-aluguel-RS150-id-2682680303/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7221461,
            "lng": -38.5110242
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": null,
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-42m2-aluguel-RS500-id-2476320442/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Pedro Borges, 30 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 50,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/b3631a618ec9c7b7aa60df5036d06f5c/foto-1-de-sala-comercial-para-alugar,-50-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-50m2-aluguel-RS950-id-2530360118/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 34,
          "valor_aluguel": "2.400",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/365ca654985dc15fb981851666b1682b/foto-1-de-sala-comercial-para-alugar,-34-em-dionísio-torres,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-dionisio-torres-bairros-fortaleza-34m2-aluguel-RS2400-id-2669126091/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 34m² em Dionísio Torres, Fortaleza",
          "coords": {
            "lat": -3.7513729,
            "lng": -38.5007311
          }
        },
        {
          "endereco": "Parangaba, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 35,
          "valor_aluguel": "1.100",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/ff7e63ee3bf61376bd43cbe15202f451/foto-1-de-sala-comercial-para-alugar,-35-em-parangaba,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-parangaba-bairros-fortaleza-35m2-aluguel-RS1100-id-2596667561/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 35m² em Parangaba, Fortaleza",
          "coords": {
            "lat": -3.7771358,
            "lng": -38.5620583
          }
        },
        {
          "endereco": "Rua Araripe Júnior, 0 - Cambeba, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 1000,
          "valor_aluguel": "1.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/032877f0b260218fdc19e4091445fdd9/foto-1-de-lote/terreno-para-venda-ou-aluguel,-1000-em-cambeba,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-cambeba-bairros-fortaleza-1000m2-venda-RS800000-id-2510438309/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para venda ou aluguel, 1000m² em Cambeba, Fortaleza",
          "coords": {
            "lat": -3.8096082,
            "lng": -38.4788459
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/5fafec5fc09fb2b0904df9bea33ace18/foto-1-de-sala-comercial-para-alugar,-42-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-42m2-aluguel-RS500-id-2590874031/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Pedro I, 663 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 20,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/07e9fb84afb646ff1f49fa990fceed44/foto-1-de-sala-comercial-para-alugar,-20-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-20m2-aluguel-RS650-id-2649107376/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 20m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7306716,
            "lng": -38.5306338
          }
        },
        {
          "endereco": "Rua José Alves Cavalcante, 211 - Cidade dos Funcionários, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 3,
          "area": 130,
          "valor_aluguel": "2.900",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/aa2ca0ad63ee9a7563a100a94a3fc298/foto-1-de-casa-com-3-quartos-para-alugar,-130-em-cidade-dos-funcionários,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-3-quartos-cidade-dos-funcionarios-bairros-fortaleza-com-garagem-130m2-aluguel-RS2900-id-2676033765/",
          "amenidades": [

          ],
          "descricao": "Casa com 3 Quartos para alugar, 130m² em Cidade dos Funcionários, Fortaleza",
          "coords": {
            "lat": -3.793137499999999,
            "lng": -38.5048447
          }
        },
        {
          "endereco": "Rua Pedro Aristides Albuquerque, 550 - Joaquim Tavora, Fortaleza - CE",
          "quartos": 4,
          "banheiros": 5,
          "vagas": 2,
          "area": 250,
          "valor_aluguel": "5.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/5a72c6f6cc0130a35e07c2d5a69cd17e/foto-1-de-imóvel-comercial-com-4-quartos-para-alugar,-250-em-joaquim-tavora,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-4-quartos-joaquim-tavora-bairros-fortaleza-com-garagem-250m2-aluguel-RS5000-id-2611023207/",
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
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 28,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/da5e8b9621592fbf6ee6f212827fb512/foto-1-de-ponto-comercial-para-alugar,-28-em-dionísio-torres,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-dionisio-torres-bairros-fortaleza-28m2-aluguel-RS950-id-2640758691/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 28m² em Dionísio Torres, Fortaleza",
          "coords": {
            "lat": -3.7442774,
            "lng": -38.5070424
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1343 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 32,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/ce206bca263427c0386a4fcb188ba2a5/foto-1-de-sala-comercial-para-alugar,-32-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-aldeota-bairros-fortaleza-32m2-aluguel-RS800-id-2658271895/",
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
          "valor_aluguel": "2.700",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d41c880b646599c9258b8802da228af5/foto-1-de-apartamento-com-2-quartos-para-alugar,-85-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-meireles-bairros-fortaleza-com-garagem-85m2-aluguel-RS2700-id-2632745557/",
          "amenidades": [
            "Elevador",
            "Varanda",
            "Aceita animais",
            "Garagem",
            "Cozinha",
            "..."
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 85m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7247262,
            "lng": -38.5067742
          }
        },
        {
          "endereco": "Rua Peru, 279 - Itaperi, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": null,
          "area": 110,
          "valor_aluguel": "1.650",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/9a127ec190f7ecbb7e99c916ec285973/foto-1-de-imóvel-comercial-para-alugar,-110-em-itaperi,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-itaperi-bairros-fortaleza-110m2-aluguel-RS1650-id-2682682786/",
          "amenidades": [

          ],
          "descricao": "Imóvel Comercial para alugar, 110m² em Itaperi, Fortaleza",
          "coords": {
            "lat": -3.7842759,
            "lng": -38.5557001
          }
        },
        {
          "endereco": "Rua Barão do Rio Branco, 1071 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 27,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/5aa8700094caf7edfd9eb6566811f65b/foto-1-de-sala-comercial-para-alugar,-27-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-27m2-aluguel-RS309-id-2567893407/",
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
          "banheiros": 2,
          "vagas": 2,
          "area": 60,
          "valor_aluguel": "1.900",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/455a4209a49ed222c6ad47548a4b25db/foto-1-de-apartamento-com-3-quartos-para-alugar,-60-em-passaré,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-passare-bairros-fortaleza-com-garagem-60m2-aluguel-RS1900-id-2644286074/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Condomínio fechado",
            "Varanda",
            "Academia",
            "..."
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
          "vagas": 1,
          "area": 52,
          "valor_aluguel": "1.900",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/97bff4e9f5bf53e74680d55ee85f279c/foto-1-de-apartamento-com-2-quartos-para-alugar,-52-em-cambeba,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-cambeba-bairros-fortaleza-com-garagem-52m2-aluguel-RS1900-id-2681246395/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda",
            "..."
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 52m² em Cambeba, Fortaleza",
          "coords": {
            "lat": -3.8032847,
            "lng": -38.4886881
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 89,
          "valor_aluguel": "1.691",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/269bd3ec27d20d6b523b3ffbaa686a9b/foto-1-de-sala-comercial-para-alugar,-89-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-89m2-aluguel-RS1691-id-2547859697/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 89m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 76,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a10958479a15bb1e2d32730a9748ca24/foto-1-de-sala-comercial-para-alugar,-76-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-76m2-aluguel-RS250-id-2641469864/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 76m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Avenida Visconde do Rio Branco, 2125 - Joaquim Tavora, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 5,
          "vagas": 1,
          "area": 100,
          "valor_aluguel": "1.250",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/557f90f1c8a967021b360864c3e6a669/foto-1-de-apartamento-com-3-quartos-para-alugar,-100-em-joaquim-tavora,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-joaquim-tavora-bairros-fortaleza-com-garagem-100m2-aluguel-RS1250-id-2547859730/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 100m² em Joaquim Tavora, Fortaleza",
          "coords": {
            "lat": -3.7394224,
            "lng": -38.5232752
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 31,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/086d7bde6ef66172f6ac10171821e009/foto-1-de-sala-comercial-para-alugar,-31-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-31m2-aluguel-RS400-id-2476321050/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 31,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/9b565442e8a9b4dc901802d296129fe1/foto-1-de-sala-comercial-para-alugar,-31-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-31m2-aluguel-RS400-id-2566289253/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": null,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/e7799ed9afb4997e09b14b9867fd0086/foto-1-de-lote/terreno-para-alugar-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-aldeota-bairros-fortaleza-aluguel-RS180-id-2614657812/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rodovia BR-116, 6163 - Aerolândia, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": 2,
          "area": 256,
          "valor_aluguel": "1.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/aaae8addc700d01317ca695b4b99460c/foto-1-de-ponto-comercial-para-alugar,-256-em-aerolândia,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-aerolandia-bairros-fortaleza-com-garagem-256m2-aluguel-RS1500-id-2585849655/",
          "amenidades": [

          ],
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
          "vagas": 1,
          "area": 53,
          "valor_aluguel": "1.050",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/f548177dab906bec57f5f428f1f7d5fc/foto-1-de-apartamento-com-2-quartos-para-alugar,-53-em-itaperi,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-itaperi-bairros-fortaleza-com-garagem-53m2-aluguel-RS1050-id-2682367175/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Quintal",
            "Aceita animais",
            "..."
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 53m² em Itaperi, Fortaleza",
          "coords": {
            "lat": -3.7961599,
            "lng": -38.5360689
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 23,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/fe6cacc079533d2b433c4bb94ef7af86/foto-1-de-sala-comercial-para-alugar,-23-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-23m2-aluguel-RS400-id-2511545675/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 23m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Rua do Rosário, 77 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 56,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/fdba0e3d2c3b61ba8b79e792e79d00e4/foto-1-de-sala-comercial-para-alugar,-56-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-56m2-aluguel-RS841-id-2547860207/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 56m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.728418999999999,
            "lng": -38.5262788
          }
        },
        {
          "endereco": "Antônio Bezerra, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": null,
          "area": 40,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/007f3a9c14445b235ab6d84f5b84a6ca/foto-1-de-apartamento-com-2-quartos-para-alugar,-40-em-antônio-bezerra,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-antonio-bezerra-bairros-fortaleza-40m2-aluguel-RS880-id-2684430827/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 31,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/7a09af2d298720059ba450e0346d14ee/foto-1-de-sala-comercial-para-alugar,-31-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-31m2-aluguel-RS400-id-2476321883/",
          "amenidades": [

          ],
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
          "vagas": 1,
          "area": 74,
          "valor_aluguel": "1.350",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/b1f959c722bb2228c7ec1e2db346d4bd/foto-1-de-apartamento-com-2-quartos-para-alugar,-74-em-cocó,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-coco-bairros-fortaleza-com-garagem-74m2-aluguel-RS1350-id-2667088403/",
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
          "banheiros": 1,
          "vagas": null,
          "area": 55,
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d9fd72bfbfcbd8e5bd7121ba50d5713a/foto-1-de-casa-com-1-quarto-para-alugar,-55-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-1-quartos-centro-bairros-fortaleza-55m2-aluguel-RS1000-id-2684409535/",
          "amenidades": [

          ],
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
          "valor_aluguel": "2.009",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/217f54edf64bf12e959ca60442312a6b/foto-1-de-apartamento-com-2-quartos-para-alugar,-65-em-dionísio-torres,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-dionisio-torres-bairros-fortaleza-com-garagem-65m2-aluguel-RS2009-id-2645713157/",
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
          "banheiros": 1,
          "vagas": null,
          "area": 19,
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/f345cd5c18b9c178d267e84d8afddee3/foto-1-de-casa-com-3-quartos-para-alugar,-19-em-vila-união,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-3-quartos-vila-uniao-bairros-fortaleza-19m2-aluguel-RS1200-id-2684338266/",
          "amenidades": [
            "Aceita animais"
          ],
          "descricao": "Casa com 3 Quartos para alugar, 19m² em Vila União, Fortaleza",
          "coords": {
            "lat": -3.7608826,
            "lng": -38.53450530000001
          }
        },
        {
          "endereco": "Rua Doutor Edmilson Barros de Oliveira - Cocó, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 440,
          "valor_aluguel": "2.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/fedc821d4670613a5cf4d3955d697198/foto-1-de-lote/terreno-para-venda-ou-aluguel,-440-em-cocó,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-coco-bairros-fortaleza-440m2-venda-RS650000-id-2554835498/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para venda ou aluguel, 440m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.7515363,
            "lng": -38.4940296
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 6870 - Papicu, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 45,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/c922565cee61aa56ebff25a31fbe9b9d/foto-1-de-ponto-comercial-para-alugar,-45-em-papicu,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-papicu-bairros-fortaleza-45m2-aluguel-RS950-id-2672264916/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 45m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7448345,
            "lng": -38.4723958
          }
        },
        {
          "endereco": "Rua Doutor Gilberto Studart, 55 - Cocó, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 40,
          "valor_aluguel": "2.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/05ccb188174c19c2eebfea6897283810/foto-1-de-imóvel-comercial-para-alugar,-40-em-cocó,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-coco-bairros-fortaleza-40m2-aluguel-RS2000-id-2682680307/",
          "amenidades": [

          ],
          "descricao": "Imóvel Comercial para alugar, 40m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.743293,
            "lng": -38.482377
          }
        },
        {
          "endereco": "Rua Senador Pompeu, 649 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 23,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/1957ccadb915262e563085502ae84f98/foto-1-de-sala-comercial-para-alugar,-23-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-23m2-aluguel-RS600-id-2661379813/",
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
          "vagas": 1,
          "area": 160,
          "valor_aluguel": "2.000",
          "url_imagem": null,
          "url_detalhes": "/imovel/casa-de-condominio-2-quartos-praia-do-futuro-ii-bairros-fortaleza-com-garagem-160m2-aluguel-RS2000-id-2664394600/",
          "amenidades": [
            "Piscina",
            "Condomínio fechado",
            "Jardim",
            "Área de serviço",
            "Portaria 24h",
            "..."
          ],
          "descricao": "Casa de Condomínio com 2 Quartos para alugar, 160m² em Praia do Futuro II, Fortaleza",
          "coords": {
            "lat": -3.751626,
            "lng": -38.44677799999999
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 38,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/c9cb5e5e22c3f14159e2b05c251018f5/foto-1-de-sala-comercial-para-alugar,-38-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-38m2-aluguel-RS250-id-2566171916/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Avenida Duque de Caxias, 641 - Centro, Fortaleza - CE",
          "quartos": 8,
          "banheiros": 5,
          "vagas": null,
          "area": 600,
          "valor_aluguel": "5.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/8be460b718720e105b401dcf0c0f8f42/foto-1-de-imóvel-comercial-com-8-quartos-para-alugar,-600-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-8-quartos-centro-bairros-fortaleza-600m2-aluguel-RS5000-id-2651166363/",
          "amenidades": [

          ],
          "descricao": "Imóvel Comercial com 8 Quartos para alugar, 600m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7317895,
            "lng": -38.5302448
          }
        },
        {
          "endereco": "Avenida Geógrafo Antônio Ribeiro Zaranza, 2598 - Cajazeiras, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": null,
          "area": 45,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d1dad68009e0ca0c0aca16aa92275e13/foto-1-de-apartamento-com-2-quartos-para-alugar,-45-em-cajazeiras,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-cajazeiras-bairros-fortaleza-45m2-aluguel-RS800-id-2660348681/",
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
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 31,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d8a6088ae81d75ecd3985d65f82b3601/foto-1-de-sala-comercial-para-alugar,-31-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-31m2-aluguel-RS400-id-2495874683/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Rua João Cordeiro, 688 - Aldeota, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 1,
          "vagas": 1,
          "area": 44,
          "valor_aluguel": "1.950",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/67f20b7df195bbff807d411fd04aaba2/foto-1-de-apartamento-com-1-quarto-para-alugar,-44-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-1-quartos-aldeota-bairros-fortaleza-com-garagem-44m2-aluguel-RS1950-id-2680809602/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Varanda",
            "Academia",
            "..."
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
          "vagas": null,
          "area": 70,
          "valor_aluguel": "1.150",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/39378a36d724796f5f5d03442b4cc3bc/foto-1-de-apartamento-com-3-quartos-para-alugar,-70-em-cajazeiras,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-cajazeiras-bairros-fortaleza-70m2-aluguel-RS1150-id-2682377435/",
          "amenidades": [
            "Mobiliado",
            "Aceita animais",
            "Playground",
            "Salão de festas",
            "Quadra poliesportiva",
            "..."
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 70m² em Cajazeiras, Fortaleza",
          "coords": {
            "lat": -3.801292,
            "lng": -38.5057423
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": 1,
          "area": 39,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/b16a7565f83288bcc75364b3b3a98f79/foto-1-de-sala-comercial-para-alugar,-39-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-com-garagem-39m2-aluguel-RS500-id-2476320439/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 39m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Avenida Engenheiro Alberto Sá, 705 - Papicu, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": null,
          "area": 54,
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/4eee6f80fe20d370d13d77e3f8b79e99/foto-1-de-ponto-comercial-para-alugar,-54-em-papicu,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-papicu-bairros-fortaleza-54m2-aluguel-RS1200-id-2679378194/",
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
          "banheiros": 1,
          "vagas": 1,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/648a472ab8d7fd5e7639e5513e346702/foto-1-de-apartamento-com-2-quartos-para-alugar,-42-em-barroso,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-barroso-bairros-fortaleza-com-garagem-42m2-aluguel-RS900-id-2670723659/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Aceita animais",
            "Garagem",
            "..."
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
          "vagas": null,
          "area": 75,
          "valor_aluguel": "1.009",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/db3165e83fb903b59884bcc55feb559f/foto-1-de-casa-com-2-quartos-para-alugar,-75-em-álvaro-weyne,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-2-quartos-alvaro-weyne-bairros-fortaleza-75m2-aluguel-RS1009-id-2648600470/",
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
          "banheiros": 1,
          "vagas": null,
          "area": 44,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/ff1b999da30823062430044304fafa48/foto-1-de-apartamento-com-2-quartos-para-alugar,-44-em-passaré,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-passare-bairros-fortaleza-44m2-aluguel-RS800-id-2683031983/",
          "amenidades": [
            "Interfone",
            "Quadra poliesportiva",
            "Sistema de alarme",
            "Aceita animais"
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
          "banheiros": 4,
          "vagas": 2,
          "area": 171,
          "valor_aluguel": "3.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/cd9e45e4dc1eb60f85b85cd2f5411a6e/foto-1-de-casa-com-3-quartos-para-venda-ou-aluguel,-171-em-edson-queiroz,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-3-quartos-edson-queiroz-bairros-fortaleza-com-garagem-171m2-venda-RS545000-id-2646452460/",
          "amenidades": [
            "Cozinha",
            "Área de serviço",
            "Quintal"
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
          "banheiros": 8,
          "vagas": 7,
          "area": 500,
          "valor_aluguel": "7.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/cfc9a07f5118bb041af2042179718ec1/foto-1-de-casa-com-5-quartos-para-alugar,-500-em-vicente-pinzon,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-5-quartos-vicente-pinzon-bairros-fortaleza-com-garagem-500m2-aluguel-RS7000-id-2647782453/",
          "amenidades": [

          ],
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
          "vagas": 5,
          "area": 126,
          "valor_aluguel": "3.150",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/fd2a3cd297d28445a9d352b62b064aaa/foto-1-de-casa-com-3-quartos-para-alugar,-126-em-jose-de-alencar,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-3-quartos-jose-de-alencar-bairros-fortaleza-com-garagem-126m2-aluguel-RS3150-id-2658721123/",
          "amenidades": [
            "Cozinha",
            "Interfone",
            "Área de serviço",
            "Aceita animais"
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
          "valor_aluguel": "2.900",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/96b64fa6c5444f710a3d7058f38698b5/foto-1-de-apartamento-com-2-quartos-para-alugar,-55-em-edson-queiroz,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-edson-queiroz-bairros-fortaleza-com-garagem-55m2-aluguel-RS2900-id-2590820712/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda",
            "..."
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
          "banheiros": 4,
          "vagas": 2,
          "area": 269,
          "valor_aluguel": "3.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/15c5ef8e680e9196f620686339a46eb9/foto-1-de-casa-com-4-quartos-para-alugar,-269-em-sapiranga,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-4-quartos-sapiranga-bairros-fortaleza-com-garagem-269m2-aluguel-RS3000-id-2628740378/",
          "amenidades": [
            "Churrasqueira",
            "Cozinha",
            "Área de serviço",
            "Quintal",
            "Aceita animais"
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
          "banheiros": 1,
          "vagas": 1,
          "area": 48,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/1f3c7351f48212754d2ecac240777d4b/foto-1-de-apartamento-com-2-quartos-para-alugar,-48-em-messejana,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-messejana-bairros-fortaleza-com-garagem-48m2-aluguel-RS800-id-2657253992/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Condomínio fechado",
            "Área de serviço",
            "Playground",
            "..."
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 48m² em Messejana, Fortaleza",
          "coords": {
            "lat": -3.8079795,
            "lng": -38.5058186
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 3870 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 8,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/411955d0c6acc5f1ebf0e54d5114757d/foto-1-de-ponto-comercial-para-alugar,-8-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-aldeota-bairros-fortaleza-8m2-aluguel-RS800-id-2638807296/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 8m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7396991,
            "lng": -38.4894273
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 38,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/616bbc86982a4ef315b9260c2fcf5b05/foto-1-de-sala-comercial-para-alugar,-38-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-38m2-aluguel-RS250-id-2583233749/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Avenida Santos Dumont - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 58,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/94aba62ebfcee6bd4be7dc3884947f52/foto-1-de-sala-comercial-para-alugar,-58-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-aldeota-bairros-fortaleza-58m2-aluguel-RS900-id-2632018213/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 58m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7349664,
            "lng": -38.5022633
          }
        },
        {
          "endereco": "Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 27,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/ff0f58942925e14db51bcd03f839e54d/foto-1-de-sala-comercial-para-venda-ou-aluguel,-27-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-27m2-venda-RS67000-id-2580070210/",
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
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": null,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/b5989032215fd6267338f0e5805d53fc/foto-1-de-lote/terreno-para-alugar-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-aldeota-bairros-fortaleza-aluguel-RS180-id-2547859023/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rua Firmino Rocha Aguiar, 1033 - Guararapes, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 4,
          "vagas": 2,
          "area": 72,
          "valor_aluguel": "2.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/48b5af626063d23319328a39b7183ec4/foto-1-de-apartamento-com-2-quartos-para-alugar,-72-em-guararapes,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-guararapes-bairros-fortaleza-com-garagem-72m2-aluguel-RS2500-id-2683728190/",
          "amenidades": [

          ],
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
          "valor_aluguel": "2.900",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/57974f8082264e21121355bdf167f51a/foto-1-de-apartamento-com-3-quartos-para-alugar,-70-em-cambeba,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-cambeba-bairros-fortaleza-com-garagem-70m2-aluguel-RS2900-id-2681779000/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Aceita animais",
            "..."
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 70m² em Cambeba, Fortaleza",
          "coords": {
            "lat": -3.8058571,
            "lng": -38.4813991
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 31,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/929b60ee5a3fe8df33a68091830de291/foto-1-de-sala-comercial-para-alugar,-31-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-31m2-aluguel-RS400-id-2530712922/",
          "amenidades": [

          ],
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
          "vagas": 2,
          "area": 120,
          "valor_aluguel": "2.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/0761346444512ac54a47b03929216d90/foto-1-de-apartamento-com-3-quartos-para-alugar,-120-em-cocó,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-coco-bairros-fortaleza-com-garagem-120m2-aluguel-RS2000-id-2684005523/",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Aceita animais",
            "Jardim",
            "Área de serviço",
            "..."
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
          "banheiros": 3,
          "vagas": null,
          "area": 60,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/66f11ed4a6eb2e7e570f4df14696ef2e/foto-1-de-apartamento-com-2-quartos-para-alugar,-60-em-parangaba,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-parangaba-bairros-fortaleza-60m2-aluguel-RS950-id-2684550415/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 60m² em Parangaba, Fortaleza",
          "coords": {
            "lat": -3.7805487,
            "lng": -38.5724567
          }
        },
        {
          "endereco": "Rua Marcondes Pereira, 537 - Joaquim Tavora, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 1,
          "vagas": null,
          "area": 134,
          "valor_aluguel": "1.600",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/e2fc7c7b8ce7ba10acf27a3dee46fa77/foto-1-de-apartamento-com-3-quartos-para-alugar,-134-em-joaquim-tavora,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-joaquim-tavora-bairros-fortaleza-134m2-aluguel-RS1600-id-2684522700/",
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
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 34,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/b44468117c679866456d0cba48707106/foto-1-de-sala-comercial-para-alugar,-34-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-34m2-aluguel-RS800-id-2558178091/",
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
          "banheiros": 1,
          "vagas": 1,
          "area": 68,
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/abdab68ec7964f3bcf40c7f1e471f592/foto-1-de-apartamento-com-3-quartos-para-alugar,-68-em-cocó,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-coco-bairros-fortaleza-com-garagem-68m2-aluguel-RS1200-id-2684608700/",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Aceita animais",
            "Salão de festas",
            "Closet",
            "..."
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 68m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.747638,
            "lng": -38.4661795
          }
        },
        {
          "endereco": "Rua Gonçalves Ledo, 177 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 35,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/313ed4b936e8e1a2a5b5aa2833016af1/foto-1-de-sala-comercial-para-alugar,-35-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-35m2-aluguel-RS600-id-2653476627/",
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
          "quartos": null,
          "banheiros": 2,
          "vagas": null,
          "area": 30,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/6633cd89be3d62a41e969022c9506429/foto-1-de-imóvel-comercial-para-alugar,-30-em-conjunto-ceará,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-conjunto-ceara-bairros-fortaleza-30m2-aluguel-RS600-id-2682682776/",
          "amenidades": [

          ],
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
          "vagas": 3,
          "area": 95,
          "valor_aluguel": "1.800",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/b539fcb6dfa1b51e6cb385008b39b14e/foto-1-de-casa-com-3-quartos-para-alugar,-95-em-maraponga,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-3-quartos-maraponga-bairros-fortaleza-com-garagem-95m2-aluguel-RS1800-id-2678521007/",
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
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": "1.609",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/ee6ded7ceda8bcf1cfff676891656bb8/foto-1-de-apartamento-com-2-quartos-para-alugar,-30-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-aldeota-bairros-fortaleza-30m2-aluguel-RS1609-id-2684492196/",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Aceita animais",
            "Portaria 24h",
            "Cozinha americana",
            "..."
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 30m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7325145,
            "lng": -38.5151073
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": "1.202",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/4a69e4dd0aaea82aa5175ab56a4fa960/foto-1-de-sala-comercial-para-alugar,-30-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-aldeota-bairros-fortaleza-30m2-aluguel-RS1202-id-2547862279/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": null,
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-42m2-aluguel-RS500-id-2476320438/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 72,
          "valor_aluguel": "1.370",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/99f4fb220c963817128db8dfb04a84c4/foto-1-de-sala-comercial-para-alugar,-72-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-72m2-aluguel-RS1370-id-2547860401/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 72m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Rua Major Facundo, 1344 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": null,
          "area": 140,
          "valor_aluguel": "2.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/8d287ee0e2595261e1f95f7d0f53598e/foto-1-de-imóvel-comercial-para-alugar,-140-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-centro-bairros-fortaleza-140m2-aluguel-RS2200-id-2672791901/",
          "amenidades": [

          ],
          "descricao": "Imóvel Comercial para alugar, 140m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.734789,
            "lng": -38.530111
          }
        },
        {
          "endereco": "Rua Miguel Calmont, 350 - Vicente Pinzon, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/e2b21daf0a24edeb226864e5727cfad3/foto-1-de-ponto-comercial-para-alugar,-30-em-vicente-pinzon,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-vicente-pinzon-bairros-fortaleza-30m2-aluguel-RS600-id-2624493644/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 30m² em Vicente Pinzon, Fortaleza",
          "coords": {
            "lat": -3.727287099999999,
            "lng": -38.4635009
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 5335 - Papicu, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 30,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/28bdb88abad03e0d5505b1507ef25560/foto-1-de-sala-comercial-para-alugar,-30-em-papicu,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-papicu-bairros-fortaleza-30m2-aluguel-RS750-id-2547859707/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 30m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7407389,
            "lng": -38.48346919999999
          }
        },
        {
          "endereco": "Rodovia BR-116, 5870 - Aerolândia, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 73,
          "valor_aluguel": "1.300",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/07cf2bc6f49fc877d71bece449aa19e1/foto-1-de-ponto-comercial-para-alugar,-73-em-aerolândia,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-aerolandia-bairros-fortaleza-73m2-aluguel-RS1300-id-2642889530/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 73m² em Aerolândia, Fortaleza",
          "coords": {
            "lat": -3.7728982,
            "lng": -38.5165825
          }
        },
        {
          "endereco": "Avenida Visconde do Rio Branco, 1728 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": 2,
          "area": 463,
          "valor_aluguel": "4.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/0d92bb5e0c84baa1bdba70f86ed9fcd2/foto-1-de-galpão/depósito/armazém-para-alugar,-463-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/galpao-deposito-armazem-centro-bairros-fortaleza-com-garagem-463m2-aluguel-RS4500-id-2672810887/",
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
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/e239712b6192e9b1ef6d13b2b2f53e61/foto-1-de-apartamento-com-3-quartos-para-alugar,-90-em-bela-vista,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-bela-vista-bairros-fortaleza-com-garagem-90m2-aluguel-RS1000-id-2634157381/",
          "amenidades": [
            "Varanda",
            "Garagem",
            "Playground",
            "Quadra poliesportiva",
            "Cozinha",
            "..."
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
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/8b49e8d3376e4d9308cd96e7c2ef5590/foto-1-de-apartamento-com-3-quartos-para-alugar,-112-em-rodolfo-teófilo,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-rodolfo-teofilo-bairros-fortaleza-com-garagem-112m2-aluguel-RS1000-id-2677369105/",
          "amenidades": [
            "Varanda",
            "Garagem",
            "Cozinha",
            "Área de serviço",
            "Aceita animais"
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
          "banheiros": 1,
          "vagas": 1,
          "area": 45,
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/4b4fbcbdf65ae4130105c7285aa75aff/foto-1-de-apartamento-com-2-quartos-para-alugar,-45-em-dias-macedo,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-dias-macedo-bairros-fortaleza-com-garagem-45m2-aluguel-RS1000-id-2656947658/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Aceita animais",
            "Garagem",
            "Jardim",
            "..."
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
          "banheiros": 1,
          "vagas": null,
          "area": 45,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/f1ef351267f678ab3e88ef1270c200a6/foto-1-de-apartamento-com-1-quarto-para-alugar,-45-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-1-quartos-aldeota-bairros-fortaleza-45m2-aluguel-RS780-id-2684405142/",
          "amenidades": [
            "Cozinha",
            "Aceita animais"
          ],
          "descricao": "Apartamento com 1 Quarto para alugar, 45m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.731558,
            "lng": -38.50290020000001
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/c07fc66a004cc7eae8b039dbd8fccbd3/foto-1-de-sala-comercial-para-alugar,-42-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-42m2-aluguel-RS500-id-2476320434/",
          "amenidades": [

          ],
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
          "valor_aluguel": "2.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/3b9a4abfe89efee18d51173a2ebaec15/foto-1-de-apartamento-com-2-quartos-para-alugar,-80-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-meireles-bairros-fortaleza-com-garagem-80m2-aluguel-RS2000-id-2618677715/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 80m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7265791,
            "lng": -38.4994531
          }
        },
        {
          "endereco": "Rua B - Itaperi, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 3,
          "area": 120,
          "valor_aluguel": "1.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/3d79b7b395563d7392d19ff67957cd7a/foto-1-de-casa-com-3-quartos-para-venda-ou-aluguel,-120-em-itaperi,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-3-quartos-itaperi-bairros-fortaleza-com-garagem-120m2-venda-RS309000-id-2573822915/",
          "amenidades": [
            "Cozinha",
            "Lavanderia",
            "Área de serviço",
            "Quintal",
            "Aceita animais"
          ],
          "descricao": "Casa com 3 Quartos para venda ou aluguel, 120m² em Itaperi, Fortaleza",
          "coords": {
            "lat": -3.7943601,
            "lng": -38.5389192
          }
        },
        {
          "endereco": "Rua Barão do Rio Branco - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 36,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/c965c36e804251e662538b9b2914a180/foto-1-de-sala-comercial-para-alugar,-36-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-36m2-aluguel-RS450-id-2660814264/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 36m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.730413,
            "lng": -38.5295336
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": null,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2075d32266c52a56d9a7847b0cf3530b/foto-1-de-lote/terreno-para-alugar-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-aldeota-bairros-fortaleza-aluguel-RS180-id-2547859290/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rua Guilherme Moreira, 345 - Fátima, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 28,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/391aa1990e881d298551c1b3b5efec1d/foto-1-de-ponto-comercial-para-alugar,-28-em-fátima,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-fatima-bairros-fortaleza-28m2-aluguel-RS950-id-2673668882/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 28m² em Fátima, Fortaleza",
          "coords": {
            "lat": -3.7500579,
            "lng": -38.5245693
          }
        },
        {
          "endereco": "Rua Pedro Borges, 33 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 34,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/9b6c05ade6cc3be477c5b4660d41a8ff/foto-1-de-imóvel-comercial-para-alugar,-34-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-centro-bairros-fortaleza-34m2-aluguel-RS700-id-2658012503/",
          "amenidades": [

          ],
          "descricao": "Imóvel Comercial para alugar, 34m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7279488,
            "lng": -38.5255179
          }
        },
        {
          "endereco": "Rua José Napoleão, 355 - Meireles, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 11,
          "vagas": 2,
          "area": 130,
          "valor_aluguel": "2.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a47095e920afe3508cd9116a74d83267/foto-1-de-apartamento-com-3-quartos-para-alugar,-130-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-meireles-bairros-fortaleza-com-garagem-130m2-aluguel-RS2500-id-2679481124/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 130m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7285157,
            "lng": -38.489875
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 69,
          "valor_aluguel": "1.319",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/34837f9f83be9bd0a3b38ffe317e0b78/foto-1-de-sala-comercial-para-alugar,-69-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-69m2-aluguel-RS1319-id-2587318072/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 69m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Rua Fiscal Vieira, 3575 - Joaquim Tavora, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 314,
          "valor_aluguel": "2.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a18976342718b0518022d376e794446b/foto-1-de-prédio-comercial-para-alugar,-314-em-joaquim-tavora,-fortaleza.jpg",
          "url_detalhes": "/imovel/predio-comercial-joaquim-tavora-bairros-fortaleza-314m2-aluguel-RS2000-id-2674604181/",
          "amenidades": [

          ],
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
          "vagas": 4,
          "area": 160,
          "valor_aluguel": "2.700",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d69eae8e272bec621954d4f8fd6715bb/foto-1-de-casa-com-4-quartos-para-alugar,-160-em-amadeu-furtado,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-4-quartos-amadeu-furtado-bairros-fortaleza-com-garagem-160m2-aluguel-RS2700-id-2672179813/",
          "amenidades": [

          ],
          "descricao": "Casa com 4 Quartos para alugar, 160m² em Amadeu Furtado, Fortaleza",
          "coords": {
            "lat": -3.7474077,
            "lng": -38.5609252
          }
        },
        {
          "endereco": "Passaré, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 80,
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/ad6ea67815ea067b531a5fbe84aed86d/foto-1-de-ponto-comercial-para-alugar,-80-em-passaré,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-passare-bairros-fortaleza-80m2-aluguel-RS1200-id-2577871435/",
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
          "banheiros": 1,
          "vagas": null,
          "area": 33,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/4d1ac94f19b7fc7a32ccf4166ef5d781/foto-1-de-kitnet-com-1-quarto-para-alugar,-33-em-praia-de-iracema,-fortaleza.jpg",
          "url_detalhes": "/imovel/kitnet-1-quartos-praia-de-iracema-bairros-fortaleza-33m2-aluguel-RS650-id-2664683133/",
          "amenidades": [

          ],
          "descricao": "Kitnet com 1 Quarto para alugar, 33m² em Praia de Iracema, Fortaleza",
          "coords": {
            "lat": -3.7214121,
            "lng": -38.5155561
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 619 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 40,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/3b4c52419af8e76698372691fcf1e948/foto-1-de-sala-comercial-para-alugar,-40-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-40m2-aluguel-RS900-id-2649711142/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 40m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.727184,
            "lng": -38.532761
          }
        },
        {
          "endereco": "Rua Crispina de Freitas, 100 - Edson Queiroz, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 43,
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/1a78cb0797397cfb989069e0c0fbd381/foto-1-de-ponto-comercial-para-alugar,-43-em-edson-queiroz,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-edson-queiroz-bairros-fortaleza-43m2-aluguel-RS1000-id-2624518146/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 43m² em Edson Queiroz, Fortaleza",
          "coords": {
            "lat": -3.7869021,
            "lng": -38.4791339
          }
        },
        {
          "endereco": "Avenida Bezerra de Menezes, 1966 - Sao Gerardo, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 4,
          "vagas": 2,
          "area": 121,
          "valor_aluguel": "4.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/3b9e52e891e604aa0282cc50e162e002/foto-1-de-apartamento-com-3-quartos-para-alugar,-121-em-sao-gerardo,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-sao-gerardo-bairros-fortaleza-com-garagem-121m2-aluguel-RS4500-id-2672426681/",
          "amenidades": [
            "Piscina",
            "Mobiliado",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "..."
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 121m² em Sao Gerardo, Fortaleza",
          "coords": {
            "lat": -3.7349166,
            "lng": -38.56197450000001
          }
        },
        {
          "endereco": "Rua do Rosário, 94 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": null,
          "area": 52,
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d7b9e32f7e3f39ca2c9984ebcc1858a8/foto-1-de-imóvel-comercial-para-alugar,-52-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-centro-bairros-fortaleza-52m2-aluguel-RS1200-id-2563250231/",
          "amenidades": [

          ],
          "descricao": "Imóvel Comercial para alugar, 52m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7284303,
            "lng": -38.5264456
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/9a310ec6ab2fd3359bda3193c14b462a/foto-1-de-sala-comercial-para-alugar,-42-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-42m2-aluguel-RS500-id-2499378451/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Centro, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 1,
          "vagas": null,
          "area": 20,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/3c8126bec3a0c010d8a21b14ac8d5ec9/foto-1-de-kitnet-com-1-quarto-para-alugar,-20-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/kitnet-1-quartos-centro-bairros-fortaleza-20m2-aluguel-RS500-id-2644154546/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 26,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/370552118e28e6559d832ab8a9bb9ccb/foto-1-de-sala-comercial-para-alugar,-26-em-jose-de-alencar,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-jose-de-alencar-bairros-fortaleza-26m2-aluguel-RS550-id-2663134892/",
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
          "banheiros": 2,
          "vagas": 2,
          "area": 60,
          "valor_aluguel": "1.400",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a461151742f3d8e767516f2f5369ca48/foto-1-de-apartamento-com-3-quartos-para-alugar,-60-em-maraponga,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-maraponga-bairros-fortaleza-com-garagem-60m2-aluguel-RS1400-id-2684626304/",
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
          "banheiros": 3,
          "vagas": 5,
          "area": 126,
          "valor_aluguel": "3.150",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/fd2a3cd297d28445a9d352b62b064aaa/foto-1-de-casa-com-3-quartos-para-alugar,-126-em-jose-de-alencar,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-3-quartos-jose-de-alencar-bairros-fortaleza-com-garagem-126m2-aluguel-RS3150-id-2658724862/",
          "amenidades": [
            "Cozinha",
            "Interfone",
            "Área de serviço",
            "Aceita animais"
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
          "vagas": null,
          "area": 41,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a36bd1363ce0b18685ab22f0a5364f52/foto-1-de-apartamento-com-2-quartos-para-alugar,-41-em-alto-da-balança,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-alto-da-balanca-bairros-fortaleza-41m2-aluguel-RS800-id-2683945715/",
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
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 8,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/83cdb560f773cd13a5c9ea966e63ea94/foto-1-de-sala-comercial-para-alugar,-8-em-lagoa-sapiranga-coité,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-lagoa-sapiranga-coite-bairros-fortaleza-8m2-aluguel-RS462-id-2678989998/",
          "amenidades": [

          ],
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
          "vagas": null,
          "area": 90,
          "valor_aluguel": "1.100",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/bf8c7b69866ebeb5442b96c7917e6df6/foto-1-de-casa-com-3-quartos-para-alugar,-90-em-manuel-sátiro,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-3-quartos-manuel-satiro-bairros-fortaleza-90m2-aluguel-RS1100-id-2657993268/",
          "amenidades": [

          ],
          "descricao": "Casa com 3 Quartos para alugar, 90m² em Manuel Sátiro, Fortaleza",
          "coords": {
            "lat": -3.7998042,
            "lng": -38.5787511
          }
        },
        {
          "endereco": "Rua Leonardo Mota, 400 - Meireles, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 167,
          "valor_aluguel": "2.000",
          "url_imagem": null,
          "url_detalhes": "/imovel/apartamento-3-quartos-meireles-bairros-fortaleza-com-garagem-167m2-aluguel-RS2000-id-2618675942/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 167m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7303397,
            "lng": -38.4944757
          }
        },
        {
          "endereco": "Rua Monsenhor Bruno, 1590 - Aldeota, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 1,
          "vagas": null,
          "area": 35,
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/22a1cbd4bd90d8dd79f28e82b01dd3f5/foto-1-de-kitnet-com-1-quarto-para-alugar,-35-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/kitnet-1-quartos-aldeota-bairros-fortaleza-35m2-aluguel-RS1000-id-2624365731/",
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
          "banheiros": 1,
          "vagas": 1,
          "area": 44,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/f6c73710714d9ff730161e99ecfaece7/foto-1-de-apartamento-com-2-quartos-para-alugar,-44-em-cajazeiras,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-cajazeiras-bairros-fortaleza-com-garagem-44m2-aluguel-RS750-id-2666041683/",
          "amenidades": [
            "Churrasqueira",
            "Aceita animais",
            "Garagem",
            "Playground",
            "Salão de festas",
            "..."
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
          "banheiros": 4,
          "vagas": 1,
          "area": 153,
          "valor_aluguel": "3.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2376a40b4c97b81e0f56c1d575e121d5/foto-1-de-casa-com-5-quartos-para-alugar,-153-em-benfica,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-5-quartos-benfica-bairros-fortaleza-com-garagem-153m2-aluguel-RS3000-id-2644408389/",
          "amenidades": [
            "Varanda",
            "Quintal",
            "Aceita animais",
            "Garagem",
            "Área de serviço",
            "..."
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
          "vagas": 1,
          "area": 100,
          "valor_aluguel": "2.450",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/3c048d76c288831925e479dc673795f2/foto-1-de-casa-com-3-quartos-para-alugar,-100-em-dionísio-torres,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-3-quartos-dionisio-torres-bairros-fortaleza-com-garagem-100m2-aluguel-RS2450-id-2670089901/",
          "amenidades": [
            "Área de serviço",
            "Box blindex",
            "Interfone",
            "Quintal",
            "Aceita animais"
          ],
          "descricao": "Casa com 3 Quartos para alugar, 100m² em Dionísio Torres, Fortaleza",
          "coords": {
            "lat": -3.7434415,
            "lng": -38.5048242
          }
        },
        {
          "endereco": "Avenida Dom Luís, 500 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 39,
          "valor_aluguel": "1.300",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/dcc3e37ab87ca8f3ffe8149dc82b6226/foto-1-de-sala-comercial-para-alugar,-39-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-aldeota-bairros-fortaleza-39m2-aluguel-RS1300-id-2643476358/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 39m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7340637,
            "lng": -38.49696480000001
          }
        },
        {
          "endereco": "Avenida Desembargador Moreira, 1701 - Meireles, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 28,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/ff0d1e9f571f07add2957c6360ed17d6/foto-1-de-prédio-comercial-para-alugar,-28-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/predio-comercial-meireles-bairros-fortaleza-28m2-aluguel-RS950-id-2647884959/",
          "amenidades": [

          ],
          "descricao": "Prédio Comercial para alugar, 28m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7411064,
            "lng": -38.4996512
          }
        },
        {
          "endereco": "Avenida Dioguinho, 4200 - Praia do Futuro, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 3,
          "vagas": 2,
          "area": 61,
          "valor_aluguel": "2.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/710ebe25668b543cb99cceb604ec9df4/foto-1-de-apartamento-com-1-quarto-para-alugar,-61-em-praia-do-futuro,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-1-quartos-praia-do-futuro-bairros-fortaleza-com-garagem-61m2-aluguel-RS2500-id-2637526273/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 1 Quarto para alugar, 61m² em Praia do Futuro, Fortaleza",
          "coords": {
            "lat": -3.7492867,
            "lng": -38.44709840000001
          }
        },
        {
          "endereco": "Rua José Vilar - Dionísio Torres, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 31,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/5544e0819a635474ae1efbdf1a1c19bb/foto-1-de-sala-comercial-para-alugar,-31-em-dionísio-torres,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-dionisio-torres-bairros-fortaleza-31m2-aluguel-RS900-id-2656107722/",
          "amenidades": [
            "Garagem",
            "Área de serviço",
            "Próximo a escola",
            "Próximo a hospitais",
            "Escritório",
            "..."
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
          "banheiros": 1,
          "vagas": null,
          "area": 33,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/6af033e87b0293012e01d65f861a0676/foto-1-de-kitnet-com-1-quarto-para-alugar,-33-em-praia-de-iracema,-fortaleza.jpg",
          "url_detalhes": "/imovel/kitnet-1-quartos-praia-de-iracema-bairros-fortaleza-33m2-aluguel-RS650-id-2651802669/",
          "amenidades": [

          ],
          "descricao": "Kitnet com 1 Quarto para alugar, 33m² em Praia de Iracema, Fortaleza",
          "coords": {
            "lat": -3.7214121,
            "lng": -38.5155561
          }
        },
        {
          "endereco": "Rua Ministro Eduardo Ellery Barreira, 60 - Guararapes, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 6,
          "vagas": null,
          "area": 110,
          "valor_aluguel": "1.900",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/78ff80c999b81348f694d4378f920350/foto-1-de-apartamento-com-3-quartos-para-alugar,-110-em-guararapes,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-guararapes-bairros-fortaleza-110m2-aluguel-RS1900-id-2677522495/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 110m² em Guararapes, Fortaleza",
          "coords": {
            "lat": -3.7612735,
            "lng": -38.4840272
          }
        },
        {
          "endereco": "Rua Benjamim Brasil, 2150 - Mondubim, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": null,
          "area": 420,
          "valor_aluguel": "5.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/c4eab0f86107ab7955bf06a70b069b03/foto-1-de-galpão/depósito/armazém-para-alugar,-420-em-mondubim,-fortaleza.jpg",
          "url_detalhes": "/imovel/galpao-deposito-armazem-mondubim-bairros-fortaleza-420m2-aluguel-RS5500-id-2682307600/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 76,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/5f3e6b0276807fbd0ff096fe23d36f57/foto-1-de-sala-comercial-para-alugar,-76-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-76m2-aluguel-RS250-id-2566172875/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 76m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Avenida Visconde do Rio Branco, 1725 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 58,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/0fc6438277b1b72e56b50a0b9d8073a1/foto-1-de-ponto-comercial-para-alugar,-58-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-centro-bairros-fortaleza-58m2-aluguel-RS780-id-2583343381/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 58m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7359587,
            "lng": -38.5240499
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/f83a56a177aed628efe894539ece8407/foto-1-de-sala-comercial-para-alugar,-42-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-42m2-aluguel-RS500-id-2476320440/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Luiza Miranda Coelho, 1130 - Engenheiro Luciano Cavalcante, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 2,
          "vagas": 2,
          "area": 75,
          "valor_aluguel": "3.600",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/b4240cdd4d5c7a2ab0369ab36bb7d0e3/foto-1-de-apartamento-com-3-quartos-para-alugar,-75-em-engenheiro-luciano-cavalcante,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-engenheiro-luciano-cavalcante-bairros-fortaleza-com-garagem-75m2-aluguel-RS3600-id-2626013354/",
          "amenidades": [
            "Piscina",
            "Mobiliado",
            "Elevador",
            "Condomínio fechado",
            "Varanda",
            "..."
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 75m² em Engenheiro Luciano Cavalcante, Fortaleza",
          "coords": {
            "lat": -3.7752479,
            "lng": -38.4867463
          }
        },
        {
          "endereco": "Avenida José Bastos, 4140 - Rodolfo Teófilo, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": null,
          "area": 32,
          "valor_aluguel": "1.300",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/bf39c824f07c976632eaa0eea3cdf397/foto-1-de-ponto-comercial-para-alugar,-32-em-rodolfo-teófilo,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-rodolfo-teofilo-bairros-fortaleza-32m2-aluguel-RS1300-id-2566289255/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 32m² em Rodolfo Teófilo, Fortaleza",
          "coords": {
            "lat": -3.7536176,
            "lng": -38.5543672
          }
        },
        {
          "endereco": "Montese, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": 4,
          "area": 179,
          "valor_aluguel": "2.800",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/e787a51717df0c9bba0d185716fb7c8b/foto-1-de-ponto-comercial-para-alugar,-179-em-montese,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-montese-bairros-fortaleza-com-garagem-179m2-aluguel-RS2800-id-2673906096/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 179m² em Montese, Fortaleza",
          "coords": {
            "lat": -3.7683772,
            "lng": -38.5517784
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2ffd22ddf84b1fe4f9691f4f07457659/foto-1-de-sala-comercial-para-alugar,-42-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-42m2-aluguel-RS500-id-2518064521/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Padre Valdevino, 1777 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 58,
          "valor_aluguel": "4.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2bba6e2f9d3bf789eeddbe2dbfa14297/foto-1-de-ponto-comercial-para-alugar,-58-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-aldeota-bairros-fortaleza-58m2-aluguel-RS4000-id-2558578258/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 58m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.741841,
            "lng": -38.50844319999999
          }
        },
        {
          "endereco": "Rua Joaquim Manuel de Macêdo, 1768 - Henrique Jorge, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": 1,
          "area": 50,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/e2a71ea34cd93d720f0b29ac45d2ac55/foto-1-de-apartamento-com-2-quartos-para-alugar,-50-em-henrique-jorge,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-henrique-jorge-bairros-fortaleza-com-garagem-50m2-aluguel-RS800-id-2612978036/",
          "amenidades": [
            "Condomínio fechado",
            "Aceita animais",
            "Área de serviço",
            "Perto de vias de acesso",
            "Próximo a escola",
            "..."
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
          "banheiros": 3,
          "vagas": 1,
          "area": 70,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/83d384f58dc2febe8616e4143b2d4668/foto-1-de-apartamento-com-3-quartos-para-alugar,-70-em-cajazeiras,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-cajazeiras-bairros-fortaleza-com-garagem-70m2-aluguel-RS850-id-2671091214/",
          "amenidades": [
            "Aceita animais",
            "Garagem",
            "Ar-condicionado",
            "Jardim",
            "Área de serviço",
            "..."
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 70m² em Cajazeiras, Fortaleza",
          "coords": {
            "lat": -3.801292,
            "lng": -38.5057423
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 30,
          "valor_aluguel": "2.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/ba4aeaf0843b3d7216ab85faa1e63f9e/foto-1-de-sala-comercial-para-alugar,-30-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-aldeota-bairros-fortaleza-30m2-aluguel-RS2500-id-2622078785/",
          "amenidades": [

          ],
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
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/4f714ac007278f14be7c8a0a02f790a0/foto-1-de-apartamento-com-3-quartos-para-alugar,-90-em-praia-do-futuro-ii,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-praia-do-futuro-ii-bairros-fortaleza-com-garagem-90m2-aluguel-RS450-id-2537796301/",
          "amenidades": [
            "Piscina",
            "Mobiliado",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "..."
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 90m² em Praia do Futuro II, Fortaleza",
          "coords": {
            "lat": -3.749558,
            "lng": -38.4483997
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 1235 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/c47eadc41da71c9a33f0397b0237cc68/foto-1-de-kitnet-para-alugar,-30-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/kitnet-centro-bairros-fortaleza-30m2-aluguel-RS300-id-2616559247/",
          "amenidades": [

          ],
          "descricao": "Kitnet para alugar, 30m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7255337,
            "lng": -38.5381513
          }
        },
        {
          "endereco": "Avenida Dom Luís, 500 - Meireles, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 28,
          "valor_aluguel": "1.100",
          "url_imagem": null,
          "url_detalhes": "/imovel/sala-comercial-meireles-bairros-fortaleza-28m2-aluguel-RS1100-id-2682046128/",
          "amenidades": [

          ],
          "descricao": null,
          "coords": {
            "lat": -3.7356097,
            "lng": -38.4909979
          }
        },
        {
          "endereco": "Rua Barão Aquiraz, 120 - Messejana, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": 1,
          "area": 45,
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/bf1b5e24534dc93d2fb409edd4115307/foto-1-de-apartamento-com-2-quartos-para-alugar,-45-em-messejana,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-messejana-bairros-fortaleza-com-garagem-45m2-aluguel-RS1200-id-2684871052/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 45m² em Messejana, Fortaleza",
          "coords": {
            "lat": -3.832464,
            "lng": -38.4901051
          }
        },
        {
          "endereco": "Rua Delmiro de Farias, 1741 - Rodolfo Teófilo, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 425,
          "valor_aluguel": "5.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/7ed48f1c6c8a397eebbeecde45f13c9a/foto-1-de-galpão/depósito/armazém-para-alugar,-425-em-rodolfo-teófilo,-fortaleza.jpg",
          "url_detalhes": "/imovel/galpao-deposito-armazem-rodolfo-teofilo-bairros-fortaleza-425m2-aluguel-RS5000-id-2624423341/",
          "amenidades": [

          ],
          "descricao": "Galpão/Depósito/Armazém para alugar, 425m² em Rodolfo Teófilo, Fortaleza",
          "coords": {
            "lat": -3.7455877,
            "lng": -38.5529949
          }
        },
        {
          "endereco": "Rua Tenente Moacir Matos, 55 - Montese, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": 1,
          "area": 72,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/c173f7f5c9903fbc1b28973298aab336/foto-1-de-apartamento-com-2-quartos-para-venda-ou-aluguel,-72-em-montese,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-montese-bairros-fortaleza-com-garagem-72m2-venda-RS150000-id-2661147786/",
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
          "banheiros": 1,
          "vagas": 1,
          "area": 108,
          "valor_aluguel": "1.809",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d2637dd667444a60712ea4ff7f5d23c6/foto-1-de-casa-com-2-quartos-para-alugar,-108-em-presidente-kennedy,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-2-quartos-presidente-kennedy-bairros-fortaleza-com-garagem-108m2-aluguel-RS1809-id-2669475441/",
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
          "valor_aluguel": "1.180",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/aa3f5a0bcc8d64810ba259463338bc65/foto-1-de-apartamento-com-3-quartos-para-alugar,-71-em-antônio-bezerra,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-antonio-bezerra-bairros-fortaleza-com-garagem-71m2-aluguel-RS1180-id-2667876900/",
          "amenidades": [
            "Garagem",
            "Cozinha",
            "Aceita animais"
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
          "banheiros": 1,
          "vagas": null,
          "area": 29,
          "valor_aluguel": "1.300",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/545bbf9abe3da88da024bc057075c9c7/foto-1-de-sala-comercial-com-1-quarto-para-alugar,-29-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-1-quartos-aldeota-bairros-fortaleza-29m2-aluguel-RS1300-id-2684626531/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 60,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/bdc4bd2a60a4560c0394dbdfe5af10ad/foto-1-de-sala-comercial-para-alugar,-60-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-60m2-aluguel-RS901-id-2547860469/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 60m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.728418999999999,
            "lng": -38.5262788
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": null,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/00d677c0d259df17c9f350052aba29e3/foto-1-de-lote/terreno-para-alugar-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-aldeota-bairros-fortaleza-aluguel-RS180-id-2614659099/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Avenida Beira Mar, 4444 - Mucuripe, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 1,
          "vagas": null,
          "area": 40,
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/c514c784762f09cd2c093716e7c85e7b/foto-1-de-apartamento-com-1-quarto-para-alugar,-40-em-mucuripe,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-1-quartos-mucuripe-bairros-fortaleza-40m2-aluguel-RS1200-id-2676878509/",
          "amenidades": [
            "Elevador",
            "Aceita animais",
            "Área de serviço",
            "Cozinha",
            "Interfone",
            "..."
          ],
          "descricao": "Apartamento com 1 Quarto para alugar, 40m² em Mucuripe, Fortaleza",
          "coords": {
            "lat": -3.722651,
            "lng": -38.4814927
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 38,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/64e31fabe5481cc970ed4915db817605/foto-1-de-sala-comercial-para-alugar,-38-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-38m2-aluguel-RS250-id-2634522799/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": null,
          "valor_aluguel": null,
          "url_imagem": null,
          "url_detalhes": "/imovel/lote-terreno-aldeota-bairros-fortaleza-aluguel-RS250-id-2547860444/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 60,
          "valor_aluguel": "1.143",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2ec9e52919523691de759e1d687ff7d8/foto-1-de-sala-comercial-para-alugar,-60-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-60m2-aluguel-RS1143-id-2576463845/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 60m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Avenida Barão de Studart, 2358 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 33,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/0b5553f64bacb6f67eec00120cb41739/foto-1-de-sala-comercial-para-alugar,-33-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-aldeota-bairros-fortaleza-33m2-aluguel-RS750-id-2652073962/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 33m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7441496,
            "lng": -38.5096904
          }
        },
        {
          "endereco": "Rua Manuel Teixeira, 131 - Cambeba, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": 1,
          "area": 51,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2362632abace7096488d32c40aa051a4/foto-1-de-apartamento-com-2-quartos-para-alugar,-51-em-cambeba,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-cambeba-bairros-fortaleza-com-garagem-51m2-aluguel-RS750-id-2634208772/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 51m² em Cambeba, Fortaleza",
          "coords": {
            "lat": -3.8157835,
            "lng": -38.4782644
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 1235 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/101aff23543f7456420c8661627239c8/foto-1-de-kitnet-para-alugar,-30-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/kitnet-centro-bairros-fortaleza-30m2-aluguel-RS250-id-2616565394/",
          "amenidades": [

          ],
          "descricao": "Kitnet para alugar, 30m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7255337,
            "lng": -38.5381513
          }
        },
        {
          "endereco": "Rua Luiza Guimarães, 709 - Lagoa Redonda, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 1,
          "area": 83,
          "valor_aluguel": "2.100",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2f6e8e7932c4d3363df0dc597e329414/foto-1-de-casa-de-condomínio-com-3-quartos-para-alugar,-83-em-lagoa-redonda,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-de-condominio-3-quartos-lagoa-redonda-bairros-fortaleza-com-garagem-83m2-aluguel-RS2100-id-2625908672/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Varanda",
            "Quintal",
            "Aceita animais",
            "..."
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
          "vagas": 1,
          "area": 127,
          "valor_aluguel": "2.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/639587486ac5d73105719ab9a69f4f44/foto-1-de-apartamento-com-3-quartos-para-alugar,-127-em-cocó,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-coco-bairros-fortaleza-com-garagem-127m2-aluguel-RS2500-id-2673996111/",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Aceita animais",
            "Jardim",
            "Portaria 24h",
            "..."
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
          "banheiros": 1,
          "vagas": 1,
          "area": 48,
          "valor_aluguel": "1.100",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/18a17c838e3e34af80209ff59704acca/foto-1-de-apartamento-com-2-quartos-para-alugar,-48-em-messejana,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-messejana-bairros-fortaleza-com-garagem-48m2-aluguel-RS1100-id-2684295107/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Ar-condicionado",
            "Área de serviço",
            "Playground",
            "..."
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
          "banheiros": 1,
          "vagas": null,
          "area": 35,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/6ab597280ce12d426204b23974ea541b/foto-1-de-kitnet-com-1-quarto-para-alugar,-35-em-joaquim-tavora,-fortaleza.jpg",
          "url_detalhes": "/imovel/kitnet-1-quartos-joaquim-tavora-bairros-fortaleza-35m2-aluguel-RS980-id-2683650718/",
          "amenidades": [
            "Próximo a escola",
            "Próximo a hospitais",
            "Cozinha",
            "Praça",
            "Próximo a shopping",
            "..."
          ],
          "descricao": "Kitnet com 1 Quarto para alugar, 35m² em Joaquim Tavora, Fortaleza",
          "coords": {
            "lat": -3.7459977,
            "lng": -38.5128437
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": null,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/eed170367761a1f07d443fa3d61cee32/foto-1-de-lote/terreno-para-alugar-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-aldeota-bairros-fortaleza-aluguel-RS180-id-2547861979/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Avenida Trajano de Medeiros, 1970 - De Lourdes, Fortaleza - CE",
          "quartos": 5,
          "banheiros": 7,
          "vagas": 10,
          "area": 880,
          "valor_aluguel": "22.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/387d51cc05a61de21a1a36d91d90137a/foto-1-de-casa-com-5-quartos-para-alugar,-880-em-de-lourdes,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-5-quartos-de-lourdes-bairros-fortaleza-com-garagem-880m2-aluguel-RS22000-id-2568028653/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Varanda",
            "Quintal",
            "Ar-condicionado",
            "..."
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
          "banheiros": 1,
          "vagas": 1,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/7bec9652ff9e9fa6bf83dcc365aea55d/foto-1-de-apartamento-com-2-quartos-para-alugar,-42-em-barroso,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-barroso-bairros-fortaleza-com-garagem-42m2-aluguel-RS900-id-2674510892/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Aceita animais",
            "Garagem",
            "..."
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
          "banheiros": 2,
          "vagas": 2,
          "area": 80,
          "valor_aluguel": "3.800",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/67b7da537a3f03000bab16c7cf72356a/foto-1-de-apartamento-com-3-quartos-para-alugar,-80-em-praia-de-iracema,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-praia-de-iracema-bairros-fortaleza-com-garagem-80m2-aluguel-RS3800-id-2684187673/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Aceita animais",
            "Área de serviço",
            "..."
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
          "banheiros": 1,
          "vagas": 1,
          "area": 47,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/157c3910f5e69f1955c191e743a2560a/foto-1-de-apartamento-com-2-quartos-para-alugar,-47-em-itaperi,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-itaperi-bairros-fortaleza-com-garagem-47m2-aluguel-RS500-id-2638172894/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": "1.202",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/08c9c97ba59dc6788800bd43e9307197/foto-1-de-sala-comercial-para-alugar,-30-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-aldeota-bairros-fortaleza-30m2-aluguel-RS1202-id-2547862371/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Avenida Dom Manuel, 277 - Centro, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": null,
          "area": 60,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/e70381ada9b2427611feaf55402dbb59/foto-1-de-casa-com-2-quartos-para-alugar,-60-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-2-quartos-centro-bairros-fortaleza-60m2-aluguel-RS750-id-2563525053/",
          "amenidades": [

          ],
          "descricao": "Casa com 2 Quartos para alugar, 60m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7266173,
            "lng": -38.5203919
          }
        },
        {
          "endereco": "Rua do Rosário, 119 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 70,
          "valor_aluguel": "1.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/e1a4db0991287f784b3c23fbfaee857f/foto-1-de-galpão/depósito/armazém-para-alugar,-70-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/galpao-deposito-armazem-centro-bairros-fortaleza-70m2-aluguel-RS1500-id-2665190412/",
          "amenidades": [

          ],
          "descricao": "Galpão/Depósito/Armazém para alugar, 70m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.728648,
            "lng": -38.5262544
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 31,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/050396395d2e4bf1868fa4d502d0500f/foto-1-de-sala-comercial-para-alugar,-31-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-31m2-aluguel-RS500-id-2600691662/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 5335 - Papicu, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 30,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/901cb3bf17e1a3e115cc2d36dbbb345b/foto-1-de-sala-comercial-para-alugar,-30-em-papicu,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-papicu-bairros-fortaleza-30m2-aluguel-RS750-id-2547859706/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 30m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7407389,
            "lng": -38.48346919999999
          }
        },
        {
          "endereco": "Rua Monsenhor Bruno, 1153 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 35,
          "valor_aluguel": "1.600",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/f4e7c092bf43a04c2c20e484d72b66b5/foto-1-de-sala-comercial-para-alugar,-35-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-aldeota-bairros-fortaleza-35m2-aluguel-RS1600-id-2670635518/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 35m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7332159,
            "lng": -38.5094206
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 31,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/14a96c30392f88da53a23b7eb37ec9f0/foto-1-de-sala-comercial-para-alugar,-31-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-31m2-aluguel-RS400-id-2476321892/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Rua Bento Albuquerque, 2158 - Cocó, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 5,
          "vagas": 2,
          "area": 126,
          "valor_aluguel": "4.900",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/071451e47f375d08f7bbdb10e098fb20/foto-1-de-apartamento-com-2-quartos-para-alugar,-126-em-cocó,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-coco-bairros-fortaleza-com-garagem-126m2-aluguel-RS4900-id-2684294353/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Área de serviço",
            "Playground",
            "Quadra poliesportiva",
            "..."
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
          "banheiros": 1,
          "vagas": 3,
          "area": 69,
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/1d0ef64f208e678087500b1f1ae71e56/foto-1-de-casa-de-condomínio-com-2-quartos-para-venda-ou-aluguel,-69-em-lagoa-redonda,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-de-condominio-2-quartos-lagoa-redonda-bairros-fortaleza-com-garagem-69m2-venda-RS190000-id-2662260290/",
          "amenidades": [
            "Churrasqueira",
            "Condomínio fechado",
            "Quintal",
            "Área de serviço",
            "Cozinha",
            "..."
          ],
          "descricao": "Casa de Condomínio com 2 Quartos para venda ou aluguel, 69m² em Lagoa Redonda, Fortaleza",
          "coords": {
            "lat": -3.8183481,
            "lng": -38.4507
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": null,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/adf02e6d5b8d4c75d4f14b23c74fcdcf/foto-1-de-lote/terreno-para-alugar-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-aldeota-bairros-fortaleza-aluguel-RS180-id-2547859030/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Avenida Engenheiro Alberto Sá - Papicu, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 25,
          "valor_aluguel": "1.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/971d2a44991921b2efab232e5ac5ef71/foto-1-de-ponto-comercial-para-alugar,-25-em-papicu,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-papicu-bairros-fortaleza-25m2-aluguel-RS1200-id-2663022053/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 25m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7342568,
            "lng": -38.4769619
          }
        },
        {
          "endereco": "Rua Zuca Accioly, 1101 - Manoel Dias Branco, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 120,
          "valor_aluguel": "2.700",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/653d36f244d468677ff791018bf24eee/foto-1-de-apartamento-com-3-quartos-para-alugar,-120-em-manoel-dias-branco,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-manoel-dias-branco-bairros-fortaleza-com-garagem-120m2-aluguel-RS2700-id-2673982520/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Condomínio fechado",
            "Varanda",
            "Aceita animais",
            "..."
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 120m² em Manoel Dias Branco, Fortaleza",
          "coords": {
            "lat": -3.754632999999999,
            "lng": -38.468151
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/fdf728f6a782e2dc75c6f11a013160bc/foto-1-de-sala-comercial-para-alugar,-42-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-42m2-aluguel-RS500-id-2476321311/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": "1.202",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/ee85f24731e9d8285cfcaec733eacf1b/foto-1-de-sala-comercial-para-alugar,-30-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-aldeota-bairros-fortaleza-30m2-aluguel-RS1202-id-2547862372/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rua Doutor Gilberto Studart, 2155 - Papicu, Fortaleza - CE",
          "quartos": 4,
          "banheiros": 4,
          "vagas": null,
          "area": 210,
          "valor_aluguel": "2.100",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2a1c3665201844ae9d7ab989228a2ca8/foto-1-de-apartamento-com-4-quartos-para-alugar,-210-em-papicu,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-4-quartos-papicu-bairros-fortaleza-210m2-aluguel-RS2100-id-2683876823/",
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
          "valor_aluguel": "1.600",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a0a5ce510315a7a1f17fa84fb605a9b5/foto-1-de-apartamento-com-2-quartos-para-alugar,-65-em-jacarecanga,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-jacarecanga-bairros-fortaleza-com-garagem-65m2-aluguel-RS1600-id-2677902602/",
          "amenidades": [
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda",
            "Academia",
            "..."
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
          "vagas": null,
          "area": 107,
          "valor_aluguel": "2.999",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/b5e43493540ecbbdde7f7dfbdfa11fa5/foto-1-de-apartamento-com-3-quartos-para-alugar,-107-em-varjota,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-varjota-bairros-fortaleza-107m2-aluguel-RS2999-id-2666364925/",
          "amenidades": [
            "Mobiliado",
            "Aceita animais",
            "Playground",
            "Varanda gourmet",
            "Salão de festas",
            "..."
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 107m² em Varjota, Fortaleza",
          "coords": {
            "lat": -3.733988999999999,
            "lng": -38.4878053
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": null,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/7ea1c3508bdbe325d4a8316176aa3dfe/foto-1-de-lote/terreno-para-alugar-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-aldeota-bairros-fortaleza-aluguel-RS180-id-2547860505/",
          "amenidades": [

          ],
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
          "vagas": 1,
          "area": 52,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/b40698c8b47ea7cd5b3c3e34db4b2669/foto-1-de-apartamento-com-2-quartos-para-alugar,-52-em-messejana,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-messejana-bairros-fortaleza-com-garagem-52m2-aluguel-RS950-id-2663493579/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 52m² em Messejana, Fortaleza",
          "coords": {
            "lat": -3.8364575,
            "lng": -38.4868426
          }
        },
        {
          "endereco": "Avenida Professor Gomes de Matos, 661 B - Parreão, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": null,
          "area": 100,
          "valor_aluguel": "4.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/3a56091df8556be0348f06da63ad6c29/foto-1-de-ponto-comercial-para-alugar,-100-em-parreão,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-parreao-bairros-fortaleza-100m2-aluguel-RS4500-id-2683073774/",
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
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/3a9b74128f16a0a20359b7b697403110/foto-1-de-apartamento-com-1-quarto-para-alugar,-30-em-maraponga,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-1-quartos-maraponga-bairros-fortaleza-30m2-aluguel-RS670-id-2667373168/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 1 Quarto para alugar, 30m² em Maraponga, Fortaleza",
          "coords": {
            "lat": -3.7961716,
            "lng": -38.5680381
          }
        },
        {
          "endereco": "Dionísio Torres, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": null,
          "area": 95,
          "valor_aluguel": "3.900",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/3e81d6e93b97a380c9cc98fd4d3c01c8/foto-1-de-ponto-comercial-para-alugar,-95-em-dionísio-torres,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-dionisio-torres-bairros-fortaleza-95m2-aluguel-RS3900-id-2638762665/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 95m² em Dionísio Torres, Fortaleza",
          "coords": {
            "lat": -3.7493092,
            "lng": -38.5025502
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 2100 - Centro, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": null,
          "url_imagem": null,
          "url_detalhes": "/imovel/kitnet-1-quartos-centro-bairros-fortaleza-30m2-aluguel-RS420-id-2645845783/",
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
          "quartos": null,
          "banheiros": 2,
          "vagas": 2,
          "area": 55,
          "valor_aluguel": "4.600",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/119788588ae9e0018e36f74fe6ba7c38/foto-1-de-sala-comercial-para-venda-ou-aluguel,-55-em-cocó,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-coco-bairros-fortaleza-com-garagem-55m2-venda-RS731000-id-2625969101/",
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
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/41642e300358a38a78766572cfc97c30/foto-1-de-apartamento-com-3-quartos-para-alugar,-134-em-parque-manibura,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-parque-manibura-bairros-fortaleza-com-garagem-134m2-aluguel-RS1000-id-2683004874/",
          "amenidades": [
            "Cozinha",
            "Área de serviço",
            "Aceita animais"
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
          "banheiros": 1,
          "vagas": 1,
          "area": 58,
          "valor_aluguel": "3.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/b1e37ce57001212c6c652aa664f48172/foto-1-de-apartamento-com-2-quartos-para-alugar,-58-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-meireles-bairros-fortaleza-com-garagem-58m2-aluguel-RS3200-id-2638775521/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Academia",
            "..."
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
          "banheiros": 1,
          "vagas": 1,
          "area": 45,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/e6fdbb72ed6ef75d6ab72e20017be1df/foto-1-de-apartamento-com-1-quarto-para-alugar,-45-em-henrique-jorge,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-1-quartos-henrique-jorge-bairros-fortaleza-com-garagem-45m2-aluguel-RS690-id-2599652860/",
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
          "banheiros": 3,
          "vagas": 1,
          "area": 53,
          "valor_aluguel": "1.800",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/544214549bcd1a92fc84923fec0036a8/foto-1-de-apartamento-com-2-quartos-para-alugar,-53-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-centro-bairros-fortaleza-com-garagem-53m2-aluguel-RS1800-id-2648672557/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 53m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.723799999999999,
            "lng": -38.53774
          }
        },
        {
          "endereco": "Avenida Padre Antônio Tomás, 2420 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/114e870709ec3628b5a72947d019e46e/foto-1-de-sala-comercial-para-alugar,-30-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-aldeota-bairros-fortaleza-30m2-aluguel-RS900-id-2628084080/",
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
          "banheiros": 4,
          "vagas": 3,
          "area": 306,
          "valor_aluguel": "1.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/53a3dba3894e488e62bc42af61ea4170/foto-1-de-apartamento-com-3-quartos-para-alugar,-306-em-dionísio-torres,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-dionisio-torres-bairros-fortaleza-com-garagem-306m2-aluguel-RS1500-id-2587784096/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 306m² em Dionísio Torres, Fortaleza",
          "coords": {
            "lat": -3.7449555,
            "lng": -38.5077635
          }
        },
        {
          "endereco": "Rodovia BR-116, 5850 - Cajazeiras, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/8731494ee7c9611ba6d7dcfc0161733e/foto-1-de-sala-comercial-para-alugar,-30-em-cajazeiras,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-cajazeiras-bairros-fortaleza-30m2-aluguel-RS600-id-2631745502/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 30m² em Cajazeiras, Fortaleza",
          "coords": {
            "lat": -3.7727805,
            "lng": -38.5166922
          }
        },
        {
          "endereco": "Rua Fiscal Vieira, 3575 - Joaquim Tavora, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": null,
          "area": 90,
          "valor_aluguel": "1.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a6a816480556e6338f702345e3da62bf/foto-1-de-ponto-comercial-para-alugar,-90-em-joaquim-tavora,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-joaquim-tavora-bairros-fortaleza-90m2-aluguel-RS1500-id-2674905407/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 90m² em Joaquim Tavora, Fortaleza",
          "coords": {
            "lat": -3.752580999999999,
            "lng": -38.5160321
          }
        },
        {
          "endereco": "Rua Paulo Firmeza, 685 - Tauape, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 180,
          "valor_aluguel": "2.600",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/6f5d93c965d4a496d0e07a998a839221/foto-1-de-imóvel-comercial-para-alugar,-180-em-tauape,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-tauape-bairros-fortaleza-180m2-aluguel-RS2600-id-2682682785/",
          "amenidades": [

          ],
          "descricao": "Imóvel Comercial para alugar, 180m² em Tauape, Fortaleza",
          "coords": {
            "lat": -3.7570709,
            "lng": -38.5133484
          }
        },
        {
          "endereco": "Rua Padre Valdevino, 1138 - Joaquim Tavora, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 1,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/c8cb10f11aadde1fb7b8cbaa73aefe9c/foto-1-de-ponto-comercial-com-1-quarto-para-alugar,-30-em-joaquim-tavora,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-1-quartos-joaquim-tavora-bairros-fortaleza-com-garagem-30m2-aluguel-RS750-id-2675524322/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": 3,
          "area": 0,
          "valor_aluguel": "1.700",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/3735c217138af785db322c90ac1275fc/foto-1-de-ponto-comercial-para-alugar,-120-em-rodolfo-teófilo,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-rodolfo-teofilo-bairros-fortaleza-com-garagem-120m2-aluguel-RS1700-id-2599894903/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 120m² em Rodolfo Teófilo, Fortaleza",
          "coords": {
            "lat": -3.7502822,
            "lng": -38.5519125
          }
        },
        {
          "endereco": "Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 27,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/0d4635163bb4bc236c3a5b6510a4c26b/foto-1-de-sala-comercial-para-venda-ou-aluguel,-27-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-27m2-venda-RS67000-id-2644947409/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para venda ou aluguel, 27m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7329688,
            "lng": -38.5264661
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1267 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 25,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/1761dee1e3dfc3e30965cf1107d4439f/foto-1-de-sala-comercial-para-alugar,-25-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-25m2-aluguel-RS800-id-2564884176/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 25m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7313778,
            "lng": -38.5121337
          }
        },
        {
          "endereco": "Avenida Farias Brito, 160 - Varjota, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 36,
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/dbd7be3b74fcd94f163117133451b5fb/foto-1-de-imóvel-comercial-para-alugar,-36-em-varjota,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-varjota-bairros-fortaleza-36m2-aluguel-RS1000-id-2672793334/",
          "amenidades": [

          ],
          "descricao": "Imóvel Comercial para alugar, 36m² em Varjota, Fortaleza",
          "coords": {
            "lat": -3.7360992,
            "lng": -38.4875178
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": null,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/617732d00e39c600ae87b3b0144e423e/foto-1-de-lote/terreno-para-alugar-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-aldeota-bairros-fortaleza-aluguel-RS180-id-2547860441/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rua Gustavo Braga, 425 - Rodolfo Teófilo, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 52,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/4476bd954fdf9418334d4970962dea7a/foto-1-de-ponto-comercial-para-alugar,-52-em-rodolfo-teófilo,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-rodolfo-teofilo-bairros-fortaleza-52m2-aluguel-RS900-id-2622893675/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 52m² em Rodolfo Teófilo, Fortaleza",
          "coords": {
            "lat": -3.7485862,
            "lng": -38.555394
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 5335 - Papicu, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/ef4eeed3d7a2b9806825d21d0a2e050a/foto-1-de-sala-comercial-para-alugar,-30-em-papicu,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-papicu-bairros-fortaleza-30m2-aluguel-RS750-id-2674051524/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 30m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7407389,
            "lng": -38.48346919999999
          }
        },
        {
          "endereco": "Avenida Antônio Sales, 1950 - Dionísio Torres, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 28,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2b54c7e4a05b1ad8554a9be367445303/foto-1-de-ponto-comercial-para-alugar,-28-em-dionísio-torres,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-dionisio-torres-bairros-fortaleza-28m2-aluguel-RS950-id-2547861192/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 28m² em Dionísio Torres, Fortaleza",
          "coords": {
            "lat": -3.7442774,
            "lng": -38.5070424
          }
        },
        {
          "endereco": "Avenida Senador Virgílio Távora, 1701 - Meireles, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": null,
          "area": 35,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/214680e0036c7866883ddcbff1aa89a6/foto-1-de-imóvel-comercial-para-alugar,-35-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-meireles-bairros-fortaleza-35m2-aluguel-RS795-id-2682680991/",
          "amenidades": [

          ],
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
          "vagas": 1,
          "area": 48,
          "valor_aluguel": "1.650",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/da63bff1b4cb883ceb4783501f160600/foto-1-de-apartamento-com-2-quartos-para-alugar,-48-em-passaré,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-passare-bairros-fortaleza-com-garagem-48m2-aluguel-RS1650-id-2665384621/",
          "amenidades": [
            "Piscina",
            "Mobiliado",
            "Churrasqueira",
            "Elevador",
            "Academia",
            "..."
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 48m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.815880199999999,
            "lng": -38.5241305
          }
        },
        {
          "endereco": "Rua Pereira Filgueiras, 555 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 45,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/557919a6d705e687aab06b96e9ba0075/foto-1-de-ponto-comercial-para-alugar,-45-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-centro-bairros-fortaleza-45m2-aluguel-RS800-id-2635556346/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 45m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7266715,
            "lng": -38.5176522
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 60,
          "valor_aluguel": "1.143",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/33511f9faf7d7343dc4d06058afaca8a/foto-1-de-sala-comercial-para-alugar,-60-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-60m2-aluguel-RS1143-id-2561791256/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 60m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Rua João Cordeiro, 1306 - Aldeota, Fortaleza - CE",
          "quartos": 7,
          "banheiros": 7,
          "vagas": 4,
          "area": 350,
          "valor_aluguel": "4.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/7ecf5d65d55bc3b79f59b3cb5c235adf/foto-1-de-imóvel-comercial-com-7-quartos-para-alugar,-350-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-7-quartos-aldeota-bairros-fortaleza-com-garagem-350m2-aluguel-RS4500-id-2653041702/",
          "amenidades": [
            "Aceita animais",
            "Área de serviço",
            "Estacionamento",
            "Escritório",
            "Depósito",
            "..."
          ],
          "descricao": "Imóvel Comercial com 7 Quartos para alugar, 350m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7317344,
            "lng": -38.5152736
          }
        },
        {
          "endereco": "Avenida Professor Gomes de Matos, 625 - Montese, Fortaleza - CE",
          "quartos": null,
          "banheiros": 9,
          "vagas": null,
          "area": 540,
          "valor_aluguel": "12.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2c6bae1a203d217fd47bb827ad932bf1/foto-1-de-imóvel-comercial-para-alugar,-540-em-montese,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-montese-bairros-fortaleza-540m2-aluguel-RS12000-id-2684406157/",
          "amenidades": [

          ],
          "descricao": "Imóvel Comercial para alugar, 540m² em Montese, Fortaleza",
          "coords": {
            "lat": -3.7590998,
            "lng": -38.5436821
          }
        },
        {
          "endereco": "Rua Alberto Magno, 243 - Montese, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 120,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/fee09988f65843c6ece0a41a7883debe/foto-1-de-imóvel-comercial-para-alugar,-120-em-montese,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-montese-bairros-fortaleza-120m2-aluguel-RS800-id-2667582259/",
          "amenidades": [

          ],
          "descricao": "Imóvel Comercial para alugar, 120m² em Montese, Fortaleza",
          "coords": {
            "lat": -3.7585526,
            "lng": -38.5442034
          }
        },
        {
          "endereco": "Jangurussu, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": 3,
          "area": 9,
          "valor_aluguel": "1.400",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/73a2dad3fc884db6e20ec528cf0fb48a/foto-1-de-sala-comercial-para-alugar,-9-em-jangurussu,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-jangurussu-bairros-fortaleza-com-garagem-9m2-aluguel-RS1400-id-2628632589/",
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
          "vagas": 4,
          "area": 201,
          "valor_aluguel": "2.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/1d281331d872511d737b00e2e1065700/foto-1-de-casa-com-3-quartos-para-alugar,-201-em-agua-fria,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-3-quartos-agua-fria-bairros-fortaleza-com-garagem-201m2-aluguel-RS2200-id-2659754586/",
          "amenidades": [
            "Área de serviço",
            "Quintal"
          ],
          "descricao": "Casa com 3 Quartos para alugar, 201m² em Agua Fria, Fortaleza",
          "coords": {
            "lat": -3.802232899999999,
            "lng": -38.4775736
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 31,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/49b943e6bfcb45555dab886349de6053/foto-1-de-sala-comercial-para-alugar,-31-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-31m2-aluguel-RS400-id-2476321891/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": "1.202",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/e9d8f3d666d96bafc37f0473dc40705c/foto-1-de-sala-comercial-para-alugar,-30-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-aldeota-bairros-fortaleza-30m2-aluguel-RS1202-id-2547862562/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Avenida Washington Soares, 1400 - Engenheiro Luciano Cavalcante, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 76,
          "valor_aluguel": "2.650",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/3433fb37a4a6f6ff252593927ab387fb/foto-1-de-sala-comercial-para-alugar,-76-em-engenheiro-luciano-cavalcante,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-engenheiro-luciano-cavalcante-bairros-fortaleza-76m2-aluguel-RS2650-id-2566670152/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": "1.202",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a8a97954546d06d943d990d887ec38e1/foto-1-de-sala-comercial-para-alugar,-30-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-aldeota-bairros-fortaleza-30m2-aluguel-RS1202-id-2547862370/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Avenida Bezerra de Menezes, 1351 - Sao Gerardo, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 29,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/0d5443f92c8e153f7056a7359d5433db/foto-1-de-sala-comercial-para-alugar,-29-em-sao-gerardo,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-sao-gerardo-bairros-fortaleza-29m2-aluguel-RS750-id-2528179498/",
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
          "banheiros": 2,
          "vagas": 2,
          "area": 95,
          "valor_aluguel": "3.700",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/afc568c1384d2226e5337fab64187c7d/foto-1-de-apartamento-com-3-quartos-para-alugar,-95-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-aldeota-bairros-fortaleza-com-garagem-95m2-aluguel-RS3700-id-2682333298/",
          "amenidades": [
            "Elevador",
            "Condomínio fechado",
            "Varanda",
            "Aceita animais",
            "Área de serviço",
            "..."
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 95m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7414715,
            "lng": -38.5009113
          }
        },
        {
          "endereco": "Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 400,
          "valor_aluguel": "15.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/64702c3f8eecfb662863b1dac2d2f10d/foto-1-de-imóvel-comercial-para-venda-ou-aluguel,-400-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-aldeota-bairros-fortaleza-400m2-venda-RS1650000-id-2542702076/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 27,
          "valor_aluguel": null,
          "url_imagem": null,
          "url_detalhes": "/imovel/ponto-comercial-praia-de-iracema-bairros-fortaleza-27m2-aluguel-RS750-id-2652782859/",
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
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 412,
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2884a89bd118ad776b355d0bcb49f8fb/foto-1-de-lote/terreno-para-alugar,-412-em-vila-velha,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-vila-velha-bairros-fortaleza-412m2-aluguel-RS1000-id-2481326220/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar, 412m² em Vila Velha, Fortaleza",
          "coords": {
            "lat": -3.725621899999999,
            "lng": -38.5944039
          }
        },
        {
          "endereco": "Rua Senador Pompeu, 649 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 23,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/12af3c62d80915d578bd307218ba5f73/foto-1-de-sala-comercial-para-alugar,-23-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-23m2-aluguel-RS600-id-2661380142/",
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
          "banheiros": 1,
          "vagas": null,
          "area": 48,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/df56689b33272b9e33d5c88f5020ec2c/foto-1-de-casa-com-1-quarto-para-alugar,-48-em-aerolândia,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-1-quartos-aerolandia-bairros-fortaleza-48m2-aluguel-RS700-id-2684479307/",
          "amenidades": [
            "Cozinha",
            "Área de serviço",
            "Quintal",
            "Aceita animais"
          ],
          "descricao": "Casa com 1 Quarto para alugar, 48m² em Aerolândia, Fortaleza",
          "coords": {
            "lat": -3.7718236,
            "lng": -38.514652
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/b4a89a78ae6deea4420d47efa6cb73c6/foto-1-de-sala-comercial-para-alugar,-42-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-42m2-aluguel-RS500-id-2476321213/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": "1.202",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/e8b91162461236165680d1c6168a27e0/foto-1-de-sala-comercial-para-alugar,-30-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-aldeota-bairros-fortaleza-30m2-aluguel-RS1202-id-2547862369/",
          "amenidades": [

          ],
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
          "vagas": 1,
          "area": 58,
          "valor_aluguel": "2.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/4f332762fcc8803ec8352f119baa5a02/foto-1-de-apartamento-com-2-quartos-para-alugar,-58-em-parangaba,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-parangaba-bairros-fortaleza-com-garagem-58m2-aluguel-RS2000-id-2684628121/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Academia",
            "Jardim",
            "Playground",
            "..."
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
          "banheiros": 3,
          "vagas": 1,
          "area": 83,
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/c817898f21c46e317b77c9cf11ff430d/foto-1-de-apartamento-com-3-quartos-para-alugar,-83-em-parangaba,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-parangaba-bairros-fortaleza-com-garagem-83m2-aluguel-RS1000-id-2667874106/",
          "amenidades": [
            "Varanda",
            "Garagem",
            "Cozinha",
            "Aceita animais"
          ],
          "descricao": "Apartamento com 3 Quartos para alugar, 83m² em Parangaba, Fortaleza",
          "coords": {
            "lat": -3.7821133,
            "lng": -38.5678687
          }
        },
        {
          "endereco": "Rua Doutor Joaquim Bento, 207 - Messejana, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": 3,
          "area": 840,
          "valor_aluguel": "16.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/3bf18a6d1d27dbda2c8ea11d53018992/foto-1-de-ponto-comercial-para-alugar,-840-em-messejana,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-messejana-bairros-fortaleza-com-garagem-840m2-aluguel-RS16000-id-2651604660/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 840m² em Messejana, Fortaleza",
          "coords": {
            "lat": -3.829112,
            "lng": -38.489654
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 38,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/46577208dae559133f8a5f02e930cee8/foto-1-de-sala-comercial-para-alugar,-38-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-38m2-aluguel-RS250-id-2566170341/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 39,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/6557f7a7d8acdea14970a32067fd3d27/foto-1-de-sala-comercial-para-alugar,-39-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-39m2-aluguel-RS500-id-2514167465/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 39m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Desembargador Faustino de Albuquerque, 781 - Cidade dos Funcionários, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 65,
          "valor_aluguel": "1.300",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/0cf508e63db4aaced86bb50a5d85a6df/foto-1-de-ponto-comercial-para-alugar,-65-em-cidade-dos-funcionários,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-cidade-dos-funcionarios-bairros-fortaleza-65m2-aluguel-RS1300-id-2659104175/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 65m² em Cidade dos Funcionários, Fortaleza",
          "coords": {
            "lat": -3.786462499999999,
            "lng": -38.4994675
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 31,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/5ef991f4fd0c7a3daacd3a99a64fd2b9/foto-1-de-sala-comercial-para-alugar,-31-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-31m2-aluguel-RS400-id-2476321048/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Avenida Dom Manuel, 277 - Centro, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": null,
          "area": 51,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/b22f5d55fb25596a6cdb1248a1c2b90a/foto-1-de-casa-com-2-quartos-para-alugar,-51-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-2-quartos-centro-bairros-fortaleza-51m2-aluguel-RS900-id-2560848321/",
          "amenidades": [

          ],
          "descricao": "Casa com 2 Quartos para alugar, 51m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7266173,
            "lng": -38.5203919
          }
        },
        {
          "endereco": "Rua Costa Sousa, 146 - Benfica, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 19,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a34f2aa7c1439bdcb69dbd90b8e12be7/foto-1-de-lote/terreno-para-alugar,-19-em-benfica,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-benfica-bairros-fortaleza-19m2-aluguel-RS250-id-2647764258/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar, 19m² em Benfica, Fortaleza",
          "coords": {
            "lat": -3.7440145,
            "lng": -38.5401311
          }
        },
        {
          "endereco": "Rua Monsenhor Bruno, 1153 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 35,
          "valor_aluguel": "1.600",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/6a7bb33de7e0822eb3d44c6a287707ad/foto-1-de-sala-comercial-para-alugar,-35-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-aldeota-bairros-fortaleza-35m2-aluguel-RS1600-id-2670635702/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 35m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7332159,
            "lng": -38.5094206
          }
        },
        {
          "endereco": "Rua Engenheiro Antônio Ferreira Antero, 160 - Parque Manibura, Fortaleza - CE",
          "quartos": 4,
          "banheiros": 1,
          "vagas": 3,
          "area": 220,
          "valor_aluguel": "5.800",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a3bf0ce6887369d0c21d2318bae20895/foto-1-de-casa-com-4-quartos-para-alugar,-220-em-parque-manibura,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-4-quartos-parque-manibura-bairros-fortaleza-com-garagem-220m2-aluguel-RS5800-id-2571252963/",
          "amenidades": [

          ],
          "descricao": "Casa com 4 Quartos para alugar, 220m² em Parque Manibura, Fortaleza",
          "coords": {
            "lat": -3.7887442,
            "lng": -38.4843307
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/9105c430cd05fa040a3d3357819ef1d5/foto-1-de-sala-comercial-para-alugar,-42-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-42m2-aluguel-RS500-id-2476317667/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": null,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a32c6fa593f07b8007e995fc071c431d/foto-1-de-lote/terreno-para-alugar-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-aldeota-bairros-fortaleza-aluguel-RS180-id-2547859027/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 30,
          "valor_aluguel": "1.202",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/b9f74795d946a5ad5f5f9e3837787dd8/foto-1-de-sala-comercial-para-alugar,-30-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-aldeota-bairros-fortaleza-30m2-aluguel-RS1202-id-2547861989/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rua Vilebaldo Aguiar, 0 - Manoel Dias Branco, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 29,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2aea94b0d0871981068fd071caba3174/foto-1-de-ponto-comercial-para-alugar,-29-em-manoel-dias-branco,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-manoel-dias-branco-bairros-fortaleza-29m2-aluguel-RS750-id-2547862477/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 29m² em Manoel Dias Branco, Fortaleza",
          "coords": {
            "lat": -3.7411057,
            "lng": -38.4861231
          }
        },
        {
          "endereco": "Avenida Senador Virgílio Távora, 1701 - Meireles, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": null,
          "area": 35,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2630bf6f71ad96620b8606a5e8f3e4a5/foto-1-de-imóvel-comercial-para-alugar,-35-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-meireles-bairros-fortaleza-35m2-aluguel-RS795-id-2682680989/",
          "amenidades": [

          ],
          "descricao": "Imóvel Comercial para alugar, 35m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7403814,
            "lng": -38.4939797
          }
        },
        {
          "endereco": "Avenida Juscelino Kubitschek, 4950 - Passaré, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": 1,
          "area": 48,
          "valor_aluguel": "1.100",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/7a92ebc372d4ad7c89ca0ac20b693c7d/foto-1-de-apartamento-com-2-quartos-para-alugar,-48-em-passaré,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-passare-bairros-fortaleza-com-garagem-48m2-aluguel-RS1100-id-2655641654/",
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
          "banheiros": 1,
          "vagas": null,
          "area": 40,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/9ffdbc3eae011b6e18d136bb48acf341/foto-1-de-kitnet-com-1-quarto-para-alugar,-40-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/kitnet-1-quartos-centro-bairros-fortaleza-40m2-aluguel-RS709-id-2684473410/",
          "amenidades": [
            "Condomínio fechado",
            "Portão eletrônico",
            "Portaria 24h",
            "Aceita animais"
          ],
          "descricao": "Kitnet com 1 Quarto para alugar, 40m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7211643,
            "lng": -38.5402725
          }
        },
        {
          "endereco": "Parangaba, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 13,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/48ef417f67bc6dc02b780b1c3d6b113c/foto-1-de-sala-comercial-para-alugar,-13-em-parangaba,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-parangaba-bairros-fortaleza-13m2-aluguel-RS550-id-2644947124/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 13m² em Parangaba, Fortaleza",
          "coords": {
            "lat": -3.7771358,
            "lng": -38.5620583
          }
        },
        {
          "endereco": "Avenida João Pessoa, 0 - Damas, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 2077,
          "valor_aluguel": "4.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/e7bc3be54b24fcb8fde45f48d57c5510/foto-1-de-lote/terreno-para-alugar,-2077-em-damas,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-damas-bairros-fortaleza-2077m2-aluguel-RS4000-id-2547861967/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar, 2077m² em Damas, Fortaleza",
          "coords": {
            "lat": -3.7674607,
            "lng": -38.5598103
          }
        },
        {
          "endereco": "Rua A do Loteamento Residencial Célio Gurgel, 1697 - Barroso, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": 1,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/36ce9db538330b1bd566833c3783313d/foto-1-de-apartamento-com-2-quartos-para-alugar,-42-em-barroso,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-barroso-bairros-fortaleza-com-garagem-42m2-aluguel-RS950-id-2677909812/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Aceita animais",
            "Garagem",
            "..."
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 42m² em Barroso, Fortaleza",
          "coords": {
            "lat": -3.821732,
            "lng": -38.5817975
          }
        },
        {
          "endereco": "Rua Afonso Pena, 99 - Edson Queiroz, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 1040,
          "valor_aluguel": "1.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/9f809a2abc7cc3be666fa05a63131b84/foto-1-de-lote/terreno-para-alugar,-1040-em-edson-queiroz,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-edson-queiroz-bairros-fortaleza-1040m2-aluguel-RS1500-id-2547861411/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar, 1040m² em Edson Queiroz, Fortaleza",
          "coords": {
            "lat": -3.791358899999999,
            "lng": -38.4629978
          }
        },
        {
          "endereco": "Rua do Pocinho, 30 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 37,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/e0aeac2ccc1899f7eae2e5834c6055bb/foto-1-de-sala-comercial-para-alugar,-37-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-37m2-aluguel-RS932-id-2601674677/",
          "amenidades": [

          ],
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
          "valor_aluguel": "1.100",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/5e205018e16f6690eecffccbc381e594/foto-1-de-apartamento-com-2-quartos-para-alugar,-60-em-prefeito-josé-walter,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-prefeito-jose-walter-bairros-fortaleza-com-garagem-60m2-aluguel-RS1100-id-2607940681/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Garagem",
            "Playground",
            "Salão de festas",
            "..."
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
          "banheiros": 6,
          "vagas": 5,
          "area": 284,
          "valor_aluguel": "8.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/1e9250c9eb69c15252e3c038f5af6694/foto-1-de-apartamento-com-4-quartos-para-alugar,-284-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-4-quartos-centro-bairros-fortaleza-com-garagem-284m2-aluguel-RS8000-id-2675574698/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Academia",
            "Jardim",
            "Área de serviço",
            "..."
          ],
          "descricao": "Apartamento com 4 Quartos para alugar, 284m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7333401,
            "lng": -38.5172221
          }
        },
        {
          "endereco": "Avenida Professor Gomes de Matos, 648 - Bom Futuro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 25,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/5767d89ed8bed3225be3a76faadfa293/foto-1-de-sala-comercial-para-alugar,-25-em-bom-futuro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-bom-futuro-bairros-fortaleza-25m2-aluguel-RS450-id-2683074074/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 25m² em Bom Futuro, Fortaleza",
          "coords": {
            "lat": -3.7589887,
            "lng": -38.54405980000001
          }
        },
        {
          "endereco": "Rua Martinho Rodrigues, 510 - Fátima, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 547,
          "valor_aluguel": "3.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/e17b4c59b5ff88df63efc6e483bb0859/foto-1-de-lote/terreno-para-alugar,-547-em-fátima,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-fatima-bairros-fortaleza-547m2-aluguel-RS3000-id-2676480314/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar, 547m² em Fátima, Fortaleza",
          "coords": {
            "lat": -3.7561814,
            "lng": -38.5282959
          }
        },
        {
          "endereco": "Rua 1010, 56 - Conjunto Ceará, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": 1,
          "area": 80,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/c198e9c790070b6103b482e178873b69/foto-1-de-apartamento-com-2-quartos-para-alugar,-80-em-conjunto-ceará,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-conjunto-ceara-bairros-fortaleza-com-garagem-80m2-aluguel-RS679-id-2674497805/",
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
          "banheiros": 1,
          "vagas": 1,
          "area": 100,
          "valor_aluguel": "1.100",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/41631df5b2d20c28dbb47f125717151d/foto-1-de-casa-com-2-quartos-para-alugar,-100-em-fátima,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-2-quartos-fatima-bairros-fortaleza-com-garagem-100m2-aluguel-RS1100-id-2549476870/",
          "amenidades": [
            "Quintal",
            "Aceita animais",
            "Garagem",
            "Perto de vias de acesso",
            "Próximo a escola",
            "..."
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
          "banheiros": 1,
          "vagas": null,
          "area": 60,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/31d10883eb7c15cf49a10c8759293807/foto-1-de-apartamento-com-2-quartos-para-alugar,-60-em-itaperi,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-itaperi-bairros-fortaleza-60m2-aluguel-RS750-id-2684165742/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 60m² em Itaperi, Fortaleza",
          "coords": {
            "lat": -3.7804924,
            "lng": -38.5592508
          }
        },
        {
          "endereco": "Avenida da Saudade, 3251 - Passaré, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 5454,
          "valor_aluguel": "4.000",
          "url_imagem": null,
          "url_detalhes": "/imovel/lote-terreno-passare-bairros-fortaleza-5454m2-aluguel-RS4000-id-2547861767/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar, 5454m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.8153585,
            "lng": -38.5354956
          }
        },
        {
          "endereco": "Rua Sabino Borges, 66 - Aerolândia, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 1,
          "vagas": null,
          "area": 22,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/02de767a9b1402a1c6771aff41cb3d18/foto-1-de-kitnet-com-1-quarto-para-alugar,-22-em-aerolândia,-fortaleza.jpg",
          "url_detalhes": "/imovel/kitnet-1-quartos-aerolandia-bairros-fortaleza-22m2-aluguel-RS450-id-2659105580/",
          "amenidades": [

          ],
          "descricao": "Kitnet com 1 Quarto para alugar, 22m² em Aerolândia, Fortaleza",
          "coords": {
            "lat": -3.7729528,
            "lng": -38.51698349999999
          }
        },
        {
          "endereco": "Avenida João Pessoa, 5233 - Damas, Fortaleza - CE",
          "quartos": null,
          "banheiros": 4,
          "vagas": null,
          "area": 734,
          "valor_aluguel": "5.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/fe60e62d5511a8b6283f04de2056df96/foto-1-de-ponto-comercial-para-alugar,-734-em-damas,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-damas-bairros-fortaleza-734m2-aluguel-RS5500-id-2684027913/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 734m² em Damas, Fortaleza",
          "coords": {
            "lat": -3.7574896,
            "lng": -38.5536394
          }
        },
        {
          "endereco": "Rua Amaro Cavalcante, 104 - Monte Castelo, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 100,
          "valor_aluguel": "1.300",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/248f6eb0c684321408743f4f33fa9a8d/foto-1-de-ponto-comercial-para-alugar,-100-em-monte-castelo,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-monte-castelo-bairros-fortaleza-100m2-aluguel-RS1300-id-2623346613/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 100m² em Monte Castelo, Fortaleza",
          "coords": {
            "lat": -3.7238635,
            "lng": -38.5543546
          }
        },
        {
          "endereco": "Avenida Dom Luís, 1233 - Meireles, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 31,
          "valor_aluguel": "1.100",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/aa83e3634b78be9b50b89136a1cbfd2e/foto-1-de-sala-comercial-para-alugar,-31-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-meireles-bairros-fortaleza-31m2-aluguel-RS1100-id-2675887616/",
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
          "quartos": null,
          "banheiros": 9,
          "vagas": null,
          "area": 4094,
          "valor_aluguel": "90.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/b7b1e41f32304051f57b7fb43c489150/foto-1-de-ponto-comercial-para-alugar,-4094-em-parangaba,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-parangaba-bairros-fortaleza-4094m2-aluguel-RS90000-id-2640415586/",
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
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": null,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/6160d33dcc141f16d305cd6724ded5e8/foto-1-de-lote/terreno-para-alugar-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-aldeota-bairros-fortaleza-aluguel-RS180-id-2547861514/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rua da Assunção, 950 - Centro, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 1,
          "vagas": null,
          "area": 53,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/6093a6c981cd3dd814a9229733bb404e/foto-1-de-casa-com-1-quarto-para-alugar,-53-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-1-quartos-centro-bairros-fortaleza-53m2-aluguel-RS950-id-2646364586/",
          "amenidades": [

          ],
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
          "vagas": 1,
          "area": 113,
          "valor_aluguel": "1.109",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/7ac5bd844ec94901cc710f5f2442078a/foto-1-de-apartamento-com-2-quartos-para-alugar,-113-em-sao-gerardo,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-sao-gerardo-bairros-fortaleza-com-garagem-113m2-aluguel-RS1109-id-2684473110/",
          "amenidades": [
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Aceita animais",
            "Espaço gourmet",
            "..."
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 113m² em Sao Gerardo, Fortaleza",
          "coords": {
            "lat": -3.7347576,
            "lng": -38.5634227
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": null,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/4248848d38b7b8fea3761cb96606866c/foto-1-de-lote/terreno-para-alugar-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-aldeota-bairros-fortaleza-aluguel-RS180-id-2547859106/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Avenida Pontes Vieira, 2340 - Dionísio Torres, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 68,
          "valor_aluguel": "4.050",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/559f8ed9eb637b185b82f67b1c7212a7/foto-1-de-sala-comercial-para-alugar,-68-em-dionísio-torres,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-dionisio-torres-bairros-fortaleza-68m2-aluguel-RS4050-id-2570723976/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 68m² em Dionísio Torres, Fortaleza",
          "coords": {
            "lat": -3.7513729,
            "lng": -38.5007311
          }
        },
        {
          "endereco": "Rua Domingos Olímpio, 96 - José Bonifácio, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 80,
          "valor_aluguel": "2.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/be6678f5e2d9177842480c12f71c3474/foto-1-de-lote/terreno-para-alugar,-80-em-josé-bonifácio,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-jose-bonifacio-bairros-fortaleza-80m2-aluguel-RS2500-id-2655982853/",
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
          "banheiros": 1,
          "vagas": null,
          "area": 33,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/46d6bbdae0102f34f085f881abcb934b/foto-1-de-kitnet-com-1-quarto-para-alugar,-33-em-praia-de-iracema,-fortaleza.jpg",
          "url_detalhes": "/imovel/kitnet-1-quartos-praia-de-iracema-bairros-fortaleza-33m2-aluguel-RS650-id-2651796824/",
          "amenidades": [

          ],
          "descricao": "Kitnet com 1 Quarto para alugar, 33m² em Praia de Iracema, Fortaleza",
          "coords": {
            "lat": -3.7214121,
            "lng": -38.5155561
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": null,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/6842bf23162932a09719dd7fb5cc8fb2/foto-1-de-lote/terreno-para-alugar-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-aldeota-bairros-fortaleza-aluguel-RS180-id-2614656640/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Avenida Mem de Sá, 383 - Messejana, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": null,
          "area": 280,
          "valor_aluguel": "1.300",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/65c36dfc04458a7112c555668a990605/foto-1-de-imóvel-comercial-para-alugar,-280-em-messejana,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-messejana-bairros-fortaleza-280m2-aluguel-RS1300-id-2672794095/",
          "amenidades": [

          ],
          "descricao": "Imóvel Comercial para alugar, 280m² em Messejana, Fortaleza",
          "coords": {
            "lat": -3.8256908,
            "lng": -38.4850026
          }
        },
        {
          "endereco": "Rua Dom Lustosa, 985 - Jangurussu, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": null,
          "area": 59,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/11428eb921a37924022603baa22d8e4e/foto-1-de-apartamento-com-2-quartos-para-alugar,-59-em-jangurussu,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-jangurussu-bairros-fortaleza-59m2-aluguel-RS700-id-2646362248/",
          "amenidades": [
            "Churrasqueira",
            "Aceita animais",
            "Garagem",
            "Ar-condicionado",
            "Playground",
            "..."
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 59m² em Jangurussu, Fortaleza",
          "coords": {
            "lat": -3.8478487,
            "lng": -38.5116161
          }
        },
        {
          "endereco": "Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": "1.100",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/12359d26ec2e4ef62ad986f432f4cb32/foto-1-de-sala-comercial-para-alugar,-30-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-aldeota-bairros-fortaleza-30m2-aluguel-RS1100-id-2665091918/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 30m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.740179299999999,
            "lng": -38.49966209999999
          }
        },
        {
          "endereco": "Rua Vilebaldo Aguiar, 0 - Manoel Dias Branco, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 29,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/ef5ccf6e45e7af6b622e3bc9e1779863/foto-1-de-ponto-comercial-para-alugar,-29-em-manoel-dias-branco,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-manoel-dias-branco-bairros-fortaleza-29m2-aluguel-RS750-id-2557302088/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 29m² em Manoel Dias Branco, Fortaleza",
          "coords": {
            "lat": -3.7411057,
            "lng": -38.4861231
          }
        },
        {
          "endereco": "Parangaba, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 15,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/c0959d6f2bc7d763684eb8c77e93abe8/foto-1-de-ponto-comercial-para-alugar,-15-em-parangaba,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-parangaba-bairros-fortaleza-15m2-aluguel-RS800-id-2634053351/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 15m² em Parangaba, Fortaleza",
          "coords": {
            "lat": -3.7771358,
            "lng": -38.5620583
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 75,
          "valor_aluguel": "1.434",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/f572c8a97d106d9ba43c24b566cceb0b/foto-1-de-sala-comercial-para-alugar,-75-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-75m2-aluguel-RS1434-id-2547860396/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 75m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/1b29cf6ef91fe4bae9a0785b802300cf/foto-1-de-sala-comercial-para-alugar,-42-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-42m2-aluguel-RS500-id-2680704097/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 31,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/e2d5be2b60559bc52816ffc0da84238d/foto-1-de-sala-comercial-para-alugar,-31-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-31m2-aluguel-RS400-id-2476321886/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 1235 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/5799a83fae890b3920b5451ed9fc5383/foto-1-de-kitnet-para-alugar,-30-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/kitnet-centro-bairros-fortaleza-30m2-aluguel-RS250-id-2616558592/",
          "amenidades": [

          ],
          "descricao": "Kitnet para alugar, 30m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7255337,
            "lng": -38.5381513
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/94aa170471ff55c998fe12528cfef104/foto-1-de-sala-comercial-para-alugar,-42-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-42m2-aluguel-RS500-id-2560315097/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Alto da Balança, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 59,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/1c7d23f37da5414bb360fe5a4cacd6b9/foto-1-de-ponto-comercial-para-alugar,-59-em-alto-da-balança,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-alto-da-balanca-bairros-fortaleza-59m2-aluguel-RS800-id-2644636458/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 59m² em Alto da Balança, Fortaleza",
          "coords": {
            "lat": -3.7653561,
            "lng": -38.5158958
          }
        },
        {
          "endereco": "Rua Álvaro de Alencar, 320 - Jacarecanga, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 40,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/12ce9e89726711bc73235e08ec0e4f58/foto-1-de-imóvel-comercial-para-alugar,-40-em-jacarecanga,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-jacarecanga-bairros-fortaleza-40m2-aluguel-RS500-id-2647764061/",
          "amenidades": [

          ],
          "descricao": "Imóvel Comercial para alugar, 40m² em Jacarecanga, Fortaleza",
          "coords": {
            "lat": -3.7095402,
            "lng": -38.5566853
          }
        },
        {
          "endereco": "Via Paisagística do Loteamento Itaperussú, 06 - Itaperi, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": 1,
          "area": 47,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/434087dfd06480841ecfcf6a9286926d/foto-1-de-apartamento-com-2-quartos-para-alugar,-47-em-itaperi,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-itaperi-bairros-fortaleza-com-garagem-47m2-aluguel-RS700-id-2654857687/",
          "amenidades": [
            "Aceita animais",
            "Garagem",
            "Área de serviço",
            "Playground",
            "Salão de festas",
            "..."
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 47m² em Itaperi, Fortaleza",
          "coords": {
            "lat": -3.796546799999999,
            "lng": -38.53682200000001
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 62,
          "valor_aluguel": "2.477",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/5cd3aa82c9f11daa937bf12695fa8404/foto-1-de-imóvel-comercial-para-alugar,-62-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-aldeota-bairros-fortaleza-62m2-aluguel-RS2477-id-2547859018/",
          "amenidades": [

          ],
          "descricao": "Imóvel Comercial para alugar, 62m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rua Guilherme Rocha, 381 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 38,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/27741de0394585623c76b9f8be1c661e/foto-1-de-sala-comercial-para-alugar,-38-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-38m2-aluguel-RS250-id-2566170342/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 38m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7265229,
            "lng": -38.5297314
          }
        },
        {
          "endereco": "Rua Álef de Souza Cavalcante, 1077 - Jangurussu, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 790,
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/48169f8487fd01eec0bfce6a94322ebb/foto-1-de-lote/terreno-para-alugar,-790-em-jangurussu,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-jangurussu-bairros-fortaleza-790m2-aluguel-RS1000-id-2557312515/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar, 790m² em Jangurussu, Fortaleza",
          "coords": {
            "lat": -3.8299171,
            "lng": -38.5213888
          }
        },
        {
          "endereco": "Rua Luiza Guimarães, 709 - Lagoa Redonda, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": null,
          "area": 83,
          "valor_aluguel": "2.100",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/b6f62568d2b5e513a98297e0f0c91f6b/foto-1-de-casa-de-condomínio-com-3-quartos-para-alugar,-83-em-lagoa-redonda,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-de-condominio-3-quartos-lagoa-redonda-bairros-fortaleza-83m2-aluguel-RS2100-id-2644580168/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Varanda",
            "Quintal",
            "Aceita animais",
            "..."
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
          "banheiros": 1,
          "vagas": null,
          "area": 77,
          "valor_aluguel": "2.300",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/04691c0e736f8b28f2b29eb523dbda1e/foto-1-de-sala-comercial-com-1-quarto-para-alugar,-77-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-1-quartos-meireles-bairros-fortaleza-77m2-aluguel-RS2300-id-2684555693/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/25aa8031a7898f123b20b413b53ddfa9/foto-1-de-sala-comercial-para-alugar,-42-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-42m2-aluguel-RS500-id-2510345984/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Pedro Borges, 30 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 52,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/80f100188d70c26e62131861b4aaf5d2/foto-1-de-sala-comercial-para-alugar,-52-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-52m2-aluguel-RS800-id-2620337549/",
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
          "banheiros": 5,
          "vagas": 3,
          "area": 187,
          "valor_aluguel": "2.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/43a318200da8ec893441b9b82098b663/foto-1-de-imóvel-comercial-com-3-quartos-para-alugar,-187-em-fátima,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-3-quartos-fatima-bairros-fortaleza-com-garagem-187m2-aluguel-RS2000-id-2631812576/",
          "amenidades": [
            "Cozinha",
            "Piscina",
            "Área de serviço",
            "Quintal",
            "Aceita animais"
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
          "banheiros": 1,
          "vagas": null,
          "area": 244,
          "valor_aluguel": "2.900",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/01ab52dcbe6237f7e552b4b7130201ce/foto-1-de-casa-com-4-quartos-para-alugar,-244-em-edson-queiroz,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-4-quartos-edson-queiroz-bairros-fortaleza-244m2-aluguel-RS2900-id-2672152436/",
          "amenidades": [
            "Closet",
            "Varanda gourmet",
            "Área de serviço",
            "Quintal",
            "Aceita animais"
          ],
          "descricao": "Casa com 4 Quartos para alugar, 244m² em Edson Queiroz, Fortaleza",
          "coords": {
            "lat": -3.7827248,
            "lng": -38.4785309
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": null,
          "valor_aluguel": null,
          "url_imagem": null,
          "url_detalhes": "/imovel/lote-terreno-aldeota-bairros-fortaleza-aluguel-RS180-id-2614653284/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": null,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/4ee84d435f1ab0b1f7dbf70a2a0243db/foto-1-de-lote/terreno-para-alugar-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-aldeota-bairros-fortaleza-aluguel-RS180-id-2547860445/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Rua Barão do Rio Branco, 1071 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 33,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/3a8768aade2ca4b5195cc362415fe374/foto-1-de-sala-comercial-para-alugar,-33-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-33m2-aluguel-RS650-id-2599839559/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 33m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7277511,
            "lng": -38.5283848
          }
        },
        {
          "endereco": "Travessa Contaneide, 12 - Edson Queiroz, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 1,
          "vagas": 1,
          "area": 30,
          "valor_aluguel": "2.300",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d3b0b12744c156cf82bd3a8a8374fcca/foto-1-de-apartamento-com-1-quarto-para-alugar,-30-em-edson-queiroz,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-1-quartos-edson-queiroz-bairros-fortaleza-com-garagem-30m2-aluguel-RS2300-id-2670086300/",
          "amenidades": [
            "Piscina",
            "Churrasqueira",
            "Elevador",
            "Condomínio fechado",
            "Varanda",
            "..."
          ],
          "descricao": "Apartamento com 1 Quarto para alugar, 30m² em Edson Queiroz, Fortaleza",
          "coords": {
            "lat": -3.775279499999999,
            "lng": -38.475562
          }
        },
        {
          "endereco": "Rua Romeu Aldigueri, 22 - Guararapes, Fortaleza - CE",
          "quartos": null,
          "banheiros": 3,
          "vagas": 18,
          "area": 216,
          "valor_aluguel": "12.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d2612309557ba6c61954b5830e22dba1/foto-1-de-sala-comercial-para-alugar,-216-em-guararapes,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-guararapes-bairros-fortaleza-com-garagem-216m2-aluguel-RS12000-id-2572709205/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 216m² em Guararapes, Fortaleza",
          "coords": {
            "lat": -3.7655248,
            "lng": -38.4888106
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 1789 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": null,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a439ee29de0a0dd7c1049121b0bda018/foto-1-de-lote/terreno-para-alugar-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-aldeota-bairros-fortaleza-aluguel-RS180-id-2547859111/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7327632,
            "lng": -38.5075337
          }
        },
        {
          "endereco": "Avenida Senador Virgílio Távora, 1701 - Meireles, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": null,
          "area": 35,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/d26962d6593a940ce0cffefa338c4599/foto-1-de-imóvel-comercial-para-alugar,-35-em-meireles,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-meireles-bairros-fortaleza-35m2-aluguel-RS795-id-2682677723/",
          "amenidades": [

          ],
          "descricao": "Imóvel Comercial para alugar, 35m² em Meireles, Fortaleza",
          "coords": {
            "lat": -3.7403814,
            "lng": -38.4939797
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 5753 - Papicu, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 45,
          "valor_aluguel": "1.800",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a8b605018a1dd628ad205242bc9e3567/foto-1-de-sala-comercial-para-alugar,-45-em-papicu,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-papicu-bairros-fortaleza-45m2-aluguel-RS1800-id-2631747761/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 45m² em Papicu, Fortaleza",
          "coords": {
            "lat": -3.7417295,
            "lng": -38.4801094
          }
        },
        {
          "endereco": "Travessa Ouvidor - Centro, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 1,
          "vagas": null,
          "area": 22,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/b6ad23bf5dc4721d770b0ac1cd338a26/foto-1-de-kitnet-com-1-quarto-para-alugar,-22-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/kitnet-1-quartos-centro-bairros-fortaleza-22m2-aluguel-RS380-id-2588553349/",
          "amenidades": [

          ],
          "descricao": "Kitnet com 1 Quarto para alugar, 22m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7409446,
            "lng": -38.531908
          }
        },
        {
          "endereco": "Rua Vilebaldo Aguiar, 1151 - Cocó, Fortaleza - CE",
          "quartos": 3,
          "banheiros": 3,
          "vagas": 2,
          "area": 71,
          "valor_aluguel": "2.300",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/37839efbd2286556aebffbce08bc0e16/foto-1-de-apartamento-com-3-quartos-para-alugar,-71-em-cocó,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-3-quartos-coco-bairros-fortaleza-com-garagem-71m2-aluguel-RS2300-id-2684026525/",
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
          "quartos": 3,
          "banheiros": 3,
          "vagas": null,
          "area": 146,
          "valor_aluguel": "3.400",
          "url_imagem": null,
          "url_detalhes": "/imovel/apartamento-3-quartos-guararapes-bairros-fortaleza-146m2-aluguel-RS3400-id-2684754596/",
          "amenidades": [

          ],
          "descricao": null,
          "coords": {
            "lat": -3.7589949,
            "lng": -38.4893554
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 42,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/83fbc2ef4e754cb541f0a8f0975aec7c/foto-1-de-sala-comercial-para-alugar,-42-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-42m2-aluguel-RS500-id-2476321312/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 42m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 1235 - Centro, Fortaleza - CE",
          "quartos": 1,
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/c940beea9a94719ef7f4b3c194c2819f/foto-1-de-kitnet-com-1-quarto-para-alugar,-30-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/kitnet-1-quartos-centro-bairros-fortaleza-30m2-aluguel-RS250-id-2631744995/",
          "amenidades": [

          ],
          "descricao": "Kitnet com 1 Quarto para alugar, 30m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7255337,
            "lng": -38.5381513
          }
        },
        {
          "endereco": "Avenida Pontes Vieira, 2340 - Dionísio Torres, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 57,
          "valor_aluguel": "3.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/8f34c188ec1b4b3f9f26693c0680e3d8/foto-1-de-sala-comercial-para-alugar,-57-em-dionísio-torres,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-dionisio-torres-bairros-fortaleza-57m2-aluguel-RS3000-id-2634722042/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 57m² em Dionísio Torres, Fortaleza",
          "coords": {
            "lat": -3.7513729,
            "lng": -38.5007311
          }
        },
        {
          "endereco": "Rua Bárbara de Alencar, 1837 - Aldeota, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 20,
          "valor_aluguel": "1.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/8c132c5664cae23ede7eedeff06e2f5c/foto-1-de-imóvel-comercial-para-alugar,-20-em-aldeota,-fortaleza.jpg",
          "url_detalhes": "/imovel/imovel-comercial-aldeota-bairros-fortaleza-20m2-aluguel-RS1000-id-2651147455/",
          "amenidades": [

          ],
          "descricao": "Imóvel Comercial para alugar, 20m² em Aldeota, Fortaleza",
          "coords": {
            "lat": -3.7397229,
            "lng": -38.5084529
          }
        },
        {
          "endereco": "Rua Floriano Peixoto, 187 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 31,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/1baaa0a3f7f4259294975edd33f91b56/foto-1-de-sala-comercial-para-alugar,-31-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-31m2-aluguel-RS400-id-2476321055/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 31m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.724243,
            "lng": -38.52588
          }
        },
        {
          "endereco": "Avenida Aguanambi, 806 - Fátima, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": 1,
          "area": 36,
          "valor_aluguel": "1.100",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/0b73fbc06efa45fec0a02aa2f38eda38/foto-1-de-ponto-comercial-para-alugar,-36-em-fátima,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-fatima-bairros-fortaleza-com-garagem-36m2-aluguel-RS1100-id-2590947122/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 312,
          "valor_aluguel": "4.200",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/61ecd5aa3acf83c9d389f9947b5f2bf6/foto-1-de-ponto-comercial-para-alugar,-312-em-boa-vista,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-boa-vista-bairros-fortaleza-312m2-aluguel-RS4200-id-2674409688/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 312m² em BOA VISTA, Fortaleza",
          "coords": {
            "lat": -3.8062307,
            "lng": -38.5159271
          }
        },
        {
          "endereco": "Avenida Viena Weyne, 845 - Cambeba, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 23,
          "valor_aluguel": "1.900",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/063aa3ad14e44cbb7a36441f4fb79ecd/foto-1-de-sala-comercial-para-alugar,-23-em-cambeba,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-cambeba-bairros-fortaleza-23m2-aluguel-RS1900-id-2633452190/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 23m² em Cambeba, Fortaleza",
          "coords": {
            "lat": -3.8011169,
            "lng": -38.4870045
          }
        },
        {
          "endereco": "Rua Pedro Borges, 20 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 8,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/e762dfb772dcffe2b0a2f8e910a02e52/foto-1-de-lote/terreno-para-alugar,-8-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-centro-bairros-fortaleza-8m2-aluguel-RS350-id-2614657806/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar, 8m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7282492,
            "lng": -38.5253121
          }
        },
        {
          "endereco": "Rua 1068, 35 - Conjunto Ceara II, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 306,
          "valor_aluguel": "3.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/9c9b782dd8f72d56a8c1f1464f4717a8/foto-1-de-prédio-comercial-para-alugar,-306-em-conjunto-ceara-ii,-fortaleza.jpg",
          "url_detalhes": "/imovel/predio-comercial-conjunto-ceara-ii-bairros-fortaleza-306m2-aluguel-RS3500-id-2634447453/",
          "amenidades": [

          ],
          "descricao": "Prédio Comercial para alugar, 306m² em Conjunto Ceara II, Fortaleza",
          "coords": {
            "lat": -3.7671569,
            "lng": -38.6139157
          }
        },
        {
          "endereco": "Avenida Juscelino Kubitschek, 4950 - Passaré, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": 1,
          "area": 60,
          "valor_aluguel": "1.209",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/2e8acb96701c9ba08e96765ef07fde16/foto-1-de-apartamento-com-2-quartos-para-alugar,-60-em-passaré,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-passare-bairros-fortaleza-com-garagem-60m2-aluguel-RS1209-id-2663297954/",
          "amenidades": [
            "Piscina",
            "Elevador",
            "Condomínio fechado",
            "Área de serviço",
            "Cozinha",
            "..."
          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 60m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.8202034,
            "lng": -38.5346914
          }
        },
        {
          "endereco": "Rua Itapagé, 32 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 36,
          "valor_aluguel": "1.100",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/1e774a6650bca48b02582bbb2d48a631/foto-1-de-ponto-comercial-para-alugar,-36-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-centro-bairros-fortaleza-36m2-aluguel-RS1100-id-2670782038/",
          "amenidades": [

          ],
          "descricao": "Ponto Comercial para alugar, 36m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7312728,
            "lng": -38.5390134
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 39,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/02b3e7d2466135c87dc25a78542fe656/foto-1-de-sala-comercial-para-alugar,-39-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-39m2-aluguel-RS500-id-2476321217/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 39m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 1235 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/465073e95d39a06819e8108b30b63b86/foto-1-de-kitnet-para-alugar,-30-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/kitnet-centro-bairros-fortaleza-30m2-aluguel-RS250-id-2616559248/",
          "amenidades": [

          ],
          "descricao": "Kitnet para alugar, 30m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7255337,
            "lng": -38.5381513
          }
        },
        {
          "endereco": "Rua Professora Stella Cochrane, 341 - Passaré, Fortaleza - CE",
          "quartos": 2,
          "banheiros": 1,
          "vagas": 1,
          "area": 45,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/26b581fb76ac96b5f3ecfc8f3ddc3651/foto-1-de-apartamento-com-2-quartos-para-alugar,-45-em-passaré,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-passare-bairros-fortaleza-com-garagem-45m2-aluguel-RS800-id-2616748997/",
          "amenidades": [

          ],
          "descricao": "Apartamento com 2 Quartos para alugar, 45m² em Passaré, Fortaleza",
          "coords": {
            "lat": -3.7957662,
            "lng": -38.5367562
          }
        },
        {
          "endereco": "Rua Padre Pedro de Alencar, 632 - Messejana, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 42,
          "valor_aluguel": "1.800",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/f93f0b322534b40c122ec4f41e46651e/foto-1-de-ponto-comercial-para-alugar,-42-em-messejana,-fortaleza.jpg",
          "url_detalhes": "/imovel/ponto-comercial-messejana-bairros-fortaleza-42m2-aluguel-RS1800-id-2680686195/",
          "amenidades": [

          ],
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
          "valor_aluguel": "2.609",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/39a60c975e90982cb0c5a362dec2fb14/foto-1-de-apartamento-com-2-quartos-para-alugar,-57-em-benfica,-fortaleza.jpg",
          "url_detalhes": "/imovel/apartamento-2-quartos-benfica-bairros-fortaleza-com-garagem-57m2-aluguel-RS2609-id-2681122804/",
          "amenidades": [
            "Piscina",
            "Elevador",
            "Condomínio fechado",
            "Área de serviço",
            "Quadra poliesportiva",
            "..."
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
          "banheiros": 5,
          "vagas": 16,
          "area": 480,
          "valor_aluguel": "5.000",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/c0c1ae244e6460cdbae0ca734d19aa59/foto-1-de-casa-com-5-quartos-para-alugar,-480-em-sapiranga,-fortaleza.jpg",
          "url_detalhes": "/imovel/casa-5-quartos-sapiranga-bairros-fortaleza-com-garagem-480m2-aluguel-RS5000-id-2682203200/",
          "amenidades": [
            "Churrasqueira",
            "Quintal",
            "Aceita animais",
            "Área de serviço",
            "Escritório",
            "..."
          ],
          "descricao": "Casa com 5 Quartos para alugar, 480m² em Sapiranga, Fortaleza",
          "coords": {
            "lat": -3.797762,
            "lng": -38.4637465
          }
        },
        {
          "endereco": "Rua Ernesto Pedro dos Santos, 421 - Jóquei Clube, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 397,
          "valor_aluguel": "8.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/a38cd06eb3b2b038e048e460f34e32e7/foto-1-de-galpão/depósito/armazém-para-alugar,-397-em-jóquei-clube,-fortaleza.jpg",
          "url_detalhes": "/imovel/galpao-deposito-armazem-joquei-clube-bairros-fortaleza-397m2-aluguel-RS8500-id-2646365180/",
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
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 407,
          "valor_aluguel": "1.500",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/6cbfffe0141b240fd3a3e0c96ce066cb/foto-1-de-lote/terreno-para-alugar,-407-em-tauape,-fortaleza.jpg",
          "url_detalhes": "/imovel/lote-terreno-tauape-bairros-fortaleza-407m2-aluguel-RS1500-id-2647761910/",
          "amenidades": [

          ],
          "descricao": "Lote/Terreno para alugar, 407m² em Tauape, Fortaleza",
          "coords": {
            "lat": -3.7568462,
            "lng": -38.5069106
          }
        },
        {
          "endereco": "Rua Liberato Barroso, 307 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 39,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/483dccc8468f7be4b5b51695d5e24c36/foto-1-de-sala-comercial-para-alugar,-39-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-39m2-aluguel-RS500-id-2476320437/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 39m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7278961,
            "lng": -38.5303569
          }
        },
        {
          "endereco": "Rua do Rosário, 77 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 2,
          "vagas": null,
          "area": 85,
          "valor_aluguel": "1.271",
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/486e0d4bab38810a91b8b3c7fd2c3244/foto-1-de-sala-comercial-para-alugar,-85-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-85m2-aluguel-RS1271-id-2547860466/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 85m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.728418999999999,
            "lng": -38.5262788
          }
        },
        {
          "endereco": "Rua Senador Pompeu, 649 - Centro, Fortaleza - CE",
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 23,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/42ff4fead95ea52ed18a3a2e558f1acf/foto-1-de-sala-comercial-para-alugar,-23-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-centro-bairros-fortaleza-23m2-aluguel-RS600-id-2661387056/",
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
          "quartos": null,
          "banheiros": 1,
          "vagas": null,
          "area": 30,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/c74b1630c6636ceba33c579b6b77f3a2/foto-1-de-kitnet-para-alugar,-30-em-centro,-fortaleza.jpg",
          "url_detalhes": "/imovel/kitnet-centro-bairros-fortaleza-30m2-aluguel-RS250-id-2616558582/",
          "amenidades": [

          ],
          "descricao": "Kitnet para alugar, 30m² em Centro, Fortaleza",
          "coords": {
            "lat": -3.7255337,
            "lng": -38.5381513
          }
        },
        {
          "endereco": "Avenida Santos Dumont, 5554 - Cocó, Fortaleza - CE",
          "quartos": null,
          "banheiros": null,
          "vagas": null,
          "area": 26,
          "valor_aluguel": null,
          "url_imagem": "https://resizedimgs.vivareal.com/crop/360x240/named.images.sp/1a642d86d949a9e5ecaa5b6fe3815145/foto-1-de-sala-comercial-para-alugar,-26-em-cocó,-fortaleza.jpg",
          "url_detalhes": "/imovel/sala-comercial-coco-bairros-fortaleza-26m2-aluguel-RS700-id-2547859129/",
          "amenidades": [

          ],
          "descricao": "Sala Comercial para alugar, 26m² em Cocó, Fortaleza",
          "coords": {
            "lat": -3.7414838,
            "lng": -38.482827
          }
        }
      ],
      "status": "OK"
    };

    return of(dadosMock); ;
  }
}
