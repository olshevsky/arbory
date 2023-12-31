# Laravel 10 app with setup Arbory CMS (https://github.com/arbory/arbory)

# Installation

0. Clone repo and cd to project dir:
    - git clone https://github.com/olshevsky/arbory.git
    - cd ./arbory

1. Run:
   - mkdir vendor
   - make sure ./vendor folder has write permissions
   - docker run --rm -u "$(id -u):$(id -g)" -v "$(pwd):/var/www/html" -w /var/www/html laravelsail/php82-composer:latest composer install --ignore-platform-reqs
    
2. Make sure that ./storage folder has write permissions
   
4. Rename .env.example to .env and configure if necessary

5. Run:
    - ./vendor/bin/sail up -d
   
6. Run:
    - docker ps
    - Copy sail-8.2/app {CONTAINER ID}

7. Login into app container: 
    - docker exec -it {CONTAINER ID} /bin/sh

8. Install dependencies, build assets, create storage symlink and run migrations:
    - composer install
    - php artisan migrate
    - php artisan db:seed
    - php artisan arbory:install


9. Urls:
   - App: http://localhost/admin
