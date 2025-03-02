
// JavaScript for handling project details page
document.addEventListener('DOMContentLoaded', function() {
  // Get project ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');
  
  // Project data (in a real app, this would come from a database)
  const projects = [
    {
      id: 1,
      name: "E-commerce Plateforme",
      category: "Web Development",
      description: "Une plateforme e-commerce complète qui offre aux entreprises un moyen puissant de vendre leurs produits en ligne. Avec une expérience utilisateur intuitive et des fonctionnalités avancées, cette solution permet aux marchands de gérer facilement leur inventaire, leurs commandes et leurs clients.",
      challenges: "Le principal défi de ce projet était de créer un système de paiement sécurisé et conforme aux normes internationales, tout en garantissant une expérience utilisateur fluide sur tous les appareils. Nous avons également mis en place un système de gestion des stocks en temps réel pour éviter les problèmes de sur-vente.",
      client: "MarocMarket",
      date: "Janvier 2023",
      mainImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1609180878746-3ace4721f94a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Redis", "AWS"],
      projectLink: "#",
      relatedProjects: [2, 4, 6]
    },
    {
      id: 2,
      name: "Application de Livraison",
      category: "Mobile Development",
      description: "Application mobile de livraison qui connecte les restaurants, les livreurs et les clients dans une expérience transparente. La plateforme permet aux utilisateurs de commander des repas de leurs restaurants préférés et de suivre la livraison en temps réel.",
      challenges: "L'un des défis majeurs était la mise en place d'un système de géolocalisation précis qui fonctionne même dans des zones à faible connectivité. Nous avons également créé un algorithme d'attribution des commandes qui optimise les itinéraires de livraison pour réduire les délais d'attente.",
      client: "FoodExpress",
      date: "Mars 2023",
      mainImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616041042832-24543b0c29b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1531279550271-23c2a77a765c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
      ],
      technologies: ["React Native", "Firebase", "Google Maps API", "Node.js", "Express", "MongoDB"],
      projectLink: "#",
      relatedProjects: [1, 5, 3]
    },
    {
      id: 3,
      name: "Refonte UI/UX",
      category: "UI/UX Design",
      description: "Une refonte complète de l'interface utilisateur et de l'expérience utilisateur pour une application bancaire existante. Le projet visait à moderniser l'interface tout en améliorant l'accessibilité et la facilité d'utilisation pour tous les segments d'utilisateurs.",
      challenges: "Le principal défi était de créer une interface moderne et attrayante tout en respectant les normes de sécurité strictes du secteur bancaire. Nous avons également dû assurer une transition en douceur pour les utilisateurs existants, en leur permettant de s'adapter facilement aux nouvelles fonctionnalités et au nouveau design.",
      client: "BankSafe",
      date: "Mai 2023",
      mainImage: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1569946405439-8a138539969c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision", "Zeplin"],
      projectLink: "#",
      relatedProjects: [6, 1, 2]
    },
    {
      id: 4,
      name: "Système CRM Personnalisé",
      category: "Web Development",
      description: "Un système de gestion de la relation client (CRM) sur mesure, développé spécifiquement pour répondre aux besoins d'une agence immobilière. La solution permet de gérer efficacement les clients, les propriétés et les transactions, tout en fournissant des analyses détaillées et des rapports automatisés.",
      challenges: "Le défi principal était de créer un système suffisamment flexible pour s'adapter aux processus métier spécifiques de l'agence immobilière, tout en restant facile à utiliser. Nous avons également mis en place un système d'importation de données pour migrer les informations existantes sans perte de données.",
      client: "ImmoMaroc",
      date: "Juillet 2023",
      mainImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
      ],
      technologies: ["Vue.js", "Laravel", "MySQL", "TailwindCSS", "Chart.js", "Docker"],
      projectLink: "#",
      relatedProjects: [1, 3, 6]
    },
    {
      id: 5,
      name: "Application Fitness",
      category: "Mobile Development",
      description: "Une application mobile de fitness qui propose des programmes d'entraînement personnalisés, un suivi des progrès et une intégration avec les appareils connectés de santé. L'application utilise l'intelligence artificielle pour adapter les programmes d'entraînement en fonction des performances de l'utilisateur.",
      challenges: "Le défi majeur était de créer un algorithme d'IA capable d'analyser les performances des utilisateurs et d'ajuster les programmes d'entraînement en conséquence. Nous avons également mis en place un système de synchronisation robuste pour intégrer les données provenant de divers appareils connectés.",
      client: "FitTech",
      date: "Août 2023",
      mainImage: "https://images.unsplash.com/photo-1599496505304-0e7a04e964d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1502904550040-7534597429ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
      ],
      technologies: ["Flutter", "Firebase", "TensorFlow", "HealthKit", "Google Fit API", "Node.js"],
      projectLink: "#",
      relatedProjects: [2, 3, 6]
    },
    {
      id: 6,
      name: "Identité Visuelle Complete",
      category: "Design Graphique",
      description: "Une identité visuelle complète pour une startup technologique, comprenant la création du logo, la charte graphique, les supports marketing et le site web. Le projet visait à créer une identité de marque cohérente qui reflète les valeurs et la vision de l'entreprise.",
      challenges: "Le principal défi était de créer une identité visuelle qui soit à la fois moderne et intemporelle, capable de se démarquer dans un secteur technologique saturé. Nous avons travaillé en étroite collaboration avec le client pour comprendre ses valeurs et sa vision, et les traduire en éléments visuels distinctifs.",
      client: "TechVision",
      date: "Octobre 2023",
      mainImage: "https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1558050032-160f36233a07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
      ],
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Figma", "WordPress", "After Effects"],
      projectLink: "#",
      relatedProjects: [3, 1, 4]
    }
  ];
  
  // Find the selected project
  const selectedProject = projects.find(project => project.id === parseInt(projectId));
  
  if (!selectedProject) {
    // Redirect to portfolio page if project not found
    window.location.href = 'portfolio.html';
    return;
  }
  
  // Update page title and meta data
  document.title = `${selectedProject.name} - ABNA TECH`;
  
  // Update project details in the HTML
  document.getElementById('project-title').textContent = selectedProject.name;
  document.getElementById('project-subtitle').textContent = selectedProject.category;
  document.getElementById('project-category').textContent = selectedProject.category;
  document.getElementById('project-name').textContent = selectedProject.name;
  document.getElementById('project-client').textContent = selectedProject.client;
  document.getElementById('project-date').textContent = selectedProject.date;
  document.getElementById('project-description').textContent = selectedProject.description;
  document.getElementById('project-challenges').textContent = selectedProject.challenges;
  document.getElementById('project-main-image').src = selectedProject.mainImage;
  document.getElementById('project-main-image').alt = selectedProject.name;
  document.getElementById('project-link').href = selectedProject.projectLink;
  
  // Create technology list
  const techList = document.getElementById('project-technologies');
  techList.innerHTML = '';
  selectedProject.technologies.forEach(tech => {
    const li = document.createElement('li');
    li.textContent = tech;
    techList.appendChild(li);
  });
  
  // Create gallery thumbnails
  const galleryThumbs = document.getElementById('gallery-thumbs');
  galleryThumbs.innerHTML = '';
  
  selectedProject.gallery.forEach((image, index) => {
    const thumb = document.createElement('div');
    thumb.className = 'thumb';
    if (index === 0) thumb.className += ' active';
    
    const img = document.createElement('img');
    img.src = image;
    img.alt = `${selectedProject.name} - Image ${index + 1}`;
    
    thumb.appendChild(img);
    galleryThumbs.appendChild(thumb);
    
    // Add click event to change main image
    thumb.addEventListener('click', function() {
      document.getElementById('project-main-image').src = image;
      
      // Update active thumbnail
      document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Create related projects
  const relatedProjectsContainer = document.getElementById('related-projects');
  relatedProjectsContainer.innerHTML = '';
  
  selectedProject.relatedProjects.forEach(relatedId => {
    const relatedProject = projects.find(p => p.id === relatedId);
    if (relatedProject) {
      const projectElement = document.createElement('div');
      projectElement.className = 'related-project-item';
      
      projectElement.innerHTML = `
        <div class="related-project-image">
          <img src="${relatedProject.mainImage}" alt="${relatedProject.name}">
        </div>
        <div class="related-project-content">
          <h4>${relatedProject.name}</h4>
          <div class="related-project-category">${relatedProject.category}</div>
        </div>
      `;
      
      // Add click event to navigate to the related project
      projectElement.addEventListener('click', function() {
        window.location.href = `project-details.html?id=${relatedProject.id}`;
      });
      
      relatedProjectsContainer.appendChild(projectElement);
    }
  });
  
  // Initialize animations
  const animateOnScroll = () => {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .zoom-in');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  };
  
  animateOnScroll();
});
