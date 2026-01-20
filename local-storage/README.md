# Local storage store the value in String
# four method  --->
# localStorage.clear()  --> clear all the localStorage
# localStorage.setItem()  --> takes the two input like ("user","value");
# localStorage.getItem()  --> ("user");
# localStorage.removeItem()  -- > remove he single item


If we use a array of object or simply a object
# const user={name:"Arvind"}  --> it converted toatlly into string
# "name":"Arvind"   by JSON.Stringyfy method
# and save into the string format if we have to retrive it then again convert into the object --> 
# JSON.parse(user);