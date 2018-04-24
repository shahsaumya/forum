DJ-Lit-Forum
============
Forum Application by DJ Literary Society
-----------------------------------------

A forum web app for the entire college of Dwarkadas J. Sanghvi by a member of the technical co-committee in DJ Literary Society. The forum makes use of different categories for the different departments and threads in each of these categories.

## Technology Stack

Base forum
- [Misago](https://misago-project.org) Forum Framework.
    - Built on top of Django.
    - Postgresql database.
    - React.JS frontend with Bootstrap4 theme.

#### Packages used other than Misago dependencies:
- *pip module*: dj_database_url -> For connecting to S3 12factor database.
- *pip module*: django-storages -> For connecting to S3 storage/ Google Cloud storage.

_____

## Environment variables required.
Refer to .base_env for scaffolding.

#### Production
- `DATABASE_URL` -> Link to Heroku 12f database (production only).
- `DEBUG` -> Django debug more or not. Debug uses localhost Postgresql server.
- `DB_DEBUG` -> Set this to "True" if you want Django in Debug mode as well as you want to access Production server.
- `SECRET_KEY` -> Django secret key.
- `AWS_ACCESS_KEY_ID` -> Google Cloud Storage interoperability mode access key ID.
- `AWS_SECRET_ACCESS_KEY` -> Google Cloud Storage interoperability mode secret access key.

#### Email config
- `EMAIL_ADR` -> The email address to use for sending emails to users.
- `EMAIL_PASSWORD` -> Password of email address. (Can be Google App Password)

## Before run set-up
- Set up a Google Cloud Platform project and enable interoperability mode.
- Check out `settings.py` to see config.

## Run instructions (Test)

1. Install all `requirements.txt` on a Python 3 virtual environment.
2. Make a postgres table named "djforum", with a superuser "djadmin" password "@sanghvi@". Note that DEGUB should be enabled.
3. `python manage.py migrate`.
4. Make a Django superuser `python manage.py createsuperuser`. This is your admin.
5. `manage.py runserver`.

If you wish to access the production database on test server, set `DB_DEBUG` to True.

## Heroku Deploy instructions (Production)

1. Make Heroku app with Heroku:Postgresql database.
2. Set the Production environment variables.
3. `cd` into root of the project and make Heroku app.
4. Push your git commits to Heroku branch.

But wait! That's just the basic of deploying. Here are some important points.
1. You need a Procfile which has small scripts for a few states of the website. The runtime.txt and requirements.txt are included here.
2. You need to ensure you do `manage.py collectstatic` because you're used to Django doing `collectstatic` for you in `runserver`.
3. You need to ensure everything is working in the localhost.
4. Try `heroku local web` to run the app locally first. This makes use of the Procfile.
5. Read up on `.env` file for Heroku!
6. Set the environment variables on Heroku.

OR Use foreman: https://github.com/ddollar/foreman

### NOTE:
Be sure to change forum configs if you're running it for the first time. Found at url /admincp/.






_____



## Developer notes - @vixrant

Below are a few notes that I'm keeping for future reference. You may refer to them.

1. The front-end uses React.js with LESS style sheets which have to be compiled to CSS for some reason.

2. Misago is kinda picky when it comes to customisation. Refer "Frontend" for more information.

3. I've left a few notes around the styling about what changes I've made to the theme. You can CTRL-F for "VIKINOTE" to find them. This will be useful for future maintenance.

4. Misago isn't documented very well. Use the debug toolbar on the development server and dev tools in your browser to figure crap out.

5. SET THE EMAIL! If you do not, the SocketError monsters will come to you! Just use any working email! For Gmail make sure you allow less protected apps.


_____



### Frontend

The `_frontend_` folder is cloned from Misago's source code. 

#### How it's organised:

1. There are LESS files for separate components of the entire website.
2. HTML Templates can be found in the same folder.
3. React.JS scripts are also available for modifications.

#### How to work on these:

- Styling:
    1. `cd _frontend_/`
    2. Install all npm dependencies `npm install`.
    3. Run `gulp watchstyle`.
    4. As you change the styling in the LESS files you'll see them reflect on every refresh.

- Templating:
    1. Copy a template from the `_frontend_/templates/` folder into the main project's `theme/templates/`.
    2. Make your changes and they will be registered on every refresh.

- Other styling:
    + `gulp --tasks` has a bunch of tasks you can use.

- Backend:
    + It's a Django backend! Still pretty flexible.


### Deploying

During the development, I've used Heroku for production development. Django doesn't serve media files and Heroku doesn't allow storing media files on their server. Use a different cloud storage like Amazon S3 for this. Refer to Django docs.


###### Helpful links.
[Deploying.](https://simpleisbetterthancomplex.com/tutorial/2016/08/09/how-to-deploy-django-applications-on-heroku.html)
