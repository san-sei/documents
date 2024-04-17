---
title: "Multi-cluster Deployment"
description: ""
lead: ""
date: 2024-03-05T14:30:00+03:30
lastmod: 2024-03-05T14:30:00+03:30
draft: false
images: []
menu:
  docs:
    parent: "on-premises-deployment"
weight: 95004
toc: true
---

## Deployment of IDmelon platform on multiple clusters, on-premises, with a load balancer

In this case, more than one Linux server with `Ubuntu`, each with `4` cores, `8 GB` RAM, and a `50 GB` hard disk, capable of `SSH` connection, is considered.

The deployment steps for `IDmelon platform` on multiple independent servers, on-premises, with a load balancer, are automated and performed through `Pulumi`.

Continuing, let's review its architecture:

## Review IDmelon platform on multiple independent servers, on-premises, with a load balancer

On these servers, `Kubernetes` is installed in a multi-master configuration using `k3s` `Rancher` in High Availability mode.

Then, on the installed Kubernetes, the necessary requirements are installed, following similar steps as mentioned earlier for the single server deployment.

Additionally, a load balancer is installed using `MetalLB`.

The overall architecture of this approach is as follows:

![alt](/images/vendor/deploy/idmelon_cloud_03.svg)

## Deployment of IDmelon platform on Amazon based on EKS

The `Amazon` supports a managed `Kubernetes` service called `EKS`, making it possible to deploy the `IDmelon platform` on it.

All deployment steps for `IDmelon platform` on `Amazon` are automated and done through `Pulumi`.

Continuing, let's review its architecture:

## Review IDmelon platform architecture on Amazon EKS

- In the deployment of `IDmelon platform` on `Amazon`, three different Amazon zones are utilized for availability.
- Three nodes are placed in three different zones, and through the Amazon Load Balancer (`ALB`), incoming requests are distributed among these nodes.
- The `WAF2` firewall is activated on `ALB` to control incoming web application requests.
- For the high availability of running applications, each application is replicated on all three nodes.
- To store the required data for applications, Amazon `RDS`, `Elastic Cache`, and `MongoDB Atlas` are used.
- The communication between nodes and databases is restricted, and connection is only possible through the defined network.
- For aggregating, sending, and displaying log reports, Amazon `CloudWatch` along with configured tools `Loki` and `Fluent Bit` are utilized.
- The `Sentry` is used for real-time monitoring of internal errors.

The overall architecture of this approach is as follows:

![alt](/images/vendor/deploy/idmelon_cloud_01.svg)

## Deployment of IDmelon platform on Microsoft Azure based on AKS

Similar to `EKS` on `Amazon`, `IDmelon platform` can be installed on `AKS` on `Microsoft Azure`.

## Deployment of IDmelon platform on Google Cloud based on GKE

Similar to `EKS` on `Amazon`, `IDmelon platform` can be installed on `GKE` on `Google Cloud`.
