# Lofty CMS

I need to develop many websites projects at T4R SYSTEMS(http://www.t4r.com.br/), but them have no platform for develop administration area and don't like use wordpress or similars, because we work with especific situations and clients. So I created this project for help our work, including many features for help like that autentication, uploads, i18n, etc.

## Frontend

 I am using AngularJS(https://angularjs.org/), Material Design(https://material.angularjs.org/#/) and Polymer(https://www.polymer-project.org/) for develop all features in frontend.

## Backend

I am using Laravel 5(http://laravel.com/) for backend.

## Getting started

### Dependencies

To run this project you need to have:

* [Composer](https://getcomposer.org/download/)
 
* [Grunt](http://gruntjs.com/)

        $ npm install -g grunt-cli

### Step 1 - clone

* Clone the project

        $ git clone https://github.com/brunogonncalves/lofty-cms.git YOU-PROJECT-NAME

* Enter project folder

        $ cd YOUR-PROJECT-NAME


### Step 2 - Setup Backend

```bash
$ composer install
```

```bash
$ cp .env.example .env
```
enter with your server credentials in `.env`.

execute migrations for create tables
```bash
$ php artisan migrate
```

execute seeds for populate your tables
```bash
$ php artisan db:seed
```

### Step 3 - Setup Frontend

access frontend folder
```bash
$ cd public/lofty-front
```

install npm packages
```bash
$ npm install
```

download bower packages
```bash
$ bower install
```

build frontend files
```bash
$ grunt build
```

If everything goes OK, you can now run the project!

## License
Licensed under the MIT license (see MIT-LICENSE file)