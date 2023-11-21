pipeline {
    agent any

    stages {
        stage("CI job"){
            steps{
                sh 'ansible-playbook /opt/docker/ci-playbook.yaml'
            }
            
        }
    }
}