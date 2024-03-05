---
title: "Single-node deployment"
description: ""
lead: ""
date: 2024-03-05T14:30:00+03:30
lastmod: 2024-03-05T14:30:00+03:30
draft: false
images: []
menu:
  docs:
    parent: "on-premises-deployment"
weight: 97000
toc: true
---

## Deploy of IDmelon platform on the Single node  

## Equipment needed:  

In this section, we review all the necessary requirements and initial settings that need to be addressed before installing and setting up the `IDmelon platform`.  

### Hardware and operating system  

The following hardware and operating system required:  

- Ubuntu server 23.10  
- CPU: 4 cores  
- RAM: 8 GB  
- Hard Drive: 50 GB  

### Required DNS settings  

The following addresses should be configured to the server's IP address:  

- sso.yourprefix.yourdomain.com  
- authnapi.yourprefix.yourdomain.com  
- skm.yourprefix.yourdomain.com  
- panel.yourprefix.yourdomain.com  
- login.yourprefix.yourdomain.com  
- idmp.yourprefix.yourdomain.com  
- notify.yourprefix.yourdomain.com  
- notifyservice.yourprefix.yourdomain.com  

The `yourprefix` section in the domain name is optional, you can directly set the required addresses on a domain or as subdomains, for example:  

Without prefix, it will be:  

- sso.yourdomain.com  

Or with a prefix it will be:  

- sso.yourprefix.yourdomain.com  

### Open ports:  

The server should have the following open ports:  

- Port 23 for SSH  
- Port 443 for the HTTPS protocol  
- Port 6443 for connecting to the Kubernetes cluster  

## Deployment flow  

In this section, we will walk through the steps for deploying `IDmelon platform`.  

Steps for deploying the `IDmelon platform` server:  

1. Connect to the SSH server.  

2. Install Kubernetes on it.  

3. Automatically deploy the required applications on Kubernetes.  

4. Configure DNS settings for the desired domain addresses.  

5. Configure certificate settings to enable the HTTPS protocol.  

Notes:  

- If your domain management provider is through Cloudflare, automatic DNS settings can be configured during installation by providing its token.  

- To create a valid certificate via Let's Encrypt for the desired domain, domain verification needs to be performed based on the domain management provider, or you can provide your certificate files, including `tls.crt` and `tls.key`.  

## Deployment architecture  

Deployment architecture of `IDmelon platform` on a single independent server, on-premises.  

In this case, a Linux server with `Ubuntu`, featuring `4` cores, `8 GB` RAM, and a `50 GB` hard disk, capable of `SSH` connection, is considered.  

The deployment steps for `IDmelon platform` on a single independent server, on-premises, are automated and performed through `Pulumi`.  

Continuing, let's review its architecture:  

On this server, Kubernetes is installed using the k3s Rancher tool.  
Then, on the installed `Kubernetes`, the necessary requirements are installed. Installation steps include:  

- Permanent file system installation using `Longhorn` `Rancher`, necessary for data services.  
- Installation of databases: `PostgreSQL`, `MongoDB`, `Redis`.
- Installation of log management: Utilizing `Grafana`, along with configured tools `Loki` and `Fluent Bit` for aggregating, sending, and displaying log reports.
- Issuing necessary certificates for HTTPS protocol: Using Self-Signed certificates or domain-related certificates through `Lets Encrypt`.  

The overall architecture of this approach is as follows:  

![alt](/images/vendor/deploy/idmelon_cloud_02.svg)  
