import psycopg2

from . import databaseconfig

def get_connection(func):
    '''
    Decorator for getting connection to database
    '''

    def wrapper(*args, **kwargs):
        conn = psycopg2.connect(databaseconfig.conn_string)
        cursor = conn.cursor()
        result = func(cursor, *args, **kwargs)
        if databaseconfig.commit_to_database:
            conn.commit()
        cursor.close()
        conn.close()
        return result

    return wrapper
