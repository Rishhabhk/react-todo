This is the Task management application built using React + Vite.
To setup and run the project, clone the repository and install node modules.
Then use npm run dev command to run the project. If its not working try using npm start.

# I have also deployed this project on Netlify
Link - https://taskmanagement-by-rishabhk.netlify.app

# Video Explanation link of drive 
https://drive.google.com/file/d/1nAID8_900OOGBIKpSknqgBUAD0NPstML/view?usp=drive_link

# Structure
When a user comes to the web app, it will show that no task is added and a add task button.
On clicking on the add task button, it will redirect to the add task page. In this page user is asked to fill the title, description and priority of the task.
After adding the task the user is redirected to the task list page, in which tasks will be displayed. 
The tasks will be sorted as per the priority. The task with high priority will be displayed on the top of the list in the task list page.

In the task list page, each task has a checkbox to mark the status of the task (completed or not), delete button to delete the task and a edit button. On clicking on the Edit button user will be redirected to the edit task page, where user can edit the title, description, priority of the task.

All this changes will be saved to local storage, there is no loss of data when the page is refreshed at any instance of time.
I have used MUI to make the UI more comfortable and attractive to the user.

## This is the first view user will get.
![image](https://github.com/Rishhabhk/task-management/assets/117934626/624cff8f-416d-4e3d-ad89-428474e20a3e)

## This is the task form, will be displayed when user click on Add task button
![image](https://github.com/Rishhabhk/task-management/assets/117934626/dafd4fe9-1504-4cb5-8d5e-7755a9ebb679)

## After adding tasks it will be shown on the task list page
![image](https://github.com/Rishhabhk/task-management/assets/117934626/6fe6d327-cff3-47ad-a9ac-c9bf846a2798)

## User can mark the as completed by clicking on the checkbox
![image](https://github.com/Rishhabhk/task-management/assets/117934626/1bcf6520-4bd4-47a8-8035-2e2637efdbab)

## Suppose user clicked on the edit icon on the Python task, user will be redirected to edit task page where user will be shown this page, the form fields initially will contain the old data. User can overwrite them.
![image](https://github.com/Rishhabhk/task-management/assets/117934626/af639e13-8d0a-4ad1-8ffc-e0cbb6659a39)

## After editing the task ,the task will be marked as incompleted and it will be shown like this. Here I have edited the title from python to python edited, changed the description also, and changed the priority from high to medium. You can see that the task is now at the end.
![image](https://github.com/Rishhabhk/task-management/assets/117934626/7d320c7c-456b-4caf-84ec-571c878cfdb2)

## On clicking on the clear all button in task list page, all the tasks will be deleted and a message will be shown that no task added.
![image](https://github.com/Rishhabhk/task-management/assets/117934626/c2d4ffc6-d056-44c9-abe5-fcd2f1c617af)

# Test 
I have used Jest library for testing.
I have created three separate files in tests folder for each component(AddTask, EditTask, TaskList).
All the tests are passing.


## drive link for the first question
https://drive.google.com/file/d/1McK_Zcjah9-Nku6wIZRatfgVNpzq0Ucb/view?usp=drive_link





