const AWSTERMS = {
  'On-demand delivery of compute power, database, storage, applications, and other IT resources via the internet with pay-as-you-go pricing.':
    'cloud computing',
  IaaS: 'infrastructure as a service',
  SaaS: 'software as a service',
  PaaS: 'platform as a service',
  'This cloud service model allows you with the highest level of flexibility and control over your IT resources.':
    'IaaS',
  'Services in this category are the basic building blocks for cloud IT and typically provide you with access to networking features, computers (virtual or on dedicated hardware), and data storage space.':
    'IaaS',
  'This cloud service model removes the need for you to manage the underlying infrastructure. It does it through automation and allows you to focus on the deployment and management of your applications as opposed to the provisioning.':
    'PaaS',
  'Services in this category reduce the need for you to manage the underlying infrastructure (usually hardware and operating systems) and enable you to focus on the deployment and management of your applications.':
    'PaaS',
  'Services in this category provide you with a completed product that the service provider runs and manages. In most cases, this service refers to end-user applications.':
    'SaaS',
  'This cloud service model provides you with a complete product that is run and managed by the service provider.':
    'SaaS',
  'List the three main cloud computing deployment models:':
    'cloud, hybrid, on premises',
  'This cloud computing model thinks of infrastructure as hardware. Hardware solutions are physical, which means they require space, staff, physical security, and capital expenditure.':
    'traditional',
  'Private cloud computing deployment model.': 'on premises',
  'This cloud computing deployment model extends and grows your implementation while connecting cloud resources to your internal systems.':
    'hybrid',
  'A way to connect infrastructure and applications between cloud-based resources and existing resources that are not located in the cloud. This model enables an organization to extend and grow their infrastructure into the cloud while connecting cloud resources to internal systems.':
    'hybrid',
  'This cloud computing deployment model uses virtualization and resource management tools, sometimes called private cloud. It is sought for its ability to provide dedicated resources to increase resource utilization.':
    'on premises',
  ACLs: 'access control lists',
  'AWS: Network ACLs, IAM, and Secruity groups': 'security',
  'AWS: Elastic Load Balancing and Amazon VPC': 'networking',
  'AWS: AMI and Amazon EC2 instances': 'compute',
  'AWS: Amazon EBS, EFS, S3, and RDS': 'storage',
  'Funds that a company uses to acquire, upgrade, and maintain physical assets, such as property, industrial buildings, or equipment; capex':
    'capital expenses',
  'A cost that you can easily alter or avoid by using cloud computing.':
    'variable expense',
  '(True/False): Because of aggregate usage from all customers, AWS can achieve higher economies of scale and pass savings on to customers.':
    'true',
  '(True/False): A disadvantage of cloud computing is that by yourself you can control variable costs better.':
    'false',
  'Enables you to stop thinking of your infrastructure as hardware, and instead think of (and use) it as software.':
    'cloud computing',
  'Any piece of software that makes itself available over the internet and uses a standardized format — such as Extensible Markup Language (XML) or JavaScript Object Notation (JSON) — for the request and the response of an application programming interface (API) interaction.':
    'web service',
  'Instead of a capital expense, AWS services can be considered an...':
    'operational expense',
  'AWS Service: You want complete control over your AWS computing resources.':
    'Amazon EC2',
  'AWS Service: You want to run your code and not manage or provision servers.':
    'AWS Lambda',
  'AWS Service: You want a service that deploys, manages, and scales your web applications for you.':
    'AWS Elastic Beanstalk',
  'AWS Service: You need a lightweight cloud platform for a simple web application.':
    'Amazon Lightsail',
  'AWS Service: You need to run hundreds of thousands of batch workloads.':
    'AWS Batch',
  'AWS Service: You want to implement a containers or microservices architecture.':
    'AWS Fargate',
  'AWS Service: You want to run AWS infrastructure in your on-premises data center.':
    'AWS Outposts',
  'AWS Service: You have an on-premises server virtualization platform that you want to migrate to AWS.':
    'VMware Cloud',
  'Provides a rich graphical interface to a majority of the features offered by AWS; i.e., through a web browser.':
    'AWS Management Console',
  'Provides a suite of utilities that can be launched from a command script in Linux, macOS, or Microsoft Windows.':
    'AWS CLI',
  'Provides packages that enable accessing AWS in a variety of popular programming languages. This makes it easy to use AWS in your existing applications and it also enables you to create applications that deploy and monitor complex systems entirely through code.':
    'SDKs',
  'List the three ways to intract with AWS services:': 'CLI, console, SDK',
  'AWS CAF': 'Cloud Adoption Framework',
  'Provides guidance and best practices to help organizations build a comprehensive approach to cloud computing across the organization and throughout the IT lifecycle to accelerate successful cloud adoption.':
    'AWS CAF',
  "AWS CAF is organized into how many 'perspectives'?": '6',
  'AWS CAF perspectives consist of sets of...': 'capabilities',
  'List the three fundamental drivers of cost with AWS:':
    'compute, data transfer, storage',
  'Outbound data transfer is aggregated across services and then charged at the outbound data transfer rate. This charge appears on the monthly statement as...':
    'AWS Data Transfer Out',
  'With the AWS Free Tier, users are able to gain free hands-on experience with the AWS platform, products, and services for how long?':
    '1 year',
  'Enables you to provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.':
    'Amazon VPC',
  VPC: 'Virtual Private Cloud',
  IAM: 'Identity and Access Management',
  'A web service that enables AWS customers to manage users and user permissions in AWS.':
    'AWS IAM',
  'Controls your users’ access to AWS services and resources.': 'AWS IAM',
  'A tool that centrally manages access to launching, configuring, managing, and terminating resources in your AWS account.':
    'AWS IAM',
  'Allows you to control access and authorization to compute, storage, database, and application services in the AWS Cloud.':
    'AWS IAM',
  'A person or application that can authenticate with an AWS account.': 'user',
  'A collection of IAM users that are granted identical authorization.':
    'IAM group',
  'The document that defines which resources can be accessed and the level of access to each resource.':
    'IAM policy',
  'An IAM identity with specific permissions not uniquely associated with one person; does not contain standard longterm credentials; provides temporary security credentials.':
    'IAM role',
  'Useful mechanism to grant a set of permissions for making AWS service requests.':
    'IAM role',
  'This type of access requires the IAM user to present an access key ID and a secret access key when they make an AWS API call by using the AWS CLI, the AWS SDK, or some other development tool.':
    'programmatic access',
  'This type of access requires the IAM user to fill in the fields that appear in the browser login window.':
    'Management Console access',
  'Promotes that you grant only the minimal user privileges needed to the user, based on the needs of your users.':
    'principle of least privilege',
  'Permissions policies that you can attach to a principal (or identity) such as an IAM user, role, or group. These policies control what actions that identity can perform, on which resources, and under what conditions.':
    'identity based policies',
  'Standalone identity-based policies that you can attach to multiple users, groups, and roles in your AWS account.':
    'managed policies',
  'Policies that you create and manage, and that are embedded directly into a single user group or role.':
    'inline policies',
  'JSON policy documents that you attach to a resource, such as an S3 bucket. These policies control what actions a specified principal can perform on that resource, and under what conditions.':
    'resource based policies',
  'IAM policy documents are constructed and witten in...': 'JSON',
  'A basic computer security concept: a user or system must first prove their identity.':
    'authentication',
  'The process of determining what permissions a user, service or application should be granted.':
    'authorization',
  'AWS does not charge for inbound data transfer but rather what type of data?':
    'outbound',
  TCO: 'Total Cost of Ownership',
  'The financial estimate to help identify direct and indirect costs of a system.':
    'TCO',
  'To compare the costs of running an entire infrastructure environment or specific workloadon-premises versus on AWS; to budget and build the business case for moving to the cloud.':
    'TCO',
  'A free account management service that enables you to consolidate multiple AWS accounts into an organizational tree with each branch representing a department or team.':
    'AWS Organizations',
  'A free account management service that enables you to consolidate multiple AWS accounts into an organization that you create and centrally manage.':
    'AWS Organizations',
  'Enables you to consolidate multiple AWS accounts so that you can centrally manage them.':
    'AWS Organizations',
  'This tool provides an estimate of monthly costs, opportunities to reduce monthly costs, and the ability to model solutions before building them.':
    'AWS Pricing Calculator',
  'Containers that you add services to in order to organize and build your cost estimate.':
    'groups',
  'Reduced spending on compute, storage, networking, and security; reductions in hardware and software purchases (capex); reductions in operational costs, backup, and disaster recovery; quantitative benefits':
    'hard benefits',
  'Reuse of service and applications; increased developer productivity; improved customer satisfaction; increase in global reach; qualitative benefits':
    'soft benefits',
  SCPs: 'Service Control Policies',
  'These policies enable you to allow or deny access to AWS services for all individuals or group accounts in an organizational unit (OU), including the AWS account root user.':
    'SCPs',
  'These policies offer centralized control over accounts; limit permissions that are available in an account that is part of an organization.':
    'SCPs',
  'Policies in AWS Organizations are called...': 'SCPs',
  'SCPs vs IAM policies – this one grants permissions.': 'IAM policies',
  'SCPs vs IAM policies – this one specifies the maximum permissions for all accounts in an organization.':
    'SCPs',
  'JSON policies that specify the maximum permissions for an organization or OU.':
    'SCPs',
  '(True/False): Service Control Policies (SCPs) are available only in an organization that has all features enabled, including consolidated billing.':
    'true',
  '(True/False): Well-defined Service Control Policies (SCPs) can be a substitute for IAM configurations.':
    'false',
  'These policies enable you to allow or deny access to AWS services for specific users, groups, or roles, and it can never restrict the AWS account root user.':
    'IAM policies',
  '1) Create Organization, 2) Create organizational units, 3) Create service control policies, 4) Test restrictions':
    'Organizations setup',
  'Uses the cost visualization that is provided by Cost Explorer to show you the status of your budgets and to provide forecasts of your estimated costs.':
    'AWS Budgets',
  'This AWS Organizations tool gives you programmatic access to AWS Organizations and AWS by issuing HTTPS requests directly to the service.':
    'HTTPS Query API',
  'A single location for accessing comprehensive information about your AWS costs and usage. This tool lists the usage for each service category that is used by an account (and its users) in hourly or daily line items,and any tax that you activated for tax allocation purposes.':
    'AWS Cost and Usage Report',
  'A billing and account expert who will provide quick and efficient analysis on billing and account issues.':
    'support concierge',
  'If you want to ensure that you follow best practices to increase performance and fault tolerance in the AWS environment, AWS Support has the AWS...':
    'Trusted Advisor',
  "The user's primary point of contact who can provide guidance, architectural review, and continuous ongoing communication to keep you informed and prepared as you plan, deploy, and optimize your solutions.":
    'technical account manager',
  '1) Basic, 2) Developer, 3) Business, 4) Enterprise': 'support plans',
  'This type of cloud service requires the customer to configure access controls and manage more aspects of the security.':
    'IaaS',
  'What type of cloud service is Amazon EC2?': 'IaaS',
  'What type of cloud service is Amazon VPC?': 'IaaS',
  'What type of cloud service is AWS Lambda?': 'PaaS',
  'What type of cloud service is Amazon RDS?': 'PaaS',
  'What type of cloud service is AWS Trusted Advisor?': 'SaaS',
  'What type of cloud service is AWS Shield?': 'SaaS',
  'What type of cloud service is Amazon Chime?': 'SaaS',
  'Cloud services that provide centrally hosted software that is typically accessible via a web browser, mobile app, or application programming interface (API).':
    'SaaS',
  'What type of cloud service operates the infrastructure layer, the operating system, and platforms?':
    'PaaS',
  'A managed distributed denial of service (DDoS) protection service that safeguards applications running on AWS.':
    'AWS Shield',
  'This service provides always-on detection and automatic inline mitigations to safeguard applications running on AWS.':
    'AWS Shield',
  'Minimizes application downtime and latency by providing distributed denial of service (DDoS) protection.':
    'AWS Shield',
  '(True/False): AWS Shield Standard is the basic protection service that is enabled at no additional cost.':
    'true',
  '(True/False): AWS Shield Advanced is an optional paid service.': 'true',
  'A communications service that enables you to meet, chat, and place business calls inside and outside your organization, all using a single application.It is a pay-as-you-go communications service with no upfront fees, commitments, or long-term contracts.':
    'Amazon Chime',
  'An online tool that analyzes your AWS environment and provides real-time guidance and recommendations to help you provision your resources by following AWS best practices.':
    'AWS Trusted Advisor',
  'Provides a bucket permission check feature that is a useful tool for discovering if any of the buckets in your account have permissions that grant global access.':
    'AWS Trusted Advisor',
  'Upgrades and patches to the operating system on the EC2 instance – who is responsible?':
    'customer',
  'Physical security of the data center – who is responsible?': 'AWS',
  'Virtualization infrastructure – who is responsible?': 'AWS',
  'EC2 security group settings – who is responsible?': 'customer',
  'Configuration of applications that run on the EC2 instance – who is responsible?':
    'customer',
  'Oracle upgrades or patches when the Oracle instance runs as an Amazon RDS instance – who is responsible?':
    'AWS',
  'Oracle upgrades or patches when the Oracle instance runs on an EC2 instance – who is responsible?':
    'customer',
  'S3 bucket access configuration – who is responsible?': 'customer',
  'Ensuring that the AWS Management Console is not hacked – who is responsible?':
    'AWS',
  'Configuring the subnet – who is responsible?': 'customer',
  'Configuring the VPC – who is responsible?': 'customer',
  'Protecting against network outages in AWS regions – who is responsible?':
    'AWS',
  'Securing the SSH keys – who is responsible?': 'customer',
  "Ensuring network isolation between AWS customers' data – who is responsible?":
    'AWS',
  'Ensuring low-latency network connection between the web server and the S3 bucket – who is responsible?':
    'AWS',
  'Enforcing multi-factor authentication for all user logins – who is responsible?':
    'customer',
  "Responsible for security 'in' the cloud.": 'customer',
  "Responsible for security 'of' the cloud.": 'AWS',
  'An entity in an AWS account that you can work with.': 'resource',
  'IAM users, IAM groups, and/or IAM roles.': 'entity',
  'This is the service which allows you to define users and the types of access that they will be allowed to have.':
    'AWS IAM',
  '(True/False): AWS IAM is a free global service.': 'true',
  MFA: 'multi factor authentication',
  'In addition to user name and password, this requires a unique authentication code to access AWS services.':
    'MFA',
  '(True/False): By default, AWS IAM users are assigned permissions to everything.':
    'false',
  '(True/False): In an IAM policy, if there is a competition between an allow statement and a deny statement, the deny statement always wins.':
    'true',
  '(True/False): In an IAM policy, if there is neither an explicit deny nor an explicit allow statement, the user is granted permissive access.':
    'false',
  '(True/False): An IAM group can contain subgroups, or nested groups.':
    'false',
  '(True/False): AWS strongly recommends that you do not use account root user credentials for day-to-day interactions with the account.':
    'true',
  "Allows actions that change the AWS Support plan, changes to account settings, and restoring an IAM user's permissions.":
    'account root user',
  '(True/False): AWS account root users only have full access to resources when specified.':
    'false',
  'A single sign-in identity that has complete access to all AWS services and resources in the account.':
    'account root user',
  'It is accessed by signing into the AWS Management Console with the email address and password that you used to create the account.':
    'account root user',
  'Stop using the account root user as soon as possible by creating this for yourself...':
    'IAM user',
  'This service logs all API requests to resources in your account and tracks user activity.':
    'AWS CloudTrail',
  '(True/False): Basic AWS CloudTrail event history is enabled by default and is a free service.':
    'true',
  'To enable events and history logs beyond 90 days in AWS CloudTrail, create a...':
    'trail',
  'These logs are the basis for security and forensic investigations.':
    'CloudTrail logs',
  'Tracks your AWS usage and provides estimated charges associated with your AWS account, either by the hour or by the day.':
    'AWS Cost and Usage Report',
  'Instead of sharing credentials, delegate using...': 'roles',
  'Monitor account activity by using...': 'AWS CloudTrail',
  'To assign permissions to IAM users, use...': 'groups',
  'Create individual IAM users and grant permissions according to the...':
    'principle of least privilege',
  'Delete account root user...': 'access keys',
  'The best practice of securing logins is with the use of...': 'MFA',
  'A security feature that groups AWS accounts into organizational units (OUs) and attach different access policies to each OU.':
    'AWS Organizations',
  'AWS KMS': 'Key Management Service',
  'A service that enables you to create and manage encryption keys, and to control the use of encryption across a wide range of AWS services and applications.':
    'AWS KMS',
  'A secure service that uses hardware security modules to protect your keys':
    'AWS KMS',
  'You can encrypt data stored in any service that is supported by the...':
    'AWS KMS',
  'AWS Key Management Service (KMS) logs all key usage with the integration of this service...':
    'AWS CloudTrail',
  'This type of key is used to control access to data encryption keys that encrypt and decrypt your data.':
    'customer master key',
  SAML: 'Security Assertion Markup Language',
  'This service uses common identity management standards, such as Security Assertion Markup Language (SAML) 2.0, to provide solutions to control access to AWS resources from your application.':
    'Amazon Cognito',
  'This service adds user sign-up, sign-in, and access control to your web and mobile applications; supports sign-in with social identity providers and enterprise identity providers via Security Assertion Markup Language (SAML) 2.0.':
    'Amazon Cognito',
  'This service give you access control in your application by meeting multiple security and compliance requirements, including requirements for highly regulated organizations such as healthcare companies and merchants.':
    'Amazon Cognito',
  'Takes data that is legible and encodes it so that it is unreadable to anyone who does not have access to the secret key that can be used to decode it.':
    'encryption',
  'Refers to data that is physically stored on disk or on tape.':
    'data at rest',
  'Refers to data that is moving across the network.': 'data in transit',
  'A service that enables you to provision, manage, and deploy SSL or TLS certificates for use with AWS services and your internal connected resources.':
    'AWS Certificate Manager',
  'A hybrid cloud storage service that provides on-premises access to AWS Cloud storage.':
    'AWS Storage Gateway',
  '(True/False): By default, newly created S3 buckets and objects are private and protected.':
    'true',
  'These access control settings predate IAM.': 'ACLs',
  "Amazon S3 setting to enable for all buckets that you don't want to be publicly accessible.":
    'Block Public Access',
  'By default, are S3 buckets private or public?': 'private',
  'These policies can specify the users or roles that can access specific S3 buckets and objects.':
    'IAM policies',
  'This option defines access to specific S3 buckets or objects, typically used when the user or system cannot authenticate by using IAM.':
    'bucket policies',
  'Encryption of data in transit is accomplished using what open standard protocol?':
    'TLS',
  'S3 bucket policies are a category of...': 'resource policies',
  'TLS; formerly Secure Sockets Layer (SSL); encryption of data in transit.':
    'Transport Layer Security',
  'This network traffic is protected against eavesdropping and man-in-the-middle attacks because of the bi-directional encryption of the communication.':
    'HTTPS',
  'This overrides any other policy or object permission and is enabled by default when you create the S3 bucket.':
    'Amazon S3 Block Public Access',
  'A service that enables you to assess, audit, and evaluate the configurations of your AWS resources.':
    'AWS Config',
  'Continuously monitors and records your AWS resource configurations, and it enables you to automate the evaluation of recorded configurations against desired configurations.':
    'AWS Config',
  'This service is used to assess, audit, and evaluate the configurations of AWS resources.':
    'AWS Config',
  'A service that provides on-demand downloads of AWS security and compliance documents, such as AWS ISO certifications, Payment Card Industry (PCI), and Service Organization Control (SOC) reports.':
    'AWS Artifact',
  'This service provides access to security and compliance reports.':
    'AWS Artifact',
};

export default AWSTERMS;
