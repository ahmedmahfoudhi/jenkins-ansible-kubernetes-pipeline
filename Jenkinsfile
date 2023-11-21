pipeline {
    agent any

    stages {
        stage("CI job"){
            steps{
                sh 'ansible-playbook -e @secret-vars.yaml /opt/docker/ci-playbook.yaml'
            }
            
        }
    }
}