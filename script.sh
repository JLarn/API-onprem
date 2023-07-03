#! /usr/bin/bash

sudo apt install mongo-tools
if [ ! -d api ];
    then
        mkdir api
        cd api/
        git clone https://github.com/JLarn/API-onprem.git
    else
        cd api/
        git pull            
fi

docker compose up

mongoimport -d provisioning -c devices --jsonArray --file provisioning.devices.json