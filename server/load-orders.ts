import { Orders } from "../collections/orders.ts";

export function loadOrders() {
    if ( Orders.find().count() === 0 ) {

        var orders = [
            {
                name: 'Adam Nowak',
                orderId: '123',
                currentStatus: '',
                items: [
                    {
                        name: 'Cokół',
                        remarks: 'Uszkodzenia mechaniczne. Poprawy lakiernicze.',
                        actions: [
                            {
                                name: 'Szlifiernia',
                                isDone: false
                            },
                            {
                                name: 'Lakiernia',
                                isDone: false
                            },
                            {
                                name: 'Polernia',
                                isDone: false
                            }
                        ]
                    },
                    {
                        name: 'Blenda',
                        remarks: 'Ściąć blendę wg rysunku.',
                        actions: [
                            {
                                name: 'Szifiernia',
                                isDone: false
                            },
                            {
                                name: 'Lakiernia',
                                isDone: true
                            }

                        ]
                    },
                    {
                        name: 'Blat',
                        remarks: 'Do poprawy',
                        actions: [
                            {
                                name: 'Lakiernia',
                                isDone: true
                            },
                            {
                                name: 'Szifiernia',
                                isDone: false
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Jan Kowalski',
                orderId: '124',
                currentStatus: 'Lakiernia',
                items: [
                    {
                        name: 'Cokół',
                        remarks: 'Do poprawy',
                        actions: [
                            {
                                name: 'Lakiernia',
                                isDone: true
                            }
                        ]
                    },
                    {
                        name: 'Front',
                        remarks: 'Do poprawy',
                        actions: [
                            {
                                name: 'Lakiernia',
                                isDone: true
                            },
                            {
                                name: 'Szifiernia',
                                isDone: false
                            }
                        ]
                    },
                    {
                        name: 'Blat',
                        remarks: 'Do poprawy',
                        actions: [
                            {
                                name: 'Lakiernia',
                                isDone: true
                            },
                            {
                                name: 'Szifiernia',
                                isDone: false
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Hubert Urbański',
                orderId: '345',
                currentStatus: 'Szlifiernia',
                items: [
                    {
                        name: 'Cokół',
                        remarks: 'Do poprawy',
                        actions: [
                            {
                                name: 'Lakiernia',
                                isDone: true
                            }
                        ]
                    },
                    {
                        name: 'Front',
                        remarks: 'Do poprawy',
                        actions: [
                            {
                                name: 'Lakiernia',
                                isDone: true
                            },
                            {
                                name: 'Szifiernia',
                                isDone: false
                            }
                        ]
                    },
                    {
                        name: 'Blat',
                        remarks: 'Do poprawy',
                        actions: [
                            {
                                name: 'Lakiernia',
                                isDone: true
                            },
                            {
                                name: 'Szifiernia',
                                isDone: false
                            }
                        ]
                    }
                ]
            }
        ];

        for ( var i = 0; i < orders.length; i++ ) {
            Orders.insert(orders[ i ]);
        }
    }
}
