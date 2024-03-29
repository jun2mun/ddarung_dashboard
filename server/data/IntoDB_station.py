import json
import pymysql
import db_config

conn = pymysql.connect(host=db_config.data['host'], user=db_config.data['user'],passwd=db_config.data['passwd'],db=db_config.data['db'],charset='utf8')
table = "station"
with conn.cursor() as curs:
    with open("C:\\Users\\leejunbeom\\Desktop\\react\\react_app3\\server\\data\\preprocess\\20210404012814.json",encoding="UTF-8") as file:
        json_data =json.load(file)
        for i in json_data:
            #print(i['stationName'][5:])
            sql = """insert into """ + table +"""(ID,StationName,StationLatitude,StationLongitude) values(%s, %s, %s, %s);"""
            curs.execute(sql,(i['stationId'][3:],i['stationName'][4:],i['stationLatitude'],i['stationLongitude']))

conn.commit()       
print(curs.rowcount, "개의 레코드가 입력되었습니다.")
conn.close()

#create table station ( ID int primary key, StationName varchar(30), StationLongitude decimal(11,8), StationLatitude decimal(10,8) );