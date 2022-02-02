const menuElem = document.querySelector('#menu');

function showMenu(menu) {
    // Loopa igenom menyn och för varje menyalternativ:
    // 1. Skapa en li-tagg
    // 2. I li-taggen lägg till namn och pris
    // 3. Lägg till li-taggen i menuElem (ul-taggen)
    menu.forEach((menuItem) => {
        const itemElem = document.createElement('li');
        itemElem.innerHTML = `${menuItem.title} - ${menuItem.price} kr`;
        menuElem.append(itemElem);
    });
}

async function getMenu() {
    const token = sessionStorage.getItem('token');
    console.log(token);
    const response = await fetch('http://localhost:5000/api/coffee/menu', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    console.log(data);

    if (data.success) {
        // Visa meny
        showMenu(data.menu.menu);
    } else {
        window.location.href = 'http://localhost:5000/index.html';
    }
}

getMenu();