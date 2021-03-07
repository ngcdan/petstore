<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <title>Login</title>
</head>
<body>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-sm-6 col-md-4 col-md-offset-4">
      <h1 class="text-center login-title">Sign-in</h1>
      <div class="account-wall">
        <form class="form-signin" action="/login" method="post">
          <input type="text" name="username" class="form-control" placeholder="Username" required autofocus>
          <input type="password" name="password" class="form-control" placeholder="Password" required>
          <button class="btn btn-lg btn-primary btn-block signup_btn" type="submit">
            Sign in
          </button>
        </form>
      </div>
      <a href="/register" class="text-center new-account">Create an account </a>
    </div>
  </div>
</div>
</body>
</html>