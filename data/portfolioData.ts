export interface SkillItem {
  name: string;
  level: 'Learning' | 'Familiar' | 'Intermediate' | 'Proficient';
  category: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  logoText: string;
  description: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDescription: string;
  problem: string;
  requirements: string[];
  technologies: string[];
  topologyType: 'enterprise' | 'branch' | 'homelab' | 'monitoring' | 'aws' | 'security';
  objectives: string[];
  configurationSnippet: string;
  troubleshootingSteps: string[];
  results: string[];
  lessonsLearned: string[];
  githubUrl?: string;
  docsUrl?: string;
  featured: boolean;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  duration: string;
  type: 'Internship' | 'Lab Project' | 'Leadership' | 'Workshop';
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  university: string;
  duration: string;
  location: string;
  coursework: string[];
  activities: string[];
}

export interface BlogItem {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  content: string;
}

export interface GithubRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  updated: string;
  url: string;
  topics: string[];
}

export interface AchievementItem {
  title: string;
  organization: string;
  year: string;
  description: string;
  proofUrl?: string;
  proofText?: string;
}

export const personalData = {
  name: "Irfan Fathan",
  fullTitle: "Network Engineer | Linux | Cloud | Network Security",
  headline: "Aspiring Network Engineer focused on designing, configuring, securing, and maintaining high-availability IT infrastructure.",
  bio: "Electronics and Communication Engineering graduate with a passionate focus on computer networking, Linux systems administration, cloud architecture, and network security. Experienced in building hands-on home labs, configuring Cisco routers and switches, implementing OSPF and VLAN segmentation, deploying AWS VPCs, and automating network diagnostics.",
  location: "Manjeri, Kerala, India",
  email: "irfanfathan.m@gmail.com",
  github: "https://github.com/irfanfathan",
  linkedin: "https://linkedin.com/in/irfanfathan",
  resumePdfUrl: "/resume.pdf",
  careerFocus: [
    "Network Engineering",
    "Cloud Networking (AWS)",
    "Linux Systems Administration",
    "Network Security & Firewalls",
    "Infrastructure Automation & Monitoring"
  ]
};

export const skillsData: { category: string; icon: string; items: SkillItem[] }[] = [
  {
    category: "Networking Fundamentals",
    icon: "Network",
    items: [
      { name: "TCP/IP & OSI Model", level: "Proficient", category: "Networking" },
      { name: "IPv4 Subnetting & VLSM", level: "Proficient", category: "Networking" },
      { name: "IPv6 Fundamentals", level: "Intermediate", category: "Networking" },
      { name: "VLANs & 802.1Q Trunking", level: "Proficient", category: "Networking" },
      { name: "Inter-VLAN Routing", level: "Proficient", category: "Networking" },
      { name: "Spanning Tree Protocol (STP/RSTP)", level: "Intermediate", category: "Networking" },
      { name: "OSPF Routing Protocol", level: "Intermediate", category: "Networking" },
      { name: "DHCP & DNS Architecture", level: "Proficient", category: "Networking" },
      { name: "NAT / PAT (Network Address Translation)", level: "Intermediate", category: "Networking" },
      { name: "Access Control Lists (ACLs)", level: "Intermediate", category: "Networking" },
      { name: "VPN Fundamentals (IPsec/OpenVPN)", level: "Familiar", category: "Networking" },
      { name: "Network Troubleshooting", level: "Proficient", category: "Networking" }
    ]
  },
  {
    category: "Cisco Technologies",
    icon: "Router",
    items: [
      { name: "Cisco IOS Command Line", level: "Proficient", category: "Cisco" },
      { name: "Cisco Switch Configuration", level: "Proficient", category: "Cisco" },
      { name: "Cisco Router Configuration", level: "Proficient", category: "Cisco" },
      { name: "Port Security & MAC Filtering", level: "Intermediate", category: "Cisco" },
      { name: "EtherChannel (LACP/PAgP)", level: "Intermediate", category: "Cisco" },
      { name: "Router-on-a-Stick", level: "Proficient", category: "Cisco" },
      { name: "IOS Backup & IOS Recovery", level: "Familiar", category: "Cisco" }
    ]
  },
  {
    category: "Linux Systems Administration",
    icon: "Terminal",
    items: [
      { name: "Linux CLI & Shell Utilities", level: "Proficient", category: "Linux" },
      { name: "Ubuntu Server Administration", level: "Proficient", category: "Linux" },
      { name: "Red Hat Enterprise Linux (RHEL)", level: "Intermediate", category: "Linux" },
      { name: "SSH Hardening & Key Management", level: "Proficient", category: "Linux" },
      { name: "User, Group & File Permissions", level: "Proficient", category: "Linux" },
      { name: "Networking CLI (ip, ss, netstat, ip route)", level: "Proficient", category: "Linux" },
      { name: "systemd Service Management", level: "Intermediate", category: "Linux" },
      { name: "Bash Scripting & Automation", level: "Intermediate", category: "Linux" }
    ]
  },
  {
    category: "Cloud Networking (AWS)",
    icon: "Cloud",
    items: [
      { name: "AWS VPC Architecture", level: "Intermediate", category: "Cloud" },
      { name: "Public & Private Subnets", level: "Intermediate", category: "Cloud" },
      { name: "Route Tables & Internet Gateways", level: "Intermediate", category: "Cloud" },
      { name: "NAT Gateways & Elastic IPs", level: "Intermediate", category: "Cloud" },
      { name: "Security Groups & Network ACLs", level: "Intermediate", category: "Cloud" },
      { name: "Amazon EC2 Deployment", level: "Intermediate", category: "Cloud" },
      { name: "IAM Security & Policies", level: "Familiar", category: "Cloud" }
    ]
  },
  {
    category: "Network Security & Monitoring",
    icon: "ShieldCheck",
    items: [
      { name: "Firewall Policy & State Enforcement", level: "Intermediate", category: "Security" },
      { name: "Network Segmentation & DMZ", level: "Intermediate", category: "Security" },
      { name: "Wireshark Packet Analysis", level: "Proficient", category: "Security" },
      { name: "Nmap Port & Vulnerability Scanning", level: "Intermediate", category: "Security" },
      { name: "SNMP & Network Observability", level: "Familiar", category: "Security" },
      { name: "Prometheus & Grafana Monitoring", level: "Familiar", category: "Security" }
    ]
  },
  {
    category: "Tools & Simulation Environments",
    icon: "Cpu",
    items: [
      { name: "Cisco Packet Tracer", level: "Proficient", category: "Tools" },
      { name: "Wireshark Packet Analyzer", level: "Proficient", category: "Tools" },
      { name: "GNS3 Network Emulator", level: "Intermediate", category: "Tools" },
      { name: "EVE-NG Emulated Virtual Environment", level: "Familiar", category: "Tools" },
      { name: "VirtualBox & VMware Workstation", level: "Proficient", category: "Tools" },
      { name: "Git & GitHub Version Control", level: "Intermediate", category: "Tools" }
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "ccna",
    title: "CCNA — Cisco Certified Network Associate",
    issuer: "Cisco Systems",
    date: "Expected Q4 2026",
    status: "In Progress",
    logoText: "CCNA",
    description: "Covers network fundamentals, IP connectivity, IP services, security fundamentals, automation, and Cisco IOS routing/switching."
  },
  {
    id: "aws-cp",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Earned 2025",
    credentialId: "AWS-CCP-987214",
    credentialUrl: "https://aws.amazon.com/verification",
    status: "Completed",
    logoText: "AWS",
    description: "Validates overall understanding of AWS Cloud platform, core infrastructure services, VPC networking, security concepts, and cloud architecture."
  },
  {
    id: "rhcsa",
    title: "RHCSA — Red Hat Certified System Administrator",
    issuer: "Red Hat",
    date: "Currently Learning",
    status: "In Progress",
    logoText: "RHEL",
    description: "Hands-on focus on core system administration skills required in Red Hat Enterprise Linux environments, service config, storage, and networking."
  },
  {
    id: "aws-saa",
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "Target 2027",
    status: "Planned",
    logoText: "AWS-SA",
    description: "Advanced cloud architecture certification focusing on high-availability, cost-optimized, secure, and fault-tolerant cloud network infrastructure."
  }
];

export const projectsData: ProjectItem[] = [
  {
    slug: "enterprise-network",
    title: "Enterprise Multi-VLAN Network with OSPF & NAT",
    category: "Network Engineering",
    shortDesc: "Simulated multi-department enterprise network with 802.1Q trunking, inter-VLAN routing, dynamic OSPF, and PAT internet translation.",
    fullDescription: "A comprehensive Cisco Packet Tracer / GNS3 network topology simulating a multi-story enterprise environment. It segregates corporate traffic into dedicated VLANs (Management, HR, Engineering, Guest) using 802.1Q trunking on core Cisco 3560 switches and Cisco 2911 routers. OSPF single-area dynamic routing handles internal subnets while NAT/PAT maps internal RFC 1918 private IPs to public ISP gateways.",
    problem: "Unsegmented flat networks suffer from high broadcast domain noise, lack of departmental access controls, and inability to safely expose guest devices to the internet.",
    requirements: [
      "Departmental isolation using IEEE 802.1Q VLAN tags",
      "Inter-VLAN routing via Layer 3 Switch / Router-on-a-Stick",
      "Dynamic routing using single-area OSPF (Area 0)",
      "Centralized DHCP server allocation for workstation subnets",
      "Pat-based NAT translation for external Internet access",
      "Inbound extended ACLs restricting Guest VLAN access to internal servers"
    ],
    technologies: ["Cisco IOS", "VLANs", "OSPF", "802.1Q", "Inter-VLAN Routing", "NAT/PAT", "ACLs", "DHCP"],
    topologyType: "enterprise",
    objectives: [
      "Minimize broadcast domains across 4 distinct departments",
      "Provide fault-tolerant OSPF routing between internal core switches and edge routers",
      "Secure internal HR and Server VLANs from unauthorized Guest VLAN access"
    ],
    configurationSnippet: `! Core Router OSPF & NAT Configuration
Router(config)# interface GigabitEthernet0/0.10
Router(config-subif)# encapsulation dot1Q 10
Router(config-subif)# ip address 10.0.10.1 255.255.255.0
Router(config-subif)# ip nat inside
!
Router(config)# interface GigabitEthernet0/0.20
Router(config-subif)# encapsulation dot1Q 20
Router(config-subif)# ip address 10.0.20.1 255.255.255.0
Router(config-subif)# ip nat inside
!
Router(config)# router ospf 1
Router(config-router)# router-id 1.1.1.1
Router(config-router)# network 10.0.0.0 0.255.255.255 area 0
Router(config-router)# passive-interface GigabitEthernet0/0.10
!
Router(config)# access-list 100 permit ip 10.0.0.0 0.255.255.255 any
Router(config)# ip nat inside source list 100 interface GigabitEthernet0/1 overload`,
    troubleshootingSteps: [
      "Diagnosed inter-VLAN routing failure: verified native VLAN mismatch on trunk ports using 'show interfaces trunk'",
      "Resolved OSPF neighbor adjacency issue: matched hello/dead interval timers across serial WAN links",
      "Tested PAT translation: confirmed active NAT translations using 'show ip nat translations'"
    ],
    results: [
      "Achieved 100% connectivity between subnets with sub-second failover",
      "Restricted Guest VLAN ping requests to internal servers using extended IP access lists",
      "Reduced broadcast overhead by 70% compared to legacy flat subnet layout"
    ],
    lessonsLearned: [
      "Always explicitly set native VLAN tags on 802.1Q trunks to prevent VLAN hopping attacks",
      "Passive interface configuration on user-facing switch ports is vital for OSPF security"
    ],
    githubUrl: "https://github.com/irfanfathan/cisco-ios-lab-scripts",
    docsUrl: "https://github.com/irfanfathan/cisco-ios-lab-scripts#enterprise-network",
    featured: true
  },
  {
    slug: "multi-site-network",
    title: "Multi-Site Branch Office Network Architecture",
    category: "WAN & Routing",
    shortDesc: "Interconnected multi-site corporate infrastructure featuring WAN serial connections, OSPF multi-area routing, EtherChannel bandwidth aggregation, and GRE IPsec VPN tunnels.",
    fullDescription: "Designed and emulated a HQ-to-Branch WAN topology in GNS3. Connects a primary headquarters site with two remote branch offices over emulated point-to-point leased lines. Implements EtherChannel (LACP) between switch stacks for link aggregation, OSPF multi-area for scalable routing updates, and site-to-site VPN tunnels for secure inter-branch data transfer.",
    problem: "Growing remote branch offices required secure, high-speed access to central HQ data center resources without exposing confidential traffic to public ISP routes.",
    requirements: [
      "Redundant point-to-point serial WAN links between HQ and Branch sites",
      "EtherChannel aggregation (2 Gbps throughput) on switch interconnects",
      "Multi-area OSPF routing (Area 0 backbone, Area 1 Branch A, Area 2 Branch B)",
      "Site-to-site GRE/IPsec encrypted tunnel between HQ edge and Branch A edge"
    ],
    technologies: ["Cisco IOS", "GNS3", "OSPF Multi-Area", "EtherChannel (LACP)", "GRE/IPsec VPN", "WAN Routing"],
    topologyType: "branch",
    objectives: [
      "Establish encrypted site-to-site communication between HQ and remote branches",
      "Provide automatic trunk link failover using Link Aggregation Control Protocol (LACP)",
      "Optimize routing table size using OSPF route summarization at Area Border Routers (ABRs)"
    ],
    configurationSnippet: `! HQ EtherChannel & LACP Configuration
HQ-Switch(config)# interface range GigabitEthernet0/1 - 2
HQ-Switch(config-if-range)# channel-group 1 mode active
HQ-Switch(config-if-range)# exit
HQ-Switch(config)# interface port-channel 1
HQ-Switch(config-if)# switchport mode trunk
HQ-Switch(config-if)# switchport trunk allowed vlan 10,20,30,99
!
! Site-to-Site Tunnel Configuration
HQ-Router(config)# interface Tunnel0
HQ-Router(config-if)# ip address 172.16.1.1 255.255.255.252
HQ-Router(config-if)# tunnel source GigabitEthernet0/1
HQ-Router(config-if)# tunnel destination 198.51.100.2`,
    troubleshootingSteps: [
      "Identified EtherChannel negotiation failure: resolved speed/duplex mismatch across member ports",
      "Fixed OSPF route propagation: verified ABR area configuration and subnet masks using 'show ip ospf neighbor'"
    ],
    results: [
      "Successfully created zero-downtime dual-link EtherChannel trunking",
      "Encrypted inter-branch traffic over public WAN connections with sub-50ms latency impact"
    ],
    lessonsLearned: [
      "All physical interfaces in an EtherChannel bundle must share identical port modes, trunking allowed VLANs, and speed settings.",
      "OSPF route summarization at ABR boundaries significantly reduces CPU utilization on branch routers."
    ],
    githubUrl: "https://github.com/irfanfathan/cisco-ios-lab-scripts",
    featured: true
  },
  {
    slug: "home-lab-infra",
    title: "High-Availability Enterprise Home Network Lab",
    category: "Home Lab & Linux",
    shortDesc: "Physical and virtualized home laboratory built with managed gigabit switches, Linux Ubuntu Server instances, local Unbound DNS, VLANs, and SSH key security.",
    fullDescription: "A self-hosted home infrastructure lab built to gain hands-on experience with production-grade networking and systems administration. Utilizes a managed switch, mini-PC hypervisor running Proxmox VE, Ubuntu Linux VMs for DNS/DHCP (Pi-hole/Unbound), reverse proxying (Nginx), and automated network backups.",
    problem: "Consumer-grade home routers offer zero VLAN segmentation, no traffic isolation for smart IoT devices, and lack proper local DNS resolution for homelab services.",
    requirements: [
      "Isolation of home IoT devices into a restricted VLAN away from personal computers",
      "Self-hosted local DNS server with ad-blocking and custom local domain resolution (.lab)",
      "Strict SSH public-key authentication with password login disabled on all Linux nodes",
      "Dynamic DNS update integration and reverse proxying with automatic SSL certificate renewal"
    ],
    technologies: ["Linux (Ubuntu/Debian)", "Managed Switch", "VLANs", "Pi-hole / Unbound DNS", "Nginx", "Docker", "SSH"],
    topologyType: "homelab",
    objectives: [
      "Segment home traffic into 3 zones: Trusted LAN, Isolated IoT, and Server DMZ",
      "Enforce zero-trust local network access policies via Linux iptables and UFW firewalls",
      "Deploy self-hosted monitoring and local containerized microservices"
    ],
    configurationSnippet: `# Linux Netplan Network Configuration (/etc/netplan/01-netcfg.yaml)
network:
  version: 2
  renderer: networkd
  ethernets:
    eth0:
      dhcp4: no
  vlans:
    vlan10:
      id: 10
      link: eth0
      addresses: [192.168.10.5/24]
      routes:
        - to: default
          via: 192.168.10.1
      nameservers:
        addresses: [127.0.0.1, 1.1.1.1]`,
    troubleshootingSteps: [
      "Debugged Netplan configuration error: corrected YAML indentation syntax using 'netplan try'",
      "Resolved DNS loop issue: adjusted Unbound recursive forwarding settings to prevent DNS query loops"
    ],
    results: [
      "Achieved sub-10ms local DNS resolution for 50+ network clients",
      "Completely isolated 15+ IoT devices from internal file servers and management interfaces"
    ],
    lessonsLearned: [
      "Configuration management via git repository for network scripts makes lab recovery instantaneous.",
      "Public key SSH with custom port bindings drastically reduces brute-force SSH attempts."
    ],
    githubUrl: "https://github.com/irfanfathan/linux-net-admin-scripts",
    featured: true
  },
  {
    slug: "network-monitoring",
    title: "Infrastructure Observability & Monitoring Stack",
    category: "Network Monitoring",
    shortDesc: "Network telemetry and metric monitoring platform leveraging SNMP polling, Prometheus exporter agents, and real-time Grafana dashboards.",
    fullDescription: "Implemented a full-stack network monitoring lab on Ubuntu Linux to track real-time bandwidth consumption, packet drops, CPU/memory utilization, and uptime across simulated network switches and routers using Simple Network Management Protocol (SNMP v2c/v3) and Prometheus exporters.",
    problem: "Lack of centralized visibility into bandwidth spikes, switch port errors, and unexpected device reboots leads to reactive troubleshooting rather than proactive maintenance.",
    requirements: [
      "Centralized SNMP metric collection from network interfaces",
      "Prometheus time-series database storage for network metrics",
      "Custom Grafana dashboard visualizing throughput, error counts, and ping latency",
      "Alertmanager rules triggering notifications on link down events or high CPU load"
    ],
    technologies: ["Linux", "SNMP v2c/v3", "Prometheus", "SNMP Exporter", "Grafana", "Node Exporter", "Bash"],
    topologyType: "monitoring",
    objectives: [
      "Gain real-time visibility into network interface bandwidth utilization",
      "Configure automated alerting for packet loss exceeding 5% or link outages",
      "Analyze historical traffic patterns to plan future capacity"
    ],
    configurationSnippet: `# prometheus.yml SNMP Target Configuration
scrape_configs:
  - job_name: 'snmp_switches'
    static_configs:
      - targets:
        - 192.168.10.1   # Core Router
        - 192.168.10.2   # Switch 01
    metrics_path: /snmp
    params:
      module: [if_mib]
    relabel_configs:
      - source_labels: [__address__]
        target_label: __param_target
      - source_labels: [__param_target]
        target_label: instance
      - target_label: __address__
        replacement: 127.0.0.1:9116 # SNMP Exporter address`,
    troubleshootingSteps: [
      "Fixed SNMP polling timeout: added community string IP acl permission on Cisco switches",
      "Corrected MIB loading issue: installed snmp-mibs-downloader package on Linux host"
    ],
    results: [
      "Created a live NOC-style dashboard displaying live bandwidth graphs updated every 15s",
      "Successfully alerted on simulated interface shutdown within 30 seconds"
    ],
    lessonsLearned: [
      "SNMP v3 with authPriv provides essential cryptographic protection compared to cleartext SNMP v2c.",
      "Proper metric retention policies in Prometheus prevent disk space exhaustion."
    ],
    githubUrl: "https://github.com/irfanfathan/linux-net-admin-scripts",
    featured: false
  },
  {
    slug: "aws-vpc-architecture",
    title: "AWS Multi-Tier Secure VPC Cloud Network",
    category: "Cloud Networking",
    shortDesc: "Highly resilient Amazon Web Services VPC infrastructure featuring multi-AZ public and private subnets, Internet Gateway, NAT Gateways, Security Groups, and NACLs.",
    fullDescription: "Architected a production-ready AWS Virtual Private Cloud (VPC) across two Availability Zones (us-east-1a and us-east-1b). Features public subnets for public-facing Application Load Balancers and NAT Gateways, while keeping EC2 application servers and database instances securely isolated within private subnets with no direct ingress from the public Internet.",
    problem: "Directly placing backend servers in public cloud subnets exposes sensitive databases and internal compute workloads to public internet scan probes and cyber threats.",
    requirements: [
      "Dual Availability Zone deployment for high availability",
      "Public subnets with Internet Gateway routing for public traffic",
      "Private subnets routing outbound traffic via redundant NAT Gateways",
      "Stateful Security Groups and Stateless Network ACLs for defense-in-depth"
    ],
    technologies: ["AWS VPC", "Subnets", "Route Tables", "Internet Gateway", "NAT Gateway", "Security Groups", "NACLs", "EC2"],
    topologyType: "aws",
    objectives: [
      "Strict isolation of database tier subnets from public Internet routes",
      "Enable outbound internet access for private EC2 software updates via NAT Gateway",
      "Design granular Security Group rules allowing HTTP/HTTPS from ALB only"
    ],
    configurationSnippet: `# AWS CLI VPC Creation & Subnet Provisioning
aws ec2 create-vpc --cidr-block 10.50.0.0/16 --tag-specifications 'ResourceType=vpc,Tags=[{Key=Name,Value=Prod-VPC}]'

# Create Public Subnet in us-east-1a
aws ec2 create-subnet --vpc-id vpc-0a1b2c3d4e5f6g7h8 --cidr-block 10.50.1.0/24 --availability-zone us-east-1a --tag-specifications 'ResourceType=subnet,Tags=[{Key=Name,Value=Public-Subnet-1A}]'

# Create Private Subnet in us-east-1a
aws ec2 create-subnet --vpc-id vpc-0a1b2c3d4e5f6g7h8 --cidr-block 10.50.10.0/24 --availability-zone us-east-1a --tag-specifications 'ResourceType=subnet,Tags=[{Key=Name,Value=Private-Subnet-1A}]'`,
    troubleshootingSteps: [
      "Resolved private EC2 instance internet connectivity failure: added 0.0.0.0/0 route pointing to NAT Gateway in private route table",
      "Investigated SSH connection refusal: updated Security Group to permit inbound SSH only from admin bastion IP"
    ],
    results: [
      "Successfully built a zero-direct-access architecture for internal private EC2 nodes",
      "Verified seamless outbound patch management connectivity via NAT Gateway"
    ],
    lessonsLearned: [
      "Security Groups are stateful (response traffic automatically allowed), whereas NACLs are stateless and require explicit return rules.",
      "Multi-AZ deployment ensures system continuity even during AWS availability zone degradation."
    ],
    githubUrl: "https://github.com/irfanfathan/aws-vpc-terraform-module",
    featured: true
  },
  {
    slug: "network-security-lab",
    title: "Zero-Trust Firewall Segmentation & Traffic Security Lab",
    category: "Network Security",
    shortDesc: "Stateful firewall policy enforcement, SSH hardening, port security, VLAN access control lists, and Nmap traffic analysis security lab.",
    fullDescription: "A security-hardened networking lab demonstrating defense-in-depth principles. Features Cisco switch Port Security (limiting MAC addresses per port to prevent MAC flooding attacks), strict inbound/outbound Linux UFW/iptables rules, SSH key-based authentication with fail2ban protection, and Wireshark packet capture analysis.",
    problem: "Unsecured internal switch ports allow rogue devices to connect directly to the network and launch ARP spoofing or MAC address table exhaustion attacks.",
    requirements: [
      "Port Security enforcement on access switch interfaces (Sticky MAC, violation restrict)",
      "Strict host firewall rules permitting only required service ports (22, 80, 443)",
      "Automated IP ban trigger via fail2ban upon detecting repeated failed SSH login attempts",
      "Wireshark packet capture inspection verifying encrypted TLS and SSH payloads"
    ],
    technologies: ["Linux UFW / iptables", "Cisco Port Security", "Nmap", "Wireshark", "Fail2ban", "SSH Key Pair", "ACLs"],
    topologyType: "security",
    objectives: [
      "Mitigate rogue device connection attempts on physical switch ports",
      "Prevent brute-force SSH login attempts on Linux administrative servers",
      "Audit active network service ports using Nmap security scans"
    ],
    configurationSnippet: `! Cisco IOS Access Port Security Configuration
Switch(config)# interface FastEthernet0/5
Switch(config-if)# switchport mode access
Switch(config-if)# switchport port-security
Switch(config-if)# switchport port-security maximum 2
Switch(config-if)# switchport port-security mac-address sticky
Switch(config-if)# switchport port-security violation restrict
!
# Linux UFW Stateful Firewall Commands
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22/tcp comment 'SSH Management'
sudo ufw allow 80/tcp comment 'HTTP Web'
sudo ufw enable`,
    troubleshootingSteps: [
      "Fixed port security err-disable state: cleared sticky MAC table and re-enabled port using 'shutdown' / 'no shutdown'",
      "Validated Nmap stealth scan results: confirmed closed ports correctly respond with RST packets"
    ],
    results: [
      "Successfully blocked simulated unauthorized rogue MAC device connections within 1 packet transmission",
      "Reduced unauthorized brute-force SSH probe noise by 99% using fail2ban jail rules"
    ],
    lessonsLearned: [
      "Port Security with sticky MAC learning is the first line of physical defense in corporate access switches.",
      "Zero-trust means assuming internal network segments are as untrusted as external internet lines."
    ],
    githubUrl: "https://github.com/irfanfathan/linux-net-admin-scripts",
    featured: false
  }
];

export const experienceData: ExperienceItem[] = [
  {
    role: "Robotics and IoT Intern",
    organization: "Innoknowvex",
    location: "Bangalore, India",
    duration: "2024",
    type: "Internship",
    responsibilities: [
      "Designed and configured embedded system controllers using ESP32 and Arduino platforms for networked sensor deployments.",
      "Integrated multi-parameter sensor arrays (pH, TDS, turbidity, temperature) sending real-time telemetry over wireless networks.",
      "Assisted in configuring local gateway communications, MQTT broker endpoints, and network troubleshooting in field lab setups.",
      "Collaborated with hardware and software engineering teams to document network topology schematics and serial communications."
    ],
    technologies: ["ESP32", "Arduino", "Embedded Linux", "MQTT", "Wireless Networking", "Sensors", "Altium 365"],
    achievements: [
      "Successfully deployed a functional real-time telemetry node transmitting sensor metrics over Wi-Fi gateways.",
      "Co-authored technical hardware-to-network interface documentation for production prototypes."
    ]
  },
  {
    role: "Team Member — Robotics & Hardware Integration",
    organization: "Motridox Robotics",
    location: "Kerala, India",
    duration: "2023 - Present",
    type: "Leadership",
    responsibilities: [
      "Contributed to micro-controller network setup, intra-robot communication protocols, and wireless remote control links.",
      "Maintained version-controlled software and technical documentation repositories for state and national hackathon entries.",
      "Coordinated hardware component selection, power distribution schematics, and sensor bus communication lines."
    ],
    technologies: ["Robotics Protocols", "Embedded C++", "Wireless Control", "Git/GitHub", "Technical Writing"],
    achievements: [
      "Selected as State Level Finalist in WorldSkills India competition.",
      "Successfully competed in international hackathons including NASA Space Apps Challenge."
    ]
  },
  {
    role: "Hands-on Network Systems Administrator",
    organization: "Personal Engineering Home Lab",
    location: "Manjeri, India",
    duration: "2023 - Present",
    type: "Lab Project",
    responsibilities: [
      "Built and maintained a 24/7 self-hosted homelab environment with managed switches, Linux servers, and virtualized subnets.",
      "Configured local Unbound DNS servers, Pi-hole ad-blocking, Nginx reverse proxies, and local Git repositories.",
      "Executed regular Linux kernel updates, SSH security hardening, firewall configuration, and automated backup routines."
    ],
    technologies: ["Ubuntu Server", "Red Hat Linux", "Cisco IOS", "Docker", "Unbound DNS", "Nginx", "SSH", "Bash"],
    achievements: [
      "Maintained 99.9% uptime across self-hosted homelab DNS and monitoring microservices.",
      "Created dozens of reusable CLI bash scripts for network interface configuration and health checks."
    ]
  }
];

export const educationData: EducationItem = {
  degree: "Bachelor of Technology (B.Tech)",
  field: "Electronics and Communication Engineering",
  institution: "Eranad Knowledge City Technical Campus",
  university: "APJ Abdul Kalam Technological University",
  duration: "2021 — 2025",
  location: "Manjeri, Kerala, India",
  coursework: [
    "Computer Communication Networks",
    "Microprocessors & Microcontrollers",
    "Digital Signal Processing",
    "Wireless & Mobile Communication",
    "Information Theory & Coding",
    "Embedded Systems Design",
    "Control Systems Engineering"
  ],
  activities: [
    "Active participant in IEEE Student Branch activities",
    "Participated in IEDC Innovation Summit and technical pitch sessions",
    "Led technical documentation for student robotics team"
  ]
};

export const blogData: BlogItem[] = [
  {
    slug: "vlan-trunking-guide",
    title: "Demystifying VLANs, IEEE 802.1Q Trunking, and Inter-VLAN Routing",
    summary: "A practical guide explaining how Virtual LANs isolate broadcast traffic, how 802.1Q frame tagging works across switch trunks, and how to configure Router-on-a-Stick inter-VLAN routing.",
    date: "August 2026",
    readTime: "6 min read",
    category: "Networking",
    tags: ["VLAN", "Cisco", "802.1Q", "Switching", "CCNA"],
    content: `Virtual Local Area Networks (VLANs) are one of the most fundamental building blocks of modern network infrastructure. Without VLANs, all devices connected to an Ethernet switch reside in a single broadcast domain. Every ARP request or DHCP discovery packet is broadcasted to every single host, creating performance bottlenecks and severe security vulnerabilities.

### Why Do We Need VLANs?
In an unsegmented corporate network:
1. **Security Risk**: An intern in VLAN 1 can capture HR or Financial network traffic using simple packet sniffing tools like Wireshark.
2. **Broadcast Storms**: Excessive broadcast traffic consumes CPU cycles on end host NICs.
3. **Operational Complexity**: Moving an employee to a new department requires physical re-cabling.

### How IEEE 802.1Q Trunking Works
When Ethernet frames travel across a trunk link between two switches, standard Ethernet frames (802.3) do not contain VLAN identification. **IEEE 802.1Q** solves this by inserting a 4-byte header into the Ethernet frame:
- **TPID (0x8100)**: Tag Protocol Identifier
- **VLAN ID (VID)**: 12-bit field supporting 4,094 distinct VLANs

### Configuring Router-on-a-Stick Inter-VLAN Routing
Here is how to configure a Cisco 2911 router to route traffic between VLAN 10 (Sales) and VLAN 20 (Engineering):

\`\`\`text
! Switch Port Configuration
Switch(config)# interface GigabitEthernet0/1
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk allowed vlan 10,20

! Router Sub-interface Configuration
Router(config)# interface GigabitEthernet0/0.10
Router(config-subif)# encapsulation dot1Q 10
Router(config-subif)# ip address 192.168.10.1 255.255.255.0

Router(config)# interface GigabitEthernet0/0.20
Router(config-subif)# encapsulation dot1Q 20
Router(config-subif)# ip address 192.168.20.1 255.255.255.0
\`\`\`

### Verification Commands
Always verify your trunk status and sub-interface states using Cisco IOS CLI:
- \`show interfaces trunk\`
- \`show ip route\`
- \`show vlan brief\`

By using VLANs and sub-interfaces, you isolate broadcast domains while maintaining controlled routing pathways enforced by router ACLs.`
  },
  {
    slug: "ospf-configuration-lab",
    title: "Single-Area OSPF Configuration & Troubleshooting on Cisco IOS",
    summary: "Step-by-step walkthrough of Open Shortest Path First (OSPF) Area 0 configuration, neighbor adjacency state verification, cost metric calculations, and troubleshooting common adjacency issues.",
    date: "July 2026",
    readTime: "8 min read",
    category: "Cisco",
    tags: ["OSPF", "Routing", "Cisco IOS", "CCNA", "Troubleshooting"],
    content: `Open Shortest Path First (OSPF) is an open-standard link-state routing protocol widely deployed in enterprise networks. It uses Dijkstra's Shortest Path First (SPF) algorithm to calculate the loop-free shortest path to every known network prefix.

### OSPF Metric Calculation
OSPF calculates interface cost using reference bandwidth:
\`\`\`
Cost = Reference Bandwidth (Default 100 Mbps) / Interface Bandwidth
\`\`\`
- FastEthernet (100 Mbps) = Cost 1
- GigabitEthernet (1000 Mbps) = Cost 1 (Needs adjustment via \`auto-cost reference-bandwidth\`)

### Single-Area OSPF Configuration
To configure OSPF Process ID 1 in Area 0:

\`\`\`text
Router(config)# router ospf 1
Router(config-router)# router-id 1.1.1.1
Router(config-router)# auto-cost reference-bandwidth 1000
Router(config-router)# network 10.0.0.0 0.0.0.255 area 0
Router(config-router)# network 172.16.1.0 0.0.0.3 area 0
Router(config-router)# passive-interface GigabitEthernet0/0
\`\`\`

### Common OSPF Adjacency Troubleshooting Steps
When OSPF neighbor relationships fail to reach **FULL** state, check:
1. **Subnet Mask Mismatch**: Both router interfaces must be in the same IP subnet.
2. **Hello/Dead Timer Mismatch**: Default timers on point-to-point links are 10s Hello / 40s Dead.
3. **Area ID Mismatch**: Connected interfaces must belong to the exact same Area number.
4. **Passive Interface**: Ensure the interconnecting interface is not marked passive!

\`\`\`text
# Useful Debugging Commands:
show ip ospf neighbor
show ip ospf interface brief
show ip route ospf
debug ip ospf adj
\`\`\`

Configuring passive interfaces on host-facing LAN ports prevents rouge OSPF neighbor relationships while still advertising the LAN subnet.`
  },
  {
    slug: "linux-networking-commands",
    title: "15 Essential Linux CLI Utilities Every Network Engineer Must Master",
    summary: "A practical reference guide covering essential Linux CLI utilities for network diagnostics, socket inspection, packet capture, and routing table manipulation.",
    date: "June 2026",
    readTime: "7 min read",
    category: "Linux",
    tags: ["Linux", "CLI", "SysAdmin", "Networking", "Bash"],
    content: `As network infrastructures increasingly rely on Linux-based software appliances, cloud instances, and SDN controllers, proficiency with Linux networking CLI utilities is essential. Here are 15 indispensable tools:

### 1. \`ip\` (Modern Replacement for ifconfig & route)
- View IP addresses: \`ip addr show\`
- View routing table: \`ip route show\`
- Add static route: \`sudo ip route add 10.20.0.0/16 via 192.168.1.1\`

### 2. \`ss\` (Socket Statistics - Replacement for netstat)
- Display listening TCP sockets with PIDs: \`ss -tulpn\`
- View active established TCP connections: \`ss -ta\`

### 3. \`tcpdump\` (CLI Packet Analyzer)
- Capture packets on eth0 for port 80: \`sudo tcpdump -i eth0 port 80 -nn -v\`
- Save capture to PCAP file: \`sudo tcpdump -i eth0 -w dump.pcap\`

### 4. \`nmap\` (Network Exploration & Security Auditing)
- Ping scan subnet: \`nmap -sn 192.168.1.0/24\`
- Service & OS detection: \`nmap -sV -O 192.168.1.50\`

### 5. \`traceroute\` / \`mtr\` (Path Diagnostic)
- Interactive network diagnostic: \`mtr 8.8.8.8\`

### Summary Command Cheat Sheet
\`\`\`bash
# Check DNS lookup:
dig +short github.com A

# Test TCP port connectivity:
nc -zv 192.168.1.1 22

# Inspect local ARP cache:
ip neighbor show
\`\`\`

Mastering these commands allows network engineers to rapidly isolate network issues directly from the Linux command line.`
  },
  {
    slug: "aws-vpc-guide",
    title: "Building a High-Availability Multi-AZ AWS VPC from Scratch",
    summary: "Architecting a production-grade Amazon VPC spanning multiple availability zones with public and private subnets, NAT gateways, route tables, and security groups.",
    date: "May 2026",
    readTime: "9 min read",
    category: "Cloud",
    tags: ["AWS", "VPC", "Cloud Networking", "Security", "Architecture"],
    content: `Amazon Virtual Private Cloud (VPC) provides complete isolation for your cloud infrastructure. Designing a robust VPC requires understanding CIDR allocation, subnet placement, and traffic routing rules.

### Design Architecture
We build a 10.100.0.0/16 VPC across two Availability Zones:
- **Public Subnet 1A** (10.100.1.0/24) & **Public Subnet 1B** (10.100.2.0/24)
- **Private App Subnet 1A** (10.100.10.0/24) & **Private App Subnet 1B** (10.100.20.0/24)
- **Private DB Subnet 1A** (10.100.100.0/24) & **Private DB Subnet 1B** (10.100.200.0/24)

### Step 1: Internet Gateway vs. NAT Gateway
- **Internet Gateway (IGW)**: Horizontally scaled, highly available VPC component that allows communication between public subnets and the Internet.
- **NAT Gateway**: Placed in public subnets to allow private subnet EC2 instances to initiate outbound IPv4 connections (e.g. \`apt update\`) while preventing external hosts from initiating connections directly to private servers.

### Step 2: AWS Security Groups vs. NACLs
| Feature | Security Group | Network ACL (NACL) |
|---|---|---|
| Level | EC2 Instance Level | Subnet Level |
| Rule Type | Allow rules only | Allow & Deny rules |
| State | Stateful | Stateless |
| Processing | Evaluates all rules | Evaluates rules in numerical order |

Building a multi-AZ VPC ensures that even if an entire AWS datacenter experiences an outage, your application remains online.`
  }
];

export const githubReposData: GithubRepo[] = [
  {
    name: "cisco-ios-lab-scripts",
    description: "Production-ready Cisco IOS configurations, OSPF templates, VLAN scripts, and subnetting tools.",
    language: "Cisco IOS / CLI",
    stars: 12,
    updated: "August 2026",
    url: "https://github.com/irfanfathan/cisco-ios-lab-scripts",
    topics: ["cisco", "ccna", "ospf", "vlan", "networking"]
  },
  {
    name: "aws-vpc-terraform-module",
    description: "Modular Infrastructure as Code (IaC) Terraform template for deploying multi-AZ secure AWS VPCs.",
    language: "HCL / Terraform",
    stars: 8,
    updated: "July 2026",
    url: "https://github.com/irfanfathan/aws-vpc-terraform-module",
    topics: ["aws", "vpc", "terraform", "cloud-networking"]
  },
  {
    name: "linux-net-admin-scripts",
    description: "Collection of Bash shell scripts for Linux network interface configuration, iptables rules, and monitoring.",
    language: "Shell Script",
    stars: 15,
    updated: "August 2026",
    url: "https://github.com/irfanfathan/linux-net-admin-scripts",
    topics: ["linux", "bash", "netplan", "iptables", "sysadmin"]
  },
  {
    name: "home-lab-docker-stack",
    description: "Docker Compose stack for home network lab services including Pi-hole DNS, Unbound, Nginx, and Grafana.",
    language: "Docker / YAML",
    stars: 19,
    updated: "June 2026",
    url: "https://github.com/irfanfathan/home-lab-docker-stack",
    topics: ["homelab", "docker", "dns", "grafana", "nginx"]
  }
];

export const achievementsData: AchievementItem[] = [
  {
    title: "WorldSkills India — Mobile App Development",
    organization: "WorldSkills India / NSDC",
    year: "2024",
    description: "State Level Finalist demonstrating high-speed software development, logic building, and user experience design under rigorous time constraints.",
    proofUrl: "https://drive.google.com/file/d/1Cx-54yd4pVRGY3p5IaJYtJ5g-FrTGAne/view",
    proofText: "View Certificate"
  },
  {
    title: "NASA Space Apps Global Hackathon",
    organization: "NASA",
    year: "2023, 2024, 2025",
    description: "Global participant collaborating in multi-disciplinary engineering teams to solve complex real-world space and technology challenges.",
    proofUrl: "https://drive.google.com/file/d/11A6B-WlbObFjh_8kpF5nzszmuDmNXE0z/view",
    proofText: "View Proof"
  },
  {
    title: "IEEE Young Engineers Summit (YES) 2025",
    organization: "IEEE Kerala Section / NIT Calicut",
    year: "2025",
    description: "Attended the flagship IEEE Kerala Section summit exploring advancements in communications, smart systems, and engineering leadership.",
    proofUrl: "https://drive.google.com/file/d/12JkNxeM5E4w3ufQDOkpiXvUIei8CNM3I/view",
    proofText: "View Certificate"
  },
  {
    title: "IEDC Summit 2023",
    organization: "College of Engineering Trivandrum (CET)",
    year: "2023",
    description: "Engaged in Kerala's largest student entrepreneurship and technical innovation summit, interacting with industry technology leaders."
  }
];
