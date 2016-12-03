#!/bin/bash
if [ "$1" == "nginx" ]; then
	chown -R www-data:www-data /var/www/angular/*
	/usr/sbin/nginx
fi