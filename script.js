// Initialize Icons
lucide.createIcons();

// NAVIGATION LOGIC
function showSection(sectionId) {
    console.log("Navigating to: " + sectionId);
    
    const sections = document.querySelectorAll('.view');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('animate__animated', 'animate__fadeIn');
    }
    
    window.scrollTo(0, 0);
    lucide.createIcons();
}

// CHATBOT LOGIC
function sendMessage() {
    const input = document.getElementById('user-input');
    const box = document.getElementById('chat-box');
    if (!input.value.trim()) return;

    const userMsg = document.createElement('div');
    userMsg.className = 'msg user'; // Style this in CSS
    userMsg.style.textAlign = 'right';
    userMsg.style.margin = '10px 0';
    userMsg.innerText = input.value;
    box.appendChild(userMsg);

    input.value = "";
    box.scrollTop = box.scrollHeight;

    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'msg bot';
        botMsg.style.textAlign = 'left';
        botMsg.innerText = "Medi Agent: Analyzing your input... I recommend checking your Appointment Status for a specialist visit.";
        box.appendChild(botMsg);
        box.scrollTop = box.scrollHeight;
    }, 1000);
}

// EMAIL NOTIFICATION SIMULATION
document.getElementById('file-input').addEventListener('change', function(e) {
    const fileName = e.target.files[0]?.name;
    if (fileName) {
        alert("Medi Agent is scanning " + fileName + " for anomalies...");

        setTimeout(() => {
            const container = document.getElementById('alert-container');
            container.innerHTML = `
                <div style="background: #fee2e2; border-left: 5px solid #ef4444; padding: 15px; margin-top: 20px; border-radius: 10px; color: #991b1b;">
                    <strong>CRITICAL ALERT:</strong> Abnormality detected. An automated email has been sent to your doctor.
                </div>
            `;
            
            // Pop up simulation
            if (confirm("EMAIL NOTIFICATION:\nHigh glucose detected. Would you like to view a personalized diet plan?")) {
                showSection('wellness');
            }
        }, 3000);
    }
});