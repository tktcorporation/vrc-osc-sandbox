FROM node:16.13.0-buster-slim AS build-env

ENV LC_ALL=C.UTF-8

RUN apt-get update && \
    apt-get install -y \
    curl \
    git \
    sudo


ENV UNAME=docker
ENV GID=1000
ENV UID=1001

RUN groupadd -g $GID -o $UNAME
RUN useradd -m -u $UID -g $GID -G sudo -o -s /bin/bash $UNAME
RUN echo "$UNAME ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers
RUN echo "node ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# RUN npm i -g typescript


# WORKDIR /app

# # COPY package.json package.json
# # COPY yarn.lock yarn.lock

# RUN npm i

# COPY  . .

# CMD [ "/bin/bash", "-c", "npm i && npm run build" ]
