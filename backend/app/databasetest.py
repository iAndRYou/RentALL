import psycopg2

class DatabaseDetails():
    '''
    Class to store database details
    '''

    host = "rentall.postgres.database.azure.com"
    dbname = "postgres"
    user = "Kryson354@rentall"
    password = "Rentall!"
    sslmode = "require"

db = DatabaseDetails()
conn_string = "host={0} user={1} dbname={2} password={3} sslmode={4}".format(db.host, db.user, db.dbname, db.password, db.sslmode)


conn = psycopg2.connect(conn_string)
cursor = conn.cursor()


#cursor.execute("DROP TABLE users;")
#cursor.execute("DROP TABLE adverts;")

#cursor.execute("CREATE TABLE users (user_id serial PRIMARY KEY, email VARCHAR, fullname VARCHAR, phone_number VARCHAR, password_hash VARCHAR);")
#cursor.execute("CREATE TABLE adverts (advert_id serial PRIMARY KEY, latitude FLOAT, longitude FLOAT, date VARCHAR, price FLOAT, author_id INT, description VARCHAR, title VARCHAR, images VARCHAR);")

# cursor.execute("INSERT INTO users (email, fullname, phone_number, password_hash) VALUES ('testmail@gmail.com', 'Test Test', '123456789', 'test_hash');")
# cursor.execute("INSERT INTO users (email, fullname, phone_number, password_hash) VALUES ('testmail2@gmail.com', 'Test2 Test', '223456789', 'test_hash2');")

#cursor.execute("INSERT INTO adverts (latitude, longitude, date, price, author_id, description, title, images) VALUES (1.0, 1.0, '2020-01-01', 100.0, 1, 'test_description', 'test_title', 'test_image');")
#cursor.execute("INSERT INTO adverts (latitude, longitude, date, price, author_id, description, title, images) VALUES (2.0, 2.0, '2021-01-01', 200.0, 0, 'test_description2', 'test_title2', 'test_image2');")


#cursor.execute("SELECT * FROM users;")
#cursor.execute("SELECT * FROM adverts;")

rows = cursor.fetchall()
print(rows)

conn.commit()
cursor.close()
conn.close()