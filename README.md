# jenkins-cicd-project

## CI/CD Pipeline Project for DevOps Course

### Project Overview
This project demonstrates a complete CI/CD pipeline using Jenkins, implementing the "Pipeline-as-Code" approach with a Jenkinsfile.

### Jenkins Setup
- Installation: Jenkins 2.580.1 installed on Windows 10
- Java Version: OpenJDK Temurin 25.0.4.1
- Port: 8080 (localhost)
- Service: Running as Windows LocalSystem service

### Plugins Used
- Git Plugin: For source code management and repository integration
- Pipeline Plugin: For defining pipelines as code using Jenkinsfile
- GitHub Integration: For webhook triggers and repository connectivity

### Pipeline Stages Explanation

1. Source Code Checkout: Pulls the latest code from the GitHub repository using `checkout scm`
2. Build Execution: Installs dependencies using `npm install` to prepare the application
3. Automated Testing: Runs unit tests using `npm test` to verify code stability
4. Artifact/Deployment: Packages the application and deploys to test environment
5. Post Actions: Logs pipeline completion status for troubleshooting

### Repository Structure
- `Jenkinsfile` - Pipeline definition (Pipeline-as-Code)
- `package.json` - Node.js project configuration with test scripts
- `index.js` - Simple application code
- `README.md` - This documentation file

### How to Run
1. Jenkins automatically triggers builds via GitHub webhooks
2. Manual builds can be triggered via "Build Now" in Jenkins UI
3. Pipeline executes all stages sequentially


# Screenshots
Pipeline Stages <img width="1600" height="900" alt="Screenshot (4257)" src="https://github.com/user-attachments/assets/9fd0ee81-228c-45a5-8f6e-58ed63674f4b" />
Console Output <img width="1600" height="900" alt="Screenshot (4258)" src="https://github.com/user-attachments/assets/0e62ec52-af52-49a7-9e56-921b38c14e78" />
Build Status <img width="1600" height="900" alt="Screenshot (4259)" src="https://github.com/user-attachments/assets/bad57e44-ffcc-4114-a006-6230fcf3033e" />

Isah Abba Namnai
