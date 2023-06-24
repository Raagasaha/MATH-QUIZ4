function addUser()
{
    player1_name=document.getElementById("player1_names").value;
    player2_name=document.getElementById("player2_names").value;

    localStorage.setItem("player1_names", player1_name);
    localStorage.setItem("player2_names", player2_name);

    window.location = "quiz_game_page.html"
}


