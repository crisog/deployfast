export type HostingCapability = 'static' | 'serverless' | 'edge' | 'fullstack' | 'database' | 'docker';

export type HostingProvider = {
  id: string;
  name: string;
  description: string;
  logoSrc: string;
  buttonText: string;
  capabilities: HostingCapability[];
};

export type FrameworkId = 'nextjs' | 'tanstack-start'

export type FrameworkConfig = {
  framework: FrameworkId;
  name: string;
  availableHosts: HostingProvider[];
};

export const HOSTING_PROVIDERS: Record<string, HostingProvider> = {
  vercel: {
    id: 'vercel',
    name: 'Vercel',
    description: 'Deploy instantly with zero configuration. Perfect for frontend frameworks.',
    logoSrc: '/vercel-icon-light.svg',
    buttonText: 'Deploy with Vercel',
    capabilities: ['static', 'serverless', 'edge'],
  },
  cloudflare: {
    id: 'cloudflare',
    name: 'Cloudflare',
    description: 'Lightning-fast global deployment with integrated CDN and edge computing.',
    logoSrc: '/cloudflare-color.png',
    buttonText: 'Deploy with Cloudflare',
    capabilities: ['static', 'serverless', 'edge'],
  },
  railway: {
    id: 'railway',
    name: 'Railway',
    description: 'Deploy applications and databases with automatic provisioning.',
    logoSrc: '/railway-logo-light.svg',
    buttonText: 'Deploy with Railway',
    capabilities: ['fullstack', 'database', 'docker'],
  },
} as const;

export const FRAMEWORK_HOSTING_MAP: Record<FrameworkId, FrameworkConfig> = {
  nextjs: {
    framework: 'nextjs',
    name: 'Next.js',
    availableHosts: [
      HOSTING_PROVIDERS.vercel,
      HOSTING_PROVIDERS.cloudflare,
      HOSTING_PROVIDERS.railway,
    ],
  },
  'tanstack-start': {
    framework: 'tanstack-start',
    name: 'TanStack Start',
    availableHosts: [
      HOSTING_PROVIDERS.cloudflare,
      HOSTING_PROVIDERS.railway,
    ],
  },
} as const;

export function getHostingOptionsForFramework(frameworkId: string): FrameworkConfig {
  const config = FRAMEWORK_HOSTING_MAP[frameworkId as FrameworkId];
  if (!config) {
    throw new Error(`Framework "${frameworkId}" not found in configuration`);
  }
  return config;
}

export function getAllFrameworks(): FrameworkConfig[] {
  return Object.values(FRAMEWORK_HOSTING_MAP);
}