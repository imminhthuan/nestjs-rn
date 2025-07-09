import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { RetaurantsModule } from './modules/restaurants/retaurants.module';
import { OrdersModule } from './modules/orders/orders.module';
import { OderDetailsModule } from './modules/order.detail/order.detail.module';
import { MenusModule } from './modules/menus/menus.module';
import { MenuItemsModule } from './modules/menu.items/menu.items.module';
import { MenuItemOptionsModule } from './modules/menu.item.options/menu.item.options.module';
import { LikesModule } from './modules/likes/likes.module';



@Module({
  imports: [
    LikesModule,
    MenuItemOptionsModule,
    MenuItemsModule,
    MenusModule,
    OderDetailsModule,
    OrdersModule,
    RetaurantsModule,
    ReviewsModule,
    UsersModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    })

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
