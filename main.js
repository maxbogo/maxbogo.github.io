$(document).ready(() => {

    $("#mvp a").click(function(event) {

        event.preventDefault();

    })

    $(".unterlagen-link").click(function(event) {

        let subject = this.id.substr(2);

        this.innerHTML = this.innerHTML === "Unterlagen anzeigen" ? "Unterlagen verstecken" : "Unterlagen anzeigen";
        $("#unterlagen_" + subject).toggle();

    })

    $("#email_text").keypress(function(e){
        if (e.key === 'Enter') {
            e.preventDefault();
            var email_written  = ($( "#email_text" ).val());
            var email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
            if(email.test(email_written)){
                $( "#subscribe_modal").css( {"display": "block"} );
                $( "#email_error" ).css( {"display": "none"} );
                $( "#email_text" ).val('');
           }else{
               $( "#email_error" ).css( {"display": "inline", "color": "#ca2400"} );
           }
            // $(#subscribe_modal").modal();
        }
    })

    $("#close_button").click(function (e) {
        $( "#subscribe_modal").css( {"display": "none"} );
    });



    $('#email_submit').click(function (e) {
       e.preventDefault();
       var email_written  = ($( "#email_text" ).val());
       var email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
       if(email.test(email_written)){
           $( "#subscribe_modal").css( {"display": "block"} );
           $( "#email_error" ).css( {"display": "none"} );
           $( "#email_text" ).val('');
       }else{
          $("#email_error" ).css( {"display": "inline", "color": "#ca2400"} );
       }
    });

  $(".nav-link").click(function(e) {

        var nav = $("#navbarNavDropdown");
        nav.removeClass("show");
        alert("eeeeeeee");

    })


});