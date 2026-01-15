const { createApp } = Vue;

createApp({
    data() {
        return {
            // Cover page data
            showMainContent: false,
            coverTitle: 'Welcome!',
            coverMessage: 'Click the button to enter the main site.',
            buttonText: 'Enter',
            
            // Header data
            name: 'ALIJAH MIGUEL FAMA',
            subtitle: 'PERSONNEL_RECORD // ID: #2024-◻️◻️◻️◻️◻️◻️',
            status: 'UNKNOWN',
            statusOptions: ['UNKNOWN', 'ONLINE', 'OFFLINE', 'ENGAGED', 'AWAY'],
            currentStatusIndex: 0,
            
            // Profile icon data
            profileIcon: '◢◤',
            profileIcons: ['◢◤', '◉', '◈', '◆', '▣', '⬢'],
            currentIconIndex: 0,
            
            // Profile information
            profile: {
                sex: 'Male',
                dob: '◻️◻️/◻️◻️/◻️◻️◻️◻️',
                course: 'Computer Science: Cybersecurity',
                section: 'SF-241',
                education: [
                    'International Philippine School in Jeddah 2012 - 2022',
                    'Mapua Institute of Technology 2022 - 2024',
                    'Asia Pacific College 2024 - Present'
                ]
            },
            
            // Skills with reactive levels
            skills: [
                { name: 'Forensics, Analysis, and Reconnaissance', level: 84 },
                { name: 'Designing and Planning', level: 72 },
                { name: 'Debugging', level: 70 },
                { name: 'Programming', level: 63 }
            ],
            
            // Experience list
            experiences: [
                'Basic Knowledge in Python and Java',
                'Linux Fundamentals',
                'Basic SQL',
                'Google Dorking',
                'Basic Frontend Programming'
            ],
            
            // Hobbies list
            hobbies: [
                'Weapon-based Martial Systems (German and Italian Longsword, Kali, and Polish Sabre)',
                'Gaming (Strategy, Story-based RPG, Hack\'n\'Slash, Fighting Games)',
                'Reading and Writing (Horror and Cyberpunk)',
                'Philosophy',
                'Penetration Testing and Bug Hunting'
            ],
            
            // Contact links
            contactLinks: [
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/miguel-fama-949555323/?trk=public-profile-join-page' },
                { name: 'UNAVAILABLE', url: '#' },
                { name: 'Resources', url: 'https://avfama.github.io/webprog-sf241-vuejs/introduction/resources/res.html' },
                { name: 'REDACTED', url: '#' }
            ],
            
            // Footer text
            footerText: '© 2077 CYBERCORP INDUSTRIES // ALL RIGHTS RESERVED // UNAUTHORIZED ACCESS WILL BE PROSECUTED'
        };
    },
    methods: {
        revealPage() {
            this.showMainContent = true;
        },
        toggleStatus() {
            this.currentStatusIndex = (this.currentStatusIndex + 1) % this.statusOptions.length;
            this.status = this.statusOptions[this.currentStatusIndex];
        },
        cycleProfileIcon() {
            this.currentIconIndex = (this.currentIconIndex + 1) % this.profileIcons.length;
            this.profileIcon = this.profileIcons[this.currentIconIndex];
        },
        boostSkill(skill) {
            if (skill.level < 100) {
                skill.level = Math.min(100, skill.level + 5);
            } else {
                skill.level = 50;
            }
        }
    }
}).mount('#app');