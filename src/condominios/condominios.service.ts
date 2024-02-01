import { Injectable } from '@nestjs/common';
import { CreateCondominioDto } from './dto/create-condominio.dto';
import { UpdateCondominioDto } from './dto/update-condominio.dto';

@Injectable()
export class CondominiosService {
  create(createCondominioDto: CreateCondominioDto) {
    return 'This action adds a new condominio';
  }

  findAll() {
    return `This action returns all condominios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} condominio`;
  }

  update(id: number, updateCondominioDto: UpdateCondominioDto) {
    return `This action updates a #${id} condominio`;
  }

  remove(id: number) {
    return `This action removes a #${id} condominio`;
  }
}
