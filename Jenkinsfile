pipeline {
    agent any 
    options {
        timeout(time:1, unit: 'HOURS')
    }
    stages {
        stage('Running Test Cases') {
            steps{
               sh runTest.sh
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
