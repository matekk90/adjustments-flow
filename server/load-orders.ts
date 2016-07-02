import { Orders } from '../collections/orders.ts';

export function loadOrders() {
    if ( Orders.find().count() === 0 ) {

        var orders = [
            {
                'name': 'Adam Nowak',
                'orderId': '123',
                'isDone': 'tak',
                'currentStatus': ''
            },
            {
                'name': 'Jan Kowalski',
                'orderId': '124',
                'isDone': 'nie',
                'currentStatus': 'Lakiernia'
            },
            {
                'name': 'Hubert Urbański',
                'orderId': '345',
                'isDone': 'nie',
                'currentStatus': 'Szlifiernia'
            }
        ];

        for ( var i = 0; i < orders.length; i++ ) {
            Orders.insert(orders[ i ]);
        }
    }
}
