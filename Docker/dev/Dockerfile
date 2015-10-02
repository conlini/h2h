FROM conlini/python_dev:3.5

# only needed for sqlite dev db
ENV SQLLITE.DB.PATH="/usr/src/db/db.sqlite3"
# making the db path seperate to ensure that src volume mapping doest not cause errors
RUN mkdir -p /usr/src/db

ENV SECRET.KEY="dnqzt6_=ccf&q#24wgzk4y3mbj*48on^hr#pha+hzq-w9n&du_"
ENV DEBUG.ENABLED="true"
ENV DB.NAME=""
ENV DB.HOST=""
ENV DB.PORT=""
ENV DB.USER=""
ENV DB.PASSWORD=""
ENV DB.CHOICE="SQLLITE"
ENV LOG.LEVEL="ERROR"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Temp place code so we can run migrations
RUN mkdir -p  /temp
COPY . /temp
RUN pip3 install --no-cache-dir -r /temp/requirements.txt



EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
