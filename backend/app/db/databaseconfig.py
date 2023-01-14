class DatabaseDetails():
    '''
    Class to store database connection details
    '''

    host = "rentall.postgres.database.azure.com"
    dbname = "postgres"
    user = "Kryson354@rentall"
    password = "Rentall!"
    sslmode = "require"

db = DatabaseDetails()
conn_string = "host={0} user={1} dbname={2} password={3} sslmode={4}".format(db.host, db.user, db.dbname, db.password, db.sslmode)

commit_to_database = True