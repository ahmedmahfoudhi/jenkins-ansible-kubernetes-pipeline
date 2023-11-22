pipeline {
    agent any

    stages {
        stage("CI job"){
            steps {
                sshagent(['ssh-credentials-id']) {
                    sh 'ansible-playbook -e @/opt/docker/secret-vars.yaml /opt/docker/ci-playbook.yaml'
                }
            }
        }
        stage("CD job"){
            steps{
                sh 'ansible-playbook /opt/docker/cd-playbook.yaml'
            }
        }
    }
}