<?php
$insert=false;
if(isset($_POST['name'])){
    //Set connection variables
   
    $server="localhost";
    $username="root";
    $password="";
    // Create a database connection
    $con = mysqli_connect($server,$username,$password);
    //Check for connection success
    if(!$con){
        die("connection to this database failed due to ".mysqli_connect_error());
    }
    //echo "Sucess connecting to the db";

    // Collect post variables 
    $name = $_POST['name'];
    $age = $_POST['age'];
    $gender = $_POST['gender'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $desc = $_POST['desc'];
    $sql="INSERT INTO `trip`.`trip` ( `name`, `age`, `gender`, `mail`, `phone`, `other information`, `dt`) VALUES ( '$name', '$age',
    '$gender','$email','$phone', '$desc', current_timestamp());";
    //echo $sql;

    //Execute the query
    if($con->query($sql)==true){
       // echo "Sucessfully inserted";

       // Flag for successful insertion
       $insert = true;
    }
    else{
        echo "ERROR :$sql <br> $con->error";

    }

    //Close the database connection 
    $con->close();
}    

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>welcome to Travel form</title>
    <link href="https://fonts.googleapis.com/css2?family=Anybody&family=Rubik+Bubbles&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <img class="bg" src="bg.jpg" alt="igit" >
    <div class="container">
        <h1>welcome to igit sarang  USA trip form</h1>
        <p>Enter your details and submit this form to conform your
        participation in the trip </p>
        <?php
        if($insert==true){
        echo"<p class='submitMsg'> thanks for submitting form we are happy to joining USA trip</p>";
        }
        
        ?>
        <form action="index.php" method="post">
            <input type="text" name="name" id="name"placeholder="enter your name">
            <input type="text" name="age" id="age"placeholder="enter your age">
            <input type="text" name="gender" id="gender"placeholder="enter your gender">
            <input type="email" name="email" id="email"placeholder="enter your  email">
            <input type="phone" name="phone" id="phone"placeholder="enter your phone">
            <textarea name="desc" id="desc" cols="30" rows="10"placeholder="Enter any other information"> </textarea>
            <button class="btn">Submit</button>



        </form>
    </div>
    <script src="index.js"></script>
    
</body>
</html>
