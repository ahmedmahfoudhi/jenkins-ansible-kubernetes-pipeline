pipeline {
    agent any

    stages {
        stage("CI job"){
            steps{
                ansiblePlaybook playbook: '/opt/docker/ci-playbook.yaml'
            }
            
        }
    }
}