import { Injectable } from '@nestjs/common';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServiciosService {
  constructor (private prisma: PrismaService){}
  create(createServicioDto: CreateServicioDto) {
    return ;
  }

  findAll() {
    return this.prisma.service.findMany();
  }
  findAllextint(){
    return this.prisma.service.findMany();
  }

  findOne(id: number) {
    return this.prisma.service.findUnique({where:{ id}});
  }

  update(id: number, updateServicioDto: UpdateServicioDto) {
    return;
  }

  remove(id: number) {
    return this.prisma.service.delete({where: { id } });
  }
}