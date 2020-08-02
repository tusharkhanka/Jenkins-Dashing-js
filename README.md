
# Jenkins Job Dashing widget

Author: [Tushar Khanka](https://github.com/tusharkhanka) · Blog: [http://blog.kj187.de](http://blog.kj187.de)

[Dashing-JS](https://github.com/fabiocaseri/dashing-js) is a NodeJS port of [Dashing](http://dashing.io/), an Sinatra based framework that lets you build beautiful dashboards.

The [Jenkins](https://jenkins-ci.org/) Job widget is a generic widget for Jenkins jobs which provides a highly visible view of the build status and build progress of selected Jenkins jobs. Via configuration it is possible to add multiple widgets for different Jenkins jobs.


[Dashing-JS](https://github.com/fabiocaseri/dashing-js)
```ssh
$ npm install -g dashing-js
```

Jenkins Job Widget dependencies
```shell
$ npm install jenkins-api
$ npm install cron
$ npm install moment
$ npm install request
$ npm install memory-cache
```

## Installation
### Requirement
Node 10.x npm 6.x

```shell
$ dashing-js install https://github.com/kj187/dashing-jenkins_job/archive/master.zip
``` 
