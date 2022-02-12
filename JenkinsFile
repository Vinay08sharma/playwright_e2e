pipeline {
    agent any 
    options {
        timeout(time:1, unit: 'HOURS')
    }
    stages {
        stage('Running Test Cases') {
            steps{
               npm i
               
               npm run test
               
            }
            echo "Running Test Cases"
        }
    }
    post {
        success {
            echo 'Build Passed'
        }
        failure {
            echo 'Build Failed'
        }
    }
}
