---
title: "Deployment Options"
description: "Dedicated Deployment Options"
lead: ""
date: 2024-03-05T14:30:00+03:30
lastmod: 2024-03-05T14:30:00+03:30
draft: false
images: []
menu:
  docs:
    parent: "dedicated-deployment"
weight: 95002
toc: true
---

The flowchart outlines the decision-making process for selecting the most suitable **IDmelon Platform Deployment Option** based on your organization’s requirements. It guides you through choices like cloud-based managed deployments or self-managed on-premises setups, considering factors such as infrastructure, operating systems, and deployment type. Below is a detailed breakdown of the options.

![alt](/images/vendor/deploy/deployment-decision-flowchart.png)

## Managed Deployment

Managed deployments are designed for organizations looking to leverage public cloud infrastructure with minimal administrative effort. These deployments offer scalability, performance, and ease of management.

- **Managed Cluster Deployment**
  - Hosted on cloud platforms like **MongoDB Atlas Cloud**.
  - Ideal for organizations using **Azure**, **AWS**, or **GCP**.
  - Features automatic scaling, backups, and optimizations, all managed by the cloud provider.
  - Provides high availability and fault tolerance without requiring extensive operational expertise.

---

## Self-Managed Deployment

Self-managed deployments cater to organizations that prefer full control over their infrastructure or have specific security and compliance requirements. These deployments are hosted in private environments or on-premises.

### Single Node

- **Self-Managed Single Node Deployment**

  - Simplified deployment on a standalone server.
  - Suitable for smaller-scale environments or non-critical applications.
  - Requires less setup effort compared to cluster deployments but lacks redundancy and scalability.
  - Minimum Requirements: OS:**Linux** or **Windows Server 2016+**, CPU: 4 cores, RAM: 8 GB, Hard Drive: 50 GB.

### Cluster

- **Self-Managed Cluster Deployment**
  
  - Designed for larger environments that need **high availability** and **load balancing**.
  - Utilizes a cluster of nodes for resilience and performance.
  - Offers greater scalability compared to single-node setups, making it ideal for mission-critical workloads.
  - Requires additional expertise to manage and maintain but ensures redundancy and fault tolerance.

---

## Third-party Services

The IDmelon platform uses the below services ensuring users can receive notifications, emails, SMS messages, and can communicate with organization's Azure Active Director if needed.

### Smartphone notification

For delivering notifications to users' smartphones.

- **Firebase**: Utilized for Android devices, Firebase provides a robust notification system that ensures timely delivery and efficient engagement with users.
- **APN (Apple Push Notification service)**: Used for Apple devices, APN enables seamless notification delivery to iOS users, enhancing their experience with the platform.

_This component is optional._

### Email

For sending emails to users for security key activation purposes and users administrators management.

- **SES (Simple Email Service)**: Provided by Amazon Web Services (AWS), SES offers a reliable and scalable solution for sending emails, ensuring that important notifications and updates reach users' email inboxes promptly.

_This component is required._

### SMS

For sending SMS messages to users.

- **Twilio**: As a leading cloud communications platform, Twilio enables the integration of SMS functionality into the IDmelon platform, facilitating direct and effective communication with users via text messages.

_This component is optional._

### Entra ID (formerly Azure Active Directory)

For the source of user identities and access management for the IDmelon platform.

- **Entra ID**: A comprehensive identity and access management solution provided by Microsoft Azure, AAD enables secure authentication and authorization processes, ensuring that users have appropriate access to the platform's resources and services.

_This component is optional._
