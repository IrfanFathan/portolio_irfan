'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Shield, Router, Server, Cpu, Laptop, Maximize2, X, Activity, CheckCircle2, Cloud } from 'lucide-react';
import anime from 'animejs';
import { prefersReducedMotion } from '@/lib/gsap';

interface TopologyViewerProps {
  type?: 'enterprise' | 'branch' | 'homelab' | 'monitoring' | 'aws' | 'security';
  title?: string;
  className?: string;
}

export default function TopologyViewer({ type = 'enterprise', title = 'Network Topology View', className = '' }: TopologyViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedNode, setSelectedNode] = useState<{ id: string; label: string; role: string; details: string; status: string } | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || prefersReducedMotion()) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Anime.js SVG Path line drawing
          anime({
            targets: svgRef.current?.querySelectorAll('.network-path'),
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1400,
            delay: anime.stagger(150),
          });
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(svgRef.current);
    return () => observer.disconnect();
  }, [type]);

  const getNodes = () => {
    switch (type) {
      case 'aws':
        return [
          { id: 'igw', label: 'Internet Gateway', role: 'IGW', details: '10.50.0.0/16 VPC Access', x: 250, y: 40, icon: Globe, status: 'Online' },
          { id: 'nat', label: 'NAT Gateway', role: 'Gateway', details: 'Public Subnet 10.50.1.0/24', x: 120, y: 130, icon: Cloud, status: 'Active' },
          { id: 'alb', label: 'Application LB', role: 'Load Balancer', details: 'Public Subnet 10.50.2.0/24', x: 380, y: 130, icon: Shield, status: 'Active' },
          { id: 'ec2_pub', label: 'Bastion EC2', role: 'Compute', details: 'IP: 10.50.1.50 (SSH Port 22)', x: 120, y: 220, icon: Server, status: 'Secured' },
          { id: 'ec2_priv', label: 'Private App EC2', role: 'Compute', details: 'IP: 10.50.10.15 (Private Subnet)', x: 380, y: 220, icon: Server, status: 'Secured' },
          { id: 'rds', label: 'Private RDS DB', role: 'Database', details: 'IP: 10.50.100.20 (Isolated DB)', x: 250, y: 310, icon: Cpu, status: 'Protected' },
        ];
      case 'homelab':
        return [
          { id: 'wan', label: 'ISP Modem', role: 'Public WAN', details: 'Public IP DHCP WAN', x: 250, y: 40, icon: Globe, status: 'Connected' },
          { id: 'fw', label: 'Linux Router/FW', role: 'Edge Router', details: 'IP: 192.168.1.1 (NAT/Firewall)', x: 250, y: 130, icon: Shield, status: 'Enforced' },
          { id: 'switch', label: 'Managed Switch', role: 'L2 Switch', details: 'VLAN 10, 20, 30 Trunking', x: 250, y: 220, icon: Cpu, status: 'Active' },
          { id: 'dns', label: 'Pi-hole / Unbound', role: 'DNS Server', details: 'IP: 192.168.10.5 (VLAN 10)', x: 100, y: 310, icon: Server, status: 'Running' },
          { id: 'proxmox', label: 'Proxmox Hypervisor', role: 'VM Host', details: 'IP: 192.168.10.10 (VLAN 10)', x: 250, y: 310, icon: Server, status: 'Operational' },
          { id: 'iot', label: 'IoT Network Zone', role: 'Isolated Devices', details: 'VLAN 30 (192.168.30.0/24)', x: 400, y: 310, icon: Laptop, status: 'Isolated' },
        ];
      default: // enterprise / branch / security
        return [
          { id: 'internet', label: 'Internet Gateway', role: 'ISP Edge', details: 'IP: 198.51.100.1 / PAT Gateway', x: 250, y: 40, icon: Globe, status: 'Active' },
          { id: 'firewall', label: 'ASA / Edge FW', role: 'Stateful Firewall', details: 'Inbound ACL 100 & Security Levels', x: 250, y: 120, icon: Shield, status: 'Active' },
          { id: 'router', label: 'Core Router (OSPF)', role: 'Layer 3 Router', details: 'OSPF Area 0 | Router-ID 1.1.1.1', x: 250, y: 200, icon: Router, status: 'Adjacency FULL' },
          { id: 'coreswitch', label: 'Core L3 Switch', role: 'Distribution', details: 'Inter-VLAN Routing (802.1Q)', x: 250, y: 280, icon: Cpu, status: 'STP Root' },
          { id: 'vlan10', label: 'Engineering (VLAN 10)', role: 'Subnet 10.0.10.0/24', details: 'Port Security Enabled', x: 100, y: 360, icon: Laptop, status: 'Active' },
          { id: 'vlan20', label: 'Corporate HR (VLAN 20)', role: 'Subnet 10.0.20.0/24', details: 'Restricted ACL Access', x: 250, y: 360, icon: Server, status: 'Secured' },
          { id: 'vlan30', label: 'Guest Wi-Fi (VLAN 30)', role: 'Subnet 10.0.30.0/24', details: 'Isolated Internet-Only', x: 400, y: 360, icon: Laptop, status: 'Isolated' },
        ];
    }
  };

  const getLinks = () => {
    switch (type) {
      case 'aws':
        return [
          { from: 'igw', to: 'nat' },
          { from: 'igw', to: 'alb' },
          { from: 'nat', to: 'ec2_pub' },
          { from: 'alb', to: 'ec2_priv' },
          { from: 'ec2_pub', to: 'ec2_priv' },
          { from: 'ec2_priv', to: 'rds' },
        ];
      case 'homelab':
        return [
          { from: 'wan', to: 'fw' },
          { from: 'fw', to: 'switch' },
          { from: 'switch', to: 'dns' },
          { from: 'switch', to: 'proxmox' },
          { from: 'switch', to: 'iot' },
        ];
      default:
        return [
          { from: 'internet', to: 'firewall' },
          { from: 'firewall', to: 'router' },
          { from: 'router', to: 'coreswitch' },
          { from: 'coreswitch', to: 'vlan10' },
          { from: 'coreswitch', to: 'vlan20' },
          { from: 'coreswitch', to: 'vlan30' },
        ];
    }
  };

  const nodes = getNodes();
  const links = getLinks();

  const getNodeById = (id: string) => nodes.find(n => n.id === id);

  const DiagramContent = () => (
    <div className="relative w-full overflow-x-auto p-4 flex flex-col items-center">
      <div className="relative w-[500px] h-[430px] bg-slate-950/80 dark:bg-slate-900/90 rounded-xl border border-cyan-500/30 p-4 shadow-2xl network-grid">
        {/* Connection SVG Lines & Animated Packets */}
        <svg ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {links.map((link, idx) => {
            const source = getNodeById(link.from);
            const target = getNodeById(link.to);
            if (!source || !target) return null;

            const pathD = `M ${source.x} ${source.y} L ${target.x} ${target.y}`;

            return (
              <g key={idx}>
                {/* SVG Connection Path drawn with Anime.js */}
                <path
                  id={`link-path-${type}-${idx}`}
                  className="network-path"
                  d={pathD}
                  stroke="rgba(6, 182, 212, 0.5)"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                  fill="none"
                />
                {/* Animated Flow Packet Dot */}
                <circle r="3.5" fill="#38bdf8" className="shadow-[0_0_8px_#38bdf8]">
                  <animateMotion
                    path={pathD}
                    dur={`${2.2 + (idx % 3) * 0.4}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}
        </svg>


        {/* Render Nodes */}
        {nodes.map((node) => {
          const IconComp = node.icon;
          const isSelected = selectedNode?.id === node.id;

          return (
            <motion.div
              key={node.id}
              style={{ left: `${node.x - 36}px`, top: `${node.y - 28}px` }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedNode(node)}
              className={`absolute cursor-pointer flex flex-col items-center group z-10`}
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center border transition-all duration-300 shadow-lg ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 border-white ring-4 ring-cyan-400/40 scale-110'
                    : 'bg-slate-900 text-cyan-400 border-cyan-500/50 hover:bg-cyan-950 hover:border-cyan-400'
                }`}
              >
                <IconComp className="w-6 h-6" />
              </div>

              {/* Node Title Label */}
              <div className="mt-1 text-center">
                <p className="text-[11px] font-bold text-slate-200 tracking-tight leading-none bg-slate-950/80 px-1.5 py-0.5 rounded border border-slate-800">
                  {node.label}
                </p>
                <span className="text-[9px] font-mono text-cyan-400/80 block">{node.role}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Selected Node Details Box */}
      {selectedNode && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 w-full max-w-lg bg-slate-900 border border-cyan-500/40 rounded-lg p-3 text-slate-200 font-mono text-xs flex items-start justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <h5 className="font-bold text-cyan-300 text-sm">{selectedNode.label}</h5>
              <span className="bg-emerald-950 text-emerald-400 border border-emerald-800 px-1.5 py-0.2 text-[10px] rounded">
                {selectedNode.status}
              </span>
            </div>
            <p className="text-slate-400 text-xs">{selectedNode.details}</p>
          </div>
          <button
            onClick={() => setSelectedNode(null)}
            className="text-slate-400 hover:text-white p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </div>
  );

  return (
    <div className={`border border-cyan-500/30 rounded-xl bg-slate-950/50 p-4 shadow-lg ${className}`}>
      {/* Header Bar */}
      <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-3 font-mono text-xs">
        <div className="flex items-center gap-2 text-cyan-400">
          <Activity className="w-4 h-4 animate-pulse" />
          <span className="font-bold tracking-wide uppercase">{title}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-[10px] text-slate-400">Interactive: Click nodes to inspect</span>
          <button
            onClick={() => setIsFullscreen(true)}
            className="p-1.5 rounded hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
            title="Expand Fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Diagram */}
      <DiagramContent />

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="bg-slate-900 border border-cyan-500/50 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
              <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
                <div>
                  <h3 className="text-lg font-bold font-mono text-cyan-400 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-cyan-400" />
                    {title} — Interactive Network Topology
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    Simulated Network Flow & Inter-Device Telemetry Inspection
                  </p>
                </div>
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <DiagramContent />

              <div className="mt-6 text-center text-xs font-mono text-slate-400">
                Click any device node above to view port bindings, protocol parameters, and VLAN subnets.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
