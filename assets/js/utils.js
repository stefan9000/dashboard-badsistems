//Grid layout Handler
document.getElementById('grid-layout-trigger').addEventListener('click', (event) => {
    document.getElementById('grid-layout-trigger').classList.add('content__page_subheading__layout__control--active')
    document.getElementById('list-layout-trigger').classList.remove('content__page_subheading__layout__control--active')
    document.querySelector('.content__users').className = 'content__users card'
} )

//Table layout Handler
document.getElementById('list-layout-trigger').addEventListener('click', () => {
    document.getElementById('grid-layout-trigger').classList.remove('content__page_subheading__layout__control--active')
    document.getElementById('list-layout-trigger').classList.add('content__page_subheading__layout__control--active')
    document.querySelector('.content__users').className = 'content__users table'
} )

//Menu Trigger Handler
document.getElementById('menu-trigger').addEventListener('click', () => {
    const wrapper = document.getElementById('wrapper')
    if(wrapper.className ==='wrapper open-navigation') {
        wrapper.className = 'wrapper closed-navigation'
    } else {
        wrapper.className = 'wrapper open-navigation'
    }
})

//Loading user data
window.addEventListener('load', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let usersOutput = `
            <div class="content__users__single__user">
                <h4></h4>
                <h4>Name</h4>
                <h4>Username</h4>
                <h4>Adress</h4>
                <h4>Email </h4>
                <h4>Web </h4>
            </div>
            `
        users.forEach(user => {
            console.log(user);
            usersOutput += `
            <div class="content__users__single__user">
                <h4>Korisnik ${user.id}</h4>
                <span>Name</span>
                <h4>${user.name}</h4>
                <span>Username</span>
                <h4>${user.username}</h4>
                <span>Adress</span>
                <h4>${user.address.street}</h4>
                <span>Email</span>
                <h4>${user.email}</h4>
                <span>Web</span>
                <h4>${user.website} </h4>
            </div> 
            `
        })
        document.getElementById('users-list').innerHTML = usersOutput
    })
})