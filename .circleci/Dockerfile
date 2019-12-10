FROM circleci/node

#Install Google Cloud CLI
RUN echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
RUN sudo apt-get install apt-transport-https
RUN curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -
RUN sudo apt-get update && sudo apt-get install google-cloud-sdk

#Install Helm
RUN curl https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 | bash

#Install Lerna
RUN sudo npm install -g lerna 