---
title: "Optimizing CORS for Multi-Tenant SaaS Applications"
description: "Dynamic Landing Pages for Multi-Tenant SaaS — Create branded landing pages with subdomain routing."
image: /corsThumbnail.png
author: AmanShams
publishedOn: July 14, 2025
slug: mastering-cors
---

## Optimizing CORS for Multi-Tenant SaaS Applications

### Introduction

In multi-tenant SaaS applications, managing Cross-Origin Resource Sharing (CORS) efficiently is crucial to prevent security vulnerabilities and ensure smooth data communication. This article will guide you through optimizing CORS configurations for multi-tenant environments using **Next.js** and **Prisma**.

### Key Concepts

1. **CORS (Cross-Origin Resource Sharing)**: A security feature in browsers that restricts cross-origin HTTP requests from being made.
2. **Dynamic Whitelisting**: Allowing only tenant-specific subdomains to access server resources.
3. **Security and Performance Optimization**: Preventing unauthorized access while maintaining performance.

### Middleware for CORS Handling

We begin by creating a custom middleware to handle dynamic CORS:

```jsx
// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function middleware(req: NextRequest) {
  const hostname = req.headers.get("host") || "";
  const subdomain = hostname.split(".")[0];

  if (subdomain && subdomain !== "www" && subdomain !== "localhost") {
    const tenant = await prisma.tenant.findUnique({
      where: { subdomain },
    });

    if (tenant) {
      req.nextUrl.searchParams.set("tenant", subdomain);
    }
  }

  return NextResponse.next();
}
```

### Dynamic CORS Configuration

To set CORS headers dynamically based on tenant data:

```jsx
// lib/cors.ts
import Cors from "cors";
import { getAllowedOrigins } from "@/lib/getAllowedOrigins";

const whitelist = await getAllowedOrigins();

const cors = Cors({
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
});

export default cors;
```

### Database-Driven Whitelist

To make this fully dynamic, we fetch allowed origins directly from the database:

```jsx
// lib/getAllowedOrigins.ts
import prisma from "@/lib/prisma";

export async function getAllowedOrigins() {
  const tenants = await prisma.tenant.findMany();
  return tenants.map((tenant) => `https://${tenant.subdomain}.example.com`);
}
```

### Applying CORS to API Routes

We can now apply this CORS middleware to our API routes:

```jsx
// pages/api/example.ts
import cors from "@/lib/cors";

export default async function handler(req, res) {
  await cors(req, res);
  res.status(200).json({ message: "CORS request successful!" });
}
```

### Conclusion

We have optimized CORS for multi-tenant SaaS applications by dynamically whitelisting tenant-specific subdomains. This ensures secure communication and prevents unauthorized access, all while maintaining scalability and performance. For further improvements, consider adding **rate limiting**, **token-based authentication**, and **IP whitelisting** for even tighter security.
