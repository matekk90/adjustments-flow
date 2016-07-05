import { Component } from '@angular/core';
import { Orders }    from '../../../collections/orders.ts';
import { Mongo }     from 'meteor/mongo';
import { RouterLink }  from '@angular/router-deprecated';

@Component({
    selector: 'orders-list',
    templateUrl: '/client/imports/orders-list/orders-list.html',
    directives: [RouterLink]
})

export class OrdersList {
    orders:Mongo.Cursor<Object>;

    constructor() {
        this.orders = Orders.find();
    }
}
