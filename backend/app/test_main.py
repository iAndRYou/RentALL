from fastapi import FastAPI
from fastapi.testclient import TestClient

from .main import app

client = TestClient(app)


# USERS

def test_register():
    response = client.post(
        url='/register',
        json={
            'fullname': 'Test User',
            'phone_number': '123456789',
            'email': 'test.email@email.org',
            'password': 'mamdosc'
        }
    )
    
    assert response.status_code == 200
    data = response.json
    assert data['fullname'] == 'Test User'
    assert data['phone_number'] == '123456789'
    assert data['email'] == 'test.email@email.org'
    assert 'user_id' in data
    user_id = data['user_id']


    response = client.get(
        url=f'/users/{user_id}'
    )
    assert response.status_code == 200
    data = response.json()
    assert data['fullname'] == 'Test User'
    assert data['phone_number'] == '123456789'
    assert data['email'] == 'test.email@email.org'
    assert data['user_id'] == user_id    
