<!DOCTYPE html>
<html>
    <head>
        <title>Customer Review Form</title>
        <link rel="stylesheet" href="customerreviewformstyles.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src="aogactions.js"></script>
        <meta name="author" content="Jackson Zenisek">
    </head>
    <div class="form_disclaim" id="form_disclaim_alt">
        <div class="disclaim_main_container" id="disclaim_main_container_alt">
            <h1 class="disclaim_heading">PLEASE READ</h1>
                <br>
            <p class="disclaim_desc">Thank you for being a customer with AOG Design, we appreciate your business! You have the right to post your review with any rating that you desire based on the selection. AOG Design asks that you follow the comments rules below when writing your review:
            <ol class="rules_list" id="rules_list_alt">
                <li>No offensive language.</li>
                <br>
                <li>No offensive comments towards other posts.</li>
                <br>
                <li>No modifying your comments; colors, fonts, text size, spam etc.</li>
            </ol>
            <p class="disclaim_desc">WARNING: Failure to meet the rules will result in your review being removed from the home page.
            </p>
            <br>
                <br>
                    <p class="disclaim_accept_heading" id="disclaim_accept_heading_alt"><b>Do you accept these guidelines?</b></p>
        </p>
        <br>
            <br>
            <div class="button_options_container" id="button_options_container_alt">
                <button type="button" class="decl_button" id="decl_button_alt" onclick="no_enter()">Decline</button>
                <button type="button" class="acce_button" id="acce_button_alt" onclick="yes_enter()">Accept</button>
            </div>
            <p class="no_entry_desc" id="no_entry_desc_alt">*Sorry, you may not enter the forum page until you accept the guidelines.</p>
        </div>
    </div>
    <body class="cust_main_body"></body>
    <br>
        <br>
        <div class="intro_div" id="intro_div_alt">
        <h1 class="cust_rev_heading" id="cust_rev_heading_alt">Thank you being a customer with AOG Design!<br>Share with the community on how we did!</h1>
    <br>
        <br>
        <img class="aogdesign_logo_review_form" id="aogdesign_logo_review_form_alt" src="aogpics/aog-removebg-preview.png">
        </div>
            <br>
                <br>
                <div class="cust_outer_container" id="cust_outer_container_alt">
    <form action="" method="POST">
        <div class="cust_name_container">
        <label class="cus_fname">First name:</label>
        <br>
        <input class="fname_in" type="text" name="FName" required>
        <br>
        <label class="cus_lname" id="cus_lname_alt">Last name initial:</label>
        <br>
        <input class="lname_in" id="lname_in_alt" type="text" name="LName" maxlength="1" required>
        <br>
        <label class="cust_rate">Your rating:</label>
        <br>
        <select class="rating_dropdown" type="select" name="Rating" required>
            <option value="&#x2605 &#x2605 &#x2605 &#x2605 &#x2605">&#x2605 &#x2605 &#x2605 &#x2605 &#x2605</option>
            <option value="&#x2605 &#x2605 &#x2605 &#x2605">&#x2605 &#x2605 &#x2605 &#x2605</option>
            <option value="&#x2605 &#x2605 &#x2605">&#x2605 &#x2605 &#x2605</option>
            <option value="&#x2605 &#x2605">&#x2605 &#x2605</option>
            <option value="&#x2605">&#x2605</option>
        </select>
        </div>
        <br>
            <br>
                <br>
                <div class="comments_main_container">
                <label class="rate_in">Your Comment (optional):</label>
        <br>
        <textarea class="comm_section" name="Comment"></textarea>
        <br>
            <br>
                <br>
        <input class="sub_button" id="sub_button_alt" type="submit" name="Submit" value="Submit">
                </div>
                </form>
                </div>
                <br>
                    <br>
                        <br>
        <?php
    if(isset($_POST["Submit"])){
        $FName = $_POST["FName"];
        $LName = $_POST["LName"];
        $Comment = $_POST["Comment"];
        $Rating = $_POST["Rating"];

        $Old = fopen("aogdesignreviewspage.html", "r+t");
        $Old_Comments = fread($Old, 100000);


        $Write = fopen("aogdesignreviewspage.html", "w+");

        $String = 
        "<link rel='stylesheet' href='customerreviewformstyles.css'><div class='comments_container'><span class='comments_names'><b>".$FName."</b></span> <span class='comments_names'><b>".$LName."</b></span><br><span class='customer_rating'>".$Rating."</span><br>
        <span class='customer_comment'>".$Comment."</span><br><span>".date("m/d/Y")."</span></div><br><br>\n".$Old_Comments;
        
        fwrite($Write, $String);
        fclose($Write);
        fclose($Old);
        echo '<script type="text/javascript">'; 
        echo 'alert("Thank you for your review!");'; 
        echo 'window.location.href = "https://v1h.670.mytemp.website/";';
        echo '</script>';
    }
    $Read = fopen("aogdesignreviewspage.html", "r+t");
    fclose($Read);

    ?>
      <?php

function test_input($data){
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>
    </form>
</html>
