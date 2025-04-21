const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const header = document.querySelector('header');
const menuBg = document.querySelector('.menu-bg');
const headerBody = document.querySelector('.header-body');
const accountBurger = document.querySelector('.account-burger');
const accountMenu = document.querySelector('.account-menu');
const accountMenuBg = document.querySelector('.account-menu-bg');



document.addEventListener('DOMContentLoaded', function () {
    if (burger){
        burger.addEventListener("click", function (e) {
            if (menu.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
        document.querySelectorAll('.menu-list a').forEach(link => {
            link.addEventListener("click", closeMenu);
        });
        menu.addEventListener("click", function (e) {
            if (menu.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        function openMenu() {
            menu.classList.add('active');
            burger.classList.add('active');
            header.classList.add('active');
            menuBg.classList.add('active');
            headerBody.classList.add('active');
            document.body.style.overflowY = 'hidden';


        }

        function closeMenu() {
            menu.classList.remove('active');
            burger.classList.remove('active');
            header.classList.remove('active');
            menuBg.classList.remove('active');
            headerBody.classList.remove('active');
            document.body.style.overflowY = 'unset';

        }
    }



    if (accountBurger){
        accountBurger.addEventListener("click", function (e) {
            if (accountMenu.classList.contains('active')) {
                closeAccountMenu();
            } else {
                openAccountMenu();
            }
        });

        accountMenuBg.addEventListener("click", function (e) {
            if (accountMenu.classList.contains('active')) {
                closeAccountMenu();
            } else {
                openAccountMenu();
            }
        });


        function openAccountMenu() {
            accountMenu.classList.add('active');
            accountBurger.classList.add('active');
            accountMenuBg.classList.add('active');
            document.body.style.overflowY = 'hidden';



        }

        function closeAccountMenu() {
            accountMenu.classList.remove('active');
            accountBurger.classList.remove('active');
            accountMenuBg.classList.remove('active');
            document.body.style.overflowY = 'unset';

        }

    }
});
















window.addEventListener('scroll', function () {
    const headerTop = document.querySelector('header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});


function toggleActiveState(item) {
    const allItems = document.querySelectorAll('.faq-item');

    allItems.forEach(otherItem => {
        if (otherItem !== item) {
            otherItem.classList.remove('active');
        }
    });

    item.classList.toggle('active');
}

document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => toggleActiveState(item));
    const icon = item.querySelector('.faq-item-icon');
    icon.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleActiveState(item);
    });
});




handleScroll();

function handleScroll() {
    const elements = document.querySelectorAll('.animation');
    elements.forEach(element => {
        const elementRect = element.getBoundingClientRect();
        const isElementVisible = elementRect.top < window.innerHeight && elementRect.bottom >= 0;

        if (isElementVisible) {
            if (!element.classList.contains('active')) {
                element.classList.add('active');
            }
        } else {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', handleScroll);








document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


document.querySelectorAll('.footer-menu-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contacts-form');
    if (!form) return;

    const inputs = form.querySelectorAll('input');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const agreeBlock = document.querySelector('.auth-agree');
    const agreeIcon = document.querySelector('.agree-icon');

    agreeBlock.addEventListener('click', () => {
        agreeIcon.classList.toggle('active');
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let isValid = true;

        inputs.forEach(input => {
            const label = input.closest('.auth-label');
            label.classList.remove('error');

            if (input.name === 'email') {
                if (!emailRegex.test(input.value.trim())) {
                    label.classList.add('error');
                    isValid = false;
                }
            } else {
                if (input.value.trim() === '') {
                    label.classList.add('error');
                    isValid = false;
                }
            }
        });

        if (!agreeIcon.classList.contains('active')) {
            alert('Вы должны согласиться с политикой конфиденциальности')
            isValid = false;
        } else {
            agreeBlock.classList.remove('error');
        }

        if (isValid) {
            alert('Форма валидна ✅');
            form.submit();
        }
    });

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const label = input.closest('.auth-label');
            label.classList.remove('error');
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.register-form');
    if (!form) return;

    const inputs = form.querySelectorAll('input');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const agreeBlock = document.querySelector('.auth-agree');
    const agreeIcon = document.querySelector('.agree-icon');

    agreeBlock.addEventListener('click', () => {
        agreeIcon.classList.toggle('active');
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let isValid = true;

        inputs.forEach(input => {
            const label = input.closest('.auth-label');
            label.classList.remove('error');

            if (input.name === 'email') {
                if (!emailRegex.test(input.value.trim())) {
                    label.classList.add('error');
                    isValid = false;
                }
            } else {
                if (input.value.trim() === '') {
                    label.classList.add('error');
                    isValid = false;
                }
            }
        });

        if (!agreeIcon.classList.contains('active')) {
            alert('Вы должны согласиться с политикой конфиденциальности')
            isValid = false;
        } else {
            agreeBlock.classList.remove('error');
        }

        if (isValid) {
            alert('Форма валидна ✅');
            form.submit();
        }
    });

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const label = input.closest('.auth-label');
            label.classList.remove('error');
        });
    });
});


const togglePasswordIcons = document.querySelectorAll('.icon-eye');

togglePasswordIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const input = icon.closest('.auth-label').querySelector('input');
        const isPassword = input.getAttribute('type') === 'password';

        input.setAttribute('type', isPassword ? 'text' : 'password');

        icon.classList.toggle('active');
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login-form');
    if (!loginForm) return;

    const inputs = loginForm.querySelectorAll('input');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        inputs.forEach(input => {
            const label = input.closest('.auth-label');
            label.classList.remove('error');

            if (input.name === 'email') {
                if (!emailRegex.test(input.value.trim())) {
                    label.classList.add('error');
                    isValid = false;
                }
            } else {
                if (input.value.trim() === '') {
                    label.classList.add('error');
                    isValid = false;
                }
            }
        });

        if (isValid) {
            alert('✅ Авторизация прошла успешно');
            loginForm.submit();
        }
    });

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const label = input.closest('.auth-label');
            label.classList.remove('error');
        });
    });


});





document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');

    if(modal){
        const closeBtn = document.getElementById('closeModalBtn');
        document.querySelectorAll('.start-free,.subscribe-now').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';

        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';

            }
        });
    }

});


document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.riddle-btn button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const riddleItem = button.closest('.riddles-item');
            const texts = riddleItem.querySelector('.riddles-item-texts');

            texts.classList.toggle('active');



            const span = button.querySelector('span');
            span.textContent = texts.classList.contains('active') ? 'Скрыть ответ' : 'Показать ответ';
        });
    });
});