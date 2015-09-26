FROM django:1.8.4-python2

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY requirements.txt /usr/src/app/
RUN pip install --no-cache-dir -r requirements.txt

COPY . /usr/src/app

# making the db path seperate to ensure that src volume mapping doest not cause errors
RUN mkdir -p /usr/src/db
ENV db_path="/usr/src/db/db.sqlite3"

RUN python manage.py migrate

RUN python manage.py mockingest tech/management/commands/data.txt

EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
