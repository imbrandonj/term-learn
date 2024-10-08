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
    'AWS Management Console',
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
  'To compare the costs of running an entire infrastructure environment or specific workload on-premises versus on AWS; to budget and build the business case for moving to the cloud.':
    'TCO',
  'A free account management service that enables you to consolidate multiple AWS accounts into an organizational tree with each branch representing a department or team.':
    'AWS Organizations',
  'A free account management service that enables you to consolidate multiple AWS accounts into an organization that you create and centrally manage.':
    'AWS Organizations',
  'Enables you to consolidate multiple AWS accounts so that you can centrally manage them.':
    'AWS Organizations',
  'This tool provides an estimate of monthly costs, opportunities to reduce monthly costs, and the ability to model solutions before building them.':
    'AWS Pricing Calculator',
  'This service provides an estimate of cost before migration to the AWS Cloud.':
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
  'Which AWS service can a company use to set $ spending limits and receive notifications if those limits are exceeded?':
    'AWS Budgets',
  'This AWS Organizations tool gives you programmatic access to AWS Organizations and AWS by issuing HTTPS requests directly to the service.':
    'HTTPS Query API',
  'A single location for accessing comprehensive information about your AWS costs and usage. This tool lists the usage for each service category that is used by an account (and its users) in hourly or daily line items, and any tax that you activated for tax allocation purposes.':
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
  'A communications service that enables you to meet, chat, and place business calls inside and outside your organization, all using a single application. It is a pay-as-you-go communications service with no upfront fees, commitments, or long-term contracts.':
    'Amazon Chime',
  'An online tool that analyzes your AWS environment and provides real-time guidance and recommendations to help you provision your resources by following AWS best practices.':
    'AWS Trusted Advisor',
  'Provides a bucket permission check feature that is a useful tool for discovering if any of the buckets in your account have permissions that grant global access.':
    'AWS Trusted Advisor',
  'Patching operating systems on an EC2 instance – who is responsible?':
    'customer',
  'Upgrades and patches to the operating system on the EC2 instance – who is responsible?':
    'customer',
  'Updating the firmware on the underlying EC2 hosts – who is responsible?':
    'AWS',
  'Patching database software in the cloud – who is responsible?': 'AWS',
  'Performing infrastructure patching and maintenance – who is responsible?':
    'AWS',
  'Securing the access of physical AWS facilities – who is responsible?': 'AWS',
  'Application security testing – who is responsible?': 'customer',
  'Availability Zone management – who is responsible?': 'AWS',
  'Customer data access controls – who is responsible?': 'customer',
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
  "This service records API activity within your AWS account. It's helpful for security and compliance auditing but doesn't provide the same level of performance monitoring as Amazon CloudWatch.":
    'AWS CloudTrail',
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
  'This service gives you access control in your web and mobile application by meeting multiple security and compliance requirements, including requirements for highly regulated organizations such as healthcare companies and merchants.':
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
  'A service that lets you provision a logically isolated section of the AWS Cloud where you can launch your AWS resources in a virtual network that you define.':
    'Amazon VPC',
  'A service that gives you control over your virtual networking resources, including the selection of your own IP address range, the creation of subnets, and the configuration of route tables and network gateways.':
    'Amazon VPC',
  '(True/False): You can use both IPv4 and IPv6 in your VPC for secure access to resources and applications.':
    'true',
  'A virtual network that is logically isolated from other virtual networks.':
    'VPC',
  'A range of IP addresses in a VPC.': 'subnet',
  'This type of subnet has direct access to the internet.': 'public subnet',
  'This type of subnet does not have access to the internet.': 'private subnet',
  '(True/False): A VPC belongs to a single AWS Region that can span numerous availability zones with use of multiple subnets.':
    'true',
  "An isolated segment of your VPC with it's own range of IP addresses.":
    'subnet',
  'Belongs to one Availability Zone and requires a CIDR block.': 'subnet',
  '(True/False): A singular VPC subnet can belong to multiple Availability Zones.':
    'false',
  'When you create a VPC, you assign what type of CIDR block?': 'IPv4',
  '(True/False): Both IPv4 CIDR blocks and IPv6 CIDR blocks are available for your AWS VPC.':
    'true',
  '(True/False): You can change the IP address range after you create the VPC.':
    'false',
  'A static and public IPv4 address that is designed for dynamic cloud computing.':
    'Elastic IP address',
  '(True/False): Elastic VP addresses for your VPC are free of cost.': 'false',
  'A virtual network interface that you can attach or detatch from an instance in a VPC.':
    'elastic network interface',
  'Contains a set of rules that you can configure to direct network traffic from your subnet.':
    'route table',
  '(True/False): Each VPC subnet must be associated with at least, and at most, one route table.':
    'true',
  'It controls the routing for all subnets that are not explicitly associated with any other route table; the route table that is automatically assigned to your VPC.':
    'main route table',
  '(True/False): A VPC subnet can be associated with only one route table at a time, but you can associate multiple subnets with the same route table.':
    'true',
  'This controls traffic for a subnet and has a built-in local route (which cannot be deleted).':
    'route table',
  'A VPC is subdivided into...': 'subnets',
  'Belongs to one Region and requires a CIDR block.': 'VPC',
  'A scalable, redundant, and highly available VPC component that allows communication between instances in your VPC and the internet.':
    'internet gateway',
  'Provides a target in your VPC route tables for internet-routable traffic and performs network address translation for instances that were assigned public IPv4 addresses.':
    'internet gateway',
  'Connects your VPC route table to the internet.': 'internet gateway',
  'You attach this to your VPC subnet to make it public.': 'internet gateway',
  'Which component must be attached to a VPC to enable inbound internet access?':
    'internet gateway',
  NAT: 'network address translation',
  'Enables instances in a private subnet to connect to the internet or other AWS services, but prevents the internet from initiating a connection with those instances.':
    'NAT gateway',
  'Enables multiple AWS accounts to create their application resources—such as Amazon EC2 instances, Amazon Relational Database Service (Amazon RDS) databases, Amazon Redshift clusters, and AWS Lambda functions—into shared, centrally managed VPCs.':
    'VPC sharing',
  'Enables customers to share subnets with other AWS accounts in the same organization in AWS Organizations.':
    'VPC sharing',
  'Enables you to decouple accounts and networks. You have fewer, larger, centrally managed VPCs. Highly interconnected applications automatically benefit from this approach.':
    'VPC sharing',
  'A networking connection between two VPCs that enables you to route traffic between them privately.':
    'VPC peering connection',
  'A virtual device that enables you to privately connect your VPC to supported AWS services and VPC endpoint services that are powered by AWS PrivateLink.':
    'VPC endpoint',
  'Connects VPC resources to AWS regional services, such as Amazon S3 and DynamoDB.':
    'VPC endpoint',
  '(True/False): AWS recommends using a NAT gateway instead of a NAT instance because a NAT gateway is a managed service that provides better availability, higher bandwidth, and less administrative effort.':
    'true',
  'A service that provides private connectivity between VPCs and AWS services, simplifying the security of data shared with cloud-based applications by eliminating the exposure of data to the public internet.':
    'AWS PrivateLink',
  'A substitute for a VPC subnet NAT gateway.': 'NAT instance',
  "Of a VPC, contains 'Destinations' and 'Targets'.": 'route table',
  '(True/False): By default, instances that you launch into an Amazon VPC cannot communicate with your own remote network.':
    'true',
  'This allows you to create and manage a single connection from a central gateway into each VPC, on-premises data center, or remote office across your network; acts as a hub that controls how traffic is routed among all the connected networks.':
    'AWS Transit Gateway',
  'A network transit hub that you use to interconnect your virtual private clouds, providing a singular manageable connection; alternative to VPC peering.':
    'AWS Transit Gateway',
  'Enables instances in a private subnet to connect to the internet.':
    'NAT gateway',
  'Connects your VPC to supported AWS services.': 'VPC endpoint',
  'Connects your VPC to other VPCs; alternative to using an AWS Transit Gateway.':
    'VPC peering',
  'Allows multiple AWS accounts to create their application resources into shared, centrally-managed Amazon VPCs.':
    'VPC sharing',
  'Connects your VPC to a remote network by using a dedicated network connection.':
    'AWS Direct Connect',
  'Acts as a virtual firewall for your VPC instance, controlling inbound and outbound traffic.':
    'security groups',
  '(True/False): VPC security groups vs network ACLs – this one acts on the instance level.':
    'security groups',
  '(True/False): VPC security groups vs network ACLs – this one acts on the subnet level.':
    'network ACLs',
  'The two Amazon VPC firewall options that you can use to secure your VPC.':
    'network ACLs, security groups',
  'An optional layer of security for your Amazon VPC which acts as a firewall for controlling traffic in and out of one or more subnets.':
    'network ACLs',
  '(True/False): By default, security groups deny all inbound traffic and allow all outbound traffic.':
    'true',
  'This contains rules that control the inbound and outbound traffic of your VPC; if there are no inbound rules, no inbound traffic that originates from another host to your instance is allowed.':
    'security groups',
  "Contains 'allowed' rules for inbound traffic into your VPC.":
    'security groups',
  "Contains both 'allow' or 'deny' rules for inbound and outbound traffic of your VPC.":
    'network ACLs',
  'AWS WAF': 'AWS Web Application Firewall',
  '(True/False): Security groups can only be attached to EC2 instances.':
    'true',
  '(True/False): A VPC route table can be used for protecting resources running outside of AWS.':
    'false',
  'Filters traffic entering and leaving a VPC subnet.': 'network ACLs',
  'It is designed to give developers and businesses areliable and cost-effective way to route users to internet applications by translating names (like www.example.com) into the numeric IP addresses (like 192.0.2.1) that computers use to connect to each other.':
    'Amazon Route 53',
  'A highly available and scalable cloud Domain Name System (DNS) web service that connects user requests to infrastructure running in AWS — such as Amazon EC2 instances, Elastic Load Balancing load balancers, or Amazon S3 buckets — and can also be used to route users to infrastructure that is outside of AWS.':
    'Amazon Route 53',
  'A highly available and scalable cloud DNS web service that translates domain names into numeric IP addresses.':
    'Amazon Route 53',
  CDN: 'content delivery network',
  'A globally distributed system of caching servers which caches and delivers copies of commonly requested files (static content, such as Hypertext Markup Language, or HTML; Cascading Style Sheets, or CSS; JavaScript; and image files) that are hosted on the application origin server.':
    'CDN',
  'A fast CDN service that securely delivers data, videos, applications, and application programming interfaces (APIs) to customers globally with low latency and high transfer speeds.':
    'Amazon CloudFront',
  'A globally distributed system of caching servers that accelerates delivery of content.':
    'CDN',
  'A compute service which provides resizable virtual machines.': 'Amazon EC2',
  'Amazon EC2': 'Amazon Elastic Compute Cloud',
  'Amazon ECR': 'Amazon Elastic Container Registry',
  'Amazon ECS': 'Amazon Elastic Container Service',
  'Amazon EKS': 'Amazon Elastic Kubernetes Service',
  'A compute service which supports application availability by allowing you to define conditions that will automatically launch or terminate EC2 instances.':
    'Amazon EC2 Auto Scaling',
  'A compute service used to store and retrieve Docker images.': 'Amazon ECR',
  'A container orchestration service that supports Docker.': 'Amazon ECS',
  'A scalable, high-performance container management service that orchestrates the running of Docker containers, managing the fleet of nodes, or EC2 instances, that run your containers, removing the complexity of managing the infrastructure yourself.':
    'Amazon ECS',
  'A compute service which enables you to provision hybrid cloud without custom hardware.':
    'VMware Cloud on AWS',
  'An event-driven, serverless compute service. You pay only for the compute time that you use.':
    'AWS Lambda',
  'A zero-administration compute platform which enables you to run code without provisioning or managing servers.':
    'AWS Lambda',
  'A compute service which enables you to run managed Kubernetes on AWS.':
    'Amazon EKS',
  'A compute service which provides a simple-to-use way for building an application or website.':
    'Amazon Lightsail',
  'A compute service which provides a tool for running batch jobs at any scale.':
    'AWS Batch',
  'A compute service which provides a way to run containers that reduce the need for you to manage servers or clusters.':
    'AWS Fargate',
  'A compute service which provides a way to run select AWS services in your on-premises data center.':
    'AWS Outposts',
  'A compute service which provides a way to discover, deploy, and publish serverless applications.':
    'AWS Serverless Application Repository',
  'Enable you to run multiple workloads on a single operating system (OS). Containers spin up more quickly than virtual machines, thus offering responsiveness.':
    'Container service',
  'A compute PaaS that facilitates the quick deployment, scaling, and management of your web applications and services.':
    'AWS Elastic Beanstalk',
  'A PaaS which facilitates the quick deployment of applications that you create by providing all the application services that you need. AWS manages the OS, the application server, and the other infrastructure components so that you can focus on developing your application code.':
    'AWS Elastic Beanstalk',
  'An IaaS which provides virtual machines where you can host the same kinds of applications that you might run on a traditional on-premises server.':
    'Amazon EC2',
  "A virtual machine running on AWS's infrastructure.": 'EC2 instance',
  'An Amazon virtual machine in the cloud.': 'EC2 instance',
  'Refers to reason why most users run servers in the first place, which is to host running applications or process data—actions that require machine resources, including processing power (CPU) and memory (RAM).':
    'compute',
  'Refers to the fact that you can easily increase or decrease the number of servers you run to support an application automatically, and you can also increase or decrease the size of existing servers.':
    'elastic',
  '(True/False): With Amazon EC2, you can launch any number of instances of any size into any Availability Zone anywhere in the world.':
    'true',
  'A template that is used to create an EC2 instance (which is a virtual machine, or VM,that runs in the AWS Cloud). Contains a Windows or Linux OS and often has some software pre-installed.':
    'Amazon Machine Image',
  'You can obtain pre-configured AMI templates from third parties via this digital catalog of software solutions.':
    'AWS Marketplace',
  'Provides information that is required to launch an EC2 instance such as a template for the root volume (the OS), permissions control, and a block device mapping that specifies the volumes to attach to the instance (if any) when it is launched.':
    'Amazon Machine Image',
  'AWS offers a number of pre-built AMIs for launching your EC2 instances. These AMIs include many Linux and Windows options.':
    'Quick Start',
  'These EC2 AMIs are AMIs that you created.': 'My AMIs',
  'These EC2 AMIs are created by people all around the world. These AMIs are not checked by AWS, so use them at your own risk. Avoid using them in any production or corporate environment.':
    'Community AMIs',
  '(True/False): You can use different AMIs to launch different types of instances. For example, you can choose one AMI to launch an instance that will become a web server and another AMI to deploy an instance that will host an application server. You can also launch multiple instances from a single AMI.':
    'true',
  'After you choose the AMI for launching the EC2 instance, you must choose an...':
    'instance type',
  'Comprise varying combinations of CPU, memory, storage, and networking capacity for your EC2 instance.':
    'instance type',
  'Include general purpose, compute optimized, memory optimized, storage optimized, and accelerated computing instances.':
    'instance type',
  'A container for an IAM role.': 'instance profile',
  'The AWS resource that contains the code to be triggered, either on a scheduled basis or in response to an event.':
    'Lambda function',
  '(True/False): AWS Lambda only costs compute time – you are not charged when your code is not running.':
    'true',
  'An AWS service or a developer-created application that produces events that trigger an AWS Lambda function to run.':
    'event source',
  'AWS Lambda automatically monitors Lambda functions and logs all request information using...':
    'Amazon CloudWatch',
  'Contains rules for the runtime environment (i.e., a version of Python or Node.js) and an execution role (to grant IAM permissions).':
    'Lambda function',
  'The maximum memory allocation for a single Lambda function is...':
    '10240 MB',
  'The maximum run time for a Lambda function, per run, is...': '15 minutes',
  'Configurations include a trigger, the code, the memory amount, and optionally, environment variables and timeouts.':
    'Lambda function',
  'A ZIP archive that contains Lambda function code and dependencies.':
    'Lambda deployment package',
  '(True/False): AWS Lambda does not limit the amount of compute resources that you can use to run and store functions.':
    'false',
  '(True/False): There is no additional charge for AWS Elastic Beanstalk. You pay for the AWS resources (i.e., EC2 instances or S3 buckets) that power the application, not the deployment.':
    'true',
  '(True/False): Elastic Beanstalk supports Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker.':
    'true',
  'A method of operating system virtualization that enables you to run an application and its dependencies in resource-isolated processes.':
    'containers',
  "Enables you to easily package an application's code, configurations, and dependencies into easy-to-use building blocks that deliver environmental consistency, operational efficiency, developer productivity, and version control.":
    'containers',
  'Share a virtualized operating system and run as resource-isolated processes; holds everything that the software needs to run, such as libraries, system tools, code, and the runtime.':
    'containers',
  '(True/False): Containers are smaller than virtual machines and provide infrastructure-agnostic environments.':
    'true',
  'A software platform that packages software (such as applications) into containers;  installed on each server that will host containers, providing simple commands that you can use to build, start, or stop containers.':
    'Docker',
  'A form of virtualization at the application layer that packages code and its dependencies together. This ensures that the application runs reliably regardless of the environment.':
    'containers',
  '(True/False): You can install a container runtime, such as Docker, on an EC2 instance and then run multiple containers on that instance.':
    'true',
  '(True/False): Containers are environmentally-agnostic, however, they consume more resources compared to virtual machines.':
    'false',
  'A fully managed container orchestration service that makes it easy to run, stop, and manage Docker containers on a cluster of EC2 instances.':
    'Amazon ECS',
  'A pre-configured template used to create new EC2 instances. It includes the operating system, application server, and applications required to launch an instance.':
    'Amazon Machine Image',
  'Containers are created from a template called an...': 'image',
  'If you want to manage the Amazon ECS cluster that runs the containers, you create an Amazon ECS cluster backed by...':
    'Amazon EC2',
  'If you do not want to manage the Amazon ECS cluster that runs the containers, you create an Amazon ECS cluster backed by...':
    'AWS Fargate',
  'Consists of a group of EC2 instances with each instance running an Amazon ECS container agent, managing one or more containers.':
    'ECS cluster',
  'An open source software that orchestrates multiple Docker hosts (nodes).':
    'Kubernetes',
  'A fully managed Docker container registry that makes it easy for developers to store, manage, and deploy Docker container images.':
    'Amazon ECR',
  'Enables you to run Kubernetes on AWS.': 'Amazon EKS',
  'Enables you to store, manage, and deploy your Docker containers.':
    'Amazon ECR',
  '(True/False): Containers can hold everything that an application needs to run.':
    'true',
  '(True/False): A single application can span multiple containers.': 'true',
  'Networking-only Amazon ECS clusters are powered by...': 'Amazon Fargate',
  'Automates container provisioning, networking, load distribution, and scaling.':
    'Kubernetes',
  'Limits on an account that can potentially be relaxed by submitting a support ticket and providing justification for the request.':
    'soft limits',
  'Limits on an acount that cannot be increased.': 'hard limits',
  'Refers to the process of optimizing the resource allocation to balance cost and performance, ensuring neither over-provisioning nor under-provisioning.':
    'rightsizing',
  'Changing the size and type of the EC2 instance based on resource utilization.':
    'rightsizing',
  'The service that you use to pay your AWS bill, monitor your usage, and budget your costs.':
    'AWS Billing and Cost Management',
  'You can activate your Cost Allocation tags via which console?':
    'AWS Billing and Cost Management',
  'The interface which lets you view the status of your month-to-date AWS expenditure, identify the services that account for the majority of your overall expenditure, and understand at a high level how costs are trending.':
    'AWS Billing Dashboard',
  'A graph on the AWS Billing Dashboard which shows how much you spent last month, the estimated costs of your AWS usage for the month to date, and a forecast for how much you are likely to spend this month.':
    'Spend Summary',
  'A tool of the AWS Billing and Cost Management console in which you can visualize (through graphs & charts), understand, and manage your AWS costs and usage over time.':
    'Cost Explorer',
  'A cost management tool which includes a default report that visualizes your costs and usage for your top cost-incurring AWS services, a monthly running costs report giving you an overview of all your costs for the past 3 months, and a forecasted numbers for the coming month, with a corresponding confidence interval.':
    'Cost Explorer',
  '(True/False): You can use AWS Budgets to create notifications for when you go over your budget for the month, or when your estimated costs exceed or are expected to exceed your budget.':
    'true',
  'Amazon SNS': 'Amazon Simple Notification Service',
  'Budget alerts can be sent via email or via...': 'Amazon SNS',
  'Metadata you can assign to your AWS resources (such as EC2 instances, S3 buckets, and more) that help you organize and track your costs.':
    'Cost Allocation Tags',
  'Enables detailed tracking of cloud costs by department and project':
    'Cost Allocation Tags',
  'Enables you to invoke an AWS Lambda function when an Amazon EC2 instance enters the "stopping" state.':
    'Amazon EventBridge',
  'A service that extends the capabilities of Amazon CloudWatch Events, providing a more powerful and flexible event-driven architecture solution.':
    'Amazon EventBridge',
  'This AWS service supports governance, compliance, and risk auditing of AWS accounts.':
    'AWS CloudTrail',
  'List the six pillars of the AWS Well-Architected Framework in alphabetical order.':
    'cost efficiency, operational excellence, performance efficiency, reliability, security, sustainability',
  'Of the AWS Well-Architected Framework, which principle of the Security pillar does AWS CloudTrail implement?':
    'traceability',
  'A continuous security monitoring service designed to help you detect and respond to malicious activity and unauthorized behavior in your AWS accounts and workloads.':
    'Amazon GuardDuty',
  'This service uses machine learning algorithms to detect anomalies and potential threats based on activity patterns within your AWS environment.':
    'Amazon GuardDuty',
  "A threat detection service that continuously monitors your company's AWS accounts, workloads, and services (such as Amazon S3 buckets) for malicious activity and unauthorized behavior.":
    'Amazon GuardDuty',
  'This AWS service supports authentication to mobile and web applications.':
    'Amazon Cognito',
  "Temporary storage that is added to your Amazon EC2 instance; 'ephemeral storage.'":
    'instance store',
  'Amazon EBS': 'Amazon Elastic Block Store',
  'Any data storage device that retains data after power to that device is shut off; non-volatile storage.':
    'persistent storage',
  'Enables you to create individual storage volumes and attach them to an Amazon EC2 instance; each volume is automatically replicated within its Availability Zone to protect you from component failure.':
    'Amazon EBS',
  'Designed to provide detachable block-level storage (which is like an external hard drive) for your Amazon EC2 instances.':
    'Amazon EBS',
  'A backup of an Amazon EBS volume.': 'snapshot',
  'A block storage provided by AWS designed to be used with Amazon EC2 instances; the data is stored in fixed-sized blocks, which can be managed and accessed individually.':
    'Amazon EBS',
  'A distinct location within an AWS region that is isolated from failures in other zones.':
    'Availability Zone',
  '(True/False): When you want to change one character in a 1GB object storage file (like S3), the entire file must be updated.':
    'true',
  '(True/False): When you want to change one character in a 1GB block storage (like EBS), the entire file must be updated.':
    'false',
  'A durable, block-level storage device that you can attach to a single EC2 instance.':
    'Amazon EBS volume',
  'Off-instance storage that persists independently from the life of an instance.':
    'Amazon EBS volume',
  'Amazon S3 stores data as objects within resources that are called...':
    'buckets',
  'A logical container for an S3 object.': 'bucket',
  'Amazon S3 refers to files as...': 'objects',
  'Snapshots of EBS volumes are stored in...': 'Amazon S3',
  'Amazon S3': 'Amazon Simple Storage Service',
  'What type of storage is Amazon S3?': 'object storage',
  'What type of storage is Amazon EBS?': 'block storage',
  'What type of storage is Amazon EFS?': 'file storage',
  '(True/False): S3 can handle an almost unlimited amount of data, scaling up and down automatically to accommodate varying amounts of data without any user intervention. Whether you need a few megabytes or petabytes of data, S3 can handle the load.':
    'true',
  'Refers to the ability of a storage system to ensure that data is not lost or corrupted over time. For example, Amazon S3 offers 99.99999999999%...':
    'durability',
  '99.99999999999% durability, meaning that if you store 10,000,000 objects in S3, you can expect to lose a single object once every 10,000 years.':
    '11 9s',
  'A managed cloud storage solution that is designed to scale seamlessly and provide 11 9s of durability.':
    'Amazon S3',
  '(True/False): You can have multiple S3 buckets with the same name.': 'false',
  'Amazon S3 object size limit (not bucket limit).': '5 TB',
  '(True/False): By default, data in Amazon S3 is stored redundantly across multiple facilities and multiples devices in each facility.':
    'true',
  '(True/False): The data you store in Amazon S3 is not associated with any particular server, and you do not need to manage any infrastructure yourself. You can also put as many objects into Amazon S3 as you want.':
    'true',
  '(True/False): You are limited 10 TB of storage per S3 bucket.': 'false',
  '(True/False): You can access Amazon S3 through the console, AWS CLI, or AWS SDK. You can also access the data in your bucket directly by using REST-based endpoints.':
    'true',
  '(True/False): Amazon S3 bucket names must be globally unique and Domain Name Server (DNS)-compliant.':
    'true',
  'You can access Amazon S3 at any time from anywhere through a...': 'URL',
  'Amazon EFS': 'Amazon Elastic File System',
  '(True/False): You can write, read, and delete objects in your S3 bucket via RESTful API calls.':
    'true',
  'Amazon EFS vs Amazon S3 – this one is mounted as a file system to EC2 instances, allowing for traditional file system operations.':
    'Amazon EFS',
  'Amazon EFS vs Amazon S3 – this one is accessed via APIs, typically HTTP/HTTPS.':
    'Amazon S3',
  'Amazon EFS vs Amazon S3 – this one is ideal for storing unstructured data, backups, media files, data lakes, and static website content.':
    'Amazon S3',
  'Amazon EFS vs Amazon S3 – this one is ideal for shared file storage, home directories, and applications requiring a file system interface.':
    'Amazon EFS',
  'Provides a file system interface and file system access semantics, allowing it to be mounted by multiple EC2 instances.':
    'Amazon EFS',
  'Provides simple, scalable, elastic file storage for use with AWS services and on-premises resources. It offers a simple interface that enables you to create and configure file systems quickly and easily.':
    'Amazon EFS',
  'A service that implements a shared file system that uses the Network File System, allowing multiple virtual machine access at the same time.':
    'Amazon EFS',
  '(True/False): Thousands of Amazon EC2 instances can access an Amazon EFS file system at the same time, and Amazon EFS is designed to provide consistent performance to each Amazon EC2 instance.':
    'true',
  '(True/False): You must pay an initial setup cost to use Amazon EFS.':
    'false',
  'Allows you to create a file system, mount the file system on an Amazon EC2 instance, and then read and write data to and from your file system.':
    'Amazon EFS',
  'Designed for long-term data archiving with significantly lower costs but slower retrieval times, making it ideal for storing data that is rarely accessed but needs to be retained for extended periods.':
    'Amazon S3 Glacier',
  'Any object (such as a photo, video, file, or document) that you store in Amazon S3 Glacier.':
    'archive',
  'It is a base unit of storage in Amazon S3 Glacier. Has its own unique ID and it can also have a description.':
    'archive',
  'A container for storing Amazon S3 Glacier archives.': 'vault',
  'Determine who can and cannot access the data that is stored in an Amazon S3 Glacier vault; also contains what operations users can and cannot perform.':
    'vault access policy',
  'The highest cost S3 Glacier data retrieval. Available within 1-5 minutes.':
    'expedited',
  'The medium cost S3 Glacier data retrieval. Available within 3-5 hours.':
    'standard',
  'The lowest cost S3 Glacier data retrieval. Available within 5-12 hours.':
    'bulk',
  'A data archiving service that is designed for security, durability (11 9s), and an extremely low cost.':
    'Amazon S3 Glacier',
  'The three options for accessing & retrieving S3 Glacier Archives, from fastest to slowest (most expensive to cheapest).':
    'expedited, standard, bulk',
  'A service that allows organizations to create and manage catalogs of IT services that are approved for use on AWS; ensures that only compliant, approved services and resources are used, thereby aiding in meeting compliance requirements.':
    'AWS Service Catalog',
  'A service that allows you to define and manage infrastructure as code, but it does not provide the cataloging, governance, and compliance features of AWS Service Catalog.':
    'AWS CloudFormation',
  'A monitoring and observability service designed to provide actionable insights into AWS resources and applications running on AWS and on-premises.':
    'Amazon CloudWatch',
  "This service can monitor and provide information about CPU utilization of a company's Amazon EC2 instances.":
    'Amazon CloudWatch',
  "A tool that's specifically designed for monitoring and observing resource utilization via collecting logs, metrics, and events from various resources including EC2 instances. You can track and create alarms to trigger notifications, or automated actions, when resources reach certain thresholds.":
    'Amazon CloudWatch',
  'This AWS service allows you to define and provision AWS infrastructure as code.':
    'AWS CloudFormation',
  'The key AWS service that enables a company to treat infrastructure as code with templates that allow you to define and manage infrastructure in a way that is versioned, tested, and easily integrated into CI/CD pipelines.':
    'Amazon CloudFormation',
  'This AWS service is designed for single digit millisecond performance in regard to database queries.':
    'Amazon DynamoDB',
  'Allows the AWS user to proactively detect when an instance or account might be compromised or if there are threats from attacks.':
    'Amazon GuardDuty',
  'This AWS Support plan provides the full set of AWS Trusted Advisor checks at the lowest cost.':
    'AWS Business Support',
  'AWS solution: Scaling, fault tolerance, and availability are managed by you.':
    'unmanaged',
  'AWS solution: Scaling, fault tolerance, and availability are typically built into the service.':
    'managed',
  'Is Amazon EC2 a managed or unmanaged solution?': 'unmanaged',
  'A managed service that sets up and operates a relational database in the cloud.':
    'Amazon RDS',
  'A web service that makes it easy to set up, operate, and scale a relational database in the cloud.':
    'Amazon RDS',
  'Amazon RDS': 'Amazon Relational Database Service',
  '(True/False): Amazon RDS is an AWS unmanaged service.': 'false',
  'An isolated database environment that can contain multiple user-created databases.':
    'database instance',
  'List the six databases that Amazon RDS supports (alphabetical order):':
    'Amazon Aurora, MariaDB, Microsoft SQL Server, MySQL, Oracle, PostgreSQL',
  '(True/False): Do not use Amazon RDS with massive read/write rates (i.e., 150,000 writes per second).':
    'true',
  '(True/False): Use Amazon RDS for simple GET or PUT requests and queries.':
    'false',
  'This service is a good choice for complex database transactions or complex queries, a medium to high query or write rate (i.e., 30,000 writes or reads per second), and when no more than a single worker node or shard is needed.':
    'Amazon RDS',
  'This service is a good choice for high performance, low latency database transactions compatible with MySQL or PostgreSQL.':
    'Amazon Aurora',
  '(True/False): When a relational database management system (RDBMS) customization is needed, Amazon RDS is a good choice.':
    'false',
  '(True/False): With Amazon RDS, you can provision multiple database instances to handle peak loads.':
    'true',
  'Automated backups, patching, scaling, and monitoring, are all available for Aurora because it is managed by...':
    'Amazon RDS',
  'When operating system access or application features are not supported by AWS database services, configure the database on...':
    'Amazon EC2',
  'A fast and flexible NoSQL database service for all applications that need consistent, single-digit millisecond latency at any scale.':
    'Amazon DynamoDB',
  'This database service replicates your tables automatically across your choice of AWS Regions, storing all data on solid state drives (SSDs), and supports document and key-value store models.':
    'Amazon DynamoDB',
  '(True/False): Amazon DynamoDB has no limits on table size or throughput.':
    'true',
  'A fast, fully managed data warehouse that makes it simple and cost-effective to analyze all your data by using standard SQL and your existing business intelligence (BI) tools.':
    'Amazon Redshift',
  'By using standard SQL and your existing business intelligence (BI) tools, allows you to manage and analyze a simple and cost-effective data warehouse.':
    'Amazon Redshift',
  'Enables you to run complex analytic queries against petabytes of structured data by using sophisticated query optimization, columnar storage on high-performance local disks, and massively parallel data processing.':
    'Amazon Redshift',
  'A MySQL and PostgreSQL compatible relational database that is built for the cloud.':
    'Amazon Aurora',
  'This AWS service distributes incoming application or network traffic across multiple targets in one or more availability zones.':
    'Elastic Load Balancing',
  'An AWS service that distributes incoming application or network traffic across multiple targets — such as Amazon Elastic Compute Cloud (Amazon EC2) instances, containers, internet protocol (IP) addresses, and Lambda functions — in a single Availability Zone or across multiple Availability Zones.':
    'Elastic Load Balancing',
  'The three types of load balancers (alphabetical).':
    'application, classic, network',
  'Accepts incoming traffic from clients (via listeners) and routes requests to its registered targets (such as EC2 instances) in one or more Availability Zones; can also perform health checks, which are used to monitor the health of the registered targets.':
    'load balancer',
  'This type of load balancer routes traffic to targets based on content of request and provides optimized load balancing of HTTP and HTTPS traffic.':
    'application load balancer',
  'This type of load balancer routes traffic to targets based on IP protocol data and provides load balancing of TCP, UDP, and TLS traffic where extreme performance is required.':
    'network load balancer',
  'This type of load balancer routes TCP and UDP traffic to targets based on IP data.':
    'network load balancer',
  'This type of load balancer distributes incoming application traffic across multiple targets, such as EC2 instances, to increase the availability of the application.':
    'application load balancer',
  'This type of load balancer provides load balancing across multiple EC2 instances and operates at both the application level and network transport level. It supports load balancing of applications that use HTTP, HTTPS, TCP, and SSL.':
    'classic load balancer',
  '(True/False): AWS recommends that you use a dedicated Application Load Balancer or Network Load Balancer, not a Classic Load Balancer.':
    'true',
  '(Of a load balancer), a process that checks for connection requests.':
    'listener',
  'This service enables you to retrieve statistics about data points for your Elastic Load Balancing balancers and targets, providing metrics to verify that your system is performing as expected.':
    'Amazon CloudWatch',
  'You can use access logs to capture detailed information about the requests that were made to your Elastic Load Balancing balancers and store them as log files in...':
    'Amazon S3',
  'This service captures detailed information (logs) about the calls that were made to the Elastic Load Balancing API.':
    'AWS CloudTrail',
  'An AWS service that helps you maintain application availability and enables you to automatically add or remove EC2 instances according to conditions you define.':
    'Amazon EC2 Auto Scaling',
  'A collection of EC2 instances that are treated as a logical grouping for the purposes of automatic scaling and management.':
    'Auto Scaling group',
  'With Amazon EC2 Auto Scaling, launching instances is referred to as scaling out, and terminating instances is referred to as...':
    'scaling in',
  '(True/False): One common configuration for implementing EC2 dynamic scaling is to create a CloudWatch alarm that is based on performance information for you EC2 instances or load balancer.':
    'true',
  'A separate service from Amazon EC2 Auto Scaling, this service monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest cost possible.':
    'AWS Auto Scaling',
  'These 3 services, when used together, optimize EC2 dynamic scaling.':
    'Amazon EC2 Auto Scaling, CloudWatch, Elastic Load Balancing',
  '(True/False): EC2 instances are serverless architecture.': 'false',
  'A cloud computing service that provides scalable computing capacity but does not fit into the serverless model where the management of the server infrastructure is abstracted away from the user.':
    'Amazon EC2',
  '(True/False): Amazon DynamoDB is a serverless, managed service.': 'true',
  "This AWS purchasing option optimizes the company's costs of serverless architecture, allowing the company to pay for resources up front.":
    'Compute Savings Plan',
  '(True/False): AWS Cloud operates on a pay-as-you-go business model – low upfront capital expenses but with higher variable expenses.':
    'true',
  'This Amazon S3 Glacier feature allows for a write-once, read-many (WORM) model to meet legal and compliance obligations.':
    'S3 Glacier Vault Lock',
  'The cheapest option among all the EC2 instances, it  gives you up to 90% discounts, but your application becomes interruptable.':
    'Spot Instances',
  'Spare EC2 capacity that is available at a significant discount compared to On-Demand Instances.':
    'Spot Instances',
  '(True/False): Amazon RDS with multiple Availability Zones provides high availability and fault tolerance.':
    'true',
  'The most secure way to store passwords on AWS.': 'AWS Secrets Manager',
  '(True/False): There are more AWS Regions than Availability Zones.': 'false',
  '(True/False): There are more edge locations than AWS Regions.': 'true',
  '(True/False): An edge location is an Availability Zone.': 'false',
  '(True/False): There are more AWS Regions than edge locations.': 'false',
  '(True/False): There are more Availability Zones than AWS Regions.': 'true',
  'Which AWS service provides DNS resolution?': 'Amazon Route 53',
  'A Content Delivery Network (CDN) that helps improve website performance and security by caching content closer to users.':
    'Amazon CloudFront',
  'Think of Amazon VPC as a bubble, inside the bubble is the VPC, and all of your AWS services are within that bubble. Outside of that bubble is the internet. To connect with the public internet you use this...':
    'internet gateway',
  "Having on-premise infrastructure and sending confidential data to AWS over private internet, you'd use this...":
    'AWS Direct Connect',
  'A dedicated network connection between your company and AWS that nobody else can use.':
    'AWS Direct Connect',
  'Refers to the ability to increase or decrease resources based on demand.':
    'scalability',
  'Refers to the uptime and resilience of AWS Services, important for reliability.':
    'availability',
  'Refers to the ability to scale resources in highly dynamic usage patterns.':
    'elasticity',
  'Refers to the speed and responsiveness of applications.': 'performance',
  'Refers to the ability to use AWS in many specific geographic areas around the world, important to comply with regulations.':
    'global footprint',
  '(True/False): Design workloads to fit on a single Amazon EC2 instance.':
    'false',
  'This tool estimates the cost before migrating to Cloud with the ability to project monthly AWS costs.':
    'AWS Pricing Calculator',
  'A fully managed file system service for Linux based workloads.':
    'Amazon EFS',
  'This configuration of AWS Storage Gateway gives you the ability to store files as objects in Amazon S3, using standard file protocols such as NFS (Network File System) and SMB (Server Message Block).':
    'File Gateway',
  'This AWS service can be used to provide root storage volumes for Amazon EC2 instances.':
    'Amazon EBS',
  'This element in the S3 bucket policy specifies the user, account, service, or other entity that is allowed or denied access to a resource.':
    'principal',
  'Allows you to tag your resources by department or project and then view costs attributed to the resources used by those groups.':
    'cost allocation tags',
  'A tool that lets you visualize, understand, and manage your AWS costs and usage over time.':
    'AWS Cost Explorer',
  'Use this service for full control over your database administration and instance.':
    'Amazon EC2',
  '(True/False): AWS provides full access to their data centers.': 'false',
  '(True/False): AWS is responsible for securing your applications.': 'false',
  '(True/False): Customers can request specialized hardware.': 'false',
  'Changing the account name & changing AWS support plans are two tasks that can only be performed by the AWS account...':
    'root user',
  '(True/False): A company can store virtually unlimited data in the Amazon S3 service.':
    'true',
  'Amazon S3 objects can range in size from a minimum 0 bytes to a maximum of...':
    '5 TB',
  'The largest object that can be uploaded into Amazon S3 in a single PUT is...':
    '5 GB',
  'Built by AWS solutions architects and partners to help you deploy popular technologies on AWS, based on AWS best practices for security and high availability.':
    'AWS Partner Solutions',
  'A resource that allows a new user on AWS to get help with deploying popular technologies based on AWS best practices, including architecture and deployment instructions.':
    'AWS Partner Solutions',
  "(True/False): With Amazon RDS, you can access the database instance's operating system in order to run scripts.":
    'false',
  'Reducing interdependencies between system components.': 'loose coupling',
  'Offers a set of best practice checks and recommendations across five categories: cost optimization, security, fault tolerance, performance, and service limits.':
    'AWS Trusted Advisor',
  'Provides a "low utilization Amazon EC2 instances" check, checking the Amazon EC2 instances that were running at any time during the last 14 days and alerts you if the daily CPU utilization was 10% or less and network I/O was 5 MB or less on 4 or more days.':
    'AWS Trusted Advisor',
  '(True/False): An Amazon VPC can include multiple edge locations.': 'false',
  '(True/False): An Amazon VPC can include multiple availability zones.':
    'true',
  '(True/False): An Amazon VPC can include multiple AWS regions.': 'false',
  '(True/False): An Amazon VPC can include multiple internet gateways.':
    'false',
  'This service allows customers to find and subscribe to third-party data sources to enrich their existing datasets with new insights.':
    'AWS Data Exchange',
  'A data warehouse service that is used to analyze data using standard SQL and existing Business Intelligency tools.':
    'Amazon Redshift',
  'A fully-managed AWS source control service that hosts secure Git-based repositories.':
    'AWS CodeCommit',
  'An AWS publisher/subscriber notification service that uses a push mechanism to publish messages to multiple subscribers.':
    'Amazon SNS',
  '(True/False): The best practice for managing AWS IAM access keys is to have customers rotate access keys regularly.':
    'true',
  'A company needs to break down the costs of applications running on different instances dedicated to specific departments. These allow a company to tag a department and run cost allocation reports.':
    'cost allocation tags',
  '(True/False): Configuring a firewall in front of resources is recommended to reduce the attack surface of your services which can mitigate some DDoS attacks.':
    'true',
  '(True/False): AWS Elastic Beanstalk is a compute service.': 'true',
  '(True/False): AWS Batch is a compute service.': 'true',
  '(True/False): Amazon EFS is a compute service.': 'false',
  '(True/False): AWS CloudTrail is a compute service.': 'false',
  'This type of credential is used for programmatic access to AWS resources from the AWS CLI or AWS API (directly or using the AWS SDK).':
    'access key',
  'Long-term credentials for an IAM user or the AWS account root user which can be used to sign programmatic requests to the AWS CLI or AWS API.':
    'access key',
  '(True/False): Dedicated hosts are very costly and should only be used when physical isolation of resources or host visibility is required.':
    'true',
  'The most efficient cloud architecture to address the growing workload of batch jobs on an Amazon EC2 instance is to run the batch workload in parallel across multiple...':
    'Amazon EC2 instances',
  'These are used to make programmatic calls to AWS from AWS APIs.':
    'access keys',
  'Enables access to your application by leveraging the same edge locations as CloudFront and routing connections across the AWS global network.':
    'AWS Global Accelerator',
  '(True/False): Amazon CloudFront assists with lowering latency and improving transfer speeds for global users.':
    'true',
  '(True/False): Configure a scheduled scaling policy for Amazon EC2 Auto Scaling in anticipation in an increase in application traffic at a future date and time when a sales event will take place, or for example, increased weekend activity.':
    'true',
  'This tool provides a visual console to visualize the steps in a workflow, helping to build and update applications quickly and monitor the status of each step in the process.':
    'AWS Step Functions',
  "'Perform operations as code' & 'Anticipate failure' are two design principles that align with this pillar of the AWS Well-Architected Framework.":
    'operational excellence',
  'An online tool that provides you real time guidance to help you provision your resources, such as needing to request an Amazon EC2 service limit increase.':
    'AWS Trusted Advisor',
  'An AWS auditing service that monitors API activity in your account. Whenever you perform any operation in the account this results in an API action and this information is recorded to create an audit trail.':
    'AWS CloudTrail',
  '(True/False): AWS Trusted Advisor is a service used to gather information about activity in an AWS account.':
    'false',
  '(True/False): AWS Fargate is a serverless service.': 'true',
  'This Amazon EC2 instance deployment option provides a physical server fully dedicated for your use, so you can help address corporate compliance requirements.':
    'Dedicated Host',
  'This AWS service allows you to extend your VPC into your on-premises data center for a truly consistent hybrid experience.':
    'AWS Outposts',
  'This cloud feature resolves the issue of underutilization as you can easily and automatically adjust the resource allocations for your compute resources based on actual utilization.':
    'elasticity',
  'Which AWS feature can be used to launch a pre-configured Amazon EC2 instance?':
    'AMI',
  'Your go-to, central resource for AWS security and compliance documents.':
    'AWS Artifact',
  '(True/False): Two benefits of using a managed Amazon RDS service instead of a self-managed database on EC2 is that with a managed Amazon RDS service you get automatic backups and automatic software patching.':
    'true',
  'Amazon RDS Multi-AZ deployment is a good example of what pillar of the AWS Well-Architected Framework?':
    'reliability',
  '(True/False): Amazon CloudWatch provides recommendations on how to optimize performance for AWS services.':
    'false',
  '(True/False): AWS Trusted Advisor provides recommendations on how to optimize performance for AWS services.':
    'true',
  'With this cloud model, the cloud provider runs and manages the servers, networking, and storage, while the user manages the data and applications.':
    'PaaS',
  'With this cloud model, the cloud service provider provides networking, storage, servers, and other building blocks for cloud computing, while the user manages the operating systems, runtime, data, and business applications.':
    'IaaS',
  'This cloud model allows the user to create, deploy, manage, and maintain their own applications while the cloud service provider still manages the underlying infrastructure.':
    'PaaS',
  'With this cloud model, the cloud service provider runs and manages the computing infrastructure, applications, data, runtime, and operating system, while the user interacts with the application through mobile or web browser.':
    'SaaS',
  'AWS provides packages that enable accessing AWS in a variety of popular programming languages, making it easy to use AWS in existing applications.':
    'SDKs',
  'A web-based planning tool that can be used to create estimates for AWS use cases.':
    'AWS Pricing Calculator',
  'Cloud service providers like AWS can pass savings to their customers by aggregating usage from hundreds of thousands of customers in the cloud. This benefit is called...':
    'economies of scale',
  '(True/False): With cloud computing, a company stops guessing how much capacity it will need over time and starts scaling up and down (elasticity) as needed with only a few minutes notice.':
    'true',
  'A company needs a compute service that will allow the developers to run their code without managing or provisioning servers. Which AWS compute service best meets this requirement?':
    'AWS Lambda',
  'A CDN platform that securely delivers video, data, and applications to customers globally with low latency and high transfer speeds.':
    'Amazon CloudFront',
  'AWS data centers designed to deliver services with the lowest latency possible.':
    'edge locations',
  'These AWS data centers are closer to users than regions or availability zones, often in major cities, so responses can be fast.':
    'edge locations',
  'This AWS service has a consolidated billing feature that can be used to consolidate billing and payment for multiple AWS accounts.':
    'AWS Organizations',
  'Offers central control over the maximum available permissions for all accounts in AWS Organizations.':
    'SCPs',
  'AWS Key Management Service (KMS) integrates with this AWS service, which logs all key usage.':
    'AWS CloudTrail',
  'This AWS service provides authentication, authorization, and user management for web and mobile apps, allowing users to sign in directly with a username and password, or through a third party such as Facebook, Amazon, Google, or Apple.':
    'Amazon Cognito',
  'A company is worried about distributed denial of service (DDoS) attacks and wants to be sure its applications are well protected should there be a DDoS attack. Which AWS solution can the company use to protect its web application against infrastructure attacks?':
    'AWS Shield',
  'Every bit in this IP address block is fixed, and none (zero) of the bits is flexible, which means 2^0 (or 1) IP address is available for the network. It represents a single IP address and a single host.':
    '/32',
  '(True/False): When a company stops and restarts an EC2 instance associated with an elastic IP address, the EC2 instance retains its IP address after restarting.':
    'true',
  'A fixed IP address that will not change when it starts or stops the EC2 instance for updates.':
    'Elastic IP address',
  'This service enables developers to run their code and set triggers for when the code executes without provisioning or managing servers.':
    'AWS Lambda',
  'This Amazon EC2 instance type is best suited for delivering high quality video and audio streams to customers around the world.':
    'compute optimized',
  'A logical grouping of instances (placement group) within a single availability zone; recommended for applications that need low network latency, high network throughput, or both.':
    'cluster',
  'A shared files system that multiple EC2 instances can access concurrently.':
    'Amazon EFS',
  'A persistent storage that can store images, videos, server logs, and database snapshots as objects 5TB or less.':
    'Amazon S3',
  '(True/False): With S3 Glacier standard retrieval, the data can be retrieved in three to five hours.':
    'true',
  '(True/False): You can store data in Amazon S3 standard storage and then create a life cycle policy to transition the data to Amazon S3 Glacier (if the data needs to be accessed very little later on).':
    'true',
  '(True/False): The load can be reduced on a RDS MySQL database instance by routing read queries from the applications to a read replica.':
    'true',
  'This database service can handle several millions of queries per second, providing a consistent, single-digit millisecond database solution at any scale.':
    'Amazon DynamoDB',
  'Which tool is most suited for a company that needs to build an advanced analytic platform that efficiently and constantly processes 300 TB of structured and unstructured historical and real-time data to gain insights and make decisions quickly?':
    'Amazon Redshift',
  'A fully managed relational database engine from AWS that has automatic failover and data backups by default, and can instantly recover from crashes within 60 seconds.':
    'Amazon Aurora',
  'A cloud-native service that can help identify ways to optimize its cloud infrastructure, improve security and performance, reduce costs, and monitor service quotas.':
    'AWS Trusted Advisor',
  'Which AWS Well-Architected Framework pillar supports development innovation and continuous improvement of processes and procedures?':
    'operational excellence',
  'Which AWS Well-Architected Framework pillar helps to anticipate failure and learn from all system failures?':
    'operational excellence',
  'Which AWS Well-Architected Framework pillar focuses on the ability to protect information, systems, and assets while delivering business value through risk assessment and mitigation strategies?':
    'security',
  'Which AWS Well-Architected Framework pillar includes the ability to use computing resources and maintain efficiency as demand changes and technologies evolve?':
    'performance efficiency',
  'Which AWS Well-Architected Framework pillar focuses on the long-term environmental, economic, and societal impact of business activities?':
    'sustainability',
  'Which AWS Well-Architected Framework pillar focuses on proper functionality throughout a lifecycle?':
    'reliability',
  'Which AWS Well-Architected Framework pillar helps users to deploy their technologies and/or services in the cloud so they can focus on rapid development and deployment?':
    'performance efficiency',
  'Which AWS Well-Architected Framework pillar helps users analyze and attribute usage (through a consumption model) to easily measure the return on investment (ROI) of adopting the cloud?':
    'cost optimization',
  'These capture detailed information about the calls made to an elastic load balancing application: what was requested, when the visitor made the request, and the source IP address the request came from.':
    'CloudTrail logs',
  'A systems analyst wants to monitor the CPU utilization rate for the EC2 instances and get notified when the CPU utilization is greater than 60% for five minutes. What can the analyst implement to measure this metric to know when this threshold is breached?':
    'Amazon CloudWatch alarm',
  'The ability to automatically acquire resources as needed and release resources when no longer needed.':
    'elasticity',
  'Using Amazon EC2 auto scaling to adjust scaling of EC2 instances, automatically adding or removing EC2 instances according to conditions the business defines, is known as what ability?':
    'elasticity',
  'Which Amazon EC2 auto scaling option should a company use if periods of peak traffic to the company website are predictable?':
    'scheduled scaling',
  'This perspective in the AWS Cloud Adoption Framework (CAF) explains the processes, roles, and policies necessary to align IT strategy with business goals. Data handling is a key component in this perspective.':
    'governance',
  'Which AWS Cloud Adoption Framework (CAF) perspective focuses on organizing an inventory of data products in a data catalog?':
    'governance',
  'List the 6 AWS Cloud Adoption Framework (CAF) perspectives (in alphabetical order):':
    'business, governance, operations, people, platform, security',
  'Which AWS Support Plan runs production workload at the lowest cost?':
    'Business',
  '(True/False): The Basic AWS Support Plan is suitable for companies running production workloads.':
    'false',
  '(True/False): The Developer AWS Support Plan is suitable for companies running production workloads.':
    'false',
  'List the 5 AWS Support Plans from least support to most support:':
    'Basic, Developer, Business, EOR, Enterprise',
  'This AWS service provides automatic monitoring for threats to AWS workloads.':
    'Amazon GuardDuty',
  'This AWS service provides automatic provisioning of AWS resources.':
    'AWS CloudFormation',
  'Which VPC component can a company use to set up a virtual firewall at the Amazon EC2 instance level?':
    'security groups',
  'This VPC component provides network security at the subnet level.':
    'Network ACLs',
  'This determines where network traffic is directed within the VPC.':
    'route table',
  'This enables internet access in private subnets.': 'NAT gateway',
  '(True/False): When a subnet contains an IGW (internet gateway), it is a public subnet.':
    'true',
  "Which security feature or AWS service must be provisioned in the developer's account to allow them to interact with AWS by using the AWS CLI?":
    'access key',
  'This AWS service allows the AWS customer to block users in certain countries from accessing its website.':
    'AWS WAF',
  'This provides a firewall at the application level.': 'AWS WAF',
  '(True/False): S3 Glacier Deep Archive allows options for immediate file retrieval.':
    'false',
  '(True/False): S3 Glacier Flexible Retrieval takes anywhere from minutes to 12 hours for file retrieval.':
    'true',
  'A company using Amazon S3 to store files for rare access but immediate retrieval, would use this S3 storage class as the most cost-effective option.':
    'S3 Standard Infrequent Access',
  '(True/False): AWS Direct Connect provides underlying cables for a dedicated (private), secure network connection between on-premises and AWS. It takes at least 1 month for installation.':
    'true',
  "This provides a secure network connection from on-premises to the AWS cloud via public internet. Can be integrated without any hardware on AWS's end.":
    'AWS Site to Site VPN',
  'This AWS service provides AWS Service Organization Control (SOC) reports.':
    'AWS Artifact',
  'This is a secure self-service portal that provides on-demand access to all AWS compliance reports.':
    'AWS Artifact',
  'This AWS service records and evaluates configuration changes on almost all AWS services, as well as providing remediation actions on AWS resources.':
    'AWS Config',
  'This AWS service can migrate data between AWS storage services.':
    'AWS DataSync',
  '(True/False): A cost-effective benefit of using AWS cloud is that users can trade fixed expenses for variable expenses.':
    'true',
  '(True/False): The only 2 AWS Support plans that provide access to an AWS technical account manager (TAM) are the AWS Enterprise On-Ramp Support and the AWS Enterprise Support.':
    'true',
  'Provides examples of AWS Cloud solution designs.': 'AWS Architecture Center',
  'This feature of Amazon RDS provides the ability to automatically create a primary database instance and to synchronously replicate data to an instance in another Availability Zone.':
    'Multi-AZ deployment',
  'Which AWS service should a company use to check for IAM access keys that have not been rotated recently?':
    'AWS Trusted Advisor',
  'Which AWS sercurity resource controls network traffic between EC2 instances?':
    'security groups',
  'Acts as a virtual firewall for your EC2 instances, controlling inbound and outbound traffic at the instance level.':
    'security groups',
  'Which AWS service or feature can a user configure to limit network access at the subnet level?':
    'Network ACLs',
  'This managed AWS service uses machine learning and pattern recognition to identify and protect sensitive data.':
    'Amazon Macie',
  'A cloud-based hardware security module service that enables you to easily generate and use your own encryption keys on the cloud.':
    'AWS CloudHSM',
  'Use this AWS resource to find, buy, and immediately launch third-party software solutions.':
    'AWS Marketplace',
  'Use this AWS service to perform a one-time migration of a large dataset with millions of files from an on-premises data center to the AWS Cloud.':
    'AWS DataSync',
  'This is a fully managed AWS service designed specifically for migrating large data sets into and out of AWS.':
    'AWS DataSync',
  'This AWS service uses machine learning to convert text into audible speech.':
    'Amazon Polly',
  'This AWS service uses machine learning to convert speech to text.':
    'Amazon Transcribe',
  'This AWS service uses machine learning to perform analysis on images and videos.':
    'Amazon Rekognition',
  'This AWS service extracts text and data from scanned documents.':
    'Amazon Textract',
  '(True/False): AWS VPN provides dedicated network connectivity over private internet.':
    'false',
  'This AWS service provides dashboards and charts to analyze insights from business data / business intelligence.':
    'Amazon QuickSight',
  'This AWS service provides temprorary federated security credentials used to access AWS resources.':
    'AWS Simple Token Service',
  'When you use IAM roles, behind the scenes, this AWS security credential service is utilized.':
    'AWS Simple Token Service',
  'These distribute incoming traffic across multiple targets, such as EC2 instances.':
    'load balancers',
  '(True/False): An Elastic Load Balancing (ELB) load balancer can span multiple AWS regions.':
    'false',
  'This AWS service can convert video files and audio files to a format that will play on smartphones.':
    'Amazon Elastic Transcoder',
  'This AWS service converts media files from one format to another (i.e., an mp4 into an mp3).':
    'Amazon Elastic Transcoder',
  'This AWS service allows you to store database credentials and automatically rotate user passwords periodically.':
    'AWS Secrets Manager',
  '(True/False): Having the ability to set up infrastructure for new applications in minutes is because of the increase speed and agility of cloud computing.':
    'true',
  'This AWS service provides a managed NFS file system that you can use with your AWS compute resources.':
    'Amazon EFS',
  'This provides you access to your AWS storage from on-premises.':
    'AWS Storage Gateway',
  'This AWS service is designed to assess your on-premises environment to gather detailed information about your applications, servers, and dependencies. This information is crucial for planning migration to the AWS Cloud.':
    'AWS Application Discovery Service',
  "(True/False): Securing the virtualization layer is the customer's responsibility.":
    'false',
  "(True/False): Patching the Amazon RDS operating system is the customer's responsibility.":
    'false',
  'This AWS service allows you to create copies of your AWS architecture environments via templates.':
    'AWS CloudFormation',
  "(True/False): Patching the guest operating system with the latest security patches is the customer's responsibility.":
    'true',
  'This is the most costliest Amazon EC2 purchasing option.':
    'On Demand Instances',
  'The cheapest Amazon EC2 purchasing option.': 'Spot Instances',
  'This AWS resource provides information about the status of AWS services (i.e., is a service down in a particular region).':
    'AWS Health Dashboard',
  'This AWS service provides comprehensive information to report ongoing optimization and security.':
    'AWS Trusted Advisor',
  'This AWS service provides recommendations based off 6 category checks – cost optimization, performance, security, fault tolerance, operational excellence, and service limits.':
    'AWS Trusted Advisor',
  'This AWS service provides the ability to encrypt data in transit.':
    'AWS Certificate Manager',
  'This AWS service specifically provides the ability to encrypt data at rest.':
    'AWS KMS',
  'This AWS tool allows you to track AWS costs against defined thresholds.':
    'AWS Budgets',
  'A cost-effective option to run Amazon EC2 instances for short periods which can be interrupted.':
    'Spot Instances',
  'This AWS service provides access to the AWS DDoS Response Team (DRT) to help mitigate DDoS events.':
    'AWS Shield Advanced',
};

export default AWSTERMS;
