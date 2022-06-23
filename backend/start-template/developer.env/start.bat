echo on
cd ./postgres 
docker-compose up -d --build
cd ../
cd ./rabbitMq
docker-compose up -d --build
pause