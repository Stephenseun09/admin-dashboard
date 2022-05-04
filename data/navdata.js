import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import CampaignIcon from "@mui/icons-material/Campaign";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AssessmentIcon from "@mui/icons-material/Assessment";

export const itemsList = (router, onClose) => [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    onClick: () => {
      router.push("/");
      onClose();
    },
    path: "/",
  },
  {
    text: "Orders",
    icon: <LibraryBooksIcon />,
    onClick: () => {
      router.push("#");
      onClose();
    },
    path: "/orders",
  },
  {
    text: "Products",
    icon: <CheckroomIcon />,
    onClick: () => {
      router.push("#");
      onClose();
    },
    path: "/products",
  },
  {
    text: "Marketing",
    icon: <CampaignIcon />,
    onClick: () => {
      router.push("#");
      onClose();
    },
    path: "/marketing",
  },
  {
    text: "Rates",
    icon: <StarBorderIcon />,
    onClick: () => {
      router.push("#");
      onClose();
    },
    path: "/rates",
  },
  {
    text: "Reports",
    icon: <AssessmentIcon />,
    onClick: () => {
      router.push("#");
      onClose();
    },
    path: "/reports",
  },
];

export const TSPData = [
  {
    name: "Tshirt Levis",
    price: "$ 49.99",
    src: "https://global-uploads.webflow.com/5d556af3fe21d65f602dca94/61713568f9c32245eaa1889b_Group%20107-p-500.jpeg",
  },
  {
    name: "Long jeans jacket",
    price: "$ 129.99",
    src: "https://global-uploads.webflow.com/5d556af3fe21d65f602dca94/609a9a0bedf5fc5bfce55bbe_1-p-500.jpeg",
  },
  {
    name: "Turks hat",
    price: "$ 20.99",
    src: "https://global-uploads.webflow.com/5d556af3fe21d65f602dca94/6141e900c93d18523e961945_Group%2026-p-500.jpeg",
  },
  {
    name: "Balenciaga sneakers",
    price: "$ 89,99",
    src: "https://global-uploads.webflow.com/5d556af3fe21d65f602dca94/60743347c7c143082c0058a4_3-p-500.jpeg",
  },
];

export const rows = [
  {
    id: 1143155,
    product: "Godspeed Vest",
    img: "https://global-uploads.webflow.com/5d556af3fe21d65f602dca94/61dff3f5e0198a26c25e6d45_Frame%2030-p-500.jpeg",
    customer: "John Smith",
    date: "1 March",
    amount: 785,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 2235235,
    product: "St. Perry Shirt",
    img: "https://global-uploads.webflow.com/5d556af3fe21d65f602dca94/6171357fcb12cd0a3aff6e31_Group%20108-p-500.jpeg",
    customer: "Michael Doe",
    date: "1 March",
    amount: 900,
    method: "Online Payment",
    status: "Pending",
  },
  {
    id: 2342353,
    product: "Royale Sneakers",
    img: "https://global-uploads.webflow.com/5d556af3fe21d65f602dca94/5ef0ab60b22d8333b3cf57e7_Order%20%23538714%20%7C%20cra%40greatsbrand.com%202-p-500.jpeg",
    customer: "John Smith",
    date: "1 March",
    amount: 35,
    method: "Cash on Delivery",
    status: "Pending",
  },
  {
    id: 2357741,
    product: "TWA Sneakers",
    img: "https://global-uploads.webflow.com/5d556af3fe21d65f602dca94/5dec1fa4ef1c1080ebb07393_Mv46P9lBnZDz-p-500.png",
    customer: "Jane Smith",
    date: "1 March",
    amount: 920,
    method: "Online",
    status: "Approved",
  },
  {
    id: 2342355,
    product: "Ray Bam Sunglasses",
    img: "https://global-uploads.webflow.com/5d556af3fe21d65f602dca94/5ef0a76460d29e11d65e927f_Order%20%23538830%20%7C%20timmy%40emberniche.com%204-p-500.jpeg",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Pending",
  },
];

export const visitorsData = [
  {
    name: "Mon",
    uv: 2000,
  },
  {
    name: "Tue",
    uv: 3000,
  },
  {
    name: "Wed",
    uv: 3500,
  },
  {
    name: "Thur",
    uv: 3200,
  },
  {
    name: "Fri",
    uv: 4000,
  },
  {
    name: "Sat",
    uv: 9000,
  },
  {
    name: "Sun",
    uv: 8000,
  },
];

export const salesData = [
  {
    name: "",
    orders: 0,
    profit: 0,
    amt: 0,
  },
  {
    name: "Week 1",
    orders: 4000,
    profit: 2400,
    amt: 2400,
  },
  {
    name: "Week 2",
    orders: 3000,
    profit: 1398,
    amt: 2210,
  },
  {
    name: "Week 3",
    orders: 2000,
    profit: 9800,
    amt: 2290,
  },
  {
    name: "Week 4",
    orders: 2780,
    profit: 3908,
    amt: 2000,
  },
];
