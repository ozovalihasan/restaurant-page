import mainImage from './images/contact.jpg';

export default function contactPage() {
  const content = document.getElementById('content');
  content.style.backgroundImage = `url("${mainImage}")`;

  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main-container', 'd-flex');

  const contactInformation = document.createElement('div');
  contactInformation.classList.add('contact-information', 'box');

  contactInformation.innerHTML = `
    <div>Call Now </div>
    <div>609-659-3528</div>
    <div>E-mail</div>
    <div>bestrestaurant@email.com</div>
    <div>Location</div>
    <div>
      <div>
        4932  Moonlight Drive        
      </div>
      <div>
        Camden
      </div>
      <div>
        New Jersey
      </div>
    </div>
    <div>Opening Hours</div>
    <div>
      <div>
        9am -18pm(Monday-Friday)        
      </div>
      <div>
        10am -19pm(Saturday)        
      </div>
    </div>
  `;

  mainContainer.appendChild(contactInformation);
  content.appendChild(mainContainer);
}
