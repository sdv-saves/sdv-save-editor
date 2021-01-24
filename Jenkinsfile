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
                    sh 'npm test -- --ci --testResultsProcessor=jest-junit'
                }
            }
            post {
                always {
                    dir ("${env.WORKSPACE}/api") {
                        junit 'junit.xml'
                          step([
                            $class: 'CloverPublisher',
                            cloverReportDir: 'coverage',
                            cloverReportFileName: 'clover.xml',
                            healthyTarget: [methodCoverage: 70, conditionalCoverage: 80, statementCoverage: 80], // optional, default is: method=70, conditional=80, statement=80
                            unhealthyTarget: [methodCoverage: 50, conditionalCoverage: 50, statementCoverage: 50], // optional, default is none
                            failingTarget: [methodCoverage: 0, conditionalCoverage: 0, statementCoverage: 0]     // optional, default is none
                        ])
                    }
                }
            }
        }
        stage('Package') {
            when {
                allOf {
                    branch 'master'
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
                    branch 'master'
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
