

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
            $("#subscribe_modal").modal();
        }
    })

});