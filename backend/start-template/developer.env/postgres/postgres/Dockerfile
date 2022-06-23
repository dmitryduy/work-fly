FROM postgres:12

RUN apt-get update -qq && \
    apt-get install -y postgresql-contrib

ADD *.sql /docker-entrypoint-initdb.d/
