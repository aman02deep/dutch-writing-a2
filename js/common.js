// Common JavaScript functions shared across all pages

// Toggle sidebar visibility with smooth transition
function toggleSidebar() {
    const sidebar = document.getElementById('task-sidebar') ||
        document.getElementById('form-sidebar') ||
        document.getElementById('nav-sidebar');

    if (sidebar) {
        sidebar.classList.toggle('collapsed');
    }
}

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Format number with leading zero
function formatNumber(num) {
    return num < 10 ? '0' + num : num;
}

// Get current date/time in Dutch format
function getDutchDateTime() {
    const now = new Date();
    const days = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
    const months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni',
        'juli', 'augustus', 'september', 'oktober', 'november', 'december'];

    return {
        day: days[now.getDay()],
        date: now.getDate(),
        month: months[now.getMonth()],
        year: now.getFullYear(),
        time: `${formatNumber(now.getHours())}:${formatNumber(now.getMinutes())}`
    };
}

// Show temporary notification
function showNotification(message, type = 'info', duration = 3000) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#2e7d32' : type === 'error' ? '#d32f2f' : '#0052cc'};
        color: white;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        font-weight: 600;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, duration);
}

// Keyboard shortcut handler
function handleKeyboardShortcuts(e) {
    // Ctrl/Cmd + L: Toggle sidebar
    if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault();
        toggleSidebar();
    }

    // Escape: Close modals
    if (e.key === 'Escape') {
        const vocabModal = document.getElementById('vocab-modal');
        if (vocabModal && vocabModal.classList.contains('active')) {
            toggleVocabModal();
        }
    }
}

// Initialize keyboard shortcuts
document.addEventListener('keydown', handleKeyboardShortcuts);

// Smooth scroll to element
function smoothScrollTo(element) {
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}

// Local storage helpers
const storage = {
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    },

    get: (key, defaultValue = null) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.error('Storage error:', e);
            return defaultValue;
        }
    },

    remove: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    },

    clear: () => {
        try {
            localStorage.clear();
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    }
};

// Add CSS for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);
