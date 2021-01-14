$(document).ready(() => {

    /* MVP stuff */

    const docs = {

        pm: ["Template PSP.pptx", "Project Libre.mp4"],
        dbs: ["Lösungen Altklausuren.zip", "Lösungen Übungsblätter.zip"],
        ids: ["Lösungen Übungsblatt 1.pdf", "Prolog Beispiele.pdf"],
        est: ["Lösungsbuch.pdf", "Sammlung Übungsblätter.zip"],
        num: ["Octave Lösungen.zip", "Anleitung Octave Installation.pdf"]

    };

    $("#mvp a").click(function(event) {

        event.preventDefault();

    })

    function generateUlContent(subject) {

        if(Object.prototype.hasOwnProperty.call(docs, subject)) {

            const ul = $("#docs_" + subject);
            ul.empty();

            docs[subject].forEach(doc => {

                const li = $("<li></li>")
                const a = $("<a href='404.html' target='_blank' rel='noopener'>" + doc + "</a>");

                li.append(a);
                ul.append(li);

            })

        }

    }

    $(".unterlagen-link").click(function(event) {

        let subject = this.id.substr(2);
        generateUlContent(subject);

        this.innerHTML = this.innerHTML === "Unterlagen anzeigen" ? "Unterlagen verstecken" : "Unterlagen anzeigen";
        $("#unterlagen_" + subject).toggle();

    })

    $(".add_doc_button").change(function(e) {

        let subject = this.id.substr(8);

        if(Object.prototype.hasOwnProperty.call(docs, subject)) {

            const file = this.files[0].name;
            docs[subject].push(file);

            const ul = $("#docs_" + subject);
            const spinner = $('<div class="spinner-border text-primary" role="status"></div>');
            ul.append(spinner);

            setTimeout(() => {
                
                generateUlContent(subject);
                this.value = null;
                
            }, 1000);

        }
    
    })


    /* end MVP stuff */

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

    })


});