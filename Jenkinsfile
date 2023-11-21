pipeline {
    agent any

    stages {
        stage("CI job"){
            steps{
                sh 'ansible-playbook -i inventory /opt/docker/ci-playbook.yml'
            }
            
        }
    }
}