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
  'AWS: Network ACLs, IAM, and Secruity groups': 'security',
  'AWS: Elastic Load Balancing and Amazon VPC': 'networking',
  'AWS: AMI and Amazon EC2 instances': 'compute',
  'AWS: Amazon EBS, EFS, S3, and RDS': 'storage',
  'Funds that a company uses to acquire, upgrade, and maintain physical assets, such as property, industrial buildings, or equipment; capex':
    'capital expenses',
  'A cost that you can easily alter or avoid by using cloud computing.':
    'variable exepense',
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
  'A basic computer security concept:a user or system must first prove their identity.':
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
    'trusted advisor',
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
  'A communications service that enables you to meet, chat, and place business calls inside and outside your organization, all using a single application.It is a pay-as-you-go communications service with no upfront fees, commitments, or long-term contracts.':
    'Amazon Chime',
  'An online tool that analyzes your AWS environment and provides real-time guidance and recommendations to help you provision your resources by following AWS best practices.':
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
};

export default AWSTERMS;
