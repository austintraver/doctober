const toggleMenu = () => {
  let menuIcon = document.querySelector('nav img.menu')
  if (menuIcon === null) {
    return
  }
  menuIcon.addEventListener('click', function() {
    let links = document.querySelector("nav > ul.menu");
    if (links.classList.contains('rows')) {
      links.classList.add('hide');
      links.classList.remove('rows');
    }
    else {
      links.classList.remove('hide');
      links.classList.add('rows')
    }
  })
}

document.addEventListener('DOMContentLoaded', toggleMenu)

const trimSnippets = () => {
  /* Trim any leading or trailing whitespace from
   the text content of any HTML sample elements */
  for (let node of document.querySelectorAll('samp')) {
    // node.textContent = node.textContent.trim()
    let front = /^\s*\n/
    let back = /\n\s*$/
    let text = node.textContent
    text = text.replace(front, '')
    text = text.replace(back, '')
    text = /.*\n.*/.test(text) ? text : text.trim()
    node.textContent = text
  }
}

document.addEventListener('DOMContentLoaded', trimSnippets)

