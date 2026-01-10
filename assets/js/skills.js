document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
});

function renderSkills() {
  const techStack = [
    {
      category: "Languages & Databases",
      icon: "fa-code",
      items: ["Python", "Java", "PHP", "TypeScript", "JavaScript", "jQuery", "MySQL", "MongoDB", "Firebase"]
    },
    {
      category: "Libraries & Frameworks",
      icon: "fa-globe",
      items: ["React", "Next.js", "Bootstrap", "Tailwind CSS", "Swiper.js", "Morph SVG", "GSAP", "AOS"]
    },
    {
      category: "Content Management Systems",
      icon: "fa-database",
      items: ["WordPress | Themes | Plugins | ACF", "Custom CMS", "Shopify"]
    },
    {
      category: "Version Control & Deployment",
      icon: "fa-cloud",
      items: ["Git", "GitHub", "GitLab CI/CD", "cPanel", "Docker"]
    },
    {
      category: "Other",
      icon: "fa-brain",
      items: ["Responsive Design", "SEO", "Technical Documentation", "Client Support"]
    },
    {
      category: "AI & Data",
      icon: "fa-brain",
      items: ["Machine Learning", "XAI", "Deep Learning", "Computer Vision"]
    }
  ];

  const container = document.getElementById("tech-stack-container");
  if (!container) return;

  techStack.forEach(section => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4 d-flex";

    const badges = section.items.map(item => `
      <div class="tech-badge">
        <img src="https://www.google.com/s2/favicons?sz=64&domain=${item.toLowerCase().replace(/\s/g, "")}.com"
             class="tech-icon"
             onerror="this.src='https://cdn-icons-png.flaticon.com/512/711/711284.png'">
        ${item}
      </div>
    `).join("");

    col.innerHTML = `
      <div class="tech-card h-100">
        <div class="category-title">
          <i class="fa-solid ${section.icon}"></i>
          ${section.category}
        </div>
        <div class="badge-container">${badges}</div>
      </div>
    `;

    container.appendChild(col);
  });
}
