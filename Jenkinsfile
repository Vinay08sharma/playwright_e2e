pipeline {
    agent any 
    options {
        timeout(time:1, unit: 'HOURS')
    }
    stages {
        stage('Running Test Cases') {
           steps{
                echo "-------------- RUNNING TEST -----------"
                cleanWs()
                sh "runTest.sh"
                echo "RUNNING TESTS"
            }
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
