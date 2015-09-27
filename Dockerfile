FROM python:2.7.10-slim

RUN  apt-get update
RUN  apt-get install -y libmysqlclient-dev curl build-essential


# only needed for sqlite dev db
ENV db_path="/usr/src/db/db.sqlite3"
# making the db path seperate to ensure that src volume mapping doest not cause errors
RUN mkdir -p /usr/src/db

ENV secret.key="dnqzt6_=ccf&q#24wgzk4y3mbj*48on^hr#pha+hzq-w9n&du_"
ENV DB.NAME=""
ENV DB.HOST=""
ENV DB.PORT=""
ENV DB.USER=""
ENV DB.PASSWORD=""
ENV DB.CHOICE="SQLLITE"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY requirements.txt /usr/src/app/
RUN pip install --no-cache-dir -r requirements.txt

COPY . /usr/src/app

RUN python manage.py migrate

# RUN python manage.py mockingest tech/management/commands/data.txt

EXPOSE 8000
EXPOSE 3306
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
