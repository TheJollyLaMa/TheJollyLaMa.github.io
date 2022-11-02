app.controller('SmarthomeController', ['$scope', function($scope) {
    $scope.title = "Smarthome prototype";
    $scope.smarthomes = [
        {
            "title": "Smarthome prototype 1",
            "id_hash": "0x0000000000000000000000000000000000000001",
            "chain": "Polygon",
            "last_block": "0x00000000000000000Hash_To_Last_Recorded_State00000000000000000000",
            "rendered": "0x00000000000000000Hash_To_Last_Rendered_State00000000000000000000",
            "location": {
                "lattitude": "51.5074",
                "longitude": "0.1278"
            },
            "power": {
                "battery_level": "93/100",
                "battery_status": "Absorbing",
                "battery_health": "Good",
                "battery_temp": "30C",
                "solar_panel_voltage": "57.2V",
            },
            "sensors": {
                "indoor_temp": "21C",
                "indoor_humidity": "50%",
                "outdoor_temp": "15C",
                "outdoor_humidity": "40%",
                "air_quality": "Good",
            },
            "actuators": {
                "heating": "Off",
                "cooling": "Off",
                "ventilation": "Off",
                "lighting": "On",
                "watering": "On",
                "irrigation": "Off",
                "security": "On"
            },
            "network": {
                "wifi": "Connected",
                "ethernet": "Connected",
                "cellular": "Connected",
                "satellite": "Connected",
                "mesh": "Connected",
                "mesh_status": "Good"
            },
            "menu": {
                "products": {
                    "product_1": {'price': 100, 'name': 'Product 1', 'description': 'Product 1 description'},
                    "product_2": {'price': 200, 'name': 'Product 2', 'description': 'Product 2 description'},
                    "product_3": {'price': 300, 'name': 'Product 3', 'description': 'Product 3 description'}
                },
                "services": {
                    "service_1": {'price': 100, 'name': 'Service 1', 'description': 'Service 1 description'},
                    "service_2": {'price': 200, 'name': 'Service 2', 'description': 'Service 2 description'},
                    "service_3": {'price': 300, 'name': 'Service 3', 'description': 'Service 3 description'}
                }
            },
            "needs": {
                "need_1": {'price': 100, 'name': 'Need 1', 'description': 'Need 1 description'},
                "need_2": {'price': 200, 'name': 'Need 2', 'description': 'Need 2 description'},
                "need_3": {'price': 300, 'name': 'Need 3', 'description': 'Need 3 description'}
            },
            "wants": {
                "want_1": {'price': 100, 'name': 'Want 1', 'description': 'Want 1 description'},
                "want_2": {'price': 200, 'name': 'Want 2', 'description': 'Want 2 description'},
                "want_3": {'price': 300, 'name': 'Want 3', 'description': 'Want 3 description'}
            },
            "assets": {
                "asset_1": {'value': 100, 'name': 'Asset 1', 'description': 'Asset 1 description'},
                "asset_2": {'value': 200, 'name': 'Asset 2', 'description': 'Asset 2 description'},
                "asset_3": {'value': 300, 'name': 'Asset 3', 'description': 'Asset 3 description'}
            },
            "liabilities": {
                "liability_1": {'value': 100, 'name': 'Liability 1', 'description': 'Liability 1 description'},
                "liability_2": {'value': 200, 'name': 'Liability 2', 'description': 'Liability 2 description'},
                "liability_3": {'value': 300, 'name': 'Liability 3', 'description': 'Liability 3 description'}
            },
            "financials": {
                "income": {
                    "income_1": {'value': 100, 'name': 'Income 1', 'description': 'Income 1 description'},
                    "income_2": {'value': 200, 'name': 'Income 2', 'description': 'Income 2 description'},
                    "income_3": {'value': 300, 'name': 'Income 3', 'description': 'Income 3 description'}
                },
                "expenses": {
                    "expense_1": {'value': 100, 'name': 'Expense 1', 'description': 'Expense 1 description'},
                    "expense_2": {'value': 200, 'name': 'Expense 2', 'description': 'Expense 2 description'}
                }
            }
        },
        {
            "title": "Smarthome prototype 2",
            "id_hash": "0x0000000000000000000000000000000000000002",
            "chain": "Polygon",
            "last_block": "0x00000000000000000Hash_To_Last_Recorded_State00000000000000000000",
            "rendered": "0x00000000000000000Hash_To_Last_Rendered_State00000000000000000000",
            "location": {
                "lattitude": "51.5074",
                "longitude": "0.1278"
            },
            "power": {
                "battery_level": "93/100",
                "battery_status": "Absorbing",
                "battery_health": "Good",
                "battery_temp": "30C",
                "solar_panel_voltage": "57.2V",
            },
            "sensors": {
                "indoor_temp": "21C",
                "indoor_humidity": "50%",
                "outdoor_temp": "15C",
                "outdoor_humidity": "40%",
                "air_quality": "Good",
            },
            "actuators": {
                "heating": "Off",
                "cooling": "Off",
                "ventilation": "Off",
                "lighting": "On",
                "watering": "On",
                "irrigation": "Off",
                "security": "On"
            },
            "network": {
                "wifi": "Connected",
                "ethernet": "Connected",
                "cellular": "Connected",
                "satellite": "Connected",
                "mesh": "Connected",
                "mesh_status": "Good"
            },
            "menu": {
                "products": {
                    "product_1": {'price': 100, 'name': 'Product 1', 'description': 'Product 1 description'},
                    "product_2": {'price': 200, 'name': 'Product 2', 'description': 'Product 2 description'},
                    "product_3": {'price': 300, 'name': 'Product 3', 'description': 'Product 3 description'}
                },
                "services": {
                    "service_1": {'price': 100, 'name': 'Service 1', 'description': 'Service 1 description'},
                    "service_2": {'price': 200, 'name': 'Service 2', 'description': 'Service 2 description'},
                    "service_3": {'price': 300, 'name': 'Service 3', 'description': 'Service 3 description'}
                }
            },
            "needs": {
                "need_1": {'price': 100, 'name': 'Need 1', 'description': 'Need 1 description'},
                "need_2": {'price': 200, 'name': 'Need 2', 'description': 'Need 2 description'},
                "need_3": {'price': 300, 'name': 'Need 3', 'description': 'Need 3 description'}
            },
            "wants": {
                "want_1": {'price': 100, 'name': 'Want 1', 'description': 'Want 1 description'},
                "want_2": {'price': 200, 'name': 'Want 2', 'description': 'Want 2 description'},
                "want_3": {'price': 300, 'name': 'Want 3', 'description': 'Want 3 description'}
            },
            "assets": {
                "asset_1": {'value': 100, 'name': 'Asset 1', 'description': 'Asset 1 description'},
                "asset_2": {'value': 200, 'name': 'Asset 2', 'description': 'Asset 2 description'},
                "asset_3": {'value': 300, 'name': 'Asset 3', 'description': 'Asset 3 description'}
            },
            "liabilities": {
                "liability_1": {'value': 100, 'name': 'Liability 1', 'description': 'Liability 1 description'},
                "liability_2": {'value': 200, 'name': 'Liability 2', 'description': 'Liability 2 description'},
                "liability_3": {'value': 300, 'name': 'Liability 3', 'description': 'Liability 3 description'}
            },
            "financials": {
                "income": {
                    "income_1": {'value': 100, 'name': 'Income 1', 'description': 'Income 1 description'},
                    "income_2": {'value': 200, 'name': 'Income 2', 'description': 'Income 2 description'},
                    "income_3": {'value': 300, 'name': 'Income 3', 'description': 'Income 3 description'}
                },
                "expenses": {
                    "expense_1": {'value': 100, 'name': 'Expense 1', 'description': 'Expense 1 description'},
                    "expense_2": {'value': 200, 'name': 'Expense 2', 'description': 'Expense 2 description'}
                }
            }
        }
    ];
}]);
