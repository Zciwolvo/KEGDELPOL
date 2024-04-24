FROM python:3.8-slim

WORKDIR /python

COPY requirements.txt ./
RUN pip install -r requirements.txt

COPY kegdelpol/package*.json react_app/

RUN npm install --prefix react_app

COPY react_app .
RUN npm run build --prefix react_app

COPY . .

EXPOSE 5000

CMD ["python", "app.py"]