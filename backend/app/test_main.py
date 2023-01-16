from fastapi import FastAPI
from fastapi.testclient import TestClient

from .db import databaseconfig
from .googleapi import location_details
from .main import app

client = TestClient(app)


def suppress_database_commit(test_func):
    def wrapper(*args, **kwargs):
        databaseconfig.commit_to_database = False
        location_details.choose_mock_functions()
        test_func()
        databaseconfig.commit_to_database = True # change back
    
    return wrapper



# @suppress_database_commit
def test_user_crud_flow():
    fullname = 'Test User'
    phone_number = '123456789'
    email = 'testemail@email.org'
    password = 'mamdosc'

    # create - register new user
    response = client.post(
        url='/register',
        json={
            'fullname': fullname,
            'phone_number': phone_number,
            'email': email,
            'password': password
        }
    )
    
    assert response.status_code == 200
    user = response.json()
    assert user['fullname'] == fullname
    assert user['phone_number'] == phone_number
    assert user['email'] == email
    assert 'user_id' in user
    user_id = user['user_id']


    # read - check for existence
    response = client.get(
        url=f'/users/{user_id}'
    )
    
    assert response.status_code == 200
    user = response.json()
    assert user['fullname'] == fullname
    assert user['phone_number'] == phone_number
    assert user['email'] == email
    assert user['user_id'] == user_id


    # obtain auth token
    response = client.post(
        url='/token',
        data={
            'username': email,
            'password': password
        },
        headers={
            'Content-type': 'application/x-www-form-urlencoded'
        }
    )
    
    assert response.status_code == 200
    token = response.json()
    assert 'access_token' in token
    assert 'token_type' in token
    token_str = token['token_type'] + " " + token['access_token']


    # update - change user name, phone number, email and password
    response = client.put(
        url=f'/users/{user_id}',
        json={
            'fullname': 'Test User2',
            'phone_number': '987654321',
            'email': 'testemail2@email.org',
            'password': 'mamdosc2'
        },
        headers={
            'Authorization': token_str
        }
    )
    
    assert response.status_code == 200
    user = response.json()
    assert user['fullname'] == 'Test User2'
    assert user['phone_number'] == '987654321'
    assert user['email'] == 'testemail2@email.org'
    assert user['user_id'] == user_id


    # obtain new auth token
    response = client.post(
        url='/token',
        data={
            'username': 'testemail2@email.org',
            'password': 'mamdosc2'
        },
        headers={
            'Content-type': 'application/x-www-form-urlencoded'
        }
    )

    assert response.status_code == 200
    token = response.json()
    assert 'access_token' in token
    assert 'token_type' in token
    token_str = token['token_type'] + " " + token['access_token']


    # delete
    response = client.delete(
        url=f'/users/{user_id}',
        headers={
            'Authorization': token_str
        }
    )

    assert response.status_code == 200


    # check if deleted
    response = client.get(
        url=f'/users/{user_id}'
    )
    
    assert response.status_code == 404



def test_advert_crud_flow():
    fullname = 'Test User'
    phone_number = '123456789'
    email = 'testemailB@email.org'
    password = 'mamdosc'

    # register new user
    response = client.post(
        url='/register',
        json={
            'fullname': fullname,
            'phone_number': phone_number,
            'email': email,
            'password': password
        }
    )
    
    assert response.status_code == 200
    user = response.json()
    assert user['fullname'] == fullname
    assert user['phone_number'] == phone_number
    assert user['email'] == email
    assert 'user_id' in user


    # obtain auth token
    response = client.post(
        url='/token',
        data={
            'username': email,
            'password': password
        },
        headers={
            'Content-type': 'application/x-www-form-urlencoded'
        }
    )
    
    assert response.status_code == 200
    token = response.json()
    assert 'access_token' in token
    assert 'token_type' in token
    token_str = token['token_type'] + " " + token['access_token']



    price = 1000.0
    description = "Test description"
    title = "Test title"
    images = ["image1"]
    address = "Czarnowiejska 30 Kraków"


    # create - post new advert
    response = client.post(
        url='/adverts',
        json={
            'price': price,
            'description': description,
            'title': title,
            'images': images,
            'address': address
        },
        headers={
            'Authorization': token_str
        }
    )

    assert response.status_code == 200
    advert = response.json()
    assert advert['price'] == price
    assert advert['description'] == description
    assert advert['title'] == title
    assert advert['images'] == images
    assert advert['address'] == address
    assert 'advert_id' in advert
    assert 'author_id' in advert
    assert 'latitude' in advert
    assert 'longitude' in advert
    assert 'date' in advert
    advert_id = advert['advert_id']
    author_id = advert['author_id']


    # read - check for existence
    response = client.get(
        url=f'/adverts/{advert_id}'
    )

    assert response.status_code == 200
    advert = response.json()
    assert advert['price'] == price
    assert advert['description'] == description
    assert advert['title'] == title
    assert advert['images'] == images
    assert advert['address'] == address
    assert advert['advert_id'] == advert_id
    assert advert['author_id'] == author_id


    # update - change price
    price = 2000
    response = client.put(
        url=f'/adverts/{advert_id}',
        json={
            'price': price,
            'description': description,
            'title': title,
            'images': images,
            'address': address
        },
        headers={
            'Authorization': token_str
        }
    )

    assert response.status_code == 200
    advert = response.json()
    assert advert['price'] == price
    assert advert['description'] == description
    assert advert['title'] == title
    assert advert['images'] == images
    assert advert['address'] == address
    assert advert['advert_id'] == advert_id
    assert advert['author_id'] == author_id


    # delete advert
    price = 2000
    response = client.delete(
        url=f'/adverts/{advert_id}',
        headers={
            'Authorization': token_str
        }
    )

    assert response.status_code == 200


    # check if advert is deleted
    response = client.get(
        url=f'/adverts/{advert_id}'
    )
    
    assert response.status_code == 404


    # delete author
    response = client.delete(
        url=f'/users/{author_id}',
        headers={
            'Authorization': token_str
        }
    )

    assert response.status_code == 200


    # check if author is deleted
    response = client.get(
        url=f'/users/{author_id}'
    )
    
    assert response.status_code == 404