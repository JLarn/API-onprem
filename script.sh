#! /usr/bin/bash

docker compose up --detach

mongoimport --uri mongodb://root:password123@0.0.0.0:27017 -d provisioning -c devices --jsonArray --file provisioning.devices.json
