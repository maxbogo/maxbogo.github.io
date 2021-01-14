$(document).ready(() => {

    /* MVP stuff */

    const docs = {

        pm: ["Template PSP.pptx", "Project Libre.mp4"],
        dbs: ["Lösungen Altklausuren.zip", "Lösungen Übungsblätter.zip"],
        ids: ["Lösungen Übungsblatt 1.pdf", "Prolog Beispiele.pdf"],
        est: ["Lösungsbuch.pdf", "Sammlung Übungsblätter.zip"],
        num: ["Octave Lösungen.zip", "Anleitung Octave Installation.pdf"]

    };

    const chat = {

        pm: [

            {time: "12.01 12:42", text: "Hat irgendwer eine Ahnung wie man mit Project Libre umgeht?", user: "Barbara Finkel"},
            {time: "12.01 12:47", text: "Wenn du ein paar Minuten warten kannst kann ich dir ein schnelles Tutorial machen", user: "Katrin Schultheiss"},
            {time: "12.01 12:48", text: "Das wäre super!!!", user: "Barbara Finkel"},
            {time: "12.01 13:05", text: "Habs hochgeladen", user: "Katrin Schultheiss"},
            {time: "12.01 13:07", text: "Danke du bist die beste!", user: "Barbara Finkel"}

        ],

        dbs: [

            {time: "10.01 17:22", text: "Also ich hab mir grad eine Altklausuhr angesehen und gar nichts gecheckt. Kann mir da jemand helfen?", user: "Dieter Schulze"},
            {time: "10.01 17:25", text: "Schau dir mal die Lösungen an die schon hochgeladen wurden, vielleicht hilft dir das ja", user: "Ralph Schroeder"},
            {time: "10.01 17:28", text: "Ok gut das mach ich mal, danke für den Hinweis", user: "Dieter Schulze"},


        ],
        ids: [],
        est: [],
        num: []


    }

    $("#mvp a").click(function(event) {

        event.preventDefault();

    })

   function chatFactory(subject) {

        if(Object.prototype.hasOwnProperty.call(chat, subject)) {

            const td = $('<td colspan="4"></td>');

            if(!chat[subject].length) {

                td.text("Noch keine Nachrichten vorhanden...");
                td.append($("<hr />"));

            } else {

                chat[subject].forEach(entry => {

                    const time = $('<span class="chat-time"></span>');
                    time.text(entry.time + " | ");
    
                    const user = $("<span></span");
                    user.text(entry.user);
    
                    const msg = $('<div class="chat-content"></div>');
                    msg.text(entry.text);
    
                    td.append(time);
                    td.append(user);
                    td.append(msg);
                    td.append($("<hr />"));
    
                })

            }

            const button = $('<input type="text" class="form-control chat-user-input" placeholder="Deine Nachricht..." id="chat-user-input_' + subject + '" />');
            td.append(button);
            return td;

        }

    return $("<td></td>");

    }

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
        $("#chat-tr_" + subject).hide();
        $("#open-chat-link_" + subject).text("Chat öffnen");

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

    $(".replace-file-button").click(function(e) {

        let subject = this.id.substr(13);
        
        if(Object.prototype.hasOwnProperty.call(docs, subject)) {

            $("#add_doc_" + subject).click();

        }

    })

    $(".open-chat-link").click(function(e) {

        let subject = this.id.substr(15);

        const tr = $("#chat-tr_" + subject);

        tr.empty();
        tr.append(chatFactory(subject));

        this.innerHTML = this.innerHTML === "Chat öffnen" ? "Chat schließen" : "Chat öffnen";
        tr.toggle();
        
        $("#unterlagen_" + subject).hide();
        $("#u_" + subject).text("Unterlagen anzeigen");

    })

    $(".chat-tr").on("keypress", ".chat-user-input", function(e) {

        if(e.key === "Enter") {

            let subject = this.id.substr(16);

            let text = $(this).val();
            if(!text) return;

            let d = new Date();   
            let time = d.getDate() + "." + fixMonth((d.getMonth() + 1)) + " " + d.getHours() + ":" + d.getMinutes();

            chat[subject].push({

                time: time,
                text: text,
                user: "Max Mustermann"

            })

            const tr = $("#chat-tr_" + subject);

            tr.empty();
            tr.append(chatFactory(subject));

            $('#chat-user-input_' + subject).focus();

        }

    })

    function fixMonth(month) {

        if(month < 10) return "0" + month;
        else return month;

    }


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