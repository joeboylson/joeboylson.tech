docker rm $(docker stop $(docker ps -a -q --filter ancestor=joeboylsontech --format="{{.ID}}"))
