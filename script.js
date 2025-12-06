document.addEventListener('DOMContentLoaded', () => {
    
    // --- Playlist Data ---
    const playlists = [
        {
            title: "Meditation",
            category: "Mindfulness",
            desc: "Guided sessions to calm your mind and center your thoughts.",
            url: "https://www.youtube.com/playlist?list=PLaeZNCn-A_-ZqZDhlWH6IXupHY1TJ4Ayb",
            image: "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Yoga Flows",
            category: "Movement",
            desc: "Restore balance and flexibility with these curated yoga routines.",
            url: "https://www.youtube.com/playlist?list=PLui6Eyny-UzzWwB4h9y7jAzLbeuCUczAl",
            image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Daily Workout",
            category: "Fitness",
            desc: "High energy routines to build strength and endurance.",
            url: "https://www.youtube.com/playlist?list=PLIn3nS9mJKxnpffRDh6olCORLjj69qt70",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Sleep Music",
            category: "Relaxation",
            desc: "Deep, ambient soundscapes to help you drift into restful sleep.",
            url: "https://www.youtube.com/playlist?list=PLo3pNg0eiPc_JHZ-1jjCYbup7_rT3CBl8",
            // UPDATED IMAGE: A calming night sky with a crescent moon
            image: "https://images.unsplash.com/photo-1530092285049-1c42085fd395"
        },
        {
            title: "Gym Phonk",
            category: "Focus & Pump",
            desc: "Aggressive beats and high tempo tracks for your heaviest lifts.",
            url: "https://www.youtube.com/playlist?list=PL3SoH6sImC4reSFT3r25nJGkfnSO4m2_V",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Healthy Recipes",
            category: "Nutrition",
            desc: "Nourish your body with simple, delicious, and healthy meals.",
            url: "https://www.youtube.com/playlist?list=PLF5klRox9Opfr74TTpnS--t-3amz73Pf9",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Stretching & Flex",
            category: "Recovery",
            desc: "Improve mobility and prevent injury with essential stretches.",
            url: "https://www.youtube.com/playlist?list=PLN99XDk2SYr4Yx4lJCSCCiMdwiD-bO7z1",
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop"
        }
    ];

    const gridContainer = document.getElementById('card-grid');

    // --- Generate Cards ---
    playlists.forEach(item => {
        const card = document.createElement('article');
        card.classList.add('card');
        
        // Added onerror handler to load a backup color if image fails again
        card.innerHTML = `
            <div class="card-img-container">
                <img src="${item.image}" 
                     alt="${item.title}" 
                     class="card-img" 
                     loading="lazy"
                     onerror="this.style.display='none'; this.parentElement.style.backgroundColor='#ccc';">
            </div>
            <div class="card-content">
                <span class="card-tag">${item.category}</span>
                <h3 class="card-title">${item.title}</h3>
                <p class="card-desc">${item.desc}</p>
                <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="card-btn">
                    <i class="fa-solid fa-play"></i> Watch Playlist
                </a>
            </div>
        `;
        
        gridContainer.appendChild(card);
    });

    // --- Dark Mode Toggle ---
    const toggleBtn = document.getElementById('theme-toggle');
    const icon = toggleBtn.querySelector('i');
    const body = document.body;

    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    toggleBtn.addEventListener('click', () => {
        if (body.hasAttribute('data-theme')) {
            body.removeAttribute('data-theme');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });
});
