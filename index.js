let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)

let h3 = document.createElement('h3')
h3.textContent = 'Description:'
dogDetails.append(h3)

let p = document.createElement('p')
p.textContent = 'This gentle dog is aloof toward her owner, and never comes when called.  She always acts as though any stranger she meets will harm her, and dislikes other animals.'
dogDetails.append(p);

let header3 = document.createElement('h3')
// header3.setAttribute('class', 'header-3')
header3.textContent = 'Feeding Times:'
dogDetails.append(header3)

let ul = document.createElement('ul');
// ul.setAttribute('class', 'ul')
dogDetails.append(ul);

let li = document.createElement('li')
li.textContent = '9:00 am'
ul.append(li)

let li2 = document.createElement('li')
li2.textContent = '12:00 pm'
ul.append(li2)

let li3 = document.createElement('li')
li3.textContent = '5:00 pm'
ul.append(li3)
