Problem statement:
    People wants to buy dresses.They likes to purchase directly from tailors and want to contact tailors.People dont know about tailor's specialization(either they are good at making curtains or making silks).Some people want to import silk from other country or other states.They dont know which tailor they want to contact for the specific task(ie.,curtains,mens wear,women wear,etc,..).Some people have desire to visit the tailor directly but sometimes people find it difficult to visit.
    
Proposed Statement:
    Create a software to buy and sell products.People play a role as users and tailor plays a role as maker.In this software,users should post their jobs(ie.,what they want to buy and what the maker should do),they choose the clothing material and post asa job for maker.Maker should accept the jobs and make their product and sell them to the users.
    Users can save their time(They dont have to visit the shops which is in another state or country),they just choose a tailor and post a job and make an order.
    
 Tech Stack Used:
      -React.js as frontend and axios as connection library for API.
      -Node.js as backend.
      -MSSQL as database.
      
      
      
      
 Explaination:

 FrontEnd: 
 
 First page is the signin page.If the user is not registered,he/she should register in the signup page.After registration,it will redirect to the signin page.If the user is not a maker(tailor),it will redirect to user page.
In user's page,we have navbar and maker's list.In this page,we have postajob(ie.,if the user wants to post a new job to the tailor,he can create a job by using postajob),makers(which contains all the makers list) and a logout.
In maker's page,we have navbar and user's list.In this page,we have job requested(ie.,all the jobs posted by the user are added to the job requested page),adddesign(which contains all the designs) and a logout.To fetch the data from the backend to the frontend,we use axios as the the connection library.In axios,we use async and await keywords to manage the request and response.


BackEnd:
 Firstofall,we have to connect with the sql server and choose the app is run on which port.We use express.js for routing purpose.We have three controllers(auth.js,postajob.js and addmaker.js)
 In auth.js,we have to create a request to insert user registration data into the database and another request to validate the signin data and redirect to the respective roles.
 In postajob.js,we have to create a request to insert user postajob data into the database.In addmaker.js,we have to create a request to insert maker's data into the database.
 
 
      
  OUTPUT:
      
  ![signin](https://user-images.githubusercontent.com/74101710/235347974-760e2351-e413-456d-9f8c-9d877c8f264a.png)
  
  
  
  
  
  
  ![signup](https://user-images.githubusercontent.com/74101710/235349679-7e618f83-1f3a-485f-be48-bdc310e4ffc7.png)






  ![userpage](https://user-images.githubusercontent.com/74101710/235349698-b2073b87-2d29-48cf-a747-93f070cf130b.png)





![postajob](https://user-images.githubusercontent.com/74101710/235349704-f395aa3d-8c37-4cc4-8c12-a6e653c2bbe7.png)



  
  
  ![makerpage](https://user-images.githubusercontent.com/74101710/235349712-3295463f-9bc3-4d5d-9030-4cb1bf3ecd98.png)

  
  
  
