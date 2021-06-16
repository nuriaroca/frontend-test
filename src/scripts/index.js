const addBtn = document.getElementById("addBtn");
let count = 0;

addBtn.addEventListener('click', function () {
  count++;
  const isEven = count % 2 === 0 ? true : false;

  const market = {
    icon: './svg/icon-shop.svg',
    title: 'Quickstart Marketplace',
    text: 'Launching your marketplace? Use this guide to understand the wotkflow and basic.',
    link: 'https://rockcontent.com/es/blog/marketplace/'
  }

  const crow = {
    icon: './svg/icon-crowd.svg',
    title: 'Quickstart Crowdfunding',
    text: 'Crowdfunding is a way to raise money for an individual or organization by collecting donations through family, friends, friends of friends, strangers, businesses, and more.',
    link: 'https://www.crowdfunding.com/is-crowdfunding-right-for-you/'
  }

  const textBox = isEven ? createTextBox(market) : createTextBox(crow);

  document.getElementById('box').appendChild(textBox);
})

function createTextBox(type) {
  const textBox = document.createElement('div');
  textBox.classList.add('content');
  const header = createHeader(type);
  const body = createBody(type);

  textBox.appendChild(header);
  textBox.appendChild(body);
  return textBox;
}

function createHeader(type) {
  const header = document.createElement('div');
  header.classList.add('header');

  const iconWithText = document.createElement('div');
  iconWithText.classList.add('iconWithText');

  const h3 = document.createElement('h3');
  h3.innerText = type.title;

  const icon = document.createElement('img');
  icon.classList.add('icon');
  icon.setAttribute('src', type.icon)

  iconWithText.appendChild(icon);
  iconWithText.appendChild(h3);
  header.appendChild(iconWithText);

  return header;
}

function createBody(type) {
  const body = document.createElement('div');
  body.classList.add('text');

  const paragraph = document.createElement('p');
  paragraph.innerText = type.text;

  const linkText = document.createElement('a');
  linkText.classList.add('iconWithText');
  linkText.setAttribute('href', type.link);
  linkText.setAttribute('target', '_blank');
  linkText.innerHTML = '<img class="icon" src="./svg/icon-arrow.svg" alt="arrow">' + type.title;

  body.appendChild(paragraph);
  body.appendChild(linkText);

  return body;
}