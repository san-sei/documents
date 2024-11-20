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

The IDmelon platform provides flexibility to suit the needs of different organizations and scenarios,
ensuring optimal performance and reliability.

## Deployment Options

![alt](/images/vendor/deploy/deployment-decision-flowchart.png)

### Managed Deployment

For larger-scale deployments requiring high availability and scalability,
the cluster deployment option is recommended.

This involves installing the platform on a minimum of three servers,
ensuring redundancy and load balancing to handle increased traffic and workload.

#### Databases

For the required databases, including Redis, MongoDB, and PostgreSQL, you can leverage cloud services such as:

- MongoDB Atlas: A fully managed cloud database service for MongoDB, providing automated backups, scaling, and security features.
- Amazon RDS: Offers managed relational databases, including PostgreSQL, MySQL, and MariaDB.
- Amazon ElastiCache: Provides scalable and high-performance Redis and Memcached-compatible in-memory data stores.
- Azure Cache: Offers managed Redis and Memcached services on Microsoft Azure.
- Azure PostgreSQL: Provides fully managed PostgreSQL database services on Microsoft Azure.

#### Kubernetes

For Kubernetes orchestration, you can utilize:

- Amazon EKS (Elastic Kubernetes Service): A fully managed Kubernetes service provided by AWS, offering scalability, security, and high availability for containerized applications.
- Azure AKS (Azure Kubernetes Service): A managed Kubernetes service provided by Microsoft Azure, enabling easy deployment, management, and scaling of containerized applications.
- Google GKE (Google Kubernetes Engine): A managed Kubernetes service provided by Google Cloud Platform, offering automated operations, scalability, and security features

### Single Node Deployment

Ideal for small to medium-scale deployments, the single node deployment option involves installing all components on a single server.
This streamlined approach offers simplicity and ease of management.

#### Minimum System Requirements

The minimum hardware and operating system requirements are:

- OS: Ubuntu server 23.10 or Windows Server 2016+
- CPU: 4 cores
- RAM: 8 GB
- Hard Drive: 50 GB

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
