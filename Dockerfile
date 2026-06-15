FROM php:8.3-apache

ENV PORT=10000

WORKDIR /var/www/html

COPY docker/apache/ports.conf /etc/apache2/ports.conf
COPY docker/apache/000-default.conf /etc/apache2/sites-available/000-default.conf

COPY . /var/www/html/

RUN a2enmod rewrite headers \
    && rm -rf /var/www/html/docker \
    && find /var/www/html -type d -exec chmod 755 {} \; \
    && find /var/www/html -type f -exec chmod 644 {} \; \
    && chown -R www-data:www-data /var/www/html

EXPOSE 10000

CMD ["apache2-foreground"]
