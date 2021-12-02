## The Mission
we have been part of becode for a bit and thus made a lot of friends in the process. We will make an Angular application on which my friends can fill in their data so we can have it in your node.js friendlist api.

# Basic Angular Form Challenge: BeCode

- Repository: `basic-angular-form`
- Type of Challenge: `Learning`
- Duration: `3 days`
- Solo challenge

## Learning Objectives 
After this learning challenge, it's expected to understand and have the ability to use the following. 
- Use the angular cli commands. -self-reminder: cli stands for command line interface-
- Have a basic understanding of typescript.  initial search provides following insight: Typescript is a strict syntactical superset of JavaScript. 
- Generate components and services in angular. I expect this to become apparent while doing the exercise. 
- Configure a provided node API. I expect this to become apparent while doing the exercise. 
- Make a basic angular form. this will be in a following step. 
- Send http requests from an angular app to a node server. this will be in a following step. 

### Strategy
After reading the learning objectives I'm going to start by reading up on the basic CLI & typescript/JS differences. 
The other four objectives feel more practical and I feel that looking at previous exercises we'll get to understand all the terminoligy while doing the exercise. 
Will decide on next strategy step after lunch. 
Lunch is done. Working on the 3rd bullet of the 11th step. I got stuck here before lunch, i'll separate all different elements of the step, search for definitions of the words that don't entirely click for me and try to design a solution that way. 
I've set myself a checklist on things i need to understand to finish 11.3. this worked pretty well. 
now i'm stuck on the validation visualisation in step 12. i'm going to review all previous steps to start the day and refresh my memory of what i've already completed and double-check that i haven't forgotten anything. 
after lunch i'm at step 15, troubleshot some errors that i couldn't figure out myself with some help from Tim. 
currently struggling understanding how to get observer - subscribe working correctly. 


### Log/self-reflection
29/11/21 12:27  Spent the better part of the morning on the different steps (currently step 1-11 of 19 complete) and got about halfway through the written steps list, spent some time figuring out the syntax for ngFor and where it should be placed.  
there is progress but i want to get mostly done today so i can start working on the extras. 
29/11/21 14:09 Reminder from Tim to entire class, it's more important to ask the right questions and to get to a solution than it is to be stubborn and not ask help on how to approach working on one/ searching for one. 
What are my questions for 11.3: what will i do to check if i full understand? 
1. The component class, where is it? should be component.ts 
2. I need to instantiate the FriendModel there, what structure does the friendmodel need? in component.ts instantiate following structure "const friendModel = new Friend (necessary values with commas, hardcoded null for now)
3. the friendmodel in instatiated through the friend class, where does that need to happen? in the __component class__ or in the friend class itself?  it was the component class found in component.ts
4. I'll need to import the friend class, but where? component class? Friendclass? elsewhere? in the component class, this i managed before lunch apperantly, looks like the others that angular does but with my own files. in this case "import { Friend } from './friend';"
give no more errors, appears to have worked. moving on to 11.4
few minutes later step 11 completed. 
step 12: goal is checking for invalidity of inputs:
got stuck for a few hours on #inputName="ngModel" while it had to be the #firstname="ngModel" and similar for other input fields. 
day 2: step 12 stuck for now, the input field keep giving the invalid visual while being valid inputs. something with my regexes is not working great, also, when at any point one of the inputs isn't valid, that means that all the input field look invalid, which i'm not exactly sure of why that happens, trying to figure that out now. figured out where the red was coming from, renamed my input fields all to data previously to only make one class have to change. but that made everything flow over in each other. talking to stefan allowed me some optimisation of placeholders instead of prefilled values and using type= "email" in input instead of using regex which for now feels sufficient. 
finished step 12: field validation now working
finised step 13: form validation check for buttonclick allowed also working. 
finished step 14: added some code but we'll see if it works in the next step. So not everything was working and it was giving weird errors. something with an errorhandler was killing my page. 
step 15: pending, last thing keeps eluding me, need to review documentation for obverve-subscribe and implement correctly. 
going to review the entirety of 15 and break it down step by step. 
Day 3: step 16 is causing difficulty. came down to not having the right url when i was trying to write to and some other syntax mistakes; figured it out but took a long time. there's 4 more steps and 6 more hours today. i'll need to step it up to finish in time. 
back from lunch,  at step 17-18 trying to get the last basic functionality elements working. 
YES i got it working, finally. basic functionality done! woop. 

### Features - checklist :heavy_check_mark:
-finished elements will be checked off-
>__Must have features__
>All the fields you need to put the data of your friends in your friendlist. These are: :heavy_check_mark:
>- First name :heavy_check_mark:
>- Last name :heavy_check_mark:
>- Email :heavy_check_mark: 
>- Phone number :heavy_check_mark: 
>- Favourite language (html, css, js, php, ...), this is a select with options, using angular syntax :heavy_check_mark:

>Error reporting, give some visual feedback to the user if they put something wrong in the inputs.  :heavy_check_mark:  

>Form validation :heavy_check_mark: 

>A Friend list, do this by sending a GET request to your local node server.  :heavy_check_mark:

>A POST request to add a friend to your friend list. :heavy_check_mark:


__Nice-to-have features__
>- Make sure the email and phone number are actually emails and phone numbers.
>- Make it as easy as possible for a user to add a phone number, following phone numbers could all be valid:
>    - +324888 88888
>    - 04 88 88 88 88
>    - 0      4 8     8 8888 88
>    - It's okay to only take Belgian phone numbers into account.
>- Make seperate pages for adding a friend and your friend list.
>- Make a "best friend" list by adding a favourite checkbox to the form
>    - You can also make a seperate page for your best friends
>    - You'll have to make a new app.GET function in your node server
>- Add extra fields, whatever you like. Examples:
>    - Profile picture
>    - Signature move
>    - Favourite meme
>    - ...
>- Think of your own new app.GET function, the possibilities are endless. Examples:
>    - A list of all the people that like php
>    - An amount of random friends from your list
>    - A list of all the people between the age of 30 and 40
>    - ...

What we might need to mention is that for this exercise as it's our first Angular app we're making that we received great documentation and a step-by step for the initial use of angular which you can review in the initial challenge repo [__here__](https://github.com/becodeorg/ANT-Lamarr-5.34/tree/fffc56a288a6d83f400d775589f910472fa12220/2.The-Hill/angular/intro)
for this README i learned 
':heavy_check_mark:' 
and syntax for adding hyperlinks being 
[__linkname__](linkurl)
