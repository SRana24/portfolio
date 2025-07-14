// // app/data/projects.js
// export const projects = [
//   {
//     title: 'MO Partner Digi Connect App',
//     summary: 'All-in-one app for efficient product distribution and smart insights.',
//     slug: 'mo-partner-digi-connect',
//     gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
//     details:
//       'This app is your all-in-one solution for the efficient distribution of products. It features a smart dashboard, paperless transactions, business insights, and many more tools to empower partners and improve decision making.',
//   },
//   {
//     title: 'MO MF, PMS & AIF Investment Platform',
//     summary: 'Secure mutual fund and portfolio investment platform.',
//     slug: 'mo-mf-pms-aif',
//     gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
//     details:
//       'A powerful platform to manage Mutual Fund, PMS, and AIF investments. Users can invest seamlessly, manage their portfolios, gain expert insights, and experience a secure and user-friendly environment.',
//   },
//   {
//     title: 'HourlyRooms App',
//     summary: 'Book hotels by the hour — 1, 3, 6, or 12 hours.',
//     slug: 'hourlyrooms-app',
//     gradient: 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
//     details:
//       'An hourly hotel booking app offering flexible check-ins for 1, 3, 6, or 12-hour stays. Ideal for short stays and transit travelers, with online/offline payments and listings from various cities.',
//   },
//   {
//     title: 'Extranet App - HourlyRooms',
//     summary: 'Hotel owner dashboard to manage listings, billing & availability.',
//     slug: 'hourlyrooms-extranet-app',
//     gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
//     details:
//       'A dedicated extranet app for hotel owners to manage availability, pricing, billing, invoices, and gain business insights. Provides full control over listings and operations.',
//   },
//   {
//     title: 'HourlyRooms Website',
//     summary: 'Public booking website for hourly hotel stays.',
//     slug: 'hourlyrooms-website',
//     gradient: 'linear-gradient(135deg, #84fab0, #8fd3f4)',
//     details:
//       'A user-facing booking website mirroring the functionality of the HourlyRooms app. Allows customers to explore hotels, check availability, and make bookings seamlessly online.',
//   },
//   {
//     title: 'Extranet Website - HourlyRooms',
//     summary: 'Web-based control panel for hotel partners.',
//     slug: 'hourlyrooms-extranet-website',
//     gradient: 'linear-gradient(135deg, #ffecd2, #fcb69f)',
//     details:
//       'The web version of the extranet app, enabling hotel owners to control inventory, manage bookings, and view analytics all in one place.',
//   },
//   {
//     title: 'S3 Hotel Listing Portal',
//     summary: 'Direct hotel listing platform for property owners.',
//     slug: 's3-hotel-listing',
//     gradient: 'linear-gradient(135deg, #c6ffdd, #fbd786, #f7797d)',
//     details:
//       'S3 is a listing portal where hotel owners can register and list their properties directly. The platform is optimized for onboarding and streamlining hotel visibility.',
//   },
//   {
//     title: 'HourlyRooms Dashboard',
//     summary: 'Internal dashboard for data monitoring & team operations.',
//     slug: 'hourlyrooms-dashboard',
//     gradient: 'linear-gradient(135deg, #43cea2, #185a9d)',
//     details:
//       'An internal tool for the team to manage, monitor, and update data across the HourlyRooms platform. It includes user management, hotel data control, and analytics.',
//   }
// ];

export const projects = [
  {
    title: 'MO Partner Digi Connect App',
    summary: 'All-in-one platform for efficient distribution and smart business dashboards.',
    iosLink:'https://apps.apple.com/in/app/mo-partner-digi-connect/id6502832515',
    androidLink:'https://play.google.com/store/apps/details?id=com.moamc.distributorApp',
    slug: 'mo-partner-app',
    gradient: 'linear-gradient(135deg, #4e54c8, #8f94fb)', // Blue-Purple
    details: `This app serves as an all-in-one solution tailored for agents and distributors to seamlessly manage and track their customer network. It offers powerful tools for handling GST billing, invoice generation, transaction records, and staying updated with real-time market developments such as newly launched funds and financial products.

    The platform is designed to simplify daily operations with smart dashboards, automated SIP (Systematic Investment Plan) management, and paperless workflows—ensuring greater efficiency and business insights. It supports intuitive user flows, making complex financial processes easier for end users.
    
    I contributed to the app by developing and integrating new features, handling critical error boundaries, and improving performance through rigorous code optimization and cleanup. I implemented React Query for efficient data fetching and caching, worked on secure payment flow integrations, and tested multiple modules to ensure stability across Android and iOS platforms. The project reflects a robust and scalable architecture that empowers distributors to stay informed and operate more effectively.`
      },
  {
    title: 'MO MF, PMS & AIF',
    summary: 'Invest in mutual funds and PMS with expert insights and seamless experience.',
    iosLink:'https://apps.apple.com/in/app/motilal-oswal-mf-pms-and-aif/id6463774883',
    androidLink:'https://play.google.com/store/apps/details?id=com.moamc.investorapp',

    slug: 'mo-mf-pms-aif',
    gradient: 'linear-gradient(135deg, #3a6073, #16222a)', // Cool gray-blue
    details: `A comprehensive mutual fund investment platform designed to help users manage their portfolios effortlessly, invest across multiple schemes, and stay informed with insights from market experts. The app features a secure and intuitive interface tailored for both first-time investors and experienced users.

    It offers real-time NAV tracking, SIP and lump sum investment options, personalized fund recommendations, and portfolio performance analysis. Users can also explore trending funds, compare performance metrics, and receive timely notifications for market movements and opportunities.
    
    I contributed by enhancing the UI/UX for a smoother investment journey, integrating advanced error handling, and implementing optimized rendering for better performance. I also played a key role in integrating React Query for efficient data caching, API integration, and ensuring consistent behavior across web and mobile platforms.`
      },
  {
    title: 'HourlyRooms App',
    summary: 'Book hourly hotels across cities with online/offline payments.',
    androidLink:'https://play.google.com/store/apps/details?id=com.hourlyrooms',

    slug: 'hourlyrooms-app',
    gradient: 'linear-gradient(135deg, #667db6, #0082c8)', // Ocean blue
    details: `An hourly-based hotel booking platform that allows users to book rooms flexibly for 1, 3, 6, or 12 hours. The app offers a seamless experience for short-stay travelers, business professionals, and those looking for quick, budget-friendly stays. Users can browse curated hospitality listings across various states, check real-time availability, and make secure payments through both online and offline modes.

    The platform includes features like location-based suggestions, user reviews, room previews, and instant booking confirmations. It supports dynamic pricing and cancellation policies tailored for short stays.
    
    As a React Native developer, I contributed by optimizing the existing codebase, enhancing performance for both Android and iOS, and implementing new features for booking flow and user authentication. I used Redux Toolkit and RTK Query for efficient state and data management, reducing load times and improving responsiveness across the app.`
      },
  {
    title: 'Extranet App',
    summary: 'Control and manage your hotel listings with complete insights.',
    androidLink:'https://play.google.com/store/apps/details?id=hourlyrooms.extranet',

    slug: 'extranet-app',
    gradient: 'linear-gradient(135deg, #1f4037, #99f2c8)', // Green gradient
    details: `A business dashboard platform designed specifically for hotel owners to gain full control over their operations and make data-driven decisions. The system offers real-time insights into total revenue generated via the platform, breakdowns of online and offline payments, GST-compliant invoicing, and day-wise booking summaries.

    Owners can easily track room availability, view upcoming and past bookings, and distinguish between paid and unpaid reservations. The platform also supports automated invoice generation, booking reports, and detailed analytics to monitor performance over time.
    
    I contributed to building and optimizing core modules related to financial tracking, booking management, and payment reconciliation. Additionally, I worked on UI improvements, integrated charts for business insights, and implemented robust error handling to ensure a seamless experience for the end user.`
      },
  {
    title: 'HourlyRooms Website',
    summary: 'A responsive hotel booking web platform for hourly stays.',
    slug: 'hourlyrooms-website',
    live:'https://hourlyrooms.co.in/',
    gradient: 'linear-gradient(135deg, #283c86, #45a247)', // Blue to green
    details: `A responsive web-based hotel booking platform offering the same core functionality as the mobile app—allowing users to book rooms by the hour with flexible durations (1, 3, 6, or 12 hours). The platform is optimized for both desktop and mobile browsers, ensuring seamless user experience across devices.

    Users can browse a wide range of hospitality listings filtered by city, availability, and hourly packages. It features integrated secure payment gateways supporting both online and offline transactions. Real-time room availability, detailed room descriptions, customer reviews, and location-based search make the booking process fast and intuitive.
    
    As part of the team, I worked on feature parity with the mobile app, implemented responsive layouts, optimized page load performance, and integrated Redux Toolkit Query for efficient data fetching and state management. Additional responsibilities included bug fixing, UI enhancements, and ensuring WCAG accessibility compliance.`
      },
  {
    title: 'Extranet Website',
    summary: 'Hotel owner control panel available on web.',
    live:'https://extranet.hourlyrooms.co.in/',
    slug: 'extranet-website',
    gradient: 'linear-gradient(135deg, #2b5876, #4e4376)', // Deep blue
    details: `A web-based partner portal that mirrors the mobile Extranet app, built specifically for hotel owners and administrators to gain full operational control through a desktop-friendly interface.

    The platform provides advanced features for managing room listings, availability, hourly pricing, and real-time updates. Hotel partners can view detailed reports on total revenue, daily and monthly earnings, and booking trends. It supports online and offline payment breakdowns, paid vs unpaid bookings, GST-compliant billing, invoice generation, and customer data tracking.
    
    My role involved enhancing the UI/UX for desktop users, adding new control modules, optimizing Redux logic for efficient state management, and improving performance for large datasets. Additionally, I worked on error handling, reporting dashboards, and secure data flow integration. The system also includes access control features and role-based management.`
      },
  {
    title: 'S3 Hotel Listing Platform',
    summary: 'Let hotel owners list their properties directly on the platform.',
    slug: 's3-hotel-listing',
    gradient: 'linear-gradient(135deg, #1d4350, #a43931)', // Charcoal to red-brown
    details: `A self-service web platform designed specifically for hotel owners to easily register and list their properties on our hospitality network. The system allows owners to submit detailed property information, upload documents, and configure pricing and room availability through a guided onboarding form.

    The registration process includes step-by-step input validation, real-time feedback, and automated form submission to the internal onboarding team. Once submitted, the properties are reviewed and verified before going live on the platform.
    
    I worked on building and refining the multi-step form UI/UX, implemented backend integration for form submission, improved validation logic, and ensured data integrity. The platform is fully responsive and optimized for both desktop and mobile users, offering hotel owners a seamless and transparent listing experience.`
      },
  {
    title: 'Internal Dashboard - HourlyRooms',
    summary: 'Admin panel for internal team to monitor and manage all app data.',
    slug: 'internal-dashboard',
    gradient: 'linear-gradient(135deg, #2c3e50, #4ca1af)', // Slate-blue
    details: `An advanced internal dashboard built for operational and support teams to efficiently manage and monitor platform-wide data. This web-based system provides full control over hotel listings, user accounts, booking records, and financial reporting.

    The dashboard includes modules for real-time revenue tracking, booking status updates (paid/unpaid), hotel performance analytics, and user management. It also offers capabilities for editing hotel data, verifying onboarding documents, and overseeing payment reconciliation.
    
    I contributed to building data tables with search, filter, and pagination support, implemented secured role-based access control, optimized state management using Redux, and improved performance with code-splitting and lazy loading. This tool ensures high visibility and seamless control for internal stakeholders managing business operations at scale.`
      }
];
