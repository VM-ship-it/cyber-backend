import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindProductBySearchParams } from './dto/product-dto';

@Injectable()
export class ProductService {

  constructor(
    private prisma: PrismaService
  ) { }

  async getByNewArrival() {
    const products = await this.prisma.product.findMany({
      orderBy: {
        createdAt: 'asc'
      },
      include: {
        productItemInfo: true,
        category: true,
      },
    })
    if (!products) throw new BadRequestException('No product')
    return products
  }

  async getByBestSeller() {
    const products = await this.prisma.product.findMany({
      orderBy: {
        bestSeller: 'desc'
      },
      include: {
        productItemInfo: true,
        category: true,
      },
    })
    if (!products) throw new BadRequestException('No product')
    return products
  }

  async findAllProducts() {
    const products = await this.prisma.product.findMany({
      include: {
        productItemInfo: {
          orderBy: {
            price: 'asc'
          },
        },
        category: true
      },
    })
    if (!products) throw new BadRequestException('No product')
    return products
  }

  async findAllProductsByNames(title: string) {
    const products = await this.prisma.product.findMany({
      where: {
        title: {
          contains: title,
          mode: 'insensitive'
        }
      },
      include: {
        productItemInfo: true,
        category: true
      },
    })
    if (!products) throw new BadRequestException('No product')
    return products
  }

  async getByCategory(caregoryName: string) {
    const products = await this.prisma.product.findMany({
      where: {
        category: {
          title: {
            contains: caregoryName,
            mode: 'insensitive'
          }
        }
      },
      orderBy: {
        id: 'asc'
      },
      include: {
        productItemInfo: true,
        category: true
      },
    })
    if (!products) throw new BadRequestException('No product')
    return products
  }

  async findProductById(id: number) {
    const product = await this.prisma.product.findFirst({
      where: { id },
      include: {
        productItemInfo: {
          include: {
            brand: true,
            colors: true,
            imagesUrl: true,
            memory: true,
            screenType: true,
          },
        },
        category: true
      }
    })
    if (!product) throw new BadRequestException('No product')
    return product
  }

  async findProductByColor(colorId: number) {
    const product = await this.prisma.product.findFirst({
      where: {
        productItemInfo: {
          every: {
            imagesUrl: {
              every: { id: colorId }
            }
          }
        }
      },
      include: {
        productItemInfo: {
          include: {
            colors: true,
            memory: true,
            imagesUrl: true,
          }
        }
      }
    })
    if (!product) throw new BadRequestException('No product')
    return product
  }

  async findProductByQuery(data: FindProductBySearchParams) {
    const brandId = data.brandId?.split(',').map(Number)
    const memoryId = data.memory?.split(',').map(Number)
    const screenTypeId = data.screenType?.split(',').map(Number)

    const product = await this.prisma.product.findMany({
      where: {
        productItemInfo: {
          some: {
            brandId: {
              in: brandId
            },
            screenType: {
              id: { in: screenTypeId }
            },
            memory: {
              some: {
                id: { in: memoryId }
              }
            }
          }
        },
      },
      skip: +data.page,
      take: 8,
      include: {
        productItemInfo: true,
        category: true
      }
    })

    if (!product) throw new BadRequestException('No product by this params')

    return product
  }
}