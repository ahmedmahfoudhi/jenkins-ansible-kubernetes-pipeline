pipeline {
    agent any

    stages {
        stage("CI job"){
            echo "CI job started ..."
            ansible-playbook /opt/docker/ci-playbook.yaml
        }
    }
}