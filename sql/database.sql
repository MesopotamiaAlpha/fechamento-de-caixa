create database fechamentoCaixa;

use fechamentoCaixa;

drop table caixa1;

create table if not exists caixa1(
    id_caixa1 INT NOT NULL AUTO_INCREMENT,
    nota100 int (255)  not null,
    nota50 int (255) not null,
    nota20 int (255) not null,
    nota10 int (255) not null,
    nota5 int (255) not null,
    nota2 int (255) not null,
    moeda50 float not null,
    moeda25 float not null,
    moeda10 float not null,
    moeda5 float not null,
    total float not null,
    primary key (id_caixa1)
)ENGINE=InnoDB default CHARSET=utf8;