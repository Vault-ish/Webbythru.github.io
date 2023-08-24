/*   
  Project by Vault-ish
  https://github.com/Vault-ish/webbythru.github.io
*/
$(function(){
    var link = $('#link').val();
    var username = $('#username').val();
    var content = $('#content').val();
    var avatar = $('#avatar').val();
    
    if (link == null || link == "" || content == null || content == "") {
        alert("Please Fill Out All The Fields");
        return false;
    }

    $.post(link, {"content": content, "username": username, "avatar_url": avatar});
});
