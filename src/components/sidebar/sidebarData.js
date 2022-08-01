import {
  KeyboardArrowDown,
  Dashboard,
  ShoppingCart,
  FlightTakeoff,
  Newspaper,
  Anchor,
  CurrencyExchange,
  PeopleAlt,
  Book,
  Settings,
  Power,
  AdminPanelSettings,
  ControlCamera,
  Icecream,
} from "@mui/icons-material";
import DashboardPage from "../../pages/dashboard/DashboardPage";
import Stores from "../../pages/stores/Stores";

export const sidebarData = [
  {
    name: "DASHBOARD",
    path: "/",
    Icon: Dashboard,
    dropdown: [
      {
        name: "Dashboard",
        path: "/",
        pg: DashboardPage,
      },
    ],
  },
  {
    name: "STORES & OFFICES",
    path: "/stores",
    Icon: ShoppingCart,
    dropdown: [
      {
        name: "Stores",
        path: "/stores",
        pg: Stores,
      },
      {
        name: "Store cashback",
        path: "/store-cashback",
      },
      {
        name: "Store Category",
        path: "/store-category",
      },
      {
        name: "Coupon & Offers",
        path: "/coupon-and-offers",
      },
      {
        name: "Offer Categories",
        path: "/offer-categories",
      },
      {
        name: "Daily deals",
        path: "/daily_deals",
      },
      {
        name: "Deals category",
        path: "/deals-category",
      },
    ],
  },
  {
    name: "INSTABACK PROMO",
    path: "/instaback-offers",
    Icon: FlightTakeoff,
    dropdown: [
      {
        name: "Instaback offers",
        path: "/instaback-offers",
      },
      {
        name: " Instaback Click Log",
        path: "/instaback-click-log",
      },
    ],
  },
  {
    name: "CMS",
    path: "/menu-builder",
    Icon: Newspaper,
    dropdown: [
      {
        name: "Menu Builder",
        path: "/menu-builder",
      },
      {
        name: "Pages",
        path: "/pages",
      },
      {
        name: "Content Block",
        path: "/content-block",
      },
      {
        name: "User Dashboard Pages",
        path: "/user-dashboard-pages",
      },
      {
        name: "Footer",
        path: "/footer",
      },
      {
        name: "Page Widget",
        path: "/page-widget",
      },
      {
        name: "FAQ",
        path: "/faq",
      },
      {
        name: "FAQ categories",
        path: "/faq-categories",
      },
    ],
  },
  {
    name: "AFFILIATE NETWORKS",
    path: "/affiliate-network",
    Icon: Anchor,
    dropdown: [
      {
        name: "Affiliate networks",
        path: "/affiliate-network",
      },
      {
        name: "Campaign master",
        path: "/campaign-master",
      },
      {
        name: "Campaign Rates",
        path: "/campaign-rates",
      },
      {
        name: "Postback Log",
        path: "/postback-log",
      },
      {
        name: "Network Run",
        path: "/network-log",
      },
      {
        name: "Network Coupons",
        path: "/network-coupons",
      },
      {
        name: "Campaign categories",
        path: "/campaign-categories",
      },
      {
        name: "Coupon categories",
        path: "/coupon-categories",
      },
      {
        name: "Network API log",
        path: "/network-api-log",
      },
    ],
  },
  {
    name: "SALES AND CASHBACK",
    path: "/manual-sales-import",
    Icon: CurrencyExchange,
    dropdown: [
      {
        name: "Manual Sales Import",
        path: "/manual-sales-import",
      },
      {
        name: "Click log",
        path: "/click-log",
      },
      {
        name: "Custom condition",
        path: "/custom-condition",
      },
      {
        name: "Sales Transaction",
        path: "/sales-transaction",
      },
      {
        name: "Referral transaction",
        path: "/referral-transaction",
      },
      {
        name: "Cashback transaction",
        path: "/cashback-transaction",
      },
      {
        name: "Bonus Transaction",
        path: "/bonus-transaction",
      },
      {
        name: "Payment model",
        path: "/payment-model",
      },
      {
        name: "Payment method field",
        path: "/payment-method-field",
      },
    ],
  },
  {
    name: "USERS",
    path: "/users",
    Icon: PeopleAlt,
    dropdown: [
      {
        name: "Users",
        path: "/users",
      },
      {
        name: "Missing CB claims",
        path: "/missing-cb-claims",
      },
      {
        name: "User Payment Models",
        path: "/user-payment-models",
      },
      {
        name: "Withdrawals requests",
        path: "/withdrawal-request",
      },
      {
        name: "User Favourites",
        path: "/user-favourite",
      },
      {
        name: "Share & Earn links",
        path: "/share-and-earn",
      },
      {
        name: "Contact form",
        path: "/contact-form",
      },
    ],
  },
  {
    name: "REPORTS AND LOGS",
    path: "/sms-logs",
    Icon: Book,
    dropdown: [
      {
        name: "Sms logs",
        path: "/sms-logs",
      },
      {
        name: "Earning by network",
        path: "/earning-by-network",
      },
      {
        name: "Referral Invite Log",
        path: "/referral-invite-log",
      },
      {
        name: "Earnings by stores",
        path: "/earnings-by-stores",
      },
      {
        name: "Referral Fraud Detection",
        path: "/referral-fraud-detection",
      },
      {
        name: "Earning by users",
        path: "/earning-by-users",
      },
    ],
  },
  {
    name: "SETTINGS",
    path: "/settings",
    Icon: Settings,
    dropdown: [
      {
        name: "Settings",
        path: "/settings",
      },
      {
        name: "Seo URL Redirect",
        path: "/seo-url-redirect",
      },
      {
        name: "Label translation",
        path: "/label-transaction",
      },
      {
        name: "Email template",
        path: "/email-template",
      },
      {
        name: "Email template Editor",
        path: "/email-template-editor",
      },
      {
        name: "Sitemap",
        path: "/sitemap",
      },
      {
        name: "Currency master",
        path: "/currency-master",
      },
      {
        name: "County master",
        path: "/county-master",
      },
    ],
  },
  {
    name: "DEVELOPER SETUP",
    path: "/language master",
    Icon: Power,
    dropdown: [
      {
        name: "Language master",
        path: "/language-master",
      },
      {
        name: "Task management",
        path: "/task-management",
      },
      {
        name: "Web Backup",
        path: "/web-backup",
      },
      {
        name: "API backup",
        path: "/api-backup",
      },
    ],
  },
  {
    name: "ADMIN PANEL",
    path: "/admin_panel",
    Icon: AdminPanelSettings,
  },
  {
    name: "SUPERADMIN CONTROL",
    path: "/superadmin",
    Icon: ControlCamera,
  },
];
