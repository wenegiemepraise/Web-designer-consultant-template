<?php
// Check if the name is submitted
if(isset($_POST['name'])) {
    // Retrieve the submitted name
    $name = $_POST['name'];

    // Check if the opt-out checkbox is checked
    $optOut = isset($_POST['opt-out']) ? true : false;

    // Set expiration time for the cookie
    $expiration = time() + (365 * 24 * 60 * 60); // 1 year

    // Store the visit time and name in cookies only if user has not opted out
    if (!$optOut) {
        // Set cookies
        setcookie("visitor_name", $name, $expiration, "/");
        setcookie("visit_time", time(), $expiration, "/");
    }

    // Redirect to webpage.
    header("Location: main.html");
    
    exit();
} else {
    echo "Name not submitted!";
}
?>
