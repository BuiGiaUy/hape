import { Controller, Get,Put, Body, Res, Post, Param, Delete, UseGuards} from '@nestjs/common';
import { CartService } from './cart.service';
import { CheckoutService } from './checkout.service';
import { AddToCartDto  } from './dto/add-to-cart.dto';
import { CheckoutDto  } from './dto/checkout.dto';
import { AuthGuard } from '@nestjs/passport';
@UseGuards(AuthGuard('jwt'))  
@Controller()
export class CheckoutController {
    constructor(
        public readonly cartService: CartService,
        public readonly checkoutService: CheckoutService,
        ) {}

    @Post('/api/cart')
    async create(@Res() res,  @Body() addToCartDto: AddToCartDto): Promise<any> {
        const userID = res.req.user.id
        return res.json(await this.cartService.addToCart(userID, addToCartDto))
    }
    @Get('/api/cart')
    async get(@Res() res): Promise<any> {
        const userID = res.req.user.id
        let {collect = '' } = res.req.query
        return res.json(await this.cartService.getByUserID(userID, collect))
    }
    @Post('/api/checkout')
    async checkout(@Res() res,  @Body() checkoutDto: CheckoutDto): Promise<any> {
        const userID = res.req.user.id
       
        return res.json(await this.checkoutService.checkout(userID, checkoutDto))
    }

}
