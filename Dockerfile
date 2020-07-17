FROM node:12.18.2-alpine3.9
LABEL version="1.0" description="这是一个nextjs服务" maintainer="LiuYonghui"

COPY . /app
WORKDIR /app
EXPOSE 3002
RUN yarn config set registry https://r.cnpmjs.org/ && yarn && yarn build
CMD ["yarn", "start"]