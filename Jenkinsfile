pipeline {
    agent {
        docker {
            image 'node:14.15'
        }
    }
    environment {
        PROJECT_NAME = 'sdv-save-editor'
        DOCKER_CONTAINER_NAME = 'SDVSaveEditor'
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
                allOf {
                    branch 'tfitz/farmobject'
                    expression {
                        currentBuild.currentResult == 'SUCCESS'
                    }
                }
            }
            steps {
                dir("${env.WORKSPACE}/api") {
                    sh 'npm run build'
                }
                
                sh "docker build . -f Dockerfile -t ${env.PROJECT_NAME}"
                
            }
        }
        stage('Deploy') {
            when {
                allOf {
                    branch 'tfitz/farmobject'
                    expression {
                        currentBuild.currentResult == 'SUCCESS'
                    }
                }
            }
            steps {
                sh "docker restart ${env.DOCKER_CONTAINER_NAME}"
            }
        }
    }
}
