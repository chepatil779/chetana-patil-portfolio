PORTFOLIO - KAHAN KYA BADLNA HAI
=================================
Files:
  index.html  -> saara content (text, links, sections)
  style.css   -> colors, layout, design
  script.js   -> typing animation, particles, contact form
  images/profile.jpg -> tumhari photo (nayi photo isi naam se replace kar do)

Chalane ke liye: index.html par double-click karo (browser me khulega).
VS Code me "Live Server" extension se live preview milta hai.

index.html me badalne wali cheezein (Ctrl+F se search karo):
  1. "your-email@example.com"  -> apna email (index.html me 1 jagah, script.js me 1 jagah)
  2. "+91 XXXXXXXXXX"          -> apna phone number
  3. Social icons (sidebar): GitHub, LinkedIn, Instagram, Facebook, WhatsApp ke href="#" me apne links daalo
     WhatsApp link format: https://wa.me/91XXXXXXXXXX
  4. section id="education"   -> college, university, branch, percentage, saal, internship company
  5. section id="project"     -> project ka naam, description, tags, GitHub link (href="#")
     Screenshot lagane ke liye: images/ folder me file rakho, aur
     <div class="shot">...</div> ko <div class="shot"><img src="images/project1.png" alt=""></div> se badlo
     (style.css me ".shot img{width:100%;height:100%;object-fit:cover}" add kar dena)
  6. View Resume button       -> resume.pdf folder me rakho aur id="resume" wale link me href="resume.pdf" likho
  7. Hero roles (typing)      -> script.js me roles=[...] wali line
  8. Colors                   -> style.css ke top me :root { --accent: ... }

Online daalne ke liye: GitHub par repo banao -> ye saari files upload karo -> Vercel ya GitHub Pages se deploy karo.
