import { loadOrders } from './load-orders.ts';
import { Meteor } from 'meteor/meteor';

Meteor.startup(loadOrders);
