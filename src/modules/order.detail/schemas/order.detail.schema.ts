import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Order } from 'src/modules/orders/schemas/order.schema';
import { Menu } from 'src/modules/menus/schemas/menu.schema';
import { MenuItem } from 'src/modules/menu.items/schemas/menu.item.schema';
import { MenuItemOption } from 'src/modules/menu.item.options/schemas/menu.item.options.schema';

export type OrderDetailDocument = HydratedDocument<OrderDetail>;

@Schema({ timestamps: true })
export class OrderDetail {
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Order.name})
    order: mongoose.Schema.Types.ObjectId;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Menu.name})
    menu: mongoose.Schema.Types.ObjectId;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: MenuItem.name})
    menuitem: mongoose.Schema.Types.ObjectId;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: MenuItemOption.name})
    menuitemoption: mongoose.Schema.Types.ObjectId;
}

export const OrderDetailSchema = SchemaFactory.createForClass(OrderDetail);
