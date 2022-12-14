---
title: "Security Considerations for Related Threats and Attacks"
description: ""
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: []
menu:
  docs:
    parent: "scrty"
weight: 100
toc: true
---

Security is one of the most important issues in the production lifecycle of services and applications. A long list of security threats and
vulnerabilities must be considered and treated to prevent attackers from hacking applications and services and stopping possible damages that
may cause additional costs for the organization. Given the attacks on most organizations today and the vulnerabilities found everyday by white hat hackers
and security experts, the IDmelon implements methods and security controls to prevent possible damages. We try as much as we can to make it harder for
attackers to breach our borders. In this document we describe what we have done according related standards and best practices for defending the information
and rights of our users and customers to provide them a proper experience of using a secure authentication solution.

## IDmelon Solution based on FIDO2 Phishing Resistant Standard

Passwords are hard to remember, need to be changed frequently and also need resources when reset required. The FIDO2 helps stop the password chaos
and improve the user experience. It uses standard public key cryptography to secure user authentication by encrypting all communications. Private keys
and biometric information if used to authenticate never leave users’ devices, which lessens the chances of discovering them during transmission and makes
authentication processes stronger and more secure.

FIDO2 is built with FIDO Client To Authenticator Protocol (CTAP) and W3C standard WebAuthn which both work together to provide passwordless authentication
experiences for users. These experiences might involve embedded authenticators, like biometrics or PINs or USB devices. WebAuthn defines a standard web API
for platforms and browsers to support FIDO which communicates with CTAP authenticators to provide an interface for creating and managing public key credentials.
CTAP allows the authenticator (part of the user’s computer or smartphone, or an external piece of hardware) to be used as both the first and second factor of
authentication to provide users a passwordless authentication experience.

When a user attempts to access an online service for the first time, they are prompted to register. During registration, a new key pair is generated
that the private key is stored on the device and associated with the id and domain of the online service, while the public key is stored in the online
service’s key database on a server. Each time the user attempts to subsequently access the service, the online service uses APIs to verify user credentials
with the authenticator.

When the user attempts to sign on to an application, a FIDO2 server, sends the FIDO client (browser, desktop or mobile application) a challenge using WebAuthn,
asking it to sign the data with the private key. The user consents to the request by using a method of authentication. The domain is checked against the domain
that was associated at registration time which gives FIDO its strong phishing resistance. The client obtains the private key from the authenticator and answers
the request in a way that proves the device has possession of the private key to gain access to the online service for user. From now on communication
encrypted throughout this process, and private keys never leave users’ devices.

IDmelon IAM solution is a complete process for FIDO2 based authentication which as described, is strongly resistant against phishing attacks.

## Authentication

Authentication is the process of verifying that an individual, entity or website is whom it claims to be. It is commonly performed by
submitting a username or ID and one or more items of private information that only a given user should know which is a password in most cases.

IDmelon solution is passwordless and throughout the authentication process, users will not need any password.
As a result, our solution completely eradicates all the password related threats and vulnerabilities.

## Authorization

Authorization is the process of verifying that a requested action or service is approved for a specific entity. Authorization is distinct
from authentication which is the process of verifying an entity's identity. When designing and developing a software solution, it is important
to keep these distinctions in mind. A user who has been authenticated, is often not authorized to access every resource and perform every action
that is technically possible through a system.

IDmelon performs authorization by implementing the user access area on the server side to protect users' information and important data. The access area
is divided into multiple parts according to the type of user activities and the role of each user (authenticated or not, admin, etc.) in the web or mobile
version of our services. We have access area for each user and we protect this area to stop users accessing out of that. This prevents authorization related
attacks and vulnerabilities such as Privilege Escalation or IDOR (Insecure Direct Object Reference).

## Session management

A session is a sequence of network HTTP request and response transactions related to the same user. Modern and sophisticated applications
need to maintain the information or status of each user during multiple requests. Thus, sessions provide the ability to create variables - such as
access rights and localization settings - that apply to any user interaction with the application during the session. Ignoring session management
best practices in development lifecycle, allows attackers to exploit vulnerabilities and execute attacks such as session hijacking or CSRF (Cross Site Request Forgery).

IDmelon authentication process begins by email or phone number. Upon entering the application, a unique token is assigned to each user. When users send
their email or phone number, they receive a special random code that is active for only one minute. By delivering the received code and entering the user
panel, the value of the user token will change. This value is checked in all the next requests to the server, and due to employing the public key encryption,
we stop attackers from creating valid usable tokens.

Moreover, as soon as the users leave the web panel, their tokens expire and no longer will be usable. When implementing this method, we considered
best practices for our related programming languages to prevent token(session)-based attacks such as session hijacking.

## Cryptography

Cryptography is the science of hiding information in plain sight, in order to conceal it from unauthorized access.
It is a technique of storing and transmitting data in a particular form so that only those for whom it is intended can read and process it.

IDmelon uses public key encryption for all communications between every component in its architecture. We also use HTTPS protocol when we
are transferring data over internet. Since all information exchanging with the server from web and mobile app are encrypted,
stealing users' information and other related threats and exploit are hardly possible.

## DDOS

A distributed denial-of-service (DDOS) attack is a malicious attempt to disrupt the normal traffic of a targeted server,
service or network by overwhelming the target or its surrounding infrastructure with a flood of Internet traffic. DDOS attacks
achieve effectiveness by utilizing multiple compromised computer systems as sources of attack traffic which can include computers and
other networked resources such as IOT devices.

Limiting the number of receiving requests on a server over a period of time is one way to reduce denial of service attacks.
IDmelon uses Google Cloud Platform and we have implemented rate limiting to limit the number of requests sent to the server over
a desired period of time. While rate constraints are helpful in slowing down web scrapers from stealing content and reducing brute force logging efforts,
they alone may not be enough to effectively manage a complex DDOS attack. Therefore, WAF is also used along with rate limiting.
Web Application Firewall (WAF) is a tool that can help reduce DDOS attack. By placing a WAF between the Internet and a source server,
the WAF may act as a reverse proxy, protecting the server against certain types of malicious traffic. These attacks can be prevented by
filtering requests based on a set of rules used to identify DDOS tools. One of the key values of an effective WAF is the ability to quickly
execute custom rules in response to an attack which we are employing in the proper cases.

Also, due to the presence of captcha in the web app, as well as restrictions we have made on the server and restrictions on sending requests
on the mobile app, sending requests repeatedly to the server is not possible which prevents brute force attacks and helps our service to continue
its healthy operation longer.

## User enumeration

Username enumeration is a common application vulnerability which occurs when an attacker can determine if usernames are valid or not. Most commonly,
this issue occurs on login forms, where an error similar to “the username is invalid” is returned. An attacker can exploit this behavior by using lengthy
lists of common usernames, known names, and dictionary words to observe the application response to all. With those results, the attacker can infer which
usernames are valid and proceed with his attack to the next levels.
Non-disclosure of user’s information is one of the top priorities of IDmelon as a provider of a security service. We use multiple methods and techniques
to prevent user enumeration vulnerability. We stop any messages that can reveal existence or absence of any information about our users. We also have plans
to use only one step entrance method which completely removes chance of user enumeration.

## Input validation

Input validation is performed to ensure only properly formed data is entering the workflow in an information system, preventing malformed
data from persisting in the database and triggering malfunction of various downstream components. Input validation should happen as early as
possible in the data flow, preferably as soon as the data is received from the external party. Data from all potentially untrusted sources
should be subject to input validation, including not only Internet-facing web clients but also backend feeds over extranets, from suppliers,
partners, vendors or regulators, each of which may be compromised on their own and start sending malformed data.

The IDmelon development team prevents vulnerabilities such as Cross Site Scripting, injections, uploading malicious files, etc. that are a subset
of input validation by checking all the values sent to the server and placing blacklists and whitelists. We also use Regular expressions,
Syntactic Validation and Semantic Validation as well as check the content, extension and type of uploaded file to stop related attacks.

## Client-side validation

Client-side validation is a great convenience for users. It saves time they would otherwise spend waiting for a round trip to the server that might
return validation errors. In business terms, even a few fractions of seconds multiplied hundreds of times each day adds up to a lot of time, expense,
and frustration. Straightforward and immediate validation enables users to work more efficiently and produce better quality input and output.

The IDmelon team has put lots of efforts to prevent vulnerabilities such as Cross Site Scripting, Injections, CORS (Cross-Origin Resource Sharing),
Clickjacking, etc. under the set of client-side validation vulnerabilities by detailed examination of user inputs on the client side.

## Error Handling

Improper handling of errors can introduce a variety of security problems. The most common one is when detailed internal error messages such as stack traces,
database dumps, and error codes are displayed to unintended individual. These messages reveal implementation details that should never be revealed. Such details
can provide hackers important clues on potential flaws in the service. Web applications frequently generate error conditions during normal operation. Out of memory,
null pointer exceptions, system call failure, database unavailable, network timeout, and hundreds of other common conditions can cause errors to be generated.
These errors must be handled according to a well thought out scheme that will provide a meaningful error message to the user, diagnostic information to
the site maintainers, and no useful information to an attacker.

The IDmelon development team is aware of this vulnerability. Thus, we made our services in a way that when a server malfunction occurs,
no exact error message will be displayed that will lead the attacker or user to notice the type of happened malfunction in the system.
We only provide a ‘An error has occurred’ message in most case scenarios.

## Configuration and Deployment Management

Understanding the deployed configuration of the systems and servers (hosting application) is almost as important as the application security testing itself.
After all, an application chain is only as strong as its weakest link. Application platforms are wide and varied, but some key platform configuration errors
can compromise the application in the same way an unsecured application can compromise the server.

IDmelon administrators set all configurations based on the latest updates. They also employ the best methods of implementation and use firewalls rules to fade
configuration and deployment management issues. We also pay enough attention to security headers in connection from applications to the server and also other related security processes.

Our backup process also helps us to ensure preserving replaceable user and system data and information in the event of incidents.
Checking the system logs continuously, reveals unconventional behavior of the service and its components and help us prevent future problems.

## Root/ Jailbreaking detection

Android is a Linux based operating system. In Linux environments, the system administrator has a user called root. For security reasons,
the Android operating system does not allow the common users to perform specific operations. In practice, this means that the user does not have
administrator rights. Rooting is an operation that allows the user to gain (be rooted) system administrator privileges. Therefore, being able to
perform operations on a smartphone, attackers use rooted devices and emulators for Android operating system.

Apple built iOS is based on BSD - a Unix-like operating system. Its philosophy is different from Android, because it allows you to install official
applications through the App Store. This big difference compared to Android certainly makes it less vulnerable, because the apps in the App Store are
verified and approved before they can be downloaded by users. In iOS jailbreaking allows to increase rights for user. The iPhone has several "design-based"
restrictions, so for example, you can only use the default browser or email client. In practice, jailbreaks are commonly used to install apps outside
the App Store. While rooting Android basically allows you to gain complete control of the operating system, jailbreaking can only remove some of the
limitations of the software.

IDmelon team employs Play Integrity API and few other methods that have been implemented in Android to restrict root access for attackers. For iOS also
implementing multiple methods for checking the application living in its own Sandbox and limiting access to some important files necessary for gaining
privileged access, prevents attackers from installing and exploiting IDmelon iOS version of mobile app.

## Emulator/ Simulator detection

An emulator is a piece of software that mimics the hardware and software of the device on a computer. Attacker can use these emulators to execute
their attacks and exploit applications.

Using the Play Integrity API as well as implementing some other methods in Android and iOS apps by IDmelon development team,
help us prevent our mobile apps from running and executing on emulators which makes it impossible for hackers to test the apps
with related tools and techniques.
