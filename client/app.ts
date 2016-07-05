import 'reflect-metadata';
import { Component, provide } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';
import { APP_BASE_HREF } from '@angular/common';
import { OrdersList } from './imports/orders-list/orders-list.ts';
import { OrderDetails } from './imports/order-details/order-details.ts';

@Component({
    selector: 'app',
    templateUrl: '/client/app.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', name: 'OrdersList', component: OrdersList },
    { path: '/order/:orderId', name: 'OrderDetails', component: OrderDetails }
])
class TempControl {}

bootstrap(TempControl, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
