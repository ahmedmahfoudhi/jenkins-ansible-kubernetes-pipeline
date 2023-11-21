pipeline {
    agent any

    stages {
        stage("CI job"){
            steps{
                sh 'ansible-playbook -i inventory playbook-docker.yml'
            }
            
        }
    }
}