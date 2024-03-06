---
title: "Import Users from Entra ID"
description: ""
lead: ""
date: 2023-09-20T13:34:58+03:30
lastmod: 2023-09-20T13:34:58+03:30
draft: false
images: []
menu:
  docs:
    parent: "add_or_import_users"
weight: 31300
toc: true
---

Steps for importing users from Entra ID:

1. Access Security Key Management: Click Users under Security Key Management section of admin panel to manage users.  
2. Initiate Import: Click on the "Import Users" button.  
3. Select Import Source: Choose the option "Import from Entra ID". This will open a wizard for importing users from Entra ID.  
4. Authorize Access: You might be prompted to grant permission for the application to access your Entra ID. Follow the prompts to provide the necessary permissions.  
5. Select Entra ID Groups: Inside the wizard, there will be a dropdown menu where you can select Entra ID groups. Choose the groups from which you want to import users. The default is All AD groups.  
6. Sync with existing users: If you previously imported users from Entra ID, you might need to check this box. If you do that, once you import users from Entra ID, users that already exist in your workspace with a matching email address will be updated by the syncing process  
7. Confirm Information: Review the selected Entra ID groups and the information that will be imported. This is presented in a summary format for your confirmation.  
8. Initiate Import: Once you're satisfied with the selected groups and information, click on the "Import" button to start the import process.  
9. Import Progress: Importing users from the selected Entra ID groups will start and the process might take some time, depending on the number of users.  
10. Completion: Once the import process is finished, you'll receive a notification of the imported users. This could include details about any errors or issues encountered during the import.  

> Ensure that you have the necessary permissions to access Entra ID and that you select the appropriate Entra ID groups from which to import users.
