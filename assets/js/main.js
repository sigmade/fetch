async function getResponse() {
    let response = await fetch('http://127.0.0.1:8000/api/customers')
    let content = await response.json();
    content = content.splice(0, 2) // вывести 2 элемента

    let list = document.querySelector('.posts')

    let key;

    for (key in content) {

        list.innerHTML += `
        <li class="post">
            <h4>${content[key].first_name +" "+ content[key].last_name}</h4>
            <p>${content[key].email}</p>
        </li>
        `
    }

}

getResponse()
