cd ./developer.env/postgres/
docker-compose down
cd ../
cd ./rabbitmq
docker-compose down
docker volume prune -f
docker-compose up -d --build
cd ../
cd ./postgres
docker-compose up -d --build
pause