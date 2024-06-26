// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const goToFeedButton = document.querySelector('.buttons button:last-of-type');
    if (goToFeedButton) {
        goToFeedButton.addEventListener('click', function () {
            window.location.href = 'feed.html';
        });
    }
});

if (document.querySelector('.news-detail')) {
    const urlParams = new URLSearchParams(window.location.search);
    const newsId = urlParams.get('id');

    // Sample data for news items
    const newsData = {
        1: {
            title: 'PRV Road to School',
            date: '2 days ago',
            image: 'images/road-to-school.jpg',
            description: 'WE ARE GOING TO HIGH SCHOOL! Halo para teenage syncers! Seperti tradisi tahun-tahun sebelumnya, Pekan Raya Visual kembali menghadirkan acara Road to School. Kira-kira di sekolah mana Abby akan mampir kali ini? 🤔 Pastinya kalian penasaran banget ingin melihat Abby di dunia nyata, bukan? Tunggu kedatangan Abby di sekolah-sekolah dan rasakan kehebohan serta keceriaan acara ini! Bersiaplah untuk momen seru dan kenangan tak terlupakan bersama Abby. See you when Abby see you! 🤩 #sync #pekanrayavisual #goestoschool'
        },

        2: {
            title: 'Watch a Performance from Our Local Bands!',
            date: '3 days ago',
            image: 'images/local-bands.jpeg',
            description: 'Abby is gon ROCK! 🤟 Tidak hanya akan ada pameran, talkshow, dan seminar, pekan raya ini juga akan dimeriahkan oleh guest star pembawa musik yang siap menggetarkan panggung. Mari nikmati bersama irama yang menggema dan energi yang membara saat Abby menghantarkan penampilan rock yang spektakuler. Dalam suasana penuh antusiasme dan kebersamaan, setiap detik akan menjadi momen tak terlupakan. Lets vibe together dan buat pekan raya ini menjadi kenangan terbaik! 🎵 #pekanrayavisual #PRV2023 #gigs #rock #sync'
        },

        3: {
            title: 'Submission Time has been EXTENDED!',
            date: '4 days ago',
            image: 'images/submission-extended.jpeg',
            description: 'You still have time to submit your works! Santai, tenang, dan rileks, Pekan Raya Visual memperpanjang waktu untuk submit karya. Pastikan untuk cek postingan dan guidebook submisi karya di bio yaa untuk informasi lebih lanjut. #sync #pekanrayavisual #PRV2023'
        },

        4: {
            title: 'Meet Our Guest Stars!',
            date: '2 days ago',
            image: 'images/guest-stars.jpg',
            description: 'Kenalan sama pembicara kita, yuk! Nikmati serunya diskusi, tips, dan trik bersama para pembicara kita hanya di Pekan Raya Visual Main Event. Siapkan dirimu untuk petualangan panas yang menginspirasi dengan mendaftarkan diri. 🥵 LET US COOK! 🔥 #pekanrayavisual #PRV2023 #workshopdesain #sync #seminardesain #diskusidesain'
        },

        5: {
            title: 'Read about Metropole of Audry and Metropole of Liberta',
            date: '',
            image: 'images/envi.png',
            description: 'Pada tahun 1837, Kota Audri menjadi pusat bagi para penemu yang menekankan pentingnya fungsi dalam temuan mereka, menegaskan bahwa fungsi memainkan peran utama dalam dunia kreasi. Kota Liberta, di sisi lain, menjadi rumah bagi para penemu yang lebih mementingkan estetika daripada fungsi atau keamanan dalam temuan mereka. Meskipun karya-karya dari Kota Liberta dikenal karena penampilannya yang sangat memikat, sayangnya beberapa temuan tersebut memiliki risiko potensial yang dapat merusak atau bahkan mengancam lingkungan sekitar.'
        },

        6: {
            title: 'The Art of Our Amazing Mascot, Abby',
            date: '',
            image: 'images/mascot.png',
            description: '"Hihi.. mau lihat nggak aku bisa bikin apa aja?" Meet, Abby. Gadis ceria yang penuh dengan imajinasi dan suka berpetualang. Fun fact! Sebenarnya Abby tuh robot sintetis yang bisa merasakan emosi layaknya manusia. Karena itu pun, ia dapat menyalurkan "rasa" lewat karyanya. Jika disatukan dengan rekannya Cheshire, Abby bisa membuat suatu objek dari ketiadaan, lho. Keren kan? Walaupun begitu, bentuk yang bisa mereka ciptain tuh punya kekurangan. Yaitu nggak benar-benar solid dan hanya berbentuk sketsa.'
        },

        7: {
            title: 'What to submit?',
            date: '',
            image: 'images/submit.jpeg',
            description: 'Halo Syncers! Abby mau ngumumin sesuatu nih! Abby percaya kalo setiap orang punya kelebihan dan kemampuan yang berbeda satu sama lain. Makanya Abby pengeennn banget liat maha karya terbaik kalian ✨ Karya yang bisa kalian kasih ke Abby bisa berupa Poster, Iklan Layanan, Fotografi, Visual Identity Poster (Guideline), Type Specimen, Instalasi Tematik dan Audio Visual. Jadi jangan lewatin kesampatan ini ya! Abby bakal seneng banget akan antusias para Syncers !'
        },
        // Add more news items here
    };

    if (newsData[newsId]) {
        document.getElementById('news-title').innerText = newsData[newsId].title;
        document.getElementById('news-date').innerText = newsData[newsId].date;
        document.getElementById('news-image').src = newsData[newsId].image;
        document.getElementById('news-description').innerText = newsData[newsId].description;
    } else {
        document.getElementById('news-title').innerText = 'News Not Found';
        document.getElementById('news-description').innerText = 'The news item you are looking for does not exist.';
    }
}