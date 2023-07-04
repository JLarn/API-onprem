# API-onprem

Per poter eseguire `./script.sh` è prima necessario lanciare il comando:
> chmod u+x script.sh

In caso di errore `/bin/bash^M: bad interpreter: No such file or directory` lanciare il comando:

> sed -i -e 's/\r$//' 