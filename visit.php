<?php
// Check if the name is submitted
if(isset($_POST['name'])) {
    // Retrieve the submitted name
    $name = $_POST['name'];

    // Store the visit time and name in a cookie
    setcookie("visitor_name", $name, time() + 3600, "/");
    setcookie("visit_time", time(), time() + 3600, "/");

    // Redirect back to the page after storing the name
    header("Location: index.html");
    exit();
} else {
    echo "Name not submitted!";
}
?>
