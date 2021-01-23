pipeline {
    agent {
        docker {
            image 'node:14.15'
        }
    }
    stages {
        stage('Build') {
            steps {
                dir("${env.WORKSPACE}/api") {
                    sh 'npm install';
                }
            }
        }
        stage('Test') {
            steps {
                dir("${env.WORKSPACE}/api") {
                    sh 'npm test';
                }
            }
        }
    }
}
