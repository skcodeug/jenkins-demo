pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'sh \'npm install\''
      }
    }

  }
  environment {
    CI = 'true'
  }
}