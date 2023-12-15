import { Injectable } from '@nestjs/common';
import { MercadoPagoConfig, Preference } from 'mercadopago'

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    const client = new MercadoPagoConfig({
      accessToken: 'APP_USR-799994180643924-121216-c139d9d2ff8b03588c337f875c1a7493-131425210'
    })

    const preference = new Preference(client)

    const teste = await preference.create({
      body: {
        items: [
          {
            id: 'novoId',
            title: 'novoTitulo',
            quantity: 1,
            unit_price: 5,
          }
        ],
        back_urls: {
          failure: 'http://localhost:3000/come-back',
          pending: 'http://localhost:3000/come-back',
          success: 'http://localhost:3000/come-back'
        },
        statement_descriptor: 'Jogo digital - Shiranai Tech',
        external_reference: 'idDoSistema',
        binary_mode: true,
      }
    })
    console.log(new Date())

    return teste.init_point
  }

  comeBack(): string {

    return 'Hello World!';
  }
}
