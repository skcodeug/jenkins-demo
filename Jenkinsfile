pipeline {
  agent {
    node {
      label 'Node14'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'sh \'npm install\''
      }
    }

    stage('Test') {
      steps {
        sh 'sh \'npm test\''
      }
    }

    stage('Deploy') {
      steps {
        echo 'echo \'Deploying to .. .. ..\''
      }
    }

  }
  environment {
    CI = 'true'
  }
}