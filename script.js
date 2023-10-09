const ipAddressElement = document.getElementById('ip-address');

async function getIpAddress() {
    try {
        const response = await fetch('https://api64.ipify.org?format=json');
        const data = await response.json();
        ipAddressElement.textContent = data.ip;
    } catch (error) {
        console.error('Error fetching IP address:', error);
        ipAddressElement.textContent = 'Error fetching IP address';
    }
}

getIpAddress();
