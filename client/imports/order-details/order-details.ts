import { Component, NgZone } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { Tracker } from 'meteor/tracker';
import { Orders } from '../../../collections/orders.ts';

@Component({
    selector: 'order-details',
    templateUrl: '/client/imports/order-details/order-details.html'
})
export class OrderDetails {
    order:Object;

    constructor(params:RouteParams, ngZone: NgZone) {
        var orderId = params.get('orderId');
        Tracker.autorun(() => {
            ngZone.run(() => {
                this.order = Orders.findOne(orderId);
            });
        });
    }
}
