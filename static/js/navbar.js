// active link
for (var i = 0; i < document.links.length; i++) {
    if (document.URL.includes(document.links[i].href)) {
        document.links[i].className += " uk-active";
    };
};