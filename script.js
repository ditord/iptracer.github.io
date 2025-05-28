const ipAddressElement = document.getElementById('ip-address');

async function getIpAddress() {
    try {
        const response = await fetch('https://api64.ipify.org?format=json');
        const data = await response.json();
        // Create a clickable link with the IP address
        const ipLink = document.createElement('a');
        ipLink.href = `https://ipinfo.io/${data.ip}`;
        ipLink.textContent = data.ip;
        ipLink.target = '_blank'; // Opens in new tab
        // Clear existing content and append the link
        ipAddressElement.textContent = '';
        ipAddressElement.appendChild(ipLink);
    } catch (error) {
        console.error('Error fetching IP address:', error);
        ipAddressElement.textContent = 'Error fetching IP address';
    }
}

getIpAddress();
