import { Orders } from '../collections/orders.ts';

export function loadOrders() {
    if ( Orders.find().count() === 0 ) {

        var orders = [
            {
                'name': 'Adam Nowak',
                'orderId': '123',
                'isDone': 'tak',
                'currentStatus': '',
                'items': [
                    { 'name': 'Cokół', 'remarks': 'Do poprawy' },
                    { 'name': 'Front', 'remarks': 'Do poprawy' },
                    { 'name': 'Blat', 'remarks': 'Do poprawy' }
                ]
            },
            {
                'name': 'Jan Kowalski',
                'orderId': '124',
                'isDone': 'nie',
                'currentStatus': 'Lakiernia',
                'items': [
                    { 'name': 'Cokół', 'remarks': 'Do poprawy' },
                    { 'name': 'Front', 'remarks': 'Do poprawy' },
                    { 'name': 'Blat', 'remarks': 'Do poprawy' }
                ]
            },
            {
                'name': 'Hubert Urbański',
                'orderId': '345',
                'isDone': 'nie',
                'currentStatus': 'Szlifiernia',
                'items': [
                    { 'name': 'Cokół', 'remarks': 'Do poprawy' },
                    { 'name': 'Front', 'remarks': 'Do poprawy' },
                    { 'name': 'Blat', 'remarks': 'Do poprawy' }
                ]
            }
        ];

        for ( var i = 0; i < orders.length; i++ ) {
            Orders.insert(orders[ i ]);
        }
    }
}
