pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t italy-agency:latest .'
            }
        }

        stage('Docker Run Test') {
            steps {
                sh 'docker run -d --name italy-agency-test -p 3000:3000 italy-agency:latest'
                sh 'sleep 5'
                sh 'curl -f http://localhost:3000 || exit 1'
            }
            post {
                always {
                    sh 'docker stop italy-agency-test || true'
                    sh 'docker rm italy-agency-test || true'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline CI/CD Jenkins réussi !'
        }
        failure {
            echo 'Pipeline CI/CD Jenkins échoué.'
        }
    }
}
