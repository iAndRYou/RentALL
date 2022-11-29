from fastapi import FastAPI
import psycopg2

from pydantic import BaseModel, Field
from typing import List, Optional
import app.user as user
import app.advert as advert
import app.location_details as location_details

app = FastAPI()

app.include_router(user.router)
app.include_router(advert.router)
app.include_router(location_details.router)

class DatabaseDetails():
    host = "rentall.postgres.database.azure.com"
    dbname = "postgres"
    user = "Kryson354@rentall"
    password = "Rentall!"
    sslmode = "require"

db = DatabaseDetails()
conn_string = "host={0} user={1} dbname={2} password={3} sslmode={4}".format(db.host, db.user, db.dbname, db.password, db.sslmode)
conn = psycopg2.connect(conn_string)
print("Connections established")
cursor = conn.cursor()

advert_create_table = '''
CREATE TABLE adverts (
    advert_id serial PRIMARY KEY,
    latitute NUMERIC(6, 4),
    longitude NUMERIC(6, 4),
    date DATE,
    price INTEGER,
    author_id INTEGER,
    description TEXT,
    title VARCHAR,
    images VARCHAR[]);
'''
user_create_table = '''
CREATE TABLE users (
    user_id serial PRIMARY KEY,
    email VARCHAR,
    phone_number VARCHAR,
    password VARCHAR);

'''
cursor.execute("DROP TABLE IF EXISTS users;")
cursor.execute(user_create_table)
print("Table user created")


cursor.execute("INSERT INTO users (email, phone_number, password) VALUES(%s, %s, %s);", ("test@gmail.com", "123456789", "passwd"))
print("Inserted 1 row")

cursor.execute("SELECT * FROM users;")
rows = cursor.fetchall()
for row in rows:
    print("Data row = (%s, %s, %s)" %(str(row[0]), str(row[1]), str(row[2])))
conn.close()
cursor.close()
conn.close()