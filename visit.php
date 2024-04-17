<?php
// Check if the name is submitted
if(isset($_POST['name'])) {
    // Retrieve the submitted name
    $name = $_POST['name'];

    // Check if the opt-out checkbox is checked
    $optOut = isset($_POST['opt-out']) ? true : false;

    // Store the visit time and name in cookies only if user has not opted out
    if (!$optOut) {
        setcookie("visitor_name", $name, time() + 3600, "/");
        setcookie("visit_time", time(), time() + 3600, "/");
    }

    // Redirect to a different page based on user's decision
    if ($optOut) {
        header("Location: main.html");
    } else {
        header("Location: main.html");
    }
    exit();
} else {
    echo "Name not submitted!";
}
?>