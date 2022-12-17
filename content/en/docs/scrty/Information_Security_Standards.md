---
title: "Information Security Standards and Best Practices"
description: ""
lead: ""
date: 2022-02-16T18:14:02-08:00
lastmod: 2022-02-16T18:14:02-08:00
draft: false
images: []
menu:
  docs:
    parent: "scrty"
weight: 101
toc: true
---

The importance of information security in organizations cannot be overstated. It is critical that companies take the needed steps to protect their priority information from data breaches and security threats. Standards and best practices by providing guidance aid organizations to enhance their cyber security posture. They also provide common set of reference points to enable organizations to evaluate whether processes, procedures and other controls in place meet an agreed minimum requirement.
IDmelon as one of the pioneers in implementing FIDO standard follows related information security standards and best practices for managing and protecting valuable data and information assets. We have plans to get compliant and meet certain standards to give related third parties confidence in our ability to deliver those standards. In the following, we describe what standards and best practices we implemented and what we have in progress.

## Information Security Management System (ISO/IEC 27001)

ISO/IEC 27000 is a family of standards that provide a systematic approach to formalize risk management for an information security management system (ISMS) which consists of people, processes, and technology controls. ISO/IEC 27001 as the main document of the family specifies the requirements for establishing, implementing, maintaining, and continually improving an ISMS within the context of the organization. Other documents like ISO/IEC 27002 include the catalog of suitable information security controls within the ISMS and gives guidelines for organizational information security standards and management practices including the selection, implementation, and management of controls.
IDmelon has started establishing and implementing the ISO/IEC 27001 standard a while back. The main clauses of the standard are on the agenda and the risk assessment has been performed. We also implemented a significant part of the controls from ISO/IEC 27002 and we soon will be ready for internal audit. After conducting possible corrective actions found in internal audit, we will be ready to be audited by intended certification body to obtain the ISO/IEC 27001 certificate.

## NIST Special Publication 800 series

The NIST SP 800 series is a set of documents that describe security guidelines for US federal government agencies. It is a technical standard set of
publications developed by the National Institute of Standards and Technology that details U.S. government procedures, policies, and guidelines on
information systems. Individual publications related to the series tie into different aspects of the cyber security.
IDmelon as a private organization is not bound to this particular series, but we already adopted few of the standards contained therein as part of
our business practices which includes the following:

**NIST SP 800-53 R5**: “Security and Privacy Controls for Information Systems and Organizations,” cover security controls for areas including incident response,
access control, ability for disaster recovery, and business continuity. We use this document as a reference to supplement our list of security controls in
multiple domains.

**NIST SP 800-53A R4**: “Assessing Security and Privacy Controls in Federal Information Systems and Organizations,” used to document and assess security controls
for effectiveness. We use this document as a complementary guide to provide a checklist consisting of a set of procedures for conducting assessments of
security controls.

**NIST SP 800-34**: “Contingency Planning Guide for Federal Information Systems,” provides a base of practice for the development of resilience
in information systems operations. This document is our reference for developing continuity plans and organizing related team structures.

**NIST SP 800-37**: “Guide for Applying the Risk Management Framework to Federal Information Systems,” the Risk Management Framework (RMF) provides
a structured analytical process to identify, control, evaluate, and improve the organization’s information security controls. We are developing a
multi-step process based on this document to manage the risks of operating information systems.

**NIST SP 800-30**: “Guide for Conducting Risk Assessments,” one of the most widely used risk assessment methodologies in detail which
is the one we applied for conducting risk assessment to satisfy clause 8.2 (information security risk assessment) of ISO/IEC 27001.

### FIPS 140-3 (CMVP)

Federal Information Processing Standards (FIPS) 140-3 identifies the Cryptographic Module Validation Program (CMVP) a joint effort between the NIST and
Canadian Centre for Cyber Security. The goal of the CMVP is to promote the use of validated cryptographic modules and provide a security metric to use in
procuring equipment containing validated cryptographic modules. Independent Cryptographic and Security Testing (CST) laboratories verify each module meets
a set of testable cryptographic and security requirements.
IDmelon started developing and implementing different modules with CMVP in mind from the beginning. We are preparing templates of CMVP
(based on NIST SP 800-140A to F) and we will soon get documents ready to submit to one of the CST laboratories to get validated and certified by CMVP.

## GDPR for Data Privacy

The General Data Protection Regulation (GDPR) is one of the toughest privacy and security laws in the world which is a product of the European Union
and were put into effect on May 25, 2018. This cybersecurity framework aims to protect the personal data of all people in the European Union. According to
Article 4 of the GDPR, personal data is defined as any information that relates to an identifiable natural person. In other words, personal data is any
data that is linked to the identity of a living person.
Due to IDmelon presence in European market, we outlined the standards set by the GDPR to provide a checklist to start implementing the requirements to
remain compliant. We designated a dedicated Data Protection Officer (DPO) as one of the main requirements and the following tasks under different domains of
GDPR are already in progress.

### Record of Processing

We document what personal data we hold, where they came from and who we share it with. As GDPR requires, we maintain a detailed record of all
processing activities, including purposes of processing, a description of categories of data, security measures and comprehensive data flow map.

### Accountability and Governance

IDmelon places data governance at the heart of what it does and considers compliance to GDPR as a serious focus. We do our best to raise awareness
of privacy issues and embed privacy compliance into decision making processes to being proactive. We have documentation to be able to demonstrate
how we comply with the GDPR and we integrated compliance within our audit framework to ensure policies, processes and controls are working properly.

### Privacy by Design

As a good practice, IDmelon adopts a privacy by design approach which is a legal requirement under GDPR. We also consider performing a
DPIA (Data Protection Impact Assessments) as a mandatory requirement in GDPR in the situations where data processing is likely to result in high risk
to individuals. However, the only situation that needs performing a DPIA in IDmelon is where we are deploying a new technology which will have
a DPIA at the begging.

### Data Subject Rights

Under data subject rights domain of GDPR IDmelon performs the following:

- Identify which data subject rights are relevant given the legal basis on each category of data being processed

- Update data privacy policy and internal processes for dealing with requests

- Putting technical and operational processes in place to ensure data subjects’ rights can be met (such as right to be forgotten, subject access requests and data deletion)

### Consent and Notices

To stay compliant with GDPR standard, we have procedure to record and manage consent which consists of the following activities:

- Review existing grounds for lawful processing and explain the lawful basis for processing in the privacy policy

- Consider whether we are processing any sensitive personal data and ensure the requirements for processing such data are satisfied

- Prepare a process to seek new consents when existing consents are not enough to ensure they meet the GDPR requirements for processing personal data

- Prepare a process to make the withdrawal of consent possible

### Breach Management

We are preparing the right procedures to detect, report and investigate a personal data breach. We are also providing a list of bodies and individuals
to notify when we suffer a personal data breach.

### Training and Awareness

IDmelon ensures that decision makers and key people in organisation are aware of GDPR and the security team inform them about areas that could causecompliance problems under GDPR. Staff awareness and training is in place for anyone who handles personal data or anyone who is responsible for overseeing data protection practices. Also, training is relevant to the work that employees do.

## Programming Best Practices

### ISO/IEC 27034

The ISO/IEC standards offer the security practitioner guidance on many aspects of
information security. The ISO/IEC 27034 “Information technology – Security techniques – Application security,” describes how to integrate application security into an SDLC. It presents a process-oriented approach intended to work generally with any SDLC methodology.
This standard has seven parts, each of which is addressing a particular aspect of application security:

**Part 1** - Overview and concepts: sets the foundation for the standard and defines its overall use as general guidance for application security

**Part 2** – Organization normative framework: proposes a structure to orchestrate the elements of application security in a manner that enables an organization to best adapt it to their needs.

**Part 3** – Application security management process: describes a process for managing application security.

**Part 4** – Application security validation: describes a validation and certification process for application security.

**Part 5** - Protocols and application security control data structure: defines a data structure known as the Application Security Control that serves as a basis for the description of application security control components.

**Part 6** - Case studies:  gives examples on how to use Application Security Controls in the software development process.

**Part 7** – Assurance prediction framework: focuses on a framework to determine what the standard calls the security predictability of an application based on various security-impacting aspects.
IDmelon development and security team helped each other to implement ISO/IEC 27034 in the SDLC. We have an application security management process in place along with validation and certification process. These two processes connect both teams together and let them work alongside to apply security controls in all components.
For more information on ISO/IEC 27034, see http://iso27001security.com/html/27034.html.

### NIST 800-64 Revision 2

NIST Special Publication 800-64 R2, “Security Considerations in the System Development Life Cycle,” is a standard intended to guide the introduction of essential security services into the established system development lifecycle. The standard establishes a baseline understanding of cybersecurity and the system development lifecycle. It uses a typical SDLC that includes five phases: initiation, development/acquisition, implementation/assessment, operations/maintenance, and disposal. It describes the major security activities and controls that apply in general as well as to each SDLC phase. It also describes controls, processes, people, and other considerations that help integrate security into each phase of the SDLC.
In addition to ISO/IEC 27034, IDmelon employed multiple parts of this guidance to harden the SDLC including:

- The roles and responsibilities of whom to involve in securing each phase

- The “Additional Security Considerations” section of the guidance which highlights security considerations for development scenarios, such as service-oriented architectures

- Recommendations for addressing security vulnerabilities early to lower costs and improve security posture

Using NIST 800-64 R2 helped IDmelon development team to add a security emphasis throughout the SDLC which improves systems interoperability and integration. Also, comprehensive documentation of security decisions made during development, makes better security integration in the SDLC which we are sure ultimately improves organization and customer confidence.
To read the standard, see [here](https://doi.org/10.6028/NIST.SP.800-64r2).

## CyberSecurity Capability Maturity Model

The Cybersecurity Capability Maturity Model (C2M2) is a tool for evaluating and improving cybersecurity. The purpose of the C2M2 is to help organizations to evaluate and make improvements to their cybersecurity programs and strengthen their operational resilience. The C2M2 focuses on the implementation and management of cybersecurity practices associated with information technology (IT) and operations technology (OT) assets and the environments in which they operate. In general A maturity model is An organized way to convey a path of experience, wisdom, perfection, or acculturation with the subject of characteristics, practices, or processes.
The C2M2 comprises domains, practices, and MILs (maturity indicator levels). A domain is a list of cybersecurity practices focused on a specific subject area. Each of the model’s 10 domains contains a structured set of cybersecurity practices. Each set of practices represents the activities an organization can perform to establish and mature capability in the domain. Each practice is a brief statement describing a cybersecurity activity that may be performed by an organization.
<p align="center">
    <img src="/images/vendor/Security/security_1.png">
</p>
To measure progression, the C2M2 uses a 1-3 scale of maturity indicator levels. Each level represents maturity attributes, which are described in the table below. Organizations that implement the cybersecurity practices within each MIL achieve that level.
<p align="center">
    <img src="/images/vendor/Security/security_2.png">
</p>
The IDmelon security team selected C2M2 as the base model for evaluation of information security maturity. However, implementing ISO/IEC 27001 and also using NIST 800-53 as a supplementary control set, lead us to modify C2M2 domains based on our organizational needs. The maturity indicator levels (MILs) also needs some modification to satisfy our security goals and objectives. Therefore, we applied the first four level of CMMI (Capability Maturity Model Integration) including initial, managed, defined and quantitatively managed as a replacement of C2M2 MILs for more accurate improvement and measurement.
