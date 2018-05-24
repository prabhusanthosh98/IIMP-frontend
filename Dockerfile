FROM node:9.11-alpine

MAINTAINER Santhosh Prabhu

ADD ./ /opt/app-root/src/

WORKDIR /opt/app-root/src

RUN /opt/app-root/src/build.sh

EXPOSE 8080

CMD ["/opt/app-root/src/app.sh"]
