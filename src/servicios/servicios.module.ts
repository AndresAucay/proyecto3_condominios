import { Module } from '@nestjs/common';
import { ServiciosService } from './servicios.service';
import { ServiciosController } from './servicios.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ServiciosController],
  providers: [ServiciosService],
  imports:[PrismaModule],
})
export class ServiciosModule {}
