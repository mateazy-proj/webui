import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ListItem, projectData } from '../interfaces/list-item';
import { SortColumn, SortDirection } from '../directives/sort-event.directive';
import { environment } from '../../../environments/environment.development';
import { CloudinaryImage } from '@cloudinary/url-gen';
const data = {
  "title": "CASA DP",
  "name": "PATRÍCIA FERNANDA FERREIRA DOS SANTOS",
  "address": "Residencial Reserva da Mata, Lote 21, Quadra 17, Rua 04 - Rua Lorenzo A. de Moraes, Mogi Mirim - SP.",
  "projectType": "ELÉTRICO",
  "materials": [
    {
      "description": "Redução excêntrica 75 mm - 50 mm",
      "quantity": "3.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Registro de gaveta c/ canopla cromada 3/4\"",
      "quantity": "10.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Curva 45 longa 100 mm",
      "quantity": "14.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Luva bolsa - bolsa 22 mm",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Tubo rígido c/ ponta lisa 75 mm - 3\"",
      "quantity": "114.5 m",
      "imageUrl": ""
    },
    {
      "description": "Joelho 90 c/anel p/ esgoto secundário 40 mm - 1.1/2\"",
      "quantity": "4.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Junção simples 100 mm- 100 mm",
      "quantity": "5.0 pç",
      "imageUrl": ""
    },
    {
      "description": "CSC Premium - Cumulus 200",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Adapt sold.curto c/bolsa-rosca p registro 32 mm - 1\"",
      "quantity": "4.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Tubos 25 mm",
      "quantity": "104.2 m",
      "imageUrl": ""
    },
    {
      "description": "Filtro em Y 3/4\"",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Joelho 90 soldável c/ rosca 25 mm - 3/4\"",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Junção simples 75 mm 75 mm",
      "quantity": "3.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Sifão de copo p/ pia e lavatório 1\" - 2\"",
      "quantity": "2.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Joelho 90 75 mm",
      "quantity": "6.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Curva 45 longa 50 mm",
      "quantity": "6.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Redução excêntrica 100 mm - 50 mm",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Joelho 45 50 mm",
      "quantity": "5.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Curva de transposição 25 mm",
      "quantity": "4.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Junção simples 50 mm - 50 mm",
      "quantity": "4.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Caixa de gordura PVC CG 30 cm",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Joelho 90º soldável 25 mm",
      "quantity": "26.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Caixa de passagem PVC 30 cm",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Bucha de redução longa 40 mm - 25 mm",
      "quantity": "2.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Registro monocomando para chuveiro 3/4\"",
      "quantity": "3.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Curva 45 longa Amanco 40 mm",
      "quantity": "7.0 pç",
      "imageUrl": ""
    },
    {
      "description": "PISCINA Bomba Piscina 1/4 CV",
      "quantity": "3.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Ralo abacaxi 50mm",
      "quantity": "4.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Curva 45 soldável 25 mm",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Tê sanitário 50 mm - 50 mm",
      "quantity": "10.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Ducha higiênica 25mm x 1/2\"",
      "quantity": "3.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Torneira de Jardim 25 mm x 1/2\"",
      "quantity": "3.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Luva 28 mm",
      "quantity": "2.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Junção simples 75 mm - 50 mm",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Tê 90 28 mm",
      "quantity": "4.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Tubo rígido c/ ponta lisa 100 mm - 4\"",
      "quantity": "98.5 m",
      "imageUrl": ""
    },
    {
      "description": "Joelho 90º soldável com  bucha de latão 25 mm - 3/4\"",
      "quantity": "3.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Ralo linear c/ grelha 100 cm",
      "quantity": "3.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Torneira de Tanque de Lavar 25mmx 3/4\"",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Conector 22 x 3/4\"",
      "quantity": "8.0 pç",
      "imageUrl": ""
    },
    {
      "description": "PISCINA Filtro 1.1/2\"",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Válvula p/ tanque 1 1/2\"",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Junção 45º soldável 25 mm",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Curva 90 curta 40 mm",
      "quantity": "4.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Luva soldável c/ rosca 25 mm -3/4\"",
      "quantity": "5.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Luva simples 50 mm",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Anel de borracha 50mm - 2\"",
      "quantity": "65.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Registro bruto de gaveta industrial 1\"",
      "quantity": "3.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Torneira de Pia de Cozinha 25 mm - 1/2\"",
      "quantity": "2.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Curva 45 soldável 50 mm",
      "quantity": "2.0 pç",
      "imageUrl": ""
    },
    {
      "description": "PISCINA Bocal de Retorno 1.1/2\"",
      "quantity": "10.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Registro esfera curto para máquina de lavar 3/4\"",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Registro de gaveta bruto ABNT 3/4\"",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Válvula p/ lavatório e tanque 1\"",
      "quantity": "3.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Junção simples 100 mm - 50 mm",
      "quantity": "4.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Joelho 90 100 mm",
      "quantity": "13.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Joelho 45 40 mm",
      "quantity": "3.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Joelho 45 28 mm",
      "quantity": "4.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Adapt sold.curto c/bolsa-rosca p registro 25 mm - 3/4\"",
      "quantity": "19.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Registro esfera VS compacto soldável PVC 25 mm",
      "quantity": "2.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Junção simples 100 mm - 75 mm",
      "quantity": "2.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Curva 90 22 mm",
      "quantity": "12.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Caixa sifonada 150x150x50",
      "quantity": "2.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Tê 90 22 mm",
      "quantity": "3.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Adapt sold.curto c/bolsa-rosca p registro 50 mm - 1.1/2\"",
      "quantity": "14.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Tê sanitário 100 mm - 100 mm",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Tubo rígido c/ ponta lisa 50 mm - 2\"",
      "quantity": "73.1 m",
      "imageUrl": ""
    },
    {
      "description": "Luva soldável 25 mm",
      "quantity": "3.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Vedação p/ saída de vaso sanitário 100 mm",
      "quantity": "3.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Máquina de Lavar Roupa 25mm x 3/4\"",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Luva de redução soldável 50 mm - 32 mm",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Conector 28 x 1\"",
      "quantity": "6.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Tê sanitário 75 mm - 50 mm",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Pressurizador Pressurizador 1\" - 1cv",
      "quantity": "2.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Tubo rígido c/ ponta lisa 40 mm",
      "quantity": "8.3 m",
      "imageUrl": ""
    },
    {
      "description": "Tubete de polipropileno para hidrômetro 3/4\"",
      "quantity": "2.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Tubos 50 mm",
      "quantity": "71.1 m",
      "imageUrl": ""
    },
    {
      "description": "Chuveiro 22mm x 3/4\"",
      "quantity": "3.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Hidrômetro individual 1,5 m³/h - 3/4\"",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Registro de esfera 3/4\"",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Válvula de retenção horiz c/ portinhola 3/4\"",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Joelho 45 100 mm",
      "quantity": "5.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Caixa sifonada 100x150x50",
      "quantity": "4.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Ralo Linear 60 cm - 40 mm",
      "quantity": "3.0 pç",
      "imageUrl": ""
    },
    {
      "description": "PISCINA Ralo de Fundo 1.1/2\"",
      "quantity": "2.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Bucha de Redução p/ esgoto secundário 40mm- 32mm",
      "quantity": "2.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Curva 45 longa 75 mm",
      "quantity": "11.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Tê 90 soldável 50 mm",
      "quantity": "15.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Bucha de redução 28 x 22",
      "quantity": "2.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Joelho 45 soldável 25 mm",
      "quantity": "5.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Tê de redução 90 soldável 50 mm - 25 mm",
      "quantity": "3.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Terminal de ventilação 50 mm",
      "quantity": "10.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Plug 50 mm",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Colar de tomada em PVC 3/4\"",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Joelho 90 22 mm",
      "quantity": "4.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Joelho 90º de transição 22 x 1/2\"",
      "quantity": "4.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Curva 90 soldável 50 mm",
      "quantity": "66.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Joelho 90º de transição 22 x 3/4\"",
      "quantity": "3.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Caixa de espera para ar-condicionado 39x21x6cm - saída 3/4\"",
      "quantity": "3.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Registro esfera VS compacto soldável PVC 50 mm",
      "quantity": "15.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Vaso Sanitário c/ cx. acoplada 1/2\"",
      "quantity": "3.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Polietileno 1500 L - Acqualimp",
      "quantity": "2.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Curva 90 28 mm",
      "quantity": "27.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Tubo CPVC 3 Mts 28 mm",
      "quantity": "33.8 m",
      "imageUrl": ""
    },
    {
      "description": "Luva bolsa - bolsa 28 mm",
      "quantity": "2.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Engate flexível plástico 1/2 - 30cm",
      "quantity": "3.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Tê de inspeção 100 mm - 75 mm",
      "quantity": "3.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Curva 90 curta 50 mm",
      "quantity": "2.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Joelho de redução 90º soldável com bucha de latão 25 mm- 1/2\"",
      "quantity": "16.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Válvula de retenção horiz c/ portinhola 1\"",
      "quantity": "2.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Joelho 90 50 mm",
      "quantity": "33.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Joelho 45 75 mm",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Luva de redução soldável 50 mm - 25 mm",
      "quantity": "5.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Sifão flexível c/ Adaptador 1.1/2\" - 1.1/2\"",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Joelho 90º soldável 50 mm",
      "quantity": "6.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Válvula p/ pia 1\"",
      "quantity": "2.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Tê 90 soldável 25 mm",
      "quantity": "17.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Tubo PVC ponta-bolsa c/ virola 50 mm - 2\"",
      "quantity": "0.2 m",
      "imageUrl": ""
    },
    {
      "description": "Válvula de retenção horiz c/ portinhola 1.1/2\"",
      "quantity": "7.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Engate flexível cobre cromado com canopla 1/2 - 30cm",
      "quantity": "6.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Sifão de copo p/ pia e lavatório 1\" - 1.1/2\"",
      "quantity": "3.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Curva 90 soldável 25 mm",
      "quantity": "28.0 pç",
      "imageUrl": ""
    },
    {
      "description": "PISCINA Bocal de Sucção 1.1/2\"",
      "quantity": "3.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Caixa de areia pluvial sem grelha CA- 60x60cm",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Tubo CPVC 3 Mts 22 mm",
      "quantity": "27.1 m",
      "imageUrl": ""
    },
    {
      "description": "Reservatório Solar - Horizontal (Rinnai) 500 L Baixa Pressão",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Anel de borracha 75mm - 3\"",
      "quantity": "27.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Luva 22 mm",
      "quantity": "3.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Tubos 32 mm",
      "quantity": "0.5 m",
      "imageUrl": ""
    },
    {
      "description": "Anel de borracha 100mm - 4\"",
      "quantity": "56.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Filtro de parede 25mmx 1/2\"",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Tê de Redução 28 x 22 mm",
      "quantity": "2.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Curva 90 curta 100 mm",
      "quantity": "6.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Máquina de Lavar Pratos 25 x 3/4\"",
      "quantity": "1.0 pç",
      "imageUrl": ""
    },
    {
      "description": "Torneira de lavatório 25 mm - 1/2\"",
      "quantity": "3.0 pç",
      "imageUrl": ""
    }
  ]
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  cloudName = "dzgzu19lj"
  cloudinary_url = `https://api.cloudinary.com/v1_1/${this.cloudName}/upload`
  constructor(private http: HttpClient, private cloudinary: CloudinaryImage) { }

  getList(): Observable<ListItem[]> {
    return this.http.get<ListItem[]>('assets/items.json')
  }

  postFile(file: File): Observable<projectData> {
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    });
    //return this.http.post<projectData>(`${environment.apiURL}/mateazy/v1/csv-processor`, file, { headers: headers })
    return of<projectData>(data)
  }

  uploadimage(file: File): Observable<any> {
    const fd = new FormData();
    fd.append('upload_presety', 'ml_default'),
      fd.append('file', file)
    return this.cloudinary.up
  }


}
