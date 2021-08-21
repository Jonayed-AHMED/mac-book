

// Memory buttons

document.getElementById('btn-8gb').addEventListener('click', function(){ 
    const extraMemoryCost = document.getElementById('extra-memory');
    const extraMemory = extraMemoryCost.innerText;
    extraMemoryCost.innerText = 0;

})
document.getElementById('btn-16gb').addEventListener('click', function(){
    const extraMemoryCost = document.getElementById('extra-memory');
    const extraMemory = extraMemoryCost.innerText;
    extraMemoryCost.innerText = 180;

})

// Storage buttons

document.getElementById('btn-256gb').addEventListener('click', function(){
    const extraStorageCost = document.getElementById('extra-storage');
    const extraStorage = extraStorageCost.innerText;
    extraStorageCost.innerText = 0;
})
document.getElementById('btn-512gb').addEventListener('click', function(){
    const extraStorageCost = document.getElementById('extra-storage');
    const extraStorage = extraStorageCost.innerText;
    extraStorageCost.innerText = 100;
})
document.getElementById('btn-1tb').addEventListener('click', function(){
    const extraStorageCost = document.getElementById('extra-storage');
    const extraStorage = extraStorageCost.innerText;
    extraStorageCost.innerText = 180;
})

// Delivery options

document.getElementById('delivery-free').addEventListener('click', function(){
    const deliveryCost = document.getElementById('charge-fee');
    const deliveryCharge = deliveryCost.innerText;
    deliveryCost.innerText = 0;
})
document.getElementById('delivery-charge').addEventListener('click', function(){
    const deliveryCost = document.getElementById('charge-fee');
    const deliveryCharge = deliveryCost.innerText;
    deliveryCost.innerText = 20;
})

// const totalPrice = document.getElementById('total-price');
// const totalAmount = totalPrice.innerText;
// totalPrice.innerText = totalAmount + deliveryCharge;     
