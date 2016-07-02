import 'reflect-metadata';
import { Component } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { Orders }   from '../collections/orders.ts';
import { Mongo }     from 'meteor/mongo';

@Component({
    selector: 'app',
    templateUrl: '/client/app.html'
})
class TempControl {
    orders:Mongo.Cursor<Object>;

    constructor() {
        this.orders = Orders.find();
        console.log(this.orders);
    }
}

bootstrap(TempControl);
