node{
    stage('build')
    {
        sh 'pwd'
        sh 'ls -la'
        echo 'buidling ....'
        nodejs('nodejs')
        {
            sh 'npm i'
        }
    }
    stage('deploy')
    {
        nodejs('nodejs')
        {
            sh 'node app.js'
        }
    }
}