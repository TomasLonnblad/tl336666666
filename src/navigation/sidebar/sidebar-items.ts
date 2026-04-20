import {
  Banknote,
  Calendar,
  ChartBar,
  Fingerprint,
  Forklift,
  Gauge,
  GraduationCap,
  Kanban,
  LayoutDashboard,
  Lock,
  type LucideIcon,
  Mail,
  MessageSquare,
  ReceiptText,
  ShoppingBag,
  SquareArrowUpRight,
  Users,
} from "lucide-react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "Dashboards",
    items: [


      {
        title: "3D",
        url: "/dashboard/motionxx/src",
        icon: ShoppingBag,
      
      },
      {
        title: "x",
        url: "/dashboard/x/app",
        icon: Gauge,
    
      },

      {
        title: "Image carousel",
        url: "/dashboard/carousel",
        icon: Gauge,
    
      },



      {
        title: "Framer-motion",
        url: "/dashboard/motion/src/app",
        icon: Users,
      
      },

      {
        title: "Hls (video)",
        url: "/dashboard/gesap2",
        icon: Forklift,
      
      },


      {
        title: "Transition",
        url: "/dashboard/motion2/src/app",
        icon: MessageSquare,
     
      },
      {
        title: "Calendar",
        url: "/dashboard/motion3/app/",
        icon: Calendar,
       
      },
      {
        title: "Kanban",
        url: "/dashboard/motion4/app",
        icon: Kanban,
       
      },

      {
        title: "Kanban",
        url: "/dashboard/motion6/app",
        icon: Kanban,
       
      },
      {
        title: "Kanban",
        url: "/dashboard/motion7/app",
        icon: Kanban,
       
      },

    ],
  },
  {
    id: 2,
    label: "Pages",
    items: [
      {
        title: "Email",
        url: "/dashboard/motion5/src/app",
        icon: Mail,
       
      },

      {
        title: "Shadcn extended",
        url: "/dashboard/motionx/app",
        icon: ReceiptText,
     
      },

      {
        title: "React",
        url: "/dashboard/gesap",
        icon: GraduationCap,
       
      },



      {
        title: "3D",
        url: "/dashboard/motionxxxx1/app",
        icon: ShoppingBag,
      
      },
      {
        title: "CRM",
        url: "/dashboard/crm",
        icon: ChartBar,
      },
      {
        title: "Finance",
        url: "/dashboard/finance",
        icon: Banknote,
      },

      {
        title: "Roles",
        url: "/dashboard/coming-soon",
        icon: Lock,
        
      },
      {
        title: "Authentication",
        url: "/auth",
        icon: Fingerprint,
        subItems: [
          { title: "Login v1", url: "/auth/v1/login", newTab: true },
          { title: "Login v2", url: "/auth/v2/login", newTab: true },
          { title: "Register v1", url: "/auth/v1/register", newTab: true },
          { title: "Register v2", url: "/auth/v2/register", newTab: true },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Misc",
    items: [
      {
        title: "Others",
        url: "/dashboard/coming-soon",
        icon: SquareArrowUpRight,
       
      },
    ],
  },
];
