export interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  businessName: string;
  message: string;
  timestamp: string;
  status: "new" | "contacted" | "qualified" | "converted";
}

// Mock leads data for demo purposes
const mockLeads: Lead[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    phone: "+91 98765 43210",
    email: "rajesh@precisionengineering.com",
    businessName: "Precision Engineering Works",
    message: "Looking for a professional website to showcase our CNC machining capabilities and attract international clients.",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    status: "new"
  },
  {
    id: "2",
    name: "Priya Sharma",
    phone: "+91 98765 43211",
    email: "priya@technofab.com",
    businessName: "TechnoFab Industries",
    message: "Need an e-commerce solution for selling industrial components online.",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    status: "contacted"
  },
  {
    id: "3",
    name: "Amit Patel",
    phone: "+91 98765 43212",
    email: "amit@steelforge.com",
    businessName: "Steel Forge Manufacturing Ltd.",
    message: "Interested in a complete digital transformation. Want to discuss SEO and lead generation features.",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    status: "qualified"
  },
  {
    id: "4",
    name: "Sunita Mehta",
    phone: "+91 98765 43213",
    email: "sunita@qualityauto.com",
    businessName: "Quality Auto Components Pvt. Ltd.",
    message: "Our current website is outdated. Looking for a modern, mobile-friendly solution with analytics integration.",
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    status: "converted"
  },
  {
    id: "5",
    name: "Vikram Singh",
    phone: "+91 98765 43214",
    email: "vikram@industrialsolutions.com",
    businessName: "Industrial Solutions Group",
    message: "Impressed by your demo website. Want to know more about pricing and timelines.",
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    status: "contacted"
  },
  {
    id: "6",
    name: "Kavita Reddy",
    phone: "+91 98765 43215",
    email: "kavita@greentech.com",
    businessName: "GreenTech Manufacturing",
    message: "Looking for a sustainable and eco-friendly web solution. Interested in your enterprise package.",
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    status: "new"
  },
  {
    id: "7",
    name: "Arun Desai",
    phone: "+91 98765 43216",
    email: "arun@metalworks.com",
    businessName: "Metal Works Industries",
    message: "Need a website with product catalog and quote request functionality.",
    timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
    status: "qualified"
  },
  {
    id: "8",
    name: "Meera Iyer",
    phone: "+91 98765 43217",
    email: "meera@plastechindustries.com",
    businessName: "Plastech Industries",
    message: "Requesting a consultation to discuss digital marketing and SEO services for our manufacturing business.",
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    status: "new"
  }
];

// In-memory storage for demo purposes
let leads: Lead[] = [...mockLeads];

export function getAllLeads(): Lead[] {
  return leads.sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
}

export function addLead(leadData: Omit<Lead, "id" | "status">): Lead {
  const newLead: Lead = {
    ...leadData,
    id: Date.now().toString(),
    status: "new"
  };
  leads.unshift(newLead);
  return newLead;
}

export function getLeadById(id: string): Lead | undefined {
  return leads.find(lead => lead.id === id);
}

export function updateLeadStatus(id: string, status: Lead["status"]): Lead | undefined {
  const lead = leads.find(l => l.id === id);
  if (lead) {
    lead.status = status;
  }
  return lead;
}