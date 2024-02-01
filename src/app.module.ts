import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ClientsModule } from './clients/clients.module';
import { CondominiosModule } from './condominios/condominios.module';
import { ServiciosModule } from './servicios/servicios.module';

@Module({
  imports: [PrismaModule, ClientsModule, CondominiosModule, ServiciosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
