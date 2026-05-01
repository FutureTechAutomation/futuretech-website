// --- NATIVE SHARE LOGIC ---
function shareProject(projectName) {
    const shareText = `Check out this engineering project from FutureTech: ${projectName}`;
    const siteUrl = window.location.href.split('?')[0]; // Gets the base URL
    
    if (navigator.share) {
        navigator.share({
            title: 'FutureTech Automation',
            text: shareText,
            url: siteUrl
        }).catch(console.error);
    } else {
        // Fallback for desktop browsers that don't support native sharing
        navigator.clipboard.writeText(`${shareText} - ${siteUrl}`);
        alert("Project details and website link copied to clipboard!");
    }
}

// 1. DATA: Your Business Database
let projects = [
    { 
        id: 1, category: "Electronics", name: "Mobile control robot car", 
        desc: "Bluetooth-controlled Arduino chassis with L298N motor drivers and Android app integration.", price: "2500", 
        img: "assets/robot.jpeg", video: "assets/robot.mp4",
        popularity: 90, 
    },
    { 
        id: 10, category: "Electronics", name: "FPV Drone", 
        desc: "A high-agility aerial platform engineered for first-person view racing. It features low-latency video transmission and aggressively tuned PID controllers for instantaneous pitch and roll response during high-speed maneuvers.", price: "50000", 
        img: "assets/fpv drone.jpeg", video: "",
        popularity: 100, 
    },

    { 
        id: 2, category: "Electronics", name: "Quadrocopter Drone", 
        desc: "A stable multi-rotor vehicle utilizing precision IMU sensors and an advanced flight controller. The system dynamically adjusts individual motor RPMs in real-time to ensure level hovering and smooth, controlled flight paths.", price: "35000", 
        img: "assets/drone.jpeg", video: "",
        popularity: 94, 
    },
    { 
        id: 9, category: "Electronics", name: "CNC writing machine", 
        desc: "A Cartesian kinematic plotter driven by precision stepper motors. It parses G-code coordinate data to control a servo-actuated toolhead, accurately translating digital vector graphics into physical ink strokes.", price: "9500", 
        img: "assets/cnc writing machine.jpeg", video: "",
        popularity: 100, 
    },
    { 
        id: 4, category: "Mechanical, Mechatronics", name: "Robotic Arm", 
        desc: "6-DOF Pick and Place robot integrating mechanical design with embedded electronic control.", price: "9500", 
        img: "assets/robotic.jpeg", video: "",
        popularity: 88, 
    },
    { 
        id: 5, category: "Mechanical", name: "360 degree car", 
        desc: "Omnidirectional mecanum wheel rover capable of seamless 360-degree zero-radius turns.", price: "8000", 
        img: "assets/360 degree car.jpeg", video: "",
        popularity: 88, 
    },
    { 
        id: 6, category: "Electrical", name: "plc system", 
        desc: "Industrial-grade PLC automation prototype complete with ladder logic and relay control.", price: "25000", 
        img: "assets/plc system.jpeg", video: "",
        popularity: 88, 
    },
    { 
        id: 7, category: "Electrical", name: "automatic power factor", 
        desc: "APFC panel prototype for real-time power factor measurement and automatic capacitor switching.", price: "16000", 
        img: "assets/automatic power factor.jpeg", video: "",
        popularity: 88, 
    },
    { 
        id: 101, category: "DIY Kits", name: "Robot Car DIY Kit", 
        desc: "Complete kit: Chassis, Arduino, motors, and code access.", price: "2500", 
        img: "assets/robot.jpeg", video: "",
        popularity: 100, 
    },
    { 
        id: 3, category: "Electronics", name: "Alcohol Detector", 
        desc: "A safety-critical embedded system utilizing a semiconductor gas sensor to measure ethanol concentrations. It employs ADC threshold logic to automatically trigger a relay, disabling engine ignition upon detecting intoxication.", price: "1000", 
        img: "assets/alcohol detector.jpeg", video: "",
        popularity: 70, 
    },
    { 
        id: 11, category: "Electronics", name: "IoT Virtual Doctor Robot", 
        desc: "Remote-controlled telepresence rover enabling doctors to conduct virtual patient rounds and real-time video consultations via a web interface.", 
        price: "6500", 
        img: "assets/Virtual Doctor Robot.jpeg", video: "",
        popularity: 100, 
    },
    { 
        id: 12, category: "Electronics", name: "IoT Toll Booth Manager", 
        desc: "Cloud-connected automated toll collection system that logs vehicle data, deducts balances in real-time, and operates a mechanical boom barrier.", 
        price: "3000", 
        img: "assets/Based Toll Booth Manager System.jpeg", video: "",
        popularity: 85, 
    },
    { 
        id: 13, category: "Electrical", name: "IoT Smart Automation", 
        desc: "Centralized smart relay system allowing users to remotely monitor and control heavy AC appliances for homes or industries using a smartphone dashboard.", 
        price: "4000", 
        img: "assets/Home Automation.jpeg", video: "",
        popularity: 95, 
    },
    { 
        id: 14, category: "Mechatronics", name: "IoT Antenna Positioning", 
        desc: "Precision motor-driven mechanism that allows operators to remotely adjust and monitor the directional azimuth of an antenna via an IoT cloud platform.", 
        price: "3000", 
        img: "assets/Based Antenna Positioning System.jpeg", video: "",
        popularity: 80, 
    },
    { 
        id: 15, category: "Electrical", name: "IoT Solar Power Monitor", 
        desc: "Real-time energy analytics dashboard that measures voltage, current, and power output of solar panels and logs the telemetry to a cloud server.", 
        price: "5000", 
        img: "assets/Solar Power Monitoring System.jpeg", video: "",
        popularity: 88, 
    },
    { 
        id: 16, category: "Electronics", name: "IoT Traffic Controller", 
        desc: "Smart traffic management grid that allows centralized remote override of junction lights for emergency vehicles and logs real-time traffic data.", 
        price: "3000", 
        img: "assets/Traffic Signal Monitoring Controller System.jpeg", video: "",
        popularity: 82, 
    },
    { 
        id: 17, category: "Electrical", name: "Underground Cable Fault Detector", 
        desc: "Diagnostic testing unit that calculates the exact distance of a short circuit in buried cables using voltage drop analysis and alerts operators online.", 
        price: "4000", 
        img: "assets/Underground Cable Fault Detector Project.jpeg", video: "",
        popularity: 92, 
    },
    { 
        id: 18, category: "Electronics", name: "IoT IV Bag Monitor", 
        desc: "Healthcare safety monitor that tracks liquid levels in hospital IV drips and instantly sends a cloud-based alert to nursing staff before it runs dry.", 
        price: "3500", 
        img: "assets/IV Bag Monitoring and Alert System.jpeg", video: "",
        popularity: 86, 
    },
    // --- COMPUTER SCIENCE (CS) PROJECTS ---
    { 
        id: 19, category: "Computer Science", name: "Hospital Management System", 
        desc: "Full-stack web application (MERN/PHP) featuring patient registration, doctor appointment scheduling, and secure digital medical record storage.", 
        price: 3500, 
        img: "assets/hospital management system.jpeg", video: "",
        popularity: 85, 
    },
    { 
        id: 20, category: "Computer Science", name: "Blockchain E-Voting Portal", 
        desc: "Secure, decentralized voting simulator utilizing smart contracts to ensure immutable, tamper-proof election data and transparent cryptographic tallying.", 
        price: 5000, 
        img: "assets/Blockchain E-Voting Portal.jpeg", video: "",
        popularity: 92, 
    },
    { 
        id: 21, category: "Computer Science", name: "Cloud-Based E-Commerce", 
        desc: "Responsive retail web application featuring a dynamic shopping cart, user authentication, inventory management admin panel, and mock payment gateway integration.", 
        price: 4000, 
        img: "assets/Cloud-Based E-Commerce.jpeg", video: "",
        popularity: 88, 
    },
    { 
        id: 26, category: "Computer Science", name: "Online Examination Portal", 
        desc: "Secure web-based testing platform featuring automated grading, randomized question bank generation, and an administrative analytics dashboard.", 
        price: 2500, 
        img: "assets/Online Examination Portal.jpeg", video: "",
        popularity: 90, 
    },
    { 
        id: 27, category: "Computer Science", name: "Library Management Database", 
        desc: "Centralized CRUD application designed for digital cataloging, user issue tracking, and automated overdue fine calculation algorithms.", 
        price: 2000, 
        img: "assets/Library Management Database.jpeg", video: "",
        popularity: 85, 
    },
    { 
        id: 28, category: "Computer Science", name: "Payroll & Attendance Tracker", 
        desc: "Corporate HR dashboard handling employee database management, automated shift logging, and dynamic salary slip PDF generation.", 
        price: 2500, 
        img: "assets/Payroll & Attendance Tracker.jpeg", video: "",
        popularity: 82, 
    },
    { 
        id: 29, category: "Computer Science", name: "Local Service Booking App", 
        desc: "Multi-vendor directory system connecting local service providers with users, featuring a dynamic booking calendar and a verified rating system.", 
        price: 3000, 
        img: "assets/Local Service Booking App.jpeg", video: "",
        popularity: 88, 
    },
    { 
        id: 30, category: "Computer Science", name: "Alumni Network Portal", 
        desc: "Interactive networking platform for university graduates featuring job board integration, event management, and a searchable alumni directory.", 
        price: 2500, 
        img: "assets/Alumni Network Portal.jpeg", video: "",
        popularity: 84, 
    },
    { 
        id: 31, category: "Computer Science", name: "Crime Record Management", 
        desc: "Secure law enforcement database simulator for logging FIRs, tracking case statuses, and managing digital suspect profiles with role-based access.", 
        price: 3000, 
        img: "assets/Crime Record Management.jpeg", video: "",
        popularity: 86, 
    },
    { 
        id: 32, category: "Computer Science", name: "Grievance Redressal System", 
        desc: "Automated ticketing helpdesk for institutional grievance reporting, featuring priority escalation matrices and real-time status tracking for users.", 
        price: 2500, 
        img: "assets/Grievance Redressal System.jpeg", video: "",
        popularity: 80, 
    },
    { 
        id: 33, category: "Computer Science", name: "Online Auction Platform", 
        desc: "Dynamic bidding web application with real-time timer countdowns, user wallet simulation, and automated highest-bidder checkout workflows.", 
        price: 3500, 
        img: "assets/Online Auction Platform.jpeg", video: "",
        popularity: 89, 
    },
    { 
        id: 34, category: "Electronics, Mechatronics", name: "3D Scanner Machine", 
        desc: "Automated photogrammetry platform that rotates physical objects on a precision turntable while synchronizing camera shutter triggers to capture complete 360-degree data.", 
        price: 6500, 
        img: "assets/3D Scanner Machine using Arduino Project1777059492.jpeg", video: "",
        popularity: 87, 
    },
    { 
        id: 35, category: "Electronics, Mechanical", name: "IoT Water Pollution Monitor RC Boat", 
        desc: "An aquatic rover that navigates water bodies to sample pH, turbidity, and temperature, transmitting real-time telemetry to a cloud dashboard for remote pollution mapping.", 
        price: 6000, 
        img: "assets/IOT Water Pollution Monitor RC Boat1777059492.jpeg", video: "",
        popularity: 91, 
    },
    { 
        id: 36, category: "Electronics, Electrical", name: "IoT Mining Tracking & Safety Helmet", 
        desc: "Smart safety gear that monitors atmospheric toxic gas levels and worker vitals, triggering automatic cloud alerts and localized alarms if hazardous threshold limits are breached.", 
        price: 5500, 
        img: "assets/IOT Mining Tracking & Worker Safety Helmet1777059492.jpeg", video: "",
        popularity: 85, 
    },
    { 
        id: 37, category: "Mechanical, Mechatronics", name: "Automated Drain Cleaner", 
        desc: "A motorized mechanical dredge system designed to automatically scoop, lift, and dispose of solid waste blocking drainage channels, preventing urban waterlogging.", 
        price: 5500, 
        img: "assets/Automated Drain or Gutter Cleaner1777059492.jpeg", video: "",
        popularity: 82, 
    },
    { 
        id: 38, category: "Mechanical, Electrical", name: "Automatic Board Cleaner System", 
        desc: "A rack-and-pinion driven sweeping mechanism that glides across classroom boards to autonomously erase content, saving time and reducing chalk dust inhalation.", 
        price: 5000, 
        img: "assets/Automatic Blackboard Whiteboard Cleaner System1777059492.jpeg", video: "",
        popularity: 75, 
    },
    { 
        id: 39, category: "Mechatronics, Mechanical", name: "Spider Robot with Grass Cutter", 
        desc: "A multi-legged, all-terrain agricultural rover that simultaneously trims overgrowth and dispenses liquid fertilizers through an automated fluid-pump system.", 
        price: 8000, 
        img: "assets/Pesticide Sprayer Spider Robot with Grass Cutter1777059492.jpeg", video: "",
        popularity: 89, 
    },
    { 
        id: 40, category: "Mechanical, Mechatronics", name: "External Pipe Climbing Robot", 
        desc: "A specialized gripper robot engineered to scale vertical industrial pipes using high-friction motorized wheels, ideal for remote structural inspection and maintenance.", 
        price: 7500, 
        img: "assets/Design and Fabrication of External Pipe Climbing Robot1777059492.jpeg", video: "",
        popularity: 93, 
    },
    { 
        id: 41, category: "Electronics, Mechatronics", name: "Farm Protector Drone", 
        desc: "An autonomous aerial deterrent system that patrols agricultural perimeters, utilizing acoustic alarms and flashing strobes to repel pests without chemical intervention.", 
        price: 35000, 
        img: "assets/Farm Protector Drone for using Arduino1777059492.jpeg", video: "",
        popularity: 94, 
    },
    
    
];

const app = document.getElementById('app');

function renderCategory(catName, sortBy = 'default') {
    // Filter first
    let filtered = projects.filter(p => p.category.includes(catName));

    // Apply Sorting only if there are items to sort
    if (filtered.length > 0) {
        if (sortBy === 'priceLow') filtered.sort((a, b) => a.price - b.price);
        if (sortBy === 'priceHigh') filtered.sort((a, b) => b.price - a.price);
        if (sortBy === 'popular') filtered.sort((a, b) => b.popularity - a.popularity);
    }

    // Start building the HTML string
    let html = `
        <div class="category-header">
            <h2>${catName} Projects</h2>
            <div class="sort-bar">
                <label>Sort By: </label>
                <select onchange="renderCategory('${catName}', this.value)">
                       <option value="default">↕️ Sort By</option>
                       <option value="popular" ${sortBy==='popular'?'selected':''}>🔥 Trending</option>
                       <option value="priceLow" ${sortBy==='priceLow'?'selected':''}>💰 Price: Low to High</option>
                       <option value="priceHigh" ${sortBy==='priceHigh'?'selected':''}>💎 Price: High to Low</option>
                </select>
            </div>
        </div>
    `;

    // THE FEATURE YOU ASKED FOR: Empty State Check
    if (filtered.length === 0) {
        html += `
            <div style="text-align:center; padding: 50px; color: var(--text);">
                <h3 style="color: #fff;">🚧 Projects Coming Soon</h3>
                <p>We are currently updating our ${catName} catalog. Contact us on WhatsApp for custom requirements!</p>
                <button onclick="contactWhatsApp('General ${catName} Inquiry')" style="background:var(--accent); color:white; border:none; padding:10px 20px; border-radius:0; font-family:'Share Tech Mono',monospace; letter-spacing:0.1em; text-transform:uppercase; cursor:pointer; margin-top:15px;">Inquire via WhatsApp</button>
            </div>
        `;
    } else {
        html += `<div class="product-grid">`;
        filtered.forEach(p => {
            html += `
                <div class="card">
                    <div class="media-container">
                ${p.video && p.video.trim() !== "" ? `
                    <div class="slider-wrapper" id="slider-${p.id}">
                        <img src="${p.img}" alt="${p.name}" class="active-media" onerror="this.onerror=null; this.src='https://via.placeholder.com/250'">
                        <video src="${p.video}" class="hidden-media" controls muted></video>
                        <div class="slider-controls">
                            <button onclick="toggleMedia(${p.id})">❮</button>
                            <button onclick="toggleMedia(${p.id})">❯</button>
                        </div>
                    </div>
                ` : `
                    <img src="${p.img}" alt="${p.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/250'">
                `}
            </div>
                    <h3>${p.name}</h3>
                    <div style="display:flex; justify-content:space-between; align-items:center; padding: 0 16px; margin-bottom: 8px;">
                        <div style="font-family:'Share Tech Mono',monospace; font-size:0.72rem; color:#888480; letter-spacing:0.08em; text-transform:uppercase;">${p.category}</div>
                        <span style="cursor:pointer; color:#888480; font-size:1rem;" onclick="shareProject('${p.name}')" title="Share Project">🔗</span>
                    </div>
                    <p>${p.desc}</p>
                    <p class="price">Starting at: ₹${p.price}</p>
                    <button onclick="contactWhatsApp('${p.name}')">Inquiry on WhatsApp</button>
                </div>
            `;
        });
        html += `</div>`;

            // --- THE CATEGORY SAFETY NET ---
    html += `
        <div style="text-align: center; padding: 40px 5% 60px 5%;">
            <div style="background: var(--panel); border: 1px dashed var(--border); border-radius: 0; max-width: 800px; margin: 0 auto; padding: 30px;">
                <p style="color: #ffffff; font-family: var(--display); font-size: 1.4rem; font-weight: bold; margin-bottom: 10px; letter-spacing: 0.06em; text-transform: uppercase;">Didn't find the perfect ${catName} project?</p>
                <p style="margin-bottom: 20px; color: var(--muted); font-size: 0.95rem;">We can build it from scratch. Tell us your exact requirements.</p>
                <button onclick="openCustomModal()" style="background: transparent; color: var(--accent); border: 1px solid var(--accent); padding: 12px 25px; border-radius: 0; font-family: var(--mono); font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; transition: 0.3s;" onmouseover="this.style.background='var(--accent)'; this.style.color='#fff';" onmouseout="this.style.background='transparent'; this.style.color='var(--accent)';">
                    Request Custom ${catName} Project
                </button>
            </div>
        </div>
    `;
        
    }
    
    app.innerHTML = html;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
}

// --- UPGRADED INQUIRY FLOW ---

// 1. Opens the form instead of going straight to WhatsApp
function contactWhatsApp(projectName) {
    document.getElementById('inquiryProject').value = projectName;
    document.getElementById('inquiryProjectName').innerText = "Interested in: " + projectName;
    document.getElementById('inquiryModal').style.display = "block";
}

// 2. Closes the form and resets the textarea height
function closeInquiry() {
    document.getElementById('inquiryModal').style.display = "none";
    
    // Reset the textarea back to its default size when closed
    const detailsBox = document.getElementById('inqDetails');
    if (detailsBox) {
        detailsBox.style.height = 'auto';
    }
}

// 3. Formats the data and sends the text
function sendInquiry() {
    const project = document.getElementById('inquiryProject').value;
    const name = document.getElementById('inqName').value.trim();
    const role = document.getElementById('inqRole').value;
    const date = document.getElementById('inqDate').value;
    const details = document.getElementById('inqDetails').value.trim();

    // Basic validation so you don't get blank names
    if (!name) {
        alert("Please enter your name before proceeding.");
        return;
    }

    // Build the professional message layout
    let message = `Hello FutureTech, I want to inquire about a project.\n\n`;
    message += `*Project:* ${project}\n`;
    message += `*Name:* ${name}\n`;
    message += `*Role:* ${role}\n`;
    
    if (date) {
        // Formats the date nicely if they selected one
        message += `*Deadline:* ${new Date(date).toLocaleDateString('en-IN')}\n`;
    }
    
    if (details) {
        message += `*Requirements:* ${details}\n`;
    }

    // Encode and open WhatsApp
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919403560585?text=${encodedMessage}`, '_blank');
    
    // Close the modal and reset the form
    closeInquiry();
    document.getElementById('inqName').value = '';
    document.getElementById('inqDate').value = '';
    document.getElementById('inqDetails').value = '';
}

// Initial view
// This ensures that when the site first opens, the user sees the Home/Hero section
renderHome();

// 1. Handle "Enter" key press
function handleSearch(event) {
    if (event.key === 'Enter') {
        executeSearch();
    }
}

// 2. The Search Logic (Upgraded with Sorting)
function executeSearch(searchQuery = null, sortBy = 'default') {
    // If no query is passed via the sort dropdown, grab it from the input box
    const query = searchQuery !== null ? searchQuery : document.getElementById('searchInput').value.toLowerCase();
    
    if (query.trim() === "") return; // Don't search if empty

    // Search in Name, Description, and Category
    let results = projects.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.desc.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );

    // Apply Sorting
    if (results.length > 0) {
        if (sortBy === 'priceLow') results.sort((a, b) => a.price - b.price);
        if (sortBy === 'priceHigh') results.sort((a, b) => b.price - a.price);
        if (sortBy === 'popular') results.sort((a, b) => b.popularity - a.popularity);
    }

    let html = `
        <div class="category-header">
            <h2>Search Results for: "${query}"</h2>
            <p>${results.length} projects found</p>
    `;

    // Only show the Sort dropdown if we actually found results
    if (results.length > 0) {
        html += `
            <div class="sort-bar">
                <label>Sort By: </label>
                <select onchange="executeSearch('${query}', this.value)">
                       <option value="default">↕️ Sort By</option>
                       <option value="popular" ${sortBy==='popular'?'selected':''}>🔥 Trending</option>
                       <option value="priceLow" ${sortBy==='priceLow'?'selected':''}>💰 Price: Low to High</option>
                       <option value="priceHigh" ${sortBy==='priceHigh'?'selected':''}>💎 Price: High to Low</option>
                </select>
            </div>
        `;
    }

    html += `</div>`; // Close category-header

    if (results.length === 0) {
        html += `
            <div style="text-align:center; padding: 50px;">
                <h3>❌ No matches found</h3>
                <p>Try searching for different keywords or contact us for custom development.</p>
                <button onclick="renderHome()" style="margin-top:10px; padding:10px;">Back to Home</button>
            </div>
        `;
    } else {
        html += `<div class="product-grid">`;
        results.forEach(p => {
            html += `
                <div class="card">
                    <div class="media-container">
                        ${p.video && p.video.trim() !== "" ? `
                            <div class="slider-wrapper" id="slider-${p.id}">
                                <img src="${p.img}" alt="${p.name}" class="active-media" onerror="this.onerror=null; this.src='https://via.placeholder.com/250'">
                                <video src="${p.video}" class="hidden-media" controls muted></video>
                                <div class="slider-controls">
                                    <button onclick="toggleMedia(${p.id})">❮</button>
                                    <button onclick="toggleMedia(${p.id})">❯</button>
                                </div>
                            </div>
                        ` : `
                            <img src="${p.img}" alt="${p.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/250'">
                        `}
                    </div>
                    <h3>${p.name}</h3>
                    <div style="display:flex; justify-content:space-between; align-items:center; padding: 0 16px; margin-bottom: 8px;">
                        <div style="font-family:'Share Tech Mono',monospace; font-size:0.72rem; color:#888480; letter-spacing:0.08em; text-transform:uppercase;">${p.category}</div>
                        <span style="cursor:pointer; color:#888480; font-size:1rem;" onclick="shareProject('${p.name}')" title="Share Project">🔗</span>
                    </div>
                    <p>${p.desc}</p>
                    <p class="price">Starting at: ₹${p.price}</p>
                    <button onclick="contactWhatsApp('${p.name}')">Inquiry on WhatsApp</button>
                </div>
            `;
        });
        html += `</div>`;
    }

    app.innerHTML = html;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderHome() {
    // Get the top 4 most popular products to show as "Featured"
    const featuredProducts = [...projects].sort((a, b) => b.popularity - a.popularity).slice(0, 4);

    let html = `
        <section class="home-hero">
            <h1 class="brand-big">FUTURETECH</h1>
            <p class="tagline">Innovative Embedded & Robotics Solutions</p>
            <p class="price-disclaimer"><em>* Prices are flexible. We can discuss and customize according to your budget.</em></p>
            <br> 
            <p class="custom-project-highlight" style="cursor: pointer;" onclick="document.getElementById('custom-promo-section').scrollIntoView({ behavior: 'smooth' })" title="Scroll down to custom projects">💡 <strong>Have a unique idea?</strong> We build custom projects from scratch. Click here to discuss your requirements!</p>
            
            <p style="margin-top: 15px; font-size: 1rem; color: #e0e0e0; font-weight: 500;">
                ⚡ Need fast answers or hardware modifications? <span onclick="contactWhatsApp('General Inquiry')" style="color: cyan; text-decoration: underline; cursor: pointer;">Speak directly to an engineer.</span>
            </p>
            <br>
            <button class="cta-btn" onclick="document.getElementById('featured').scrollIntoView({ behavior: 'smooth' })">Explore Projects</button>
        </section>

        <section id="featured" class="home-products" style="scroll-margin-top: 175px;">
            <div style="width: 90%; max-width: 1200px; margin: 0 auto; text-align: center;">
                <h2 style="color: #ffffff; margin-bottom: 10px; margin-top: 30px;">Featured Solutions</h2>
            </div>
            <div class="mini-product-grid">
    `;

    // Loop through the featured products
    featuredProducts.forEach(p => {
        html += `
            <div class="mini-card">
                <div class="mini-media">
                    <img src="${p.img}" alt="${p.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/150'">
                </div>
                <h4>${p.name}</h4>
                <div class="mini-cat">${p.category}</div>
                <p class="price">Starting at: ₹${p.price}</p>
                <button onclick="contactWhatsApp('${p.name}')">Inquiry</button>
            </div>
        `;
    });

    html += `
            </div>
            <div style="text-align: center; margin: 28px 0 20px 0;">
                <button onclick="window.scrollTo({ top: 0, behavior: 'smooth' })" style="background: transparent; border: 1px solid var(--accent, #e85d24); color: var(--accent, #e85d24); padding: 10px 28px; font-family:'Share Tech Mono',monospace; font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; border-radius:0;">
                    ↑ Browse All Categories
                </button>
            </div>
            <div id="custom-promo-section" class="promo-split-container" style="scroll-margin-top: 180px; max-width: 1000px; margin: 40px auto 0 auto; padding: 0 5%;">
                <div class="promo-box">
                    <p class="view-all-text">⚙️ Custom Projects</p>
                    <p class="promo-desc">We build custom engineering projects tailored to your exact college or industry requirements.</p>
                    <button class="view-all-btn" onclick="openCustomModal()">Request Custom Build</button>
                </div>
                
                <div class="promo-box">
                    <p class="view-all-text">🖨️ Premium 3D Printing</p>
                    <p class="promo-desc">Need a custom part or project box? We have launched <strong>MetsInnovative.in</strong>, our dedicated second website just for 3D printing. Same team, faster service.</p>
                    <button class="view-all-btn" onclick="window.open('https://metsinnovative.in', '_blank')">Visit Our 3D Printing Site ↗</button>
                </div>
            </div>
        </section>

        <section class="deliverables-section" style="padding: 50px 5% 10px 5%; text-align: center; background: var(--panel);">
            <h2 style="color: #ffffff; margin-bottom: 10px;">What's Included in Your Project?</h2>
            <p style="color: var(--muted); margin-bottom: 40px; font-size: 1rem;">Everything you need to submit and present your project with confidence.</p>
            
            <div class="deliverables-grid">
                <div class="deliverable-card">
                    <div class="del-icon">📄</div>
                    <h4>Report & Synopsis</h4>
                    <p>Standard formatting project report and an approval-ready synopsis for your guide.</p>
                </div>
                <div class="deliverable-card">
                    <div class="del-icon">📘</div>
                    <h4>2x Black Books</h4>
                    <p>Two professionally bound hardcopies. <em>(Additional copies available on request).</em></p>
                </div>
                <div class="deliverable-card">
                    <div class="del-icon">💻</div>
                    <h4>Source Code & Circuit</h4>
                    <p>Fully commented code and clear schematics to help you prepare for your viva.</p>
                </div>
                <div class="deliverable-card">
                    <div class="del-icon">📊</div>
                    <h4>PPT Presentation</h4>
                    <p>Ready-to-present PowerPoint slides structured perfectly for your final review.</p>
                </div>
            </div>
        </section>

        <section id="about-us-section" class="home-about" style="scroll-margin-top: 170px; padding-top: 10px; padding-bottom: 15px;">
            <div class="about-content" style="max-width: 800px; margin: 0 auto; text-align: center;">
                <h2 style="margin-top: 0;">About FutureTech Automation</h2>
                <p style="font-size: 1.05rem; line-height: 1.6; margin-top: 15px;">
                     FutureTech Automation is a multidisciplinary engineering company delivering end-to-end hardware and software solutions. We specialize in Electronics, Mechatronics, IoT, and AI-driven systems. Whether you are a final-year student needing a ready-to-submit academic project or an industry professional requiring custom automation, we handle everything from circuit design to final assembly. We transform your complex ideas into reliable, real-world technology.
                </p>
            </div>
        </section>

        <section class="home-about trust-section" style="padding-top: 28px; padding-bottom: 28px;">
            <div class="about-content" style="max-width: 1000px; margin: 0 auto; text-align: center; padding: 0 5%;">
                <h2>Why Choose FutureTech?</h2>
                <div class="trust-grid">
                    <div class="trust-card">
                        <h3>🛠️ Tested Hardware</h3>
                        <p>Every kit and component is pre-tested before shipping. No faulty sensors or dead microcontrollers.</p>
                    </div>
                    <div class="trust-card">
                        <h3>💻 Code & Diagrams</h3>
                        <p>We don't just send raw hardware. You get fully commented source code and clear wiring diagrams.</p>
                    </div>
                    <div class="trust-card">
                        <h3>📞 Engineer Support</h3>
                        <p>Stuck on a bug? Get direct WhatsApp support from real engineers to help you troubleshoot your build.</p>
                    </div>
                </div>
            </div>
        </section>
    `;

    app.innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateToAbout() {
    // 1. First, render the home page content
    renderHome();

    // 2. Wait for the browser to render, then scroll
    // We use a small timeout (0ms) to push the scroll to the end of the execution queue
    setTimeout(() => {
        const aboutSection = document.querySelector('.home-about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 10);
}

function openContact() {
    document.getElementById("contactModal").style.display = "block";
}

function closeContact() {
    document.getElementById("contactModal").style.display = "none";
}

// Close any open modal if the user clicks the dark background outside the box
window.onclick = function(event) {
    let contactModal = document.getElementById("contactModal");
    let inquiryModal = document.getElementById("inquiryModal");
    let customModal = document.getElementById("customModal"); // Added new modal
    
    if (event.target == contactModal) contactModal.style.display = "none";
    if (event.target == inquiryModal) inquiryModal.style.display = "none";
    if (event.target == customModal) customModal.style.display = "none";
}


// --- MEDIA SLIDER LOGIC ---
function toggleMedia(id) {
    const wrapper = document.getElementById(`slider-${id}`);
    if (!wrapper) return;
    
    const img = wrapper.querySelector('img');
    const vid = wrapper.querySelector('video');
    
    if (img.classList.contains('active-media')) {
        // Switch to Video
        img.classList.replace('active-media', 'hidden-media');
        vid.classList.replace('hidden-media', 'active-media');
    } else {
        // Switch to Image & pause video
        vid.classList.replace('active-media', 'hidden-media');
        img.classList.replace('hidden-media', 'active-media');
        vid.pause();
    }
}

// --- SMART NOTIFICATION TRIGGER ---
// Wait 12 seconds before sliding in the helpful prompt
setTimeout(() => {
    const tooltip = document.getElementById('wa-tooltip');
    if (tooltip) {
        tooltip.classList.add('show');
    }
}, 7000);

// Function to close it if the user finds it annoying
function closeTooltip() {
    const tooltip = document.getElementById('wa-tooltip');
    if (tooltip) {
        tooltip.classList.remove('show');
    }
}

// --- TEXTAREA AUTO-RESIZE ---
function autoResize(textarea) {
    // Reset the height first so it can shrink if the user deletes text
    textarea.style.height = 'auto'; 
    // Set the height to match the scroll height of the internal text
    textarea.style.height = textarea.scrollHeight + 'px'; 
}

// --- CUSTOM PROJECT MODAL LOGIC ---

function openCustomModal() {
    document.getElementById('customModal').style.display = "block";
}

function closeCustomModal() {
    document.getElementById('customModal').style.display = "none";
    // Reset the auto-expanding textarea
    const detailsBox = document.getElementById('custDetails');
    if (detailsBox) detailsBox.style.height = 'auto';
}

function sendCustomInquiry() {
    const name = document.getElementById('custName').value.trim();
    const profession = document.getElementById('custProfession').value;
    const trade = document.getElementById('custTrade').value;
    const projectName = document.getElementById('custProjectName').value.trim();
    const date = document.getElementById('custDate').value;
    const details = document.getElementById('custDetails').value.trim();

    // Strict validation to prevent empty spam messages
    if (!name || !projectName || !details) {
        alert("Please fill in your Name, Project Name, and Details before submitting.");
        return;
    }

    // Build the WhatsApp message template
    let message = `*🚨 NEW CUSTOM PROJECT REQUEST 🚨*\n\n`;
    message += `*Name:* ${name}\n`;
    message += `*Profession:* ${profession}\n`;
    message += `*Trade:* ${trade}\n`;
    message += `*Proposed Project:* ${projectName}\n`;
    
    if (date) {
        message += `*Deadline:* ${new Date(date).toLocaleDateString('en-IN')}\n`;
    }
    
    message += `*Requirements:* ${details}\n`;

    // Encode and launch WhatsApp
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919403560585?text=${encodedMessage}`, '_blank');
    
    // Clear the form after sending
    closeCustomModal();
    document.getElementById('custName').value = '';
    document.getElementById('custProjectName').value = '';
    document.getElementById('custDate').value = '';
    document.getElementById('custDetails').value = '';
}
