const address = { street: '123 Main St', country: 'USA' };

function getAddressCity(address) {
    return address?.city || "Unknown";
}

const city = getAddressCity(address);
console.log(city); 