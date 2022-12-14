---
title: "Availability and Resiliency"
description: ""
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: []
menu:
  docs:
    parent: "scrty"
weight: 98
toc: true
---


Availability means guaranteeing reliable access to information by authorized personnel and customers. High availability aids rapid
business processing and ultimately benefits the organization. IDmelon provides identity and access management (IAM) service
based on FIDO standard. It makes us a crossing route for our customers’ services. It is clear that the availability and resiliency
of such a service is crucial since any interruption makes lots of dependent services inaccessible. In this document we introduce patterns
and practices we applied to create a resilient and scalable service. We present a well-designed service which scales up and down as demand
increases and decreases, and it is resilient enough to withstand service disruptions to a desired extent. Building and operating a service
that meet these requirements needs careful design and planning. In next sections we describe what we have done in this regard, however, it
should be noted that the various parts of the IDmelon services are located on Google Cloud Platform (GCP) and as a result, a large portion
of evidence we present here, are GCP tools, services and built-in features.

## Scalability

Scalability is the system's ability to handle varying amounts of work by adding or removing resources. The flexibility to adjust
the capacity to meet demands and resources consumed by the service as a key business driver moved IDmelon to the Google cloud.
Google cloud has a proper design and can help us maintain a good user experience during periods of high traffic by adding more resources.
In this way, our service can consume only the resources necessary to meet demands.
Google Cloud provides multiple features to help build scalable and efficient services which we use as follows:

- **Compute Engine** virtual machines integrate with autoscalers that grow or shrink resource consumption based on defined metrics

- **Cloud Monitoring** provides metrics across services and infrastructure, helping us to make data-driven scaling decisions.

## Resiliency

A resilient service is one that continues to function despite failures of system components and requires planning at all levels
of service architecture. Building and operating a resilient service is hard specially for distributed services, which might contain
multiple layers of infrastructure. IDmelon planned carefully to improve the ability of the service to withstand failures. We tried with
proper processes and also learning from failures to further increase our service resilience.
To do this, we employed Google Cloud tools and services such as:

- Google Cloud regions and zones across multiple continents to best meet our availability goals ([refer to thsi section](#physical-distribution-of-resources)).

- Compute Engine to distribute and manage instances across the regions and zones ([refer to this section](#physical-distribution-of-resources)).

- Google Cloud external and internal load-balancing options to manage our service traffic ([refer to this section](#load-balance-at-each-tier)).

- Cloud Monitoring tools and metrics across our service and infrastructure to help make data-driven decisions about
the performance of our service ([refer to this section](#monitoring)).

## Automation of infrastructure provisioning by IaC

Infrastructure as code (IaC) is a technique that encourages organizations to treat their infrastructure provisioning in the same way they handle application code.
The provisioning logic is stored in source control so it's discoverable and can be versioned and audited. Because it's in a code repository, organizations can take
advantage of continuous integration and continuous deployment, so that any changes to configuration can be tested and deployed automatically. By removing
manual steps from infrastructure provisioning, IaC minimizes human errors and improves the consistency and reproducibility of services and increases their resilience.
IDmelon uses Cloud Deployment Manager to automate the creation and management of Google Cloud resources with flexible templates. That is how we
adopt IaC for our services in order to obtain the benefits mentioned above.

## Design for high availability

Availability is a measure of the fraction of time that a service is up and running and usable for its users. It can be used as a key indicator of overall service health.Highly available architectures typically through deploying redundant components aim to maximize service availability. In simple terms, achieving
high availability involves distributing compute resources and replicating data and balancing load between them.

### Physical distribution of resources

Google Cloud services are available in locations divided into regions and zones across the globe. How an organization deploys its service across
these regions and zones affects the availability and latency of the service. Redundancy is the duplication of components of a service or system
to increase the overall availability. In Google Cloud, redundancy is achieved by deploying the service to multiple zones or even regions which
helps the service to better withstand any disruptions. IDmelon using Compute Engine, distributes its service in three zones in three different regions.
This way we can manage the instances as a logical unit. Moving to the European market as well as the presence of Chinese customers made us grow our instances.
We will soon replicate another instance in a zone in Canada.

### Load-balance at each tier

Load balancing distributes traffic among groups of resources. Distribute traffic helps to ensure that individual resources don't become overloaded while others sit idle. Google Cloud offers several load-balancing choices depending on the type, source, and other aspects of the traffic. It's a common practice to load-balance requests
received from different external sources, such as web or mobile clients. However, using load balancers between different services or tiers within the service can
also increase resilience.
In addition to replicate one new instance in Canada, we are planning to use external load balancer to separate traffic of different components (mobile and Pairing Tool). Figure 1 shows our whole structure in near future which consists of four zones in four regions (North America, Europe, Asia and Canada) with internal load
balancing to distribute traffic from web tier to the internal tier within each region. It will also have an external load balancer to divide mobile and
Pairing Tool traffics.

<p align="center">
    <img src="/images/vendor/Security/security_3.png">
</p>

## Monitoring

Before any decision for improving the resilience and scalability, the organization needs to understand behavior of its services. Having a comprehensive
set of relevant metrics about the performance of the service can help the organization discover potential issues before they cause an outage.
Cloud Monitoring is Google Cloud's integrated monitoring tool which ingests events, metrics, and metadata, and provides insights through dashboards and alerts.
It is the main tool that IDmelon uses for monitoring its infrastructure. We describe below how we employ Google Cloud Monitoring at different levels.

### Infrastructure monitoring

Infrastructure-level monitoring provides the baseline health and performance for the service. IDmelon uses this approach of monitoring
to capture and review information like CPU load and memory usage. These metrics can indicate that a system is working properly or is overloaded and is not
functioning as expected.

### Service monitoring

IDmelon defines and captures service level metrics to capture information that the built-in Cloud Monitoring metrics cannot. We use these metrics to measure
how long it takes to perform related sequence of service calls.
We also have plans using OpenCensus to capture more service level metrics. OpenCensus is an open source app which provides a flexible API, and can be
configured to export metrics to the Cloud Monitoring backend.

### End-to-end monitoring

End-to-end monitoring (also called black-box monitoring), tests externally visible behavior of a service from viewpoint of users. This type of monitoring
checks whether users are able to complete critical actions within defined thresholds. This type of monitoring uncovers errors or latency and reveals
availability as perceived by users. IDmelon periodically performs black-box monitoring. We have security testing procedures in place to check multiple
related metrics which one of them is availability of our services.

## Other Considerations

### Managed Services

IDmelon Rather than independently installing, supporting, and operating all parts of its services, uses related managed services to consume parts
of application stack as outsourced services. The most important example is using MongoDB Atlas service instead of installing and
managing a MongoDB database by its own. By using managed services, we spend less time managing infrastructure, and more time
on improving the reliability of our service. The MongoDB Atlas service offers multi-regional availability, which means that the infrastructure
that runs the service can be located in several regions.
The IDmelon MongoDB Atlas service resides on GCP on three regions (North America, Europe and Asia) now and soon will also be replicated to the next instance (Canada).

### Push Notification

The IDmelon uses a push notification service to notify mobile apps by a cloud service as a data transmission channel. Push notification service
uses Apple APNS for iOS devices and Google Firebase for Android ones. Our monitoring didn’t record any sign of interruption in both services.
We also have SLAs with 99.99 availability with both providers which perfectly suits our needs.

### Rate Limiter

Rate limiting generally works as a defensive measure for services. Shared services need to protect themselves from
excessive use to maintain service availability. Even highly scalable systems should have limits on consumption at some levels.
For the IDmelon services to perform well, we designed our service with rate limiting in mind to reduce the chances of cascading failure.
Rate limiting is crucial for maximizing throughput and minimizing end-to-end latency across distributed systems.

<ol>
<li>Preventing resource starvation</li>
<p>
The most common reason for rate limiting is to improve the availability of API-based services by avoiding resource starvation. Many load-based denial-of-service incidents are unintentional—caused by errors in software or configurations—not malicious attacks. Generally, we apply rate limiting at a step before the constrained resource, with some advanced-warning safety margin which is required because there can be some lag in loads, and the protection of rate limiting needs to be in place before critical contention for a resource happens.
</p>
<li>Managing policies and quotas</li>
<p>
Since the capacity of IDmelon service is shared among users and consumers, we apply rate limiting per user to provide fair and reasonable use,
without affecting other users. These limits might be applied over longer time periods, or they might be applied to resources that are not measured
by rate but by quantity allocated. These rate and allocation limits are collectively referred to as quotas which we also apply to API monetization packages.
</p>
</ol>

## General Information

The technology moves fast and new products and features are released frequently, new patterns emerge, and the demands from users
and stakeholders continue to grow. IDmelon is always looking for ways to refine, simplify, and improve the architecture of its services.
We are aware that software systems are living things and need to adapt to reflect our changing priorities.
For more general information and FAQs related to IDmelon’s security and privacy program, please visit the IDmelon website for updated information.
