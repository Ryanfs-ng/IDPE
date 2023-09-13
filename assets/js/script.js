function menuShow() {
    let menuMobile = document.querySelector(" .mobile-menu");
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}
var threads = [
    {   
        id: 1,
        title: "Tópico 1",
        author: "Ryan",
        date: Date.now(),
        content: "Thread content",
        comments:[
            {
                author: "Felipe",
                date: Date.now(),
                content: "Opa, tranquilo?"
            },
            {
                author: "McRafaelzin",
                date: Date.now(),
                content: "Br br, slv slv"
            }
        ]
    },
    {   
        id: 2,
        title: "Tópico 2",
        author: "Ryan",
        date: Date.now(),
        content: "Thread content 2",
        comments:[
            {
                author: "Felipe",
                date: Date.now(),
                content: "Opa, tranquilo?"
            },
            {
                author: "McRafaelzin",
                date: Date.now(),
                content: "Br br, slv slv"
            }
        ]
    }
]

var threads;
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem ('threads', JSON.stringify(defaultThreads));
}