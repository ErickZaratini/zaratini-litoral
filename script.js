document.addEventListener("DOMContentLoaded", function () {

    /* ================= MENU ================= */

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", function () {

            navMenu.classList.toggle("active");

            if (navMenu.classList.contains("active")) {
                menuBtn.textContent = "✕";
            } else {
                menuBtn.textContent = "☰";
            }

        });


        const menuLinks = navMenu.querySelectorAll("a");

        menuLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("active");

                menuBtn.textContent = "☰";

            });

        });

    }


    /* ================= HEADER ================= */

    const header = document.getElementById("header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });


    /* ================= FAQ ================= */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function (item) {

        const question =
            item.querySelector(".faq-question");

        const answer =
            item.querySelector(".faq-answer");


        question.addEventListener("click", function () {

            const isOpen =
                item.classList.contains("active");


            faqItems.forEach(function (otherItem) {

                otherItem.classList.remove("active");

                const otherAnswer =
                    otherItem.querySelector(".faq-answer");

                if (otherAnswer) {
                    otherAnswer.style.maxHeight = null;
                }

            });


            if (!isOpen) {

                item.classList.add("active");

                answer.style.maxHeight =
                    answer.scrollHeight + "px";

            }

        });

    });


    /* ================= LINKS DE COMPRA ================= */

    const buyButtons =
        document.querySelectorAll(".buy-button");


    buyButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const link =
                button.getAttribute("href");


            if (
                !link ||
                link === "#" ||
                link.indexOf("SEU_LINK") === 0
            ) {

                event.preventDefault();

                alert(
                    "🚀 O link de pagamento será configurado nesta etapa."
                );

            }

        });

    });


    /* ================= SCROLL SUAVE ================= */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');


    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth"
            });

        });

    });


    console.log(
        "🌊 Zaratini Litoral carregado corretamente!"
    );

});