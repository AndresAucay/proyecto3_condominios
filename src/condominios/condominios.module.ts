import { Module } from '@nestjs/common';
import { CondominiosService } from './condominios.service';
import { CondominiosController } from './condominios.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CondominiosController],
  providers: [CondominiosService],
  imports:[PrismaModule],
})
export class CondominiosModule {}
