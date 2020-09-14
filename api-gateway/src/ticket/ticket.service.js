import { Injectable, Dependencies } from '@nestjs/common';

@Injectable()
@Dependencies(['Ticket'])
export class TicketService {
    constructor(clientTicket) {
        this.clientTicket = clientTicket;
    }

    onModuleInit() {
        console.log('onModuleInit');
      }
    
      async onApplicationBootstrap() {
        console.log('onTicketBootstrap');
        await this.clientTicket.connect();
      }    


    async selectticket(data){
        // let data = {};
        console.log(data);
        return this.clientTicket.send('selectticket',data);
    }

    async findById(data){
        return this.clientTicket.send('findById',data);
    }

    async insertticket(data){
       return this.clientTicket.send('insertticket',data);
    }

    async updateticket(data){
        return this.clientTicket.send('updateticket',data);
    }

    async deleteticket(data){
        return this.clientTicket.send('deleteticket',data);
    }

    async selectairport(){
        let data = {};
        return this.clientTicket.send('selectairport',data);
    }

    async insertairport(data){
       return this.clientTicket.send('insertairport',data);
    }

    async updateairport(data){
        return this.clientTicket.send('updateairport',data);
    }

    async deleteairport(data){
        console.log(data);
        return this.clientTicket.send('deleteairport',data);
    }

}
