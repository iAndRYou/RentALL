import psycopg2

from . import config

def get_connection(func):
    '''
    Decorator for getting connection to database
    '''
    
    def wrapper(*args, **kwargs):
        conn = psycopg2.connect(config.conn_string)
        cursor = conn.cursor()
        result = func(cursor, *args, **kwargs)
        if config.commit_to_database:
            conn.commit()
        cursor.close()
        conn.close()
        return result

    return wrapper