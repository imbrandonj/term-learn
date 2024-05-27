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
  //   'Services: Amazon VPC, Elastic Beanstalk, Auto Scaling, AWS CloudFormation, AWS IAM':
  //     'free',
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
};

export default AWSTERMS;
