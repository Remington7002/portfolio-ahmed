
pipeline {
    agent any

  environment {
    KATALON_HOME = 'C:\\KatalonWorkspace\\KRE'
    PROJECT_FILE = 'portfolio-ahmed.prj'
    TEST_SUITE = 'Test Suites/portfoliotest'
}
    stages {
        stage('Check Tools') {
            steps {
                bat '''
                    echo ===== USER =====
                    whoami

                    echo ===== JAVA =====
                    java -version

                    echo ===== GIT =====
                    git --version

                    if not exist "%KATALON_HOME%\\katalonc.exe" (
                        echo ERROR: Katalon executable not found.
                        exit /b 1
                    )
                    echo Katalon executable found.
                '''
            }
        }

       stage('Checkout GitHub') {
    steps {
        deleteDir()
        git branch: 'main',
            credentialsId: 'github-credentials',
            url: 'https://github.com/Remington7002/portfolio-ahmed.git'

        bat 'git rev-parse --short HEAD'
        bat 'git ls-tree -r --name-only HEAD'
    }
}
        stage('Validate Project') {
            steps {
                bat '''
                    echo Workspace: %WORKSPACE%
                    dir /s /b "%WORKSPACE%\\*.prj"

                    if not exist "%WORKSPACE%\\%PROJECT_FILE%" (
                        echo ERROR: Katalon project file not found.
                        exit /b 1
                    )

                    echo Project file found.
                '''
            }
        }

        stage('Run Katalon Tests') {
            steps {
                withCredentials([
                    string(
                        credentialsId: 'katalon-api-key',
                        variable: 'KATALON_API_KEY'
                    )
                ]) {
                    bat '''
                        call "%KATALON_HOME%\\katalonc.exe" -noSplash -runMode=console "-projectPath=%WORKSPACE%\\%PROJECT_FILE%" "-testSuitePath=%TEST_SUITE%" "-browserType=Edge Chromium" "-apiKey=%KATALON_API_KEY%" -retry=0 -statusDelay=15 "-config -webui.autoUpdateDrivers=true"

                        if errorlevel 1 (
                            echo ERROR: Katalon execution failed.
                            exit /b 1
                        )
                    '''
                }
            }
        }
    }

    post {
        always {
            echo 'Katalon execution finished. Collecting reports.'

            archiveArtifacts(
                artifacts: '**/Reports/**/*',
                allowEmptyArchive: true,
                fingerprint: true
            )
        }

        success {
            echo 'KATALON TEST EXECUTION SUCCEEDED'
        }

        failure {
            echo 'KATALON EXECUTION FAILED. CHECK CONSOLE OUTPUT.'
        }
    }
}
