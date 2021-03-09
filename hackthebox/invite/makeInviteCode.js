function makeInviteCode() {
    $.ajax({ type: "POST", dataType: "json", url: 'https://www.hackthebox.eu/api/invite/how/to/generate', 
    success: function (a) { console.log(a) }, 
    error: function (a) { console.log(a) } 
    }) 
};
makeInviteCode();

/* Make HTTP POST Request to url https://www.hackthebox.eu/api/invite/how/to/generate */