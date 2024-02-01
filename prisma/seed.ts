import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const condominium = await prisma.condominio.create({
      data: {
        description: 'Ejemplo Condominio',
      },
    });

    const client1 = await prisma.client.create({
      data: {
        name: 'Cliente 1',
        email: 'cliente1@example.com',
        phone: '123-456-7890',
        address: 'Calle Cliente 1, Ciudad',
        
      },
    });

    const client2 = await prisma.client.create({
      data: {
        name: 'Cliente 2',
        email: 'cliente2@example.com',
        phone: '0904542232',
        address: 'Calle Cliente 2, Ciudad',
       
      },
    });

    const service1 = await prisma.service.create({
      data: {
        serviceName: 'Servicio 1',
        description: 'Descripción del Servicio 1',
        cost: 29.99,
        startDate: new Date('2023-01-15'),
        endDate: new Date('2023-02-15'),
        client: {
          connect: { id: client1.id },
        },
      },
    });

    const service2 = await prisma.service.create({
      data: {
        serviceName: 'Servicio 2',
        description: 'Descripción del Servicio 2',
        cost: 39.99,
        startDate: new Date('2023-03-01'),
        endDate: new Date('2023-04-01'),
        client: {
          connect: { id: client2.id },
        },
      },
    });

    console.log({ condominium, client1, client2, service1, service2 });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
