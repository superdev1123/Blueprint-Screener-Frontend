**BLUEPRINT HEALTH QUESTIONNAIRE APP**

Composer: Xavier Ritch
LinkedIn: https://www.linkedin.com/in/xavier-ritch-254238145/
Vercel Deployment: https://blueprint-screener-frontend.vercel.app/


## The Problem: 
Clinicians need a tool to aide in administering diagnostic screeners to patients in hassle free way.

## The Solution: 
The Blueprint Diagnostic Service (BDS) App provides a seamless path for patients to quickly and efficiently complete diagnostic exams and for healthcare providers to easily retrieve the results.

## Architecture
The application has a dedicated backend built with Node/Express offering a simple and easy use API that can also easily scale if and when the scope of the application grows. The frontend was built with React, offering a flexible and modular component structure. 

The frontend application is currently deployed to Vercel (view link above), which is also a viable solution in real world production applications, however AWS is another potential path if high levels of infrastructure customization and integration with other AWS services is a top priority. The backend server is also deployed to Vercel, however in real world production I would opt for an AWS EC2 instance for its superior auto-scaling, load balancing, and monitoring. 


THE SERVER MUST BE RUNNING LOCALLY IN ORDER FOR THE APPLICATION TO FUNCTION


## BACKEND FOLDER (Blueprint-Screener-Backend Folder)
Technology: Node.js, Express
Deployment: Vercel

To Start: cd into backend folder and npm run dev for nodemon local server

The entry point to the application can be found in the server.ts file. 

Routes Folder 
- ScreenerRoutes.ts file fetches the screener questionnaire via its corresponding controller function
- ScoreRoutes.ts file requests the results of the user selections from the submitted questionnaire

Controllers Folder
- ScoreController.ts file gets the answers data from the questionnaire, loops over the data, and returns results in the desired format
- ScreenerController.ts file simulates fetching the questionnaire data from a database, although it is stored locally 

Mockup Folder
- Screener.ts file contains the questionnaire data 
- DomainMapping.ts file contains the mapping of question IDs to their respective domains. This mapping is used to calculate scores for each domain based on the answers provided by the user


## FRONTEND FOLDER (Blueprint-Screener-Frontend Folder)
Technology: React, TailwindCSS
Deployment: Vercel

To Start: cd into frontend folder and npm run dev for development server

API Folder
- Screener.ts contains a function to fetch the questionnaire data from the backend server and another function to submit the answers 

Components Folder
- Questionnaire Component contains the view and logic of the questionnaire form
- Result Component contains the view of the questionnaire results


## Security
In a production app i would take several measures to make sure that this potential sensitive patient information remains private and secure. Proper authentication would be required to access the form, HTTPS security would be enforced on all API endpoints, data may need to be encrypted in the database, rate limiting would need to be implemented via an API Gateway, amongst other potential measures.


## TROUBLESHOOTING
A logging system such as Winston would be helpful to keep track of errors and application warnings. Datadog could also be helpful for keeping track of unusual traffic, spikes in error rates, and unauthorized access, all in real time. Even an internal metrics dashboard could serve as a useful tool for keeping up with all of the above in a centralized way. 

## TRADE OFFS
There were just a few tradeoff while building this app:
- Storing the data locally instead of within an actual database was a trade i felt made sense for the purpose of this exercise. 
- As far as user experience is concerned, once the questionnaire is complete and the results are displayed, you will need to refresh the page to start it again. With more time dedicated to this, we could store the answers data in a state management library such as redux or zustand, etc, and reset the data from there in order to reset the form, instead of the storing the answers data locally in the state of the Questionnaire component. 


This challenge was fun. I love using the MERN stack to build applications. Thanks for your consideration!