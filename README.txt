WSTĘPNE WYMAGANIA:

- Python (latest): https://www.python.org/downloads/
- Node.js (latest): https://nodejs.org/en/download/

---------------------------------

INSTALOWANIE ZALEŻNOŚCI:

- w folderze /backend:
Użyć komendy 'pip install -r requirements.txt' 

- w folderze /frontend:
Użyć komendy 'npm install -g serve'

---------------------------------

TESTY:

backend/app/test_main.py

---------------------------------

URUCHOMIENIE TESTÓW:

- w folderze /backend:
Użyć komendy 'pytest' (przejście wszystkich testów powinno trwać około 40-60s)

---------------------------------

URUCHOMIENIE APLIKACJI:

!!! Przed uruchomieniem upewnić się, że w pliku database/app/googleapi/googleapiconfig wklejony jest poprawny klucz API Google (podany w mailu).

- w folderze /backend:
Użyć komendy 'uvicorn app.main:app'

- w folderze /frontend:
Użyć komendy 'serve -s build'

Po użyciu powyższych komend wejść na adres localhost:3000 (lub ten który wskaże terminal z folderu frontend)

---------------------------------

DOKUMENTACJA:

- dokumentacja techniczna: plik pdf w mailu

- dokumentacja użytkownika: plik txt 'Dokumentacja użytkownika.txt'


---------------------------------

ANALIZA STATYCZNA:

Analiza SonarQube:
- sonar-project.properties