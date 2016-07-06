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
    orderId:String;

    constructor(params:RouteParams, ngZone: NgZone) {
        this.orderId = params.get('orderId');
        Tracker.autorun(() => {
            ngZone.run(() => {
                this.order = Orders.findOne(this.orderId);
                this.order.isDone = _.findWhere(this.order.items, { isDone: false }) === undefined ? true : false;
                _.forEach(this.order.items, function(item) {
                    item.isDone = _.findWhere(item.actions, { isDone: false }) === undefined ? true : false;
                });
            });
        });
    }

    updateIsDoneGroup(item, action, event) {
        action.isDone = event.target.checked;
        item.isDone = _.findWhere(item.actions, { isDone: false }) === undefined ? true : false;
        this.order.isDone = _.findWhere(this.order.items, { isDone: false }) === undefined ? true : false;
        Orders.update({_id: this.orderId}, this.order);
    }
}
