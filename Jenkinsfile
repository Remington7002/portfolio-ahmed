
pipeline {
    agent any

    environment {
        KATALON_HOME = 'C:\\KatalonWorkspace\\KRE'
        PROJECT_FILE = 'portfolio-ahmed.prj'
        TEST_SUITE = 'Test Suites/TESTSUIT'
        GITHUB_URL = 'https://github.com/Remington7002/Katalon_Automation_Testing.git'
    }

    stages {
        stage('Check Tools') {
            steps {
                bat '''
                    whoami
                    java -version
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
                git branch: 'main',
                    url: "${GITHUB_URL}",
                    credentialsId: 'github-credentials'
            }
        }

        stage('Validate Project') {
            steps {
                bat '''
                    if not exist "%WORKSPACE%\\%PROJECT_FILE%" (
                        echo ERROR: Project file not found.
                        dir /s /b "%WORKSPACE%\\*.prj"
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
                        "%KATALON_HOME%\\katalonc.exe" ^
                        -noSplash ^
                        -runMode=console ^
                        -projectPath="%WORKSPACE%\\%PROJECT_FILE%" ^
                        -testSuitePath="%TEST_SUITE%" ^
                        -browserType="Edge Chromium" ^
                        -apiKey="%KATALON_API_KEY%" ^
                        -retry=0

                        if errorlevel 1 exit /b 1
                    '''
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts(
                artifacts: '**/Reports/**/*',
                allowEmptyArchive: true
            )
        }
    }
}
