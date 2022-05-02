### configuration

* install vscode prettier extension

### before publish
* to see errors or warnings:
```bash
npm run lint
```
* to see coverage:
```bash
npm run cov
```
* to see vulnerabilities:
```bash
npm audit
```

### packages included
* joi
* cors
* helmet
* dotenv
* typeorm
* mongodb (remove mongodb if not needed)
* postgress (remove pg if not needed)
* nodemon
* jwt
* webpack

### features
* test
* coverage
* lint
* docker
* typescript


### docker postgres
```bash
docker run --name some-postgres -p 5432:5432 -e POSTGRES_PASSWORD=test -d postgres
```


### docker postgres
```bash
docker run --name some-mongo -d mongo
```
