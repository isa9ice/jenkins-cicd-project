pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'isa9ice/jenkins-cicd-project'
    }

    stages {

        stage('Source Code Checkout') {
            steps {
                echo 'Checking out code from GitHub...'
                checkout scm
            }
        }

        stage('Build Execution') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }

        stage('Automated Testing') {
            steps {
                echo 'Running tests...'
                bat 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t %DOCKER_IMAGE%:%BUILD_NUMBER% .'
                bat 'docker tag %DOCKER_IMAGE%:%BUILD_NUMBER% %DOCKER_IMAGE%:latest'
            }
        }

        stage('Docker Push') {
            steps {
                echo 'Logging in to Docker Hub and pushing image...'

                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-creds',
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )
                ]) {
                    bat 'docker login -u %DOCKER_USERNAME% -p %DOCKER_PASSWORD%'
                    bat 'docker push %DOCKER_IMAGE%:%BUILD_NUMBER%'
                    bat 'docker push %DOCKER_IMAGE%:latest'
                }
            }
        }

        stage('Artifact/Deployment') {
            steps {
                echo 'Creating build artifact...'

                bat 'if not exist artifacts mkdir artifacts'
                bat 'copy package.json artifacts\\package.json'

                archiveArtifacts artifacts: 'artifacts/**',
                                 fingerprint: true

                echo 'Artifact archived successfully.'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully.'
        }

        failure {
            echo 'Pipeline FAILED. Check the console log for details.'
        }

        always {
            echo 'Pipeline execution finished.'
        }
    }
}
