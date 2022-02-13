document.cookie = "username=Splender Gamer";

function setCookie(cname= splendergamer, cvalue= true, exdays= '7') {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

var myCookie = 'Cookies'.get(splendergamer);

var title = document.querySelector('h1');

if (myCookie) {
    title.classlist.add("cookie");
}
If('myCookie' === 'false') ;{
    title.classlist.remove("cookie");
}