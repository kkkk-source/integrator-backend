#!/bin/bash

curl -H "Content-Type: application/json" -d '{ "name": "name-test", "description": "name-description", "price": 1234 }' http://localhost:3000/api/v1/items
