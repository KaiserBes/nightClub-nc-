document.getElementById('showForm').addEventListener('click', function () {
   const modal = document.createElement('div')
   modal.classList = 'modal'
   modal.innerHTML = `
      <div class="modal-content">
            <span class="close">&times;</span>
            <form id="emailForm">
               <label for="email">Email:</label>
               <input type="email" id="email" required>
               <br>
               <label for="name">Имя:</label>
               <input type="text" id="name" required>
               <br>
               <button class="btn__apply" type="submit">Apply</button>
            </form>
      </div>
   `;

   document.body.appendChild(modal);

   document.querySelector('.close').addEventListener('click', function () {
      modal.remove();
   });

   document.getElementById('emailForm').addEventListener('submit', function (e) {
      e.preventDefault()

      const email = document.getElementById('email').value
      const name = document.getElementById('name').value

      console.log('Email:', email)
      console.log('Имя:', name)

      sendTelegramMessage(email, name)

      modal.remove()
   })
})

function sendTelegramMessage(email, name) {
   const bot = {
      TOKEN: '6359483162:AAF2F9JX1EOipY0VHNMVpughfkV5Au4vERQ',
      chatId: '-1002042855130'
   }

   const telegramMessage = `Email: ${email}, Name: ${name}`;
   const TELEGRAM_API = `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatId}&text=${telegramMessage}`;

   fetch(TELEGRAM_API)
      .then(response => {
         if (response.ok) {
            alert("Сообщение успешно отправлено");
         } else {
            throw new Error(`HTTP ошибка! статус: ${response.status}`);
         }
      })
      .catch(error => {
         alert(`Ошибка отправки сообщения: ${error.message}`);
      });
}


const swiper = new Swiper(".mySwiper", {
   scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   slidesPerView: "auto",
   spaceBetween: 30,
   pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
   },
});

const swiperSec = new Swiper(".mySwiper-2", {
   slidesPerView: "auto",
   spaceBetween: 30,
   pagination: {
      el: ".swiper-pagination-2",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});


function showPrice(item) {
   const priceElement = document.querySelector(`.${item}-price`);

   if (priceElement.style.display === 'block') {
      priceElement.style.display = 'none';
   } else {
      const prices = document.querySelectorAll('.price');
      prices.forEach(price => price.style.display = 'none');
      priceElement.style.display = 'block';
   }
}

function performSearch() {
   const query = document.querySelector('.search-input').value;
   searchItem(query);
}

function searchItem(query) {
   const lowerQuery = query.toLowerCase();
   const items = ['whiskey', 'vodka', 'beer', 'pizza', 'burger'];

   for (const item of items) {
      if (item.includes(lowerQuery)) {
         showPrice(item);
         return;
      }
   }

   alert('Sorry, we don\'t have that food!');
}

function searchMenu() {
   var input, filter, menuItems, menuItem, i, txtValue;
   input = document.querySelector('.search-input');
   filter = input.value.toUpperCase();
   menuItems = document.getElementsByClassName('menu-item');

   for (i = 0; i < menuItems.length; i++) {
      menuItem = menuItems[i];
      txtValue = menuItem.textContent || menuItem.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
         menuItem.style.display = '';
      } else {
         menuItem.style.display = 'none';
      }
   }
}



// !!

function toggleAccordion(button) {
   const item = button.parentElement;
   const isActive = item.classList.contains('active');

   closeAllItems();

   if (!isActive) {
      item.classList.add('active');
   }
}

function closeAllItems() {
   const items = document.querySelectorAll('.accordion-item');
   items.forEach(item => item.classList.remove('active'));
}



(function () {
   var widget_id = '<script src="//code.jivo.ru/widget/ROyHdmR1IL" async></script>';
   var d = document;
   var w = window;

   function l() {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = '//code.jivosite.com/script/widget/' + widget_id;
      var ss = document.getElementsByTagName('script')[0];
      ss.parentNode.insertBefore(s, ss);
   }

   if (d.readyState == 'complete') {
      l();
   } else {
      if (w.attachEvent) {
         w.attachEvent('onload', l);
      } else {
         w.addEventListener('load', l, false);
      }
   }
})();







