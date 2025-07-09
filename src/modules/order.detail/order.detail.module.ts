import { Module } from '@nestjs/common';
import { OderDetailsService } from './order.detail.service';
import { OderDetailsController } from './order.detail.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderDetail, OrderDetailSchema } from './schemas/order.detail.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: OrderDetail.name, schema: OrderDetailSchema }])],
    controllers: [OderDetailsController],
    providers: [OderDetailsService],
})
export class OderDetailsModule { }
