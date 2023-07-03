#! /usr/bin/bash

rm -rf db

cd server/

docker compose down

docker rmi api:1

docker build -t api:1 .

cd ..

docker compose up --detach

docker cp devices.json mongo-onprem:/home/devices.json

docker exec mongo-onprem mongoimport -d provisioning -c devices --jsonArray --file /home/devices.json