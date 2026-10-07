pipeline {
    agent any

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

        stage('Artifact/Deployment') {
            steps {
                echo 'Packaging application...'
                echo 'Deploying to test environment...'
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline finished. Checking logs...'
        }
    }
}
