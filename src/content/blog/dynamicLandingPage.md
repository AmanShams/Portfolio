---
title: "Dynamic Landing Pages in Multi-Tenant Applications"
description: "Dynamic Landing Pages for Multi-Tenant SaaS — Create branded landing pages with subdomain routing."
image: /dynamicLandingThumbnail.png
author: AmanShams
publishedOn: Julu 22, 2025
slug: multi-tenant-dynamic-landing-pages
---

## Dynamic Landing Pages in Multi-Tenant Applications

### Introduction

In multi-tenant SaaS applications, each tenant often requires a unique landing page that reflects its branding and content. With **Next.js**, we can easily implement this using subdomain-based routing and dynamic data fetching. This guide will walk you through setting up dynamic landing pages for each tenant.

### Key Concepts

1. **Subdomain Routing**: Identifying the tenant based on the subdomain and fetching relevant content.
2. **Dynamic Data Fetching**: Loading tenant-specific data dynamically to render the landing page.
3. **Custom Branding**: Applying styles, logos, and themes specific to each tenant.

### Subdomain-Based Routing

To begin, we will reuse our subdomain detection logic from the previous blog:

```jsx
// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const hostname = req.headers.get("host") || "";
  const subdomain = hostname.split(".")[0];

  if (subdomain && subdomain !== "www" && subdomain !== "localhost") {
    req.nextUrl.searchParams.set("tenant", subdomain);
  }

  return NextResponse.next();
}
```

### Fetching Landing Page Data

We fetch the tenant's branding information from our database:

```jsx
// pages/index.tsx
import prisma from "@/lib/prisma";

export async function getServerSideProps({ query }) {
  const { tenant } = query;
  const tenantData = await prisma.tenant.findUnique({
    where: { subdomain: tenant },
  });

  return {
    props: {
      tenant: tenantData || null,
    },
  };
}

const LandingPage = ({ tenant }) => {
  if (!tenant) return <div>Tenant not found</div>;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <img
          src={`/${tenant.subdomain}-logo.png`}
          alt="Logo"
          className="mb-4 w-24 h-24 object-contain"
        />
        <h1 className="text-3xl font-bold mb-4">Welcome to {tenant.name}</h1>
        <p className="text-gray-600">{tenant.description}</p>
      </div>
    </div>
  );
};

export default LandingPage;
```

### Custom Branding

We can extend this by adding tenant-specific logos, themes, and even CSS classes:

- Store tenant-specific assets like logos in the `public` folder, named as `<subdomain>-logo.png`.
- Dynamically load the logo based on the detected subdomain, ensuring proper branding.

### Conclusion

We now have a fully dynamic landing page setup for multi-tenant applications. In the next blog, we will explore **Optimizing CORS for Multi-Tenant SaaS Applications**, ensuring secure cross-origin requests for tenant-specific data.
