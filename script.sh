#! /usr/bin/bash

cd api/

docker compose up

mongoimport --uri mongodb://root:password123@0.0.0.0:27017 -d provisioning -c devices --jsonArray --file provisioning.devices.json
