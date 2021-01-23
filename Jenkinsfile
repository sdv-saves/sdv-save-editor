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
                    sh 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
                dir("${env.WORKSPACE}/api") {
                    sh 'npm test'
                }
            }
        }
        stage('Package') {
            when {
                branch 'tfitz/farmobject'
                all {
                    expression {
                        currentBuild.currentResult == 'SUCCESS'
                    }
                }
            }
            steps {
                dir("${env.WORKSPACE}/api") {
                    sh 'npm run build'
                    sh "docker build . -f Dockerfile -t ${env.JOB_BASE_NAME}"
                }
            }
        }
    }
}
