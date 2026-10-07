## Build Trigger

The Jenkins pipeline can be triggered manually using **Build Now** in the Jenkins interface.

Jenkins can also be configured to poll the GitHub repository for changes using **Poll SCM**, allowing new commits to trigger the pipeline automatically.

---

# Evidence

The project was successfully tested with Jenkins Build #6.

Evidence includes:

- Successful GitHub source checkout
- Successful dependency installation
- Successful automated testing
- Successful Docker image build
- Successful Docker Hub authentication
- Successful Docker image push
- Successful artifact archiving
- Jenkins pipeline completed with `SUCCESS`
- Docker container successfully running on port 3000

The Dockerized application was verified at:

`http://localhost:3000`

---

## CI/CD Verification

Jenkins Poll SCM is configured to automatically detect changes in the GitHub repository.
