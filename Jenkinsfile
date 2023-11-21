pipeline {
    agent any

    stages {
        stage("CI job"){
            steps{
                ansible-playbook /opt/docker/ci-playbook.yaml
            }
            
        }
    }
}