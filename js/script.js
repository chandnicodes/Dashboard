$(document).ready(function () {
    console.log('js working..')

    $('.hemburger').click(function () {
        console.log('click')
        $('.sidebar_menu').toggle()
    })

    const leftSideMenu = [
        {
            nav: 'Dashboard',
            url: 'index.html'
        },
        {
            nav: 'My Task',
            url: 'mytask.html'
        },
        {
            nav: 'My Projects',
            url: 'myprojects.html'
        },
        {
            nav: 'History Data',
            url: 'history.html'
        },
        {
            nav: 'Invoice',
            url: 'invoice.html'
        },
        {
            nav: 'Help',
            url: 'help.html'
        },
    ]
    console.log(leftSideMenu)

    leftSideMenu.forEach(function (i) {
        $('#left_menu').append(`
        <div class="sb list">
            <a href="`+ i.url + `">` + i.nav + `</a>
        </div>
    `)
    })



    setTimeout(function () {
        if (window.location.pathname == '/coolboot-task/index.html') {

            console.log('home page')
            let dashboardMenu = $('.sb.list')[0];
            $(dashboardMenu).addClass('active')
            $('.active').prepend(`
                <div class="active_box"></div>
                <div id="curved-corner-topright"></div>
                <div id="curved-corner-bottomright"></div>
            `)

        } else if (window.location.pathname == '/coolboot-task/mytask.html') {

            console.log('my task page')
            let projectMenu = $('.sb.list')[1];
            $(projectMenu).addClass('active')
            $('.active').prepend(`
                <div class="active_box"></div>
                <div id="curved-corner-topright"></div>
                <div id="curved-corner-bottomright"></div>
            `)

        } else if (window.location.pathname == '/coolboot-task/myprojects.html') {
            console.log('my projects page')
            let projectMenu = $('.sb.list')[2];
            $(projectMenu).addClass('active')
            $('.active').prepend(`
                <div class="active_box"></div>
                <div id="curved-corner-topright"></div>
                <div id="curved-corner-bottomright"></div>
            `)

        }
        else if (window.location.pathname == '/coolboot-task/history.html') {
            console.log('History Page')
            let projectMenu = $('.sb.list')[3];
            $(projectMenu).addClass('active')
            $('.active').prepend(`
                <div class="active_box"></div>
                <div id="curved-corner-topright"></div>
                <div id="curved-corner-bottomright"></div>
            `)

        }
        else if (window.location.pathname == '/coolboot-task/invoice.html') {
            console.log('Invoice page')
            let projectMenu = $('.sb.list')[4];
            $(projectMenu).addClass('active')
            $('.active').prepend(`
                <div class="active_box"></div>
                <div id="curved-corner-topright"></div>
                <div id="curved-corner-bottomright"></div>
            `)

        }
        else if (window.location.pathname == '/coolboot-task/help.html') {
            console.log('help page')
            let projectMenu = $('.sb.list')[5];
            $(projectMenu).addClass('active')
            $('.active').prepend(`
                <div class="active_box"></div>
                <div id="curved-corner-topright"></div>
                <div id="curved-corner-bottomright"></div>
            `)

        }
        else {

            // defult dashboard active
            let dashboardMenu = $('.sb.list')[0];
            $(dashboardMenu).addClass('active')
            $('.active').prepend(`
                <div class="active_box"></div>
                <div id="curved-corner-topright"></div>
                <div id="curved-corner-bottomright"></div>
            `)

        }

    }, 200)

})
